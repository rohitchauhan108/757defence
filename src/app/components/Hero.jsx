'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Scale, PhoneCall, Award, CheckCircle2 } from 'lucide-react';
import owner from "../../assets/images/owner.jpg";

export default function Hero({ navigate, onOpenConsultation, onOpenAIAdvisor }) {
  return (
    <section className="relative bg-[#0E0C0A] text-[#F5F2ED] font-poppins pt-8 sm:pt-12 pb-20 lg:pb-28 overflow-hidden border-b border-[#D9AD74]/20">
      
      {/* Background Subtle Columns & Gold Light Glow Texture */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none filter brightness-75" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop')`
        }}
      />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D9AD74]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[460px]">
          
          {/* Left Column: Headline & CTA with Framer Motion */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 pt-2"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#D9AD74] text-xs font-bold uppercase tracking-[0.25em] flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4 text-[#D9AD74]" />
              <span>BEST CRIMINAL LAWYERS IN HAMPTON ROADS</span>
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-crimson text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-[#F5F2ED]"
            >
              CRIMINAL & DUI <br />
              <span className="text-[#D9AD74]">DEFENSE LAWYERS</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[#D8D4CE]/80 text-sm sm:text-base max-w-xl leading-relaxed font-light"
            >
              Relentless trial defense for DUI, Reckless Driving, Domestic Violence, Drug Crimes, Violent Felonies, and Military UCMJ charges across Virginia Beach, Norfolk, and Chesapeake.
            </motion.p>

            {/* Quick Badge List */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-2 gap-3 text-xs text-[#D8D4CE]/90 pt-1 font-medium max-w-md"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9AD74]" />
                <span>24/7 Emergency Case Hotline</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9AD74]" />
                <span>Former Public Defender</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9AD74]" />
                <span>Thousands of Cases Dismissed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9AD74]" />
                <span>Free Confidential Review</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="pt-2 flex items-center gap-4 flex-wrap"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenConsultation) onOpenConsultation();
                }}
                className="px-8 py-3.5 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-poppins font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-2xl hover:scale-105 transform cursor-pointer rounded-xs"
              >
                FREE CASE REVIEW
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenAIAdvisor) onOpenAIAdvisor();
                }}
                className="px-6 py-3.5 border border-[#D9AD74]/50 hover:border-[#D9AD74] text-[#D9AD74] hover:bg-[#D9AD74]/10 font-poppins font-bold text-xs uppercase tracking-[0.15em] transition-all cursor-pointer rounded-xs flex items-center gap-2"
              >
                <span>AI Case Evaluator</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </button>
            </motion.div>

          </motion.div>

          {/* Right Column: Senior Attorney Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-sm lg:max-w-md h-[400px] sm:h-[460px] lg:h-[500px] rounded-xs overflow-hidden border border-[#D9AD74]/30 shadow-2xl bg-[#14120F]">
              <img
                src={owner}
                alt="Anton Karpov, Esq. - Lead Criminal Defense Attorney"
                className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#12100E]/90 border border-[#D9AD74]/30 p-3 rounded-xs backdrop-blur-md">
                <p className="font-crimson text-sm font-bold text-[#F5F2ED] uppercase tracking-wider">
                  ANTON KARPOV, ESQ.
                </p>
                <p className="text-[11px] text-[#D9AD74] font-light">
                  Founder & Lead Defense Attorney • Virginia Beach & Hampton Roads
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Floating Overlapping Bottom Feature Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 lg:-mb-24 relative z-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[#1A1612] border border-[#D9AD74]/30 shadow-2xl rounded-xs divide-y md:divide-y-0 md:divide-x divide-[#D9AD74]/20">
            
            {/* Feature 1 */}
            <div className="p-6 sm:p-7 flex items-center gap-5 hover:bg-[#D9AD74]/5 transition-colors">
              <div className="text-[#D9AD74] p-3 border border-[#D9AD74]/40 rounded-xs shrink-0 bg-[#0E0C0A]">
                <Scale className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-crimson text-base sm:text-lg font-bold text-[#F5F2ED] uppercase tracking-wider">
                  20+ YEARS EXPERIENCE
                </h3>
                <p className="text-[#D8D4CE]/60 text-xs font-light leading-relaxed">
                  William & Mary Law Graduate & former Virginia Beach Public Defender
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-6 sm:p-7 flex items-center gap-5 hover:bg-[#D9AD74]/5 transition-colors">
              <div className="text-[#D9AD74] p-3 border border-[#D9AD74]/40 rounded-xs shrink-0 bg-[#0E0C0A]">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-crimson text-base sm:text-lg font-bold text-[#F5F2ED] uppercase tracking-wider">
                  HUNDREDS OF TRIALS
                </h3>
                <p className="text-[#D8D4CE]/60 text-xs font-light leading-relaxed">
                  Extensive trial litigation in General District & Circuit Courts
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-6 sm:p-7 flex items-center gap-5 hover:bg-[#D9AD74]/5 transition-colors">
              <div className="text-[#D9AD74] p-3 border border-[#D9AD74]/40 rounded-xs shrink-0 bg-[#0E0C0A]">
                <PhoneCall className="w-6 h-6 text-[#D9AD74]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-crimson text-base sm:text-lg font-bold text-[#F5F2ED] uppercase tracking-wider">
                  24/7 CASE HOTLINE
                </h3>
                <p className="text-[#D8D4CE]/60 text-xs font-light leading-relaxed">
                  Immediate emergency legal defense when arrested
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}