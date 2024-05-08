import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className="mx-8">
            <div className="flex flex-col-reverse gap-4">
                <div className='relative col-span-3'>
                    <img src={person} className="hidden w-3/4 rounded-lg shadow-md" />
                    <img src={parts} className="md:hidden block w-full rounded-md border-8 border-base-100 shadow-md" />
                </div>
                <div className='col-span-2  flex-col justify-center  space-y-2'>
                    <h1 className="text-xl font-bold text-success text-center">About us</h1>
                    <h1 className="text-3xl font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, eius!</h1>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ullam, iusto beatae aliquam alias quasi? Rem alias ratione doloremque nobis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quaerat omnis impedit, dolorum iusto natus amet eaque ipsam! Ullam cumque possimus voluptas minus, corporis necessitatibus, <br />nesciunt modi, magni alias odio dignissimos est aliquid? Vitae ipsa a eos voluptate! Tempora accusantium, facilis nihil et est sint numquam neque vitae rerum repellendus.
                    </p>
                    <div><button className="btn btn-sm btn-outline mx-auto">Know More</button></div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;