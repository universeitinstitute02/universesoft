import { useState } from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { errorToast, isEmail, isEmpty } from "../../../helper/fromHelper";
import toast, { Toaster } from "react-hot-toast";
import { loginApi } from "../../../api-request/admin-api/login-api";

const slideInVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const LoginComponent = () => {
  const [isLoader, setIsLoader] = useState(false);
  const [showpass, setShowPass] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const getInputValue =  (name, value) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const submitValue = async (e) => {
    e.preventDefault();
    if (isEmail(email)) {
      return toast.error("Please provide your email");
    } else if (isEmpty(password)) {
      return toast.error("Please provide your password");
    }else{
      let res = await loginApi(data);
      if(res){
        navigate("/dashboard")
        return toast.success("Login successfully");
      }else{
        return toast.error("something went wrong");
      }
    }
  };

  window.scrollTo(0, 0);
  return (
    <div>
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
            <div className="bg-custom-gradient p-4 text-center rounded-t-lg lg:rounded-t-none lg:rounded-r-lg">
              <h2 className="text-3xl font-semibold text-white">
                Login to as Admin
              </h2>
              <p className="text-white mt-2">
                Don’t have an account?
                <Link
                  to="/register"
                  className="underline pl-1 hover:text-universe_primary"
                >
                  Register
                </Link>
              </p>
            </div>
            <div className="p-6">
              <form onSubmit={submitValue} className="space-y-8">
                <div className="space-y-4">
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
                      type="email"
                      placeholder="info@gmail.com"
                      className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                      required
                    />
                  </div>
                  <div className="space-y-2 relative">
                    <div className="flex justify-between">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600"
                      >
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
                      value={password}
                      onChange={(e) => {
                        getInputValue("password", e.target.value);
                      }}
                      type={showpass ? "text" : "password"}
                      className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                      required
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
                <button
                  aria-label="Login with Google"
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
                  <p>Login with Google</p>
                </button>
                <button
                  aria-label="Login with GitHub"
                  type="button"
                  className="flex items-center justify-center w-full p-4 space-x-4 border border-bg_btn_primary rounded-md hover:bg-bg_btn_primary hover:text-white transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current text-bg_btn_primary"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                  <p>Login with GitHub</p>
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

export default LoginComponent;
