import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import imglogin from '../../assets/images/login/login.svg'
import { AuthContext } from '../../providers/AuthProviders';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const { signInUser, popUpSignIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const location = useLocation()
    // console.log(location);

    function onsubmit(data) {
        // console.log(data);
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                const user = data.email; toast.success('Login success')
                // location?.state ? navigate(location?.state?.from?.pathname) : navigate('/')
                // get access token
            })
            .catch(error => { console.log(error); })
    }
    function handlePopUpSignIn(provider) {
        popUpSignIn(provider)
            .then(result => {
                console.log(result.user);
                toast.success('Login success')
                location?.state ? navigate(location?.state) : navigate('/')
            })
            .catch(error => { console.log(error); })
    }

    return (
        <div className='lg:flex items-center justify-evenly sm:p-4 p-8'>
            <div className='hidden lg:block'>
                <img src={imglogin} className='w-full mx-auto ' alt="" />
            </div>
            {/*  */}
            <div className='lg:w-1/2'>
                <div className='max-w-md lg:max-w-xl mx-auto p-14 my-20 bg-base-100 shadow-xl '>
                    <h3 className='text-3xl font-semibold text-center mb-6'>Sign in</h3>
                    <form onSubmit={handleSubmit(onsubmit)} className='w-full '>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                required
                                {...register("email")}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="text"
                                required
                                {...register("password")}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sign in" />
                        </div>
                    </form>
                    <p className="mt-6">
                        Don't have an account? Please
                        <Link to="/signup" className="link link-primary ml-2">
                            Sign up
                        </Link>
                    </p>
                    <div className="divider mt-6">Or continue with</div>
                    <div className="form-control">
                        <div className="flex justify-center space-x-2 mt-4">
                            <button
                                onClick={() => handlePopUpSignIn(googleProvider)}
                                className="btn btn-outline btn-icon btn-google">
                                <FaGoogle className='text-xl' /> Google
                            </button>
                            <button
                                className="btn btn-outline btn-icon btn-twitter">
                                <FaGithub className='text-xl' /> Github
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;