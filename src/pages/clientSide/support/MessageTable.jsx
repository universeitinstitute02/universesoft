import React, { useState } from 'react';
import formatDateTime from '../../../hooks/useDateTime';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { deleteAlert } from '../../../helper/deleteHelperAlert';
import useAxiosPublic from './../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const MessageTable = ({ allMessages,isLoading,refetch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };

    // Filter messages based on search term
    const filteredMessages = allMessages?.filter((item) =>
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phoneNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.representativeDetails?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (typeof item?.status === "string" && item.status.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Handle the clear search functionality
    const handleClearSearch = () => {
        setSearchTerm("");
    };

    const axiosPublic = useAxiosPublic()

    const deleteMessage = async (id) => {
        let resp = await deleteAlert();
        try {
            if (resp.isConfirmed) {
                let res = await axiosPublic.delete(`/support/${id}`,config);
                if (res) {
                    Swal.fire({
                        title: "Message Deleted",
                        icon: "success",
                        confirmButtonText: "Okay"
                    })
                    refetch();
                    return;
                }
            }

        } catch (error) {
            Swal.fire({
                title: "Error deleting message",
                icon: "error",
                confirmButtonText: "Okay"
            })
        }
    }

    if(isLoading){
        return <div className='flex h-screen justify-center items-center ' >Loading...</div>
    }



    return (
        <div>
            {/* Search Bar */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by Name, Phone Number, or Representative"
                    className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    onClick={handleClearSearch}
                    className="ml-2 bg-blue-500 text-white px-4 py-2  rounded-md text-sm"
                >
                    Clear
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 bg-white text-sm">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">#</th>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Phone Number</th>
                            <th className="px-4 py-2 border">Representative</th>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border">Send Date</th>
                            <th className="px-4 py-2 border">Update Time</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMessages?.map((item, index) => {
                            return (
                                <tr key={item._id} className="text-center">
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{item.name || "N/A"}</td>
                                    <td className="px-4 py-2 border">{item.phoneNumber || "N/A"}</td>
                                    <td className="px-4 py-2 border">{item.representativeDetails?.name || "N/A"}</td>
                                    <td className="px-4 py-2 border">
                                        {item.status === "pending" ? "Pending" : "Resolved"}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {item.createdAt ? new Date(item.createdAt).toLocaleString() : 'Time'}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {item.updatedAt ? new Date(item.updatedAt).toLocaleString() : 'Time'}
                                    </td>
                                    <td className="px-4 py-2 border space-x-2">
                                        <button className='bg-blue-600 text-white p-1 rounded-lg text-[12px]'>
                                            <Link to={`/dashboard/message-details/${item?._id}`}>
                                                Details
                                            </Link>
                                        </button>
                                        <button onClick={()=>deleteMessage(item?._id)} className='bg-blue-600 text-white p-2 rounded-lg text-[12px]'>
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MessageTable;
