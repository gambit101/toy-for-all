import { Link } from "react-router-dom";

const AllToyCard = ({ allToy }) => {

    const { _id, customerName, category, service, price, quantity, img } = allToy;
    console.log(allToy);

    return (
        <tr>

            <td>
                <img className="w-12 h-12 rounded" src={img} alt="" />
            </td>
            <td>
                {customerName}
            </td>
            <td>{service}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/viewDetails/${_id}`}>
                    <button className="btn">View Details</button>
                </Link>
            </td>


        </tr>
    );
};

export default AllToyCard;