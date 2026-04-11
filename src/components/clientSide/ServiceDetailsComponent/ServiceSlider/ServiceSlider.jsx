import { FaArrowRight } from "react-icons/fa";
import { MdWifiCalling2 } from "react-icons/md";
import { IoChatbubbles } from "react-icons/io5";




const ServiceSlider = () => {
  return (
    <div className="">
      <div className="carousel w-full bg-blue-300">
        <div id="slide1" className="carousel-item relative w-full ">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between text-white">
            <div className="lg:flex-1">
              <h2 className="text-3xl text-center lg:text-start py-5  lg:text-6xl uppercase ">
                Creative Website{" "}
                <span className="text-[#303E44]">Design &</span>{" "}
                <span className="text-[#303E44]">Develpment</span> in Bangladesh{" "}
              </h2>
              <p className="text-2xl font-medium inter text-center lg:text-start">
                A well-planned corporate website brings marketing strength to
                your company. Open the window to great opportunities for your
                business to grow with our corporate website solutions.
              </p>
              <div className="text-center lg:text-start">
                <button className="py-3 px-5 rounded-md bg-[#303E44] inter hover:bg-white hover:text-[#303E44] text-2xl mt-5">
                  Contact For Price
                </button>
              </div>
            </div>
            <div className="lg:flex-1 flex justify-end">
              <img
                className="w-[500px] h-[500px]"
                src="https://res.cloudinary.com/dqescabbl/image/upload/v1724264287/webdesignslider_qtuvkq.svg"
                alt=""
              />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between text-white">
            <div className="lg:flex-1">
              <h2 className=" text-3xl text-center lg:text-start py-5  lg:text-6xl uppercase lg:py-0">
                <span className="text-[#303E44]">Corporate Website </span>Design
                in Bangladesh{" "}
              </h2>
              <p className="text-2xl font-medium inter text-center lg:text-start">
                A well-planned corporate website brings marketing strength to
                your company. Open the window to great opportunities for your
                business to grow with our corporate website solutions.
              </p>
              <div className="text-center lg:text-start">
                <button className="py-3 px-5 rounded-md bg-[#303E44] inter hover:bg-white hover:text-[#303E44] text-2xl mt-5">
                  Contact For Price
                </button>
              </div>
            </div>
            <div className="lg:flex-1 flex justify-end">
              <img
                className="w-[500px] h-[500px]"
                src="https://res.cloudinary.com/dqescabbl/image/upload/v1724265331/corporatewebsiteslider_bkspdd.svg"
                alt=""
              />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between text-white">
            <div className="lg:flex-1">
              <h2 className="  text-3xl text-center lg:text-start py-5  lg:text-6xl uppercase lg:py-0">
                {" "}
                Build <span className="text-[#303E44]">
                  Business Website{" "}
                </span>{" "}
                in Bangladesh
              </h2>

              <p className="text-2xl font-medium inter text-center lg:text-start">
                A well-planned corporate website brings marketing strength to
                your company. Open the window to great opportunities for your
                business to grow with our corporate website solutions.
              </p>
              <div className="text-center lg:text-start">
                <button className="py-3 px-5 rounded-md bg-[#303E44] inter hover:bg-white hover:text-[#303E44] text-2xl mt-5">
                  Contact For Price
                </button>
              </div>
            </div>
            <div className="lg:flex-1 flex justify-end">
              <img
                className="w-[500px] h-[500px]"
                src="https://res.cloudinary.com/dqescabbl/image/upload/v1724265533/businesswebsiteslider_uz25hz.svg"
                alt=""
              />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between text-white">
            <div className="lg:flex-1">
              <h2 className="  text-3xl text-center lg:text-start py-5  lg:text-6xl uppercase lg:py-0">
                <span className="text-[#303E44]">E-commerse Website </span>
                Design in Bangladesh{" "}
              </h2>
              <p className="text-2xl font-medium inter text-center lg:text-start">
                A well-planned corporate website brings marketing strength to
                your company. Open the window to great opportunities for your
                business to grow with our corporate website solutions.
              </p>
              <div className="text-center lg:text-start">
                <button className="py-3 px-5 rounded-md bg-[#303E44] inter hover:bg-white hover:text-[#303E44] text-2xl mt-5">
                  Contact For Price
                </button>
              </div>
            </div>
            <div className="lg:flex-1 flex justify-end">
              <img
                className="w-[500px] h-[500px]"
                src="https://res.cloudinary.com/dqescabbl/image/upload/v1724265888/ecommerceslider_pc3ugf.svg"
                alt=""
              />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto inter py-5 -translate-y-16 gap-10">
        <div className="py-5 px-10 shadow-xl border-b-2 text-center border-b-sky-500 bg-white">
          <img className="w-[100px] mx-auto shadow p-5 shadow-sky-500 rounded-full"
            src="https://res.cloudinary.com/dqescabbl/image/upload/v1724267570/corporatewebsite_hosju6.png"
            alt=""
          />
          <h2 className="text-2xl font-bold mt-3">Corporate Website</h2>
          <p className="opacity-90 w-44 mx-auto leading-7"> Mobile Friendly Search Engine Optimization Highly Secure DynamicWebsite Easy to Customize</p>
          <button className="text-sky-700 text-2xl font-medium flex items-center justify-center mx-auto">For More Details <FaArrowRight></FaArrowRight></button>
          <p className="text-xl mt-5 font-medium">Contact For Price</p>
          <div className="text-white flex gap-5 py-5 justify-center">
              <button className="flex items-center gap-2 hover:bg-transparent hover:text-sky-700 hover:border-2 hover:border-sky-700 rounded-md py-2.5 px-4 border-2 bg-sky-700 "><MdWifiCalling2></MdWifiCalling2> Call Now</button>
              <button  className="flex items-center gap-2 hover:bg-transparent hover:text-black hover:border-2 hover:border-black rounded-md py-2.5 px-4 border-2 bg-black "><IoChatbubbles></IoChatbubbles> Live Chat </button>
          </div>
        </div>

        <div className="py-5 px-10 shadow-xl border-b-2 text-center border-b-sky-500 bg-white">
          <img className="w-[100px] mx-auto shadow p-5 shadow-sky-500 rounded-full"
            src="https://res.cloudinary.com/dqescabbl/image/upload/v1724268926/businesswebsite_flvihn.png"
            alt=""
          />
          <h2 className="text-2xl font-bold mt-3">Business Website</h2>
          <p className="opacity-90 w-44 mx-auto leading-7"> Responsive Website Easy to Manage Fully Dynamic Secure Website SEO Friendly Secure Website</p>
          <button className="text-sky-700 text-2xl font-medium flex items-center justify-center mx-auto">For More Details <FaArrowRight></FaArrowRight></button>
          <p className="text-xl mt-5 font-medium">Contact For Price</p>
          <div className="text-white flex gap-5 py-5 justify-center">
              <button className="flex items-center gap-2 hover:bg-transparent hover:text-sky-700 hover:border-2 hover:border-sky-700 rounded-md py-2.5 px-4 border-2 bg-sky-700 "><MdWifiCalling2></MdWifiCalling2> Call Now</button>
              <button  className="flex items-center gap-2 hover:bg-transparent hover:text-black hover:border-2 hover:border-black rounded-md py-2.5 px-4 border-2 bg-black "><IoChatbubbles></IoChatbubbles> Live Chat </button>
          </div>
        </div>
        <div className="py-5 px-10 shadow-xl border-b-2 text-center border-b-sky-500 bg-white">
          <img className="w-[100px] mx-auto shadow p-5 shadow-sky-500 rounded-full"
            src="https://res.cloudinary.com/dqescabbl/image/upload/v1724269186/ecommercewebsite_sno1x0.png"
            alt=""
          />
          <h2 className="text-2xl font-bold mt-3">E-Commerce Website</h2>
          <p className="opacity-90 w-44 mx-auto leading-7"> Product Management Inventory Management Order Management Customer Management Secure Website</p>
          <button className="text-sky-700 text-2xl font-medium flex items-center justify-center mx-auto">For More Details <FaArrowRight></FaArrowRight></button>
          <p className="text-xl mt-5 font-medium">Contact For Price</p>
          <div className="text-white flex gap-5 py-5 justify-center">
              <button className="flex items-center gap-2 hover:bg-transparent hover:text-sky-700 hover:border-2 hover:border-sky-700 rounded-md py-2.5 px-4 border-2 bg-sky-700 "><MdWifiCalling2></MdWifiCalling2> Call Now</button>
              <button  className="flex items-center gap-2 hover:bg-transparent hover:text-black hover:border-2 hover:border-black rounded-md py-2.5 px-4 border-2 bg-black "><IoChatbubbles></IoChatbubbles> Live Chat </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
