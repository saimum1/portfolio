import React, { useState, useEffect } from 'react'
import axios from "axios";
import config from "../../config.jsx";
import { Link } from 'react-router-dom';

const Projectpage = () => { 
  const [post, setPost] = useState(null);
  
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
      <div style={{width:'70%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', marginTop:'2rem', background:''}}>
        <div style={{height:'2rem'}}></div>
        <div style={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'1.5rem'}}>
          <div style={{width:'100%', flex:'1', display:'flex', justifyContent:'flex-start', flexDirection:'column', gap:'1rem'}}></div>
          
          <div className="card-grid" style={{width:'100%', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(3, 1fr))', gap:'2rem',marginTop:'4.5rem'}}>
            {post?.filter((value) => {return value?.category === 'post'})?.map((value, index) => (
              <Link to={`/postpage/${value?.postid}`} key={index} className='card-item'>
                <div className="card-container" style={{background:'', height:'20rem', width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', flexDirection:'column', gap:'0.6rem', cursor:'pointer'}}>
                  <div className='card-image-container' style={{flex:4, height:'100%', width:'100%'}}>
                    <div className='card-image-box' style={{height:'100%', width:'100%', borderRadius:'5px', border:'1px solid #999999', overflow:'hidden'}}>
                      <img className='card-image' src={`${value?.image_url}`} style={{height:'15rem', width:'100%', objectFit:'cover'}} alt={value?.title} />
                    </div>
                  </div>
                  <h3 style={{fontFamily:'ui-sans-serif', marginTop:'0.5rem', height:'auto', display:'flex', width:'100%', color:'#6C757D', fontSize:'1.4rem', fontWeight:'700'}}>{value?.title}</h3>
                  <p style={{fontFamily:'ui-sans-serif', height:'auto', width:'100%', color:'#6C757D', fontSize:'0.9rem', fontWeight:'400', textAlign:'justify'}}>{value?.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div style={{height:'4rem'}}></div>
      </div> 
      <style jsx>
        {`
          ::-webkit-scrollbar {
            width: 0;
          }
          
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          
          ::-webkit-scrollbar-thumb {
            background: transparent;
          }
          
          .card-item {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 600ms ease forwards;
            animation-timeline: view();
            animation-range: entry 10% cover 40%;
            border-radius: .5rem;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .card-image-container {
            transition: transform 0.3s ease;
            overflow: hidden;
          }
          
          .card-image-container:hover {
            box-shadow: 0 10px 20px rgba(0, 85, 188, 0.3);
            transform: translateY(-5px);
          }
          
          .card-image-box {
            transition: all 0.3s ease;
          }
          
          .card-image {
            transition: transform 0.5s ease;
            display: block;
          }
          
          .card-image-container:hover .card-image {
            transform: scale(1.1);
          }
          
          /* Responsive styles */
          @media (max-width: 768px) {
            .card-grid {
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            }
          }
          
          @media (min-width: 1200px) {
            .card-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}
      </style>
    </div>
  )
}

export default Projectpage