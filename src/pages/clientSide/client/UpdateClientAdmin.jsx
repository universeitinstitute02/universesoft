import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { createAlert } from '../../../helper/createAlert';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { uploadImg } from '../../../uploadImage/UploadImage';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { updateAlert } from '../../../helper/updateAlert';

const UpdateClientAdmin = () => {

    const { id } = useParams();


    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };

    const { data: singleData = {}, refetch, isError, isLoading } = useQuery({
        queryKey: ['singleData',id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/client-by-admin/${id}`, config);
            return res.data?.data;
        }
    });

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const image = e.target.clientImage.files[0];
        const businessType = e.target.businessType.value;
        const productType = e.target.productType.value;

        let clientImage = singleData?.clientImage;

        if (image) {
            clientImage = await uploadImg(image)
        } else {
            clientImage = singleData?.clientImage;
        }
        const payload = {
            name,
            phone,
            address,
            clientImage,
            businessType,
            productType
        };



        try {
            const resp = await updateAlert();
            if (resp.isConfirmed) {
                setLoading(true);
                const res = await axiosPublic.put(`/client-update-admin/${id}`, payload, config);
                setLoading(false);
                if (res) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Client update successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    })
                    refetch();
                }
            }
        } catch (error) {
            setLoading(false);
            Swal.fire({
                icon: 'error',
                title: `${error.response?.data?.message}`,
                showConfirmButton: false,
                timer: 1500,
            })
        }
        e.target.reset();


    };



    return (
        <div className='w-full  ' >
            <form onSubmit={handleSubmit} className=" bg-white  p-6 rounded-lg">
                <Helmet>
                    <title>Dashboard | Add Client</title>
                </Helmet>
                <h2 className="text-2xl font-bold mb-6 text-center">Client Information Upload</h2>
                <div className='grid grid-cols-2 space-x-4 ' >
                    <div className="mb-4 flex-1 ">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Client name
                        </label>
                        <input
                            type="text"
                            id="name"
                            defaultValue={singleData?.name}
                            name="name"
                            placeholder="Enter client name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Client Phone number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            defaultValue={singleData?.phone}
                            placeholder="Enter phone number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>

                <div className='grid grid-cols-2 space-x-4 ' >

                    <div>
                        <label htmlFor="address">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            placeholder="Enter Address"
                            rows="4"
                            defaultValue={singleData?.address}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <div className="avatar">
                            <div className="w-12 rounded-full ">
                                <img src={singleData?.clientImage} />
                            </div>
                        </div>
                        <label htmlFor="clientImage" className="block text-sm font-medium text-gray-700 mb-1">
                            Image
                        </label>
                        <input
                            type="file"
                            id="clientImage"
                            name="clientImage"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 space-x-4 ' >
                    <div className="mb-4">
                        <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                            Business Type
                        </label>
                        <input
                            type="text"
                            id="businessType"
                            name="businessType"
                            defaultValue={singleData?.businessType}
                            placeholder="Enter business type"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-1">
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="productType"
                            name="productType"
                            defaultValue={singleData?.productType}
                            placeholder="Enter product name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className='my-3' >
                    <button className='px-5 py-2 rounded-md shadow-md block mx-auto bg-[#4A00FF] text-white ' > {
                        loading ? "Submitting..." : "Submit"
                    } </button>
                </div>
            </form>
        </div>

    )
}


export default UpdateClientAdmin;