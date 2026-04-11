import React, { useMemo } from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { MdAccountBalance, MdOutlineDesignServices, MdOutlineShoppingCart } from 'react-icons/md';
import { RxArrowBottomRight } from 'react-icons/rx';
import { TfiArrowTopRight } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Info = () => {
  window.scrollTo(0, 0);

  const adminToken = localStorage.getItem("admin_token");
  const axiosPublic = useAxiosPublic();

  const config = useMemo(() => ({
    headers: {
      Authorization: adminToken,
    },
  }), [adminToken]);

  const { data: repData = {}, refetch, isError, isLoading } = useQuery({
    queryKey: ['repData'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/representative/profile`, config);
      console.log(res.data.data)
      return res.data.data;
    }
  });


  return (
    <div>
      <Helmet>
        <title>Dashboard | Information</title>
      </Helmet>
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        {/* Card 1 */}
        <Link to={`/dashboard/rep-profile/${repData._id}`}>
          <div className="bg-white rounded-lg shadow-md p-3 border h-32">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold">Personal Information</h2>
              </div>
              <span className="p-3 bg-text_blue rounded-full">
                <FaUserCircle className="text-white text-2xl" />
              </span>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/dashboard/account-rep">
          <div className="bg-white rounded-lg shadow-md p-3 border h-32">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold">Accounts Information</h2>
              </div>
              <span className="p-3 bg-text_blue rounded-full">
                <MdAccountBalance className="text-white text-2xl" />
              </span>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Info;