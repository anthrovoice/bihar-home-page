"use client";

import React from "react";
import { PhoneCall, Search, BellRing, MessageSquareHeart, ArrowRight } from "lucide-react";

export default function ActionCards({ onOpenModal }: { onOpenModal: (type: string) => void }) {
  const cards = [
    {
      id: "01",
      title: "Complaint Registration",
      description: "Complaint Online. File your complaint through our digital portal.",
      actionText: "File complaint",
      actionType: "register",
      icon: PhoneCall,
    },
    {
      id: "02",
      title: "Complaint Status",
      description: "Details of proceedings. Know the current status through mobile.",
      actionText: "View Status",
      actionType: "track",
      icon: Search,
    },
    {
      id: "03",
      title: "Send Reminder",
      description: "Failure to take action within stipulated time? Send a reminder.",
      actionText: "Send Reminder",
      actionType: "reminder",
      icon: BellRing,
    },
    {
      id: "04",
      title: "Your Feedback",
      description: "Regarding disposal of complaint. Give your feedback/suggestions.",
      actionText: "Give Feedback",
      actionType: "feedback",
      icon: MessageSquareHeart,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 bg-[#FFF6EF] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1C4D8D] bg-blue-100 px-3.5 py-1 rounded-full">
            Citizen Services Portal
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C4D8D] mt-2">
            Key Quick Services
          </h2>
          <div className="w-16 h-1 bg-[#C35504] mx-auto mt-2 rounded-full"></div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onOpenModal(card.actionType)}
                className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer group flex flex-col justify-between overflow-hidden hover:-translate-y-2"
              >
                {/* Background Large Number Watermark */}
                <span className="absolute top-2 right-4 text-7xl font-extrabold text-slate-100 select-none group-hover:scale-110 group-hover:text-blue-50 transition-all duration-300">
                  {card.id}
                </span>

                <div className="relative z-10">
                  {/* Icon Header Box */}
                  <div className="w-16 h-16 rounded-2xl bg-[#C35504] text-white flex items-center justify-center mb-6 shadow-md shadow-orange-700/20 group-hover:bg-[#1C4D8D] transition-colors">
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#C35504] group-hover:text-[#1C4D8D] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mt-2 font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="relative z-10 pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C35504] group-hover:text-[#1C4D8D] transition-colors flex items-center gap-1.5">
                    <span>{card.actionText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#C35504] group-hover:bg-[#1C4D8D] transition-colors"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
