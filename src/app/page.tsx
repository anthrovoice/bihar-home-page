"use client";

import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import HeaderBranding from "@/components/HeaderBranding";
import MainNavbar from "@/components/MainNavbar";
import HeroSection from "@/components/HeroSection";
import IntroQuoteCard from "@/components/IntroQuoteCard";
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
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-[#1C4D8D] selection:text-white">
      {/* 1. Top Governance Bar */}
      <TopBar onOpenModal={handleOpenModal} />

      {/* 2. White Header Branding Section */}
      <HeaderBranding />

      {/* 3. Dark Blue Main Navigation Bar with Dropdowns */}
      <MainNavbar onOpenModal={handleOpenModal} />

      {/* Main Content Body */}
      <main className="flex-1">
        {/* 4. Hero Section with Banner Image Background, Explanatory Text & Live Metrics */}
        <HeroSection onOpenModal={handleOpenModal} />

        {/* 5. What We Do: Mandate, Rationale & 4 Core Pillars */}
        <IntroQuoteCard />

        {/* 6. 4 Quick Service Action Cards (01 to 04) */}
        <ActionCards onOpenModal={handleOpenModal} />


        {/* 8. Real-Time Grievance Tracker Widget */}
        <TrackWidget onOpenModal={handleOpenModal} />

        {/* 9. Key Features & How It Works (2-Column Grid) */}
        <FeaturesAndFlow />
      </main>

      {/* 10. Footer, Red Disclaimer Banner & Floating AI Assistant */}
      <Footer />

      {/* 11. Interactive Feature Modals */}
      <Modals activeModal={activeModal} onClose={handleCloseModal} />
    </div>
  );
}
