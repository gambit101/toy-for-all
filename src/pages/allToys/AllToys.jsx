import { useEffect, useState } from "react";
import AllToyCard from "./AllToyCard";

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('https://toy-for-all-server.vercel.app/bookings')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    return (
        <div>
            <h2 className="text-center font-bold text-violet-700 text-4xl my-6">All sellers toys</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(allToy => <AllToyCard key={allToy._id} allToy={allToy}></AllToyCard>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllToys;