"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoCheckmark, IoLibrary, IoPeople, IoRibbon } from "react-icons/io5";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function LMSPage() {
    const fade = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    const showcaseImages = [
        "https://i.ibb.co.com/7tbXrShD/image.png",
        "https://i.ibb.co.com/602jtFkH/image.png",
        "https://i.ibb.co.com/60g0cPC2/image.png"
    ];

    return (
        <main className="bg-white text-gray-900">
            {/* Hero Section */}
            <section className="py-20 md:py-24 border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div initial="hidden" animate="visible" variants={fade}>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            Modern Learning <br /> Management.
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Train your employees, onboard customers, and monetize your educational content with a scalable, intuitive learning platform.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
                                Start Free Trial
                            </button>
                            <button className="bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition">
                                View Demo
                            </button>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" animate="visible" variants={fade} transition={{ delay: 0.2 }} className="w-full h-[400px] bg-gray-50 border border-gray-200 rounded-xl relative overflow-hidden">
                        <Image src={"https://i.ibb.co.com/rgMbVKG/image.png"} alt="LMS Dashboard" fill className="object-contain p-4" />
                    </motion.div>
                </div>
            </section>

            {/* Platform Showcase Carousel (Swiper) */}
            <section className="py-20 border-b border-gray-100 bg-gray-50/50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900">Platform Previews</h2>
                        <p className="text-gray-600 mt-2">Explore the student and admin experience</p>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden pb-8">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay={{ delay: 4500, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            className="w-full h-[400px] md:h-[500px]"
                        >
                            {showcaseImages.map((src, index) => (
                                <SwiperSlide key={index} className="relative w-full h-full">
                                    <Image src={src} alt={`LMS Screen ${index + 1}`} fill className="object-contain p-6" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* Feature List */}
            <section className="py-20 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 space-y-16">
                    {[
                        { icon: <IoLibrary />, title: "Interactive Course Builder", desc: "Create engaging learning modules using our drag-and-drop editor with full support for video, audio, and rich text." },
                        { icon: <IoPeople />, title: "Learner Analytics", desc: "Track student progress, completion rates, and assessment scores in real-time from the central admin dashboard." },
                        { icon: <IoRibbon />, title: "Automated Certifications", desc: "Motivate learners by issuing custom-branded, verifiable certificates automatically upon course completion." }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-6">
                            <div className="w-12 h-12 shrink-0 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl">{item.icon}</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Standardized Pricing Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Simple, transparent pricing</h2>
                        <p className="text-lg text-gray-600">Scale your learning operations without hidden fees.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Plan 1 */}
                        <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm flex flex-col">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Starter</h3>
                            <p className="text-gray-500 text-sm mb-6">Perfect for internal team training.</p>
                            <div className="text-4xl font-bold mb-6 text-gray-900">$99<span className="text-base font-normal text-gray-500">/mo</span></div>
                            <button className="w-full bg-white border border-gray-300 text-gray-900 py-2.5 rounded-md font-medium hover:bg-gray-50 transition mb-8">Start Free Trial</button>
                            <div className="text-sm font-semibold text-gray-900 mb-4">What's included:</div>
                            <ul className="space-y-4 flex-1">
                                {["Up to 100 Active Learners", "Basic Course Builder", "Standard Quizzes", "Email Support"].map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm"><IoCheckmark className="text-blue-600 text-lg shrink-0" /> {f}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Plan 2 (Highlighted) */}
                        <div className="bg-white p-8 border-2 border-blue-600 rounded-xl shadow-md relative flex flex-col transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-bl-lg font-medium">Recommended</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Professional</h3>
                            <p className="text-gray-500 text-sm mb-6">For scaling external academies.</p>
                            <div className="text-4xl font-bold mb-6 text-gray-900">$299<span className="text-base font-normal text-gray-500">/mo</span></div>
                            <button className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700 transition mb-8">Get Started</button>
                            <div className="text-sm font-semibold text-gray-900 mb-4">Everything in Starter, plus:</div>
                            <ul className="space-y-4 flex-1">
                                {["Up to 1,000 Active Learners", "Custom Certificates", "Advanced Reporting", "Video Hosting", "Priority 24/7 Support"].map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm"><IoCheckmark className="text-blue-600 text-lg shrink-0" /> {f}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Plan 3 */}
                        <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm flex flex-col">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Enterprise</h3>
                            <p className="text-gray-500 text-sm mb-6">For large universities and global orgs.</p>
                            <div className="text-4xl font-bold mb-6 text-gray-900">Custom</div>
                            <button className="w-full bg-white border border-gray-300 text-gray-900 py-2.5 rounded-md font-medium hover:bg-gray-50 transition mb-8">Contact Sales</button>
                            <div className="text-sm font-semibold text-gray-900 mb-4">Everything in Professional, plus:</div>
                            <ul className="space-y-4 flex-1">
                                {["Unlimited Learners", "Single Sign-On (SSO)", "Custom API Access", "Dedicated Success Manager", "White-labeled Platform"].map((f, i) => (
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