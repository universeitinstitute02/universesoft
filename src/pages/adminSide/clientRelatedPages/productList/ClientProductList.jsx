import React from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import formatDateTime from '../../../../hooks/useDateTime';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ClientProductList = () => {
    const getToken = localStorage.getItem("clientToken");
    const axiosPublic = useAxiosPublic();

    const config = {
        headers: {
            Authorization: getToken
        },
    };

    const { data: requests = [], refetch,isLoading } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosPublic.get('/product-request-by-client', config);
            return res.data.data;
        }
    })

    const { data: proudcts = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = axiosPublic.get('')
        }
    })

    if(isLoading){
        return (
            <div className='flex flex-col justify-center h-screen items-center  ' >
                <h1>Loading</h1>
            </div>
        )
    }

    return (
        <div className="overflow-x-auto w-full my-5">
            <Helmet>
                <title>Dashboard | Client Product Request List</title>
            </Helmet>
            <p className="text-2xl font-bold text-center mb-2">My Request List</p>
            <table className="min-w-full bg-white border border-gray-300 text-[12px]">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">#</th>
                        <th className="px-4 py-2 border">Client Name</th>
                        <th className="px-4 py-2 border">Representative Name</th>
                        <th className="px-4 py-2 border">Product</th>
                        <th className="px-4 py-2 border">Duration (months)</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Payment</th>
                        <th className="px-4 py-2 border">Requested Date</th>
                        {/* <th className="px-4 py-2 border">Actions</th> */}
                    </tr>
                </thead>
                <tbody>


                    {requests?.map((content, index) => {
                        const { date, time } = formatDateTime(content?.createdAt);
                        return (
                            <tr key={content?._id} className="text-center">
                                <td className="px-4 py-2 border font-semibold">{index + 1}</td>
                                <td className="px-4 py-2 border font-semibold">{content?.client_id?.name}</td>
                                <td className="px-4 py-2 border font-semibold">
                                    <p>{content?.representative_id?.name}</p>
                                    <p>{content?.representative_id?.phone}</p>
                                </td>
                                <td className="px-4 py-2 border font-semibold">{content?.product_id?.productName}</td>
                                <td className="px-4 py-2 border font-semibold">{content?.duraction}</td>
                                <td className="px-4 py-2 border font-semibold">{content?.status ? "Approved" : "Pending"}</td>
                                <td className="px-4 py-2 border font-semibold">

                                    <button disabled={content?.status ? false : true} className='btn bg-blue-600 text-white'>
                                        <Link to={`/dashboard/payment/${content?._id}`}>
                                            Pay
                                        </Link>
                                    </button>
                                </td>
                                <td className="px-4 py-2 border font-semibold">{date}</td>
                                {/* <td className="px-4 py-2 border">
                            <button
                                onClick={() => handleDelete(content?._id)}
                                className="px-2 py-1 bg-red-500 text-white rounded"
                            >
                                Delete
                            </button>
                        </td> */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ClientProductList;