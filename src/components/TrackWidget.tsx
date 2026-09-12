"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, RotateCw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TrackWidgetProps {
  onOpenModal: (type: string) => void;
}

export default function TrackWidget({ onOpenModal }: TrackWidgetProps) {
  const { t } = useLanguage();
  const [trackingNumber, setTrackingNumber] = useState("2026-000031");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [captchaCode, setCaptchaCode] = useState("xyIs5i");
  const [errorMsg, setErrorMsg] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Generate random 6-character captcha
  const generateNewCaptcha = () => {
    const chars = "abcdefghjkmnpqrstuvwxyz23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setUserCaptcha("");
    setErrorMsg("");
  };

  // Draw captcha onto canvas with stylized wavy text and crossing lines matching screenshot
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#F3F4F6";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Decorative crossing noise lines
    const lineColors = ["#C084FC", "#38BDF8", "#F472B6", "#4ADE80"];
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * 20, Math.random() * canvas.height);
      ctx.bezierCurveTo(
        canvas.width * 0.3, Math.random() * canvas.height,
        canvas.width * 0.7, Math.random() * canvas.height,
        canvas.width - Math.random() * 20, Math.random() * canvas.height
      );
      ctx.strokeStyle = lineColors[i % lineColors.length];
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Render characters with distinct colors and slight tilt
    const charColors = ["#EC4899", "#A855F7", "#0284C7", "#16A34A", "#2563EB", "#7C3AED"];
    const startX = 14;
    const spacing = 18;

    for (let i = 0; i < captchaCode.length; i++) {
      ctx.save();
      const x = startX + i * spacing;
      const y = 28 + (Math.random() * 4 - 2);
      ctx.translate(x, y);
      ctx.rotate((Math.random() * 20 - 10) * (Math.PI / 180));
      ctx.font = "bold 22px 'Courier New', monospace, sans-serif";
      ctx.fillStyle = charColors[i % charColors.length];
      ctx.fillText(captchaCode[i], 0, 0);
      ctx.restore();
    }
  }, [captchaCode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!trackingNumber.trim()) {
      setErrorMsg("Please enter a valid Tracking ID.");
      return;
    }

    if (userCaptcha.trim().toLowerCase() !== captchaCode.toLowerCase()) {
      setErrorMsg("Security code does not match. Please try again.");
      generateNewCaptcha();
      return;
    }

    // Open tracking modal or details
    onOpenModal("track");
  };

  return (
    <section className="py-16 px-4 sm:px-8 bg-[#F4F7FB] relative overflow-hidden" id="track-status">
      <div className="max-w-xl mx-auto text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
          {t.trackWidget.heading}
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-2.5 font-normal max-w-md mx-auto leading-relaxed">
          {t.trackWidget.subheading}
        </p>

        {/* Card Container */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 border border-slate-200/80 text-left">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Field 1: Tracking ID */}
            <div>
              <label className="text-xs sm:text-sm font-bold text-slate-900 mb-2 block">
                {t.trackWidget.trackingIdLabel}
              </label>
              <div className="flex rounded-xl border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-600 focus-within:border-transparent transition-all bg-white">
                <span className="px-4 py-3 bg-[#EBF0F7] text-slate-700 font-bold text-sm border-r border-slate-200 flex items-center justify-center select-none shrink-0">
                  BR-
                </span>
                <input
                  type="text"
                  required
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder={t.trackWidget.trackingIdPlaceholder}
                  className="flex-1 px-4 py-3 text-slate-900 text-sm sm:text-base font-semibold placeholder:text-slate-400 focus:outline-none bg-transparent"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-1.5 font-normal">
                {t.trackWidget.trackingIdFormat}
              </p>
            </div>

            {/* Field 2: Security Code */}
            <div>
              <label className="text-xs sm:text-sm font-bold text-slate-900 mb-2 block">
                {t.trackWidget.securityCodeLabel}
              </label>
              <div className="flex items-center gap-2 sm:gap-2.5">
                {/* User Input */}
                <input
                  type="text"
                  required
                  value={userCaptcha}
                  onChange={(e) => setUserCaptcha(e.target.value)}
                  placeholder={t.trackWidget.securityCodePlaceholder}
                  className="flex-1 min-w-0 px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                />

                {/* Captcha Box */}
                <div className="w-32 h-11 rounded-xl border border-slate-200 overflow-hidden bg-slate-100 flex items-center justify-center shrink-0 select-none shadow-2xs">
                  <canvas ref={canvasRef} width={128} height={44} className="w-full h-full block" />
                </div>

                {/* Refresh Captcha Button */}
                <button
                  type="button"
                  onClick={generateNewCaptcha}
                  title="Reload security code"
                  className="w-11 h-11 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-95 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all shrink-0 cursor-pointer shadow-2xs"
                >
                  <RotateCw className="w-4 h-4" />
                </button>
              </div>

              {/* Error message */}
              {errorMsg && (
                <p className="text-red-600 text-xs mt-1.5 font-medium animate-in fade-in duration-150">
                  {errorMsg}
                </p>
              )}
            </div>

            {/* Track Status Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#14264E] hover:bg-[#0D1A38] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer"
            >
              <Search className="w-4 h-4 text-white" />
              <span>{t.trackWidget.btn}</span>
            </button>
          </form>
        </div>

        {/* Back to Login Link */}
        <div className="mt-6 text-center">
          <a
            href="https://citizen.lumirex.tech/login"
            className="text-sm font-bold text-[#14264E] hover:underline cursor-pointer transition-colors"
          >
            {t.trackWidget.backToLogin}
          </a>
        </div>

      </div>
    </section>
  );
}
