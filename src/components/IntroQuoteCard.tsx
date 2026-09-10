"use client";

import React from "react";
import {
  Quote,
  HeartHandshake,
  Sparkles
} from "lucide-react";

export default function IntroQuoteCard() {
  return (
    <section className="py-12 px-4 sm:px-8 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Citizen Assurance Card */}
        <div className="bg-gradient-to-br from-orange-50/40 via-white to-blue-50/40 border-l-4 border-[#1C4D8D] rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-200/80 relative overflow-hidden">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#C35504] bg-orange-100/90 px-3 py-1 rounded-full">
                For the Citizens of Bihar
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                How Sahyog Portal Works for You
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[#1C4D8D] bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs">
              <Quote className="w-4 h-4 text-amber-500" />
              <span>Your Voice • Government’s Responsibility</span>
            </div>
          </div>

          {/* Citizen-Friendly Description */}
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 text-slate-700 text-xs sm:text-sm leading-relaxed">
            
            <div className="lg:col-span-7 space-y-4 text-justify">
              <p>
                <strong className="text-[#1C4D8D] font-bold">
                  The Sahyog Helpline Portal
                </strong>{" "}
                has been created to give every citizen in Bihar a direct, hassle-free channel to get public grievances resolved without relying on middlemen or visiting government offices repeatedly.
              </p>
              <p>
                Whether you are facing problems with <strong>drinking water supply, broken transformers, electricity billing errors, delayed ration, pension disbursement, school facilities, or local road repairs</strong>, you can file a complaint in minutes. You get a unique tracking number, and your complaint is directly sent to the responsible field officer in your block or district.
              </p>
              <p>
                Our <strong>Citizen Satisfaction Guarantee</strong> ensures that an officer cannot simply close your ticket with paper promises. The officer must submit photo or document evidence showing the work is completed. After resolution, our team contacts you to verify that the problem is genuinely resolved on ground. If you are not satisfied, your complaint is reopened and escalated to senior leadership.
              </p>
            </div>

            {/* Right Callout Box: 3 Simple Citizen Steps */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#1C4D8D] flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>3 Simple Steps to Get Help</span>
                </h4>
                
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-black flex items-center justify-center shrink-0 text-xs">
                      1
                    </span>
                    <div>
                      <strong className="text-slate-900 block">Register Online or Call 1100</strong>
                      <span>Explain your problem or upload photos. Get your Grievance ID on SMS instantly.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-black flex items-center justify-center shrink-0 text-xs">
                      2
                    </span>
                    <div>
                      <strong className="text-slate-900 block">Officer Resolves on Ground</strong>
                      <span>The designated officer must inspect and fix the issue within the legally mandated days.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center shrink-0 text-xs">
                      3
                    </span>
                    <div>
                      <strong className="text-slate-900 block">You Confirm Resolution</strong>
                      <span>We take your feedback. The complaint is closed only after you confirm you are satisfied.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                <span>Free Service For All Citizens</span>
                <span className="text-[#1C4D8D]">Govt. of Bihar</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
