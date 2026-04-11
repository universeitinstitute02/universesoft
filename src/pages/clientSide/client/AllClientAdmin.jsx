import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEdit, FaToggleOff, FaToggleOn } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { updateAlert } from '../../../helper/updateAlert';
import Swal from 'sweetalert2';
import { deleteAlert } from '../../../helper/deleteHelperAlert';
import formatDateTime from '../../../hooks/useDateTime';

const AllClientAdmin = () => {
    window.scrollTo(0,0)
    const axiosPublic = useAxiosPublic();
    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };

    const { data: clientData = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-client-by-admin`, config);
            return res.data?.data;
        }
    });

    const [searchTerm, setSearchTerm] = useState("");

    const filteredClients = clientData.filter((client) => {
        const name = client.name?.toLowerCase() || ""; // Safe access with default value
        const phone = client.phone?.toLowerCase() || "";
        const productType = client.productType?.toLowerCase() || "";
        const role = client.role?.toLowerCase() || "";
        const status = client.role === "client" ? "active" : "inactive"; // Example status logic

        const search = searchTerm.toLowerCase();
        return (
            name.includes(search) ||
            phone.includes(search) ||
            productType.includes(search) ||
            role.includes(search) ||
            status.includes(search)
        );
    });

    const clientRoleUpdate = async (id) => {
        try {
            let resp = await updateAlert();
            if (resp.isConfirmed) {
                let res = await axiosPublic.post(`/client-role-update/${id}`, {}, config);
                if (res) {
                    Swal.fire({
                        title: "Status Updated",
                        icon: "success",
                        confirmButtonText: "Okay"
                    });
                    refetch();
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onEdit = (client) => {
        console.log('Edit client:', client);
    };

    const deleteClient = async (id) => {
        try {
            let resp = await deleteAlert();
            if (resp.isConfirmed) {
                let res = await axiosPublic.delete(`/client-delete-admin/${id}`, config);
                if (res) {
                    Swal.fire({
                        title: "Client Deleted",
                        icon: "success",
                        confirmButtonText: "Okay"
                    });
                    refetch();
                }
            }
        } catch (error) {
            Swal.fire({
                title: "Error Occurred",
                text: "Failed to delete client",
                icon: "error",
                confirmButtonText: "Okay"
            });
            console.log(error);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading clients</div>;
    }

    return (
        <div className="overflow-x-auto">
            <Helmet>
                <title>Dashboard | All Client List</title>
            </Helmet>
            <h1 className='text-3xl text-center font-bold my-4'>All Client List</h1>
            <div className="my-4">
                <input
                    type="text"
                    placeholder="Search clients..."
                    className="border focus:outline-0 rounded px-4 py-2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <table className="min-w-full text-sm table-auto">
                <thead>
                    <tr className='bg-gray-200 rounded-t-lg'>
                        <th className="px-4 py-2 border-b">#</th>
                        <th className="px-4 py-2 border-b">Name</th>
                        <th className="px-4 py-2 border-b">Phone</th>
                        <th className="px-4 py-2 border-b">Product Type</th>
                        <th className="px-4 py-2 border-b">Profile</th>
                        <th className="px-4 py-2 border-b">Role</th>
                        <th className="px-4 py-2 border-b">Joining Date</th>
                        <th className="px-4 py-2 border-b">Joining Time</th>
                        <th className="px-4 py-2 border-b">Status</th>
                        <th className="px-4 py-2 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredClients.map((item, index) => {
                        const { date, time } = formatDateTime(item?.createdAt);
                        return (
                            <tr key={index} className="hover:bg-gray-100 text-center">
                                <td className="px-4 py-2 border-b">{index+1}</td>
                                <td className="px-4 py-2 border-b">{item.name}</td>
                                <td className="px-4 py-2 border-b">{item.phone}</td>
                                <td className="px-4 py-2 border-b">{item.productType}</td>
                                <td className="px-4 py-2 border-b text-blue-600">
                                    <Link to={`/dashboard/client-profile/${item._id}`}>
                                        View Profile
                                    </Link>
                                </td>
                                <td className="px-4 py-2 border-b">{item.role}</td>
                                <td className="px-4 py-2 border-b">{date}</td>
                                <td className="px-4 py-2 border-b">{time}</td>
                                <td className="font-bold border">
                                    <div className="form-control">
                                        <div className="flex items-center justify-center gap-2">
                                            <button onClick={() => clientRoleUpdate(item?._id)} >
                                                {
                                                    item?.role === "client" ? <>
                                                        <FaToggleOn className="text-green-500 text-lg " />

                                                    </> : <><FaToggleOff className="text-red-500 text-lg" /></>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-2 border-b">
                                    <div className='flex justify-center items-center gap-3 ' >
                                        <div>
                                            <Link to={`/dashboard/update-client-admin/${item?._id}`}>
                                                <button
                                                    onClick={() => onEdit(item)}
                                                    className="text-blue-500 hover:text-blue-700"
                                                >
                                                    <FaEdit />
                                                </button>
                                            </Link>
                                        </div>
                                        <div>
                                            <button onClick={() => deleteClient(item?._id)} className="text-blue-500 hover:text-blue-700" ><MdDelete /> </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AllClientAdmin;
