'use client'

import { useState, useEffect } from "react";

export default function PartnersSection() {
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

    const element = document.getElementById("partners");
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

  const partners = [
    {
      id: 1,
      src: "/images/stembayo-logo.png",
      alt: "Stembayo Logo",
      name: "Stembayo",
      glowColor: "bg-[#90D1E8]/20"
    },
    {
      id: 2,
      src: "/images/osis-logo.png",
      alt: "OSIS Logo", 
      name: "OSIS",
      glowColor: "bg-[#F7C961]/20"
    },
    {
      id: 3,
      src: "/images/kk-logo.png",
      alt: "KK Logo",
      name: "Kewirausahaan",
      glowColor: "bg-[#EC5E65]/20"
    }
  ];

  return (
    <div
      className="relative py-16 sm:py-20 lg:py-32 overflow-hidden"
      id="partners"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-1/6 w-28 h-28 bg-[#90D1E8]/8 rounded-full blur-xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.03}px)`,
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/6 w-32 h-32 bg-[#F7C961]/8 rounded-full blur-2xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div 
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible 
              ? "opacity-100 transform translate-y-0" 
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
            Under the auspices of
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-[#EC5E65] mx-auto rounded-full"></div>
        </div>

        {/* Partners Grid - Always 3 in a row */}
        <div 
          className={`grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible 
              ? "opacity-100 transform translate-y-0" 
              : "opacity-0 transform translate-y-12"
          }`}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`group flex flex-col items-center space-y-3 sm:space-y-4 transition-all duration-1000`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Logo Container */}
              <div className="relative transition-all duration-500 group-hover:scale-110">
                {/* Glow Effect */}
                <div className={`absolute inset-0 ${partner.glowColor} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-125 -z-10`}></div>
                
                {/* Logo Image */}
                <div className="relative backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 transition-all duration-500">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Partner Name */}
              <div 
                className={`text-center transition-all duration-500 ${
                  isVisible 
                    ? "opacity-100 transform translate-y-0" 
                    : "opacity-0 transform translate-y-4"
                }`}
                style={{ animationDelay: `${(index * 200) + 400}ms` }}
              >
                <h3 className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base lg:text-lg group-hover:text-gray-900 transition-colors duration-300">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Statement */}
        <div 
          className={`text-center mt-12 sm:mt-16 lg:mt-20 transition-all duration-1000 delay-600 ${
            isVisible 
              ? "opacity-100 transform translate-y-0" 
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Working together to create innovative educational experiences and foster entrepreneurial spirit in our community
          </p>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/40 to-transparent pointer-events-none"></div>
    </div>
  );
}