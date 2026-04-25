"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

/* ---------------- DATA ---------------- */

const services = [
  {
    number: "01",
    badge: "Featured",
    title: "Software Development",
    desc: "Custom, scalable software engineered for your business.",
    tags: ["ERP", "SaaS", "Web Apps", "API"],
    featured: true,
    img: "/images/software.jpg",
  },
  {
    number: "02",
    title: "App Development",
    desc: "iOS & Android apps with smooth UX and performance.",
    tags: ["iOS", "Android", "Flutter", "PWA"],
    img: "/images/app.jpg",
  },
  {
    number: "03",
    title: "Graphic Design",
    desc: "Modern UI/UX and branding that stands out.",
    tags: ["UI/UX", "Branding", "Motion"],
    img: "/images/design.jpg",
  },
];

const stats = [
  { num: "150+", label: "Projects Delivered" },
  { num: "5+", label: "Onging Projects" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "6+", label: "Years Experience" },
];

/* ---------------- MAIN ---------------- */

export default function WeOffer() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-5">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div
          data-aos="fade-up"
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-sm text-orange-500 font-semibold mb-2">
            What We Offer
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Services built to scale your vision
          </h2>

          <p className="text-gray-500">
            We create modern digital solutions that help businesses grow faster.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
              className={`rounded-2xl overflow-hidden border bg-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300
              ${s.featured ? "border-orange-400" : "border-gray-200"}`}
            >
              {/* Image */}
              <div className="h-40 w-full relative">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs text-gray-400 mb-2">{s.number}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{s.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-orange-50 text-orange-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="text-sm font-medium text-orange-500 hover:underline"
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={300 + i * 100}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-3xl font-bold text-gray-800">{stat.num}</h3>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
