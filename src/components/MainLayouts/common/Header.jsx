"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
];

export const PRODUCTS = [
  {
    title: "ERP Software",
    desc: "Business automation system",
    href: "/products/erp",
  },
  {
    title: "E-commerce",
    desc: "Online store solution",
    href: "/products/ecommerce",
  },
  {
    title: "POS System",
    desc: "Retail management",
    href: "/products/pos",
  },
  {
    title: "LMS",
    desc: "Learning management system",
    href: "/products/lms",
  },
  {
    title: "Service",
    desc: "Professional services",
    href: "/products/service",
  },
  {
    title: "SMS",
    desc: "Messaging solutions",
    href: "/products/sms",
  },
];

export const SERVICES = [
  {
    title: "Web Development",
    desc: "Modern web apps",
    href: "/services/web",
  },
  {
    title: "App Development",
    desc: "Mobile applications",
    href: "/services/app",
  },
  {
    title: "UI/UX Design",
    desc: "User experience design",
    href: "/services/uiux",
  },
];

export const TOUCH_LINKS = [
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/career", label: "Career" },
];

const Header = () => {
  const [active, setActive] = useState(null);

  const toggle = (menu) => {
    setActive(active === menu ? null : menu);
  };

  const close = () => setActive(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-5 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          LOGO
        </Link>

        <nav className="flex items-center gap-2">
          {NAV_LINKS.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="px-3 py-2 rounded-lg text-sm hover:bg-gray-100"
              onClick={close}
            >
              {item.label}
            </Link>
          ))}

          <div className="relative">
            <button
              onClick={() => toggle("products")}
              className="flex items-center gap-1 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg"
            >
              Products
              <IoChevronDown
                className={`transition ${active === "products" ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {active === "products" && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full mt-2 w-64 bg-white shadow-xl rounded-xl p-3"
                >
                  {PRODUCTS.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={close}
                      className="block p-2 rounded-lg hover:bg-gray-100"
                    >
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <button
              onClick={() => toggle("services")}
              className="flex items-center gap-1 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg"
            >
              Services
              <IoChevronDown
                className={`transition ${active === "services" ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {active === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full mt-2 w-64 bg-white shadow-xl rounded-xl p-3"
                >
                  {SERVICES.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={close}
                      className="block p-2 rounded-lg hover:bg-gray-100"
                    >
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <button
              onClick={() => toggle("touch")}
              className="flex items-center gap-1 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg"
            >
              Get in Touch
              <IoChevronDown
                className={`transition ${active === "touch" ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {active === "touch" && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full mt-2 w-48 bg-white shadow-xl rounded-xl p-2"
                >
                  {TOUCH_LINKS.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={close}
                      className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-lg"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;