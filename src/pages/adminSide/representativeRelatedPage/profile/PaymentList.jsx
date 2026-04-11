import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const PaymentList = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();

    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };

    const { data: contents = [] } = useQuery({
        queryKey: ['contents'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/GetClientPaymentListOfRepresentativeByAdmin/${id}`, config);
            return res.data.data;
        }
    })










    const [searchText, setSearchText] = useState('');
    const [filteredPayments, setFilteredPayments] = useState([]); // Initially empty


    // Filter function triggered by button click
    const handleFilter = () => {
        if (!searchText.trim()) {
            setFilteredPayments(contents); // Show all data if search text is empty
            return;
        }

        const filtered = contents.filter((payment) => {
            const representativeName = payment?.client?.name?.toLowerCase() || '';
            const clientName = payment?.product?.nav_title?.toLowerCase() || '';
            return (
                representativeName.includes(searchText.toLowerCase()) ||
                clientName.includes(searchText.toLowerCase())
            );
        });
        setFilteredPayments(filtered);
    };


    return (
        <div className="p-4">
            <Helmet>
                <title>Dashboard | Representative's Payment List</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-4">Representative's  Payment List</h1>

            <div className="flex items-center gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search by Client Name or Product Name"
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
                        setFilteredPayments(contents);
                    }}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                    Clear
                </button>
            </div>

            {/* Payment Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 text-[12px]">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">#</th>
                            <th className="px-4 py-2 border">Client Name</th>
                            <th className="px-4 py-2 border">Product Name</th>
                            <th className="px-4 py-2 border">Paid Amount</th>
                            <th className="px-4 py-2 border">Due Ammount</th>
                            <th className="px-4 py-2 border">Duration</th>
                        </tr>
                    </thead>
                    <tbody>

                        {filteredPayments.length > 0 ? (
                            filteredPayments?.map((content, index) => (
                                <tr key={content?.id} className="text-center">
                                    <td className="px-4 py-2 border font-semibold">{index + 1}</td>
                                    <td className="px-4 py-2 border font-semibold">{content?.client?.name}</td>
                                    <td className="px-4 py-2 border font-semibold">{content?.product?.productName}</td>
                                    <td className="px-4 py-2 border font-semibold">{content?.paidAmount}</td>
                                    <td className="px-4 py-2 border font-semibold">{content?.dueAmount}</td>
                                    <td className="px-4 py-2 border font-semibold">{content?.duration}</td>


                                </tr>
                            ))
                        ) : (
                            contents?.map((content, index) => (
                                <tr key={content?.id} className="text-center">
                                    <td className="px-4 py-2 border font-semibold">{index + 1}</td>
                                    <td className="px-4 py-2 border font-semibold">{content?.client?.name}</td>
                                    <td className="px-4 py-2 border font-semibold">{content?.product?.productName}</td>
                                    <td className="px-4 py-2 border font-semibold">{content?.paidAmount}</td>
                                    <td className="px-4 py-2 border font-semibold">{content?.dueAmount}</td>
                                    <td className="px-4 py-2 border font-semibold">{content?.duration}</td>


                                </tr>
                            ))
                        )
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentList;
