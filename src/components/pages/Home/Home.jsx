// import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
// import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import AllArtCraft from "../AllArtCraft/AllArtCraft";


const Home = () => {
    return (
        <div>
           
            {/* <Header></Header> */}
            {/* <h2 className="bg-gray-400 p-2 text-black font-extrabold text-5xl font-poppins">This is the Home page of Art Maker</h2> */}
            <Banner></Banner>
            {/* <AllArtCraft></AllArtCraft> */}
           



        </div>
    );
};

export default Home;