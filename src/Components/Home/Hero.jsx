import React,{useState,useEffect} from 'react'
import pcs from '../../assets/static/px.png'
import axios from "axios";
import config from "../../config.jsx";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
const Hero = () => {

  const navigate = useNavigate();
  const [data,setdata]=useState([])
  const [mail, settmail] = useState('');
  const [number, setnumber] = useState('');
  const [items, setItems] = useState([]);
  const getdata=async()=>{
    const response = await axios.get(`${config.apiUrl}/getdatax`,{
      params:{
        'userid':1
      }
    });
    console.log("showing ress hero",response?.data)
    setdata(response?.data)
  }

   const getdata2=async()=>{

      try {
        const response = await axios.get(`${config.apiUrl}/userdata`);
        const data = await response.data;
        console.log("ssda342fa",data)
        if (data) {
            settmail(data?.profile[0]?.titlefirst);
            setnumber(data?.profile[0]?.titlesecond)
        } 
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error
    }
    }
  

  useEffect(() => {
   
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      duration: 7000, 
       // Use smooth scrolling behavior
    });
    getdata()
    getdata2()

    const handleKeyDown = (event) => {
      if (event.shiftKey && event.key === "D") {
          navigate("/dashboard");
      }
  };

  document.addEventListener("keydown", handleKeyDown);

  return () => {
      document.removeEventListener("keydown", handleKeyDown);
  };
  }, [navigate])


 const handleHireMeClick = () => { 
    const email = mail; // Replace with your actual email
    const subject = 'Hiring Inquiry';
    const body = 'Hello Rakibul, I am interested in hiring you for a project.';
    const gmailLink = `googlegmail:///co?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const fallbackLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Attempt to open the Gmail app
    const start = Date.now();
    window.location.href = gmailLink;

    // Fallback to mailto (default email client or web) if Gmail app doesn't open within 2 seconds
    setTimeout(() => {
      if (Date.now() - start < 2100) {
        window.location.href = fallbackLink;
      }
    }, 2000);
  };
  // Function to handle "Contact Me" button click
  const handleContactMeClick = () => {
    const phoneNumber = number; // Replace with your actual phone number in international format
    const message = 'Hello Rakibul, I would like to discuss a potential collaboration.';
    const whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    const fallbackLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open a new blank window
    const newWindow = window.open('about:blank', '_blank');
    if (newWindow) {
      // Attempt to open the WhatsApp app in the new window
      const start = Date.now();
      newWindow.location.href = whatsappLink;

      // Fallback to web version if the app doesn't open within 2 seconds
      setTimeout(() => {
        if (Date.now() - start < 2100) {
          newWindow.location.href = fallbackLink;
        }
      }, 2000);
    } else {
      // Fallback if new window fails to open (e.g., popup blocker)
      window.location.href = fallbackLink;
    }
  };



  
  return (
    <div style={{width:'100%' ,height:'100%',display:'flex' ,alignItems:'center',justifyContent:'center' ,flexDirection:'column'}}>

              <div style={{width:'70%' ,height:'100%',display:'flex' ,alignItems:'center',justifyContent:'center' ,flexDirection:'column',marginTop:'4.5rem',background:''}}>


                <div style={{
                  width: '100%',
                  height: '100%', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                  borderRadius: '20px', 
                  paddingTop:'5rem'
                }}>
             
                  <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    alignItems: 'flex-start',
                    color: '#6C757D',
                  }}>
                    <p style={{
                      fontSize: '24px', 
                      margin: '0 0 10px 0', 
                      fontWeight: '300',
                    }}>
                      I'm
                    </p>
                    <p style={{
                      fontSize: '48px', 
                      margin: '0 0 10px 0',
                      fontWeight: '700',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                    }}>
                      Rakibul Hassan Saimum
                    </p>
                    <p style={{
                      fontSize: '24px', // Job title size
                      margin: '0 0 10px 0',
                      fontWeight: '400',
                      opacity: '0.9', // Slightly faded for hierarchy
                    }}>
                      Software Engineer
                    </p>
                    <div style={{
                      margin: '0 0 10px 0',
                      display: 'flex',
                      gap: '15px', // Gap between buttons
                    }}>
                      <span
                        className="action-button"
                      onClick={handleHireMeClick}
                      style={{
                        backgroundColor: '#fff', // White button background like in the image
                        color: '#ff4d4d', // Red text to match the theme
                        padding: '10px 20px',
                        borderRadius: '25px', // Rounded buttons
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for buttons
                        transition: 'transform 0.2s', // Smooth hover effect
                      }}>
                        Hire Me
                      </span>
                      <span 
                        className="action-button"
                      onClick={handleContactMeClick}
                      style={{
                        backgroundColor: '#fff',
                        color: '#ff4d4d',
                        padding: '10px 20px',
                        borderRadius: '25px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s',
                      }}>
                        Contact Me
                      </span>
                    </div>
                  </div>


                  {/* Right Section: Image */}
                  <div style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                    
                  }}>


   
     
                    <img
                      src={pcs}
                      alt="Profile"
                      style={{
                        width: '50%', 
                        height: 'auto',
                        borderTopLeftRadius: '50%', 
                        objectFit: 'cover',
                      }}
                    />
                  </div>

               

                </div>

                <div style={{height:'4rem'}}></div>
                <div style={{height:'4rem'}}></div>

                  <div style={{width:'100%' ,height:'100%',display:'flex' ,alignItems:'center',justifyContent:'center' ,flexDirection:'column',gap:'2rem',marginTop:'5%'}}>
                        <div style={{width:'100%' ,flex:'1',display:'flex',justifyContent:'flex-start',flexDirection:'column',gap:'1rem'}}>
                            <span style={{color:'#6C757D',letterSpacing:'.035rem',fontWeight:'700',fontSize:'2.5rem'}}> SELECTED WORK</span>
                            <span style={{backgroundColor:'#6C757D',width:'100%',height:'1.5px'}}> </span>
                          </div>
                     
                      <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', transition: 'all 300ms', cursor: 'pointer' }}>
                        {data?.filter((value) => value?.selected === 'true' && value?.category === 'post')?.map((value, index) => (
                          <Link to={`/postpage/${value?.postid}`}>
                            <div
                              key={index}
                              style={{
                                cursor:'pointer',
                                height: '28rem',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'column',
                                gap: '0rem',
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                backgroundColor: '#fcf8f7',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                transition: 'box-shadow 0.3s ease',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                              }}
                            >
                              <div  style={{ flex: 4, backgroundColor: '', height: '100%', width: '100%' }}>
                                <div
                                  className="box"
                                  style={{
                                    flex: 4,
                                    height: '100%',
                                    width: '100%',
                                    borderRadius: '5px',
                                    overflow: 'hidden',
                                    boxShadow:'0 10px 20px rgba(0, 0, 0, 0.2)'
                                  }}
                                >
                                  <img
                                    className="boximage"
                                    src={`${value?.image_url}`}
                                    style={{
                                      height: '17rem',
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
                              <span style={{ flex: 1, color: '#000000', height: '100%', width: '100%', fontSize: '1.6rem', fontWeight: '700', fontFamily: 'ui-sans-serif', textAlign: 'center' }}>
                                {value?.title}
                              </span>
                              <span style={{ flex: 2, color: '#6C757D', height: '100%', width: '100%', fontSize: '1rem', fontWeight: '400', textAlign: 'justify', fontFamily: 'ui-sans-serif' }}>
                                {value?.description}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                  </div>

                <div style={{height:'4rem'}}></div>
                <div style={{height:'4rem'}}></div>



                <div style={{width:'100%' ,height:'100%',display:'flex' ,alignItems:'center',justifyContent:'center' ,flexDirection:'column',gap:'2rem'}}>
                        <div style={{width:'100%' ,flex:'1',display:'flex',justifyContent:'flex-start',flexDirection:'column',gap:'1rem'}}>
                          
                          <span style={{  color:'#6C757D',letterSpacing:'.035rem',fontWeight:'700',fontSize:'2.5rem'}}> WRITING</span>
                          <span style={{backgroundColor:'#6C757D',width:'100%',height:'1.5px'}}> </span>
                          </div>




                        <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem',transition:'all 300ms'}}>
                         {data?.filter((value)=> {return value?.selected === 'true' && value?.category === 'write'})?.map((value, index) => (
                              <a href={value?.content} target='blank'>
                                <div 
                                 onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                              }}
                                 key={index}
                                  style={{
                                     cursor:'pointer',
                                height: '28rem',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'column',
                                gap: '1rem',
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                backgroundColor: '#fcf8f7',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                transition: 'box-shadow 0.3s ease',
                              }}
                                  >

                              <div  style={{ flex: 4, backgroundColor: '', height: '100%', width: '100%' }}>
                                   
                                   <div  style={{ flex: 4, backgroundColor: '', height: '100%', width: '100%',borderRadius:'5px',boxShadow:'0 10px 20px rgba(0, 0, 0, 0.2)',overflow:'hidden' }}>
                                       <img className="boximage"   src={`${value?.image_url}`} style={{ height: '12rem', width: '100%'}} alt="Featured" />
                                   </div>
                               </div>
                                    <span style={{ flex: 1,color:'#000000', height: '100%', display: 'flex', width: '100%',fontSize:'1.2rem', fontWeight: '700',fontFamily:'ui-sans-serif' }}>{value?.title}</span>
                                    <span 
                                    style={{
                                        flex: 2,
                                        color: '#6C757D',
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
                                    >{value?.description}</span>
                                </div>

                                </a>
                            ))}
                        </div> 

                </div>




                <div style={{height:'4rem'}}></div>
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
  transform:scale(1);
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

export default Hero


