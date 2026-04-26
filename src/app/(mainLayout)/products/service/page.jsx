"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoCheckmark, IoCodeSlash, IoColorPalette, IoCloudUpload, IoTrendingUp } from "react-icons/io5";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ServicesPage() {
  const fade = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const portfolioImages = [
    "https://i.ibb.co.com/nMnFX27G/electro-Bootstrap.webp",
    "https://i.ibb.co.com/8LzZd5Kb/mekog-cover.png",
    "https://i.ibb.co.com/LXkcZ6Rf/1537207366electrothumb.jpg",
    "https://i.ibb.co.com/7tbXrShD/image.png",
    "https://i.ibb.co.com/60g0cPC2/image.png",
  ];

  return (
    <main className="bg-white text-gray-900">
      
      {/* Editorial Hero Section */}
      <section className="py-20 md:py-32 border-b border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={fade} className="flex-1 w-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              World-class digital <br /> engineering.
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              From enterprise software architecture to award-winning UI/UX design. We build scalable, high-performance digital products for modern brands.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition">
                Book a Consultation
              </button>
              <button className="bg-white text-gray-900 border border-gray-300 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition">
                Our Capabilities
              </button>
            </div>
          </motion.div>
          
          <motion.div initial="hidden" animate="visible" variants={fade} transition={{ delay: 0.2 }} className="flex-1 w-full relative">
            <div className="w-full h-[400px] bg-gray-50 border border-gray-200 rounded-xl relative overflow-hidden">
              <Image src={portfolioImages[2]} alt="Service Overview" fill className="object-contain p-8" />
            </div>
            {/* Minimal Decorative Dots */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:8px_8px] -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Services 2x2 Grid */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Core Capabilities</h2>
            <p className="text-lg text-gray-600">End-to-end technical solutions delivered by dedicated experts.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { icon: <IoCodeSlash />, title: "Custom Software Development", desc: "Full-stack web and mobile applications built with React, Next.js, and scalable Node.js backends." },
              { icon: <IoColorPalette />, title: "UI/UX Design", desc: "User-centric design systems, wireframes, and high-fidelity prototypes that drive engagement." },
              { icon: <IoCloudUpload />, title: "Cloud Architecture", desc: "Secure AWS and Vercel deployments, CI/CD pipelines, and database optimization." },
              { icon: <IoTrendingUp />, title: "Growth & SEO", desc: "Technical SEO audits, performance optimization, and scalable marketing technology integrations." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xl border border-blue-100">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Carousel Reel */}
      <section className="py-20 border-b border-gray-100 bg-gray-50/50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-10">
          <h2 className="text-2xl font-bold text-gray-900">Featured Work</h2>
          <p className="text-gray-600 mt-2">A selection of our recent client deliveries</p>
        </div>
        
        <div className="pl-6 md:pl-0 max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.2 },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="w-full pb-12"
          >
            {portfolioImages.concat(portfolioImages).map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[300px] md:h-[400px] bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <Image src={src} alt={`Project ${index + 1}`} fill className="object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Standardized Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Engagement Models</h2>
            <p className="text-lg text-gray-600">Flexible retainers and project-based pricing to suit your needs.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Project Based</h3>
              <p className="text-gray-500 text-sm mb-6">For fixed-scope deliverables.</p>
              <div className="text-4xl font-bold mb-6 text-gray-900">Custom<span className="text-base font-normal text-gray-500">/quote</span></div>
              <button className="w-full bg-white border border-gray-300 text-gray-900 py-2.5 rounded-md font-medium hover:bg-gray-50 transition mb-8">Get an Estimate</button>
              <div className="text-sm font-semibold text-gray-900 mb-4">What's included:</div>
              <ul className="space-y-4 flex-1">
                {["Dedicated Project Manager", "Fixed Timeline", "UI/UX Design Delivery", "QA Testing", "30-Day Post-Launch Support"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm"><IoCheckmark className="text-blue-600 text-lg shrink-0" /> {f}</li>
                ))}
              </ul>
            </div>

            {/* Plan 2 (Highlighted) */}
            <div className="bg-white p-8 border-2 border-blue-600 rounded-xl shadow-md relative flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-bl-lg font-medium">Most Popular</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Monthly Retainer</h3>
              <p className="text-gray-500 text-sm mb-6">Continuous development and support.</p>
              <div className="text-4xl font-bold mb-6 text-gray-900">$2,500<span className="text-base font-normal text-gray-500">/mo</span></div>
              <button className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700 transition mb-8">Discuss Retainer</button>
              <div className="text-sm font-semibold text-gray-900 mb-4">Everything in Project Based, plus:</div>
              <ul className="space-y-4 flex-1">
                {["40 Hours Development Time", "Weekly Strategy Calls", "Priority Bug Fixes", "Continuous SEO Updates", "Cancel Anytime"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm"><IoCheckmark className="text-blue-600 text-lg shrink-0" /> {f}</li>
                ))}
              </ul>
            </div>

            {/* Plan 3 */}
            <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Dedicated Team</h3>
              <p className="text-gray-500 text-sm mb-6">Staff augmentation for enterprises.</p>
              <div className="text-4xl font-bold mb-6 text-gray-900">$8,000<span className="text-base font-normal text-gray-500">/mo</span></div>
              <button className="w-full bg-white border border-gray-300 text-gray-900 py-2.5 rounded-md font-medium hover:bg-gray-50 transition mb-8">Contact Sales</button>
              <div className="text-sm font-semibold text-gray-900 mb-4">Everything in Retainer, plus:</div>
              <ul className="space-y-4 flex-1">
                {["1 Full-Time Lead Developer", "1 Full-Time UI/UX Designer", "Direct Slack Access", "Daily Standups", "Intellectual Property Transfer"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm"><IoCheckmark className="text-blue-600 text-lg shrink-0" /> {f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}