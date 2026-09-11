"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X, FileText, UserCheck, HelpCircle, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MainNavbar({ onOpenModal }: { onOpenModal: (type: string) => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t } = useLanguage();

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="bg-[#1C4D8D] text-white shadow-md relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Left Navigation: Exactly Home Page, FAQ, Citizen Services, Online Users */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-semibold">
            
            {/* 1. Home Page */}
            <a
              href="#"
              className="px-4 py-2.5 rounded-lg hover:bg-blue-800/80 transition-colors font-medium text-white"
            >
              {t.navbar.home}
            </a>

            {/* 2. FAQ */}
            <button
              onClick={() => onOpenModal("faq")}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg hover:bg-blue-800/80 transition-colors font-medium text-white cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-blue-200" />
              <span>{t.navbar.faq}</span>
            </button>

            {/* 3. Citizen Services (Dropdown) */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("citizen")}
                className="flex items-center gap-1 px-4 py-2.5 rounded-lg hover:bg-blue-800/80 transition-colors font-medium cursor-pointer"
              >
                <span>{t.navbar.citizenServices}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-white text-slate-800 rounded-xl shadow-xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                <a
                  href="#register"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenModal("register");
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 hover:bg-blue-50 hover:text-blue-700 text-xs font-medium transition-colors"
                >
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>{t.navbar.newComplaint}</span>
                </a>
                <a
                  href="https://citizen.lumirex.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 hover:bg-blue-50 hover:text-blue-700 text-xs font-medium transition-colors"
                >
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                  <span>{t.navbar.registeredUser}</span>
                </a>
              </div>
            </div>

            {/* 4. Online Users */}
            <a
              href="https://citizen.lumirex.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-900/40 hover:bg-blue-900/70 border border-blue-400/30 transition-colors font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>{t.navbar.onlineUsers}</span>
            </a>

          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-800 text-white cursor-pointer ml-auto"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#163c6f] border-t border-blue-800 px-6 py-4 space-y-2 text-xs">
          <a href="#" className="block py-2 text-white font-medium border-b border-blue-800">
            {t.navbar.home}
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal("faq");
            }}
            className="w-full text-left py-2 text-white font-medium border-b border-blue-800 flex items-center gap-2"
          >
            <HelpCircle className="w-4 h-4 text-blue-300" />
            <span>{t.navbar.faq}</span>
          </button>
          <button
            onClick={() => toggleDropdown("mob-citizen")}
            className="w-full flex items-center justify-between py-2 text-white font-medium border-b border-blue-800 cursor-pointer"
          >
            <span>{t.navbar.citizenServices}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {activeDropdown === "mob-citizen" && (
            <div className="pl-4 space-y-2 py-2 text-slate-200">
              <a href="#register" onClick={() => onOpenModal("register")} className="block py-1">
                {t.navbar.newComplaint}
              </a>
              <a href="https://citizen.lumirex.tech/" target="_blank" rel="noopener noreferrer" className="block py-1">
                {t.navbar.registeredUser}
              </a>
            </div>
          )}
          <a
            href="https://citizen.lumirex.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-emerald-300 font-bold flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{t.navbar.onlineUsers}</span>
          </a>
        </div>
      )}
    </nav>
  );
}
