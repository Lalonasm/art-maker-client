import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {

    const crafts = useLoaderData();
    console.log(crafts.length)

    const { _id } = useParams();
    // console.log(_id)
    const intId = parseInt(_id)
    const craft = crafts.find(craft => craft.id === intId )

    // const { price, email } = craft;
    console.log(craft)

    return (
        <div>
            <h2>View Details: {}</h2>
        </div>
    );
};

export default ViewDetails;