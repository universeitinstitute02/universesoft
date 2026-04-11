import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from './../../../hooks/useAxiosPublic';

const ProductCategoryDetails = () => {
    const data = {
        categoryName: "Content Writing",
        package: [
            {
                totalPage: "10",
                features: "<ul><li>Blog Posts</li><li>SEO Optimization</li><li>Plagiarism-Free</li></ul>",
                deliveryTime: "5 days",
                price: "150",
                representativePercentange: "18%",
            },
            {
                totalPage: "20",
                features: "<ul><li>Articles</li><li>Keyword Research</li><li>Professional Editing</li></ul>",
                deliveryTime: "10 days",
                price: "300",
                representativePercentange: "28%",
            },
        ],
    };

    const { id } = useParams();

    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };

    const axiosPublic = useAxiosPublic();

    const { data: singleCategoryData = {}, refetch, isError, isLoading } = useQuery({
        queryKey: ['singleCategoryData',id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/single-product-category/${id}`,config);

            return res.data.data;
        }
    });

    if(isLoading){
        return <div className="flex flex-col justify-center h-screen items-center " >Loading...</div>
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                {/* Category Name */}
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{singleCategoryData.categoryName}</h1>


                {/* Packages */}
                <div className="space-y-6">
                    {singleCategoryData.package.map((pkg, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-4  shadow-sm"
                        >
                            <h2 className="text-xl font-semibold text-gray-700">
                                Package {index + 1}
                            </h2>
                            <p className="text-gray-600 mt-2">
                                <span className="font-semibold">Total Pages:</span> {pkg.totalPage}
                            </p>
                            <p className="text-gray-600 ">
                                <span className="font-semibold text-gray-800">Representative Parcentance : {pkg.representativePercentange}</span>
                            </p>
                            <p className="text-gray-600 ">
                                <span className="font-semibold">Delivery Time:</span> {pkg.deliveryTime}
                            </p>
                            <p className="text-gray-600 ">
                                <span className="font-semibold">Price:</span> ${pkg.price}
                            </p>
                            <p className="font-bold underline " >Features : </p>
                            <div
                                className=" text-gray-600"
                                dangerouslySetInnerHTML={{ __html: pkg.features }}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCategoryDetails;
