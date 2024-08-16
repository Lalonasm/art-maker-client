import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaRegEye, FaRegEyeSlash, FaTwitter } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";


const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false)


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message)
                // <Fade>
                //     <p>I will gently appear as I enter the viewport</p>
                // </Fade>

            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error.message);

        })
    }


    return (
        <div>
            <Fade> <h2 className="text-4xl  font-bold my-10 text-center">Please Login</h2></Fade>

            <div className="grid md:grid-cols-4  ">
                <div className="grid md:col-span-3 ">
                    <form onSubmit={handleLogin} className=" md:3/4 lg:w-1/2 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="form-control relative ">
                                <input type={showPassword ? "text" : "password"}
                                    placeholder="password" name="password" className="input input-bordered" required />
                                <span className="absolute top-1/3 -right-0 space-x-reverse" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                    }
                                </span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline hover:bg-sky-700">Login</button>
                        </div>
                    </form>
                    {
                        registerError && <p className="text-red-700 font-bold mb-4">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-700 font-bold mb-4">{success}</p>
                    }
                    <p className="text-center font-semibold mt-2">Do not have an account? <Link className="text-blue-600 font-bold" to={'/register'} > Register Now</Link> </p>
                </div>
                <div className="">
                    <div className='p-4 space-y-3 mb-6'>
                        <h2 className="text-xl">Or</h2>
                        <h2 className="text-3xl">Login With</h2>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline hover:bg-sky-700 w-full">
                            <FaGoogle></FaGoogle>
                            Google
                        </button>
                        <button className="btn btn-outline w-full hover:bg-sky-700">
                            <FaGithub></FaGithub>
                            Github
                        </button>
                    </div>
                    <div className='p-4 mb-6'>
                        <h2 className="text-3xl mb-4">Find Us on</h2>
                        <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
                            <FaFacebook className='mr-3'></FaFacebook>
                            <span>Facebook</span>
                        </a>
                        <a className='p-4 flex text-lg items-center border-x' href="">
                            <FaTwitter className='mr-2'></FaTwitter>
                            <span>Twitter</span>
                        </a>
                        <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
                            <FaInstagram className='mr-2'></FaInstagram>
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;