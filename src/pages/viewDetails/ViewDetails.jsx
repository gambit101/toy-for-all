import { useLoaderData } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";


const ViewDetails = () => {
    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])

    const categories = useLoaderData();
    console.log(categories);
    const { title, price, category, quantity, img, rating } = categories;

    return (
        <div className="grid lg:grid-cols-2 gap-10 p-24" data-aos='zoom-in'>
            <div className="border-r-4 border-red-300">
                <img className=" rounded-xl" src={img} alt="" />
            </div>
            <div>
                <h2 className="text-4xl font-bold my-4 text-yellow-500">{title}</h2>
                <p className="text-2xl font-bold">Price: $ {price}</p>
                <p className="text-2xl font-bold">Category: This is a {category} toy</p>
                <p className="text-2xl font-bold">Only {quantity} pice available!!!</p>
                <p className="text-2xl font-bold">Rating: {rating} </p>
                <p className="text-2xl font-bold">Email: info@gmail.com </p>
                <p className="text-2xl font-bold">You can display it anywhere you want</p>
                <div className="avatar placeholder my-6">
                    <div className="text-neutral-content rounded-full h-28 w-28 bg-black">
                        <span className="text-3xl text-center font-extrabold text-yellow-300">50% off</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;