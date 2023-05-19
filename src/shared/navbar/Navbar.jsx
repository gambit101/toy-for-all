import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error => console.log(error))
    }

    return (
        <div className="navbar rounded-xl mb-2 bg-[#404258] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li tabIndex={0}>
                            
                                Parent
                                
                           
                            
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
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
                    <li><Link to='/myToys'>My Toys</Link></li>
                    <li><Link to='/addToy'>Add a Toy</Link></li>
                    {user?.email ? <li><button onClick={handleLogOut}>Logout</button></li> :<li><Link to='/login'>Login</Link></li>}
                    
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;