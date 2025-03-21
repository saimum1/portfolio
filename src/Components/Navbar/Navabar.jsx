import React, { useState,useEffect } from 'react';
import logo from '../../assets/static/logox.svg'
import {useAuth} from "../../Context/AuthInfo.jsx";
import { Link, useNavigate } from 'react-router-dom';
import { global_css } from '../../GlobalCss/GlobalCSS.js';
import axios from "axios";
import config from "../../config.jsx";
const Navabar = () => {
    const { userId , logout} = useAuth();
  const[clicked,setclicked]=useState(false)
  const[clickeditem,setclickeditem]=useState('')
  const[resumelink,setresumelink]=useState('')
  const[logourl,setlogourl]=useState('')
  const navigate = useNavigate();





  const redirectToPage = (i,e) => {
    console.log("cada",i)
    setclickeditem(i)
    navigate(`${e}`);
  };

   
  const itemlist=[
  {'item':'Projects','route':'/projects'} ,
  {'item':'Blog','route':'/blogs'} ,
  {'item':'Resume','route':'/'}]

  const getdata=async()=>{
    try {
      const response = await axios.get(`${config.apiUrl}/userdata`);
      const data = await response.data;
      console.log("sssasadafa",data)
      if (data) {
          setresumelink(data?.profile[0]?.linkurlcv);
          setlogourl(data?.profile[0]?.logourl)
      } 
  } catch (error) {
      console.error('Error fetching data:', error);
  }
  }

    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
      getdata()
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 0) {
          setHasShadow(true);
        } else {
          setHasShadow(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        
        <div
        className={`navbar ${hasShadow ? 'shadow' : ''}`}
        
        style={{display:"flex",transition:'all 400ms',
        width:'100%',justifyContent:'center',alignItems:'center',position:'fixed' ,zIndex:'999'}} >
            <div style={{display:"flex",height:"100%" ,
        width:'70%',justifyContent:'space-between',alignItems:'center'}}>
          
               <div style={{flex:1,display:'flex',justifyContent:'flex-start',alignItems:'center',cursor:'pointer'}}
               
     
               >
                  <Link to={`/`}>
                     <p style={{
                                fontSize: '1.5rem',
                                lineHeight: '1.25rem',
                                fontWeight: '700',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                transition:'all 600ms',
                                width:`${hasShadow ? '6rem' : '8rem'}`
                              }}>
                              
                                    <img src={`${config.apiUrl}/${logourl && logourl}`}  alt='logo'/>
                                 
                              </p>
                  </Link>

               </div>
             <div style={{flex:1,display : 'flex', gap : '3%', alignItems : 'center' ,justifyContent:'flex-end',color:'#7A8389',fontWeight:'700'}}>
                {itemlist?.map((i)=>{
                              return (

                                <>
                                  {i.item !== 'Resume'?
                            
                              
                                <span  
                                style={{cursor:'pointer',
                                  padding: '8px 16px',
                                  borderRadius: '20px',
                                  transition:"all 400ms",
                                  backgroundColor:`${clickeditem === i.item ? '#ffcece':'transparent'}`
                                }}
                                
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#ffcece';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = `${clickeditem === i.item ? '#ffcece':'transparent'}`;
                                }}
                                 onClick={()=>redirectToPage(i.item,i.route)}
                                >{i.item}</span>

                                : <a href={resumelink} target='blank'> <span  
                                style={{cursor:'pointer',
                                  padding: '8px 16px',
                                  borderRadius: '20px',
                                  transition:"all 400ms",
                                  backgroundColor:`${clickeditem === i.item ? '#ffcece':'transparent'}`
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#ffcece';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor =  `${clickeditem === i.item ? '#ffcece':'transparent'}`;
                                }}
                                onClick={()=>setclickeditem(i.item)}
                                >{i.item}</span> </a>}
                                 </>
                              )
                            })}
            </div> 
           
               


            </div>

         <style>
            {`
            .navbar {
                background-color:transparent;
                height:5rem;
                transition: all 400ms ;


              }
              
              .shadow {
                // background-color:white;
                height:3.5rem;
                transition: all 400ms ;
                --tw-backdrop-blur: blur(8px);
               backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);


              }
              
              .boximage{
                transition:all 500ms;
              
                
              
              }
              .boximage:hover{
                transform:scale(1.3);
                transition:all 300ms;
                box-shadow:1px 1px 15px #999990;
                transition:all 500ms;
              }

            


              `}
         </style>
        </div>

       
    );
};

export default Navabar;