import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { updateAlert } from '../../../helper/updateAlert';
import formatDateTime from '../../../hooks/useDateTime';

const ManageUser = () => {
    const axiosPublic = useAxiosPublic();
    window.scrollTo(0, 0);

    const [searchText, setSearchText] = useState('');
    const [filteredPayments, setFilteredPayments] = useState([]); // Initially empty

    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };
    const { data: userData = [], refetch, isLoading, isError } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-users`, config);
            return res.data.data;
        }
    });




    // Handle Delete User
    const handleDelete = (index) => {
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);
    };

    const userRoleUpdate = async (id) => {
        console.log(id)
        try {
            let resp = await updateAlert();
            if (resp.isConfirmed) {
                let res = await axiosPublic.put(`/user-status-update/${id}`, {}, config);
                if (res) {
                    Swal.fire({
                        title: "Status Updated",
                        icon: "success",
                        confirmButtonText: "Okay"
                    })
                    refetch();
                    return;
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

    if (isLoading) {
        return <div>Loading...</div>
    }

    // Filter function triggered by button click
    const handleFilter = () => {
        if (!searchText.trim()) {
            setFilteredPayments(userData); // Show all data if search text is empty
            return;
        }

        const filtered = userData.filter((payment) => {
            const representativeName = payment?.name?.toLowerCase() || '';
            const clientName = payment?.role?.toLowerCase() || '';
            return (
                representativeName.includes(searchText.toLowerCase()) ||
                clientName.includes(searchText.toLowerCase())
            );
        });
        setFilteredPayments(filtered);
    };

    return (
        <div className=" px-4">
            <Helmet>
                <title>Dashboard | Manage User</title>
            </Helmet>
            <div className=" mx-auto  rounded-lg overflow-hidden">
                {/* Header */}
                <div className="text-black text-center">
                    <h2 className="text-2xl font-bold mb-5 ">User Information</h2>
                </div>

                <div className="flex items-center gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Search by Admin Name or Role"
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
                            setFilteredPayments(userData);
                        }}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Clear
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300 text-[12px]">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">#</th>
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Phone</th>
                                <th className="border border-gray-300 px-4 py-2">Role</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                                <th className="border border-gray-300 px-4 py-2">Action</th>
                                <th className="border border-gray-300 px-4 py-2">Joining Date</th>
                                <th className="border border-gray-300 px-4 py-2">Joining Time</th>
                                <th className="border border-gray-300 px-4 py-2">Profile</th>
                            </tr>
                        </thead>
                        <tbody>

                            {filteredPayments.length > 0 ? (
                                filteredPayments.map((user, index) => {
                                    const { date, time } = formatDateTime(user?.createdAt);
                                    return (
                                        <tr key={user._id} className="hover:bg-gray-100">
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                {index + 1}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {user.name || "N/A"}
                                            </td>

                                            <td className="border border-gray-300 px-4 text-center py-2">
                                                {user.contactNumber || "N/A"}
                                            </td>

                                            <td className="border border-gray-300 text-center px-4 py-2 capitalize">
                                                {user.role || "N/A"}
                                            </td>
                                            <td
                                                className={`border border-gray-300 px-4 py-2 text-center ${user.isAdmin ? "text-green-600" : "text-red-600"
                                                    }`}
                                            >
                                                {user.isAdmin ? "Active" : "Inactive"}
                                            </td>
                                            <td className="font-bold border">
                                                <div className="form-control">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <button onClick={() => userRoleUpdate(user?._id)} >
                                                            {
                                                                user?.role === "admin" ? <>
                                                                    <FaToggleOn className="text-green-500 text-lg " />

                                                                </> : <><FaToggleOff className="text-red-500 text-lg" /></>
                                                            }
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="border border-gray-300 px-4 text-center py-2">
                                                {date}
                                            </td>

                                            <td className="border border-gray-300 px-4 text-center py-2">
                                                {time}
                                            </td>


                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                <Link
                                                    to={`/dashboard/user-profile/${user._id}`}
                                                    className="text-blue-500 hover:underline"
                                                >
                                                    Profile
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                }

                                )
                            ) : (
                                userData.map((user, index) => {
                                    const { date, time } = formatDateTime(user?.createdAt);
                                    return (
                                        <tr key={user._id} className="hover:bg-gray-100">
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                {index + 1}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {user.name || "N/A"}
                                            </td>

                                            <td className="border border-gray-300 px-4 text-center py-2">
                                                {user.contactNumber || "N/A"}
                                            </td>

                                            <td className="border border-gray-300 text-center px-4 py-2 capitalize">
                                                {user.role || "N/A"}
                                            </td>
                                            <td
                                                className={`border border-gray-300 px-4 py-2 text-center ${user.isAdmin ? "text-green-600" : "text-red-600"
                                                    }`}
                                            >
                                                {user.isAdmin ? "Active" : "Inactive"}
                                            </td>
                                            <td className="font-bold border">
                                                <div className="form-control">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <button onClick={() => userRoleUpdate(user?._id)} >
                                                            {
                                                                user?.role === "admin" ? <>
                                                                    <FaToggleOn className="text-green-500 text-lg " />

                                                                </> : <><FaToggleOff className="text-red-500 text-lg" /></>
                                                            }
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="border border-gray-300 px-4 text-center py-2">
                                                {date}
                                            </td>

                                            <td className="border border-gray-300 px-4 text-center py-2">
                                                {time}
                                            </td>


                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                <Link
                                                    to={`/dashboard/user-profile/${user._id}`}
                                                    className="text-blue-500 hover:underline"
                                                >
                                                    Profile
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                }

                                )
                            )}


                           
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default ManageUser;
