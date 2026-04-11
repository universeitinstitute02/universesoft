import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { deleteAlert } from "../../../helper/deleteHelperAlert";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ProductVideoTable = () => {
    const axiosPublic = useAxiosPublic();
    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken, // Ensure correct token format
        },
    };

    const {
        data: productVideoData = [],
        refetch,
        isError,
        isLoading,
    } = useQuery({
        queryKey: ["productVideoData"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/product-all-videos`, config);
            console.log(res.data.data);
            return res.data.data;
        },
    });

    const deleteVideos = async (id) => {
        try {
            let resp = await deleteAlert();
            if (resp.isConfirmed) {
                let res = await axiosPublic.delete(`/product-video-delete/${id}`, config);
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

    if (isLoading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    if (isError) {
        return <div className="text-center mt-10 text-red-500">Error fetching data!</div>;
    }

    refetch();

    return (
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Video Management</h1>
            <table className="min-w-full text-[12px] table-auto border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">Serial</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Video URL</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Youtube URL</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Upload Date</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {productVideoData?.map((item, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">{i + 1}</td>
                            <td className="border border-gray-300 px-4 py-2">{item?.title}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <a
                                    href={item?.videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    View Video
                                </a>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <a
                                    href={item?.youtubeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    View Video
                                </a>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {new Date(item.createdAt).toLocaleDateString()}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <div className="flex space-x-2">
                                    <Link to={`/dashboard/product-video-update/${item?._id}`}>
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
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductVideoTable;
