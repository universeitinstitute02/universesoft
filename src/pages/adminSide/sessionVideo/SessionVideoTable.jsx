import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import formatDateTime from "../../../hooks/useDateTime";
import { Link } from "react-router-dom";
import { deleteAlert } from "../../../helper/deleteHelperAlert";
import Swal from "sweetalert2";

const SessionVideoTable = ({ productVideoData, refetch }) => {
    const axiosPublic = useAxiosPublic();
    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };



    const deleteVideos = async (id) => {
        try {
            let resp = await deleteAlert();
            if (resp.isConfirmed) {
                let res = await axiosPublic.delete(`/deleteSessionVideo/${id}`, config);
                if (res) {
                    Swal.fire({
                        title: "Video Deleted",
                        icon: "success",
                        confirmButtonText: "Okay"
                    })
                    refetch();
                }
            }
        } catch (error) {

            Swal.fire({
                title: error.response.data?.msg,
                icon: "error",
                confirmButtonText: "Okay"
            })
        }
    }

    return (
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Video Management</h1>
            <table className="min-w-full table-auto border-collapse border border-gray-200 text-[12px]">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">#</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Session Title</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Video URL</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Youtube URL</th>
                        <th className="border border-gray-300 px-4 py-2 text-left"> Date</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productVideoData?.map((item, index) => {
                            const { date, time } = formatDateTime(item.createdAt);
                            return (
                                <tr key={item?._id} className="hover:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2">{index + 1} </td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.session_name} </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <Link
                                            to={item?.video_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            View Video
                                        </Link>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <Link
                                            to={item?.youtube_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            View Video
                                        </Link>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">{date}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <div className="flex space-x-2">
                                            <Link to={`/dashboard/session-video-update/${item?._id}`}>
                                                <button className="text-blue-500 hover:text-blue-700">
                                                    <FaEdit />
                                                </button>
                                            </Link>
                                            <button onClick={() => deleteVideos(item?._id)} className="text-red-500 hover:text-red-700">
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }



                </tbody>
            </table>
        </div>
    );
};

export default SessionVideoTable;
