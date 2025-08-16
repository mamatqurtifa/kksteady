"use client";

import { useState, useEffect } from "react";
import { ChevronDown, BookOpen, Megaphone, FileText } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
    
    // Trigger entrance animations
    const timer = setTimeout(() => setIsVisible(true), 300);

    // Mouse tracking for logo interactions
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
      clearTimeout(timer);
      if (typeof window !== 'undefined') {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const scrollToNext = () => {
    if (typeof document !== 'undefined') {
      const nextSection = document.getElementById("about");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Calculate logo transformation based on mouse position when hovered
  const getLogoTransform = () => {
    if (!isLogoHovered || !mounted) return 'translateY(0px) rotateX(0deg) rotateY(0deg) scale(1)';
    
    // Calculate movement based on mouse position (more subtle)
    const moveX = (mousePosition.x - 50) * 0.3; // -15 to +15px
    const moveY = (mousePosition.y - 50) * 0.2; // -10 to +10px
    
    // Calculate rotation based on mouse position (very subtle)
    const rotateX = (mousePosition.y - 50) * 0.1; // -5 to +5 degrees
    const rotateY = (mousePosition.x - 50) * -0.1; // -5 to +5 degrees (inverted)
    
    // Scale slightly when hovered
    const scale = 1.05;
    
    return `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div
      className="relative flex flex-col justify-center items-center min-h-screen pt-16 pb-8 lg:h-auto lg:pt-48 overflow-hidden bg-white"
      id="home"
    >
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8 px-4">
        {/* Logo Container */}
        <div
          className={`relative group transition-all duration-1000 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          {/* Main Logo - Interactive with mouse movement */}
          <div 
            className="relative cursor-pointer"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            {/* Glow effect that appears on hover */}
            <div 
              className={`absolute inset-0 bg-gradient-to-r from-[#EC5E65]/10 via-[#F7C961]/10 to-[#90D1E8]/10 rounded-full blur-3xl transition-all duration-700 ${
                isLogoHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
              }`}
            />
            
            <img
              src="/images/Steady-Main-Logo-Reflect.png"
              alt="Steady Main Logo"
              className="h-32 sm:h-40 md:h-48 lg:h-64 xl:h-80 w-auto max-w-[90vw] relative z-10 transition-all duration-500 ease-out"
              style={{
                transform: getLogoTransform(),
                transformStyle: 'preserve-3d',
              }}
            />
            
            {/* Subtle shadow that appears on hover */}
            <div 
              className={`absolute inset-0 bg-black/5 rounded-full blur-2xl transition-all duration-700 -z-10 ${
                isLogoHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
              style={{
                transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1 + 20}px)`,
              }}
            />
          </div>
        </div>

        {/* Tagline */}
        <div
          className={`text-center space-y-4 transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <h1 className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide leading-tight px-4">
            Stembayo Education Advertising Documentation Society
          </h1>
        </div>

        {/* Interactive Elements - Fixed to single row on mobile */}
        <div
          className={`flex flex-col items-center space-y-6 transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          {/* Stats or Features - Compact mobile layout */}
          <div className="flex justify-center items-center gap-2 sm:gap-4 mt-6 w-full max-w-sm sm:max-w-2xl px-4">
            {[
              { icon: BookOpen, label: "Education", color: "text-[#90D1E8]", bgColor: "bg-[#90D1E8]/10", borderColor: "border-[#90D1E8]/30" },
              {
                icon: Megaphone,
                label: "Advertising",
                color: "text-[#F7C961]",
                bgColor: "bg-[#F7C961]/10",
                borderColor: "border-[#F7C961]/30"
              },
              {
                icon: FileText,
                label: "Documentation",
                color: "text-[#EC5E65]",
                bgColor: "bg-[#EC5E65]/10",
                borderColor: "border-[#EC5E65]/30"
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`group flex flex-col items-center justify-center space-y-1 sm:space-y-2 p-2 sm:p-3 md:p-4 rounded-xl border ${item.borderColor} ${item.bgColor} hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer flex-1 min-w-0`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <IconComponent
                    className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${item.color} group-hover:scale-110 transition-all duration-300`}
                  />
                  <span className={`font-semibold text-xs sm:text-sm md:text-base ${item.color} group-hover:scale-105 transition-all duration-300 text-center`}>
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNext}
            className="group flex flex-col items-center space-y-2 mt-8 transition-all duration-500 hover:transform hover:translate-y-1 cursor-pointer"
          >
            <span className="text-gray-500 text-sm font-medium group-hover:text-[#90D1E8] transition-all duration-300">
              Scroll to explore
            </span>
            <div className="relative">
              <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-[#90D1E8] animate-bounce group-hover:scale-110 transition-all duration-300" />
              <div className="absolute inset-0 bg-[#90D1E8]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

      {/* Custom CSS for smooth transitions */}
      <style jsx>{`
        .logo-container {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}