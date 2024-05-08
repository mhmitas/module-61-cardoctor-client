import React, { useContext, useEffect, useState } from 'react';
import { ServerContext } from '../../providers/ServerProvider';
import { AuthContext } from '../../providers/AuthProviders';
import BookingTableRow from './BookingTableRow';
import toast from 'react-hot-toast';

const AllBookings = () => {
    const { serverLink } = useContext(ServerContext)
    const { user } = useContext(AuthContext)

    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch(`${serverLink}/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [])

    function handleDelete(id) {
        const proceed = confirm('Are you sure')
        if (proceed) {
            fetch(`${serverLink}/bookings/${id}`, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Deleted success')
                        const updataBookings = bookings.filter(booking => booking._id !== id)
                        setBookings(updataBookings)
                    }
                })
        }
    }

    return (
        <div className='w-full h-full my-10'>
            <h3>My Booking List ({bookings.length})</h3>

            <div className="overflow-x-auto my-10">
                <table className="table lg:w-2/3 mx-auto bg-base-100">
                    <tbody>
                        {
                            bookings.map(booking => <BookingTableRow key={booking._id} booking={booking} handleDelete={handleDelete}></BookingTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBookings;

// https://i.ibb.co/87ZFRs9/3156704.jpg