import React from 'react';
import image from '../../../assets/bookingIcon.png'

const HowWork = () => {
    return (
        <div className='w-10/12 mx-auto my-25'>
            <h1 className='text-[#03373D] text-3xl font-bold'>How it Works</h1>
            <div className='grid grid-cols-4 gap-6 mt-8'>
                <div className='bg-white p-8 rounded-3xl'> 
                    <img src={image} alt="" />
                    <h3 className='text-xl font-bold text-[#03373D] mt-4 mb-3'>Booking Pick & Drop</h3>
                    <p className='text-[16px] font-medium text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='bg-white p-8 rounded-3xl'> 
                    <img src={image} alt="" />
                    <h3 className='text-xl font-bold text-[#03373D] mt-4 mb-3'>Booking Pick & Drop</h3>
                    <p className='text-[16px] font-medium text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='bg-white p-8 rounded-3xl'> 
                    <img src={image} alt="" />
                    <h3 className='text-xl font-bold text-[#03373D] mt-4 mb-3'>Booking Pick & Drop</h3>
                    <p className='text-[16px] font-medium text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='bg-white p-8 rounded-3xl'> 
                    <img src={image} alt="" />
                    <h3 className='text-xl font-bold text-[#03373D] mt-4 mb-3'>Booking Pick & Drop</h3>
                    <p className='text-[16px] font-medium text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default HowWork;