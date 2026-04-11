import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import formatDateTime from "../../../../hooks/useDateTime";

const ManageTeamTable = () => {
    const axiosPublic = useAxiosPublic();

    const adminToken = localStorage.getItem("admin_token");

    const config = {
        headers: {
            Authorization: adminToken,
        },
    };

    const { data: teamMembers = {}, refetch } = useQuery({
        queryKey: ['teamMembers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/member');
            return res.data;
        }
    });


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("is confirmed")
                axiosPublic.delete(`/member/${id}`, config)
                    .then(res => {
                        if (res) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Member has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })

            }
        });
    }

    return (
        <div className="overflow-x-auto border rounded-2xl">
            {/* Responsive Table for larger screens */}
            <table className="min-w-full bg-white hidden md:table shadow-lg">
                <thead>
                    <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                        <th className="py-3 px-6 text-left">#</th>
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Designation</th>
                        <th className="py-3 px-6 text-left">Contact</th>
                        <th className="py-3 px-6 text-left">Experience</th>
                        <th className="py-3 px-6 text-left">Joining Date</th>
                        <th className="py-3 px-6 text-left">Joining Time</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teamMembers.data?.map((member, index) =>
                    {
                        const { date, time } = formatDateTime(member?.createdAt);
                        return (
                            <tr key={member._id} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-6">{index+1}</td>
                                <td className="py-4 px-6">{member.name}</td>
                                <td className="py-4 px-6">{member.designation}</td>
                                <td className="py-4 px-6">{member.contact}</td>
    
                                <td className="py-4 px-6">{member.experience}</td>
                                <td className="py-4 px-6">{date}</td>
                                <td className="py-4 px-6">{time}</td>

                                <td className="py-4 px-6 text-center flex justify-center space-x-2">
                                    <Link to={`/dashboard/update/${member._id}`}>
                                        <button
                                            className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
                                        >
                                            <FaEdit className="inline-block text-lg" />
                                        </button>
                                    </Link>
    
                                    <button
                                        onClick={() => handleDelete(member._id)}
                                        className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                                    >
                                        <FaTrashAlt className="inline-block text-lg" />
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>

            {/* Mobile View - Card Layout */}
            <div className="md:hidden">
                {teamMembers.data?.map((member) => (
                    <div key={member._id} className="bg-white shadow-md rounded-lg p-5 mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleUpdate(member)}
                                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    onClick={() => handleDelete(member)}
                                    className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">Designation: {member.designation}</p>
                        <p className="text-sm text-gray-600">Contact: {member.contact}</p>
                        <p className="text-sm text-gray-600">Email: {member.email}</p>
                        <p className="text-sm text-gray-600">Experience: {member.experience}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageTeamTable;
