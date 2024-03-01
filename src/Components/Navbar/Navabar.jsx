import React, { useState,useEffect } from 'react';
import { Select, SelectItem } from "@tremor/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp, faChevronDown, faL} from "@fortawesome/free-solid-svg-icons";
import usa from '../../assets/static/usa.png'
import Avatar from "../Avatar.jsx";
import { data } from 'autoprefixer';
import italyimagesvg from '../Navbar/Image/IT.svg'
import usaimagesvg from '../Navbar/Image/US.svg'
import companylogo from '../../assets/static/companylogo.svg'
import {useAuth} from "../../Context/AuthInfo.jsx";
import { useNavigate } from 'react-router-dom';
const Navabar = () => {
    const { userId , logout} = useAuth();
  const[clicked,setclicked]=useState(false)
  const navigate = useNavigate();

  const redirectToPage = (e) => {
    // Redirect to '/another-page'
    
    navigate(`${e}`);
  };

   
  const itemlist=[{'item':'About','route':'/'},
  {'item':'Projects','route':'/projects'} ,
  {'item':'Blog','route':'/'} ,
  {'item':'Resume','route':'/'}]


    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
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
               
               onClick={()=>redirectToPage('/')}
               >
                   Logo
               </div>
            <div style={{flex:1,display : 'flex', gap : '8%', alignItems : 'center' ,justifyContent:'flex-end',color:'#000'}}>
  
                

             
                
                {itemlist?.map((i)=>{
                              return (
                                <span  
                                style={{cursor:'pointer'}}
                                // className={style.texteffect}
                                onMouseDown={(e)=>{(e.currentTarget.style.color='red');}}
                                onMouseUp={(e)=>(e.currentTarget.style.color='#000')}
                                onMouseEnter={(e)=>{(e.currentTarget.style.color='orangered');}}
                                onMouseLeave={(e)=>{(e.currentTarget.style.color='#000');}}
                                onClick={()=>redirectToPage(i.route)}
                                >{i.item}</span>
                              )
                            })}
            </div>
               


            </div>

         <style>
            {`
            .navbar {
                transition: box-shadow 400ms ease;
                background-color:transparent;
                height:4.5rem;
                transition: all 400ms ;


              }
              
              .shadow {
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                background-color:white;
                height:3.8rem;
                transition: all 400ms ;

              }`}
         </style>
        </div>

       
    );
};

export default Navabar;