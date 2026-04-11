import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';


const PaymentHistory = () => {
    window.scrollTo(0, 0);
    const getToken = localStorage.getItem("representativeToken");

    const [searchText, setSearchText] = useState('');
    const [filteredPayments, setFilteredPayments] = useState([]); // Initially empty


    const config = {
        headers: {
            Authorization: getToken
        },
    };

    const axiosPublic = useAxiosPublic();
    const { data: contents = [] } = useQuery({
        queryKey: ['contents'],
        queryFn: async () => {
            const res = await axiosPublic.get('/GetClientPaymentListOfRepresentative', config);
            return res.data.data;
        }
    })



    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won’t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic
                    .delete(`/csr/${id}`)
                    .then((res) => {
                        if (res) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'CSR data has been deleted.',
                                icon: 'success',
                            });
                            refetch();
                        }

                    })
                    .catch((err) => {
                        console.log(err);

                    });
            }
        });
    };

    // Filter function triggered by button click
    const handleFilter = () => {
        if (!searchText.trim()) {
            setFilteredPayments(contents); // Show all data if search text is empty
            return;
        }

        const filtered = contents.filter((payment) => {
            const representativeName = payment?.client?.name?.toLowerCase() || '';
            const clientName = payment?.product?.productName?.toLowerCase() || '';
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
                <title>Dashboard | Payment history </title>
            </Helmet>
            <p className="text-2xl font-bold text-center mb-2">My Client's Payment History</p>
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
            <table className="min-w-full bg-white border border-gray-300 text-[12px]">
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
    );
};

export default PaymentHistory;
