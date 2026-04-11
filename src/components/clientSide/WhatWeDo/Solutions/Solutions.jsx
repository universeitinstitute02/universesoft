import React, { useState } from 'react';
import { GiGemChain, GiBrainTentacle } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";

const Solutions = () => {

    const [showingSolutions, setShowingSolutions] = useState('Solutions')

    const solutionsStyle = (name) => `transition-all duration-300 md:flex items-center gap-10 mt-12  ${showingSolutions === name ? 'opacity-100 z-10' : 'opacity-0'}`
    const buttonStyle = `flex items-center px-4 gap-2 my-10 ml-[10%] mr-[-70px] py-4 rounded-lg  hover:bg-text_primari transition-all duration-300 active:scale-90 cursor-pointer`

    return (


        <div className='w-11/12 grid grid-cols-1 lg:grid-cols-3 mx-auto shadow-2xl  lg:gap-5 p-2 xl:pb-10'>
            <div className='bg-[#004080]   w-[85%] relative -top-12 -left-6 text-white md:-top-10 md:-left-10 rounded-lg '>
                <div onClick={() => setShowingSolutions('Solutions')} className={`${buttonStyle} ${showingSolutions ==='Solutions' && 'bg-text_primari'}`}>
                    <GiGemChain className='text-2xl'></GiGemChain>
                    <button className='text-xl'>Solutions</button>
                </div>

                <div onClick={() => setShowingSolutions('Infrastructure')} className={`${buttonStyle} ${showingSolutions ==='Infrastructure' && 'bg-text_primari'}`}>
                    <GiBrainTentacle className='text-2xl'></GiBrainTentacle>
                    <button className='text-xl'>Infrastructure</button>
                </div>

                <div onClick={() => setShowingSolutions('Platforms')} className={`${buttonStyle} ${showingSolutions ==='Platforms' && 'bg-text_primari'}`}>
                    <FaComputer className='text-2xl'></FaComputer>
                    <button className='text-xl'>Platforms</button>
                </div>

                <div onClick={() => setShowingSolutions('Friendly Support')} className={`${buttonStyle} ${showingSolutions ==='Friendly Support' && 'bg-text_primari'}`}>
                    <IoPersonAdd className='text-2xl'></IoPersonAdd>
                    <button className='text-xl text-start'>Friendly Support</button>
                </div>

            </div>

            <div className='md:col-span-2'>
                <div className={`${solutionsStyle('Solutions')} absolute`}>
                    <div className='w-full sm:w-96'>
                        <h1 className='text-3xl font-bold'>Solutions</h1>
                        <div className='border w-10 my-3 bg-[#164e87] '></div>
                        <p className='text-xl text-justify text-wrap sm:pb-5 pr-4'>You can get all solutions that a successful business needs. You can choose Web Design, Dedicated Servers, Web Hosting, SSL Certificate, Business Email, VPS, Cloud Storage, Business Telephone and more for your business.</p>
                    </div>

                    <div className='mt-12'>
                        <img className='w-[400px]' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723456523/u8sbhqjtwkhhl5vzdemk.svg" alt="" />
                    </div>
                </div>

                <div className={`${solutionsStyle('Platforms')} absolute`}>
                    <div className='w-full sm:w-96'>
                        <h1 className='text-3xl font-bold'>Platforms</h1>
                        <div className='border w-10 my-3 bg-[#164e87] '></div>
                        <p className='text-xl text-justify'>You can get all solutions that a successful business needs. You can choose Web Design, Dedicated Servers, Web Hosting, SSL Certificate, Business Email, VPS, Cloud Storage, Business Telephone and more for your business.</p>
                    </div>

                    <div>
                        <img className='w-[400px]' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723456523/u8sbhqjtwkhhl5vzdemk.svg" alt="" />
                    </div>
                </div>



                <div className={`${solutionsStyle('Infrastructure')} absolute`}>
                    <div className='w-full sm:w-96'>
                        <h1 className='text-3xl font-bold'>Infrastructure</h1>
                        <div className='border w-10 my-3 bg-[#164e87] '></div>
                        <p className='text-xl text-justify'>We manage our own private infrastructure that is built with the latest hardware at multiple Datacenters (Tier 3 & Tier 4) in the USA and Bangladesh.</p>
                    </div>

                    <div>
                        <img className='w-[400px]' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723476648/tqday0pubp3uxwesbzpw.svg" alt="" />
                    </div>
                </div>
                <div className={`${solutionsStyle('Friendly Support')} `}>
                    <div className='w-full sm:w-96'>
                        <h1 className='text-3xl font-bold'>Friendly Support</h1>
                        <div className='border w-10 my-3 bg-[#164e87] '></div>
                        <p className='text-xl text-justify'>We manage our own private infrastructure that is built with the latest hardware at multiple Datacenters (Tier 3 & Tier 4) in the USA and Bangladesh.</p>
                    </div>

                    <div>
                        <img className='w-[400px]' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723476648/tqday0pubp3uxwesbzpw.svg" alt="" />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Solutions;











