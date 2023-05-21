import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import AOS from 'aos'
import 'aos/dist/aos.css'


const Category = () => {
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://toy-for-all-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    

    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])

    return (
        <div className="bg-[#404258] mt-6 rounded-xl" data-aos='fade-left'>
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