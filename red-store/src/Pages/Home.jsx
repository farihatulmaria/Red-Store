import React from 'react';
import Banner from '../Components/Banner';
import Catagories from '../Components/Catagories';
import FeaturedProducts from '../Components/FeaturedProducts';

const Home = () => {
    return (
        <>
            <Banner/>
            <Catagories/>
            <FeaturedProducts/>
        </>
    );
};

export default Home;