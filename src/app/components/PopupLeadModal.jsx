'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldAlert, Phone, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

export default function PopupLeadModal({ onOpenConsultation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [practiceArea, setPracticeArea] = useState('DUI & DWI Defense');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if user already dismissed or submitted in this session
    const hasSeenPopup = sessionStorage.getItem('757def_popup_dismissed');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3500); // 3.5 seconds delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('757def_popup_dismissed', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    sessionStorage.setItem('757def_popup_dismissed', 'true');
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
    }, 3500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-poppins">
          
          {/* Backdrop Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg bg-[#0E0C0A] text-[#F5F2ED] border-2 border-[#D9AD74] rounded-xs shadow-2xl overflow-hidden z-10"
          >
            {/* Background Texture & Gold Glow */}
            <div 
              className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none" 
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop')`
              }}
            />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D9AD74]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-[#D9AD74] hover:text-[#0F0F0F] text-[#F5F2ED] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Banner */}
            <div className="p-6 sm:p-8 relative z-10 space-y-4 text-center">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#D9AD74]/10 border border-[#D9AD74]/40 text-[#D9AD74] text-xs font-semibold uppercase tracking-widest">
                <ShieldAlert className="w-4 h-4 text-[#D9AD74]" />
                <span>24/7 VIRGINIA CRIMINAL DEFENSE HOTLINE</span>
              </div>

              <div className="space-y-2">
                <h2 className="font-crimson text-3xl sm:text-4xl font-bold text-[#F5F2ED] leading-tight">
                  Are you facing charges in Hampton Roads Courts?
                </h2>
                <p className="text-xs text-[#D8D4CE]/80 font-light max-w-sm mx-auto">
                 For Legal Consultation, Contact one top ranked Virgina Beach & Norfolk Lawyers.
                </p>
              </div>

              {/* Submitted Confirmation or Form */}
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 space-y-4 text-center bg-[#181512] rounded-xs border border-[#D9AD74]/40 p-6"
                >
                  <div className="w-14 h-14 rounded-full bg-[#D9AD74]/20 border border-[#D9AD74] text-[#D9AD74] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-crimson text-2xl font-bold text-[#F5F2ED]">
                    Request Transmitted!
                  </h3>
                  <p className="text-xs text-[#D8D4CE]/90">
                    Thank you, <strong>{fullName || 'Client'}</strong>. Our senior legal intake team is reviewing your incident details. A 757 Defense attorney will call you within 10 minutes.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-2 text-left">
                  <div>
                    <label className="text-[10px] font-bold text-[#D9AD74] uppercase tracking-wider block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#161310] border border-white/10 rounded-xs px-4 py-3 text-xs text-[#F5F2ED] placeholder-[#F5F2ED]/30 focus:outline-none focus:border-[#D9AD74]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-[#D9AD74] uppercase tracking-wider block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(757) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#161310] border border-white/10 rounded-xs px-4 py-3 text-xs text-[#F5F2ED] placeholder-[#F5F2ED]/30 focus:outline-none focus:border-[#D9AD74]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-[#D9AD74] uppercase tracking-wider block mb-1">
                        Alleged Charge *
                      </label>
                      <select
                        value={practiceArea}
                        onChange={(e) => setPracticeArea(e.target.value)}
                        className="w-full bg-[#161310] border border-white/10 rounded-xs px-3 py-3 text-xs text-[#F5F2ED] focus:outline-none focus:border-[#D9AD74]"
                      >
                        <option value="DUI & DWI Defense">DUI & DWI Defense</option>
                        <option value="Reckless Driving">Reckless Driving</option>
                        <option value="Domestic Violence">Domestic Violence</option>
                        <option value="Drug Crimes">Drug Crimes</option>
                        <option value="Violent Felonies">Violent Felonies</option>
                        <option value="Military UCMJ">Military UCMJ</option>
                        <option value="Expungements">Expungement</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#D8D4CE]/60">
                    <Lock className="w-3.5 h-3.5 text-[#D9AD74]" />
                    <span>Protected by Attorney-Client Privilege</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold text-xs uppercase tracking-[0.2em] transition-all rounded-xs shadow-xl cursor-pointer"
                  >
                    REQUEST FREE CASE REVIEW
                  </button>

                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="text-[11px] text-[#D8D4CE]/50 hover:text-[#D8D4CE] underline transition-colors cursor-pointer"
                    >
                      No thanks, I'll browse the website first
                    </button>
                  </div>
                </form>
              )}

            </div>

            {/* Bottom Hotline Bar */}
            <div className="bg-[#181512] border-t border-[#D9AD74]/20 p-4 text-center flex items-center justify-center gap-3">
              <Phone className="w-4 h-4 text-[#D9AD74]" />
              <span className="text-xs text-[#D8D4CE]">
                24/7 Emergency Hotline: <a href="tel:7577573333" className="text-[#D9AD74] font-bold hover:underline">(757) 757-3333</a>
              </span>
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
