import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { createAlert } from '../../../helper/createAlert';
import Swal from 'sweetalert2';
import { uploadImg } from '../../../uploadImage/UploadImage';

const StepThreeRegister = () => {
    const [educationList, setEducationList] = useState([{ nameOfDegree: '', institute: "", year: "" }]);

    const [isLoader, setIsLoader] = useState(false);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleEducationChange = (index, field, value) => {
        const updatedContents = educationList.map((education, i) =>
            i === index ? { ...education, [field]: value } : education
        );
        setEducationList(updatedContents);
    };

    const removeEducation = (index) => {
        setEducationList(educationList.filter((_, i) => i !== index));
    };

    const addEducation = () => {
        setEducationList([...educationList, { nameOfDegree: '', institute: "", year: "" }]);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        
        const experience = e.target.experience.value;
        const nidNumber = e.target.nidNumber.value;

        const token = localStorage.getItem("repToken");
        const user = localStorage.getItem("user");
        const userId = user._id;
        console.log("user id is " + userId);
        const config = {
            headers: {
                Authorization: `${token}`
            }
        };

        const payload = {
            experience,
            nidNumber,
            education:educationList
        };

        console.log(payload);

        try {
            let res = await axiosPublic.put(`/representative/step-two`, payload,config)
            if(res){
                Swal.fire({
                    title: "Registration Successful",
                    icon: "success",
                    confirmButtonText: "Continue"
                })
                localStorage.clear("repToken");
                localStorage.clear("user");
                navigate('/representative-login');
            }
        } catch (error) {
            Swal.fire({
                title: "Failed to Register",
                icon: "error",
                confirmButtonText: "Try Again"
            })
        }

    };



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

                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2 text-xl">Service List Content</label>
                                {educationList.map((content, index) => (
                                    <div key={index} className="mb-2">
                                        <input
                                            type="text"
                                            value={content.nameOfDegree}
                                            onChange={(e) => handleEducationChange(index, 'nameOfDegree', e.target.value)}
                                            className=" w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                            placeholder="Education degree name"
                                            required
                                        />

                                        <input
                                            type="text"
                                            value={content.institute}
                                            onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
                                            className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                            placeholder="institute"
                                            required
                                        />
                                        <input
                                            type="text"
                                            value={content.year}
                                            onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                                            className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                            placeholder="year"
                                            required
                                        />
                                        {educationList.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeEducation(index)}
                                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={addEducation}
                                    className="mt-2 bg-[#F26604] text-white px-4 py-2 rounded transition duration-300"
                                >
                                    Add Education
                                </button>
                            </div>

                            {/* nidNumber */}
                            <div className="space-y-2">
                                <label htmlFor="nidNumber" className="block text-sm text-gray-600">
                                    Nid Number
                                </label>
                                <input
                                    id="nidNumber"
                                    type="text"
                                    placeholder="Enter your nid number"
                                    name="nidNumber"
                                    className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                                    required
                                />
                            </div>

                            {/* experience */}
                            <div className="space-y-2">
                                <label htmlFor="address" className="block text-sm text-gray-600">
                                    Experience
                                </label>
                                <textarea
                                    id="experience"
                                    placeholder="Enter your Experience"
                                    name="experience"
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

export default StepThreeRegister;

