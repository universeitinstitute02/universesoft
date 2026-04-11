import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast, {Toaster} from "react-hot-toast"
import { registrationApi } from "../../../api-request/admin-api/registration-api.js";

const RegisterComponent = () => {
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
        stiffness: 50,
      },
    },
    hiddenRight: { opacity: 0, x: 50 },
    visibleRight: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      },
    },
  };
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    contactNumber: "",
    profilePhoto: "",
  });

  const { name, email, password, contactNumber, profilePhoto } = data;
  const getInputValue = (name, value) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitData = async (e) => {
    e.preventDefault();
    let res = await registrationApi(data);
    if(res){
      toast.success("registration successfully");
      navigate("/admin-login")
    }else{
      toast.error("something went wrong")
    }
  };

  return (
    <div>
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
            <img
              src="https://i.postimg.cc/RFZ24H5Y/11073076-copy.png"
              alt="RegisterIllustration"
              className="max-w-full h-auto"
            />
          </motion.div>

          {/* Right side with form */}
          <motion.div
            initial="hiddenRight"
            whileInView="visibleRight"
            variants={scrollAnimationVariants}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:w-1/2 w-full p-6"
          >
            <div className="bg-custom-gradient p-4 text-center rounded-t-lg lg:rounded-t-none lg:rounded-r-lg">
              <h2 className="text-3xl font-semibold text-white">
                Register as admin
              </h2>
              <p className="text-white mt-2">
                Already have an account?
                <Link
                  to="/login"
                  className="underline pl-1 hover:text-universe_primary"
                >
                  Login
                </Link>
              </p>
            </div>
            <div className="p-6">
              <form onSubmit={submitData} className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => {
                      getInputValue("name", e.target.value);
                    }}
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-600"
                  >
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => {
                      getInputValue("email", e.target.value);
                    }}
                    id="email"
                    type="email"
                    placeholder="info@gmail.com"
                    className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="photourl"
                    className="block text-sm text-gray-600"
                  >
                    Photo URL
                  </label>
                  <input
                    value={profilePhoto}
                    onChange={(e) => {
                      getInputValue("profilePhoto", e.target.value);
                    }}
                    id="photourl"
                    type="text"
                    placeholder="Provide Photo URL"
                    className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="photourl"
                    className="block text-sm text-gray-600"
                  >
                    Contact number
                  </label>
                  <input
                    value={contactNumber}
                    onChange={(e) => {
                      getInputValue("contactNumber", e.target.value);
                    }}
                    id="Contact number"
                    type="number"
                    placeholder="Contact Number"
                    className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                    required
                  />
                </div>
                <div className="space-y-2 relative">
                  <label
                    htmlFor="password"
                    className="block text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    value={password}
                    onChange={(e) => {
                      getInputValue("password", e.target.value);
                    }}
                    type={showPassword ? "text" : "password"}
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
                    "Register"
                  )}
                </button>
              </form>
              <div className="flex items-center w-full my-4">
                <hr className="w-full border-gray-300" />
                <p className="px-3 text-gray-400">OR</p>
                <hr className="w-full border-gray-300" />
              </div>
              <div className="flex space-x-3 p-6">
                <button
                  aria-label="Register with Google"
                  type="button"
                  className="flex items-center justify-center w-full p-4 space-x-4 border border-bg_btn_primary rounded-md hover:bg-bg_btn_primary hover:text-white transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current text-bg_btn_primary"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                  <p>Register with Google</p>
                </button>
                <button
                  aria-label="Register with GitHub"
                  type="button"
                  className="flex items-center justify-center w-full p-4 space-x-4 border border-bg_btn_primary rounded-md hover:bg-bg_btn_primary hover:text-white transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current text-bg_btn_primary"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.022 0.158-4.213 0 0 1.329-0.426 4.347 1.628 1.255-0.349 2.596-0.524 3.924-0.529 1.33 0.005 2.668 0.186 3.923 0.535 3.019-2.062 4.348-1.628 4.348-1.628 0.878 2.2 0.339 3.812 0.162 4.215 1.031 1.119 1.651 2.546 1.651 4.297 0 6.147-3.753 7.493-7.319 7.885 0.575 0.494 1.088 1.467 1.088 2.964 0 2.141-0.019 3.86-0.019 4.381 0 0.434 0.286 0.931 1.097 0.77 6.349-2.115 10.883-8.061 10.883-15.174 0-8.83-7.161-16-16-16z"></path>
                  </svg>
                  <p>Register with GitHub</p>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default RegisterComponent;
