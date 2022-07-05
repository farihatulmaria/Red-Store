import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import bannerImg from '../assets/img/image1.png';
const Banner = () => {
    return (
        <div className='banner md:grid grid-cols-2'>
            <div className="banner-content my-10 mx-5 flex items-center justify-center">
                <div>
                    <h1 className='text-6xl font-bold my-3 leading-[70px]'>Give Your Workout <br /> A New Style!</h1>
                    <p>Success isn't always about greatness. It's about consistency. Consistent <br /> hard work gains success. Greatness will come.</p>
                    <button className='btn btn-primary'>Explore Now <FontAwesomeIcon icon={faArrowRightLong} /></button>
                </div>
            </div>
            <div className="banner-img">
                <img src={bannerImg} alt="BannerImage" />
            </div>
        </div>
    );
};

export default Banner;