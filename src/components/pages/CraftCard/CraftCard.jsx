import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


const CraftCard = ({ craft, setCrafts, crafts }) => {



    const { _id, image, item, subcategory, description, price, rating, customization, stockstatus, time, email, name } = craft;


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://y-ashen-six.vercel.app/craft/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Craft Item has been deleted.",
                                icon: "success"
                            });
                            const remaining = crafts.filter(craf => craf._id !== _id);
                            setCrafts(remaining);

                        }
                    })
            }
        });
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
                            <Link to={`/updateCraft/${_id}`}> <CiEdit></CiEdit>

                                Edit
                            </Link>
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
                    <Link to={`/craftDetails/${_id}`}> <button className="btn  flex-grow w-full text-white bg-green-500">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;