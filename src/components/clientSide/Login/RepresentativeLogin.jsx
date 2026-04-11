import { useState } from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const slideInVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
};

const RepresentativeLogin = () => {
    const [isLoader, setIsLoader] = useState(false);
    const [showpass, setShowPass] = useState(false);
    const useAxios = useAxiosPublic();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const phone = e.target.phone.value;
        const password = e.target.password.value;

        const payload = {
            phone,
            password,
        };

        setIsLoader(true);

        try {
            const res = await useAxios.post(`/representative/login`, payload);
            setIsLoader(false);

            if (res) {
                Swal.fire({
                    icon: 'success',
                    title: 'Logged In Successfully',
                    text: 'Redirecting to your dashboard...',
                    timer: 2000,
                    showConfirmButton: false,
                });
                localStorage.setItem('representativeToken', res.data.data.representativeToken);
                localStorage.setItem('user', res.data.data?.representative.role);
                window.location.href = '/dashboard';
            }
        } catch (error) {
            setIsLoader(false); // Ensure the loader stops even if there's an error

            Swal.fire({
                icon: 'error',
                title: 'Failed to login',
                text: error.response?.data?.msg || 'Something went wrong. Please try again.',
                timer: 2000,
                showConfirmButton: false,
            });
        }
    };

    window.scrollTo(0, 0);

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
                        src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1735213918/UniverseSoftTech/Image/gxl7luvix8m2kyavyerx.svg"
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
                        <h2 className="text-2xl font-semibold text-white">Login representative account </h2>
                        <p className="text-white mt-2">
                            Don’t have an account?
                            <Link to="/representative-register" className="underline pl-1 hover:text-universe_primary">
                                Register
                            </Link>
                        </p>
                    </div>
                    <div className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="block text-sm text-gray-600">
                                        Phone Number
                                    </label>
                                    <input
                                        placeholder="Phone Number"
                                        id="phone"
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
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            className="text-xs hover:underline text-universe_secendary"
                                        >
                                            Forgot password?
                                        </a>
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
                        <div className="flex items-center w-full my-4">
                            <hr className="w-full border-gray-300" />
                            <p className="px-3 text-gray-400">OR</p>
                            <hr className="w-full border-gray-300" />
                        </div>
                        <div className="flex space-x-3 p-6">
                            {/* <Link to={`/representative-login`}>
                                <button
                                    aria-label="Login with Google"
                                    type="button"
                                    className="flex items-center justify-center w-full p-4 space-x-4 border border-bg_btn_primary rounded-md hover:bg-bg_btn_primary hover:text-white transition duration-300"
                                >

                                    <p>Login Representative </p>
                                </button>
                            </Link> */}
                            <button
                                aria-label="Login with GitHub"
                                type="button"
                                className="flex items-center justify-center w-full p-4 space-x-4 border border-bg_btn_primary rounded-md hover:bg-bg_btn_primary hover:text-white transition duration-300"
                            >

                                <Link to={'/representative-register'}>
                                    <p>Register Representative</p>
                                </Link>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default RepresentativeLogin;
