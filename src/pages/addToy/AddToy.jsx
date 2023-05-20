import { useEffect, useState } from "react";
import AddToyCard from "./AddToyCard";

const AddToy = () => {

    const [categories, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div>
            <h2 className="text-4xl my-6 font-bold text-center text-violet-700">Add toys</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-[#404258] p-10 rounded-xl">

                {
                    categories.map(addToy => <AddToyCard key={addToy._id} addToy={addToy}></AddToyCard>)
                }
            </div>
        </div>
    );
};

export default AddToy;