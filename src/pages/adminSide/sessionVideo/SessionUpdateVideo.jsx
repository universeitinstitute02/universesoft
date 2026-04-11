import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { UploadVideo } from "../../../uploadVideo/UploadVideo";
import { updateAlert } from "../../../helper/updateAlert";


const SessionUpdateVideo = () => {
    const { id } = useParams();
    const [loader, setLoader] = useState(false);
    const axiosPublic = useAxiosPublic();
    const adminToken = localStorage.getItem("admin_token");

    const config = {
        headers: {
            Authorization: adminToken,
        },
    };
    const { data: singleSessionVideo = {}, refetch, isError, isLoading } = useQuery({
        queryKey: ["singleSessionVideo"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/singleSessionVideo/${id}`, {
                headers: { Authorization: adminToken },
            });
            return res.data.data;
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const videoUrl = e.target.videoUrl.files[0];
        const youtube_url = e.target.youtube_url.value;
        const session_name = e.target.session_name.value;

        let upcommingVideo = singleSessionVideo?.video_url;

        if (videoUrl) {
            upcommingVideo = await UploadVideo(videoUrl);
        } else {
            upcommingVideo = singleSessionVideo?.video_url;
        }

        const payload = {
            youtube_url,
            session_name,
            video_url: upcommingVideo,
        };

        const resp = await updateAlert();
        try {
            if (resp.isConfirmed) {
                setLoader(true);
                let res = await axiosPublic.put(`/updateSessionVideo/${id}`, payload, config);

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
        <div className="w-1/2 mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <Helmet>
                <title>Dashboard | Update Product Video</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-4 text-center">Update Session Video</h1>
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
                    {singleSessionVideo?.videoUrl && (
                        <p className="text-sm text-gray-500 mt-1">
                            Current Video: {singleSessionVideo?.video_url}
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
                        name="session_name"
                        className="mt-1 block w-full px-3 py-2 border rounded-md"
                        defaultValue={singleSessionVideo?.session_name}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="youtubeUrl" className="block text-sm font-medium text-gray-700">
                        YouTube URL
                    </label>
                    <input
                        type="text"
                        id="youtubeUrl"
                        name="youtube_url"
                        className="mt-1 block w-full px-3 py-2 border rounded-md"
                        defaultValue={singleSessionVideo?.youtube_url}
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

export default SessionUpdateVideo;
