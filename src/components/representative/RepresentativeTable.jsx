import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { updateAlert } from "../../helper/updateAlert";
import Swal from "sweetalert2";
import formatDateTime from "../../hooks/useDateTime";
import { Helmet } from "react-helmet-async";


const representativeData = [
    // Representative data...
];

const RepresentativeTable = () => {
    window.scrollTo(0, 0);
    const axiosPublic = useAxiosPublic();
    const adminToken = localStorage.getItem("admin_token");

    const [searchText, setSearchText] = useState('');
    const [filteredPayments, setFilteredPayments] = useState([]); // Initially empty

    const config = {
        headers: {
            Authorization: adminToken,
        },
    };
    const { data: representativeData = [], refetch, isLoading, isError } = useQuery({
        queryKey: ['representativeData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/representative`, config);
            return res.data.data;
        }
    });
    const representativeRoleUpdate = async (id) => {
        console.log(id)
        try {
            let resp = await updateAlert();
            if (resp.isConfirmed) {
                let res = await axiosPublic.put(`/representative/status-update/${id}`, {}, config);
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

    // Filter function triggered by button click
    const handleFilter = () => {
        if (!searchText.trim()) {
            setFilteredPayments(payments); // Show all data if search text is empty
            return;
        }

        const filtered = representativeData.filter((payment) => {
            const representativeName = payment?.name?.toLowerCase() || '';
            const representativePhone = payment?.phone?.toLowerCase() || '';
            const clientName = payment?.role?.toLowerCase() || '';
            return (
                representativeName.includes(searchText.toLowerCase()) ||
                clientName.includes(searchText.toLowerCase()) ||
                representativePhone.includes(searchText.toLowerCase())
            );
        });
        setFilteredPayments(filtered);
    };

    return (
        <div className="overflow-x-auto p-4">
            <Helmet>
                <title>Dashboard | Manage Representative</title>
            </Helmet>
            <p className="font-bold text-2xl text-center">Manage Representative</p>
            <div className="flex items-center gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search by Representative Name or Role"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="flex-grow p-2 focus:outline-0 my-3 border border-gray-300 rounded"
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
                        setFilteredPayments(representativeData);
                    }}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                    Clear
                </button>
            </div>
            <table className="table-auto w-full border-collapse border border-gray-300 text-[12px]">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">#</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Phone</th>
                        <th className="border border-gray-300 px-4 py-2">Role</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                        <th className="border border-gray-300 px-4 py-2">Joining Date</th>
                        <th className="border border-gray-300 px-4 py-2">Joining Time</th>
                        <th className="border border-gray-300 px-4 py-2">Action</th>
                        <th className="border border-gray-300 px-4 py-2">Profile</th>
                    </tr>
                </thead>
                <tbody>

                    {filteredPayments.length > 0 ? (
                        filteredPayments.map((representative, index) => {

                            const { date, time } = formatDateTime(representative?.createdAt);

                            return (
                                <tr key={representative._id} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {index + 1}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {representative.name || "N/A"}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {representative.phone || "N/A"}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 capitalize">
                                        {representative.role || "N/A"}
                                    </td>
                                    <td
                                        className={`border border-gray-300 px-4 py-2 text-center ${representative.status ? "text-green-600" : "text-red-600"
                                            }`}
                                    >
                                        {representative.status ? "Active" : "Inactive"}
                                    </td>

                                    <td className="border border-gray-300 px-4 py-2">
                                        {date}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {time}
                                    </td>

                                    <td className="font-bold border">
                                        <div className="form-control">
                                            <div className="flex items-center justify-center gap-2">
                                                <button onClick={() => representativeRoleUpdate(representative?._id)} >
                                                    {
                                                        representative?.role === "representative" ? <>
                                                            <FaToggleOn className="text-green-500 text-lg " />

                                                        </> : <><FaToggleOff className="text-red-500 text-lg
                                                        "   /></>
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <Link
                                            to={`/dashboard/rep-profile/${representative._id}`}
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
                        representativeData.map((representative, index) => {

                            const { date, time } = formatDateTime(representative?.createdAt);

                            return (
                                <tr key={representative._id} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {index + 1}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {representative.name || "N/A"}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {representative.phone || "N/A"}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 capitalize">
                                        {representative.role || "N/A"}
                                    </td>
                                    <td
                                        className={`border border-gray-300 px-4 py-2 text-center ${representative.status ? "text-green-600" : "text-red-600"
                                            }`}
                                    >
                                        {representative.status ? "Active" : "Inactive"}
                                    </td>

                                    <td className="border border-gray-300 px-4 py-2">
                                        {date}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {time}
                                    </td>

                                    <td className="font-bold border">
                                        <div className="form-control">
                                            <div className="flex items-center justify-center gap-2">
                                                <button onClick={() => representativeRoleUpdate(representative?._id)} >
                                                    {
                                                        representative?.role === "representative" ? <>
                                                            <FaToggleOn className="text-green-500 text-lg " />

                                                        </> : <><FaToggleOff className="text-red-500 text-lg
                                                        "   /></>
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <Link
                                            to={`/dashboard/rep-profile/${representative._id}`}
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
    );
};

export default RepresentativeTable;
