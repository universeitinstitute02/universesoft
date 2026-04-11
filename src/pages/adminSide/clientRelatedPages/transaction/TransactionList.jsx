import React, { useState } from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import formatDateTime from '../../../../hooks/useDateTime';
import { Link } from 'react-router-dom';

const TransactionList = () => {

    const getToken = localStorage.getItem("clientToken");
    const axiosPublic = useAxiosPublic();

    const [searchText, setSearchText] = useState('');
    const [filteredPayments, setFilteredPayments] = useState([]); // Initially empty

    const config = {
        headers: {
            Authorization: getToken
        },
    };

    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosPublic.get('/GetClientPaymentList', config);
            return res.data.data;
        }
    })
    // console.log(payments);

    // Filter function triggered by button click
    const handleFilter = () => {
        if (!searchText.trim()) {
            setFilteredPayments(requests); // Show all data if search text is empty
            return;
        }

        const filtered = payments.filter((payment) => {
            const representativeName = payment?.product?.productName?.toLowerCase() || '';
            const clientName = payment?.transaction_id?.toLowerCase() || '';
            return (
                representativeName.includes(searchText.toLowerCase()) ||
                clientName.includes(searchText.toLowerCase())
            );
        });
        setFilteredPayments(filtered);
    };

    return (
        <div>
            <div className="overflow-x-auto w-full my-5">
                <p className="text-2xl font-bold text-center mb-2">My Payment List</p>
                <div className="flex items-center gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Search by Product Name or transaction ID"
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
                <table className="min-w-full bg-white border border-gray-300 text-[12px]">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">#</th>
                            <th className="px-4 py-2 border">Product</th>
                            <th className="px-4 py-2 border">transaction ID</th>
                            <th className="px-4 py-2 border">Duration (months)</th>
                            <th className="px-4 py-2 border">Paid Amount</th>
                            <th className="px-4 py-2 border">Due Amount</th>
                            <th className="px-4 py-2 border">Payment Date</th>
                            <th className="px-4 py-2 border">Payment Time</th>
                            {/* <th className="px-4 py-2 border">Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {filteredPayments.length > 0 ? (
                            filteredPayments?.map((content, index) => {
                                const { date, time } = formatDateTime(content?.createdAt);
                                return (
                                    <tr key={content?._id} className="text-center">
                                        <td className="px-4 py-2 border font-semibold">{index + 1}</td>
                                        <td className="px-4 py-2 border font-semibold">{content?.productName}</td>
                                        <td className="px-4 py-2 border font-semibold">
                                            <p>{content?.transaction_id}</p>
                                        </td>
                                        <td className="px-4 py-2 border font-semibold">{content?.duration}</td>
                                        <td className="px-4 py-2 border font-semibold">{content?.paidAmount}</td>
                                        <td className="px-4 py-2 border font-semibold">{content?.dueAmount}</td>

                                        <td className="px-4 py-2 border font-semibold">{date}</td>
                                        <td className="px-4 py-2 border font-semibold">{time}</td>
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
                            payments?.map((content, index) => {
                                const { date, time } = formatDateTime(content?.createdAt);
                                return (
                                    <tr key={content?._id} className="text-center">
                                        <td className="px-4 py-2 border font-semibold">{index + 1}</td>
                                        <td className="px-4 py-2 border font-semibold">{content?.productName}</td>
                                        <td className="px-4 py-2 border font-semibold">
                                            <p>{content?.transaction_id}</p>
                                        </td>
                                        <td className="px-4 py-2 border font-semibold">{content?.duration}</td>
                                        <td className="px-4 py-2 border font-semibold">{content?.paidAmount}</td>
                                        <td className="px-4 py-2 border font-semibold">{content?.dueAmount}</td>

                                        <td className="px-4 py-2 border font-semibold">{date}</td>
                                        <td className="px-4 py-2 border font-semibold">{time}</td>
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
                        )}


                        {
                            
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionList;