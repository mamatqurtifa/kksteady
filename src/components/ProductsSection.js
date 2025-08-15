/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("products");
    if (element) {
      observer.observe(element);
    }

    // Mouse tracking for subtle parallax
    const handleMouseMove = (e) => {
      if (typeof window !== 'undefined') {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      observer.disconnect();
      if (typeof window !== 'undefined') {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      className="relative mt-16 sm:mt-28 pt-16 sm:pt-28 flex flex-col justify-center items-center overflow-hidden"
      id="products"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-1/5 w-32 h-32 bg-[#EC5E65]/8 rounded-full blur-xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.03}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/5 w-40 h-40 bg-[#F7C961]/8 rounded-full blur-2xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.02}px)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-36 h-36 bg-[#90D1E8]/6 rounded-full blur-3xl animate-pulse"
          style={{
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.015}px)`,
          }}
        />
      </div>

      {/* Header Section */}
      <div 
        className={`flex flex-col justify-center text-center mb-10 lg:mb-16 transition-all duration-1000 ${
          isVisible 
            ? "opacity-100 transform translate-y-0" 
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <h2 className="text-[#EC5E65] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
          Our Products
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-[#EC5E65] mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
          See all our project and exclusive products
        </p>
      </div>
      
      {/* Products Grid */}
      <div 
        className={`pt-10 grid justify-between grid-cols-8 lg:grid-cols-12 grid-rows-8 lg:grid-rows-32 text-white w-full gap-2 md:gap-4 max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-300 ${
          isVisible 
            ? "opacity-100 transform translate-y-0" 
            : "opacity-0 transform translate-y-12"
        }`}
      >
        {/* Logo Retro */}
        <div className="group bg-white py-4 col-span-4 lg:col-span-5 row-span-1 lg:row-span-4 rounded-2xl sm:rounded-3xl drop-shadow-lg hover:drop-shadow-xl relative flex justify-center items-center overflow-hidden order-1 lg:order-1 transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src="/images/Steady-Logo-Retro.png"
            alt="logo-retro"
            className="relative z-10 w-4/6 lg:w-1/2 transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* T-Shirt */}
        <div className="group bg-[#F7C961] col-span-4 lg:col-span-4 row-span-2 lg:row-span-8 rounded-2xl md:rounded-3xl drop-shadow-lg hover:drop-shadow-xl relative overflow-hidden flex items-center lg:items-start order-2 lg:order-2 transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F7C961] via-[#F7C961]/90 to-[#F7C961] group-hover:via-[#F7C961] transition-all duration-500"></div>
          <img
            src="/images/products/steady-tshirt.png"
            alt="tshirt"
            className="absolute transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Lanyard */}
        <div className="group bg-[#EC5E65] col-span-4 lg:col-span-3 row-span-2 lg:row-span-8 rounded-2xl md:rounded-3xl drop-shadow-lg hover:drop-shadow-xl relative overflow-hidden order-3 lg:order-3 transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EC5E65] via-[#EC5E65]/90 to-[#EC5E65] group-hover:via-[#EC5E65] transition-all duration-500"></div>
          <img
            src="/images/products/steady-lanyard.png"
            alt="lanyard"
            className="absolute transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Evacuation Sign */}
        <div className="group bg-[#90D1E8] col-span-8 row-span-5 lg:col-span-5 lg:row-span-20 rounded-3xl drop-shadow-lg hover:drop-shadow-xl flex flex-col justify-between left-0 top-0 overflow-hidden order-6 lg:order-4 transition-all duration-500 hover:scale-[1.01]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#90D1E8] via-[#90D1E8]/90 to-[#90D1E8] group-hover:via-[#90D1E8] transition-all duration-500"></div>
          <div className="relative z-10">
            <h1 className="text-white w-1/2 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl drop-shadow-lg font-extrabold m-6 sm:m-8 transition-all duration-500 group-hover:scale-105">
              EVACUATION SIGN
            </h1>
          </div>
          <img
            src="/images/products/steady-evacuation-sign.png"
            alt="evacuation sign"
            className="w-1/2 lg:w-full absolute bottom-0 right-0 lg:left-0 transition-transform duration-700 group-hover:scale-110"
          />
          <button className="group/btn relative z-10 text-black text-base sm:text-lg md:text-xl lg:text-2xl bg-white hover:bg-gray-50 py-3 sm:py-4 px-6 sm:px-8 rounded-full drop-shadow-lg hover:drop-shadow-xl self-start m-6 sm:m-8 transition-all duration-300 hover:scale-105 flex items-center gap-2">
            See More
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Annual Merchandise */}
        <div className="group bg-[#F7C961] col-span-5 lg:col-span-7 row-span-3 lg:row-span-8 rounded-2xl md:rounded-3xl drop-shadow-lg hover:drop-shadow-xl relative flex flex-col justify-between p-6 sm:p-8 overflow-hidden order-7 lg:order-5 transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F7C961] via-[#F7C961]/90 to-[#F7C961] group-hover:via-[#F7C961] transition-all duration-500"></div>
          <h1 className="relative z-10 text-white text-lg sm:text-2xl lg:text-4xl xl:text-5xl drop-shadow-lg font-extrabold transition-all duration-500 group-hover:scale-105">
            OFFICIAL ANNUAL MERCHANDISE
          </h1>
          <button className="group/btn relative z-10 text-black text-base sm:text-lg md:text-xl lg:text-2xl mt-4 lg:mt-0 bg-white hover:bg-gray-50 py-3 sm:py-4 px-6 sm:px-8 rounded-full drop-shadow-lg hover:drop-shadow-xl self-start transition-all duration-300 hover:scale-105 flex items-center gap-2">
            See More
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Stickers */}
        <div className="group bg-[#EC5E65] col-span-4 row-span-1 lg:row-span-8 rounded-2xl md:rounded-3xl drop-shadow-lg hover:drop-shadow-xl relative overflow-hidden order-5 lg:order-6 transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EC5E65] via-[#EC5E65]/90 to-[#EC5E65] group-hover:via-[#EC5E65] transition-all duration-500"></div>
          <img
            src="/images/products/steady-stickers-upscaled.png"
            alt="stickers"
            className="w-full absolute transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Tote Bag */}
        <div className="group bg-[#90D1E8] col-span-4 lg:col-span-3 row-span-2 lg:row-span-8 rounded-2xl lg:rounded-3xl drop-shadow-lg hover:drop-shadow-xl relative overflow-hidden order-4 lg:order-7 transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#90D1E8] via-[#90D1E8]/90 to-[#90D1E8] group-hover:via-[#90D1E8] transition-all duration-500"></div>
          <img
            src="/images/products/steady-tote-bag.png"
            alt="tote-bag"
            className="absolute transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* 2024 Calendars */}
        <div className="group bg-[#EC5E65] col-span-9 row-span-8 rounded-3xl drop-shadow-lg hover:drop-shadow-xl relative overflow-hidden flex flex-col justify-between order-9 lg:order-8 transition-all duration-500 hover:scale-[1.01]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EC5E65] via-[#EC5E65]/90 to-[#EC5E65] group-hover:via-[#EC5E65] transition-all duration-500"></div>
          <h1 className="relative z-10 text-white text-2xl sm:text-3xl lg:text-6xl xl:text-7xl drop-shadow-lg font-extrabold w-1/2 mt-6 sm:mt-8 mx-6 sm:mx-8 transition-all duration-500 group-hover:scale-105">
            2024 CALENDARS
          </h1>
          <img
            src="/images/products/steady-calendars.png"
            alt="calendars"
            className="h-full absolute right-0 transition-transform duration-700 group-hover:scale-110"
          />
          <button className="group/btn relative z-10 text-black text-base sm:text-lg lg:text-xl xl:text-2xl bg-white hover:bg-gray-50 py-3 sm:py-4 px-6 sm:px-8 rounded-full drop-shadow-lg hover:drop-shadow-xl self-start mb-6 sm:mb-8 mx-6 sm:mx-8 mt-4 lg:mt-0 transition-all duration-300 hover:scale-105 flex items-center gap-2">
            See More
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* What's Next */}
        <div className="group bg-white col-span-4 lg:col-span-3 row-span-3 lg:row-span-8 rounded-3xl drop-shadow-lg hover:drop-shadow-xl relative flex flex-col justify-center overflow-hidden order-8 lg:order-9 transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src="/images/products/empty-box.png"
            alt="empty-box"
            className="bottom-0 absolute transition-transform duration-700 group-hover:scale-110"
          />
          <h1 className="relative z-10 text-[#EC5E65] text-lg sm:text-2xl lg:text-4xl xl:text-5xl drop-shadow-lg font-extrabold m-4 lg:m-8 transition-all duration-500 group-hover:scale-105">
            WHAT&apos;S NEXT?
          </h1>
          <button className="group/btn relative z-10 hidden lg:flex items-center gap-2 text-black text-lg xl:text-2xl bg-gray-100 hover:bg-gray-200 py-3 sm:py-4 px-6 sm:px-8 rounded-full drop-shadow-lg hover:drop-shadow-xl self-start m-6 sm:m-8 transition-all duration-300 hover:scale-105">
            Discover
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/40 to-transparent pointer-events-none"></div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}