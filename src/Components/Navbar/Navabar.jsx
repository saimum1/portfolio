



import React, { useState, useEffect, useContext } from 'react';
import { useAuth } from '../../Context/AuthInfo.jsx';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../config.jsx';
import { ThemeContext,themeStyles } from '../../Layout/ThemeContext.jsx';
// import { ThemeContext, themeStyles } from './ThemeContext.jsx';

const Navbar = () => {
  const { userId, logout } = useAuth();
  const { theme, toggleTheme ,setTheme} = useContext(ThemeContext);
  const [clicked, setClicked] = useState(false);
  const [clickedItem, setClickedItem] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const navigate = useNavigate();
  const [hasShadow, setHasShadow] = useState(false);
  const styles = themeStyles[theme];

  const redirectToPage = (item, route) => {
    setClickedItem(item);
    navigate(route);
  };

  const [showThemeTooltip, setShowThemeTooltip] = useState(true);


  const itemList = [
    { item: 'Projects', route: '/projects' },
    { item: 'Blog', route: '/blogs' },
    { item: 'Resume', route: '/' },
  ];

  const getData = async () => {
    try {
      const response = await axios.get(`${config.apiUrl}/userdata`);
      const data = response.data;
      console.log("respondedata",response)
      if (data) {
        setResumeLink(data?.profile[0]?.linkurlcv);
        setLogoUrl(data?.profile[0]?.logourl);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setHasShadow(scrollTop > 0);
    };

    //  const hasSeenTooltip = localStorage.getItem('hasSeenThemeTooltip');
    //   if (!hasSeenTooltip) {
    //     setShowThemeTooltip(true);
    //     localStorage.setItem('hasSeenThemeTooltip', 'false');
    //     // Auto-hide tooltip after 5 seconds
    //     setTimeout(() => setShowThemeTooltip(true), 5000);
    //   }


   
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);





  return (
    <div
      className={`navbar ${hasShadow ? 'shadow' : ''}`}
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        zIndex: 999,
        // backgroundColor: styles.navbarBackground,
        transition: 'all 0.4s ease',
        backdropFilter: hasShadow ? 'blur(3px)' : 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '70%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <Link to="/" onClick={() => setClickedItem('')}>
            <p
              style={{
                fontSize: '1.5rem',
                lineHeight: '1.25rem',
                fontWeight: '700',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                transition: 'all 0.6s ease',
                width: hasShadow ? '6rem' : '8rem',
              }}
            >
              <img src={logoUrl || '/logo-placeholder.svg'} alt="logo" />
            </p>
          </Link>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            gap: '3%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            color: styles.textSecondary,
            fontWeight: '700',
          }}
        >
          {itemList.map((i) => (
            <span
              key={i.item}
              style={{
                color:styles.text,
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: '20px',
                transition: 'all 0.4s ease',
                backgroundColor: clickedItem === i.item ? styles.hoverBackground : 'transparent',
                textShadow: '1px 1px 2px rgba(224, 217, 217, 0.3)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) =>(e.currentTarget.style.transform = 'scale(1)')}
              onClick={() => redirectToPage(i.item, i.route)}
            >
              {i.item !== 'Resume' ? (
                i.item
              ) : (
                <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                  {i.item}
                </a>
              )}
            </span>
          ))}
          <button
            onClick={toggleTheme}
            style={{
              padding: '8px',
              borderRadius: '50%',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.hoverBackground)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '24px', height: '24px', fill: 'none', stroke: styles.text }}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '24px', height: '24px', fill: 'none', stroke: styles.text }}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
                 
        </div>



      </div>
      <style>
        {`
          .navbar {
            height: 5rem;
            transition: all 0.4s ease;
          }
          .shadow {
            height: 3.5rem;
            box-shadow: 0 2px 4px ${styles.navbarShadow};
            // backdrop-filter: blur(8px);
          }
          .boximage {
            transition: all 0.5s ease;
          }
          .boximage:hover {
            transform: scale(1.3);
            box-shadow: 1px 1px 15px ${styles.navbarShadow};
            transition: all 0.3s ease;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
          button:hover {
            background-color: ${styles.hoverBackground};
          }
          svg {
            stroke: ${styles.text};
          }


        `}
      </style>
    </div>
  );
};

export default Navbar;




