import React, { useState } from "react";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { uploadImg } from "../../../../uploadImage/UploadImage";

const UploadDataForm = ({ refetch }) => {

    const axiosPublic = useAxiosPublic();


    const adminToken = localStorage.getItem("admin_token");

    const config = {
      headers: {
        Authorization: adminToken,
      },
    };
  

    const [formData, setFormData] = useState({
        name: "",
        designation: "",
        contact: "",
        email: "",
        experience: "",
        image: "",
    });

    const handleChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    const handleSubmit = async (e) => {
        const toastId = toast.loading("Updating...");
        e.preventDefault();
        const image = e.target.team_img.files[0];

        let imageUrl = '';
        if (!image?.name) {
            imageUrl = ''
        } else {
            imageUrl = await uploadImg(image);
        }

        formData.image = imageUrl;





        // Handle form submission logic (e.g., POST to server)
        // console.log(formData);
        axiosPublic.post('/member', formData, config)
            .then(res => {
                if (res) {
                    toast.success("Member added successfully!!", { id: toastId });

                    Swal.fire({
                        title: "Success!",
                        text: "Team Member added!",
                        icon: "success"
                    });
                }
                refetch();
                setFormData({
                    name: "",
                    designation: "",
                    contact: "",
                    email: "",
                    experience: "",
                });

            })
            .catch(err => {
                toast.error(err?.message, { id: toastId });
            })

    };

    return (
        <div className="px-4">
            <div className="bg-white rounded-lg shadow-lg p-8  w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Upload Data Form
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Name"
                                required
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
                                value={formData.designation}
                                onChange={handleChange}
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
                                value={formData.contact}
                                onChange={handleChange}
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
                                value={formData.email}
                                onChange={handleChange}
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
                                value={formData.experience}
                                onChange={handleChange}
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
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="w-1/4 mx-auto">
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-300"
                        >
                            Submit Data
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadDataForm;
