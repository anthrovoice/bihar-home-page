"use client";

import React, { useState } from "react";
import { Phone, Mail, Globe } from "lucide-react";

export default function TopBar({ onOpenModal }: { onOpenModal: (type: string) => void }) {
  const [lang, setLang] = useState<"hi" | "en">("hi");

  return (
    <div className="bg-[#f8fafc] text-slate-700 text-xs py-2 px-4 sm:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Left Side: Helpline Details */}
        <div className="flex flex-wrap items-center gap-3 font-medium">
          <a
            href="tel:1100"
            className="flex items-center gap-1.5 text-[#1C4D8D] font-bold hover:text-blue-800 transition-colors"
          >
            <span>📞 Helpline:</span>
            <span className="text-blue-700 underline">1100</span>
          </a>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span className="text-slate-600 font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded border border-emerald-200">
            Available 24×7
          </span>
        </div>

        {/* Right Side: Email placeholder & Language Select */}
        <div className="flex items-center gap-4 ml-auto">
          <div className="flex items-center gap-1 text-slate-600 hidden sm:flex">
            <Mail className="w-3.5 h-3.5 text-[#0066B3]" />
            <span className="font-semibold text-[#0066B3]">Email ID:</span>
            <span className="italic text-slate-500">(to be proposed)</span>
          </div>

          <span className="text-slate-300">|</span>

          {/* Language Switcher Dropdown */}
          <div className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-[#1C4D8D]" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as "hi" | "en")}
              className="bg-transparent text-slate-800 font-bold text-xs focus:outline-none cursor-pointer pr-1"
            >
              <option value="hi">Hindi (हिन्दी)</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
}
