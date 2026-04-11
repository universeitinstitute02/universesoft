import React, { useState, useEffect } from "react";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { uploadImg } from "../../../../uploadImage/UploadImage";

const UpdateMember = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();

    const adminToken = localStorage.getItem("admin_token");

    const config = {
      headers: {
        Authorization: adminToken,
      },
    };
  

    const { data: member = {}, refetch } = useQuery({
        queryKey: ['member'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/member/${id}`, config);
            return res.data;
        }
    })

    // console.log(member.data);
    const incomingUrl = member?.data?.image;
    // console.log(incomingUrl);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const toastId = toast.loading("Updating...");
        const form = e.target;
        const name = form.name.value;
        const designation = form.designation.value;
        const contact = form.contact.value;
        const email = form.email.value;
        const experience = form.experience.value;
        const memberImage = e.target.team_img.files[0];

        let image = incomingUrl;
        if (!memberImage?.name) {
            image = incomingUrl
        } else {
            image = await uploadImg(memberImage);
        }


        const formData = { name, designation, contact, email, experience, image };
        // console.log(formData);
        axiosPublic.put(`/member/${id}`, formData, config)
            .then(res => {
                if (res) {
                    toast.success("Member updated successfully!!", { id: toastId });
                }
                refetch();

                // Optionally reset form fields or navigate away

            })
            .catch(err => {
                toast.error(err?.message, { id: toastId });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Update Member Information
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={member?.data?.name}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder=""
                            key={Date.now()}
                        />
                    </div>

                    {/* Designation */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Designation
                        </label>
                        <input
                            type="text"
                            name="designation"
                            defaultValue={member?.data?.designation}
                            key = {Date.now()}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Software Engineer"
                            required
                        />
                    </div>

                    {/* Contact */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            name="contact"
                            defaultValue={member?.data?.contact}
                            key={Date.now()}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="+1-555-123-4567"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={member?.data?.email}
                            key={Date.now()}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="john.doe@example.com"
                            required
                        />
                    </div>

                    {/* Experience */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Experience
                        </label>
                        <input
                            type="text"
                            name="experience"
                            defaultValue={member?.data?.experience}
                            key={Date.now()}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="5 years"
                            required
                        />
                    </div>

                    {/* image  */}
                    <div className="mb-4 w-full ">
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                            Upload image
                        </label>
                        <input
                            type="file"
                            name="team_img"
                            accept="image/*"
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                           
                        />
                    </div>

                    <p className="font-bold">Already uploaded images</p>
                    <div className="avatar">
                        <div key={Date.now()} className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                            <img src={member?.data?.image} />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-300"
                        >
                            Update Data
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateMember;