import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { createAlert } from '../../../helper/createAlert';
import Swal from 'sweetalert2';
import { uploadImg } from '../../../uploadImage/UploadImage';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

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

  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const profilePhoto = e.target.profilePhoto.files[0];
    const contactNumber = e.target.contactNumber.value;

    let imgUrl = "";

    if (!profilePhoto.name) {
      imgUrl = ""
    }
    imgUrl = await uploadImg(profilePhoto);

    const payload = {
      name,
      email,
      password,
      contactNumber,
      profilePhoto: imgUrl
    };

    try {

      const resp = await createAlert();
      setIsLoader(true);
      let res = await axiosPublic.post(`/CreateAdmin`, payload);
      setIsLoader(false);
      if (resp.isConfirmed) {
        if (res) {
          Swal.fire({
            title: "Registration Successful!",
            text: "You have been registered successfully. Please login to continue.",
            icon: "success"
          });
          e.target.reset();
        }
      }
    } catch (error) {
      console.error(error.response.data.data);
      setIsLoader(false);
      Swal.fire({
        title: "Failed to register",
        text: error.response.data.data,
        icon: "error"
      })
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
          <div className="bg-custom-gradient p-4 text-center rounded-lg ">
            <h2 className="text-3xl font-semibold text-white">Register your Admin account</h2>
            <p className="text-white mt-2">
              Already have an account?
              <Link to="/login" className="underline pl-1 hover:text-universe_primary">
                Login
              </Link>
            </p>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm text-gray-600">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name='name'
                  placeholder="Your Name"
                  className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm text-gray-600">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="info@gmail.com"
                  name='email'
                  className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="number" className="block text-sm text-gray-600">
                  Phone Number
                </label>
                <input
                  id="number"
                  type="text"
                  name='contactNumber'
                  placeholder="017-00000000"
                  className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="photourl" className="block text-sm text-gray-600">
                  Photo
                </label>
                <input
                  id="photourl"
                  type="file"
                  name='profilePhoto'
                  placeholder="Provide Photo URL"
                  className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                  required
                />
              </div>
              <div className="space-y-2 relative">
                <label htmlFor="password" className="block text-sm text-gray-600">
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
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

export default Register;
