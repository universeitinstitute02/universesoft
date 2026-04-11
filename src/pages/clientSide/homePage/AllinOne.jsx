// import React from 'react';
// import { FaAngleRight } from "react-icons/fa";
// import { FaQuoteLeft } from "react-icons/fa";
// import { FaUsps } from 'react-icons/fa6';

// const AllinOne = () => {
//     return (
//         <div className="lg:py-0 lg:px-10">
//             <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2  ">
//                 {/* left side */}
//                 <div className="flex flex-col lg:flex-row md:flex-row gap-5 p-5 rounded-l-2xl justify-center items-center lg:items-start md:items-start bg-[#fff8e8] text-black ">

//                     <div className="text-center md:text-start lg:text-start">
//                         <div className="flex items-center">
//                             <FaUsps className='text-7xl text-universe_secondary' />
//                             <h5 className='font-bold'>Always on Top</h5>
//                         </div>
//                         <h2 className="font-bold lg:text-3xl md:text-2xl text-xl mt-3">Universe Soft Tech In brief</h2>
//                         <p className="leading-relaxed lg:text-[18px] text-base mt-5 mb-10">
//                             Universe soft Tech is a software development company in Bangladesh. We em- barked on this journey in 2020 and from 2023 our team started working under the name of Universe Soft Tech, and we're passionate about giving customers the best possible experience Our motto is to make Business Digital For Today And The Future "Technology Towards Digitalization".

//                             Universe Soft Tech is one of the best software and web development company. We do all kinds of software and web development for any industry, business, shop at a relatively affordable price. If you want to manage all the tasks of your business organization perfectly with professional software and web development, then con- tact us today.
//                         </p>
                        
//                     </div>

//                 </div>
//                 {/* middle */}


//                 {/* right side */}
//                 <div className="p-5 bg-[#b0c8e6] rounded-r-2xl text-black">
//                     <div>
//                         <FaQuoteLeft className="text-3xl mb-10"></FaQuoteLeft>
//                         <p className="mb-16">&quot;
//                             I am heart full of pride as the CEO of Universe Soft Tech, Our goal is to empower Bangladesh and beyond through innovative and businesses and communities in Ban sustainable software solutions. We are dedicated to providing cutting edge technolo gy that enhances efficiency, fosters growth, and transforms ideas into reality.

//                             We aim to contribute significantly to Bangladesh's digital advancement, creating a brighter, technologically advanced future for all. We are to be a pioneering force in Bangladesh's software industry, renowned for our unwavering commitment to excel- lence, integrity, and creativity. We aspire to develop world-class software solutions that not only meet the evolving needs of our clients but also inspire positive change.

//                             Thank you.
//                             &quot;</p>
//                         {/* author */}
//                         <div className="flex gap-5 items-center">
//                             <img className="w-[70px] rounded-full" src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1734868951/UniverseSoftTech/Image/fcybr3s74j9fhwnver6c.jpg" alt="" />
//                             <div className="space-y-2">
//                                 <p>ENGR. MD. GOLAM KIBRIYA</p>
//                                 <p>CEO</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//             </div>

//         </div>
//     );
// };

// export default AllinOne;

import { FaQuoteLeft } from "react-icons/fa";
import { TbRocket } from "react-icons/tb";

const AllinOne = () => {
    return (
        <section className="py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">

                    {/* Left: Company brief */}
                    <div className="bg-amber-50 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                                <TbRocket className="text-amber-600 text-xl" />
                            </div>
                            <span className="text-sm font-medium text-amber-700">Always on Top</span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                            Universe Soft Tech — In Brief
                        </h2>
                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                            Universe Soft Tech is a software development company in Bangladesh, embarked in 2020.
                            We are passionate about helping businesses go digital — building affordable, high-quality
                            software and web solutions for any industry.
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed mt-3">
                            Our motto: <em className="text-gray-700 font-medium">"Technology Towards Digitalization."</em>
                        </p>
                    </div>

                    {/* Right: CEO quote */}
                    <div className="bg-blue-100 p-8 lg:p-12 flex flex-col justify-between">
                        <FaQuoteLeft className="text-blue-300 text-3xl mb-6" />
                        <p className="text-gray-700 text-sm lg:text-base leading-relaxed flex-1">
                            Our goal is to empower Bangladesh and beyond through innovative software solutions.
                            We are dedicated to cutting-edge technology that enhances efficiency, fosters growth,
                            and transforms ideas into reality. We aspire to develop world-class software solutions
                            that not only meet client needs but also inspire positive change.
                        </p>
                        <div className="flex items-center gap-4 mt-8">
                            <img
                                className="w-14 h-14 rounded-full object-cover ring-2 ring-white"
                                src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1734868951/UniverseSoftTech/Image/fcybr3s74j9fhwnver6c.jpg"
                                alt="CEO"
                            />
                            <div>
                                <p className="font-semibold text-gray-900 text-sm">Engr. Md. Golam Kibriya</p>
                                <p className="text-gray-500 text-xs mt-0.5">Chief Executive Officer</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AllinOne;