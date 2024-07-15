import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="bg-red-500 font-extrabold">This is the Home page of Art Maker</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;