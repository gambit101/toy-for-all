import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Category = () => {
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className="bg-[#404258] mt-6 rounded-xl">
            <div>
                <h3 className="text-4xl text-center font-bold text-white pt-5">Shop by category</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-10">


                {
                    categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                }

            </div>

        </div>
    );
};

export default Category;