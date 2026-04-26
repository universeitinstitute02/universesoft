"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    IoCheckmark,
    IoBusiness,
    IoPeople,
    IoCart,
    IoPieChart,
    IoShieldCheckmark,
    IoSpeedometer,
    IoHeadset
} from "react-icons/io5";

export default function ERPPage() {
    const fade = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const stagger = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    return (
        <main className="bg-white text-gray-900">
            {/* 1. HERO SECTION (Single Large Image) */}
            <section className="pt-20 pb-12 border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <motion.h1 initial="hidden" animate="visible" variants={fade} className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                        The central nervous system <br className="hidden md:block" /> for your entire business.
                    </motion.h1>
                    <motion.p initial="hidden" animate="visible" variants={fade} transition={{ delay: 0.1 }} className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                        Connect finance, HR, supply chain, and operations into one seamless flow. Stop managing software and start managing your business.
                    </motion.p>
                    <motion.div initial="hidden" animate="visible" variants={fade} transition={{ delay: 0.2 }} className="flex justify-center gap-4 mb-16">
                        <button className="bg-blue-600 text-white px-8 py-3.5 rounded-md font-medium hover:bg-blue-700 transition">
                            Book a Consultation
                        </button>
                    </motion.div>

                    <motion.div initial="hidden" animate="visible" variants={fade} transition={{ delay: 0.3 }} className="w-full h-[300px] md:h-[600px] bg-gray-50 border border-gray-200 rounded-2xl relative overflow-hidden shadow-lg">
                        <Image
                            src="https://i.ibb.co.com/PGM1P60X/erp-replace.jpg"
                            alt="ERP Dashboard Overview"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </motion.div>
                </div>
            </section>

            {/* 2. WHAT IS AN ERP? */}
            <section className="py-24 border-b border-gray-100 bg-gray-50/50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What is our ERP System?</h2>
                        <p className="text-lg text-gray-600">It is the end of data silos. Watch how information flows logically through your company.</p>
                    </div>

                    {/* Vertical Flow Timeline */}
                    <div className="relative pl-8 md:pl-0">
                        {/* The continuous connecting line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 md:-translate-x-1/2"></div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="space-y-12">

                            {/* Flow Node 1 */}
                            <motion.div variants={fade} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                                <div className="absolute left-[-33px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 z-10 group-hover:scale-150 transition-transform duration-300"></div>
                                <div className="md:w-[45%] text-left md:text-right pr-0 md:pr-12 mb-4 md:mb-0">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">1. Data Entry & Sales</h3>
                                    <p className="text-gray-600">A new order is placed. The system instantly registers the transaction without manual spreadsheets.</p>
                                </div>
                                <div className="md:w-[45%] pl-0 md:pl-12">
                                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl shadow-sm"><IoCart /></div>
                                </div>
                            </motion.div>

                            {/* Flow Node 2 */}
                            <motion.div variants={fade} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group md:flex-row-reverse">
                                <div className="absolute left-[-33px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 z-10 group-hover:scale-150 transition-transform duration-300"></div>
                                <div className="md:w-[45%] text-left pl-0 md:pl-12 mb-4 md:mb-0">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">2. Automated Inventory</h3>
                                    <p className="text-gray-600">Stock levels are automatically deducted across all warehouses, triggering reorder alerts if necessary.</p>
                                </div>
                                <div className="md:w-[45%] pr-0 md:pr-12 flex md:justify-end">
                                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl shadow-sm"><IoBusiness /></div>
                                </div>
                            </motion.div>

                            {/* Flow Node 3 */}
                            <motion.div variants={fade} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                                <div className="absolute left-[-33px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 z-10 group-hover:scale-150 transition-transform duration-300"></div>
                                <div className="md:w-[45%] text-left md:text-right pr-0 md:pr-12 mb-4 md:mb-0">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">3. Financial Ledger Sync</h3>
                                    <p className="text-gray-600">Revenue and taxes are instantly calculated and pushed to your accounting ledger. Zero reconciliation needed.</p>
                                </div>
                                <div className="md:w-[45%] pl-0 md:pl-12">
                                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl shadow-sm"><IoPieChart /></div>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. WHAT WE OFFER */}
            <section className="py-24 border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">What We Offer</h2>
                        <p className="text-lg text-gray-600 max-w-2xl">A suite of enterprise-grade modules that you can mix and match based on your company's operational needs.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Human Resources", desc: "Payroll, attendance, and employee onboarding.", icon: <IoPeople /> },
                            { title: "Financials", desc: "Automated bookkeeping, invoicing, and tax tracking.", icon: <IoPieChart /> },
                            { title: "Supply Chain", desc: "Multi-warehouse inventory and vendor management.", icon: <IoBusiness /> },
                            { title: "CRM", desc: "Lead tracking, ticketing, and customer satisfaction.", icon: <IoHeadset /> }
                        ].map((module, i) => (
                            <div key={i} className="p-8 border border-gray-200 rounded-xl hover:border-blue-600 transition-colors bg-white shadow-sm">
                                <div className="text-blue-600 text-3xl mb-6">{module.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{module.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{module.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. WHY US? */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-white">Why choose our platform?</h2>
                        <p className="text-lg text-gray-400">Built differently to ensure you never outgrow your software.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-3xl text-blue-400 mb-6 border border-gray-700">
                                <IoSpeedometer />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
                            <p className="text-gray-400 leading-relaxed">Built on a modern React and Node.js stack. Reports that used to take hours now generate in milliseconds.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-3xl text-blue-400 mb-6 border border-gray-700">
                                <IoShieldCheckmark />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Bank-Grade Security</h3>
                            <p className="text-gray-400 leading-relaxed">Your data is encrypted at rest and in transit. Granular role-based access keeps sensitive data locked down.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-3xl text-blue-400 mb-6 border border-gray-700">
                                <IoHeadset />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
                            <p className="text-gray-400 leading-relaxed">You don't just get software; you get an engineering partner. 24/7 dedicated support for critical systems.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRICING */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Transparent Pricing</h2>
                        <p className="text-lg text-gray-600">Choose the ERP plan that fits your organizational scale.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Plan 1 */}
                        <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm flex flex-col">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Starter</h3>
                            <p className="text-gray-500 text-sm mb-6">Essential tools for small teams.</p>
                            <div className="text-4xl font-bold mb-6 text-gray-900">$199<span className="text-base font-normal text-gray-500">/mo</span></div>
                            <button className="w-full bg-white border border-gray-300 text-gray-900 py-2.5 rounded-md font-medium hover:bg-gray-50 transition mb-8">Start Free Trial</button>
                            <div className="text-sm font-semibold text-gray-900 mb-4">What's included:</div>
                            <ul className="space-y-4 flex-1">
                                {["Up to 10 Users", "Core Finance Module", "Standard Support", "5GB Storage"].map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm"><IoCheckmark className="text-blue-600 text-lg shrink-0" /> {f}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Plan 2 (Highlighted) */}
                        <div className="bg-white p-8 border-2 border-blue-600 rounded-xl shadow-md relative flex flex-col transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-bl-lg font-medium">Recommended</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Professional</h3>
                            <p className="text-gray-500 text-sm mb-6">Advanced features for growing companies.</p>
                            <div className="text-4xl font-bold mb-6 text-gray-900">$499<span className="text-base font-normal text-gray-500">/mo</span></div>
                            <button className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700 transition mb-8">Get Started</button>
                            <div className="text-sm font-semibold text-gray-900 mb-4">Everything in Starter, plus:</div>
                            <ul className="space-y-4 flex-1">
                                {["Up to 50 Users", "HR & Supply Chain Modules", "Priority 24/7 Support", "100GB Storage", "Custom API Access"].map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm"><IoCheckmark className="text-blue-600 text-lg shrink-0" /> {f}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Plan 3 */}
                        <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm flex flex-col">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Enterprise</h3>
                            <p className="text-gray-500 text-sm mb-6">Maximum performance and security.</p>
                            <div className="text-4xl font-bold mb-6 text-gray-900">Custom</div>
                            <button className="w-full bg-white border border-gray-300 text-gray-900 py-2.5 rounded-md font-medium hover:bg-gray-50 transition mb-8">Contact Sales</button>
                            <div className="text-sm font-semibold text-gray-900 mb-4">Everything in Professional, plus:</div>
                            <ul className="space-y-4 flex-1">
                                {["Unlimited Users", "All Modules Included", "Dedicated Success Manager", "Unlimited Storage", "On-Premise Option"].map((f, i) => (
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