'use client'

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("footer");
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

    // Scroll detection for scroll-to-top button
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setShowScrollTop(window.scrollY > 300);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      observer.disconnect();
      if (typeof window !== 'undefined') {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-[#EC5E65]" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-[#EC5E65]" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-[#EC5E65]" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Activities", href: "#activities" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer
      className="relative mt-16 sm:mt-24 lg:mt-32 overflow-hidden"
      id="footer"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/5 w-32 h-32 bg-[#EC5E65]/8 rounded-full blur-xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.03}px)`,
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-[#90D1E8]/8 rounded-full blur-2xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.02}px)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-36 h-36 bg-[#F7C961]/6 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.015}px)`,
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div 
          className={`bg-gradient-to-r from-gray-50 via-white to-gray-50 py-16 sm:py-20 lg:py-24 transition-all duration-1000 ${
            isVisible 
              ? "opacity-100 transform translate-y-0" 
              : "opacity-0 transform translate-y-12"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              
              {/* Brand Section */}
              <div 
                className={`sm:col-span-2 lg:col-span-2 transition-all duration-1000 delay-200 ${
                  isVisible 
                    ? "opacity-100 transform translate-y-0" 
                    : "opacity-0 transform translate-y-8"
                }`}
              >
                {/* Logo with glow effect */}
                <div className="relative group mb-6">
                  <div className="absolute inset-0 bg-[#EC5E65]/15 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110"></div>
                  <img
                    src="/images/Steady-Logo-Small.png"
                    alt="STEADY Logo"
                    className="relative z-10 w-16 sm:w-20 md:w-24 h-auto transition-all duration-700 group-hover:scale-105"
                    style={{
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                    }}
                  />
                </div>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 max-w-md">
                  An extracurricular activity at SMK Negeri 2 Depok Sleman, fostering innovation, creativity, and entrepreneurial spirit among students.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-600 hover:text-[#EC5E65] transition-colors duration-300">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm lg:text-base break-all">steady@smkn2depoksleman.sch.id</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-600 hover:text-[#EC5E65] transition-colors duration-300">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm lg:text-base">+62 274 513503</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 text-gray-600 hover:text-[#EC5E65] transition-colors duration-300">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm lg:text-base">
                      SMK Negeri 2 Depok Sleman<br />
                      Mrican, Caturtunggal, Depok, Sleman
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div 
                className={`transition-all duration-1000 delay-400 ${
                  isVisible 
                    ? "opacity-100 transform translate-y-0" 
                    : "opacity-0 transform translate-y-8"
                }`}
              >
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
                  Quick Links
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-gray-600 hover:text-[#EC5E65] transition-all duration-300 text-xs sm:text-sm lg:text-base hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media */}
              <div 
                className={`transition-all duration-1000 delay-600 ${
                  isVisible 
                    ? "opacity-100 transform translate-y-0" 
                    : "opacity-0 transform translate-y-8"
                }`}
              >
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
                  Follow Us
                </h4>
                <div className="flex flex-col space-y-3 sm:space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`group inline-flex items-center gap-2 sm:gap-3 text-gray-600 ${social.color} transition-all duration-300 hover:scale-105`}
                        aria-label={social.label}
                      >
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm lg:text-base">{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Colored Stripes Section */}
        <div 
          className={`flex h-12 sm:h-16 md:h-20 transition-all duration-1000 delay-800 ${
            isVisible 
              ? "opacity-100 transform scale-y-100" 
              : "opacity-0 transform scale-y-0"
          }`}
        >
          <div className="bg-[#EC5E65] flex-grow relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#EC5E65] via-[#EC5E65]/90 to-[#EC5E65] group-hover:via-[#EC5E65] transition-all duration-500"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="bg-[#F7C961] flex-grow relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F7C961] via-[#F7C961]/90 to-[#F7C961] group-hover:via-[#F7C961] transition-all duration-500"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="bg-[#90D1E8] flex-grow relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#90D1E8] via-[#90D1E8]/90 to-[#90D1E8] group-hover:via-[#90D1E8] transition-all duration-500"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-[#EC5E65] hover:bg-[#EC5E65]/90 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          showScrollTop 
            ? "opacity-100 transform translate-y-0" 
            : "opacity-0 transform translate-y-8 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

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
    </footer>
  );
}