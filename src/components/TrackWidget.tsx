"use client";

import React, { useState } from "react";
import { Search, ArrowRight, CheckCircle2 } from "lucide-react";

export default function TrackWidget({ onOpenModal }: { onOpenModal: (type: string) => void }) {
  const [complaintId, setComplaintId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (complaintId.trim()) {
      onOpenModal("track");
    }
  };

  return (
    <section className="py-12 px-4 sm:px-8 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Track Your Grievance Progress Real-Time
        </h2>
        <p className="text-blue-200 text-xs sm:text-sm mt-2 max-w-xl mx-auto font-normal">
          Enter your 12-digit Grievance Reference ID or registered Mobile Number to get instant proceedings status.
        </p>

        {/* Input Bar */}
        <form onSubmit={handleSubmit} className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={complaintId}
              onChange={(e) => setComplaintId(e.target.value)}
              placeholder="Enter Grievance Reference ID (e.g. GOB-2026-89412) or Mobile No."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
            />
          </div>

          <button
            type="submit"
            className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95 cursor-pointer"
          >
            <span>Search Status</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Instant SMS Status Query</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Download Action Taken Report (ATR)</span>
          </span>
        </div>

      </div>
    </section>
  );
}
