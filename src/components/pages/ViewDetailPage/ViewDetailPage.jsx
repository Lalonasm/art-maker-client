// import { Link, useLoaderData, useParams } from "react-router-dom";


// const ViewDetailPage = () => {

//     const crafts = useLoaderData();
//     const { _id } = useParams();
//     const intId = parseInt(_id);
//     console.log(intId)
//     const craft = crafts.find(craft => craft._id === intId)
//     console.log(craft)
//     console.log(_id, intId)

//     const { image, item, subcategory, description, price, rating, customization, stockstatus, time, email, name } = craft;

//     return (
//         <div className="card card-side bg-base-100 shadow-2xl">
//             <figure>
//                 <img className="md:w-30"
//                     src={image}
//                     alt="Photo" />
//             </figure>
//             <div className="card-body" >
//                 <h2 className="card-title">{item}</h2>
//                 <ul className="menu bg-base-200 rounded-box w-52">
//                     <li><a>Ratings:{rating}</a></li>
//                     <li><a>Processing Time:{time}</a></li>
//                     <li><a>Price:{price}</a></li>
//                 </ul>
//                 <div className="card-actions justify-end">
//                 <Link to={'/craft/:id'}><button className="btn  text-white bg-green-500">View Details</button></Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ViewDetailPage;


const ViewDetailPage = () => {

    return (
        <div>
            <h2>view details</h2>
        </div>
    );
};

export default ViewDetailPage;