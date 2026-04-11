// import { useEffect } from 'react';
// import './banner.css';
// import Aos from 'aos';
// import { Link } from 'react-router-dom';

// const Banner = () => {

//     useEffect(() => {
//         Aos.init({ duration: 1000, delay: 400 });
//     }, []);

//     return (
//         <div className="lg:py-16 banner-wave my-aos-element">
//             <div className="container mx-auto flex flex-col md:flex-col lg:flex-row justify-between items-center md:px-8" >
//                 {/* content */}
//                 <div className="flex-1 lg:pb-20 md:pb-2 pb-5 md:leading-10" data-aos="zoom-in">
//                     <h1 className="my-3 leading-relaxed lg:text-4xl text-center lg:text-start md:text-start text-text_blue text-2xl font-bold -tracking-[0.044rem]">
//                         Providing You <br /> <span className="text-text_primari"> Smart Digital Solutions </span> <br />for Future-Ready Business <br className="hidden lg:block" />
//                     </h1>
//                     <p className="text-text_blue leading-7 -tracking-[0.2px] lg:w-[510px] basis-[510px] lg:text-justify text-center md:text-start mb-5 px-10 md:px-0 lg:px-0">
//                         At Sof Tech, we offer comprehensive digital solutions like POS, HRM, and LMS, tailored to optimize your business processes and drive growth in the digital age.
//                     </p>
//                     <div className="flex flex-col md:flex-row lg:flex-row gap-5 py-5 px-10 md:px-0 lg:px-0">


//                         <button className="bg-bg_btn_primary text-white text-xl rounded-[50px] py-2.5 px-5 cursor-pointer lg:w-[200px] md:w-[200px] border-none text-center inline-block hover:-translate-y-1 hover:translate-x-1 hover:shadow-xl hover:transform hover:duration-500 hover:bg-bg_btn_hover hover:ease-in-out w-full">
//                             <Link to={"/request-demo"}>

//                                 Get a Demo
//                             </Link>
//                         </button>


//                         <Link to={"/contact-us"}>
//                             <button className="border border-universe_primary text-universe_primary rounded-[50px] py-2.5 px-5 cursor-pointer lg:w-[200px] md:w-[200px] text-center inline-block hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg hover:shadow-bg_btn_primary hover:bg-bg_btn_light hover:transform hover:duration-500 hover:ease-in-out w-full">Start a Project</button>
//                         </Link>
//                     </div>
//                 </div>
//                 {/* img */}
//                 <div className="flex-1" data-aos="zoom-in">
//                     <img src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1734866388/UniverseSoftTech/Image/lx50dhdxdvxocjvjuxdd.jpg" alt="Banner Image" />


//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;

import { useEffect } from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 800, delay: 200, once: true });
    }, []);

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 pb-20 lg:pt-24 lg:pb-28">

            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">

                {/* Left: Content */}
                <div className="flex-1 text-center lg:text-left" data-aos="fade-right">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                        Bangladesh's leading software company
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl lg:text-5xl font-semibold leading-tight text-gray-900 mb-5">
                        Providing You <br />
                        <span className="text-blue-600"> Smart Digital Solutions </span>
                        <br />for Future-Ready Business
                    </h1>

                    {/* Subtext */}
                    <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                        Comprehensive digital solutions like POS, HRM, and LMS — tailored to optimize your operations and drive growth in the digital age.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                        <Link to="/request-demo"
                            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5">
                            Get a Demo
                            <HiArrowRight />
                        </Link>
                        <Link to="/contact-us"
                            className="inline-flex items-center justify-center gap-2 border border-blue-200 text-blue-700 hover:bg-blue-50 font-medium px-6 py-3 rounded-xl transition-all duration-200 text-sm">
                            Start a Project
                        </Link>
                    </div>

                    {/* Social proof */}
                    <p className="text-xs text-gray-400 mt-6">
                        Trusted by <span className="text-gray-600 font-medium">50+ businesses</span> across Bangladesh
                    </p>
                </div>

                {/* Right: Image */}
                <div className="flex-1 flex justify-center lg:justify-end" data-aos="fade-left">
                    <div className="relative">
                        {/* Decorative ring */}
                        <div className="absolute inset-0 rounded-3xl bg-blue-100/50 scale-105 -z-10" />
                        <img
                            src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1734866388/UniverseSoftTech/Image/lx50dhdxdvxocjvjuxdd.jpg"
                            alt="Universe Soft Tech"
                            className="w-full max-w-md rounded-2xl shadow-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;