import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { FaEdit } from 'react-icons/fa';
import { getAuth, updateProfile } from 'firebase/auth';
import { AuthContext } from '../../providers/AuthProviders';
import { app } from '../../firebase/firebase.config';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false)
    const { user, setUser } = useContext(AuthContext)
    const auth = getAuth(app)

    const {
        register,
        handleSubmit,
    } = useForm()

    const onProfileUpdate = (data) => {
        // console.log(data);
        updateProfile(auth.currentUser, {
            displayName: data.name,
            photoURL: data.photoUrl,
        }).then(() => {
            toast.success('Updated')
            setIsEditing(false)
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="w-96 flex flex-col bg-base-100 mx-auto my-10 p-6">
            {/* // card body */}
            <div className="w-full flex flex-col items-center gap-3 ">
                <figure className='w-1/3'>
                    <img src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/tY0hxsg/default-profile.jpg'} alt={user?.displayName} className='rounded-full w-full' />
                </figure>
                {/* card body */}
                <div className={`p-4 ${isEditing ? "hidden" : ''}`}>
                    <h2 className=""><strong>User:</strong> {user?.displayName}</h2>
                    <p><strong>Email:</strong> {user?.email}</p>
                    <br />
                    <div className="">
                        <button onClick={() => setIsEditing(true)} className="btn btn-primary btn-outline"><FaEdit></FaEdit>Edit Profile</button>
                    </div>
                </div>
                {/* // update form */}
                <div className={`w-full p-10 pt-4  ${isEditing ? "" : 'hidden'}`}>
                    <div className='flex justify-end '>
                        <button onClick={() => setIsEditing(false)} className='text-2xl btn btn-sm hover:btn-error mb-4'>×</button>
                    </div>
                    <form
                        onSubmit={handleSubmit(onProfileUpdate)}
                        className="flex flex-col gap-3 w-full">
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            className='input input-primary w-full'
                            defaultValue={user?.displayName}
                            placeholder='Username'
                        />
                        <input
                            {...register("photoUrl")}
                            type="text"
                            className='input input-primary w-full'
                            defaultValue={user?.photoURL}
                            placeholder='Photo URL'
                        />
                        <button className=' mx-auto btn btn-primary'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;