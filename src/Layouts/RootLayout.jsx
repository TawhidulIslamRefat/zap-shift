import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shered/Navbar/Navbar';
import Footer from '../Pages/Shered/Footer/footer';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen w-11/12 mx-auto'>
             <Navbar></Navbar>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;