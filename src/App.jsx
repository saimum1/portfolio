
// import './App.css'
// import {RouterProvider} from "react-router-dom";
// import {router} from "./Routes/router.jsx";
// import {Toaster} from "react-hot-toast";
// import {ChakraProvider} from "@chakra-ui/react";
// import {useEffect, useState} from "react";
// function App() {

//   return (
//     <>
//         <ChakraProvider resetCSS={false}>
//         <RouterProvider router = {router}></RouterProvider>
//             </ChakraProvider>
//         <Toaster position="top-right"
//                  reverseOrder={true}></Toaster>
//     </>
//   )
// }

// export default App



import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/router.jsx';
import { Toaster } from 'react-hot-toast';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from './Layout/ThemeContext.jsx';

function App() {
  return (
    <>
      <ChakraProvider resetCSS={false}>
        <ThemeProvider>
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </ChakraProvider>
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
}

export default App;
