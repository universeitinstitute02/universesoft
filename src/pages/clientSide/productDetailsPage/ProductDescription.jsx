import Aos from 'aos';
import React, { useEffect } from 'react';
import { AiOutlineStock } from 'react-icons/ai';
import { FaWarehouse } from 'react-icons/fa';
import { FaCartShopping, FaTruckFast } from 'react-icons/fa6';

const ProductDescription = ({ product }) => {
    useEffect(() => {
        Aos.init({ duration: 1000, delay: 400 });
    }, []);

    const bulletpoint = product.extra_data;

    return (
        <div>
            <section className="Digital-education w-11/12 mx-auto lg:mt-32 mt-5 ">
                <p className="text-2xl lg:text-5xl font-bold text-center">Keypoints of the Project</p>
                

                <div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 text-center lg:gap-12 lg:text-4xl font-bold mx-auto my-5 gap-5  lg:space-y-0'>

                        {
                            bulletpoint?.map(point =>
                                <div key={point._id} className="flex justify-center flex-col items-center rounded-xl shadow-xl lg:py-10 p-2 text-universe_secondary border" >
                                <img src={point?.description_img} alt="" className='size-12' />
                                    <p className='text-xs lg:text-xl my-3 '>{ point?.description_title }</p>
                                    
                            </div>)
                        }

                        

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDescription;