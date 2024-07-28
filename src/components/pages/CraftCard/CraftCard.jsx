import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


const CraftCard = ({ craft }) => {



    const { _id, image, item, subcategory, description, price, rating, customization, stockstatus, time, email, name } = craft;


    const handleDelete = _id => {
        console.log(_id);
    }

    return (
        <div className="card card-side bg-base-100 shadow-2xl">
            <figure>
                <img className="md:w-30"
                    src={image}
                    alt="Photo" />
            </figure>
            <div className="card-body" >
                <h2 className="card-title">{item}</h2>
                <ul className="menu bg-base-200 rounded-box w-52">
                    <li><a>Ratings:{rating}</a></li>
                    <li><a>Processing Time:{time}</a></li>
                    <li><a>Price:{price}</a></li>
                </ul>
                <div>
                    <ul className="menu menu-horizontal bg-base-200 rounded-box">

                        <li>
                            <a> <CiEdit></CiEdit>

                                Edit
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleDelete(_id)} className="bg-red-400">
                                <MdDelete></MdDelete>

                                Delete
                            </a>
                        </li>
                    </ul>
                </div>
                <div className=" ">
                    <Link to={`/craft/${_id}`}> <button className="btn  flex-grow w-full text-white bg-green-500">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;