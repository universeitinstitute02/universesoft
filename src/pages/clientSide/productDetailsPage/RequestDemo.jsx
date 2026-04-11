import React, { useState } from 'react';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const RequestDemo = () => {


    const formRef = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_sx83m91', 'template_x1ajmyn', formRef.current, {
                publicKey: 'PbUISmrSE9uXrKvsb',
            })
            .then(
                () => {

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Email Sent Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
                (error) => {
                    setError(true);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Email Sent Failed",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log('FAILED...', error.text);
                },
            );
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic
        // console.log(formData);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden lg:flex max-w-4xl w-full">
                {/* Graphic Section */}
                <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: "url(https://res.cloudinary.com/dnvmj9pvk/image/upload/v1728473736/Universe%20Soft%20Tech/qh0wo7asbthnpoijf6ua.png)" }}>
                    {/* You can add additional text or logos on the image */}
                    <div className="h-full w-full  flex items-center justify-center">
                    </div>
                </div>

                {/* Form Section */}
                <div className="lg:w-1/2 p-8 lg:p-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">Request a Demo</h2>
                    <form onSubmit={sendEmail} ref={formRef} className="space-y-6">
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
                                placeholder="Your name"
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
                                placeholder="Your email"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Phone
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your phone number"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Tell us more about your requirements"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors duration-300"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RequestDemo;