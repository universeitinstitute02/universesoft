import React from 'react';
import "./Mission.css";
import { MdArrowForwardIos } from "react-icons/md";



const Mission = () => {
    return (
        <div className='bg-[#F5F5F5] border'>
            <div className='xl:px-20 px-4 flex'>
                <div className='hero lg:h-[1000px] xl:h-[800px] xl:w-1/3 bg-cover bg-center hidden lg:block ' style={{backgroundImage:"url('https://i.ibb.co/whpBZQ5/vission-and-mission.jpg')"}}>

                    {/* <div className='w-full h-full bg-[#003962] opacity-70'> */} 
                     
                    <div className='hero-overlay bg-[#0c2d46ef]'>
                        <h1 className='flex text-2xl items-center justify-center text-white pt-80'>Company Mission  <span className='underline'> & </span> Vission</h1>
                    </div>        
                </div>   

                <div className='w-full xl:w-2/3 xl:mx-32 lg:mx-10 my-8'>
                    <h1 className='text-2xl font-semibold mb-3'>Mission</h1>
                    <p className='text-lg mb-5 text-justify'>Our goal is to help customer with the best enterprise solutions with the most up-to-date and high-quality infrastructure at the most possible affordable prices. Every day, we work hard to make it as simple as possible for people to use the service, because we believe that simplicity is the key to success. We offer the most extensive service with security, and support. Our experience taught us that long-term client retention can only be achieved if clients are consistently satisfied. That's why we make this our top priority. We are dedicated for serving essential IT solutions for different classes of customers.</p>

                    <div>
                        <h1 className='text-2xl font-semibold mb-3'>Vision</h1>
                        <p className='text-lg mb-5 text-justify'>To become the world's most respectable IT Solutions company through offering world-class quality, result-oriented products and services with a focus on emerging technologies. Finally, we would like to be known as industry leaders in the IT Solutions Sector by our customers.</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold mb-3'>Values</h1>

                        <div className='sm:flex gap-20'>
                            <div>
                            <div className='flex items-center text-xl'>
                                <MdArrowForwardIos className='font-bold mr-2'></MdArrowForwardIos>
                                <p className='text-lg'>Respect</p>
                            </div>

                            <div className='flex items-center text-xl'>
                                <MdArrowForwardIos className='font-bold mr-2'></MdArrowForwardIos>
                                <p className='text-lg'>Trust</p>
                            </div>
                            <div className='flex items-center text-xl'>
                                <MdArrowForwardIos className='font-bold mr-2'></MdArrowForwardIos>
                                <p className='text-lg'>Consistent</p>
                            </div>

                            <div className='flex items-center text-xl'>
                                <MdArrowForwardIos className='font-bold mr-2'></MdArrowForwardIos>
                                <p className='text-lg'>Integrity</p>
                            </div>
                        </div>
                        
                        <div>
                                <div className='flex items-center text-xl'>
                                    <MdArrowForwardIos className='font-bold mr-2'></MdArrowForwardIos>
                                    <p className='text-lg'>Innovation</p>
                                </div>

                                <div className='flex items-center text-xl'>
                                    <MdArrowForwardIos className='font-bold mr-2'></MdArrowForwardIos>
                                    <p className='text-lg'>Discipline</p>
                                </div>
                                <div className='flex items-center text-xl'>
                                    <MdArrowForwardIos className='font-bold mr-2'></MdArrowForwardIos>
                                    <p className='text-lg'>Continues improvement</p>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>       
            </div>

            
        </div>
        
    );
};

export default Mission;