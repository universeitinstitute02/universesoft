import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { sendMsgAlert } from '../../../helper/sendMsgAlert';
import Swal from 'sweetalert2';

const SendUpportMsg = () => {
    const [loading, setLoading] = useState(false);
    const clientToken = localStorage.getItem("clientToken");
    const config = {
        headers: {
            Authorization: clientToken,
        },
    };
    const axiosPublic = useAxiosPublic();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phoneNumber = e.target.phoneNumber.value;
        const message = e.target.message.value;
        const payload = {
            name,
            phoneNumber,
            message,
        };

        try {
            const resp = await sendMsgAlert();
            if (resp.isConfirmed) {
                setLoading(true);
                let res = await axiosPublic.post(`/support`, payload, config);
                setLoading(false);
                if (res) {
                    Swal.fire({
                        title: "Message sent successfully",
                        icon: "success",
                        confirmButtonText: "Okay",
                    });
                    e.target.reset();
                }
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
            Swal.fire({
                title: "Failed to send message",
                icon: "error",
                confirmButtonText: "Okay",
            });
        }
    };

    return (
        <div>
            <div className="mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl text-center font-bold mb-4 text-gray-800">Support Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex gap-6">
                        {/* Name Field */}
                        <div className="w-full">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        {/* Phone Number Field */}
                        <div className="w-full">
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="10"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Enter your message"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`py-2 px-6 rounded-md text-white ${loading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                            }`}
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg
                                    className="animate-spin h-5 w-5 mr-2 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8H4z"
                                    ></path>
                                </svg>
                                Processing...
                            </span>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SendUpportMsg;
