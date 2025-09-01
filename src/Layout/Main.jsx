// import React from 'react';
// import Navabar from "../Components/Navbar/Navabar.jsx";
// import {Outlet} from "react-router-dom";
// import App from '../App.jsx';
// import Footersec from '../Components/Navbar/Footersec.jsx';

// const Main = () => {
//     // f7f5f4
//     // #061023
//     return (
//              < div style={{backgroundColor:'#f7f0ed',display:"flex",flexDirection:'column',justifyContent:'space-between',alignItems:'flex-end'}}>
//                   <Navabar ></Navabar>
                     
//                    <Outlet></Outlet>
 
//                 <Footersec/>
//             </div>
//     );
// };

// export default Main;




import React, { useContext } from 'react';
import Navbar from "../Components/Navbar/Navabar.jsx";
import { Outlet } from 'react-router-dom';
import Footersec from "../Components/Navbar/Footersec.jsx";
import { ThemeContext,themeStyles } from './ThemeContext.jsx';

// import { ThemeContext, themeStyles } from './ThemeContext.jsx';

const Main = () => {
  const { theme } = useContext(ThemeContext);
  const styles = themeStyles[theme];

  return (
    <div
      style={{
        backgroundColor: styles.background,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
        color: styles.text,
        transition: 'all 0.3s ease',
      }}
    >
      <Navbar />
        <Outlet />
      <Footersec />
    </div>
  );
};

export default Main;
