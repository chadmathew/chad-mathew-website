"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaFilm,
  FaCamera,
  FaUser,
  FaInstagram,
  FaEnvelope,
  FaCircle,
  FaHeart,
} from "react-icons/fa";
import { FaStar, FaUserAlt, FaGlobe, FaNetworkWired } from "react-icons/fa";
import { SiImdb } from "react-icons/si";
import FilmTV from "@/components/FilmTV";
import Media from "@/components/Media";
import Bio from "@/components/Bio";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const pathname = usePathname();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (pathname === "/contact") {
      setActiveSection("contact");
    }
  }, [pathname]);

  const navLinks = [
    { id: "home", label: "HOME", icon: FaHome },
    { id: "film-tv", label: "FILM&TV", icon: FaFilm },
    { id: "media", label: "MEDIA", icon: FaCamera },
    { id: "bio", label: "BIO", icon: FaUser },
    { id: "contact", label: "CONTACT", icon: FaEnvelope },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#E5DCCF] text-[#0a2f23]">
      <nav className="fixed top-0 inset-x-0 bg-[#E5DCCF] backdrop-blur-lg z-50">
        <div className="flex px-0.5 h-12 items-center justify-center">
          <div className="flex items-center justify-between w-full">
            {navLinks.map((link) => {
              const isActive =
                link.id === "contact"
                  ? pathname === "/contact"
                  : activeSection === link.id;

              if (link.id === "contact") {
                return (
                  <Link
                    key={link.id}
                    href="/contact"
                    className="flex items-center gap-2 px-0.5 py-1 sm:px-4 sm:py-2 rounded-lg text-xs font-medium transition-all duration-200"
                  >
                    <FaCircle
                      className={`w-2.5 h-2.5 sm:w-4 sm:h-4 transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span className="font-extrabold text-[10px] sm:text-sm lg:text-[1.5vw] leading-none">
                      {link.label}
                    </span>
                  </Link>
                );
              }

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="flex items-center gap-0.5 px-2 py-1 sm:px-4 sm:py-2 rounded-lg text-xs font-medium transition-all duration-200"
                >
                  <FaCircle
                    className={`w-1.5 h-1.5 sm:w-4 sm:h-4 transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span className="font-extrabold text-[10px] sm:text-sm lg:text-[1.5vw] leading-none">
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="fixed inset-x-0 top-10 md:top-[180px] flex items-start lg:items-center pt-4 md:pt-12 justify-center h-[350px] z-0 pointer-events-none">
        <h1
          className="text-[42vw] lg:text-[38vw] font-druk-xcond text-center leading-none"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          CHAD MATHEW
        </h1>
      </div>

      <main className="relative z-10 bg-transparent">
        <section
          id="home"
          className="relative md:min-h-screen min-h-[400px] flex items-center justify-center"
        >
          <div className="relative w-full flex justify-center">
            <div className="absolute -top-[65px] sm:-top-10 lg:-top-12">
              <Image
                src="/images/main.webp"
                alt="Model"
                width={800}
                height={1000}
                priority
                className="rounded-[70px] shadow-lg object-cover object-top w-[82vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] h-auto aspect-[7/8]"
                sizes="(max-width: 640px) 85vw, (max-width: 768px) 70vw, (max-width: 1024px) 50vw, 40vw"
              />
            </div>
          </div>
        </section>

        <section className="min-h-[15vh] md:min-h-[20vh] bg-[#E5DCCF] flex items-center justify-center"></section>

        <section
          id="film-tv"
          className="min-h-screen bg-[#E5DCCF] flex flex-col items-center justify-start py-12 sm:py-16 lg:py-20"
        >
          <FilmTV />
        </section>

        <section
          id="media"
          className="min-h-screen bg-[#E5DCCF] flex flex-col items-center justify-start py-12 sm:py-16 lg:py-20"
        >
          <Media />
        </section>

        <section
          id="bio"
          className="min-h-screen bg-[#E5DCCF] flex flex-col items-center justify-start py-12 sm:py-16 lg:py-20"
        >
          <Bio />
        </section>

        <footer className="bg-[#E5DCCF] text-[#0B3D2E] border-t border-[#0B3D2E]/10">
          <div className=" mx-auto px-1 md:px-3 py-6 flex flex-col md:flex-row items-center justify-between">
            <div className="flex text-center justify-center w-full text-xs font-normal sm:text-sm">
              <div className="text-xs font-normal sm:text-sm">
                © 2025 Chad Mathew. All rights reserved.
              </div>
            </div>
          </div>
          
          <div className="flex mb-4 flex-nowrap overflow-x-auto sm:overflow-visible gap-2 sm:gap-3 justify-center">
            <a
              href="https://www.starnow.com/u/chadmathew/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFD700] text-black rounded-full flex items-center justify-center hover:bg-[#FFD700]/80 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl flex-shrink-0"
              title="StarNow"
            >
              <img
                src="/images/starnow.jpeg"
                alt="starnow"
                className="rounded-full"
              />
            </a>

            <a
              href="https://www.backstage.com/u/itschadmathew/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 border text-white rounded-full flex items-center justify-center hover:bg-[#1a1a1a]/80 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl flex-shrink-0"
              title="Backstage"
            >
              <img src="/images/backstage.png" alt="back stage" className="" />
            </a>

            <a
              href="https://www.imdb.com/name/nm9102781/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F5C518] text-black rounded-full flex items-center justify-center hover:bg-[#F5C518]/80 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl flex-shrink-0"
              title="IMDb"
            >
              <SiImdb className="w-6 h-6 font-bold" />
            </a>

            <a
              href="https://casting.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2563EB] text-white rounded-full flex items-center justify-center hover:bg-[#2563EB]/80 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl flex-shrink-0"
              title="Casting"
            >
              <img
                src="/images/casting.png"
                alt="casting logo"
                className="rounded-full"
              />
            </a>

            <a
              href="mailto:contactme@chadmathew.com"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EA4335] text-white rounded-full flex items-center justify-center hover:bg-[#EA4335]/80 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl flex-shrink-0"
              title="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-xs text-[#0B3D2E]/60 mb-1">
              Made with <FaHeart className="inline w-3 h-3 text-red-500 mx-1" />{" "}
              by{" "}
              <a
                href="https://dev-mateen-rmas.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0B3D2E] hover:text-[#0B3D2E]/70 transition-colors duration-300"
              >
                Mateen Ahmad
              </a>
            </p>
          </div>
        </footer>

        {/* <div className="bg-[#E5DCCF] flex justify-center">< FaCircle size={20} /></div> */}

        {/* <section
          id="contact"
          className="min-h-[60vh] flex items-center justify-center bg-[#E5DCCF] py-12 sm:py-16 lg:py-20"
        >

          <div className="text-center w-full mx-auto px-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Stay Connected</h2>
            <div className=" mx-auto">
              <form className="flex w-full flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 border-2 border-[#0B3D2E]/20 rounded-full focus:border-[#0B3D2E] focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm text-[#0B3D2E] placeholder-[#0B3D2E]/60"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#0B3D2E] text-white rounded-full font-semibold hover:bg-[#0B3D2E]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>

            </div>

          </div>
        </section> */}
      </main>
    </div>
  );
};

export default Page;
