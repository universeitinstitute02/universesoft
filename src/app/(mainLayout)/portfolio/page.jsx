"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const categories = ["All", "Enterprise", "E-commerce", "Mobile App", "UI/UX Design"];

    const projects = [
        {
            id: 1,
            title: "Universe IT Institute",
            category: "Enterprise",
            client: "FinTech Corp",
            image: "https://res.cloudinary.com/dxvacpgrv/image/upload/v1734947514/kmkpohclm6n5gryve1el.png",
        },
        {
            id: 2,
            title: "Aphrodites",
            category: "E-commerce",
            client: "EcoGreen Retail",
            image: "https://res.cloudinary.com/dxvacpgrv/image/upload/v1734947601/eovoftzqvwdt4igyxcsg.png",
        },
        {
            id: 3,
            title: "Eranian",
            category: "Mobile App",
            client: "MedCare Solutions",
            image: "https://res.cloudinary.com/dxvacpgrv/image/upload/v1734947631/qassuaazsanxvush6gbw.png",
        },
        {
            id: 4,
            title: "Rooter King",
            category: "E-commerce",
            client: "Electro Ltd",
            image: "https://res.cloudinary.com/dxvacpgrv/image/upload/v1734947704/tnxmenix8ttpu2fpxfsb.png",
        },
        {
            id: 5,
            title: "Quantum Properties",
            category: "Enterprise",
            client: "Logistics Intl.",
            image: "https://res.cloudinary.com/dxvacpgrv/image/upload/v1734947740/g1demaxoxky9w0c9hxjq.png",
        },
        {
            id: 6,
            title: "BIFDT",
            category: "UI/UX Design",
            client: "Internal Product",
            image: "https://res.cloudinary.com/dxvacpgrv/image/upload/v1734947781/jbhkmooj3crdc36sa6bq.png",
        },
        {
            id: 7,
            title: "Bideshgami",
            category: "UI/UX Design",
            client: "Internal Product",
            image: "https://res.cloudinary.com/dxvacpgrv/image/upload/v1734947801/g9mdu4alqywfu2jvqpdi.png",
        },
        {
            id: 8,
            title: "Learning Management System",
            category: "UI/UX Design",
            client: "Internal Product",
            image: "https://res.cloudinary.com/dxvacpgrv/image/upload/v1734947874/yudmpk9rrdzzermyfimb.png",
        },
        {
            id: 9,
            title: "Abinash Foundation",
            category: "UI/UX Design",
            client: "Internal Product",
            image: "https://res.cloudinary.com/dxvacpgrv/image/upload/v1734947907/lgnhqr4xtawl9jo16n5w.png",
        },
    ];

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const fade = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <main className="bg-white text-gray-900 min-h-screen">

            {/* Minimal Hero Section */}
            <section className="pt-24 pb-16 border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <motion.h1 initial="hidden" animate="visible" variants={fade} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                        Selected Work
                    </motion.h1>
                    <motion.p initial="hidden" animate="visible" variants={fade} transition={{ delay: 0.1 }} className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A showcase of our recent digital products, scalable platforms, and award-winning technical solutions.
                    </motion.p>
                </div>
            </section>

            {/* Filter & Gallery Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Category Filters */}
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                                    ? "bg-gray-900 text-white"
                                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Filterable Masonry-Style Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="group cursor-pointer"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-[260px] w-full bg-gray-50 border border-gray-200 rounded-xl overflow-hidden mb-5">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        />
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors duration-300"></div>
                                    </div>

                                    {/* Project Meta Info */}
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-gray-500">{project.client}</p>
                                        </div>
                                        <span className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Empty State Fallback */}
                        {filteredProjects.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="col-span-full py-20 text-center text-gray-500"
                            >
                                No projects found in this category.
                            </motion.div>
                        )}
                    </motion.div>

                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Have a project in mind?</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Let's discuss your requirements and see how our engineering team can help you achieve your goals.
                    </p>
                    <button className="bg-blue-600 text-white px-8 py-3.5 rounded-md font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2 mx-auto">
                        Start a Conversation <IoArrowForward />
                    </button>
                </div>
            </section>

        </main>
    );
}