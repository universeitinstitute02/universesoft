"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import DropdownMenu from "@/components/Services/ServiceMenu/DropdownMenu";

// Configuration Data
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
];

const SERVICES = [
  { title: "App Development", icon: "📱", href: "/services/app" },
  { title: "Web Application", icon: "💻", href: "/services/web" },
  { title: "Software Development", icon: "⚙️", href: "/services/software" },
  { title: "LMS", icon: "🎓", href: "/services/lms" },
  { title: "Digital Marketing", icon: "📢", href: "/services/marketing" },
  { title: "Graphics Design", icon: "🎨", href: "/services/graphics" },
  { title: "UI/UX Design", icon: "✏️", href: "/services/uiux" },
  { title: "POS Solutions", icon: "🛒", href: "/services/pos" },
  { title: "ERP Solutions", icon: "🏢", href: "/services/erp" },
];

const PRODUCTS = [
  { title: "ERP Software", desc: "Business automation", href: "/products/erp" },
  {
    title: "E-commerce",
    desc: "Online store solution",
    href: "/products/ecommerce",
  },
];

const Header = () => {
  const [active, setActive] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth >= 1024 && setIsMobileOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = (menu) => setActive(active === menu ? null : menu);
  const closeAll = () => {
    setActive(null);
    setIsMobileOpen(false);
  };

  const dropdowns = [
    { title: "products", items: PRODUCTS },
    { title: "services", items: SERVICES },
  ];

  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm dark:shadow-slate-800/50 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="z-50 flex items-center" onClick={closeAll}>
          <Image
            src="/nimusoft-logo.svg"
            alt="Nimusoft Logo"
            width={150}
            height={40}
            className="h-8 w-auto object-contain dark:brightness-200 dark:contrast-200"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {dropdowns.map((d) => (
            <DropdownMenu
              key={d.title}
              {...d}
              active={active}
              toggle={toggle}
              close={closeAll}
            />
          ))}

          <Link
            href="/contact-us"
            className="ml-4 px-6 py-2 bg-[#0051bb] dark:bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-500 transition shadow-md shadow-blue-500/20"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 text-slate-700 dark:text-slate-200"
          onClick={() => setIsMobileOpen(true)}
        >
          <IoMenu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAll}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-[#0051bb] dark:bg-slate-950 text-white z-[70] flex flex-col lg:hidden shadow-2xl"
            >
              <div className="p-5 flex justify-between items-center border-b border-white/10 dark:border-slate-800">
                <span className="font-bold tracking-tight uppercase leading-tight">
                  Universe <br />
                  <small className="font-light opacity-70">Soft Tech</small>
                </span>
                <button
                  onClick={closeAll}
                  className="p-1 hover:bg-white/10 rounded-full"
                >
                  <IoClose size={26} />
                </button>
              </div>

              <div className="flex flex-col p-4 gap-1 overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeAll}
                    className="px-4 py-3 rounded-xl font-medium hover:bg-white/10 dark:hover:bg-slate-900 transition"
                  >
                    {link.label}
                  </Link>
                ))}

                {dropdowns.map((d) => (
                  <DropdownMenu
                    key={d.title}
                    {...d}
                    active={active}
                    toggle={toggle}
                    close={closeAll}
                    isMobile
                  />
                ))}
              </div>

              <div className="mt-auto p-6 bg-[#0046a1] dark:bg-slate-900/50">
                <Link
                  href="/demo"
                  onClick={closeAll}
                  className="block w-full bg-[#f97316] text-white text-center py-4 rounded-2xl font-bold shadow-lg active:scale-95 transition"
                >
                  Get a Demo
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
