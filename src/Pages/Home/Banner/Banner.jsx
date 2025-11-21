import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../../assets/banner/banner1.png'
import image2 from '../../../assets/banner/banner2.png'
import image3 from '../../../assets/banner/banner3.png'
import { Link } from 'react-router';
import Arrow from '../../../Components/Arrow/Arrow';
const Banner = () => {
    return (
        <div>
            <Carousel
             autoPlay={true} infiniteLoop={true}
             >
                <div className='relative'>
                    <img src={image1} />
                  <div className='flex absolute top-155 left-30'>
                     <Link className='text-xl  font-bold bg-primary py-3 px-6 rounded-xl'>Track Your Parcel</Link> <Arrow></Arrow>
                  </div>
                   <Link  className=' absolute top-155 left-100 text-xl font-bold  py-3 px-6 outline outline-[#DADADA] rounded-xl bg-base-300'>Be A Rider</Link>
                </div>
                <div className='relative'>
                    <img src={image2} />
                   <div className='flex absolute top-155 left-30'>
                     <Link className='text-xl  font-bold bg-primary py-3 px-6 rounded-xl'>Track Your Parcel</Link> <Arrow></Arrow>
                  </div>
                   <Link  className=' absolute top-155 left-100 text-xl font-bold  py-3 px-6 outline outline-[#DADADA] rounded-xl bg-base-300'>Be A Rider</Link>
                </div>
                <div className='relative'>
                    <img src={image3} />
                     <div className='flex absolute top-140 left-30'>
                     <Link className='text-xl  font-bold bg-primary py-3 px-6 rounded-xl'>Track Your Parcel</Link> <Arrow></Arrow>
                  </div>
                   <Link  className=' absolute top-140 left-100 text-xl font-bold  py-3 px-6 outline outline-[#DADADA] rounded-xl bg-base-300'>Be A Rider</Link>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;