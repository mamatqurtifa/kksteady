/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect } from "react";
import { Calendar, ArrowRight } from "lucide-react";

export default function ActivitiesSection() {
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

    const element = document.getElementById("activities");
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

  const activities = [
    {
      id: 1,
      title: "Weekly Extracurricular",
      date: "Tuesday 23, January 2024",
      description: "Established on 22nd July 2022 Steady is an extracurricular activity at 2 Depok Sleman Vocational High School.",
      image: "/images/steady-activities-1.png",
      buttonColor: "bg-[#90D1E8]",
      hoverColor: "hover:bg-[#90D1E8]/80",
      textColor: "text-black"
    },
    {
      id: 2,
      title: "Offline Meeting",
      date: "Tuesday 23, January 2024",
      description: "Established on 22nd July 2022 Steady is an extracurricular activity at 2 Depok Sleman Vocational High School.",
      image: "/images/steady-activities-2.png",
      buttonColor: "bg-[#F7C961]",
      hoverColor: "hover:bg-[#F7C961]/80",
      textColor: "text-black"
    }
  ];

  return (
    <div
      className="relative mt-16 pt-16 sm:pt-20 lg:pt-32 pb-16 sm:pb-20 lg:pb-32 min-h-screen flex flex-col justify-center items-center overflow-hidden"
      id="activities"
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
      </div>

      {/* Header Section */}
      <div 
        className={`text-center mb-12 lg:mb-20 px-4 transition-all duration-1000 ${
          isVisible 
            ? "opacity-100 transform translate-y-0" 
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <h2 className="text-[#EC5E65] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
          What We Do?
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-[#EC5E65] mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl">
          Let&apos;s discover our activities
        </p>
      </div>

      {/* Activities Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 lg:space-y-24">
          
          {activities.map((activity, index) => (
            <div 
              key={activity.id}
              className={`transition-all duration-1000 delay-${index * 300} ${
                isVisible 
                  ? "opacity-100 transform translate-y-0" 
                  : "opacity-0 transform translate-y-12"
              }`}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12 xl:gap-16`}>
                
                {/* Content Section */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'} text-center lg:text-left`}>
                  <div className="space-y-6">
                    
                    {/* Title */}
                    <div>
                      <h3 className="text-gray-800 text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                        {activity.title}
                      </h3>
                      
                      {/* Date */}
                      <div className={`inline-flex items-center gap-2 text-gray-500 text-sm sm:text-base ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-center w-full lg:w-auto`}>
                        <Calendar className="w-4 h-4" />
                        <span>{activity.date}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      {activity.description}
                    </p>

                    {/* Button */}
                    <div className={`flex ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                      <button 
                        className={`group inline-flex items-center gap-3 ${activity.buttonColor} ${activity.hoverColor} ${activity.textColor} text-base sm:text-lg lg:text-xl font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                      >
                        Read More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 w-full">
                  <div className="relative group transition-all duration-500">
                    {/* Glow Effect - Behind the image */}
                    <div className={`absolute inset-0 ${activity.id === 1 ? 'bg-[#90D1E8]/30' : 'bg-[#F7C961]/30'} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 -z-10`}></div>
                    
                    <img 
                      src={activity.image} 
                      alt={`activity-${activity.id}`}
                      className="relative w-auto h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 mx-auto object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/40 to-transparent pointer-events-none"></div>
    </div>
  );
}