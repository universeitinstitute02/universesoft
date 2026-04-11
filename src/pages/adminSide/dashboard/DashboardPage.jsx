import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDesignServices, MdOutlineShoppingCart } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const DashboardPage = () => {
  const axiosPublic = useAxiosPublic();
  const adminToken = localStorage.getItem("admin_token");

  const config = useMemo(() => ({
    headers: {
      Authorization: adminToken,
    },
  }), [adminToken]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['dashboardData'],
    queryFn: async () => {
      const [products, services, representatives, allUsers, teamMembers] = await Promise.all([
        axiosPublic.get('/get-products'),
        axiosPublic.get('/get-all-service'),
        axiosPublic.get('/representative', config),
        axiosPublic.get('/all-users', config),
        axiosPublic.get('/member'),
      ]);
      return {
        products: products.data.data,
        services: services.data.data,
        representatives: representatives.data.data,
        allUsers: allUsers.data.data,
        teamMembers: teamMembers.data.data,
      };
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  const { products, services, representatives, allUsers, teamMembers } = data;

  const cardData = [
    {
      title: "Total Products",
      count: products.length,
      link: "/dashboard/manage-product",
      icon: <MdOutlineShoppingCart className="text-white text-2xl" />,
    },
    {
      title: "Total Services",
      count: services.length,
      link: "/dashboard/manage-service",
      icon: <MdOutlineDesignServices className="text-white text-2xl" />,
    },
    {
      title: "Total Representatives",
      count: representatives.length,
      link: "/dashboard/manage-representative",
      icon: <FaUsers className="text-white text-2xl" />,
    },
    {
      title: "Total Users",
      count: allUsers.length,
      link: "/dashboard/manage-users",
      icon: <FaUsers className="text-white text-2xl" />,
    },
    {
      title: "Total Team Members",
      count: teamMembers.length,
      link: "/dashboard/manage-team",
      icon: <FaUsers className="text-white text-2xl" />,
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-gray-700 text-2xl my-3">Universe Soft Tech's Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <Link to={card.link} key={index}>
            <div className="bg-white rounded-lg shadow-md p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg text-gray-700">{card.title}</h2>
                  <h1 className="text-2xl text-gray-900">{card.count}</h1>
                </div>
                <span className="p-3 bg-text_blue rounded-full">{card.icon}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
