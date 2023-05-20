import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {

    const categories = useLoaderData();
    const { title, _id, price, category, quantity, img } = categories;

    return (
        <div>
            <h2>this is view details </h2>
            <img src={img} alt="" />
        </div>
    );
};

export default ViewDetails;