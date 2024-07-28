
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Swal from 'sweetalert2'


const AddCraft = () => {

    const handleAddCraft = e => {
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

        const newCraft = { image, item, subcategory, description, price, rating, customization, stockstatus, time, email, name }
        console.log(newCraft);

        // send data to the server
        fetch('http://localhost:5000/craft',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCraft)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }

    return (
        <div className="bg-[#f4f3f0] p-30">
        
            <h2 className="text-4xl   text-orange-400 mb-8">Add New Craft Item </h2>
            <form onSubmit={handleAddCraft} >
                <div className="md:grid-cols-2">
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Image
                            <input type="text" name="image" className="grow" placeholder="Image URL" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Item_Name
                            <input type="text" name="item" className="grow" placeholder="Item Name" />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Subcategory_Name

                            <input type="text" className="grow" name="subcategory" placeholder="Subcategory Name" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Short Description
                            <input type="text" name="description" className="grow" placeholder="Short Description" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Price
                            <input type="text" name="price" className="grow" placeholder="Price" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Rating

                            <input type="text" name="rating" className="grow" placeholder="Ratings" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2 text-sm">
                            Customization- example- yes, no

                            <input type="text" name="customization" className="grow" placeholder="Customization " />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Processing_Time
                            <input type="text" name="time" className="grow" placeholder="Processing Time" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2 text-sm">
                            Stock Status - example- In stock, Made to Order

                            <input type="text" name="stockstatus" className="grow" placeholder="Stock Status" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            User Email

                            <input type="text" name="email" className="grow" required placeholder="Your Email" />
                        </label>
                    </div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            User Name

                            <input type="text" name="name" className="grow" required placeholder="Your Name" />
                        </label>
                    </div>


                </div>
                <input type="submit" value="Add New Craft" className="btn btn-block text-white text-xl  bg-orange-400" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddCraft;