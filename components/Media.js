"use client";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Media = () => {
  const [imageLoadErrors, setImageLoadErrors] = useState({});
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const mainImage = "/images/image1.webp";
  const galleryImages = [
      "/images/3.webp", // Done
      "/images/40.webp", // Done
      "/images/6.webp", // Done
      "/images/12.webp", // Done
      "/images/16.webp", // Done
      "/images/28.webp", // Done
      "/images/35.webp", // Done
      "/images/23.webp", // Done
      "/images/39.webp", // Done
      "/images/24.webp", // Done
      "/images/19.webp", // Done
      "/images/29.webp", // Done
      "/images/41.webp", // Done
      "/images/8.webp", // Done
      "/images/22.webp", // Done
      "/images/43.webp", // Done
      "/images/30.webp", // Done
      "/images/10.webp", // Done
      "/images/15.webp", // Done
      "/images/25.webp", // Done
      "/images/14.webp", // Done
      "/images/26.webp", // Done
      "/images/4.webp", // Done
      "/images/45.jpeg", // Done
      "/images/9.webp", // Done
      "/images/34.webp", // Done
      "/images/5.webp", // Done
      "/images/38.webp", // Done
      "/images/18.webp", // Done
      "/images/44.webp", // Done
      "/images/31.webp", // Done
      "/images/11.webp", // Done
      "/images/42.webp", // Done
      "/images/1.webp", // Done
      "/images/7.webp", // Done
      "/images/27.webp", // Done
      "/images/20.webp", // Done
      "/images/37.webp", // Done
      "/images/image1.webp", // Done
      "/images/21.webp", // Done
  ];

  const duplicatedImages = [...galleryImages, ...galleryImages];

  useEffect(() => {
    if (loadedImages.size >= 4) {
      setAllImagesLoaded(true);
      setIsAutoScrolling(true);
    }
  }, [loadedImages]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isAutoScrolling || !allImagesLoaded) return;

    const scrollSpeed = 0.5;
    let animationId;
    let lastTimestamp = 0;

    // Safari compatibility: Use smooth, consistent scrolling
    const autoScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;

      // Only update if enough time has passed (60fps target)
      if (delta >= 16) {
        const maxScroll = container.scrollWidth / 2;
        
        if (container.scrollLeft >= maxScroll - 1) {
          // Seamless loop: jump back to start
          container.scrollLeft = 0;
        } else {
          // Smooth scroll with Safari compatibility
          container.scrollLeft = Math.round(container.scrollLeft + scrollSpeed);
        }
        
        lastTimestamp = timestamp;
      }
      
      animationId = requestAnimationFrame(autoScroll);
    };

    // Start animation
    animationId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isAutoScrolling, allImagesLoaded]);

  const handleImageLoad = (imageSrc) => {
    setLoadedImages((prev) => new Set([...prev, imageSrc]));
  };

  const handleImageError = (imageSrc) => {
    setImageLoadErrors((prev) => ({
      ...prev,
      [imageSrc]: true,
    }));
  };

  const scrollLeft = () => {
    setIsAutoScrolling(false);
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      const startPosition = container.scrollLeft;
      const targetPosition = Math.max(0, startPosition - scrollAmount);
      animateScroll(container, startPosition, targetPosition, 300);
    }
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const scrollRight = () => {
    setIsAutoScrolling(false);
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      const startPosition = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const targetPosition = Math.min(maxScroll, startPosition + scrollAmount);
      animateScroll(container, startPosition, targetPosition, 300);
    }
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const animateScroll = (container, start, target, duration) => {
    const startTime = performance.now();
    let rafId;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easing function
      const easeInOutCubic =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      // Safari compatibility: Round to integer for smoother rendering
      const newPosition = start + (target - start) * easeInOutCubic;
      container.scrollLeft = Math.round(newPosition);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  };
  return (
    <div className="w-full p-4 ">
      <div
        className="text-left flex sm:mt-14 lg:mt-16 lg:pt-20 text-[29vw] md:text-[13.5em] font-druk-xcond leading-none"
        data-aos="fade-right"
        data-aos-duration="800"
        style={{marginTop:"-40px"}}
      >
        <h1 className="flex items-center gap-2 font-extrabold leading-none">
          MEDIA
        </h1>
      </div>

      <div
        className="relative mb-6 border-b-2 pb-10  "
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="relative w-full overflow-hidden rounded-4xl">
          <Image
            src={mainImage}
            alt="Featured Media"
            width={1200}
            height={800}
            priority
            className="w-full hover:scale-101 cursor-pointer transition h-auto object-cover rounded-[20px] md:rounded-[40px] lg:rounded-[60px] "
            onError={() => handleImageError(mainImage)}
            sizes="100vw"
          />
          {imageLoadErrors[mainImage] && (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center rounded-4xl">
              <span className="text-gray-500">Image not available</span>
            </div>
          )}
        </div>
      </div>

      <div className="">
        {/* {!allImagesLoaded && (
                    <div className="flex justify-center items-center mb-6">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-current"></div>
                        <span className="ml-3">Loading gallery images... ({loadedImages.size}/4)</span>
                    </div>
                )} */}

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
          onTouchStart={() => setIsAutoScrolling(false)}
          onTouchEnd={() => setTimeout(() => setIsAutoScrolling(true), 2000)}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'auto'
          }}
        >
          <div className="flex gap-4 sm:gap-6 lg:gap-8 pb-4">
            {duplicatedImages.map((imageSrc, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={imageSrc}
                    alt={`Gallery ${index + 1}`}
                    width={300}
                    height={400}
                    className={`w-40 h-52 sm:w-48 sm:h-60 md:w-56 md:h-72 lg:w-64 lg:h-80 xl:w-72 xl:h-96 object-cover hover:scale-105 transition-all duration-300 ${
                      loadedImages.has(imageSrc) ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => handleImageLoad(imageSrc)}
                    onError={() => handleImageError(imageSrc)}
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, (max-width: 1280px) 256px, 288px"
                  />
                  {!loadedImages.has(imageSrc) &&
                    !imageLoadErrors[imageSrc] && (
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center animate-pulse rounded-xl">
                        <div className="w-8 h-8 bg-gray-300 rounded-full animate-bounce"></div>
                      </div>
                    )}
                </div>
                {imageLoadErrors[imageSrc] && (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center rounded-xl">
                    <span className="text-xs text-gray-500 text-center px-2">
                      Image not available
                    </span>
                  </div>
                )}
                {/* Show image URL below each image (temporary) */}
                {/* <div className="w-full text-xs text-center mt-2 text-gray-700 bg-white bg-opacity-70 rounded px-1 py-0.5">
                                    {imageSrc}
                                </div> */}
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex justify-between gap-6 mt-6"
          data-aos="slide-up"
          data-aos-duration="700"
          data-aos-delay="600"
        >
          <button
            onClick={scrollLeft}
            disabled={!allImagesLoaded}
            className={`rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 ${
              !allImagesLoaded
                ? "opacity-50 cursor-not-allowed"
                : "hover:-translate-y-1"
            }`}
            aria-label="Scroll left"
          >
            <FaChevronCircleLeft className="w-10 h-10" />
          </button>

          <button
            onClick={scrollRight}
            disabled={!allImagesLoaded}
            className={` rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 ${
              !allImagesLoaded
                ? "opacity-50 cursor-not-allowed"
                : "hover:-translate-y-1"
            }`}
            aria-label="Scroll right"
          >
            <FaChevronCircleRight className="w-10 h-10" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          /* Safari-specific optimizations */
          -webkit-overflow-scrolling: touch;
          scroll-behavior: auto;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Safari performance optimization */
        @supports (-webkit-appearance: none) {
          .scrollbar-hide {
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
            will-change: scroll-position;
          }
        }
      `}</style>
    </div>
  );
};

export default Media;
