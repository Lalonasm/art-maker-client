import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
const craft = useLoaderData();

// const { _id } = useParams();
//     const intId = parseInt(_id);
//     console.log(intId)
//     const craft1 = craft.find(craft1 => craft1._id === intId)
//     console.log(craft1)
//     console.log(_id, intId)

const {  image, item, subcategory, description, price, rating, customization, stockstatus, time, email, name } = craft;




    return (
        <div>
            <h2>view Details:{email}</h2>
        </div>
    );
};

export default ViewDetails;