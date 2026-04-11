import React, { useState, useEffect } from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import formatDateTime from '../../../../hooks/useDateTime';
import { Helmet } from 'react-helmet-async';

const MyProductRequest = () => {
    const getToken = localStorage.getItem("representativeToken");
    const axiosPublic = useAxiosPublic();
    const [searchText, setSearchText] = useState('');
    const [filteredPayments, setFilteredPayments] = useState([]);
    const [loading, setLoading] = useState(false);

    const config = {
        headers: {
            Authorization: getToken,
        },
    };

    const { data: requests = [], isLoading, isError } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            setLoading(true);
            const res = await axiosPublic.get('/product-purchase-request-representative', config);
            setLoading(false);
            return res.data.data;
        },
        onError: () => setLoading(false),
    });

    useEffect(() => {
        setFilteredPayments(requests); // Initialize with all requests
    }, [requests]);

    const handleFilter = () => {
        const search = searchText.trim().toLowerCase();
        if (!search) {
            setFilteredPayments(requests);
            return;
        }

        const filtered = requests.filter((payment) => {
            const representativeName = payment?.client_id?.name?.toLowerCase() || '';
            const clientRole = payment?.role?.toLowerCase() || '';
            return representativeName.includes(search) || clientRole.includes(search);
        });

        setFilteredPayments(filtered);
    };

    if (isLoading || loading) return (
        <div className='flex flex-col justify-center items-center h-screen ' >
            <p>Loading...</p>
        </div>
    );
    if (isError) return <p>Error loading data. Please try again later.</p>;

    return (
        <div className="overflow-x-auto w-full my-5">
            <Helmet>
                <title>Dashboard | My Product Request List</title>
            </Helmet>
            <p className="text-2xl font-bold text-center mb-2">My Product Request List</p>
            <div className="flex items-center gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search by Client Name"
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
                        setSearchText('');
                        setFilteredPayments(requests);
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
                        <th className="px-4 py-2 border">Client Name</th>
                        <th className="px-4 py-2 border">Product</th>
                        <th className="px-4 py-2 border">Duration (months)</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Requested Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPayments.length > 0 ? (
                        filteredPayments.map((content, index) => {
                            const { date } = formatDateTime(content?.createdAt);
                            return (
                                <tr key={content?._id} className="text-center">
                                    <td className="px-4 py-2 border font-semibold">{index + 1}</td>
                                    <td className="px-4 py-2 border font-semibold">{content?.client_id?.name}</td>
                                    <td className="px-4 py-2 border font-semibold">{content?.product_id?.productName}</td>
                                    <td className="px-4 py-2 border font-semibold">{content?.duraction}</td>
                                    <td className="px-4 py-2 border font-semibold">
                                        {content?.status ? 'Approved' : 'Pending'}
                                    </td>
                                    <td className="px-4 py-2 border font-semibold">{date}</td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center py-4">
                                No requests found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MyProductRequest;
