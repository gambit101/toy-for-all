import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {

    const categories = useLoaderData();
    const { title, price, category, quantity, img } = categories;

    return (
        <div className="grid lg:grid-cols-2 gap-10 p-24">
            <div className="border-r-4 border-red-300">
                <img className=" rounded-xl" src={img} alt="" />
            </div>
            <div>
                <h2 className="text-4xl font-bold my-4 text-yellow-500">{title}</h2>
                <p className="text-2xl font-bold">Price: $ {price}</p>
                <p className="text-2xl font-bold">Category: This is a {category} toy</p>
                <p className="text-2xl font-bold">Only {quantity} pice available!!!</p>
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