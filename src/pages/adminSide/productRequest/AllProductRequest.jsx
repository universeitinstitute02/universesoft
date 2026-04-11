import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import formatDateTime from '../../../hooks/useDateTime';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { updateAlert } from '../../../helper/updateAlert';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AllProductRequest = () => {
    window.scrollTo(0, 0);

    const getToken = localStorage.getItem("admin_token");
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);

    const [searchText, setSearchText] = useState('');
    const [filteredPayments, setFilteredPayments] = useState([]); // Initially empty

    const config = {
        headers: {
            Authorization: getToken
        },
    };

    const { data: requests = [], refetch } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosPublic.get('/product-purchase-admin', config);
            console.log(res.data?.data?.product_id)
            return res.data.data;
        }
    })

    const UpdateStatus = async (id) => {
        // console.log(id)
        try {
            let resp = await updateAlert();
            if (resp.isConfirmed) {
                console.log("hello")
                let res = await axiosPublic.put(`/product-status-update/${id}`,{}, config);
                console.log("hello2")

                if (res) {
                    Swal.fire({
                        title: "Status Updated",
                        icon: "success",
                        confirmButtonText: "Okay"
                    })
                    refetch();

                }
            }
        } catch (error) {
            Swal.fire({
                title: "Failed to update status",
                icon: "error",
                confirmButtonText: "Okay"
            })
        }
    }

    // Filter function triggered by button click
    const handleFilter = () => {
        if (!searchText.trim()) {
            setFilteredPayments(payments); // Show all data if search text is empty
            return;
        }

        const filtered = requests.filter((request) => {
            const representativeName = request?.representative_id?.name?.toLowerCase() || '';
            const clientName = request?.client_id?.name?.toLowerCase() || '';
            return (
                representativeName.includes(searchText.toLowerCase()) ||
                clientName.includes(searchText.toLowerCase())
            );
        });
        setFilteredPayments(filtered);
    };

    return (
        <div className="overflow-x-auto w-full my-5">
            <Helmet>
                <title>Dashboard | All Product Request List</title>
            </Helmet>

            <p className="text-2xl font-bold text-center mb-2">All Product Request List</p>

            <div className="flex items-center gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search by Representative or Client Name"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleFilter}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Filter
                </button>
                <button
                    onClick={() => {
                        setSearchText(''); // Clear the input field
                        setFilteredPayments(requests); // Reset the filtered data
                    }}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                    Clear
                </button>
            </div>


            <table className="min-w-full bg-white border border-gray-300 text-[12px]">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">#</th>
                        <th className="px-4 py-2 border">Representative Name</th>
                        <th className="px-4 py-2 border">Client Name</th>
                        <th className="px-4 py-2 border">Product</th>
                        <th className="px-4 py-2 border">Duration (months)</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Requested Date</th>
                        {/* <th className="px-4 py-2 border">Actions</th> */}
                    </tr>
                </thead>
                <tbody>


                    {
                        filteredPayments.length > 0 ? (
                            filteredPayments?.map((content, index) => {
                                const { date, time } = formatDateTime(content?.createdAt);
                                return (
                                    <tr key={content?._id} className="text-center">
                                        <td className="px-4 py-2 border font-semibold">{index + 1}</td>
                                        <td className="px-4 py-2 border font-semibold">
                                            <Link className='text-blue-600' to={`/dashboard/rep-profile/${content?.representative_id?._id}`}>
                                                {content?.representative_id?.name}
                                            </Link>
                                            <p>{content?.representative_id?.phone} asdfsdas </p>

                                        </td>
                                        <td className="px-4 py-2 border font-semibold">
                                            <Link className='text-blue-600' to={`/dashboard/client-profile/${content?.client_id?._id}`}>
                                                <p>{content?.client_id?.name}</p>
                                                
                                            </Link>

                                        </td>
                                        <td className="px-4 py-2 border font-semibold">
                                            <Link to={`/productsDetails/${content?.product_id?._id}`}>
                                                {content?.product_id?.nav_title}
                                                Ashikur Rahman
                                                                                            </Link>
                                            <h1 className='text-black' >rana</h1>
                                        </td>
                                        <td className="px-4 py-2 border text-black font-semibold">dskaslfjdsa</td>
                                        <td className="font-bold border">
                                            <div className="form-control">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button onClick={() => UpdateStatus(content?._id)} >
                                                        {
                                                            content?.status === true ? <>
                                                                <FaToggleOn className="text-green-500 text-lg " />

                                                            </> : <><FaToggleOff className="text-red-500 text-lg" /></>
                                                        }
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        {/* <td className="px-4 py-2 border font-semibold">{content?.status ? "Approved" : "Pending"}</td> */}
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
                            })
                        ) : (
                            requests?.map((content, index) => {
                                const { date, time } = formatDateTime(content?.createdAt);
                                return (
                                    <tr key={content?._id} className="text-center">
                                        <td className="px-4 py-2 border font-semibold">{index + 1}</td>
                                        <td className="px-4 py-2 border font-semibold">
                                            <Link className='text-blue-600' to={`/dashboard/rep-profile/${content?.representative_id?._id}`}>
                                                {content?.representative_id?.name}
                                            </Link>
                                            <p>{content?.representative_id?.phone}</p>

                                        </td>
                                        <td className="px-4 py-2 border font-semibold">
                                            <Link className='text-blue-600' to={`/dashboard/client-profile/${content?.client_id?._id}`}>
                                                <p>{content?.client_id?.name}</p>
                                                
                                            </Link>

                                        </td>
                                        <td className="px-4 py-2 border font-semibold">
                                            <Link to={`/productsDetails/${content?.product_id?._id}`}>
                                                {content?.product_id?.productName}
                                            </Link>
                                        </td>
                                        <td className="px-4 py-2 border font-semibold">{content?.duraction}</td>
                                        <td className="font-bold border">
                                            <div className="form-control">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button onClick={() => UpdateStatus(content?._id)} >
                                                        {
                                                            content?.status === true ? <>
                                                                <FaToggleOn className="text-green-500 text-lg " />

                                                            </> : <><FaToggleOff className="text-red-500 text-lg" /></>
                                                        }
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        {/* <td className="px-4 py-2 border font-semibold">{content?.status ? "Approved" : "Pending"}</td> */}
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
                            })
                        )
                    }




                </tbody>
            </table>
        </div>
    );
};

export default AllProductRequest;