import React from 'react';
import image from '../../assets/Error.png'
import Navbar from '../../Pages/Shered/Navbar/Navbar';
import Footer from '../../Pages/Shered/Footer/footer';
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='w-11/12 mx-auto py-2'>
            <Navbar></Navbar>
            <div className='min-h-screen'>
              <div className='bg-white py-20 rounded-2xl mt-8 flex flex-col justify-center items-center'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <Link to='/' className="text-xl font-bold bg-primary py-3 px-6 rounded-xl ">Go Home</Link>
                </div>
              </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;