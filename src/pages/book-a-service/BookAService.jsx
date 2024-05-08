import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ServerContext } from '../../providers/ServerProvider';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import toast from 'react-hot-toast';

const BookAService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { serverLink } = useContext(ServerContext)
    const { user } = useContext(AuthContext)
    const params = useParams()
    const [serviceData, setServiceData] = useState({})
    useEffect(() => {
        fetch(`${serverLink}/services/${params.id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServiceData(data)
            })
    }, [])

    function onSubmit(data, e) {
        const currentUser = { name: user.displayName, email: user.email, uid: user.uid }
        data.user = currentUser;
        data.service_id = serviceData._id;
        data.service_name = serviceData.title;
        data.price = serviceData.price;
        data.service_img = serviceData.img;
        fetch(`${serverLink}/bookings`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success(`Added to list`)
                    e.target.reset()
                }
            })

    }

    return (
        <>
            <div className='lg:w-4/5 mx-auto my-20 bg-base-100 p-10 lg:p-20'>
                <h3 className='text-2xl font-bold text-center mb-8 text-success'>Book Service</h3>
                <table className='table w-1/2 bg-base-200 rounded-sm my-6'>
                    <tbody>
                        <tr>
                            <th>Service Name</th>
                            <td>{serviceData.title}</td>
                        </tr>
                        <tr>
                            <th>Cost</th>
                            <td>${serviceData.price}</td>
                        </tr>
                    </tbody>
                </table>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=''
                >
                    <div className='grid md:grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name")}
                                type="text"
                                required
                                readOnly
                                defaultValue={user?.displayName && user?.displayName}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input
                                {...register("contact_number")}
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
                                type="email"
                                required
                                readOnly
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

export default BookAService;