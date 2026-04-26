"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoCheckmark, IoCart, IoTrendingUp, IoGlobe, IoCartOutline } from "react-icons/io5";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function EcommercePage() {
    const fade = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    // Updated data structure to match the new card design
    const showcaseThemes = [
        {
            title: "EcoGreen - Organic Shopify Theme",
            author: "by WebStudio in E-commerce",
            price: "$59",
            salePrice: "$47",
            sales: "50 Sales",
            image: "https://i.ibb.co.com/nMnFX27G/electro-Bootstrap.webp",
            tag: "Sale",
            tagColor: "bg-green-500"
        },
        {
            title: "BigMarket - Multi-Purpose OS 2.0",
            author: "by ThemeMaster in Shopping",
            price: "$44",
            salePrice: "$26",
            sales: "772 Sales",
            image: "https://i.ibb.co.com/8LzZd5Kb/mekog-cover.png",
            tag: "Popular",
            tagColor: "bg-blue-500"
        },
        {
            title: "Petcio - Pet Shop Theme",
            author: "by wpbingo in Shopping",
            price: "$56",
            salePrice: "$39",
            sales: "30 Sales",
            image: "https://i.ibb.co.com/LXkcZ6Rf/1537207366electrothumb.jpg",
            tag: "New",
            tagColor: "bg-orange-500"
        }
    ];

    return (
        <main className="bg-white text-gray-900">
            {/* Hero Section */}
            <section className="py-20 md:py-24 border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div initial="hidden" animate="visible" variants={fade}>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            A modern storefront <br /> for growing brands.
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Fast, reliable, and scalable E-commerce software. Sell globally with out-of-the-box features designed to increase conversion rates.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">Start Selling</button>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" animate="visible" variants={fade} transition={{ delay: 0.2 }} className="w-full h-[400px] bg-gray-50 border border-gray-200 rounded-xl relative overflow-hidden">
                        <Image src={"https://i.ibb.co.com/Pv85nRyf/772668246423673-Y3-Jvc-Cwx-NDA2-LDEx-MDAs-NDgs-MA.jpg"} alt="E-commerce UI" fill className="object-contain p-4" />
                    </motion.div>
                </div>
            </section>

            {/* Store Showcase Carousel */}
            <section className="py-20 border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900">Featured Storefronts</h2>
                        <p className="text-gray-600 mt-2">Built with our high-performance engine</p>
                    </div>

                    <div className="pb-12">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={24}
                            slidesPerView={1}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            className="w-full !pb-12"
                        >
                            {showcaseThemes.map((theme, index) => (
                                <SwiperSlide key={index} className="h-auto">
                                    <div className="flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">

                                        {/* Image Section */}
                                        <div className="relative h-48 w-full bg-gray-50 border-b border-gray-100">
                                            <div className={`absolute top-3 left-3 z-10 ${theme.tagColor} text-white text-xs font-bold px-3 py-1 rounded-sm`}>
                                                {theme.tag}
                                            </div>
                                            <Image src={theme.image} alt={theme.title} fill className="object-cover" />
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-5 flex flex-col flex-1">
                                            <h3 className="text-lg font-bold text-gray-900 truncate mb-1" title={theme.title}>
                                                {theme.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mb-4">{theme.author}</p>

                                            {/* Pricing */}
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="text-gray-400 line-through text-sm">{theme.price}</span>
                                                <span className="text-green-600 font-bold text-xl">{theme.salePrice}</span>
                                            </div>

                                            {/* Footer / Actions */}
                                            <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
                                                <span className="text-sm text-gray-500">{theme.sales}</span>
                                                <div className="flex gap-2">
                                                    <button className="p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition" aria-label="Add to cart">
                                                        <IoCartOutline className="text-lg" />
                                                    </button>
                                                    <button className="px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-md hover:bg-blue-50 transition">
                                                        Live Preview
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
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
                        { icon: <IoCart />, title: "Optimized Checkout", desc: "A streamlined checkout process designed to reduce cart abandonment and increase successful transactions." },
                        { icon: <IoGlobe />, title: "Global Inventory", desc: "Manage multiple warehouses and track stock levels in real-time across all your sales channels." },
                        { icon: <IoTrendingUp />, title: "Sales Analytics", desc: "Detailed reporting on product performance, customer behavior, and revenue tracking." }
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
                        <p className="text-lg text-gray-600">Start selling online with zero transaction fees.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Plan 1 */}
                        <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm flex flex-col">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Basic Store</h3>
                            <p className="text-gray-500 text-sm mb-6">For individuals starting out.</p>
                            <div className="text-4xl font-bold mb-6 text-gray-900">$29<span className="text-base font-normal text-gray-500">/mo</span></div>
                            <button className="w-full bg-white border border-gray-300 text-gray-900 py-2.5 rounded-md font-medium hover:bg-gray-50 transition mb-8">Start Free Trial</button>
                            <div className="text-sm font-semibold text-gray-900 mb-4">What's included:</div>
                            <ul className="space-y-4 flex-1">
                                {["Up to 500 Products", "Standard Theme Builder", "Basic Reporting", "Email Support"].map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm"><IoCheckmark className="text-blue-600 text-lg shrink-0" /> {f}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Plan 2 (Highlighted) */}
                        <div className="bg-white p-8 border-2 border-blue-600 rounded-xl shadow-md relative flex flex-col transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-bl-lg font-medium">Recommended</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Growth</h3>
                            <p className="text-gray-500 text-sm mb-6">For established brands scaling fast.</p>
                            <div className="text-4xl font-bold mb-6 text-gray-900">$99<span className="text-base font-normal text-gray-500">/mo</span></div>
                            <button className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700 transition mb-8">Get Started</button>
                            <div className="text-sm font-semibold text-gray-900 mb-4">Everything in Basic, plus:</div>
                            <ul className="space-y-4 flex-1">
                                {["Unlimited Products", "Custom Domains", "Advanced Analytics", "Abandoned Cart Recovery", "Priority 24/7 Support"].map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm"><IoCheckmark className="text-blue-600 text-lg shrink-0" /> {f}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Plan 3 */}
                        <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm flex flex-col">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Advanced</h3>
                            <p className="text-gray-500 text-sm mb-6">For high-volume merchants.</p>
                            <div className="text-4xl font-bold mb-6 text-gray-900">$299<span className="text-base font-normal text-gray-500">/mo</span></div>
                            <button className="w-full bg-white border border-gray-300 text-gray-900 py-2.5 rounded-md font-medium hover:bg-gray-50 transition mb-8">Choose Advanced</button>
                            <div className="text-sm font-semibold text-gray-900 mb-4">Everything in Growth, plus:</div>
                            <ul className="space-y-4 flex-1">
                                {["Multiple Storefronts", "Headless Commerce API", "B2B Features", "Dedicated Manager", "0% Payment Fees"].map((f, i) => (
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