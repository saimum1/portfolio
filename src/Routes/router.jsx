import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Dashboardskeleton from "../Components/SkeletonDashboard/Dashboardskeleton.jsx";
import InventoryTable from "../Components/InventoryTable/InventoryTable.jsx";
import Hero from "../Components/Home/Hero.jsx";
import Projectpage from "../Components/Home/Projectpage.jsx";
import Postpage from "../Components/Home/Postpage.jsx";
import Blogpage from "../Components/Home/Blogpage.jsx";
import RsumePreviewer from "../Components/Home/RsumePreviewer.jsx";
export const router = createBrowserRouter([
    
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <h2 className="text-center">Unexpected Error :)</h2>,
        children : [
            {
                path : '/',
                element :
                   
                <Hero/>
            
            },
            {
                path : '/projects',
                element :<Projectpage/>,
            },
            {
                path : '/postpage/:postId',
                element :<Postpage/>
            },
            {
                path : '/blogs',
                element :<Blogpage/>
            },
            {
                path : '/resume',
                element : <RsumePreviewer></RsumePreviewer>
            },

            ]
        
        }])



