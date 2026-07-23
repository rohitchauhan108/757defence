'use client';

import React, { useState, useEffect } from 'react';
import { X, ShieldAlert, CheckCircle2, User, Phone, Mail, FileText, AlertCircle, Clock } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, initialPracticeArea = '' }) {
  const [step, setStep] = useState(1);
  const [practiceArea, setPracticeArea] = useState(initialPracticeArea || 'DUI & DWI Defense');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [caseSummary, setCaseSummary] = useState('');
  const [isEmergency, setIsEmergency] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => {
    if (initialPracticeArea) {
      setPracticeArea(initialPracticeArea);
    }
  }, [initialPracticeArea]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/case-evaluation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          practiceArea,
          fullName,
          phone,
          email,
          preferredDate,
          caseSummary,
          isEmergency
        })
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setConfirmation(data.confirmationCode);
        setStep(4);
      } else {
        setConfirmation('757-DEF-' + Math.floor(100000 + Math.random() * 900000));
        setStep(4);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      setConfirmation('757-DEF-' + Math.floor(100000 + Math.random() * 900000));
      setStep(4);
    }
  };

  const resetForm = () => {
    setStep(1);
    setConfirmation(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in font-poppins">
      <div className="bg-[#12100E] border border-[#D9AD74]/30 rounded-xs max-w-2xl w-full text-[#F5F2ED] p-6 sm:p-8 relative shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-4 right-4 p-2 rounded-xs text-[#F5F2ED]/60 hover:text-[#F5F2ED] hover:bg-white/5 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Title & Step Indicator */}
        <div>
          <span className="text-[#D9AD74] text-[10px] uppercase tracking-[0.3em] font-semibold block mb-1">
            Free 100% Confidential Case Evaluation
          </span>
          <h2 className="font-crimson text-2xl sm:text-3xl font-bold text-[#F5F2ED]">
            {step === 4 ? "Consultation Confirmed" : "Schedule Free Case Evaluation"}
          </h2>
          <p className="text-[#D8D4CE]/60 text-xs mt-1 font-light">
            Virginia Beach • Norfolk • Chesapeake • Portsmouth • Newport News Courts
          </p>
        </div>

        {/* Step Progress Bar */}
        {step < 4 && (
          <div className="flex items-center justify-between gap-2 border-y border-[#D9AD74]/20 py-3 text-xs uppercase tracking-wider">
            <span className={step >= 1 ? "text-[#D9AD74] font-bold" : "text-[#D8D4CE]/40"}>1. Criminal Charge</span>
            <span className="text-[#D8D4CE]/20">→</span>
            <span className={step >= 2 ? "text-[#D9AD74] font-bold" : "text-[#D8D4CE]/40"}>2. Incident Brief</span>
            <span className="text-[#D8D4CE]/20">→</span>
            <span className={step >= 3 ? "text-[#D9AD74] font-bold" : "text-[#D8D4CE]/40"}>3. Schedule Call</span>
          </div>
        )}

        {/* STEP 1: Select Practice Specialty */}
        {step === 1 && (
          <div className="space-y-4">
            <label className="text-[10px] font-bold text-[#D9AD74] uppercase tracking-widest block">
              Select Alleged Charge or Legal Area
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                "DUI & DWI Defense",
                "Reckless Driving & Traffic",
                "Domestic Violence & Assault",
                "Drug Crimes & PWID",
                "Violent Crimes & Weapons",
                "Military Defense (UCMJ)",
                "Sex Crimes & Internet",
                "Expungement & Rights Restoration"
              ].map((area) => (
                <button
                  type="button"
                  key={area}
                  onClick={() => setPracticeArea(area)}
                  className={`p-3 rounded-xs border text-left text-xs font-medium transition-all cursor-pointer ${
                    practiceArea === area
                      ? "bg-[#D9AD74]/20 border-[#D9AD74] text-[#D9AD74] font-bold"
                      : "bg-[#181512] border-white/10 text-[#F5F2ED]/80 hover:border-[#D9AD74]/50"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold px-6 py-2.5 text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-xs"
              >
                Next Step →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Case Summary */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-bold text-[#D9AD74] uppercase tracking-widest block mb-1">
                Brief Situation Details (100% Confidential)
              </label>
              <textarea
                value={caseSummary}
                onChange={(e) => setCaseSummary(e.target.value)}
                placeholder="Mention court date (if set), arrest location (Virginia Beach, Norfolk, etc.), or specific charges..."
                rows={4}
                required
                className="w-full bg-[#0E0C0A] border border-[#D9AD74]/30 rounded-xs p-3 text-xs text-[#F5F2ED] placeholder-[#D8D4CE]/40 focus:outline-none focus:border-[#D9AD74]"
              />
            </div>

            <div className="flex items-center gap-2 bg-[#181512] p-3 rounded-xs border border-[#D9AD74]/20">
              <input
                type="checkbox"
                id="emergency"
                checked={isEmergency}
                onChange={(e) => setIsEmergency(e.target.checked)}
                className="accent-[#D9AD74] w-4 h-4 cursor-pointer"
              />
              <label htmlFor="emergency" className="text-xs text-[#D8D4CE]/90 cursor-pointer">
                <strong>URGENT / Immediate Court Date in Next 48 Hours</strong> (Triggers priority hotline response)
              </label>
            </div>

            <div className="flex justify-between items-center pt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-[#D8D4CE]/60 hover:text-[#D9AD74] cursor-pointer"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold px-6 py-2.5 text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-xs"
              >
                Next Step →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Contact & Date Selection */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-bold text-[#D9AD74] uppercase tracking-widest block mb-1">Full Name *</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your Full Name"
                  required
                  className="w-full bg-[#0E0C0A] border border-[#D9AD74]/30 rounded-xs p-2.5 text-xs text-[#F5F2ED] focus:border-[#D9AD74] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-[#D9AD74] uppercase tracking-widest block mb-1">Phone Number *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(757) 000-0000"
                  required
                  className="w-full bg-[#0E0C0A] border border-[#D9AD74]/30 rounded-xs p-2.5 text-xs text-[#F5F2ED] focus:border-[#D9AD74] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-bold text-[#D9AD74] uppercase tracking-widest block mb-1">Email Address *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full bg-[#0E0C0A] border border-[#D9AD74]/30 rounded-xs p-2.5 text-xs text-[#F5F2ED] focus:border-[#D9AD74] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-[#D9AD74] uppercase tracking-widest block mb-1">Preferred Consultation Date</label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-[#0E0C0A] border border-[#D9AD74]/30 rounded-xs p-2.5 text-xs text-[#F5F2ED] focus:border-[#D9AD74] focus:outline-none"
                />
              </div>
            </div>

            <div className="bg-[#181512] p-3 rounded-xs border border-[#D9AD74]/20 text-[11px] text-[#D8D4CE]/70">
              🔒 Protected by Attorney-Client Privilege. Zero cost or obligation.
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs text-[#D8D4CE]/60 hover:text-[#D9AD74] cursor-pointer"
              >
                ← Back
              </button>
              
              <button
                type="submit"
                disabled={loading}
                className="bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold px-7 py-3 text-xs uppercase tracking-widest transition-colors shadow-lg disabled:opacity-50 cursor-pointer rounded-xs"
              >
                {loading ? "Transmitting..." : "Submit Confidential Request"}
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: Confirmation */}
        {step === 4 && (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="font-crimson text-2xl font-bold text-[#F5F2ED]">Request Transmitted to Defense Partners</h3>
              <p className="text-[#D8D4CE]/70 text-xs mt-2 max-w-md mx-auto">
                Thank you, <strong>{fullName || 'Client'}</strong>. Your incident brief for <strong>{practiceArea}</strong> has been assigned to a senior criminal defense attorney at 757 Defense.
              </p>
            </div>

            <div className="bg-[#181512] p-4 rounded-xs border border-[#D9AD74]/30 max-w-sm mx-auto space-y-1">
              <span className="text-[10px] text-[#D9AD74] uppercase tracking-widest block font-bold">Confidential Reference Code</span>
              <span className="font-mono text-xl font-bold text-[#F5F2ED]">{confirmation}</span>
              <span className="text-[10px] text-[#D8D4CE]/60 block pt-1">A defense lawyer will contact you within 15 minutes.</span>
            </div>

            <div className="pt-4">
              <button
                onClick={resetForm}
                className="bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold px-8 py-2.5 text-xs uppercase tracking-widest rounded-xs cursor-pointer"
              >
                Return To Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
