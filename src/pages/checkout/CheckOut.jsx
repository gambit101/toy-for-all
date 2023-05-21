import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {

    const categories = useLoaderData();

    const { title, _id, price, category, quantity, img } = categories;
    const { user } = useContext(AuthContext)

    const handleBookService = () => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const category = form.category.value;

        const booking = {
            customerName: name,
            email,
            img,
            category,
            service: title,
            service_id: _id,
            price: price,
            quantity
        }
        console.log(booking);

        fetch('https://toy-for-all-server.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.deletedCount > 0) {
                //     Swal.fire(
                //         'Deleted!',
                //         'Your file has been deleted.',
                //         'success'
                //     )
                //     const remaining = coffees.filter(cof => cof._id !== _id);
                //     setCoffees(remaining)
                // }
            })
    }

    const added = () =>{
        alert('Added to your toys')
    }

    return (
        <div>
            <h2 className="text-3xl text-center my-8 font-bold">Toy Name: {title}</h2>
            <img className="ml-96 my-8 rounded-xl" src={img} alt="" />

            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="category" defaultValue={category} name='category' className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" defaultValue={price} className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" defaultValue={quantity} className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="Description" className="input input-bordered" />

                    </div>
                </div>
                <div className="form-control mt-6">
                    <input onClick={added} type="submit" className="btn btn-primary" value="Add to my toys" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;