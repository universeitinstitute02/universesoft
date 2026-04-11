import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { createAlert } from '../../../helper/createAlert';
import Swal from 'sweetalert2';
import { uploadImg } from '../../../uploadImage/UploadImage';

const StepTwoRegister = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [isLoader, setIsLoader] = useState(false);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    

    window.scrollTo(0, 0);

    const scrollAnimationVariants = {
        hiddenLeft: { opacity: 0, x: -50 },
        visibleLeft: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 50
            }
        },
        hiddenRight: { opacity: 0, x: 50 },
        visibleRight: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 50
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("repToken");
        const user = localStorage.getItem("user");
        const userId  = user._id;
        console.log("user id is " + userId);
        const config = {
            headers: {
                Authorization: `${token}`
            }
        };
        const referenceId = e.target.referenceId.value;
        const image = e.target.image.files[0];
        const division = e.target.division.value;
        const distic = e.target.distic.value;
        const upazila = e.target.upazila.value;
        const address = e.target.address.value;

        let img = "";
        if(!image.name){
            img = ""
        }

        img = await uploadImg(image);

        const payload = {
            referenceId,
            image: img,
            division,
            distic,
            upazila,
            address,
            userId
        };

        try {
        setIsLoader(true);
        const res = await axiosPublic.put(`/representative/step-two`, payload, config);
        console.log("res is ",res)
        setIsLoader(false);
        if(res){
            Swal.fire({
                icon:'success',
                title: 'Step two submitted successfully',
                showConfirmButton: false,
                timer: 1500,
            })
            e.target.reset();
            navigate(`/representative/step-three`);
            return;

        }
        } catch (error) {
            Swal.fire({
                icon:'error',
                title: 'Failed to submit step two',
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
                    initial="hiddenLeft"
                    whileInView="visibleLeft"
                    variants={scrollAnimationVariants}
                    viewport={{ once: true, amount: 0.2 }}
                    className="hidden lg:flex lg:w-1/2 items-center justify-center p-6"
                >
                    <img src='https://i.postimg.cc/RFZ24H5Y/11073076-copy.png' alt="RegisterIllustration" className="max-w-full h-auto" />
                </motion.div>

                {/* Right side with form */}
                <motion.div
                    initial="hiddenRight"
                    whileInView="visibleRight"
                    variants={scrollAnimationVariants}
                    viewport={{ once: true, amount: 0.2 }}
                    className="lg:w-1/2 w-full p-6"
                >
                    {/* <div className="bg-custom-gradient p-4 text-center rounded-t-lg lg:rounded-t-none lg:rounded-r-lg">
                        <h2 className="text-2xl font-semibold text-white">Register representative account</h2>
                        <p className="text-white mt-2">
                            Already have an account?
                            <Link to="/representative-login" className="underline pl-1 hover:text-universe_primary">
                                Login
                            </Link>
                        </p>
                    </div> */}
                    <div className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* referenceId */}
                            <div className="space-y-2">
                                <label htmlFor="referenceId" className="block text-sm text-gray-600">
                                    Refer Id
                                </label>
                                <input
                                    id="referenceId"
                                    type="text"
                                    placeholder="Refer Id"
                                    name='referenceId'
                                    className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                                />
                            </div>
                            {/* image */}
                            <div className="space-y-2">
                                <label htmlFor="image" className="block text-sm text-gray-600">
                                    Upload Image
                                </label>
                                <input
                                    id="image"
                                    type="file"
                                    placeholder="01700000000"
                                    name="image"
                                    className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                                    required
                                />
                            </div>
                            {/* Division */}
                            <div className="space-y-2">
                                <label htmlFor="division" className="block text-sm text-gray-600">
                                    Division
                                </label>
                                <input
                                    id="division"
                                    type="text"
                                    placeholder="Enter your division"
                                    name="division"
                                    className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                                    required
                                />
                            </div>
                            {/* distic */}
                            <div className="space-y-2">
                                <label htmlFor="distic" className="block text-sm text-gray-600">
                                    Distict
                                </label>
                                <input
                                    id="distic"
                                    type="text"
                                    placeholder="Enter your distict"
                                    name="distic"
                                    className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                                    required
                                />
                            </div>

                            {/* upazila */}
                            <div className="space-y-2">
                                <label htmlFor="upazila" className="block text-sm text-gray-600">
                                    Upazila
                                </label>
                                <input
                                    id="upazila"
                                    type="text"
                                    placeholder="Enter your upazila"
                                    name="upazila"
                                    className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                                    required
                                />
                            </div>

                            {/* Address */}
                            <div className="space-y-2">
                                <label htmlFor="address" className="block text-sm text-gray-600">
                                    Address
                                </label>
                                <textarea
                                    id="address"
                                    placeholder="Enter your address"
                                    name="address"
                                    rows="4"
                                    className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                                    required
                                ></textarea>
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
                                    'Register'
                                )}
                            </button>
                        </form>


                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default StepTwoRegister;

