"use client";

import React, { useState } from "react";
import { FileText, Search, Menu, X, ShieldCheck, ChevronRight } from "lucide-react";

export default function Navbar({ onOpenModal }: { onOpenModal: (type: string) => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-blue-500/20 border border-blue-400/30">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl text-slate-900 tracking-tight">
                  Sahyog Helpline
                </span>
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  RTMS
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Government of Bihar • Real Time Monitoring System
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#about" className="hover:text-blue-700 transition-colors py-2">
              About Sahyog
            </a>
            <a href="#features" className="hover:text-blue-700 transition-colors py-2">
              Key Features
            </a>
            <a href="#how-it-works" className="hover:text-blue-700 transition-colors py-2">
              How It Works
            </a>
            <a href="#dashboard" className="hover:text-blue-700 transition-colors py-2 flex items-center gap-1">
              <span>Public Dashboard</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            </a>
            <a href="#contact" className="hover:text-blue-700 transition-colors py-2">
              Contact Us
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenModal("track")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 hover:border-slate-400 transition-all shadow-2xs"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span>Track Complaint</span>
            </button>

            <button
              onClick={() => onOpenModal("register")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs shadow-md shadow-blue-700/25 transition-all hover:scale-[1.02] active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>File Complaint</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 font-medium py-2 border-b border-slate-100"
          >
            About Sahyog
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 font-medium py-2 border-b border-slate-100"
          >
            Key Features
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 font-medium py-2 border-b border-slate-100"
          >
            How It Works
          </a>
          <a
            href="#dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 font-medium py-2 border-b border-slate-100"
          >
            Public Dashboard
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal("track");
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm"
            >
              <Search className="w-4 h-4" />
              <span>Track Complaint</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal("register");
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-700 text-white font-semibold text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>File Complaint</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
