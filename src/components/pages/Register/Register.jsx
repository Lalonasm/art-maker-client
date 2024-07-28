import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";


const Login = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(email, password, name, photo);
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password must have one uppercase character.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password must have one lowercase character.');
            return;
        }

        // createUser

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // setSuccess('You are Registered Successfully')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are Registered Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message)
            })



    }


    return (
        <div>
         
            <div>
                <Fade> <h2 className="text-4xl  font-bold my-10 text-center">Please Register</h2></Fade>
                <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo URL" name="photo" className="input input-bordered" required />
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                {
                    registerError && <p className="text-red-700 font-bold mb-4">{registerError}</p>
                }
                {
                    success && <p className="text-green-700 font-bold mb-4">{success}</p>
                }
                <p className="text-center font-semibold mt-2">Already have an account? <Link className="text-blue-600 font-bold" to={'/login'} > Login Now</Link> </p>
            </div>

        </div>
    );
};

export default Login;