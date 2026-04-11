import React, { useEffect } from 'react';
import Aos from 'aos';

const FeaturedProductSection = ({ product }) => {
    useEffect(() => {
        Aos.init({ duration: 500, delay: 100 });
    }, []);
    return (
        <div className='w-11/12 mx-auto  lg:mt-16 mt-5'>
            <div className="lg:flex gap-10" data-aos="fade-up">
                <div className="lg:w-1/2 space-y-3 flex flex-col justify-center items-center">
                    <p className='text-3xl lg:text-5xl font-bold'>{ product?.feature_title}</p>
                    <p className='lg:text-xl text-xs'>
                        {product?.feature_description}
                    </p>
                </div>
                <div className="lg:w-1/2 mt-5">
                    <img src={product?.feature_img} alt="" className='rounded-lg border shadow-md' />
                </div>
            </div>
        </div>
    );
};

export default FeaturedProductSection;