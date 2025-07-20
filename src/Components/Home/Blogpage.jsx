
import React,{useState,useEffect} from 'react'
import axios from "axios";
import config from "../../config.jsx";
import { Link } from 'react-router-dom';
import { global_css } from '../../GlobalCss/GlobalCSS.js';

const Blogpage = () => { 
  const [post, setPost] = useState(null);

    const getdata=async()=>{
      
      const response = await axios.get(`${config.apiUrl}/getdatax`,{     params:{
        'userid':1
      }});
      console.log("showing ress hero",response?.data)
      setPost(response?.data);
    }
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
        duration: 7000, 
         // Use smooth scrolling behavior
      });
      getdata()
     
    }, []);
  
    return (
      <div style={{width:'100%' ,height:'100%',display:'flex' ,alignItems:'center',justifyContent:'center' ,flexDirection:'column'}}>
             
  
              <div style={{width:'70%' ,height:'100%',display:'flex' ,alignItems:'center',justifyContent:'center' ,flexDirection:'column',marginTop:'4.5rem',background:''}}>
  
                  
  
                  <div style={{height:'2rem'}}></div>
  
                    <div style={{width:'100%' ,height:'100%',display:'flex' ,alignItems:'center',justifyContent:'center' ,flexDirection:'column',gap:'2rem'}}>
                          <div style={{width:'100%' ,flex:'1',display:'flex',justifyContent:'flex-start',flexDirection:'column',gap:'1rem'}}>
                           
                       
                            </div>

                          <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem',transition:'all 300ms'}}>
                         {post?.filter((value)=> {return  value?.category === 'write'})?.map((value, index) => (
                              <a href={value?.content} target='blank'>
                                <div 
                                 key={index} style={{  height: '20rem', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', gap: '0.6rem',cursor:'pointer',padding:'1rem',borderRadius:'.5rem' }}>

                              <div className='boxparent'  style={{ flex: 4, backgroundColor: '', height: '100%', width: '100%' }}>
                                   
                                   <div  className='box' style={{ flex: 4, backgroundColor: '', height: '100%', width: '100%',borderRadius:'5px',border:'1px solid #999999' }}>
                                       <img className='boximage'  src={`${value?.image_url}`} style={{ height: '12rem', width: '100%'}} alt="Featured" />
                                   </div>
                               </div>
                                    <span style={{ flex: 1, height: '100%', display: 'flex', width: '100%',color:'#6C757D',fontSize:'1.6rem', fontWeight: '700',fontFamily:'ui-sans-serif' }}>{value?.title}</span>
                                    <span style={{ flex: 2,  height: '100%', width: '100%', color: '#6C757D', fontSize: '1rem', fontWeight: '400' ,fontFamily:'ui-sans-serif'}}>{value?.description}</span>
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
  
 

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar width */
  }
  
  /* Optional: Customize scrollbar track appearance */
  ::-webkit-scrollbar-track {
    background: transparent; /* Make scrollbar track transparent */
  }
  
  /* Optional: Customize scrollbar thumb appearance */
  ::-webkit-scrollbar-thumb {
    background: transparent; /* Make scrollbar thumb transparent */
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

.boximage{
  transition:all 500ms;

  

}
.boximage:hover{
  transform:scale(1.3);
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

  
  
  
  
  `}
             </style>
         
      </div>
    )
  }
  

export default Blogpage