import React from 'react';

const Blogs = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col-reverse lg:flex lg:flex-row my-20 gap-10'>
            <div className="lg:w-3/5 text-justify mr-10 mt-5">
                <h1 className="text-3xl md:text-4xl mb-6 uppercase font-semibold">Who<span className="text-text_blue underline "> we </span> are</h1>
                <h3 className="text-xl mb-6">Universe Soft Tech is one of the top 10 IT industries in Bangladesh.</h3>
                <p className="text-xl mb-6">Universe Soft Tech is dedicated IT specialists who recognize that a successful technology implementation requires more than just getting the proper hardware and applications. It must begin with a thorough understanding of each customer's strategy and business needs.</p>

                <p className="text-xl mb-6">Leadership and senior consultants have decades of combined experience, allowing Universe Soft Tech to bring a complete understanding of a wide range of business environments to every clients.</p>   
            </div>

            <div className='lg:w-2/5 lg:flex items-center'>
                    <img className=' rounded-full' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723402912/uppbmcagauofxtljyalo.jpg" alt="" />
            </div>
        </div>
    );
};

export default Blogs;