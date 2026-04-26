"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoCheckmark, IoChatbubbles, IoCodeWorking, IoGlobe } from "react-icons/io5";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function SMSPage() {
    const fade = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    const showcaseImages = [
        "https://i.ibb.co.com/m56bZvth/image.png",
        "https://i.ibb.co.com/VpkJ5zr3/image.png",
        "https://i.ibb.co.com/0VhXHWTW/image.png"
    ];

    return (
        <main className="bg-white text-gray-900">
            {/* Hero Section */}
            <section className="py-20 border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <motion.h1 initial="hidden" animate="visible" variants={fade} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                        Reliable SMS Gateway <br /> & Developer API.
                    </motion.h1>
                    <motion.p initial="hidden" animate="visible" variants={fade} transition={{ delay: 0.1 }} className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Reach your customers globally with 99.99% deliverability. Send OTPs, marketing campaigns, and transactional alerts effortlessly.
                    </motion.p>
                    <motion.div initial="hidden" animate="visible" variants={fade} transition={{ delay: 0.2 }} className="flex justify-center gap-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
                            Get API Key
                        </button>
                        <button className="bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition">
                            Read Documentation
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Dashboard & Logs Showcase Carousel (Swiper) */}
            <section className="py-20 border-b border-gray-100 bg-gray-50/50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900">Analytics & Messaging Logs</h2>
                        <p className="text-gray-600 mt-2">Monitor your campaign performance in real-time</p>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden pb-8">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            className="w-full h-[400px] md:h-[500px]"
                        >
                            {showcaseImages.map((src, index) => (
                                <SwiperSlide key={index} className="relative w-full h-full">
                                    <Image src={src} alt={`SMS Dashboard ${index + 1}`} fill className="object-contain p-6" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* Feature List */}
            <section className="py-20 border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                    {[
                        { icon: <IoGlobe />, title: "Global Coverage", desc: "Direct connections to over 800+ mobile networks worldwide ensuring rapid delivery speeds." },
                        { icon: <IoCodeWorking />, title: "Developer Friendly API", desc: "Integrate SMS into your web or mobile app in minutes using our RESTful API and SDKs." },
                        { icon: <IoChatbubbles />, title: "Two-Way Messaging", desc: "Receive replies from your customers, handle opt-outs automatically, and build conversational flows." }
                    ].map((item, i) => (
                        <div key={i}>
                            <div className="text-blue-600 text-2xl mb-4">{item.icon}</div>
                            <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Standardized Pricing Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Simple, transparent pricing</h2>
                        <p className="text-lg text-gray-600">Pay a flat platform fee plus competitive per-message rates.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Plan 1 */}
                        <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm flex flex-col">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Starter</h3>
                            <p className="text-gray-500 text-sm mb-6">For small businesses and testing.</p>
                            <div className="text-4xl font-bold mb-6 text-gray-900">$29<span className="text-base font-normal text-gray-500">/mo</span></div>
                            <button className="w-full bg-white border border-gray-300 text-gray-900 py-2.5 rounded-md font-medium hover:bg-gray-50 transition mb-8">Start Free Trial</button>
                            <div className="text-sm font-semibold text-gray-900 mb-4">What's included:</div>
                            <ul className="space-y-4 flex-1">
                                {["5,000 Free Credits/mo", "Standard API Access", "Basic Delivery Reports", "Email Support"].map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm"><IoCheckmark className="text-blue-600 text-lg shrink-0" /> {f}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Plan 2 (Highlighted) */}
                        <div className="bg-white p-8 border-2 border-blue-600 rounded-xl shadow-md relative flex flex-col transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-bl-lg font-medium">Recommended</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Professional</h3>
                            <p className="text-gray-500 text-sm mb-6">For marketing campaigns & heavy API usage.</p>
                            <div className="text-4xl font-bold mb-6 text-gray-900">$99<span className="text-base font-normal text-gray-500">/mo</span></div>
                            <button className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700 transition mb-8">Get Started</button>
                            <div className="text-sm font-semibold text-gray-900 mb-4">Everything in Starter, plus:</div>
                            <ul className="space-y-4 flex-1">
                                {["25,000 Free Credits/mo", "Dedicated Sender ID", "Priority Message Routing", "Two-Way SMS Enabled", "24/7 Priority Support"].map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm"><IoCheckmark className="text-blue-600 text-lg shrink-0" /> {f}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Plan 3 */}
                        <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm flex flex-col">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Volume</h3>
                            <p className="text-gray-500 text-sm mb-6">For enterprise scale & high volume.</p>
                            <div className="text-4xl font-bold mb-6 text-gray-900">Custom</div>
                            <button className="w-full bg-white border border-gray-300 text-gray-900 py-2.5 rounded-md font-medium hover:bg-gray-50 transition mb-8">Contact Sales</button>
                            <div className="text-sm font-semibold text-gray-900 mb-4">Everything in Professional, plus:</div>
                            <ul className="space-y-4 flex-1">
                                {["Volume Discount Tiers", "Dedicated Shortcodes", "SMPP Protocol Access", "Dedicated Success Manager", "Custom SLAs"].map((f, i) => (
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