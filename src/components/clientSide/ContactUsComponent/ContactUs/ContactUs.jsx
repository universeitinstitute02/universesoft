import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import './ContactUs.css'; // Importing the custom CSS file
import { FaAnglesRight } from "react-icons/fa6";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";


const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const slideInVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
};

const ContactUs = () => {

    const formRef = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs
    //         .sendForm('service_sx83m91', 'template_ope8b6j', formRef.current, {
    //             publicKey: 'PbUISmrSE9uXrKvsb',
    //         })
    //         .then(
    //             () => {
    //                 setSuccess(true);
    //                 Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: "Email Sent Successfully",
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 });
    //             },
    //             (error) => {
    //                 setError(true);
    //                 Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: "Email Sent Failed",
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 });
    //                 console.log('FAILED...', error.text);
    //             },
    //         );
    // };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_7qf4r5a', 'template_4o7c5qw', formRef.current, {
                publicKey: '9GK64Bx_s0ue-trKu',
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


    return (
        <div className="bg-cover bg-center min-h-screen flex items-center justify-center">
            <div className="container mx-auto py-20 px-6 lg:px-0 bg-white bg-opacity-80 rounded-lg">
                <div className="flex flex-col lg:flex-row items-center lg:space-x-10 space-y-10 lg:space-y-0">
                    {/* Left Section */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideInVariants}
                        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                        className="flex-1 hidden lg:block space-y-6 lg:space-y-10"
                    >
                        <img src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1734955943/universeIT/ugunp0e46zspvmjqonhv.png" alt="contactImg" className="w-full" />
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariants}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex-1 bg-white p-8 lg:p-12 rounded-lg shadow-md"
                    >
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-text_hover mb-6">Personal Information</h2>

                            <form action="" onSubmit={sendEmail}
                            ref={formRef}
                            >
                                {/* Name & Designation */}
                                <div className="flex flex-col lg:flex-row gap-6">
                                    <div className="w-full">
                                        <label htmlFor="name" className="block text-lg font-semibold text-gray-700 after:content-['*'] after:text-red-400">Name:</label>
                                        <input className="mt-2 py-3 px-4 border border-[#d4d7e5] text-[#565973] rounded-md w-full outline-none focus:border-universe_primary focus:shadow-md" type="text" id="name" name="name" placeholder="First Name" required />
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="email" className="block text-lg font-semibold text-gray-700 after:content-['*'] after:text-red-400">Email:</label>
                                        <input className="mt-2 py-3 px-4 border border-[#d4d7e5] text-[#565973] rounded-md w-full outline-none focus:border-universe_primary focus:shadow-md" type="email" id="email" name="email" placeholder="example@company.com" required />
                                    </div>
                                </div>

                                {/* Phone & Company */}
                                <div className="flex flex-col lg:flex-row gap-6">
                                    <div className="w-full">
                                        <label htmlFor="phone" className="block text-lg font-semibold text-gray-700 after:content-['*'] after:text-red-400">Phone:</label>
                                        <div className="flex mt-2">
                                            <span className="py-3 px-4 border border-r-0 border-[#d4d7e5] text-[#565973] rounded-l-md">+88</span>
                                            <input className="py-3 px-4 border border-[#d4d7e5] text-[#565973] rounded-r-md w-full outline-none focus:border-universe_primary focus:shadow-md" type="number" id="phone" name="phone" placeholder="Phone Number" required />
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <label htmlFor="company" className="block text-lg font-semibold text-gray-700 after:content-['*'] after:text-red-400">Company:</label>
                                        <input className="mt-2 py-3 px-4 border border-[#d4d7e5] text-[#565973] rounded-md w-full outline-none focus:border-universe_primary focus:shadow-md" type="text" id="company" name="company" placeholder="Company" required />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-lg font-semibold text-gray-700 after:content-['*'] after:text-red-400">Message:</label>
                                    <textarea className="mt-2 py-3 px-4 border border-[#d4d7e5] text-[#565973] rounded-md w-full outline-none focus:border-universe_primary focus:shadow-md" id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
                                </div>

                                {/* Privacy Policy */}
                                <div className="mt-6">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" defaultChecked className="checkbox" />
                                        <span className="text-gray-800 ml-2">By submitting, you agree to receive marketing emails from Universe Soft Tech. Unsubscribe anytime. View our <Link to="/privacy-policy" className="text-bg_btn_primary hover:text-bg_btn_hover">Privacy Policy.</Link>.</span>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button className="px-5 mt-8 py-4 bg-bg_btn_primary text-white text-lg font-semibold rounded-md hover:bg-bg_btn_hover transition duration-300 flex items-center justify-center gap-2">
                                    Submit <FaAnglesRight className="text-2xl" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
