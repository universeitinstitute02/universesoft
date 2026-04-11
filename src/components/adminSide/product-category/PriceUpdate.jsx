import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { updateAlert } from '../../../helper/updateAlert';
import Swal from 'sweetalert2';

const PriceUpdate = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    window.scrollTo(0, 0)

    const [loading, setLoading] = useState(false);


    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };

    const { data: singleProductCategory = {}, refetch, isError, isLoading } = useQuery({
        queryKey: ['singleProductCategoryData', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/single-product-category/${id}`, config);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const price = e.target.price.value;
        const payload = {
            price: price
        };

        const resp = await updateAlert();

        try {
            if (resp.isConfirmed) {
                setLoading(true)
                let res = await axiosPublic.put(`/product-price-update/${id}`, payload, config);
                setLoading(false)
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product price update successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                    return;
                }
            }
        } catch (error) {
            setLoading(false)
            Swal.fire({
                position: "top-end",
                icon: "fail",
                title: "Product price update fail.",
                showConfirmButton: false,
                timer: 1500
            })
        }



    }

    return (
        <div className="mx-auto p-6 bg-white rounded-lg ">
            <Helmet>
                <title>Dashboard | Product Price Update </title>
            </Helmet>
            <h2 className="text-2xl font-semibold text-center mb-6">Product Price Update From</h2>
            <h2 className="text-2xl font-semibold text-center mb-6"> Product Name : {singleProductCategory?.productName} </h2>
            <div className='flex flex-col justify-center items-center ' >
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Price Input Field */}
                    <div className='' >
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                            Price
                        </label>
                        <input
                            type="text"
                            id="price"
                            name='price'
                            placeholder="Enter product price"
                            defaultValue={singleProductCategory?.price}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={loading} // Disable the button if loading is true
                            className={`w-full ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                        >
                            {loading ? (
                                <div>
                                    <h1>Submiing</h1>
                                </div>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PriceUpdate;
