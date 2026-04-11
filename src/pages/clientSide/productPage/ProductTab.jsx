import React, { useState } from 'react';
import { GiGemChain, GiBrainTentacle } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const ProductTab = () => {
    const [activeTab, setActiveTab] = useState('Solutions');
    const axiosPublic = useAxiosPublic();
    const [filteredProducts, setFilterProducts] = useState([]);

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/category/list');
            return res.data.data;
        }
    })

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/get-products');
            return res.data.data;
        }
    })



    const getCategorizedProduct = (id) => {
        let filterizedProducts = [];
        console.log(id);
        filterizedProducts = products.filter(product => product.category_name === id);
        setFilterProducts(filterizedProducts);
    }








    const buttonStyle = (tabName) =>
        `flex items-center px-4 gap-2 py-4 rounded-lg text-xl my-4 cursor-pointer transition-all duration-300 ${activeTab === tabName ? 'bg-orange-500 text-white' : 'bg-[#004080] text-white hover:bg-text_primari'
        }`;

    return (
        <div className="container mx-auto my-8 lg:my-16">
            <div className="flex flex-col lg:flex-row">
                {/* Sidebar */}
                <div className="bg-[#004080] text-white w-full lg:w-1/4 rounded-lg p-4 lg:mr-4">
                    {
                        categories?.map(category => <>
                            <div
                                onClick={() => {
                                    setActiveTab(category.name); // Set the active tab with the category name
                                    getCategorizedProduct(category._id); // Fetch products based on the category ID
                                }}
                                className={buttonStyle(`${category?.name}`)}>
                                <img src={category?.image} alt="" className='w-8' />
                                {category?.name}
                            </div>
                        </>)
                    }


                </div>

                {/* Content Area */}
                <div className="flex-1 mt-6 lg:mt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto max-h-[60vh] p-4 rounded-lg bg-gray-50 shadow-lg">
                        {
                            filteredProducts.length > 0 ?
                                <>
                                    {filteredProducts?.map((product, index) => (
                                        <div key={index} className="card bg-white shadow-md rounded-lg overflow-hidden">
                                            <Link to={`/productsDetails/${product?._id}`}>
                                                <figure>
                                                    <img src={product?.banner_img} className="w-full h-48 object-cover" />
                                                </figure>
                                            </Link>
                                            <div className="p-4 flex justify-between">
                                                <h2 className="text-[14px] font-semibold">{product?.nav_title}</h2>
                                                <Link to={`${product?.live_link}`} target='_blank'>
                                                    <button className='bg-bg_btn_primary text-white text-[12px] py-1 px-3 rounded-sm'>Live Link</button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </>
                                :
                                <>
                                    <div className="h-96 col-span-3 ">
                                        <div className="shadow-xl w-1/2 mx-auto mt-4">
                                            {/* <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730780548/Other%20data/vr09k7zqwajfi3xk9sfs.png" alt="" className='' /> */}
                                        </div>
                                        <p className="text-xl font-bold text-center mt-4">No category Selected.</p>

                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTab;
