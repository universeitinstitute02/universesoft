import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";

import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

import { Link, Outlet } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { RiHandCoinFill } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import { VscSettingsGear } from "react-icons/vsc";
import { FaPlusCircle } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import "./DeshBoard.css";

const DeshBoard = () => {
  const [showUser, setShowUser] = useState(false);

  return (
    <div className="">
      <div className="mt-16 py-3  lg:h-[100vh] bg-[#F5F7FA]">
        <div className="flex max-w-screen-2xl mx-auto gap-3 lg:gap-5">
          <div className="leftSide w-[22%] h-[100vh]  shadow-xl">
            <div className="px-5 py-5  space-y-6 text-start">
              <Link
                to={`/dashboard`}
                className="flex px-8 items-center gap-5 hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary "
              >
                <div>
                  <AiFillHome className=" text-3xl "></AiFillHome>
                </div>
                <p className="text-xl ml-5  ">Deshboard</p>
              </Link>

              <div
                onClick={() => setShowUser(!showUser)}
                className="flex px-8 items-center gap-5 hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary "
              >
                <div>
                  <FaUserEdit className=" text-4xl "></FaUserEdit>
                </div>
                <p className="text-xl ml-5 flex items-center gap-10 ">
                  Users{" "}
                  {showUser ? (
                    <FaAngleUp className="inline-block "></FaAngleUp>
                  ) : (
                    <FaAngleDown></FaAngleDown>
                  )}{" "}
                </p>
              </div>

              <div
                className={`${
                  showUser ? "space-y-6 bg-gray-200 rounded-lg py-2" : "hidden"
                }`}
              >
                <Link
                  to={`/dashboard/add-users`}
                  className="flex px-8 items-center gap-5 hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary "
                >
                  <div>
                    <FaPlusCircle className=" text-3xl "></FaPlusCircle>
                  </div>
                  <p className="text-xl ml-5  ">Add Users</p>
                </Link>

                <Link
                  to={`/dashboard/manage-user`}
                  className="flex px-8 items-center gap-5 hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary "
                >
                  <div>
                    <FaPlusCircle className=" text-3xl "></FaPlusCircle>
                  </div>
                  <p className="text-xl ml-5  ">Manage User</p>
                </Link>
              </div>

              <Link
                to={`/transection`}
                className="flex  px-8 gap-5   items-center hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary"
              >
                <div>
                  <FaFileInvoiceDollar className=" text-3xl "></FaFileInvoiceDollar>
                </div>
                <p className="text-xl ml-5">Transaction</p>
              </Link>

              <Link
                to={`/account`}
                className="flex  px-8 text-start gap-5 items-center hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary"
              >
                <div>
                  <IoPerson className=" text-3xl "></IoPerson>
                </div>
                <p className="text-xl ml-5">Account</p>
              </Link>

              <Link
                to={`/invesment`}
                className="flex  px-8 text-start gap-5 items-center hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary"
              >
                <div>
                  <FaChartLine className=" text-3xl "></FaChartLine>
                </div>
                <p className="text-xl ml-5">Investment</p>
              </Link>

              <Link
                to={`/credit-card`}
                className="flex  px-8 text-start gap-5   items-center hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary"
              >
                <div>
                  <FaRegCreditCard className=" text-3xl "></FaRegCreditCard>
                </div>
                <p className="text-xl ml-5">Credit Cards</p>
              </Link>
              <Link
                to={`/loans`}
                className="flex  px-8 text-start gap-5 items-center hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary"
              >
                <div>
                  <RiHandCoinFill className=" text-3xl "></RiHandCoinFill>
                </div>
                <p className="text-xl  ml-5 ">Loans</p>
              </Link>
              <Link
                to={`/service`}
                className="flex  px-8 text-start gap-5 items-center  hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary"
              >
                <div>
                  <MdOutlineDesignServices className=" text-3xl "></MdOutlineDesignServices>
                </div>
                <p className="text-xl  ml-5 ">Service</p>
              </Link>
              <Link
                to={`/priviledge`}
                className="flex  px-8 text-start gap-5 items-center hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary"
              >
                <div>
                  <GiBoxingGloveSurprise className=" text-3xl "></GiBoxingGloveSurprise>
                </div>
                <p className="text-xl  ml-5 ">My Privileges</p>
              </Link>
              <Link
                to={`/setting`}
                className="flex  px-8 text-start gap-5 items-center hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary"
              >
                <div>
                  <VscSettingsGear className=" text-3xl "></VscSettingsGear>
                </div>
                <p className="text-xl  ml-5 ">Setting</p>
              </Link>
            </div>
          </div>
          <div className="px-5">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeshBoard;
