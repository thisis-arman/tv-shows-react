import { Outlet } from "react-router-dom";
import Navbar from "../Shared/NavBar";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            
        </div>
    );
};

export default Main;