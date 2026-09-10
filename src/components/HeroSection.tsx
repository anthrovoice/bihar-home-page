"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full aspect-[1080/360] overflow-hidden shadow-xs">
          <Image
            src="/hero-banner.webp"
            alt="Sahyog Helpline Portal - Government of Bihar"
            fill
            priority
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
