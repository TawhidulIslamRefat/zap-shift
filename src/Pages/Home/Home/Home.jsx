import React from 'react';
import Banner from '../Banner/Banner';
import HowWork from '../HowWork/HowWork';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='my-7'>
           <Banner></Banner>
           <HowWork></HowWork>
           <Services></Services>
        </div>
    );
};

export default Home;