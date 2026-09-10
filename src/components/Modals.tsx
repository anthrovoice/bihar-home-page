"use client";

import React, { useState } from "react";
import { X, CheckCircle2, FileText, Search, Bell, Star, Send, ShieldCheck, UserCheck } from "lucide-react";

interface ModalsProps {
  activeModal: string | null;
  onClose: () => void;
}

export default function Modals({ activeModal, onClose }: ModalsProps) {
  const [submitted, setSubmitted] = useState(false);
  const [grievanceId, setGrievanceId] = useState("");

  if (!activeModal) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (!grievanceId) {
      setGrievanceId(`GOB-2026-${Math.floor(10000 + Math.random() * 90000)}`);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setGrievanceId("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content Switch */}

        {/* 1. REGISTER COMPLAINT MODAL */}
        {activeModal === "register" && (
          <div>
            {!submitted ? (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Online Grievance Registration</h3>
                    <p className="text-xs text-slate-500">Sahyog Portal - RTMS • Govt. of Bihar</p>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Full Name of Citizen *</label>
                    <input
                      required
                      type="text"
                      placeholder="Enter citizen full name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-900"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Mobile Number *</label>
                      <input
                        required
                        type="tel"
                        placeholder="10-digit mobile no."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">District *</label>
                      <select required className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-900 bg-white">
                        <option value="">Select District</option>
                        <option value="Patna">Patna</option>
                        <option value="Gaya">Gaya</option>
                        <option value="Muzaffarpur">Muzaffarpur</option>
                        <option value="Bhagalpur">Bhagalpur</option>
                        <option value="Darbhanga">Darbhanga</option>
                        <option value="Purnea">Purnea</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Target Department *</label>
                    <select required className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-900 bg-white">
                      <option value="">Select Department</option>
                      <option value="PHED">Public Health Engineering Dept (PHED)</option>
                      <option value="Energy">Energy Department (Electricity)</option>
                      <option value="UDHD">Urban Development & Housing (UDHD)</option>
                      <option value="Health">Health Department</option>
                      <option value="SocialWelfare">Social Welfare & Pension</option>
                      <option value="Agriculture">Agriculture Department</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Grievance Subject / Title *</label>
                    <input
                      required
                      type="text"
                      placeholder="Brief subject of complaint"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Detailed Description *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe the issue, exact locality, block, or village details..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-900"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Grievance</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Grievance Successfully Registered!</h3>
                <p className="text-xs text-slate-500 mt-2">
                  Your reference ID has been generated and dispatched via SMS.
                </p>
                <div className="mt-4 p-4 rounded-2xl bg-blue-50 border border-blue-200">
                  <div className="text-xs text-blue-600 font-medium">Grievance Reference Number</div>
                  <div className="text-xl font-mono font-extrabold text-blue-900 mt-0.5">{grievanceId}</div>
                </div>
                <button
                  onClick={resetAndClose}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-blue-700 text-white font-semibold text-xs"
                >
                  Done & Close
                </button>
              </div>
            )}
          </div>
        )}

        {/* 2. TRACK STATUS MODAL */}
        {activeModal === "track" && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Track Grievance Status</h3>
                <p className="text-xs text-slate-500">Real-time proceedings check</p>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs mb-6">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Grievance ID or Registered Mobile No.</label>
                <div className="flex gap-2">
                  <input
                    required
                    type="text"
                    defaultValue="GOB-2026-89412"
                    className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 text-slate-900 font-mono font-bold"
                  />
                  <button type="submit" className="px-4 py-2.5 rounded-xl bg-blue-700 text-white font-bold">
                    Check
                  </button>
                </div>
              </div>
            </form>

            {/* Sample Proceedings Timeline */}
            <div className="border-t border-slate-200 pt-4 space-y-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>ID: GOB-2026-89412</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    Resolved
                  </span>
                </div>
                <p className="text-slate-600 text-[11px] mt-1">
                  <strong>Department:</strong> Public Health Engineering Dept (PHED) • Patna
                </p>
                <p className="text-slate-600 text-[11px] mt-0.5">
                  <strong>Subject:</strong> Water Pipeline Leakage Repair at Ward 12
                </p>
              </div>

              {/* Timeline Steps */}
              <div className="space-y-3 px-2 text-xs">
                <div className="flex items-start gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 mt-1 shrink-0"></span>
                  <div>
                    <div className="font-bold text-slate-900">Issue Resolved & ATR Uploaded</div>
                    <div className="text-[10px] text-slate-400">Today, 02:30 PM • Nodal Officer PHED</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mt-1 shrink-0"></span>
                  <div>
                    <div className="font-bold text-slate-900">Dispatched to Field Engineering Team</div>
                    <div className="text-[10px] text-slate-400">Yesterday, 11:15 AM</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-3 h-3 rounded-full bg-slate-300 mt-1 shrink-0"></span>
                  <div>
                    <div className="font-bold text-slate-900">Grievance Registered via Helpline 1100</div>
                    <div className="text-[10px] text-slate-400">08 Sep 2026, 04:20 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. SEND REMINDER MODAL */}
        {activeModal === "reminder" && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Send SLA Reminder</h3>
                <p className="text-xs text-slate-500">Alert officer for pending complaint</p>
              </div>
            </div>

            {!submitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Grievance Reference Number *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. GOB-2026-XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-600 focus:outline-none text-slate-900 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Registered Mobile Number *</label>
                  <input
                    required
                    type="tel"
                    placeholder="10-digit mobile number"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-600 focus:outline-none text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Reminder Reason / Remark</label>
                  <textarea
                    rows={2}
                    placeholder="Action delayed beyond SLA timeframe..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-600 focus:outline-none text-slate-900"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm shadow-md transition-all"
                >
                  Send Official Reminder
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-extrabold text-slate-900 text-base">Reminder Dispatched!</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Automated alert sent to the concerned department Nodal Officer and District Officer.
                </p>
                <button onClick={resetAndClose} className="mt-4 px-5 py-2 rounded-xl bg-purple-700 text-white text-xs font-semibold">
                  Close
                </button>
              </div>
            )}
          </div>
        )}

        {/* 4. FEEDBACK MODAL */}
        {activeModal === "feedback" && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Citizen Satisfaction Feedback</h3>
                <p className="text-xs text-slate-500">Rate your resolution experience</p>
              </div>
            </div>

            {!submitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Grievance ID *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. GOB-2026-89412"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none text-slate-900 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Satisfaction Rating</label>
                  <div className="flex items-center gap-2 justify-center py-2 bg-slate-50 rounded-xl border border-slate-200">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} type="button" className="p-1 text-amber-400 hover:scale-125 transition-transform">
                        <Star className="w-6 h-6 fill-amber-400" />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Suggestions / Feedback Comments</label>
                  <textarea
                    rows={3}
                    placeholder="Share your experience or suggestions..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none text-slate-900"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
                >
                  Submit Feedback
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-extrabold text-slate-900 text-base">Thank You for Your Feedback!</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Your feedback helps the Government of Bihar continuously improve service delivery.
                </p>
                <button onClick={resetAndClose} className="mt-4 px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold">
                  Close
                </button>
              </div>
            )}
          </div>
        )}

        {/* 5. OFFICIAL LOGIN MODAL */}
        {activeModal === "login" && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Official Portal Login</h3>
                <p className="text-xs text-slate-500">For Nodal Officers & Supervisors</p>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Username / Official ID *</label>
                <input
                  required
                  type="text"
                  placeholder="Enter official username"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:outline-none text-slate-900"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Password *</label>
                <input
                  required
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:outline-none text-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
              >
                Sign In to Dashboard
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
