import React from "react";
import Sidebar from "../components/adminSide/Sidebar";
import AdminNavbar from "../components/adminSide/AdminNavbar";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-primary">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      {/* Sidebar */}
      <div className="bg-primary  min-h-screen">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Top Navbar */}
        <AdminNavbar />
        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-auto m-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
