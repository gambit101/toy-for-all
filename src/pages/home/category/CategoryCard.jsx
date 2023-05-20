import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {

    const { _id, img, title, price, rating } = category

    return (
        <div className="card w-96 bg-slate-400 shadow-xl font-bold">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className="">Price: $ {price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-start">
                    <Link to={`/viewDetails/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;