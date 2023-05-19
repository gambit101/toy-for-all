import { useEffect, useState } from "react";
import AllToyCard from "./AllToyCard";

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    return (
        <div>
            <h2>this is all toys</h2>
            
            {
                allToys.map(allToy => <AllToyCard key={allToy._id} allToy={allToy}></AllToyCard>)
            }
        </div>
    );
};

export default AllToys;