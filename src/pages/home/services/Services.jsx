import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(null)
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setServices(data)
                setLoading(false)
            })
    }, [])

    return (
        <div className='m-8'>
            <div className='*:text-center text mb-6'>
                <h1 className="text-2xl font-bold">Lorem ipsum dolor sit.</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ullam, iusto beatae aliquam alias quasi? Rem alias ratione doloremque nobis.</p>
            </div>
            {loading && <p className='text-3xl text-center'>Loading...</p>}
            <div className='grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-10'>
                {services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)}
            </div>
        </div>
    );
};

export default Services;


// ```````````````````service card```````````````````
function ServicesCard({ service }) {
    const navigate = useNavigate()
    const { title, img, price } = service;
    return (
        <Link to={`/book-service/${service._id}`}>
            <div className="card bg-base-100 shadow-md hover:shadow-2xl rounded-sm cursor-pointer">
                <figure className=''><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='font-bold text-success'>Price: <span>${price}</span></p>
                </div>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-outline btn-sm mr-4 mb-4"><FaArrowRight></FaArrowRight></button>
                </div> */}
            </div>
        </Link >
    )
}