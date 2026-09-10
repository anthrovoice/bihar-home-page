"use client";

import React from "react";
import Image from "next/image";
import {
  PhoneCall,
  Search,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ThumbsUp,
  MessageSquareCheck
} from "lucide-react";

export default function HeroSection({ onOpenModal }: { onOpenModal: (type: string) => void }) {
  return (
    <section className="relative bg-[#0b1329] text-white overflow-hidden">
      
      {/* Hero Banner Container with Uploaded Background Image */}
      <div className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center">
        
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-banner.webp"
            alt="Sahyog Helpline Portal - Government of Bihar"
            fill
            priority
            className="object-cover object-center opacity-85"
          />
          {/* Gradients ensuring high legibility while highlighting the visuals */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1329]/95 via-[#0f172a]/80 to-[#0b1329]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-transparent to-[#0b1329]/40"></div>
        </div>

        {/* Foreground Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 relative z-10 w-full">
          <div className="max-w-3xl space-y-5">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Government of Bihar • Single Window Citizen Helpline</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              आपकी आवाज़, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent">
                सरकार की ज़िम्मेदारी
              </span>
            </h1>

            {/* Citizen-First Explanatory Description */}
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
              No need to visit multiple government offices or stand in long queues. Now you can register your complaints, request assistance for public services, and get guaranteed time-bound solutions directly from home.
            </p>

            {/* 3 Citizen Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SMS Updates at Every Step</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Guaranteed Time-Bound Action</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10">
                <ThumbsUp className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Closed Only If You Are Satisfied</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onOpenModal("register")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm shadow-xl shadow-orange-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Register Your Complaint</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenModal("track")}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Search className="w-4 h-4 text-blue-400" />
                <span>Check Complaint Status</span>
              </button>

              <a
                href="tel:1100"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold text-sm hover:bg-emerald-900 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Call Toll-Free 1100</span>
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Live State Grievance Metric Ribbon */}
      <div className="bg-[#0f172a] border-t border-slate-800 px-4 sm:px-8 py-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3.5 text-center">
              <div className="text-xl sm:text-2xl font-black text-blue-400">187</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">Complaints Received Today</div>
              <div className="text-[10px] text-emerald-400 font-bold mt-1">Promptly Registered</div>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3.5 text-center">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">143</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">Resolved Today</div>
              <div className="text-[10px] text-emerald-400 font-bold mt-1">Action Completed</div>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3.5 text-center">
              <div className="text-xl sm:text-2xl font-black text-amber-400">22</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">Under Investigation</div>
              <div className="text-[10px] text-amber-300 font-bold mt-1">Officer Assigned</div>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3.5 text-center">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">0</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">Overdue Issues</div>
              <div className="text-[10px] text-emerald-300 font-bold mt-1">Within Deadline</div>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3.5 text-center">
              <div className="text-xl sm:text-2xl font-black text-purple-400">100%</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">On-Time Disposal</div>
              <div className="text-[10px] text-purple-300 font-bold mt-1">Timely Delivery</div>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3.5 text-center">
              <div className="text-xl sm:text-2xl font-black text-sky-400">3.5 / 5</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">Citizen Satisfaction</div>
              <div className="text-[10px] text-sky-300 font-bold mt-1">Based on Verified Calls</div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
