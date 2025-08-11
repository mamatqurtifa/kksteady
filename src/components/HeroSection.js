"use client";

import { useState, useEffect } from "react";
import { ChevronDown, BookOpen, Megaphone, FileText } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => setIsVisible(true), 300);

    // Mouse tracking for parallax
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    // Scroll tracking for parallax
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative flex flex-col justify-center items-center min-h-screen pt-16 pb-8 lg:h-auto lg:pt-48 overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30"
      id="home"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-steady-red/10 to-steady-blue/10 rounded-full blur-xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${
              mousePosition.y * 0.05
            }px) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`,
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-steady-yellow/10 to-steady-blue/10 rounded-full blur-2xl animate-float"
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
          {/* Logo Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-steady-red/20 via-steady-yellow/20 to-steady-blue/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 animate-pulse"></div>

          {/* Main Logo */}
          <img
            src="/images/Steady-Main-Logo-Reflect.png"
            alt="Steady Main Logo"
            className={`h-36 sm:h-44 md:h-60 lg:h-80 xl:h-96 min-w-[280px] sm:min-w-[340px] transition-all duration-700 group-hover:scale-105 animate-float relative z-10`}
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
          <h1 className="text-steady-grey text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">
            Stembayo Education Advertising Documentation Society
          </h1>

          {/* Subtitle */}
          <p className="text-steady-grey/80 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Empowering minds through innovative education and creative
            documentation
          </p>
        </div>

        {/* Interactive Elements */}
        <div
          className={`flex flex-col items-center space-y-6 transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          {/* Stats or Features */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { icon: BookOpen, label: "Education", color: "text-steady-blue" },
              {
                icon: Megaphone,
                label: "Advertising",
                color: "text-steady-yellow",
              },
              {
                icon: FileText,
                label: "Documentation",
                color: "text-steady-red",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`group flex flex-col items-center space-y-2 p-4 rounded-2xl border-2 border-gray-100/50 bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:border-gray-200/70 hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <IconComponent
                    className={`w-8 h-8 ${item.color} group-hover:scale-125 transition-all duration-300`}
                  />
                  <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNext}
            className="group flex flex-col items-center space-y-2 mt-12 transition-all duration-500 hover:transform hover:translate-y-1 cursor-pointer"
          >
            <span className="text-steady-grey/60 text-sm font-medium group-hover:text-steady-blue transition-all duration-300">
              Scroll to explore
            </span>
            <div className="relative">
              <ChevronDown className="w-8 h-8 text-steady-grey/40 group-hover:text-steady-blue animate-bounce group-hover:scale-110 transition-all duration-300" />
              <div className="absolute inset-0 bg-steady-blue/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>

      {/* Interactive Mouse Trail Effect */}
      <div
        className="fixed w-6 h-6 bg-steady-blue/20 rounded-full blur-sm pointer-events-none z-0 transition-all duration-300"
        style={{
          left: (mousePosition.x * window.innerWidth) / 100 - 12,
          top: (mousePosition.y * window.innerHeight) / 100 - 12,
          opacity: mousePosition.x > 0 ? 0.6 : 0,
        }}
      />
    </div>
  );
}
