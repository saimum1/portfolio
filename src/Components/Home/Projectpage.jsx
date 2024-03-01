import React,{useState,useEffect} from 'react'
import behanceicon from '../../assets/static/Behance.svg'
import linkedinicon from '../../assets/static/Linkedin.svg'
import sicon from '../../assets/static/s.svg'
import giticon from '../../assets/static/github.png'
import image1 from '../../assets/static/Image1.png'
import image2 from '../../assets/static/Image2.png'
import image3 from '../../assets/static/Image3.png'
import image4 from '../../assets/static/s.svg'
import axios from "axios";
import { StatusOnlineIcon, SearchIcon } from "@heroicons/react/outline";
import {
    Badge,
    Card, Icon, Select, SelectItem,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Text, TextInput,
    Title,


} from "@tremor/react";
import {Button} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp, faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import {useDisclosure} from "@chakra-ui/react";
import {global_css} from "../../GlobalCss/GlobalCSS.js";
import config from "../../config.jsx";
import toast from "react-hot-toast";
import Editopstions from "../EditFunctionality/Editopstions.jsx";
import SearchDialouge from "../SearchComponent/SearchDialouge.jsx";
import AlertBox from "../AlertBox/AlertBox.jsx";
import Nodatafound from "../NoDataFound/Nodatafound.jsx";
import LoadingSoS from "../LoadingScreen/LoadingSoS.jsx";
import Popnotification from "../PopNotification/Popnotification.jsx";
const Projectpage = () => { 
  const [post, setPost] = useState(null);
    const itemlist=['About' ,'Projects' ,'Blog' ,'Resume']


    const getdata=async()=>{
      
      const response = await axios.get(`${config.apiUrl}/getdatax`);
      console.log("showing ress hero",response?.data)
      setPost(response?.data);
    }
    useEffect(() => {
      getdata()
     
    }, []);
  
    const openpost=(e)=>{
      console.log("eeee",e)
      window.location.href = `/postpage/${e}`
    }
    return (
      <div style={{width:'100%' ,height:'100vh',display:'flex' ,alignItems:'center',justifyContent:'center' ,flexDirection:'column'}}>
             
  
              <div style={{width:'70%' ,height:'100%',display:'flex' ,alignItems:'center',justifyContent:'center' ,flexDirection:'column',marginTop:'4.5rem',background:''}}>
  
                  
  
                  {/* <div style={{height:'4rem'}}></div> */}
  
                    <div style={{width:'100%' ,height:'100%',display:'flex' ,alignItems:'center',justifyContent:'center' ,flexDirection:'column',gap:'2rem'}}>
                          <div style={{width:'100%' ,flex:'1',display:'flex',justifyContent:'flex-start',flexDirection:'column',gap:'1rem'}}>
                            
                            <span style={{fontSize:'2rem' ,fontWeight:'500'}}> All Projects</span>
                            <span style={{backgroundColor:'#999999',width:'100%',height:'1px'}}> </span>
                            </div>
  
  
  
  
                            
                          <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem',transition:'all 300ms',cursor:'pointer'}}>
                            {post?.map((value, index) => (
                              <div onClick={()=>openpost(value?.postid)} className='box' key={index} style={{ background: '', height: '25rem', width: '85%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',flexDirection:'column',gap:'0.6rem' }}>
                                <div style={{flex:4,backgroundColor:'',height:'100%' ,width:'100%'}}>
                                  <img src={`${config.apiUrl}/${value?.image_url}`}  style={{height:'15rem' ,width:'100%'}}/>
                                </div>
                                <span style={{flex:1,backgroundColor:'',height:'100%' ,display:'flex',width:'100%',color:'#000',fontFamily:'Inter',fontSize:'2rem',fontWeight:"700"}}>{value?.title}</span>
                                <span style={{flex:2,backgroundColor:'',height:'100%' ,width:'100%',color:'#000',fontFamily:'Inter',fontSize:'1rem',fontWeight:"400"}}>{value?.description}</span>
                              </div>
                            ))}
                          </div>
                    </div>
  
                  <div style={{height:'4rem'}}></div>
  
  
  
                
  
                </div> 
  
  
  
  
  
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
  
  body {
    -ms-overflow-style: none;
  }


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
  

export default Projectpage