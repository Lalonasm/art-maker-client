// import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
// import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <h2 className="bg-red-500 font-extrabold    font-poppins">This is the Home page of Art Maker</h2>
            <Footer></Footer>



        </div>
    );
};

export default Home;