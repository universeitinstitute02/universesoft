import React from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { MdAccountBalance, MdOutlineDesignServices, MdOutlineShoppingCart, MdSupportAgent } from 'react-icons/md';
import { IoMdListBox } from "react-icons/io";
import { RxArrowBottomRight } from 'react-icons/rx';
import { TfiArrowTopRight } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { FaMoneyBillAlt, FaUserCircle } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const Client = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Helmet>
        <title>Dashboard | Your Client</title>
      </Helmet>
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-4 gap-4 ">
        {/* Card 1 */}
        <Link to="/dashboard/add-client">
          <div className="bg-white rounded-lg shadow-md p-3 border h-32">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold">Add Client</h2>
              </div>
              <span className="p-3 bg-text_blue rounded-full">
                <FaUserCircle className="text-white text-2xl" />
              </span>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/dashboard/client-list">
          <div className="bg-white rounded-lg shadow-md p-3 border h-32">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold">Client List</h2>
              </div>
              <span className="p-3 bg-text_blue rounded-full">
                <IoMdListBox className="text-white text-2xl"/>
              </span>
            </div>
          </div>
        </Link>

        {/* Card 3 */}
        <Link to="/dashboard/due-client-list">
          <div className="bg-white rounded-lg shadow-md p-3 border h-32">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold">Due Client List</h2>
              </div>
              <span className="p-3 bg-text_blue rounded-full">
                <FaMoneyBillAlt className="text-white text-2xl" />
              </span>
            </div>
          </div>
        </Link>

        {/* Card 4 */}
        <Link to="/dashboard/client-support">
          <div className="bg-white rounded-lg shadow-md p-3 border h-32">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl  font-bold">Client Support</h2>
              </div>
              <span className="p-3 bg-text_blue rounded-full">
                <MdSupportAgent className="text-white text-2xl" />
              </span>
            </div>
          </div>
        </Link>





      </div>
    </div>
  );
};

export default Client;