"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, FileText, PhoneCall, ShieldCheck, Award } from "lucide-react";

export default function HeroCarousel({ onOpenModal }: { onOpenModal: (type: string) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: "Sahyog Portal - RTMS",
      title: "Real Time Monitoring System for Public Grievances",
      subtitle: "Government of Bihar • Single Window Citizen Redressal",
      description: "Lodge complaints, track real-time proceedings, send reminders, and receive official Action Taken Reports (ATR) directly from state & district nodal officers.",
      bgGradient: "from-blue-900 via-[#1C4D8D] to-slate-900",
      accentColor: "bg-amber-500 text-white",
      tag: "24/7 Helpline 1100",
    },
    {
      id: 2,
      badge: "Time-Bound Disposal",
      title: "SLA-Driven Resolution & Automatic Escalation",
      subtitle: "Ensuring Strict Accountability Across All Line Departments",
      description: "Every complaint is assigned a unique reference ID with defined turnaround timelines. Unresolved grievances automatically escalate to senior administrative authorities.",
      bgGradient: "from-indigo-950 via-[#1E293B] to-[#1C4D8D]",
      accentColor: "bg-emerald-500 text-white",
      tag: "SLA Compliance 100%",
    },
    {
      id: 3,
      badge: "Multi-Channel Assistance",
      title: "Call Toll-Free 1100 or Register Online",
      subtitle: "Accessibility for Every Citizen Across Bihar",
      description: "Available through Voice Calls, IVRS, Web Portal, Mobile App, and WhatsApp integration. Multi-lingual support in Hindi and regional dialects.",
      bgGradient: "from-[#0F172A] via-blue-950 to-[#1C4D8D]",
      accentColor: "bg-blue-500 text-white",
      tag: "Multi-lingual Support",
    },
    {
      id: 4,
      badge: "Vidyarthi & State Sahyog",
      title: "Specialized Educational & Welfare Assistance",
      subtitle: "Dedicated Redressal Framework for Students & Beneficiaries",
      description: "Seamless integration with Vidyarthi Sahyog Karyakram and State Level Sahyog Programs for swift resolution of student & welfare scheme issues.",
      bgGradient: "from-slate-900 via-indigo-900 to-[#C35504]",
      accentColor: "bg-orange-500 text-white",
      tag: "Student Assistance",
    },
  ];

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative overflow-hidden bg-slate-950 text-white min-h-[380px] sm:min-h-[440px] flex items-center">
      
      {/* Slide Content Render */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center ${
            idx === currentSlide ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-95`}></div>

          {/* Decorative Grid Patterns */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

          {/* Slide Main Container */}
          <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full relative z-20 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Text & Actions */}
              <div className="lg:col-span-8 space-y-4">
                
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${slide.accentColor}`}>
                    {slide.badge}
                  </span>
                  <span className="text-xs text-blue-200 font-semibold bg-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
                    {slide.tag}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                  {slide.title}
                </h2>

                <p className="text-xs sm:text-sm text-amber-300 font-bold tracking-wide">
                  {slide.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed font-normal">
                  {slide.description}
                </p>

                {/* Slide Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenModal("register")}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xs shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Register New Complaint</span>
                  </button>

                  <button
                    onClick={() => onOpenModal("track")}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 backdrop-blur-md transition-all cursor-pointer"
                  >
                    <span>Check Proceedings Status</span>
                  </button>
                </div>

              </div>

              {/* Right Column: Decorative Graphic Box */}
              <div className="lg:col-span-4 hidden lg:flex justify-end">
                <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl relative">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/80 flex items-center justify-center text-white font-bold">
                      <ShieldCheck className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                      Official Portal
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-2xl font-black text-white">100% Transparent</div>
                    <div className="text-xs text-slate-300">Monitored directly by Chief Minister Secretariat</div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                    <span>Helpline 1100</span>
                    <span className="text-amber-400 font-bold">8 AM – 8 PM</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      ))}

      {/* Prev / Next Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              idx === currentSlide ? "w-8 bg-amber-400" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
