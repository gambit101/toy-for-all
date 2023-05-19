import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/booking?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    const handleDelete = id => {
        const proceed = confirm('are you sure you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <h2>this is my toys: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Image and Toy Name</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th></th>
                            <th>Category</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <MyToysRow key={booking._id} booking={booking} handleDelete={handleDelete}></MyToysRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToys;