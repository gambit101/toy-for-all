import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <div>
                <h3 className="text-4xl">Shop by category</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {
                    categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;