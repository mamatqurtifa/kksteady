"use client";

import { useState, useEffect } from "react";
import { ChevronDown, BookOpen, Megaphone, FileText } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
    
    // Trigger entrance animations
    const timer = setTimeout(() => setIsVisible(true), 300);

    // Mouse tracking for parallax
    const handleMouseMove = (e) => {
      if (typeof window !== 'undefined') {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      }
    };

    // Scroll tracking for parallax
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      clearTimeout(timer);
      if (typeof window !== 'undefined') {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
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

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div
      className="relative flex flex-col justify-center items-center min-h-screen pt-16 pb-8 lg:h-auto lg:pt-48 overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30"
      id="home"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#EC5E65]/10 rounded-full blur-xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${
              mousePosition.y * 0.05
            }px) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`,
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-[#90D1E8]/10 rounded-full blur-2xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${
              mousePosition.y * -0.04
            }px)`,
          }}
        />
      </div>

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
          {/* Main Logo - Responsive sizing */}
          <img
            src="/images/Steady-Main-Logo-Reflect.png"
            alt="Steady Main Logo"
            className={`h-32 sm:h-40 md:h-48 lg:h-64 xl:h-80 w-auto max-w-[90vw] transition-all duration-700 group-hover:scale-105 animate-float relative z-10`}
            style={{
              transform: `translateY(${Math.sin(scrollY * 0.01) * 5}px)`,
            }}
          />
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>

      {/* Interactive Mouse Trail Effect */}
      {typeof window !== 'undefined' && (
        <div
          className="fixed w-6 h-6 bg-[#90D1E8]/20 rounded-full blur-sm pointer-events-none z-0 transition-all duration-300"
          style={{
            left: (mousePosition.x * window.innerWidth) / 100 - 12,
            top: (mousePosition.y * window.innerHeight) / 100 - 12,
            opacity: mousePosition.x > 0 ? 0.6 : 0,
          }}
        />
      )}
    </div>
  );
}