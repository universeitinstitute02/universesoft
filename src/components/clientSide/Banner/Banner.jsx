import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: "1000" })
    }, [])
    return (
        <div data-aos="zoom-out-up" className='lg:flex  mb-12 items-center'>
            <div className='flex-1 md:mt-10 mx-6 xl:mx-32  text-center lg:text-start'>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl text-[#001b3d] font-bold leading-relaxed">Creating a Better<span className="text-text_primari "> IT Solutions</span></h1>

                <p
                    style={{
                        textShadow: `0px 0px 50px #F4940140`
                    }}
                    className='text-xl md:text-2xl mt-8 text-wrap mb-8'
                >
                    Universe Soft Tech is a Bangladesh based Enterprise IT Solutions Company in Bangladesh. Universe Soft Tech maintains a high-quality infrastructure worldwide. Main objective is to give the best possible service to customers.
                </p>

            </div>

            <div className='flex-1 sm:mt-16 sm:mb-32 mx-6 pb-10  lg:pb-0 '>
                <img className='w-full hidden lg:block lg:w-10/12' src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1734955887/universeIT/pe58phdzwrp8rdo0qqwo.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;