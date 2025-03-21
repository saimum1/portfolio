import React from 'react';
import Navabar from "../Components/Navbar/Navabar.jsx";
import {Outlet} from "react-router-dom";
import App from '../App.jsx';
import Footersec from '../Components/Navbar/Footersec.jsx';

const Main = () => {
    // f7f5f4
    return (
             < div style={{backgroundColor:'#f7f0ed',display:"flex",flexDirection:'column',justifyContent:'space-between',alignItems:'flex-end'}}>
                  <Navabar ></Navabar>
                     
                   <Outlet></Outlet>
 
                <Footersec/>
        </div>
    );
};

export default Main;