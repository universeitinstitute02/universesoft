import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaUsps } from 'react-icons/fa6';

const CEOSpeech = () => {
    return (
        <div className="lg:py-0 lg:px-10 my-20">
            <p className="text-4xl font-bold mb-4 bg-primary text-white w-1/4 px-4 py-2 rounded-l-lg">CEO Speech</p>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2  ">
                {/* left side */}
                <div className="flex flex-col lg:flex-row md:flex-row gap-5 p-5 rounded-l-2xl justify-center items-center lg:items-start md:items-start bg-[#fff8e8] text-black ">

                    <div className="text-center md:text-start lg:text-start">
                        <div className="flex items-center">
                            <FaUsps className='text-7xl text-universe_secondary' />
                            <h5 className='font-bold'>Always on Top</h5>
                        </div>
                        <h2 className="font-bold lg:text-3xl md:text-2xl text-xl mt-3">Universe Soft Tech In brief</h2>
                        <p className="leading-relaxed lg:text-[18px] text-base mt-5 mb-10">
                            Universe soft Tech is a software development company in Bangladesh. We em- barked on this journey in 2020 and from 2023 our team started working under the name of Universe Soft Tech, and we're passionate about giving customers the best possible experience Our motto is to make Business Digital For Today And The Future "Technology Towards Digitalization".

                            Universe Soft Tech is one of the best software and web development company. We do all kinds of software and web development for any industry, business, shop at a relatively affordable price. If you want to manage all the tasks of your business organization perfectly with professional software and web development, then con- tact us today.
                        </p>
                        
                    </div>

                </div>
                {/* middle */}


                {/* right side */}
                <div className="p-5 bg-[#b0c8e6] rounded-r-2xl text-black">
                    <div>
                        <FaQuoteLeft className="text-3xl mb-10"></FaQuoteLeft>
                        <p className="mb-16">&quot;
                            I am heart full of pride as the CEO of Universe Soft Tech, Our goal is to empower Bangladesh and beyond through innovative and businesses and communities in Ban sustainable software solutions. We are dedicated to providing cutting edge technolo gy that enhances efficiency, fosters growth, and transforms ideas into reality.

                            We aim to contribute significantly to Bangladesh's digital advancement, creating a brighter, technologically advanced future for all. We are to be a pioneering force in Bangladesh's software industry, renowned for our unwavering commitment to excel- lence, integrity, and creativity. We aspire to develop world-class software solutions that not only meet the evolving needs of our clients but also inspire positive change.

                            Thank you.
                            &quot;</p>
                        {/* author */}
                        <div className="flex gap-5 items-center">
                            <img className="w-[70px] rounded-full" src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1734868951/UniverseSoftTech/Image/fcybr3s74j9fhwnver6c.jpg" alt="" />
                            <div className="space-y-2">
                                <p>ENGR. MD. GOLAM KIBRIYA</p>
                                <p>CEO</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default CEOSpeech;