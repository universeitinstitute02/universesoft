import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const ProductCategoryManage = () => {
    window.scrollTo(0, 0);
    const axiosPublic = useAxiosPublic();
    

    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };

    const { data: productData = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['productCategoryData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-product-category`);
            
            return res.data.data;
        }
    });

    if (isLoading) {
        return (
            <div className='h-screen flex justify-center items-center' >
                <h1>Data loading</h1>
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <Helmet>
                <title>Dashboard | Product category manage </title>
            </Helmet>
            <h2 className="text-2xl font-semibold text-center mb-6">Product Information Table</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border text-[10px] font-bold text-center border-gray-200">
                    <thead className="bg-gray-100">
                        <tr className='' >
                            <th className="border border-gray-200 px-4 py-2 text-center font-medium text-gray-700">#</th>
                            <th className="border border-gray-200 px-4 py-2 text-center font-medium text-gray-700">Category Name</th>
                            <th className="border border-gray-200 px-4 py-2 text-center font-medium text-gray-700">Category Details </th>
                            <th className="border border-gray-200 px-4 py-2 text-center font-medium text-gray-700">Created At</th>
                            <th className="border border-gray-200 px-4 py-2 text-center font-medium text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productData.map((product, index) => (
                            <tr key={product.id} className="hover:bg-gray-50">
                                <td className="border border-gray-200 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-200 px-4 py-2">{product.categoryName}</td>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Link to={`/dashboard/category-details/${product?._id}`}>Category Details</Link>
                                </td>
                                <td className="border border-gray-200 px-4 py-2">{new Date(product.createdAt).toLocaleDateString()}</td>
                                <td className="border border-gray-200 px-4 py-2">
                                    <div className='flex justify-center items-center gap-x-4 ' >
                                        <div>
                                            <Link to={`/dashboard/product-price-update/${product?._id}`}>
                                            <span> <FaEdit /> </span>
                                            </Link>
                                        </div>
                                        <div className='' >
                                            <button className='mt-2' > <MdDelete /></button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductCategoryManage;
