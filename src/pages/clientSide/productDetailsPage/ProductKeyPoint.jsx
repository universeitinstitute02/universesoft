import Aos from 'aos';
import React, { useEffect } from 'react';

const ProductKeyPoint = () => {

    useEffect(() => {
        Aos.init({ duration: 500, delay: 100 });
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 text-center lg:text-start">
                <div className="  bg-green-500" data-aos="fade-up">
                    <div className='p-10 text-white'>
                        <p className='text-xl lg:text-3xl font-bold'>
                            High-Quality Standards
                        </p>
                        <p>We prioritize quality to ensure that every product/service meets industry standards and exceeds customer expectations.</p>
                    </div>
                </div>

                <div className="  bg-blue-500" data-aos="fade-up">
                    <div className='p-10 text-white'>
                        <p className='text-xl lg:text-3xl font-bold'>
                            Customer-Focused Solutions
                        </p>
                        <p>
                        Our solutions are designed with the customer in mind, offering personalized experiences and exceptional service.
                        </p>
                    </div>
                </div>

                <div className="  bg-yellow-500" data-aos="fade-up">
                    <div className='p-10 text-white'>
                        <p className='text-xl lg:text-3xl font-bold'>
                        Innovative Approach
                        </p>
                        <p>
                        We embrace the latest technologies and trends to provide cutting-edge products/services that stay ahead of the market.
                        </p>
                    </div>
                </div>

                <div className="  bg-pink-500" data-aos="fade-up">
                    <div className='p-10 text-white'>
                        <p className='text-xl lg:text-3xl font-bold'>
                        Reliable Support
                        </p>
                        <p>
                        Our dedicated support team is available 24/7 to assist you with any queries or issues, ensuring a smooth and hassle-free experience.
                        </p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default ProductKeyPoint;