import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar rounded-xl mb-2 bg-[#404258] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-black menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='/allToys'>
                                All Toys

                            </Link>
                        </li>
                        <li><Link to='/myToys'>My Toys</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
                <img className="h-12 w-16" src="https://img.freepik.com/free-vector/superhero-text-effect-editable-cartoon-comic-text-style_314614-1816.jpg?size=626&ext=jpg&ga=GA1.1.596352723.1673069920&semt=ais" alt="" />
                <a className="btn btn-ghost normal-case text-xl font-bold">Toy For All</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li tabIndex={0}>
                        <Link to='/allToys'>
                            All Toys

                        </Link>
                    </li>


                    {user?.email ? <div className="grid lg:grid-cols-4"><li><Link to='/addToy'>Add a Toy</Link></li><li><Link to='/myToys'>My Toys</Link></li><li><button onClick={handleLogOut}>Logout</button></li><img className='w-11 h-11 rounded-full' src={user?.photoURL} alt="" /></div> : <li><Link to='/login'>Login</Link></li>}

                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/blog' className="btn btn-primary">Blog</Link>
            </div>
        </div>
    );
};

export default Navbar;