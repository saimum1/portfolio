import React from 'react';
import Navabar from "../Components/Navbar/Navabar.jsx";
import {Outlet} from "react-router-dom";
import App from '../App.jsx';

const Main = () => {
    return (
             < div>
                  <Navabar ></Navabar>
                     
           <Outlet></Outlet>
 
          
        </div>
    );
};

export default Main;