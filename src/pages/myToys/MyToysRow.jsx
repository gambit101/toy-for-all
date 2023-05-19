
const MyToysRow = ({ booking, handleDelete }) => {

    const { _id, img, title, price, rating, category, quantity, customerName, email, service } = booking;



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-36 h-24 rounded-xl">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>
            <td>
                {customerName}
            </td>
            <td>{email}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>{category}</td>
            <th>
                <button className="btn btn-primary">Update</button>
            </th>
        </tr>
    );
};

export default MyToysRow;