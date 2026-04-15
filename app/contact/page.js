"use client";
import React, { useEffect } from "react";
import Contact from "@/components/Contact";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#E5DCCF] text-[#0B3D2E]">
      {/* Header with back button */}
      <header 
        className="sticky top-0 bg-[#E5DCCF]/95 backdrop-blur-lg z-50"
        data-aos="fade-down"
        data-aos-duration="600"
      >
        <div className="px-2 md:px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-3xl font-bold gap-2 px-4 py-2 rounded-lg hover:bg-white/50 transition-all duration-300 group"
          >
            <FaArrowLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform duration-300" />
            Back
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main 
        className="py-12 sm:py-16 lg:py-20"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <Contact />
      </main>
    </div>
  );
};

export default ContactPage;