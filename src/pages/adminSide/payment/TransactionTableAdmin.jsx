import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import formatDateTime from '../../../hooks/useDateTime';
import { Helmet } from 'react-helmet-async';

const TransactionTableAdmin = () => {
    window.scrollTo(0, 0);
    const getToken = localStorage.getItem("admin_token");
    const axiosPublic = useAxiosPublic();

    const [searchText, setSearchText] = useState('');
    const [filteredPayments, setFilteredPayments] = useState([]); // Initially empty

    const config = {
        headers: {
            Authorization: getToken,
        },
    };

    const { data: payments = [],isLoading } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosPublic.get('/GetAllPaymentListByAdmin', config);
            return res.data.data;
        },
        onSuccess: (data) => {
            setFilteredPayments(data); // Set filteredPayments to all data initially
        },
    });

    // Filter function triggered by button click
    const handleFilter = () => {
        if (!searchText.trim()) {
            setFilteredPayments(payments); // Show all data if search text is empty
            return;
        }

        const filtered = payments.filter((payment) => {
            const representativeName = payment?.representative?.name?.toLowerCase() || '';
            const clientName = payment?.client?.name?.toLowerCase() || '';
            return (
                representativeName.includes(searchText.toLowerCase()) ||
                clientName.includes(searchText.toLowerCase())
            );
        });
        setFilteredPayments(filtered);
    };

    if(isLoading){
        return (
            <div>
                <p className='h-screen flex flex-col justify-center items-center ' >Loading</p>
            </div>
        )
    }

    return (
        <div>
            <Helmet>
                <title>Dashboard | All Payment List</title>
            </Helmet>
            <div className="my-5">
                <p className="text-2xl font-bold text-center mb-2">All Payment List</p>
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
                            setSearchText('');
                            setFilteredPayments(payments);
                        }}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Clear
                    </button>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="min-w-full bg-white border border-gray-300 text-[12px]">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border">#</th>
                                <th className="px-4 py-2 border">Representative</th>
                                <th className="px-4 py-2 border">Client Name</th>
                                <th className="px-4 py-2 border">Product</th>
                                <th className="px-4 py-2 border">Transaction ID</th>
                                <th className="px-4 py-2 border">Duration (months)</th>
                                <th className="px-4 py-2 border">Total Amount</th>
                                <th className="px-4 py-2 border">Paid Amount</th>
                                <th className="px-4 py-2 border">Due Amount</th>
                                <th className="px-4 py-2 border">Payment Date</th>
                                <th className="px-4 py-2 border">Payment Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPayments.length > 0 ? (
                                filteredPayments.map((content, index) => {
                                    const { date, time } = formatDateTime(content?.createdAt);
                                    return (
                                        <tr key={content?._id} className="text-center">
                                            <td className="px-4 py-2 border font-semibold">{index + 1}</td>
                                            <td className="px-4 py-2 border font-semibold">
                                                {content?.representative?.name}
                                            </td>
                                            <td className="px-4 py-2 border font-semibold">
                                                {content?.client?.name}
                                            </td>
                                            <td className="px-4 py-2 border font-semibold">
                                                {content?.product?.productName}
                                            </td>
                                            <td className="px-4 py-2 border font-semibold">
                                                {content?.transaction_id}
                                            </td>
                                            <td className="px-4 py-2 border font-semibold">{content?.duration}</td>
                                            <td className="px-4 py-2 border font-semibold">
                                                {parseInt(content?.paidAmount || 0, 10) +
                                                    parseInt(content?.dueAmount || 0, 10)}
                                            </td>
                                            <td className="px-4 py-2 border font-semibold">{content?.paidAmount}</td>
                                            <td className="px-4 py-2 border font-semibold">{content?.dueAmount}</td>
                                            <td className="px-4 py-2 border font-semibold">{date}</td>
                                            <td className="px-4 py-2 border font-semibold">{time}</td>
                                        </tr>
                                    );
                                })
                            ) : (
                                payments?.map((content, index) => {
                                    const { date, time } = formatDateTime(content?.createdAt);
                                    return (
                                        <tr key={content?._id} className="text-center">
                                            <td className="px-4 py-2 border font-semibold">{index + 1}</td>
                                            <td className="px-4 py-2 border font-semibold">
                                                {content?.representative?.name}
                                            </td>
                                            <td className="px-4 py-2 border font-semibold">
                                                {content?.client?.name}
                                            </td>
                                            <td className="px-4 py-2 border font-semibold">
                                                {content?.product?.productName}
                                            </td>
                                            <td className="px-4 py-2 border font-semibold">
                                                {content?.transaction_id}
                                            </td>
                                            <td className="px-4 py-2 border font-semibold">{content?.duration}</td>
                                            <td className="px-4 py-2 border font-semibold">
                                                {parseInt(content?.paidAmount || 0, 10) +
                                                    parseInt(content?.dueAmount || 0, 10)}
                                            </td>
                                            <td className="px-4 py-2 border font-semibold">{content?.paidAmount}</td>
                                            <td className="px-4 py-2 border font-semibold">{content?.dueAmount}</td>
                                            <td className="px-4 py-2 border font-semibold">{date}</td>
                                            <td className="px-4 py-2 border font-semibold">{time}</td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TransactionTableAdmin;
