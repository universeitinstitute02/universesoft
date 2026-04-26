"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";

const DropdownMenu = ({
  title,
  items,
  active,
  toggle,
  close,
  isMobile = false,
}) => {
  const menuId = isMobile ? `m-${title}` : title;
  const isOpen = active === menuId;

  // --- Mobile View ---
  if (isMobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => toggle(menuId)}
          className={`flex w-full items-center justify-between px-4 py-3 font-medium transition-colors ${
            isOpen ? "text-blue-400" : "text-white/90"
          }`}
        >
          <span className="capitalize">{title}</span>
          <IoChevronDown
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mx-2 overflow-hidden rounded-xl bg-white/5"
            >
              <div className="flex flex-col p-2">
                {items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={close}
                    className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/10"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium">{item.title}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // --- Desktop View ---
  return (
    <div className="relative">
      <button
        onClick={() => toggle(title)}
        className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all ${
          isOpen
            ? "bg-blue-50 text-[#0051bb] dark:bg-blue-900/20 dark:text-blue-400"
            : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
        }`}
      >
        <span className="capitalize">{title}</span>
        <IoChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.95 }}
            className={`absolute left-1/2 top-full z-[100] mt-3 rounded-[20px] border border-gray-100 bg-white p-5 shadow-2xl dark:border-slate-800 dark:bg-slate-900 ${
              title === "services"
                ? "w-[580px] grid grid-cols-2 gap-3"
                : "w-64 flex flex-col gap-1"
            }`}
          >
            {/* Section Label */}
            <p className="col-span-full mb-1 px-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Our {title}
            </p>

            {items.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={close}
                className="group flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-blue-50 dark:hover:bg-slate-800/50"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-50 text-xl transition-transform group-hover:scale-110 dark:bg-slate-800">
                  {item.icon}
                </div>

                <div className="flex flex-col overflow-hidden">
                  <span className="truncate text-sm font-bold text-gray-800 transition-colors group-hover:text-[#0051bb] dark:text-slate-100 dark:group-hover:text-blue-400">
                    {item.title}
                  </span>
                  <span className="truncate text-[11px] text-gray-500 dark:text-slate-400">
                    {item.desc || `Explore our ${item.title}`}
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
