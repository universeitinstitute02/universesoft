import { useState } from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const slideInVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
};

const ClientLogin = () => {
    const [isLoader, setIsLoader] = useState(false);
    const [showpass, setShowPass] = useState(false);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    window.scrollTo(0, 0);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const phone = e.target.phone.value;
        const password = e.target.password.value;
        const payload = {
            phone,
            password,
        }

        try {
            setIsLoader(true)
            const res = await axiosPublic.post(`/client-login`, payload);
            setIsLoader(false)
            if (res) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful',
                    showConfirmButton: false,
                    timer: 1500,
                });
                localStorage.setItem("clientToken", res.data?.data?.clientToken);
                localStorage.setItem("user", res.data?.data?.client?.role);
                window.location.href = '/dashboard';
                // e.target.reset()
                return;
            }
        } catch (error) {
            console.log(error);
            setIsLoader(false) // Ensure the loader stops even if there's an error
            Swal.fire({
                icon: 'error',
                title: 'Failed to login',
                showConfirmButton: false,
                timer: 1500,
            })
        }


    }


    return (
        <div className="py-5 flex items-center justify-center min-h-screen">
            <div className="lg:w-[70vw] w-[90vw] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
                {/* Left side with image */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInVariants}
                    transition={{ duration: 0.5 }}
                    className="hidden lg:flex lg:w-1/2 items-center justify-center p-6"
                >

                    <img
                        src="https://i.postimg.cc/RFZ24H5Y/11073076-copy.png"
                        alt="LoginIllustration"
                        className="max-w-full h-auto"
                    />
                </motion.div>

                {/* Right side with form */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInVariants}
                    transition={{ duration: 0.5 }}
                    className="lg:w-1/2 w-full p-6"
                >
                    <div className="bg-custom-gradient p-4 text-center rounded-lg ">
                        <h2 className="text-3xl font-semibold text-white">Login to client account</h2>

                    </div>
                    <div className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="contactNumber" className="block text-sm text-gray-600">
                                        Phone Number
                                    </label>
                                    <input
                                        placeholder="017-00000000"
                                        id="contactNumber"
                                        name="phone"
                                        className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                                        required
                                    />
                                </div>
                                <div className="space-y-2 relative">
                                    <div className="flex justify-between">
                                        <label htmlFor="password" className="text-sm text-gray-600">
                                            Password
                                        </label>
                                        {/* <a
                        rel="noopener noreferrer"
                        href="#"
                        className="text-xs hover:underline text-universe_secendary"
                        >
                        Forgot password?
                        </a> */}
                                    </div>
                                    <input
                                        type={showpass ? "text" : "password"}
                                        className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                                        required
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                    />
                                    <span
                                        onClick={() => setShowPass(!showpass)}
                                        className="absolute top-[40%] text-xl right-3 text-gray-600 cursor-pointer"
                                    >
                                        {showpass ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn w-full px-8 py-3 border-none font-semibold rounded-md text-white bg-bg_btn_primary hover:bg-bg_btn_hover transition duration-300"
                            >
                                {isLoader ? (
                                    <span className="flex items-center justify-center gap-3">
                                        <FaSpinner className="animate-spin" />
                                        Processing...
                                    </span>
                                ) : (
                                    "Login"
                                )}
                            </button>
                        </form>

                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ClientLogin;
