import React, { useContext } from 'react';

const BookingTableRow = ({ booking, handleDelete }) => {
    const { service_img, price, service_name, date, _id } = booking

    return (
        <tr className='text-center'>
            <td>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-circle btn-sm hover:btn-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="flex items-center justify-center gap-3">
                    <div className="avatar">
                        <div className="w-32">
                            <img src={service_img || 'https://i.ibb.co/87ZFRs9/3156704.jpg'} />
                        </div>
                    </div>
                </div>
            </td>
            <td>{service_name || 'Check vehcle heath'}</td>
            <td>{price}</td>
            <td>booked by: <strong>{booking.user?.email}</strong> <br />{date}</td>
            <th>
                <button className='badge badge-success badge-outline'>Pending</button>
            </th>
        </tr>
    );
};

export default BookingTableRow;