import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="card w-full h-96 bg-base-100 shadow-lg image-full">
            <figure><img className="w-full " src="https://images.unsplash.com/photo-1605936995823-ee55b35a586f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNwaWRlcm1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
            <div className="card-body  text-center">
                <h2 className="text-4xl font-bold">Welcome!</h2>
                <p>It doesnt really mean anything, since by definition, there is <br /> nothing beyond infinity — it simply doesnt exist — but Woody and Buzz have given it meaning.</p>
                <div className="text-center">
                    <Link to='/login'><button className="btn btn-primary">Login Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;