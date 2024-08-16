import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCraft = () => {

    const craft = useLoaderData();
    const { _id, image, item, subcategory, description, price, rating, customization, stockstatus, time, email, name } = craft;

    const handleUpdatedCraft = e => {
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const item = form.item.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const stockstatus = form.stockstatus.value;
        const time = form.time.value;
        const email = form.email.value;
        const name = form.name.value;

        const updatedCraft = { image, item, subcategory, description, price, rating, customization, stockstatus, time, email, name }
        console.log(updatedCraft);

        // send data to the server
        fetch(`https://y-ashen-six.vercel.app/craft/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Item Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div className="bg-[#f4f3f0] p-30">

            <h2 className="text-4xl   text-orange-400 mb-8">Update Craft Item </h2>
            <form onSubmit={handleUpdatedCraft} >
                <div className="md:grid-cols-2">
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Image
                            <input type="text" name="image" defaultValue={image} className="grow" placeholder="Image URL" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Item_Name
                            <input type="text" name="item" defaultValue={item} className="grow" placeholder="Item Name" />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Subcategory_Name

                            <input type="text" className="grow" name="subcategory" defaultValue={subcategory} placeholder="Subcategory Name" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Short Description
                            <input type="text" name="description" defaultValue={description} className="grow" placeholder="Short Description" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Price
                            <input type="text" name="price" defaultValue={price} className="grow" placeholder="Price" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Rating

                            <input type="text" name="rating" defaultValue={rating} className="grow" placeholder="Ratings" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2 text-sm">
                            Customization- example- yes, no

                            <input type="text" name="customization" defaultValue={customization} className="grow" placeholder="Customization " />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Processing_Time
                            <input type="text" name="time" defaultValue={time} className="grow" placeholder="Processing Time" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2 text-sm">
                            Stock Status - example- In stock, Made to Order

                            <input type="text" name="stockstatus" defaultValue={stockstatus} className="grow" placeholder="Stock Status" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            User Email

                            <input type="text" name="email" defaultValue={email} className="grow" required placeholder="Your Email" />
                        </label>
                    </div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            User Name

                            <input type="text" name="name" defaultValue={name} className="grow" required placeholder="Your Name" />
                        </label>
                    </div>


                </div>
                <input type="submit" value="Update Craft" className="btn btn-block text-white text-xl  bg-orange-400" />
            </form>

        </div>
    );
};

export default UpdateCraft;