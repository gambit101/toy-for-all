import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                // navigate('/')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        event.preventDefault()
        console.log('google');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch(error => {
                console.log('error', error.message);
            });
            
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <img className='ms-5' src="https://cdn.pixabay.com/photo/2017/05/15/13/56/sign-up-2314914_960_720.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div>
                                <button onClick={handleGoogleSignIn} className="btn btn-block my-3">Login with google</button>
                            </div>
                        </form>
                        <p className="text-red-600 font-bold text-center">{error}</p>
                        <p className="text-center my-6">New to this site? <Link className="text-violet-700 font-bold" to='/signUp'>Sign up</Link></p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;