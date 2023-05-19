
const AllToyCard = ({ allToy }) => {

    const { _id, customerName, email, category, service, price, quantity } = allToy

    return (
        <div>
            <table className="table  w-full">
                <thead className="">
                    <tr>
                        
                        <th>Seller Name </th>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td>{customerName}</td>
                        <td>{service}</td>
                        <td>{category}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td><button className="btn">View Details</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllToyCard;