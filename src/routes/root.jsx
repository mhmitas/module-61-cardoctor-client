import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <div>
                <Navbar></Navbar>
                <div className=''>
                    <Outlet></Outlet>
                </div>
            </div>
            <Toaster></Toaster>
            <Footer></Footer>
        </div>
    );
};

export default Root;