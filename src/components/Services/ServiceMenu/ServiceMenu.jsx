"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Cpu,
  GraduationCap,
  Megaphone,
  Palette,
  Layout,
  ShoppingCart,
  Database,
} from "lucide-react";

const services = [
  {
    title: "App Development",
    description: "At Soft Tech, we spe...",
    icon: <Smartphone className="text-green-500" size={24} />,
    bgColor: "bg-green-50",
  },
  {
    title: "Web Application",
    description: "At Soft Tech, we spe...",
    icon: <Globe className="text-pink-500" size={24} />,
    bgColor: "bg-pink-50",
  },
  {
    title: "Software Development",
    description: "At Soft Tech, we spe...",
    icon: <Cpu className="text-orange-500" size={24} />,
    bgColor: "bg-orange-50",
  },
  {
    title: "LMS",
    description: "Soft Tech's Learning...",
    icon: <GraduationCap className="text-purple-500" size={24} />,
    bgColor: "bg-purple-50",
  },
  {
    title: "Digital Marketing",
    description: "Soft Tech's compreh...",
    icon: <Megaphone className="text-blue-500" size={24} />,
    bgColor: "bg-blue-50",
  },
  {
    title: "Graphics Design",
    description: "Soft Tech offers cre...",
    icon: <Palette className="text-yellow-500" size={24} />,
    bgColor: "bg-yellow-50",
  },
  {
    title: "UI/UX Design",
    description: "At Soft Tech, we spe...",
    icon: <Layout className="text-cyan-500" size={24} />,
    bgColor: "bg-cyan-50",
  },
  {
    title: "POS Solutions",
    description: "Soft Tech offers inno...",
    icon: <ShoppingCart className="text-indigo-500" size={24} />,
    bgColor: "bg-indigo-50",
  },
  {
    title: "ERP Solutions",
    description: "Soft Tech delivers ro...",
    icon: <Database className="text-blue-600" size={24} />,
    bgColor: "bg-blue-50",
  },
];

const ServiceMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="
        /* Base: Mobile - full width fixed position */
        fixed inset-x-4 top-20 
        /* LG Device: Absolute centered with optimized width */
        lg:absolute lg:inset-auto lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:mt-4 
        lg:w-[750px] 
        bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 lg:p-8 z-50
      "
    >
      {/* Header Section */}
      <div className="mb-6">
        <h3 className="text-[11px] lg:text-[12px] font-bold text-gray-400 uppercase tracking-widest text-center lg:text-left">
          Our Services
        </h3>
      </div>

      {/* Grid Section - Responsive Column Logic */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 lg:gap-x-8 lg:gap-y-6 max-h-[60vh] lg:max-h-none overflow-y-auto lg:overflow-visible">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex items-start gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-all duration-300"
          >
            {/* Icon Wrapper */}
            <div
              className={`flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 ${service.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
            >
              {/* Responsive Icon sizing */}
              <div className="scale-90 lg:scale-100">{service.icon}</div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col min-w-0">
              <h4 className="text-[14px] lg:text-[15px] font-semibold text-gray-800 group-hover:text-blue-600 transition-colors truncate lg:whitespace-normal">
                {service.title}
              </h4>
              <p className="text-[12px] lg:text-[13px] text-gray-500 line-clamp-1 mt-0.5">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceMenu;
