"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import TopBar from "@/components/TopBar";
import HeaderBranding from "@/components/HeaderBranding";
import MainNavbar from "@/components/MainNavbar";
import HeroSection from "@/components/HeroSection";
import GrievanceStats from "@/components/GrievanceStats";
import ActionCards from "@/components/ActionCards";
import TrackWidget from "@/components/TrackWidget";
import FeaturesAndFlow from "@/components/FeaturesAndFlow";
import Footer from "@/components/Footer";
import Modals from "@/components/Modals";

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleOpenModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-[#1C4D8D] selection:text-white">
        {/* 1. Top Governance Bar with Live Language Switcher */}
        <TopBar />

        {/* 2. White Header Branding Section */}
        <HeaderBranding />

        {/* 3. Dark Blue Main Navigation Bar with Dropdowns */}
        <MainNavbar onOpenModal={handleOpenModal} />

        {/* Main Content Body */}
        <main className="flex-1">
          {/* 4. Clean Hero Banner Image */}
          <HeroSection />

          {/* 5. Separate Grievance Stats Component */}
          <GrievanceStats />

          {/* 6. 4 Quick Service Action Cards (01 to 04) */}
          <ActionCards onOpenModal={handleOpenModal} />

          {/* 7. Real-Time Grievance Tracker Widget */}
          <TrackWidget onOpenModal={handleOpenModal} />

          {/* 8. Key Features & How It Works (2-Column Grid) */}
          <FeaturesAndFlow />
        </main>

        {/* 9. Footer & Red Disclaimer Banner */}
        <Footer />

        {/* 10. Interactive Feature Modals */}
        <Modals activeModal={activeModal} onClose={handleCloseModal} />
      </div>
    </LanguageProvider>
  );
}
