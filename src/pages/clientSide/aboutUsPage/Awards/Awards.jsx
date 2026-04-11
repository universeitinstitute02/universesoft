

const Awards = () => {
    return (
        <div className=' shadow-lg'>
            <div className='w-11/12 mx-auto mb-20'>
                <div className='lg:flex gap-10'>
                    <div className='lg:w-1/2 flex flex-col justify-center'>
                        <h1 className='text-2xl sm:text-3xl uppercase mb-5 font-bold'>Industry <span className='text-text_primari underline '>Awards</span> and Recognition</h1>
                        <p className='text-lg text-justify'>Universe Soft Tech sincerely feel that all service is unique, and Universe Soft Tech has achieve honors to prove it. Every year, Universe Soft Tech has been recognized by industry leaders and awarded for everything from outstanding in-house support to being an eco-friendly IT Solutions Company.</p>
                    </div>                    

                        <div className='lg:w-1/2 lg:bg-text_primari'>
                            <div className='flex gap-8 sm:py-12 sm:px-12'>
                                <div className='hero lg:w-[900px] xl:w-full'>
                                    <img src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723545955/soft%20tech/alpha%20net%20service/partnars/jixykyme6jih1r0jdpzp.jpg" alt="" />
                                    <div className='hero-overlay hover:bg-[#0c2d46ef] opacity-0 hover:opacity-80 cursor-pointer'>
                                        <p className='text-white mt-80 xl:mt-80 lg:mt-44 lg:text-center  text-sm font-bold px-4'>BASIS Outsourcing Awards 2020</p>
                                    </div>
                                </div>

                                <div className='hero lg:w-[900px] xl:w-full'>
                                    <img src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723545987/soft%20tech/alpha%20net%20service/partnars/jyovospjrte1j39i1l0e.jpg" alt="" />
                                    <div className='hero-overlay hover:bg-[#0c2d46ef] opacity-0 hover:opacity-80 cursor-pointer'>
                                        <p className='text-white mt-72 xl:mt-72 lg:mt-40 text-sm font-bold px-4 text-center'>Company of the Month in Bangladesh</p>
                                    </div>
                                </div>
                                </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    );
};

export default Awards;