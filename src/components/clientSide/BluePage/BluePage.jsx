import React from 'react';
import { FaFacebookF,FaTwitter,FaLinkedin,FaYoutube  } from "react-icons/fa";

const BluePage = () => {
    return (
        <div className='bg-text_primari mx-4 my-10 py-20 px-4 lg:px-60'>
            <div className='text-center'>
                <p className='text-xl text-white'>We've brought a combination of operational expertise, innovation and best practices for IT industry that need your company. Your technology will no longer be a source of constant frustration. You can move on with Universe Soft Tech. We'll assist you to select and integrate all of the elements required to create a seamless, stable, and productive business environment that supports your business's current and future success.</p>   
            </div>

            <div className='text-white text-2xl flex justify-center mt-8'>
                <FaFacebookF className='mr-3 hover:text-blue-400'></FaFacebookF>
                <FaTwitter className='mr-3 hover:text-blue-400'></FaTwitter>
                <FaLinkedin className='mr-3 hover:text-blue-400'></FaLinkedin>
                <FaYoutube className='mr-3 hover:text-red-400'></FaYoutube>
            </div>
        </div>
    );
};

export default BluePage;