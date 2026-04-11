import React, { useState } from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { uploadImg } from '../../../../uploadImage/UploadImage';
import toast from 'react-hot-toast';
import { createAlert } from '../../../../helper/createAlert';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddRepresentative = () => {
    window.scrollTo(0, 0);

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [isLoader, setIsLoader] = useState(false);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const referenceId = e.target.referenceId.value;
        const image = e.target.image.files[0];
        const division = e.target.division.value;
        const distic = e.target.distic.value;
        const upazila = e.target.upazila.value;
        const address = e.target.address.value;

        let img = "";
        if (!image.name) {
            img = ""
        }

        img = await uploadImg(image);

        if (password !== confirmPassword) {
            toast.error("Your password and confirm password  not match. Please try again");
            return;
        };

        const payload = {
            name,
            phone,
            password,
            confirmPassword,
            referenceId,
            image: img,
            division,
            distic,
            upazila,
            address
        }

        try {
            const resp = await createAlert();


            if (resp.isConfirmed) {
                setIsLoader(true);
                let res = await axiosPublic.post(`/representative/create`, payload);
                setIsLoader(false);
                if (res) {
                    // console.log(res)
                    // localStorage.setItem("repToken", res.data.data.token);
                    // localStorage.setItem("user", JSON.stringify(res.data.data.data));
                    // navigate("/upload-information")
                    Swal.fire({
                        icon: "success",
                        title: "Representative Added.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }

        } catch (error) {
           
            setIsLoader(false);
            Swal.fire({
                icon: "success",
                title: error.response.data.msg,
                showConfirmButton: false,
                timer: 1500
            });
        }



    }
    return (
        <div>
            <Helmet>
                <title>Dashboard | Add Representative</title>
            </Helmet>
            <div className="p-6 border ">
                <form onSubmit={handleSubmit} className="space-y-8 ">

                    <div className="grid grid-cols-3 gap-4">
                        <div className="">
                            <label htmlFor="name" className="block text-sm text-gray-600">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                name='name'
                                className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                                required
                            />
                        </div>
                        {/* phone */}
                        <div className="">
                            <label htmlFor="phone" className="block text-sm text-gray-600">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                type="text"
                                placeholder="01700000000"
                                name="phone"
                                className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                                required
                            />
                        </div>
                        {/* password */}
                        <div className=" relative">
                            <label htmlFor="password" className="block text-sm text-gray-600">
                                Password
                            </label>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                name='password'
                                className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                                required
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-[40%] text-xl right-3 text-gray-600 cursor-pointer"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {/* confirm password */}
                        <div className=" relative">
                            <label htmlFor="confirmPassword" className="block text-sm text-gray-600">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type={showPassword1 ? 'text' : 'password'}
                                placeholder="Enter your confirm password"
                                name='confirmPassword'
                                className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                                required
                            />
                            <span
                                onClick={() => setShowPassword1(!showPassword1)}
                                className="absolute top-[40%] text-xl right-3 text-gray-600 cursor-pointer"
                            >
                                {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

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



                    </div>

                    <div className="w-1/4 mx-auto ">
                        <button
                            type="submit"
                            className="btn w-full px-8 py-3 border-none font-semibold rounded-md text-white bg-bg_btn_primary hover:bg-bg_btn_hover transition duration-300 "
                        >
                            {isLoader ? (
                                <span className="flex items-center justify-center gap-3">
                                    <FaSpinner className="animate-spin" />
                                    Processing...
                                </span>
                            ) : (
                                'Add Representative'
                            )}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddRepresentative;