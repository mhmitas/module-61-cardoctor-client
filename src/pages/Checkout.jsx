import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../providers/AuthProviders';
import { ServerContext } from '../providers/ServerProvider';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { serverLink } = useContext(ServerContext)
    const { user } = useContext(AuthContext)
    const loadedData = useLoaderData()
    console.log(loadedData);

    function onSubmit(data) {
        const currentUser = { name: user.displayName, email: user.email, uid: user.uid }
        data.user = currentUser;
        fetch(`${serverLink}/bookings`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })

    }

    return (
        <>
            <div className='lg:w-4/5 mx-auto my-20 bg-base-100 p-10 lg:p-20'>
                <h3 className='text-3xl font-bold text-center mb-8'>Check Out</h3>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=''
                >
                    <div className='grid md:grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input
                                {...register("first_name")}
                                type="text"
                                required
                                defaultValue={user?.displayName && user?.displayName}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input
                                {...register("phone")}
                                type="text"
                                required
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                {...register("contact_email")}
                                type="text"
                                required
                                defaultValue={user?.email && user?.email}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input
                                {...register("date")}
                                type="date"
                                required
                                className="input input-bordered w-full" />
                        </div>
                        <textarea {...register("short_description")} className="textarea textarea-bordered my-2 md:col-span-2" required placeholder="Brief description of the issue or service needed"></textarea>

                        <input
                            type="submit" value="Add" className='btn mt-2 btn-primary w-full md:col-span-2' />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Checkout;