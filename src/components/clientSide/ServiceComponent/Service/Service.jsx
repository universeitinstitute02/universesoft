import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import './Service.css'
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className='bg-[#F5F5F5] mt-12'>
            <div className=' w-11/12 mx-auto '>
                <h1 className='text-center text-3xl md:text-4xl pt-14 uppercase mb-10 font-bold'> Universe soft tech <span className='underline text-blue-800'>Services</span></h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-6 pb-10'>

                    <Link to={`/serviceDetails`} className='flex flex-col justify-center items-center w-48 lg:w-72 xl:w-48 border py-6 shadow-xl '>
                        <img className='w-10 items-center' src="https://res.cloudinary.com/dqescabbl/image/upload/v1724165213/images_2_fogwoe.png" alt="" />
                        <h1 className='my-3 text-lg text-blue-900 font-semibold cursor-pointer'>Dedicated Server</h1>
                        <div className='flex items-center text-sm cursor-pointer'>
                            <p className='flex items-center gap-2 view'>View Details <IoIosArrowForward className='icon'></IoIosArrowForward></p>
                        </div>
                    </Link>

                    <Link to={`/serviceDetails`} className='flex flex-col justify-center items-center w-48 lg:w-72 xl:w-48 border py-6 shadow-xl '>
                        <img className='w-10 items-center' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723535563/soft%20tech/alpha%20net%20service/cez4p70czbvpyh6r636s.png" alt="" />
                        <h1 className='my-3 text-lg text-blue-900 font-semibold cursor-pointer'>Web Design</h1>
                        <div className='flex items-center text-sm cursor-pointer'>
                            <p className='flex items-center gap-2 view'>View Details <IoIosArrowForward className='icon'></IoIosArrowForward></p>
                        </div>
                    </Link>

                    <Link to={`/serviceDetails`} className='flex flex-col justify-center items-center w-48 lg:w-72 xl:w-48 border py-6 shadow-xl '>
                        <img className='w-10 items-center' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723535801/soft%20tech/alpha%20net%20service/j8gsqyonpwombouvwdde.png" alt="" />
                        <h1 className='my-3 text-lg text-blue-900 font-semibold cursor-pointer'>VPS</h1>
                        <div className='flex items-center text-sm cursor-pointer'>
                            <p className='flex items-center gap-2 view'>View Details <IoIosArrowForward className='icon'></IoIosArrowForward></p>
                        </div>
                    </Link>

                    <Link to={`/serviceDetails`} className='flex flex-col justify-center items-center w-48 lg:w-72 xl:w-48 border py-6 shadow-xl '>
                        <img className='w-10 items-center' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723535930/soft%20tech/alpha%20net%20service/karvgzzuwb4h9fikvcru.png" alt="" />
                        <h1 className='my-3 text-lg text-blue-900 font-semibold cursor-pointer'>VPN</h1>
                        <div className='flex items-center text-sm cursor-pointer'>
                            <p className='flex items-center gap-2 view'>View Details <IoIosArrowForward className='icon'></IoIosArrowForward></p>
                        </div>
                    </Link>

                    <Link to={`/serviceDetails`} className='flex flex-col justify-center items-center w-48 lg:w-72 xl:w-48 border py-6 shadow-xl '>
                        <img className='w-10 items-center' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723537175/soft%20tech/alpha%20net%20service/ckzulzxpyhltlm8cdz9v.png" alt="" />
                        <h1 className='my-3 text-lg text-blue-900 font-semibold cursor-pointer'>Enterprise Email</h1>
                        <div className='flex items-center text-sm cursor-pointer'>
                            <p className='flex items-center gap-2 view'>View Details <IoIosArrowForward className='icon'></IoIosArrowForward></p>
                        </div>
                    </Link>

                    <Link to={`/serviceDetails`} className='flex flex-col justify-center items-center w-48 lg:w-72 xl:w-48 border py-6 shadow-xl '>
                        <img className='w-10 items-center' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723537310/soft%20tech/alpha%20net%20service/cqcvjk21jcsdwuya2mhn.png" alt="" />
                        <h1 className='my-3 text-lg text-blue-900 font-semibold cursor-pointer'>Cloud Storage</h1>
                        <div className='flex items-center text-sm cursor-pointer'>
                            <p className='flex items-center gap-2 view'>View Details <IoIosArrowForward className='icon'></IoIosArrowForward></p>
                        </div>
                    </Link>

                    <Link to={`/serviceDetails`} className='flex flex-col justify-center items-center w-48 lg:w-72 xl:w-48 border py-6 shadow-xl '>
                        <img className='w-10 items-center' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723537411/soft%20tech/alpha%20net%20service/ljkdkvw3vwuetmuedmgm.png" alt="" />
                        <h1 className='my-3 text-lg text-blue-900 font-semibold cursor-pointer'>Domain</h1>
                        <div className='flex items-center text-sm cursor-pointer'>
                            <p className='flex items-center gap-2 view'>View Details <IoIosArrowForward className='icon'></IoIosArrowForward></p>
                        </div>
                    </Link>

                    <Link to={`/serviceDetails`} className='flex flex-col justify-center items-center w-48 lg:w-72 xl:w-48 border py-6 shadow-xl '>
                        <img className='w-10 items-center' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723537583/soft%20tech/alpha%20net%20service/ymhwc0oz2rrbxsfcvdwk.png" alt="" />
                        <h1 className='my-3 text-lg text-blue-900 font-semibold cursor-pointer'>Web Hosting</h1>
                        <div className='flex items-center text-sm cursor-pointer'>
                            <p className='flex items-center gap-2 view'>View Details <IoIosArrowForward className='icon'></IoIosArrowForward></p>
                        </div>
                    </Link>

                    <Link to={`/serviceDetails`} className='flex flex-col justify-center items-center w-48 lg:w-72 xl:w-48 border py-6 shadow-xl '>
                        <img className='w-10 items-center' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723537801/soft%20tech/alpha%20net%20service/k4dzdcxcstfjedy6sghk.png" alt="" />
                        <h1 className='my-3 text-lg text-blue-900 font-semibold cursor-pointer'>SSL Web Security</h1>
                        <div className='flex items-center text-sm cursor-pointer'>
                            <p className='flex items-center gap-2 view'>View Details <IoIosArrowForward className='icon'></IoIosArrowForward></p>
                        </div>
                    </Link>

                    <Link to={`/serviceDetails`} className='flex flex-col justify-center items-center w-48 lg:w-72 xl:w-48 border py-6 shadow-xl '>
                        <img className='w-10 items-center' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723537919/soft%20tech/alpha%20net%20service/zenl8txf3fbzogwbahps.png" alt="" />
                        <h1 className='my-3 text-lg text-blue-900 font-semibold cursor-pointer'>Server Colocation</h1>
                        <div className='flex items-center text-sm cursor-pointer'>
                            <p className='flex items-center gap-2 view'>View Details <IoIosArrowForward className='icon'></IoIosArrowForward></p>
                        </div>
                    </Link>

                    <Link to={`/serviceDetails`} className='flex flex-col justify-center items-center w-48 lg:w-72 xl:w-48 border py-6 shadow-xl '>
                        <img className='w-10 items-center' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723538029/soft%20tech/alpha%20net%20service/kamxlqtrdc11y618bfyw.png" alt="" />
                        <h1 className='my-3 text-lg text-blue-900 font-semibold cursor-pointer'>Bulk SMS</h1>
                        <div className='flex items-center text-sm cursor-pointer'>
                            <p className='flex items-center gap-2 view'>View Details <IoIosArrowForward className='icon'></IoIosArrowForward></p>
                        </div>
                    </Link>

                    <Link to={`/serviceDetails`} className='flex flex-col justify-center items-center w-48 lg:w-72 xl:w-48 border py-6 shadow-xl '>
                        <img className='w-10 items-center' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723538213/soft%20tech/alpha%20net%20service/a5fteikshgttfe2c0vzm.png" alt="" />
                        <h1 className='my-3 text-center text-lg text-blue-900 font-semibold cursor-pointer'>Business <br /> Telephone Systems</h1>
                        <div className='flex items-center text-sm cursor-pointer'>
                            <p className='flex items-center gap-2 view'>View Details <IoIosArrowForward className='icon'></IoIosArrowForward></p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;