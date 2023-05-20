import { Link } from "react-router-dom";

const AddToyCard = ({addToy}) => {
    const { _id, img, title, price, rating, category, quantity } = addToy
    return (
        <div className="card bg-slate-400 w-96 font-bold shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <p>Category: {category}</p>
                <p>Quantity: {quantity}</p>
                <div className="card-actions justify-start">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Add</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AddToyCard;