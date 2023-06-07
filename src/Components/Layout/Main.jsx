import { Outlet } from "react-router-dom";
import Navbar from "../Shared/NavBar";
import Footer from "../Shared/Footer";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Main;