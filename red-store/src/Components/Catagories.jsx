import React from 'react';
import cartagory1 from '../assets/img/category-1.jpg';
import cartagory2 from '../assets/img/category-2.jpg';
import cartagory3 from '../assets/img/category-3.jpg';
const Catagories = () => {
    return (
        <div className='catagories grid grid-cols-3 gap-7 m-16 small-container'>
            <img src={cartagory1} alt="cartagory1" />
            <img src={cartagory2} alt="cartagory2" />
            <img src={cartagory3} alt="cartagory3" />
        </div>
    );
};

export default Catagories;