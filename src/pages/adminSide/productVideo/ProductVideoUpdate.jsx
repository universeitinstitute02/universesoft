import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../../../hooks/useAxiosPublic";
import { UploadVideo } from "./../../../uploadVideo/UploadVideo";
import { updateAlert } from "../../../helper/updateAlert";

const ProductVideoUpdate = () => {
    const { id } = useParams();
    const [loader, setLoader] = useState(false);
    const axiosPublic = useAxiosPublic();
    const adminToken = localStorage.getItem("admin_token");

    const config = {
        headers: {
            Authorization: adminToken,
        },
    };
    const { data: singleProductVideo = {}, refetch, isError, isLoading } = useQuery({
        queryKey: ["singleProductVideo"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/product-single-video/${id}`, {
                headers: { Authorization: adminToken },
            });
            return res.data.data;
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const videoUrl = e.target.videoUrl.files[0];
        const youtubeUrl = e.target.youtubeUrl.value;
        const title = e.target.title.value;

        let upcommingVideo = singleProductVideo?.videoUrl;

        if (videoUrl) {
            upcommingVideo = await UploadVideo(videoUrl);
        } else {
            upcommingVideo = singleProductVideo?.videoUrl;
        }

        const payload = {
            youtubeUrl,
            title,
            videoUrl: upcommingVideo,
        };

        const resp = await updateAlert();
        try {
            if (resp.isConfirmed) {
                setLoader(true);
                let res = await axiosPublic.put(`/product-video-update/${id}`, payload, config);

                setLoader(false);
                if (res) {
                    Swal.fire({
                        title: "Video Updated",
                        icon: "success",
                        confirmButtonText: "Okay"
                    });
                    refetch();
                    return;
                }
            }
        } catch (error) {
            console.log(error);
            setLoader(false);
            Swal.fire({
                title: "Failed to update video",
                icon: "error",
                confirmButtonText: "Okay"
            })
        }



    }


    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading video data. Please try again.</div>;

    return (
        <div className=" mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <Helmet>
                <title>Dashboard | Update Product Video</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-4 text-center">Update Product Video</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700">
                        Upload New Video
                    </label>
                    <input
                        type="file"
                        id="videoUrl"
                        name="videoUrl"
                        accept="video/*"
                        className="mt-1 block w-full px-3 py-2 border rounded-md"
                    />
                    {singleProductVideo?.videoUrl && (
                        <p className="text-sm text-gray-500 mt-1">
                            Current Video: {singleProductVideo.videoUrl}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="mt-1 block w-full px-3 py-2 border rounded-md"
                        defaultValue={singleProductVideo?.title}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="youtubeUrl" className="block text-sm font-medium text-gray-700">
                        YouTube URL
                    </label>
                    <input
                        type="url"
                        id="youtubeUrl"
                        name="youtubeUrl"
                        className="mt-1 block w-full px-3 py-2 border rounded-md"
                        defaultValue={singleProductVideo?.youtubeUrl}
                    />
                </div>

                <button
                    type="submit"
                    className={`w-1/4 py-2 px-4 rounded-md ${loader
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                        }`}
                    disabled={loader}
                >
                    {loader ? "Uploading..." : "Update Video"}
                </button>
            </form>
        </div>
    );
};

export default ProductVideoUpdate;
