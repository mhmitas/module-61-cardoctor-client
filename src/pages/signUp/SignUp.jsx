import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, auth } = useContext(AuthContext)

    function onSubmit(data) {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                toast.success('Welcome to our coummunity')
                navigate('/')
                updateProfile(auth.currentUser, {
                    displayName: data.name,
                    photoURL: data['photo-url'],
                }).catch((error) => {
                    console.error(error);
                });
                navigate('/')
            })
            .catch(error => { console.log(error); })
    }

    return (
        <div>
            <div className=' max-w-md mx-auto p-14 my-20 bg-base-100 shadow-xl'>
                <h3 className='text-3xl font-semibold text-center mb-6'>Sign up</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full '>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            required
                            {...register("name")}
                            className="input input-bordered"
                        />
                    </div>
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
                            {...register("password")}
                            type='text'
                            className='input input-bordered'
                            required
                            name="password"
                        />
                        {/* validate password */}
                        {/* { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z]).*$/ } */}
                        {/* {errors.password && errors.password.type === "minLength" && (<span className='text-error'>Password should be at least 6 characters</span>)}
                        {errors.password && errors.password.type === "pattern" && (<span className='text-error'>Please create a strong password (e.g: xY...)</span>)} */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            // required
                            {...register("photo-url")}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Sign up" />
                    </div>
                </form>
                <p className="mt-6">
                    Already have an account? Please
                    <Link to="/login" className="link link-primary ml-2">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;