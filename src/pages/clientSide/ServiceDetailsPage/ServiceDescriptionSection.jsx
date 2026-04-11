import Aos from 'aos';
import React, { useEffect } from 'react';
import { FcIdea } from 'react-icons/fc';
import { PiUserSwitchBold } from 'react-icons/pi';

const ServiceDescriptionSection = ({ descriptions }) => {
    useEffect(() => {
        Aos.init({ duration: 500, delay: 100 });
    }, [])

    return (
        <div>
            <div className=' my-10'>
                <p className='text-2xl lg:text-7xl font-bold text-center'> Enjoy High Quality Features </p>
                <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-2 w-11/12 mx-auto lg:mt-24 mt-10 " >

                    {
                        descriptions?.key_point?.map(description =>
                            <div className="border rounded-xl pb-5  flex flex-col justify-center items-center space-y-5 shadow-xl my-aos-element" >
                                <figure className="px-2 sm:px-10 pt-2 sm:pt-10 h-40 sm:h-60 w-full overflow-hidden">
                                    <img
                                        src={description?.feature_img}
                                        alt=""
                                        className="rounded-xl w-full h-full object-cover"
                                    />
                                </figure>
                                {/* <img src={description.description_logo} alt="" className='w-1/2' /> */}
                                <p className="font-bold text-xs lg:text-xl text-center">{description?.feature_title}</p>
                                <p className='lg:px-10 px-3 lg:text-sm text-sm'>
                                    {description?.feature_description.slice(0, 200)}
                                </p>
                            </div>
                        )
                    }



                </div>
            </div>
        </div>
    );
};

export default ServiceDescriptionSection;