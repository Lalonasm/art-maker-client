import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import CraftCard from "../CraftCard/CraftCard";
import ViewDetailPage from "../ViewDetailPage/ViewDetailPage";
import { useState } from "react";


const AllArtCraft = () => {

    const loadedCrafts = useLoaderData();
    const [crafts, setCrafts] = useState(loadedCrafts);
    // console.log(crafts)

    return (
        <div >

            <h2 className="text-4xl text-white bg-green-500">All Art & Craft Items collections : {crafts.length}</h2>
            <div className="m-20 grid md:grid-cols-2 gap-4">
                {
                    crafts.map(craft => <CraftCard
                        key={craft._id}
                        crafts={crafts}
                        setCrafts={setCrafts}
                        craft={craft}
                    ></CraftCard>)
                }
            </div>
            {/* <div>
            {
                crafts.map(craft => <ViewDetailPage
                    key={craft._id}
                    craft={craft}
                ></ViewDetailPage>)
            }
            </div> */}


            {/* <Footer></Footer> */}
        </div>
    );
};

export default AllArtCraft;