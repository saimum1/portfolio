import React, { useState, useEffect ,useContext } from 'react'
import axios from "axios";
import config from "../../config.jsx";
import { Link } from 'react-router-dom';
import { ThemeContext,themeStyles } from '../../Layout/ThemeContext.jsx';

const Projectpage = () => { 
  const [post, setPost] = useState(null);
   const { theme, toggleTheme } = useContext(ThemeContext);
    const styles = themeStyles[theme];
  
  const getdata = async() => {
    const response = await axios.get(`${config.apiUrl}/getdatax`, {
      params: {
        'userid': 1
      }
    });
    console.log("showing ress hero", response?.data)
    setPost(response?.data);
  }
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      duration: 500, // Reduced from 7000 for faster initial scroll
    });
    getdata();
  }, []);
  
  return (
    <div style={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
      <div style={{width:'70%' ,height:'100%',display:'flex' ,alignItems:'center',justifyContent:'center' ,flexDirection:'column',marginTop:'4.5rem',background:''}}>
                <div style={{height:'4rem'}}></div>

        <div style={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'1.5rem'}}>
          <div style={{width:'100%', flex:'1', display:'flex', justifyContent:'flex-start', flexDirection:'column', gap:'1rem'}}></div>
          
          {/* <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', transition: 'all 300ms', cursor: 'pointer' }}>
                                  {post?.filter((value) => {return value?.category === 'post'})?.map((value, index) => (
                                    <Link to={`/postpage/${value?.postid}`}>
                                      <div
                                        key={index}
                                        style={{
                                          cursor:'pointer',
                                          height: '29rem',
                                          width: '100%',
                                          display: 'flex',
                                          justifyContent: 'space-between',
                                          alignItems: 'center',
                                          flexDirection: 'column',
                                          gap: '1rem',
                                          padding: '1rem',
                                          borderRadius: '0.5rem',
                                          // backgroundColor: styles.cardBackground,
                                          boxShadow: `${styles.cardBackgroundShadow}`,
                                          transition: 'box-shadow 0.3s ease',
                                          border:'1px solid #6C757D',

                                          

                                        }}
                                         onMouseEnter={(e) => {
                                          e.currentTarget.style.boxShadow = ` ${styles.cardBackgroundHoverShadow}`;
                                        }}
                                        onMouseLeave={(e) => {
                                          e.currentTarget.style.boxShadow = ` ${styles.cardBackgroundShadow}`;
                                        }}
                                      >
                                        <div style={{ flex: 4, backgroundColor: '', height: '100%', width: '100%' }}>
                                          <div
                                         
                                            style={{
                                              flex: 4,
                                              height: '100%',
                                              width: '100%',
                                              borderRadius: '5px',
                                              border: '1px solid #999999',
                                              overflow: 'hidden',
                                                boxShadow:`${styles.imageShadow}`,
                                              overflow:'hidden'
                                            }}
                                          >
                                            <img
                                              className="boximage"
                                              src={`${value?.image_url}`}
                                              style={{
                                                height: '14rem',
                                                width: '100%',
                                                borderRadius: '5px',
                                                transition: 'transform 0.3s ease',
                                                transform: 'scale(1)',

                                              }}
                                              onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.1)';
                                              }}
                                              onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                              }}
                                              alt="Featured"
                                            />
                                          </div>
                                        </div>
                                        <span style={{ flex: 1, color: styles.text, height: '100%', width: '100%', fontSize: '1.6rem', fontWeight: '700', fontFamily: 'ui-sans-serif', textAlign: 'left' }}>
                                          {value?.title}
                                        </span>
                                        <span
                                         style={{
                                          flex: 2,
                                          color: styles.text,
                                          height: 'auto', // Changed to auto for dynamic height
                                          width: '100%',
                                          fontSize: '1rem',
                                          fontWeight: '400',
                                          fontFamily: 'ui-sans-serif',
                                          wordBreak: 'break-word', // Ensures text breaks at word boundaries
                                          overflowWrap: 'break-word', // Allows long words to wrap
                                          whiteSpace: 'normal', // Prevents text from overflowing
                                          lineHeight: '1.4', // Improves readability with consistent line spacing
                                          overflow: 'hidden', // Hides any overflow if necessary
                                          textOverflow: 'ellipsis', // Optional: adds ellipsis if text is truncated
                                        }}
                                         >
                                          {value?.description}
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
            </div>  */}
         <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', transition: 'all 300ms', cursor: 'pointer' }}>
                                    {post?.filter((value) => {return value?.category === 'post'})?.map((value, index) => (
                                      
                                        <div
                                          key={index}
                                          style={{
                                            cursor:'pointer',
                                            height: '29rem',
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            flexDirection: 'column',
                                            gap: '1rem',
                                            padding: '1rem',
                                            borderRadius: '0.5rem',
                                             height: '100%', width: '100%',
                                            // backgroundColor: styles.cardBackground,
                                            // backgroundColor: styles.cardBackground,
                                            boxShadow: `${styles.cardBackgroundShadow}`,
                                            transition: 'box-shadow 300ms ease',
                                            // backdropFilter:  'blur(13px)' ,
                                            border:'1px solid #6C757D',
                                            
                                          }}
                                          onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = ` ${styles.cardBackgroundHoverShadow}`;
                                          }}
                                          onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = ` ${styles.cardBackgroundShadow}`;
                                          }}
                                        >
            <Link to={`/postpage/${value?.postid}`}>
                                          <div style={{
                                            cursor:'pointer',
                                            // height: '29rem',
                                            // width: '100%',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            flexDirection: 'column',
                                            gap: '1rem',
                                            
                                            // padding: '1rem',
                                            
                                          }}>
                                          <div  style={{ flex: 4, backgroundColor: '', height: '100%', width: '100%' }}>
                                            <div
                                              className="box"
                                              style={{
                                                flex: 4,
                                                height: '100%',
                                                width: '100%',
                                                borderRadius: '5px',
                                                overflow: 'hidden',
                                                boxShadow:`${styles.imageShadow}`
                                                //  boxShadow:`0 2px 4px` ,
                                              }}
                                            >
                                              <img
                                                className="boximage"
                                                src={`${value?.image_url}`}
                                                style={{
                                                  height: '14rem',
                                                  width: '100%',
                                                  borderRadius: '5px',
                                                  transition: 'transform 0.3s ease',
                                                  transform: 'scale(1)',
                                                }}
                                                onMouseEnter={(e) => {
                                                  e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                  e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                                alt="Featured"
                                              />
                                            </div>
                                          </div>
                                          <span style={{ flex: 1,  color: styles.text, height: '100%', width: '100%', fontSize: '1.6rem', fontWeight: '700', fontFamily: 'ui-sans-serif', textAlign: 'left' }}>
                                            {value?.title}
                                          </span>
                                          <span 
                                            style={{
                                                    flex: 2,
                                                    color: styles.text,
                                                    height: 'auto', // Changed to auto for dynamic height
                                                    width: '100%',
                                                    fontSize: '1rem',
                                                    fontWeight: '400',
                                                    fontFamily: 'ui-sans-serif',
                                                    wordBreak: 'break-word', // Ensures text breaks at word boundaries
                                                    overflowWrap: 'break-word', // Allows long words to wrap
                                                    whiteSpace: 'normal', // Prevents text from overflowing
                                                    lineHeight: '1.4', // Improves readability with consistent line spacing
                                                    overflow: 'hidden', // Hides any overflow if necessary
                                                    textOverflow: 'ellipsis', // Optional: adds ellipsis if text is truncated
                                                  }}
                                          >
                                            {value?.description}
                                          </span>
            
                                          </div>
                                         </Link>
                                         
                                         
                                         
                                          <div style={{width:'100%',flex:1,display:'flex',justifyContent:'flex-end',alignItems:'flex-end'}}>
                                             
                                            <a href={value?.livelink} target='_blank'> <span
                                                style={{ // White button background like in the image
                                                color: styles.text, // Red text to match the theme
                                                padding: '5px 20px',
                                                borderRadius: '4px', // Rounded buttons
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                boxShadow: `${styles.imageShadow}`, 
                                                transition: 'box-shadow 300ms ease',
                                              }}
                                              onMouseEnter={(e) => {
                                               e.currentTarget.style.boxShadow = ` ${styles.cardBackgroundHoverShadow}`;
                                              }}
                                              onMouseLeave={(e) => {
                                                e.currentTarget.style.boxShadow = ` ${styles.imageShadow}`;
                                              }}
                                          >
                                                Live view
                                              </span>
                                              </a>
            
                                              <a href={value?.gitlink} target='_blank'> 
                                              <span
                                                style={{ // White button background like in the image
                                                color: styles.text, // Red text to match the theme
                                                padding: '5px 20px',
                                                borderRadius: '4px', // Rounded buttons
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                boxShadow: `${styles.imageShadow}`, 
                                                transition: 'box-shadow 300ms ease',
                                              }}
                                              onMouseEnter={(e) => {
                                               e.currentTarget.style.boxShadow = ` ${styles.cardBackgroundHoverShadow}`;
                                              }}
                                              onMouseLeave={(e) => {
                                                e.currentTarget.style.boxShadow = ` ${styles.imageShadow}`;
                                              }}
                                          >
                                                Git link
                                              </span>
                                              </a>
                                          </div>
                                        </div>
                                
                                    ))}
                                  </div> 
        </div>
        <div style={{height:'4rem'}}></div>
      </div> 
      <style jsx>
        {`
        

body::-webkit-scrollbar {
  display: none;
}


body {
  -ms-overflow-style: none;
  font-family: Inter;
}

/* Hide scrollbar for Firefox */
body {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}
            .marquee-w {
            position: relative;
            display: block;
            width: 100%;
            height: 140px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            overflow: hidden;
          }
.marquee {
  position: absolute;
  display: block;
  margin: auto auto;
  white-space: nowrap;
  overflow: hidden;
  min-width: 100%;
  height: 100%;
}
.marquee span {
  display: inline-block;
  padding-left: 100%;
  font-family: 'poppinsbold';
  text-align: center;
  -webkit-text-stroke: 1px #0055bc;
  white-space: nowrap;
  min-width: 100%;
  height: 100%;
  line-height: 140px;
  font-size: 4rem;
  animation: marquee 12s linear infinite;
}


.boxparent{
  transition:all 300ms;
}

.boxparent:hover{
  box-shadow:2px 2px 15px  #0055bc;
  transition:all 300ms;
}
.box{
  transition:all 300ms;
  overflow:hidden;

}

.box:hover{
  box-shadow:1px 1px 10px solid  #999990;
  transition:all 300ms;
  

}


.imaghover{
  transition:all 300ms;
}

.imaghover:hover{
  transform:scale(1.2);
  transition:all 300ms;
}

.boximage{
  transition:all 500ms;

  

}
.boximage:hover{
  transform:scale(.5);
  transition:all 300ms;
  box-shadow:1px 1px 15px #999990;
  transition:all 500ms;
}
.marquee2 span {
  animation-delay: 5s;
}
@keyframes marquee {
  0% {
      transform: translate(0, 0);
  }
  100% {
      transform: translate(-100%, 0);
  }
}




          .action-button:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
            background-color: #f8f8f8;
          }

          .action-button:active {
            transform: scale(0.95);
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
            background-color: #e0e0e0;
            transition: transform 0.1s, box-shadow 0.1s, background-color 0.1s;
          }


  @media (max-width: 768px) {
          .hero-container {
            flex-direction: column;
            padding: 1rem;
          }
          .hero-text {
            align-items: center;
            text-align: center;
          }
          .hero-image {
            justify-content: center;
            margin-top: 1rem;
          }
          .hero-grid {
            grid-template-columns: 1fr;
          }
          p {
            font-size: 1.2rem !important;
          }
          span {
            font-size: 1.5rem !important;
          }
          .action-button {
            margin: 0.5rem 0;
            padding: 8px 16px;
            font-size: 14px;
          }
          img[alt='Profile'] {
            width: 70%;
            margin: 0 auto;
          }
          div[style*='gridTemplateColumns'] {
            grid-template-columns: 1fr;
          }
          div[style*='height: 28rem'] {
            height: auto;
            min-height: 20rem;
          }
          div[style*='height: 17rem'] img {
            height: 12rem;
          }
          div[style*='height: 12rem'] img {
            height: 10rem;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-container {
            padding: 1.5rem;
          }
          .hero-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          p {
            font-size: 1.5rem !important;
          }
          span {
            font-size: 2rem !important;
          }
          .action-button {
            padding: 10px 18px;
            font-size: 15px;
          }
          div[style*='height: 28rem'] {
            height: auto;
            min-height: 22rem;
          }
          div[style*='height: 17rem'] img {
            height: 14rem;
          }
          div[style*='height: 12rem'] img {
            height: 11rem;
          }
        }

        `}
      </style>
    </div>
  )
}

export default Projectpage