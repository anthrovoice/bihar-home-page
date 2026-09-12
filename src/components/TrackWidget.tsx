"use client";

import React, { useState } from "react";
import { Search, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TrackWidget({ onOpenModal }: { onOpenModal: (type: string) => void }) {
  const [complaintId, setComplaintId] = useState("");
  const { t } = useLanguage();

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
          {t.trackWidget.heading}
        </h2>

        {/* Input Bar */}
        <form onSubmit={handleSubmit} className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={complaintId}
              onChange={(e) => setComplaintId(e.target.value)}
              placeholder={t.trackWidget.placeholder}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
            />
          </div>

          <button
            type="submit"
            className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95 cursor-pointer"
          >
            <span>{t.trackWidget.btn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{t.trackWidget.smsQuery}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{t.trackWidget.downloadAtr}</span>
          </span>
        </div>

      </div>
    </section>
  );
}
