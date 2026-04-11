import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const ServiceBanner = ({ service }) => {

    const { banner_title, banner_description, banner_img } = service;
    useEffect(() => {
        Aos.init({ duration: 700, delay: 200 });
    }, [])

    return (
        <div>
            <div className="lg:min-h-screen my-5 grid grid-cols-1 gap-20 lg:grid-cols-2 w-4/5 mx-auto justify-center items-center">
                <div className="my-aos-element mb-5" data-aos="zoom-out">
                    <p className='lg:text-5xl text-3xl text-center lg:text-start font-bold'>
                        {banner_title}
                    </p>
                    <p className='text-xl text-center mt-5 lg:text-start'>{banner_description}</p>


                    <div className=" flex justify-center lg:justify-start">
                        <Link to='/request-demo'>
                            <button className='lg:p-3 mt-4  border-none rounded-xl bg-text_primari hover:bg-bg_btn_hover text-white font-bold lg:text-lg text-xs p-2'>Request Demo</button>
                        </Link>

                    </div>

                </div>
                <div className="" data-aos="zoom-in">
                    <img src={banner_img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;