import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { videoAlert } from "./../../../helper/videoAlert";
import useAxiosPublic from "./../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { UploadVideo } from "./../../../uploadVideo/UploadVideo";
import ProductVideoTable from "./ProductVideoTable";

const AddProductVideo = () => {
    const [loader, setLoader] = useState(false);
    
    const axiosPublic = useAxiosPublic();

    const adminToken = localStorage.getItem("admin_token");
    const adminConfig = {
        headers: {
            Authorization: adminToken,
        },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const videoUrl = e.target.videoUrl.files[0];
        const title = e.target.title.value;
        const type = e.target.prodduct_type.value;
        const description = e.target.product_desc.value;
        const youtubeUrl = e.target.youtubeUrl.value;

       

        let uploadVideo = "";
        try {
            setLoader(true);
            uploadVideo = await UploadVideo(videoUrl);
            const payload = {
                videoUrl: uploadVideo,
                title: title,
                youtubeUrl,
                type,
                description
            };

            let resp = await videoAlert();
            if (resp.isConfirmed) {
                const res = await axiosPublic.post(
                    `/product-video-upload`,
                    payload,
                    adminConfig
                );
                setLoader(false);
                if (res) {
                    Swal.fire({
                        icon: "success",
                        title: "Product Video Uploaded Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    e.target.reset();
                }
            }
        } catch (e) {
            console.error(`Error: ${e}`);
            setLoader(false);
            Swal.fire({
                icon: "error",
                title: "Failed to upload product video",
                text: e.message || "An error occurred",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
                <Helmet>
                    <title>Dashboard | Product Video Upload</title>
                </Helmet>
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Product Video Upload
                </h1>
                <form onSubmit={handleSubmit}>
                    {/* Video URL Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="videoUrl"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Product Video
                        </label>
                        <input
                            type="file"
                            id="videoUrl"
                            name="videoUrl"
                            accept="video/*"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>

                    {/* Title Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter title"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>

                    {/* Youtube url Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="youtubeUrl"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Youtube Url
                        </label>
                        <input
                            type="url"
                            id="youtubeUrl"
                            name="youtubeUrl"
                            placeholder="Enter youtubeUrl"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>


                     {/* Product Type Field */}
                     <div className="mb-4">
                        <label
                            htmlFor="youtubeUrl"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Product Type
                        </label>
                        <input
                            type="text"
                            id="prodduct_type"
                            name="prodduct_type"
                            placeholder="Enter prodduct Type"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>


                    {/* Product Description Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Product Description
                        </label>
                        <textarea name="product_desc" className="mt-1 textarea w-full textarea-accent" placeholder="Product Description"></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`w-full py-2 px-4 rounded-md ${loader
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-500 hover:bg-blue-600 text-white"
                            } focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2`}
                        disabled={loader}
                    >
                        {loader ? "Uploading..." : "Submit"}
                    </button>
                </form>

            </div>
            <div className="my-14" >
                <ProductVideoTable></ProductVideoTable>
            </div>
        </>
    );
};

export default AddProductVideo;
