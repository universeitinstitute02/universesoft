import React, { useState, useContext } from "react";
import { IoIosAddCircle, IoMdLogOut } from "react-icons/io";
import { MdAssessment, MdMenuOpen, MdModelTraining, MdPayments, MdRoomPreferences } from "react-icons/md";
import { IoCloseCircleOutline, IoPersonAdd, IoVideocam } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiFillFileImage, AiFillProduct, AiOutlineProduct } from "react-icons/ai";
import { FaAngleDown, FaAngleUp, FaBloggerB, FaBriefcase, FaProductHunt, FaServicestack, FaUserAstronaut, FaUserCircle, FaUsers } from "react-icons/fa";
import { AuthContext } from "../../authProvider/AuthProvider";

import Swal from "sweetalert2";
import { RiLogoutCircleFill, RiMoneyDollarCircleLine, RiTeamLine } from "react-icons/ri";
import { SlEnvolopeLetter } from "react-icons/sl";
import { SiAirplayvideo, SiGoogletagmanager, SiNginxproxymanager, SiPolymerproject } from "react-icons/si";
import { FaBlogger, FaMessage, FaUserGroup } from "react-icons/fa6";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { BsClipboard2DataFill, BsInfoCircleFill } from "react-icons/bs";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from '@tanstack/react-query';
import { TiUserAdd } from "react-icons/ti";
import { CiMoneyCheck1 } from "react-icons/ci";
import { PiVideoBold } from "react-icons/pi";

const serviceIcon = "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1726402300/Universe%20Soft%20Tech/Dashboard/x155sspatxgeqkwi123r.png";
const careerIcon = "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1726403537/Universe%20Soft%20Tech/Dashboard/wnjexwdigwbe6psfgbkz.png";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const axiosPublic = useAxiosPublic();
  const getToken = localStorage.getItem("representativeToken");
  const adminToken = localStorage.getItem("admin_token");
  const config = {
    headers: {
      Authorization: getToken,
    },
  };
  const role = localStorage.getItem("user");
  console.log(role);
  const adminConfig = {
    headers: {
      Authorization: adminToken,
    },
  };

  const navigate = useNavigate();



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      setActiveDropdown(null); // Close all dropdowns when sidebar shrinks
    }
  };

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };


  const { data: repData = {}, refetch, isError, isLoading } = useQuery({
    queryKey: ['repData'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/representative/profile`, config);
      console.log(res.data.data)
      return res.data.data;
    }
  });

  const handleLogoutRepresentative = () => {
    localStorage.clear("user");
    localStorage.clear("admin_token");
    localStorage.clear("user");
    localStorage.clear("representativeToken");
    navigate("/login");
  };

  const { data: adminData = {}, } = useQuery({
    queryKey: ['adminData'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/getAdminProfile`, config);
      console.log(res.data.data)
      return res.data.data;
    }
  });


  const handleLogout = () => {
    localStorage.clear("user");
    localStorage.clear("admin_token");
    localStorage.clear("user");
    localStorage.clear("representativeToken");
    navigate("/login");
  };

  return (
    <>
      {
        role === "admin" ?
          <>
            {/* //admin */}
            <div
              className={`bg-primary border-red-700 text-gray-200 transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-12"
                }`}
            >
              <div className="flex justify-between items-center p-4">
                <div className={`text-xl font-bold ${!isSidebarOpen && "hidden"}`}>
                  <Link to="/">
                    <div>
                      <div className="avatar">
                        <div className="w-12  border-white border-2 rounded-full">
                          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>
                  Admin Pannel

                </div>
                <button onClick={toggleSidebar} className="text-white focus:outline-none">
                  {isSidebarOpen ? (
                    <IoCloseCircleOutline className="text-4xl" />
                  ) : (
                    <MdMenuOpen size={20} />
                  )}
                </button>
              </div>

              <nav className="" >
                <ul className="text-[12px]">

                  <li>
                    <Link to={'/dashboard/admin-dashboard'}>
                      <label

                        className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                      >
                        <MdAssessment size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Dashboard</span>

                      </label>
                    </Link>

                  </li>


                  {/* Product */}
                  <li>
                    <label
                      onClick={() => handleDropdownToggle("product")}
                      className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                    >
                      <AiOutlineProduct size={20} />
                      <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Products</span>
                      {isSidebarOpen && (
                        <span className="ml-auto">
                          {activeDropdown === "product" ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                      )}
                    </label>
                    <ul className={`${activeDropdown === "product" ? "block" : "hidden"} ml-8  `}>
                      <li>

                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/add-product"
                          className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                        >
                          Add Product
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/manage-product"
                          className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                        >
                          Manage Product
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* category */}
                  <li>
                    <label
                      onClick={() => handleDropdownToggle("category")}
                      className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                    >
                      <SiPolymerproject size={20} />
                      <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Category</span>
                      {isSidebarOpen && (
                        <span className="ml-auto">
                          {activeDropdown === "category" ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                      )}
                    </label>
                    <ul className={`${activeDropdown === "category" ? "block" : "hidden"} ml-8  `}>
                      <li>
                        <NavLink
                          to="/dashboard/create/category"
                          className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                        >
                          Add Category
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/manage-category"
                          className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                        >
                          Manage Category
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* Portfolio */}
                  <li>
                    <label
                      onClick={() => handleDropdownToggle("portfolio")}
                      className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                    >
                      <SiPolymerproject size={20} />
                      <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Portfolio projects</span>
                      {isSidebarOpen && (
                        <span className="ml-auto">
                          {activeDropdown === "portfolio" ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                      )}
                    </label>
                    <ul className={`${activeDropdown === "portfolio" ? "block" : "hidden"} ml-8  `}>
                      <li>
                        <NavLink
                          to="/dashboard/create-portfolio"
                          className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                        >
                          Add Portfolio
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/manage-portfolio"
                          className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                        >
                          Manage Portfolio
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* Services */}
                  <li>
                    <label
                      onClick={() => handleDropdownToggle("service")}
                      className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                    >
                      <FaServicestack size={20} />
                      <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Services</span>
                      {isSidebarOpen && (
                        <span className="ml-auto">
                          {activeDropdown === "service" ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                      )}
                    </label>
                    <ul className={`${activeDropdown === "service" ? "block" : "hidden"} ml-8  `}>
                      <li>
                        <NavLink
                          to="/dashboard/add-service"
                          className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                        >
                          Add Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/manage-service"
                          className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                        >
                          Manage Service
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* Career */}
                  <li>
                    <label
                      onClick={() => handleDropdownToggle("career")}
                      className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                    >
                      <FaBriefcase size={20} />
                      <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Career</span>
                      {isSidebarOpen && (
                        <span className="ml-auto">
                          {activeDropdown === "career" ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                      )}
                    </label>
                    <ul className={`${activeDropdown === "career" ? "block" : "hidden"} ml-8  `}>
                      <li>
                        <NavLink
                          to="/dashboard/add-career"
                          className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                        >
                          Add Career
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/manage-career"
                          className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                        >
                          Manage Career
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* Blog */}
                  <li>
                    <label
                      onClick={() => handleDropdownToggle("blog")}
                      className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                    >
                      <FaBloggerB size={20} />
                      <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Blog</span>
                      {isSidebarOpen && (
                        <span className="ml-auto">
                          {activeDropdown === "blog" ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                      )}
                    </label>
                    <ul className={`${activeDropdown === "blog" ? "block" : "hidden"} ml-8  `}>
                      <li>
                        <NavLink
                          to="/dashboard/add-blog"
                          className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                        >
                          Add Blog
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/manage-blog"
                          className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                        >
                          Manage Blog
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* Application */}
                  <li>
                    <label
                      onClick={() => handleDropdownToggle("application")}
                      className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                    >

                      <AiFillFileImage size={20} />
                      <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Application</span>
                      {isSidebarOpen && (
                        <span className="ml-auto">
                          {activeDropdown === "application" ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                      )}
                    </label>
                    <ul className={`${activeDropdown === "application" ? "block" : "hidden"} ml-8  `}>
                      <li>
                        <NavLink
                          to="/dashboard/application"
                          className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                        >
                          Manage Applications
                        </NavLink>
                      </li>
                    </ul>
                  </li>





                  {/* Team Management */}


                  <li>
                    <label
                      onClick={() => handleDropdownToggle("team")}
                      className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                    >
                      <FaUserGroup size={20} />
                      <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Team</span>
                      {isSidebarOpen && (
                        <span className="ml-auto">
                          {activeDropdown === "team" ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                      )}
                    </label>
                    <ul className={`${activeDropdown === "team" ? "block" : "hidden"} ml-8  `}>
                      <li>
                        <NavLink
                          to="/dashboard/add-team"
                          className="p-2 flex items-center gap-2 transition duration-200 hover:bg-white hover:text-black"
                        >
                          <IoPersonAdd /> Add Team Member
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/manage-team"
                          className="p-2 flex items-center gap-2 transition duration-200 hover:bg-white hover:text-black"
                        >
                          <SiGoogletagmanager /> Manage Team Member
                        </NavLink>
                      </li>
                    </ul>
                  </li>


                  {/* manage user  */}
                  <li>
                    <label
                      onClick={() => handleDropdownToggle("user-list")}
                      className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                    >
                      <FaUsers size={20} />
                      <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>User List</span>
                      {isSidebarOpen && (
                        <span className="ml-auto">
                          {activeDropdown === "user-list" ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                      )}
                    </label>
                    <ul className={`${activeDropdown === "user-list" ? "block" : "hidden"} ml-8  `}>
                      <li>
                        <NavLink
                          to="/dashboard/add-admin"
                          className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                        >
                          Add User
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/manage-user"
                          className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                        >
                          Manage User
                        </NavLink>
                      </li>
                    </ul>
                  </li>


                  {/* manage representative  */}
                  <li>
                    <label
                      onClick={() => handleDropdownToggle("manage-representative")}
                      className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                    >
                      <FaUserAstronaut size={20} />
                      <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Representative List</span>
                      {isSidebarOpen && (
                        <span className="ml-auto">
                          {activeDropdown === "manage-representative" ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                      )}
                    </label>
                    <ul className={`${activeDropdown === "manage-representative" ? "block" : "hidden"} ml-8  `}>
                      <li>
                        <NavLink
                          to="/dashboard/add-representative"
                          className="p-2  transition duration-200 hover:bg-white hover:text-black flex items-center gap-3"
                        >
                          <TiUserAdd size={20} />

                          <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Add Representative</span>
                        </NavLink>
                      </li>
                      <li>
                        <Link to="/dashboard/manage-representative" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                          <BiLogoMicrosoftTeams size={20} />
                          <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Manage Representative</span>
                        </Link>
                      </li>
                    </ul>
                  </li>


                  {/* manage video  */}
                  <li>
                    <label
                      onClick={() => handleDropdownToggle("manage-video")}
                      className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                    >
                      <IoVideocam size={20} />
                      <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Videos</span>
                      {isSidebarOpen && (
                        <span className="ml-auto">
                          {activeDropdown === "manage-representative" ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                      )}
                    </label>
                    <ul className={`${activeDropdown === "manage-video" ? "block" : "hidden"} ml-8  `}>
                      <li>
                        <NavLink
                          to="/dashboard/add-product-video"
                          className="p-2  transition duration-200 hover:bg-white hover:text-black flex items-center gap-3"
                        >
                          <TiUserAdd size={20} />

                          <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Add Product Video</span>
                        </NavLink>
                      </li>
                      <li>
                        <Link to="/dashboard/add-session-video" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                          <BiLogoMicrosoftTeams size={20} />
                          <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Add Session Video </span>
                        </Link>
                      </li>
                    </ul>
                  </li>


                  {/* admin client manage  */}
                  <li>
                    <label
                      onClick={() => handleDropdownToggle("manage-admin-client")}
                      className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                    >
                      <FaUserCircle size={20} />
                      <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Client List</span>
                      {isSidebarOpen && (
                        <span className="ml-auto">
                          {activeDropdown === "manage-admin-client" ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                      )}
                    </label>
                    <ul className={`${activeDropdown === "manage-admin-client" ? "block" : "hidden"} ml-8  `}>
                      <li>
                        <NavLink
                          to="/dashboard/add-client-admin"
                          className="p-2  transition duration-200 hover:bg-white hover:text-black flex items-center gap-3"
                        >
                          <TiUserAdd size={20} />

                          <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Add Client</span>
                        </NavLink>
                      </li>
                      <li>
                        <Link to="/dashboard/manage-client" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                          <BiLogoMicrosoftTeams size={20} />
                          <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Manage Client</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link to={'/dashboard/show-supporting-message'}>
                      <label

                        className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                      >
                        <MdAssessment size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Support Messages</span>

                      </label>
                    </Link>

                  </li>

                  <li>
                    <Link to="/dashboard/all-product-reqeust" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                      <FaProductHunt size={20} />
                      <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>All Product Requests</span>
                    </Link>
                  </li>

                  {/* product category manage  */}
                  <li>
                    <label
                      onClick={() => handleDropdownToggle("prodeuct-category-manage")}
                      className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                    >
                      <AiFillProduct size={20} />
                      <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Product Category List</span>
                      {isSidebarOpen && (
                        <span className="ml-auto">
                          {activeDropdown === "prodeuct-category-manage" ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                      )}
                    </label>
                    <ul className={`${activeDropdown === "prodeuct-category-manage" ? "block" : "hidden"} ml-8  `}>
                      <li>
                        <NavLink
                          to="/dashboard/product-category-add"
                          className="p-2  transition duration-200 hover:bg-white hover:text-black flex items-center gap-3"
                        >
                          <TiUserAdd size={20} />

                          <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Add Product Category</span>
                        </NavLink>
                      </li>
                      <li>
                        <Link to="/dashboard/manage-product-category" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                          <BiLogoMicrosoftTeams size={20} />
                          <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Manage Product</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  
                  


                  <li>
                    <Link to="/dashboard/transaction-table-admin" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                      <FaProductHunt size={20} />
                      <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>All Payments</span>
                    </Link>
                  </li>

                  
                  {/* Logout */}
                  <li onClick={handleLogout}>
                    <Link to="#" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                      <RiLogoutCircleFill size={20} />
                      <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Logout</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </>
          :
          role === "representative" ?
            <>
              {/* representative */}
              <div
                className={`bg-primary  text-gray-200 transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-12"
                  }`}
              >
                <div className="flex justify-between items-center p-4">
                  <div className={`text-xl font-bold ${!isSidebarOpen && "hidden"}`}>
                    <Link to="/">
                      <div>
                        <div className="avatar">
                          <div className="w-12  border-white border-2 rounded-full">
                            <img src={repData?.image} />
                          </div>
                        </div>
                        <p className="text-[16px]">ID: {repData?.representative_id} </p>
                      </div>
                    </Link>
                    <div className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Representative Pannel</div>
                  </div>
                  <button onClick={toggleSidebar} className="text-white focus:outline-none">
                    {isSidebarOpen ? (
                      <IoCloseCircleOutline className="text-4xl" />
                    ) : (
                      <MdMenuOpen size={20} />
                    )}
                  </button>
                </div>

                <nav>
                  <ul className="text-[12px]">

                    <li>
                      <Link to={'/dashboard'}>
                        <label

                          className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                        >
                          <MdAssessment size={20} />
                          <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Dashboard</span>

                        </label>
                      </Link>

                    </li>

                    {/* Rep information */}
                    <li>
                      <Link to="/dashboard/info" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                        <BsInfoCircleFill size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Information</span>
                      </Link>
                    </li>

                    {/* Rep client list */}
                    <li>
                      <Link to="/dashboard/client" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                        <BsClipboard2DataFill size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Your Client List</span>
                      </Link>
                    </li>



                    {/* Rep payment list */}
                    <li>
                      <Link to="/dashboard/payment" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                        <MdPayments size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Payment History</span>
                      </Link>
                    </li>


                    {/* Rep Product Video */}
                    <li>
                      <Link to="/dashboard/show-product-video" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                        <IoVideocam size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Product Video</span>
                      </Link>
                    </li>

                    {/* Rep Training Session */}
                    <li>
                      <Link to="/dashboard/training" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                        <MdModelTraining size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Training Session</span>
                      </Link>
                    </li>


                    <li>
                      <Link to="/dashboard/add-product-reqeust" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                        <FaProductHunt size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Product Requests</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/dashboard/my-product-request" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                        <FaProductHunt size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>My Requests</span>
                      </Link>
                    </li>


                    {/* Rep refers  */}
                    <li>
                      <Link to="/dashboard/refers" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600 active:bg-blue-600">
                        <MdRoomPreferences size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Refers</span>
                      </Link>
                    </li>




                    {/* Logout */}
                    <li onClick={handleLogoutRepresentative}>
                      <Link to="#" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                        <RiLogoutCircleFill size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Logout</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>


            </>

            :
            role === "client" ?
              <>
                {/* client */}
                <div
                  className={`bg-primary  text-gray-200 transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-12"
                    }`}
                >
                  <div className="flex justify-between items-center p-4">
                    <div className={`text-xl font-bold ${!isSidebarOpen && "hidden"}`}>
                      <Link to="/">
                        <div>
                          <div className="avatar">
                            <div className="w-12  border-white border-2 rounded-full">
                              <img src={repData?.image} />
                            </div>
                          </div>
                          <p className="text-[16px]">ID: {repData?.representative_id} </p>
                        </div>
                      </Link>
                      <div className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Client Pannel</div>
                    </div>
                    <button onClick={toggleSidebar} className="text-white focus:outline-none">
                      {isSidebarOpen ? (
                        <IoCloseCircleOutline className="text-4xl" />
                      ) : (
                        <MdMenuOpen size={20} />
                      )}
                    </button>
                  </div>

                  <nav>
                    <ul className="text-[12px]">

                      <li>
                        <Link to={'/dashboard'}>
                          <label

                            className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                          >
                            <MdAssessment size={20} />
                            <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}> Client Dashboard</span>

                          </label>
                        </Link>

                      </li>

                      {/* Product list  */}
                      <li>
                        <Link to={'/dashboard/client-product-list'}>
                          <label

                            className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                          >
                            <AiFillProduct size={20} />
                            <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Product List</span>

                          </label>
                        </Link>

                      </li>


                      {/* Ticket */}
                      {/* <li>
                        <label
                          onClick={() => handleDropdownToggle("client")}
                          className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                        >
                          <CiMoneyCheck1 size={20} />
                          <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Tickets</span>
                          {isSidebarOpen && (
                            <span className="ml-auto">
                              {activeDropdown === "client" ? <FaAngleUp /> : <FaAngleDown />}
                            </span>
                          )}
                        </label>
                        <ul className={`${activeDropdown === "client" ? "block" : "hidden"} ml-8  `}>
                          <li>

                          </li>
                          <li>
                            <NavLink
                              to="/dashboard/add-product"
                              className="p-2 flex items-center gap-2 transition duration-200 hover:bg-white hover:text-black"
                            >
                              <IoIosAddCircle size={20} /> Raise Ticket
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/dashboard/manage-product"
                              className="p-2 flex items-center gap-2 transition duration-200 hover:bg-white hover:text-black"
                            >
                              <SiNginxproxymanager size={20} />Manage Ticket
                            </NavLink>
                          </li>
                        </ul>
                      </li> */}

                      {/* Video */}
                      <li>
                        <label
                          onClick={() => handleDropdownToggle("video")}
                          className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                        >
                          <AiOutlineProduct size={20} />
                          <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Video</span>
                          {isSidebarOpen && (
                            <span className="ml-auto">
                              {activeDropdown === "video" ? <FaAngleUp /> : <FaAngleDown />}
                            </span>
                          )}
                        </label>
                        <ul className={`${activeDropdown === "video" ? "block" : "hidden"} ml-8  `}>
                          {/* Rep Product Video */}
                          <li>
                            <Link to="/dashboard/show-product-video" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                              <IoVideocam size={20} />
                              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Product Video</span>
                            </Link>
                          </li>

                          {/* Rep Training Session */}
                          <li>
                            <Link to="/dashboard/training" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                              <MdModelTraining size={20} />
                              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Training Session</span>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      {/* Transaction list  */}
                      <li>
                        <Link to={'/dashboard/client-transaction'}>
                          <label

                            className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
                          >
                            <RiMoneyDollarCircleLine size={20} />
                            <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Transaction List</span>

                          </label>
                        </Link>

                      </li>

                      <li>
                        <NavLink
                          to="/dashboard/send-message"
                          className="p-2  transition duration-200 hover:bg-white hover:text-black flex items-center gap-3"
                        >
                          <FaMessage size={20} />

                          <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Support Message</span>
                        </NavLink>
                      </li>



                      {/* Logout */}
                      <li onClick={handleLogoutRepresentative}>
                        <Link to="#" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
                          <RiLogoutCircleFill size={20} />
                          <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Logout</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </>
              :
              <></>
      }
    </>
  );
};

export default Sidebar;
