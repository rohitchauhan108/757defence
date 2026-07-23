'use client';

import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Lightbulb, Scale, ShieldCheck, Award, ArrowRight } from 'lucide-react';

export default function ExperienceTrustSection({ onOpenConsultation, navigate }) {
  return (
    <section className="relative bg-[#0B0A08] text-[#F5F2ED] py-20 px-6 lg:px-8 overflow-hidden border-t border-[#D9AD74]/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid: Left Collage + Right Dark Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ================= LEFT QUADRANT COLLAGE (5 cols on lg) ================= */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 h-full min-h-[460px]">
            
            {/* Top-Left: Gold Quarter-Circle Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#D9AD74] text-[#0F0F0F] p-6 sm:p-8 rounded-tl-[120px] sm:rounded-tl-[180px] flex flex-col items-center justify-center text-center shadow-2xl relative group overflow-hidden"
            >
              <div className="w-14 h-14 rounded-full bg-[#0F0F0F]/10 flex items-center justify-center mb-4 text-[#0F0F0F] group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 stroke-[2.2]" />
              </div>
              <h3 className="font-crimson text-lg sm:text-2xl font-bold uppercase tracking-tight leading-snug max-w-[200px]">
                Our Expertise Is Earned Through Experience
              </h3>
            </motion.div>

            {/* Top-Right: Attorney Image Box 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-tr-md sm:rounded-tr-lg shadow-2xl border border-white/10 group min-h-[220px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
                alt="757 Defense Senior Attorneys in Strategy Session"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            {/* Bottom-Left: Attorney Team Image Box 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-bl-md sm:rounded-bl-lg shadow-2xl border border-white/10 group min-h-[220px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
                alt="757 Defense Trial Lawyers Team"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            {/* Bottom-Right: Gold Quarter-Circle Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#D9AD74] text-[#0F0F0F] p-6 sm:p-8 rounded-br-[120px] sm:rounded-br-[180px] flex flex-col items-center justify-center text-center shadow-2xl relative group overflow-hidden"
            >
              <div className="w-14 h-14 rounded-full bg-[#0F0F0F]/10 flex items-center justify-center mb-4 text-[#0F0F0F] group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 stroke-[2.2]" />
              </div>
              <h3 className="font-crimson text-lg sm:text-2xl font-bold uppercase tracking-tight leading-snug max-w-[200px]">
                Our Elite Team For Your Legal Defense
              </h3>
            </motion.div>

          </div>


          {/* ================= RIGHT DARK CARD WITH CONTENT & 2x2 STATS (6 cols on lg) ================= */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-[#161310] border border-[#D9AD74]/30 rounded-xs p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl"
          >
            {/* Subtle Scale of Justice Watermark Background */}
            <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none">
              <Scale className="w-96 h-96 text-[#D9AD74]" />
            </div>

            {/* Top Row: Title + Floating Action Badge */}
            <div className="space-y-6 relative z-10">
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2">
                  <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.25em] block">
                    TRUSTED VIRGINIA DEFENSE
                  </span>
                  <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F2ED] leading-[1.15]">
                    Experience You Can Trust,<br />
                    Service You Can Count On !
                  </h2>
                </div>

                {/* Call To Action Badge Button */}
                <button
                  onClick={() => onOpenConsultation ? onOpenConsultation() : (navigate && navigate('/contact'))}
                  className="self-start px-5 py-2.5 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold text-[11px] uppercase tracking-widest shadow-md hover:shadow-lg transition-all rounded-xs shrink-0 cursor-pointer flex items-center gap-2"
                >
                  <span>FREE EVALUATION</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Subtitle text */}
              <p className="text-xs sm:text-sm text-[#D8D4CE]/80 font-light leading-relaxed max-w-xl">
                757 Defense delivers aggressive, trial-tested criminal and DUI representation across Virginia Beach, Norfolk, Chesapeake, and Hampton Roads courts. Founded by former prosecutors, we know how the Commonwealth builds its case—and how to protect your freedom.
              </p>

            </div>


            {/* Bottom 2x2 Stats Grid with subtle borders */}
            <div className="grid grid-cols-2 border-t border-[#D9AD74]/20 pt-8 mt-8 relative z-10 gap-y-8 gap-x-6">
              
              {/* Stat 1 */}
              <div className="pr-4 border-r border-[#D9AD74]/20 space-y-1">
                <div className="font-crimson text-3xl sm:text-4xl font-bold text-[#F5F2ED]">
                  1,450+
                </div>
                <div className="text-[11px] sm:text-xs text-[#D8D4CE]/70 uppercase tracking-wider font-light">
                  Cases Defended
                </div>
              </div>

              {/* Stat 2 */}
              <div className="pl-4 space-y-1">
                <div className="font-crimson text-3xl sm:text-4xl font-bold text-[#F5F2ED]">
                  20+
                </div>
                <div className="text-[11px] sm:text-xs text-[#D8D4CE]/70 uppercase tracking-wider font-light">
                  Years Combined Experience
                </div>
              </div>

              {/* Stat 3 */}
              <div className="pr-4 border-r border-t border-[#D9AD74]/20 pt-6 space-y-1">
                <div className="font-crimson text-3xl sm:text-4xl font-bold text-[#F5F2ED]">
                  24/7
                </div>
                <div className="text-[11px] sm:text-xs text-[#D8D4CE]/70 uppercase tracking-wider font-light">
                  Emergency Arrest Hotline
                </div>
              </div>

              {/* Stat 4 */}
              <div className="pl-4 border-t border-[#D9AD74]/20 pt-6 space-y-1">
                <div className="font-crimson text-3xl sm:text-4xl font-bold text-[#F5F2ED]">
                  500+
                </div>
                <div className="text-[11px] sm:text-xs text-[#D8D4CE]/70 uppercase tracking-wider font-light">
                  Full Case Dismissals
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
