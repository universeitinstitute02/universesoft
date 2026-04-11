import React, { useEffect } from 'react';
import { FaMailBulk } from 'react-icons/fa';
import { FaMailchimp, FaPhone } from 'react-icons/fa6';
import { IoMailUnreadOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import productStore from '../../../api-request/product-api/productApi';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const UpdatedFooter = () => {
    const axiosPublic = useAxiosPublic()
    const { productDataListApi, productDataList } = productStore();

    const { data: allProducts = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/get-products');
            return res.data.data;
        }
    })

    let sliceProducts = allProducts.slice(0, 5);

    const { data: allservices = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const response = await axiosPublic.get('/get-all-service');
            return response.data.data;
        }
    })



    return (
        <div>
            <footer className="bg-universe_secondary body-font">
                <div className="container px-5 pt-9 text-[14px] mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    {/* Company Info */}
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                        <Link to='/' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1734948570/UniverseSoftTech/Image/qzaf0xtkw1kkgplltxqz.png" alt="Logo" className='w-52 ' />
                            <span className="ml-3 text-xl text-white"></span>
                        </Link>
                        <p className="mt-2 text-white">
                            House# 39/C (Siraj Convention Centre,Lift 4th floor),Main Road, Block-C, Aftabnagar, Merul Badda,Dhaka , Dhaka, Bangladesh, 1212
                        </p>
                        <p className="mt-2 text-white flex items-center justify-center md:justify-start gap-1">
                            <FaPhone /> +88 01886-061401
                        </p>
                        <p className="mt-2 text-white flex items-center justify-center md:justify-start gap-1">
                            <FaPhone /> +88 01821-779282
                        </p>
                        <p className="mt-2 text-white flex items-center justify-center md:justify-start gap-1">
                            <IoMailUnreadOutline /> info@softTech.com
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                        {/* Company Links */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Company</h2>
                            <nav className="list-none mb-10 text-white">
                                <li><Link to='/' className="hover:text-gray-800">Home</Link></li>
                                <li><Link to='/about-us' className="hover:text-gray-800">About Us</Link></li>
                                <li><Link to='/career' className="hover:text-gray-800">Careers</Link></li>
                                <li><Link to='/contact-us' className="hover:text-gray-800">Contact Us</Link></li>
                            </nav>
                        </div>

                        {/* Product Links */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Products</h2>
                            <nav className="list-none mb-10 text-white">
                                {
                                    sliceProducts.map((product, index) => (
                                        <li key={index}><Link to={`/productsDetails/${product._id}`} className="hover:text-[#f78230]">{product.nav_title}</Link></li>
                                    ))
                                }
                            </nav>
                        </div>

                        {/* Services Links */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Services</h2>
                            <nav className="list-none mb-10 text-white">
                                {
                                    allservices.map((service, index) => (
                                        <li key={index}><Link to={`/serviceDetails/${service._id}`} className="hover:text-[#f78230]">{service.nav_title}</Link></li>
                                    ))
                                }
                            </nav>
                        </div>

                        {/* Learn More Links */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Learn More</h2>
                            <nav className="list-none mb-10 text-white">
                                <li><Link to='/company-profile' className="hover:text-gray-800">Compony Profile</Link></li>
                                <li><Link to='/our-team' className="hover:text-gray-800">Our Team</Link></li>
                                <li><Link to='/blogs' className="hover:text-gray-800">Blogs</Link></li>
                                <li><Link to='/representative-login' className="hover:text-gray-800">Representative Login</Link></li>
                                <li><Link to='/client-login' className="hover:text-gray-800">Client Login</Link></li>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="bg-universe_secondary">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between">
                        <p className="text-gray-500 text-sm text-center sm:text-left">
                            <span className='text-white'>© 2024 Universe Soft Tech</span>
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank"><span className='text-universe_secondary '>—@ashikur rahman</span></a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <Link className="text-white">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </Link>
                            <Link className="ml-3 text-white">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </Link>
                            <Link className="ml-3 text-white">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </Link>
                            <Link className="ml-3 text-white">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </div>

    );
};

export default UpdatedFooter;