"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = ({ sliceProducts = [], allservices = [] }) => {
  return (
    <footer className="bg-[#004cad] text-white">
      <div className="max-w-screen-xl mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1️⃣ Company */}
        <div>
          <Image
            src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1734948570/UniverseSoftTech/Image/qzaf0xtkw1kkgplltxqz.png"
            alt="logo"
            width={180}
            height={60}
          />

          <p className="mt-4 text-sm text-gray-300">
            We provide modern software solutions for businesses with high
            performance and scalability.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-4">
            <Link href="#">
              <FaFacebookF className="hover:text-orange-400" />
            </Link>
            <Link href="#">
              <FaTwitter className="hover:text-orange-400" />
            </Link>
            <Link href="#">
              <FaInstagram className="hover:text-orange-400" />
            </Link>
            <Link href="#">
              <FaLinkedinIn className="hover:text-orange-400" />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Products</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/products/erp" className="hover:text-orange-400">
                ERP Software
              </Link>
            </li>
            <li>
              <Link
                href="/products/ecommerce"
                className="hover:text-orange-400"
              >
                E-commerce Solution
              </Link>
            </li>
            <li>
              <Link href="/products/pos" className="hover:text-orange-400">
                POS System
              </Link>
            </li>
            <li>
              <Link href="/products/crm" className="hover:text-orange-400">
                CRM Software
              </Link>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link
                href="/services/web-development"
                className="hover:text-orange-400"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                href="/services/app-development"
                className="hover:text-orange-400"
              >
                App Development
              </Link>
            </li>
            <li>
              <Link href="/services/ui-ux" className="hover:text-orange-400">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link
                href="/services/digital-marketing"
                className="hover:text-orange-400"
              >
                Digital Marketing
              </Link>
            </li>
          </ul>
        </div>

        {/* 4️⃣ Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>

          <div className="space-y-3 text-gray-300 text-sm">
            <p className="flex items-start gap-2">
              <IoLocationSharp className="mt-1" />
              House #7, Block F, Bonoshree, Dhaka
            </p>

            <p className="flex items-center gap-2">
              <FaPhoneAlt />
              +8801886061401
            </p>

            <p className="flex items-center gap-2">
              <FaPhoneAlt />
              +8801821779282
            </p>

            <p className="flex items-center gap-2">
              <MdEmail />
              info@softtech.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2026 Universe Soft Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
