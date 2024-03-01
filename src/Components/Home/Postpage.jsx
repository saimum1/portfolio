import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import JoditEditor from 'jodit-react'
import config from "../../config.jsx";
import axios from "axios";
const Postpage = () => {

  const { postId } = useParams(); // Extract the postId from URL params
  const [post, setPost] = useState(null);

  const getdata=async()=>{
      
    const response = await axios.get(`${config.apiUrl}/getdatax`);
    console.log("showing ress hero",response?.data)
    const selectedPost = response?.data?.find((p) => p.postid === postId);
    setPost(selectedPost);
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      duration: 7000, 
       // Use smooth scrolling behavior
    });
    getdata()
   
  }, [postId]);


  
 
    return (
      <div style={{width:'100%' ,height:'100%',display:'flex' ,alignItems:'center',justifyContent:'center' ,flexDirection:'column',gap:'2rem'}}>
          
  
              <div style={{width:'100%' ,height:'30rem',display:'flex' ,alignItems:'center',justifyContent:'center',backgroundColor:''}}>
  
                   <img src={ `${config.apiUrl}/${post?.image_url}`} style={{width:'100%' ,height:'100%' ,objectFit:'cover'}}/>
                </div> 

                <div style={{width:'70%' ,display:'flex' ,alignItems:'center',justifyContent:'center' ,flexDirection:'column',background:'',maxHeight:'auto'}}>
  
                  
  
  
  
               <div dangerouslySetInnerHTML={{ __html: post?.content }} />
  
                
  
                </div> 
  
  
  
                {/* --------------- footer --------------- */}
  
                <div style={{backgroundColor:"#000000",display:"flex",height:"18rem" ,
                width:'100%',justifyContent:'space-between',alignItems:'center',flexDirection:'column',paddingTop:'2rem' }} >
                  
                            <div style={{width: '100%',height: '3rem',backgroundColor: '',color:"white"}}>
                            <div className="marquee-w">
                              <div className="marquee">
                                  <span>Let's talk &nbsp; Let's talk &nbsp; Let's talk &nbsp; Let's talk &nbsp; Let's talk &nbsp;</span>
                                
                              </div>
                             
                          </div>
                          </div>
  
                      
                          <div style={{height:'100%',width:'90%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'flex-start',flexDirection:'column',color:'white',width:'100%',height:'100%',textAlign:'justify',float:'left',fontWeight:'400',fontFamily:'Inter',lineHeight:'30px'}}>
                              <span style={{float:'left',backgroundColor:''}}>Open to explore various opportunities and </span>
                                  <span style={{float:'left',backgroundColor:''}}>collaborations</span>
                            </div>
  
                            <div style={{flex:1}}>
                              <span>
                                <button 
                                onMouseDown={(e)=>(e.currentTarget.style.backgroundColor = '#1e0791')}
                                onMouseUp={(e)=>(e.currentTarget.style.backgroundColor = '#5033D7')}    
                                style={{backgroundColor:'#5033D7',display:'flex',
                                justifyContent:'center',alignItems:'center',border:'1px solid var(--White, #FFF)',
                                borderRadius:'4px',padding:'12px 24px',color:'var(--White, #FFF)',width:'40%',cursor:'pointer'}}>Let’s Talk</button>
                              </span>
                            </div>
  
                          </div>
                      
  
                </div>
  
             <style jsx>
              {`
  
  body::-webkit-scrollbar {
    display: none;
  }
  html {
    scroll-behavior: smooth;
    transition:all 300ms;

  }
  
  body {
    -ms-overflow-style: none;
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    transition:all 300ms;
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
    animation: marquee 9s linear infinite;
  }
  .box{
    transition:all 300ms;
  }
  .box:hover{
    transform:scale(1.05);
    transition:all 300ms;
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
  }`}
             </style>
         
      </div>
    )
  }

export default Postpage