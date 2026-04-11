import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const DueClientList = () => {
    const contents = [
        {
            id: 1,
            name: "ashikur",
            company: "Ash Limited",
            address: "Dhaka",
            due: "2400",

        },
        {
            id: 1,
            name: "ashikur",
            company: "Ash Limited",
            address: "Dhaka",
            due: "2400",

        },
        {
            id: 1,
            name: "ashikur",
            company: "Ash Limited",
            address: "Dhaka",
            due: "2400",

        },
        {
            id: 1,
            name: "ashikur",
            company: "Ash Limited",
            address: "Dhaka",
            due: "2400",

        },
        {
            id: 1,
            name: "ashikur",
            company: "Ash Limited",
            address: "Dhaka",
            due: "2400",

        },
        {
            id: 1,
            name: "ashikur",
            company: "Ash Limited",
            address: "Dhaka",
            due: "2400",

        },
        {
            id: 1,
            name: "ashikur",
            company: "Ash Limited",
            address: "Dhaka",
            due: "2400",

        },
        {
            id: 1,
            name: "ashikur",
            company: "Ash Limited",
            address: "Dhaka",
            due: "2400",

        }
    ]
    
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


    return (
        <div className="overflow-x-auto w-full my-5">
            <p className="text-2xl font-bold text-center mb-2">Due Client List</p>
            <table className="min-w-full bg-white border border-gray-300 text-[12px]">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">#</th>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Company</th>
                        <th className="px-4 py-2 border">Address</th>
                        <th className="px-4 py-2 border">Due Ammount</th>
                        <th className="px-4 py-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contents?.map((content, index) => (
                            <tr key={content?.id} className="text-center">
                                <td className="px-4 py-2 border font-semibold">{index + 1}</td>
                                <td className="px-4 py-2 border font-semibold">{content?.name}</td>
                                <td className="px-4 py-2 border font-semibold">{content?.company}</td>
                                <td className="px-4 py-2 border font-semibold">{content?.address}</td>
                                <td className="px-4 py-2 border font-semibold">{content?.due}</td>
                                
                                <td className="px-4 py-2 border">
                                    <button
                                       
                                        className="px-2 py-1 bg-blue-500 text-white rounded mr-2"
                                    >
                                        <Link to={'/dashboard/update-content'}>Update</Link>
                                    </button>
                                    <button
                                        onClick={() => handleDelete(content?._id)}
                                        className="px-2 py-1 bg-red-500 text-white rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default DueClientList;
