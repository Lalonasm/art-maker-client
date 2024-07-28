import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
const craft = useLoaderData();

const { _id, image, item, subcategory, description, price, rating, customization, stockstatus, time, email, name } = craft;

    return (
        <div>
            <h2>view Details:{email}</h2>
        </div>
    );
};

export default ViewDetails;