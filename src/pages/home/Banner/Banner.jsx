import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className='relative h-[700px]'>
            <div className="carousel w-full h-full">
                <Hero id="1" leftId="6" rightId="2" img={img4}></Hero>
                <Hero id="2" leftId="1" rightId="3" img={img2}></Hero>
                <Hero id="3" leftId="2" rightId="4" img={img3}></Hero>
                <Hero id="4" leftId="3" rightId="5" img={img1}></Hero>
                <Hero id="5" leftId="4" rightId="6" img={img5}></Hero>
                <Hero id="6" leftId="5" rightId="1" img={img6}></Hero>
            </div>
        </div>
    );
};

export default Banner;

//----------------------------------

function Hero({ img, id, leftId, rightId }) {
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <img src={img} className="w-full h-full object-cover" />
            <div className="absolute flex bottom-5 gap-5 right-5 z-50">
                <a href={`#slide${leftId}`} className="btn">❮</a>
                <a href={`#slide${rightId}`} className="btn">❯</a>
            </div>
            <div className="absolute h-full flex w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] top-0 left-0 items-center">
                <div className='text-white space-y-6 w-full md:w-1/2 pl-12'>
                    <h3 className='text-6xl font-bold leading-[4rem]'>Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea ipsa illo!</p>
                    <div className='flex gap-6'>
                        <button className='btn btn-success '>Lorem</button>
                        <button className='btn btn-success '>Ipsum</button>
                    </div>
                </div>
            </div>
        </div>
    )
}