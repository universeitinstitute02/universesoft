
// import { GoArrowDown, GoArrowRight, GoArrowUp } from "react-icons/go";
// import { Link } from "react-router-dom";
// import './HomePageStyle.css'
// import { useEffect, useState } from "react";
// import Aos from "aos";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";


// const OurProductsSection = ({ products }) => {


//     const [showProduct, setshowProduct] = useState(false)

//     useEffect(() => {
//         Aos.init({ duration: 1000, delay: 200 });
//     }, []);

//     let showProducts = products.slice().reverse().slice(0, 3);
//     if (showProduct) {
//         showProducts = products.slice().reverse();
//     }

//     // console.log(products);

//     const bgImg = {
//         backgroundImage: 'url("https://res.cloudinary.com/dxvacpgrv/image/upload/v1734869083/UniverseSoftTech/Image/rsthap3lzzhgnjnzdynn.png")',
//         backgroundSize: 'cover',
//         borderRadius: '10px',
//         overflow: 'hidden',
//     }
//     return (
//         <div className="bg-[#ffffff] lg:pt-16 my-aos-element">
//             <div className='container mx-auto px-5 flex-grow'>
//                 <div>
//                     <h1 className="text-2xl lg:text-5xl font-semibold text-center my-4"><span className="text-text_blue">What We</span> <span className="text-text_primari">Offers</span></h1>
//                     <p className="text-center text-xs mb-3 lg:text-xl">Explore how Soft Tech HRM, Soft Tech Attendance, and Soft Tech Inventory streamline and enhance your business operations</p>
//                 </div>

//                 {/* soft Tech product card */}
//                 <div className="grid grid-cols-2  lg:grid-cols-3 lg:gap-10 gap-4 lg:my-10" >


//                     {
//                         products && showProducts.map(product =>
//                             <div key={product._id} style={bgImg} className="shadow-2xl bg-white relative lg:min-h-[400px]">
//                                 {/* Top section with image and title */}
//                                 <div className="text-center py-5 md:py-8">
//                                     <img className=" mx-auto size-10 lg:size-32"
//                                         src={product?.nav_logo}
//                                         alt="Soft Tech HRM" />
//                                 </div>

//                                 {/* Text content */}
//                                 <div className="px-5 md:px-10 lg:px-5 py-14 text-white">
//                                     {/* Title with truncation and ellipsis */}
//                                     <h2 className="text-[14px] font-bold my-3 md:text-3xl lg:text-2xl text-center break-words leading-tight overflow-hidden text-ellipsis">
//                                         {product?.banner_title?.length > 50 ? `${product.banner_title.substring(0, 50)}...` : product.banner_title}
//                                     </h2>

//                                     {/* Description */}
//                                     <p className="text-center text-xs leading-relaxed lg:text-[14px] hidden lg:flex">
//                                         {product?.banner_description}
//                                     </p>
//                                 </div>

//                                 {/* Link/Button */}
//                                 <div className="absolute bottom-1 lg:bottom-5 left-1/2 transform -translate-x-1/2">
//                                     <Link to={`/productsDetails/${product._id}`} onClick={() => setshowProduct(!showProduct)} className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 text-xs">
//                                         <p>Details</p>
//                                         <GoArrowRight className="font-bold lg:text-xl" />
//                                     </Link>
//                                 </div>
//                             </div>

//                         )
//                     }





//                 </div>
//             </div>
//             <div className=" flex justify-center">
//                 <div className=" bottom-1 lg:bottom-5 left-1/2 transform -translate-x-1/2">
//                     <button onClick={() => setshowProduct(!showProduct)} className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 text-xs">
//                         <p>
//                             {
//                                 showProduct ? 'See Less' : 'See More'
//                             }
//                         </p>
//                         {
//                             showProduct ?  <GoArrowUp className="font-bold lg:text-xl" /> :  <GoArrowDown className="font-bold lg:text-xl" />
//                         }
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OurProductsSection;

import { useState, useEffect } from "react";
import { GoArrowDown, GoArrowRight, GoArrowUp } from "react-icons/go";
import { Link } from "react-router-dom";
import Aos from "aos";

const OurProductsSection = ({ products }) => {
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 700, delay: 100, once: true });
    }, []);

    // Show 3 by default, all if expanded
    const visibleProducts = showAll
        ? [...products].reverse()
        : [...products].reverse().slice(0, 3);

    const bgImg = {
        backgroundImage: 'url("https://res.cloudinary.com/dxvacpgrv/image/upload/v1734869083/UniverseSoftTech/Image/rsthap3lzzhgnjnzdynn.png")',
        backgroundSize: 'cover',
    };

    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="container mx-auto px-6 lg:px-8">

                {/* Section header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
                        Our Products
                    </span>
                    <h2 className="text-2xl lg:text-4xl font-semibold text-gray-900 mb-3">
                        What We <span className="text-blue-600">Offer</span>
                    </h2>
                    <p className="text-gray-500 text-sm lg:text-base max-w-xl mx-auto">
                        Explore how Soft Tech products streamline and enhance your business operations
                    </p>
                </div>

                {/* Product grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {visibleProducts.map((product, i) => (
                        <div
                            key={product._id}
                            data-aos="fade-up"
                            data-aos-delay={i * 80}
                            style={bgImg}
                            className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group min-h-[320px] lg:min-h-[400px] flex flex-col"
                        >
                            {/* Top icon */}
                            <div className="flex justify-center pt-8 pb-4">
                                <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <img src={product?.nav_logo} alt="" className="w-10 h-10 lg:w-16 lg:h-16 object-contain" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col justify-end p-5 lg:p-6">
                                <h3 className="text-white font-semibold text-sm lg:text-xl mb-2 leading-snug">
                                    {product?.banner_title?.length > 50
                                        ? `${product.banner_title.substring(0, 50)}...`
                                        : product?.banner_title}
                                </h3>
                                <p className="text-white/70 text-xs lg:text-sm leading-relaxed hidden lg:block mb-4">
                                    {product?.banner_description}
                                </p>

                                {/* Details button */}
                                <Link
                                    to={`/productsDetails/${product._id}`}
                                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs font-medium px-4 py-2 rounded-xl transition-all w-fit"
                                >
                                    Details
                                    <GoArrowRight />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See more / less */}
                {products.length > 3 && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => setShowAll(prev => !prev)}
                            className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium text-sm px-5 py-2.5 rounded-xl transition-all"
                        >
                            {showAll ? 'See Less' : 'See More'}
                            {showAll ? <GoArrowUp /> : <GoArrowDown />}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default OurProductsSection;