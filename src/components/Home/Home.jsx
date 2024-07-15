import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="bg-red-500 font-extrabold">This is the Home page of Art Maker</h2>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;