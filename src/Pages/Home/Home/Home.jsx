import React from 'react';
import Banner from '../Banner/Banner';
import HowWork from '../HowWork/HowWork';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div className='my-7'>
           <Banner></Banner>
           <HowWork></HowWork>
           <Services></Services>
           <Brands></Brands>
           <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;