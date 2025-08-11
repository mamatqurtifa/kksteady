'use client'

import { useState, useEffect } from "react";

export default function AboutSection() {
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
      { threshold: 0.3 }
    );

    const element = document.getElementById("about");
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
      className="relative lg:mt-48 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-32 flex justify-center items-center min-h-[90vh] lg:h-auto overflow-hidden"
      id="about"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Background Orbs */}
        <div
          className="absolute top-1/3 left-1/6 w-24 sm:w-32 h-24 sm:h-32 bg-[#F7C961]/10 rounded-full blur-xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.03}px)`,
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/6 w-28 sm:w-36 h-28 sm:h-36 bg-[#90D1E8]/10 rounded-full blur-2xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        />
        <div
          className="absolute top-2/3 right-1/3 w-20 sm:w-28 h-20 sm:h-28 bg-[#EC5E65]/8 rounded-full blur-xl animate-pulse"
          style={{
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.025}px)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:items-center gap-8 lg:gap-12 xl:gap-16">
          
          {/* Logo Section */}
          <div 
            className={`relative group flex-shrink-0 transition-all duration-1000 ${
              isVisible 
                ? "opacity-100 transform translate-x-0" 
                : "opacity-0 transform -translate-x-12"
            }`}
          >
            {/* Logo Glow Effect */}
            <div className="absolute inset-0 bg-[#EC5E65]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110"></div>
            
            <img
              src="/images/Steady-Logo-Retro-Round-Bubble.png"
              alt="Logo Retro Bubble"
              className="relative z-10 w-64 sm:w-72 md:w-80 lg:w-96 h-auto transition-all duration-700 group-hover:scale-105 animate-float"
              style={{
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
              }}
            />
          </div>

          {/* Content Section */}
          <div 
            className={`flex-1 text-center lg:text-left transition-all duration-1000 delay-300 ${
              isVisible 
                ? "opacity-100 transform translate-x-0" 
                : "opacity-0 transform translate-x-12"
            }`}
          >
            {/* About Title */}
            <div className="mb-6 lg:mb-8">
              <h2 className="text-[#EC5E65] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 lg:mb-4">
                About Us
              </h2>
              <div className="w-20 sm:w-24 lg:w-32 h-1 bg-[#EC5E65] mx-auto lg:mx-0 rounded-full"></div>
            </div>

            {/* Content Text */}
            <div className="space-y-4 sm:space-y-6 text-gray-700">
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Established on <span className="font-semibold text-[#90D1E8]">22nd July 2022</span>, 
                Steady is an extracurricular activity at 2 Depok Sleman Vocational High School 
                under the auspices of the Student Council in the skills and entrepreneurship field section.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Our slogan{" "}
                <span className="text-[#EC5E65] font-bold text-lg sm:text-xl lg:text-2xl">
                  &quot;Bring the inside out&quot;
                </span>{" "}
                encapsulates our commitment to make everyone inside and outside understand 
                more about Stembayo and its features.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/60 to-transparent pointer-events-none"></div>
    </div>
  );
}