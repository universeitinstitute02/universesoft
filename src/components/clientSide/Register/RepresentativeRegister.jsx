import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { createAlert } from '../../../helper/createAlert';
import Swal from 'sweetalert2';

const RepresentativeRegister = () => {
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
    if (password !== confirmPassword) {
      toast.error("Your password and confirm password  not match. Please try again");
      return;
    };

    const payload = {
      name,
      phone,
      password,
      confirmPassword
    }

    try {
      const resp = await createAlert();


      if (resp.isConfirmed) {
        setIsLoader(true);
        let res = await axiosPublic.post(`/representative/create`, payload);
        setIsLoader(false);
        if (res) {
          console.log(res)
          localStorage.setItem("repToken", res.data.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data.data));
          navigate("/upload-information")
        }
      }

    } catch (error) {
      setIsLoader(false);
      console.log(error);
      toast.error("Something went wrong. Please try again");
    }



  }

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
          {/* <img src='https://res.cloudinary.com/dnvmj9pvk/image/upload/v1734519210/Universe%20Soft%20Tech/Public/iwesgxes2v3tmw8qcih4.png' alt="RegisterIllustration" className="max-w-full h-auto" /> */}
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
            <h2 className="text-2xl font-semibold text-white">Register representative account</h2>
            <p className="text-white mt-2">
              Already have an account?
              <Link to="/representative-login" className="underline pl-1 hover:text-universe_primary">
                Login
              </Link>
            </p>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* name */}
              <div className="space-y-2">
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
              <div className="space-y-2">
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
              <div className="space-y-2 relative">
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
              <div className="space-y-2 relative">
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
                  'Next'
                )}
              </button>
            </form>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RepresentativeRegister;
