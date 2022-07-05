import React from 'react';
import product1 from '../assets/img/product-1.jpg';
import Title from './Title';
const FeaturedProducts = () => {
    return (
        <div className='featured-products'>
            <Title name={'Featured Products'}/>
            <div className="small-container">
                <div className="product">
                    <img src={product1} alt="" className='w-60' />
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;