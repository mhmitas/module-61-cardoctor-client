import React from 'react';
import Banner from './Banner/Banner';
import AboutUs from '../about-us/AboutUs';
import Services from './services/Services';

const Home = () => {
    return (
        <div className='*:mb-20'>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default Home;