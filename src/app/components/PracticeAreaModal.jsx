'use client';

import React from 'react';
import { X, CheckCircle2, Shield, User, ArrowRight, Phone, Calendar } from 'lucide-react';

export default function PracticeAreaModal({ area, onClose, onOpenConsultation }) {
  if (!area) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in font-sans">
      <div className="bg-[#141414] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto text-[#F5F2ED] p-6 sm:p-8 relative shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded text-[#F5F2ED]/60 hover:text-[#F5F2ED] hover:bg-white/5 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-white/10 pb-4">
          <span className="text-[#D9AD74] text-[10px] uppercase tracking-[0.3em] font-medium block mb-1">
            Practice Area Profile
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F2ED]">{area.title}</h2>
          <p className="text-[#F5F2ED]/60 text-xs mt-1 font-light">{area.shortDescription}</p>
        </div>

        {/* Full Overview */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg font-semibold text-[#D9AD74]">Strategic Counsel & Representation</h3>
          <p className="text-[#F5F2ED]/70 text-xs font-light leading-relaxed">{area.fullDescription}</p>
        </div>

        {/* Key Legal Services Covered */}
        <div className="bg-[#1A1A1A] p-5 rounded-xl border border-white/10 space-y-3">
          <h4 className="text-xs font-bold text-[#F5F2ED] uppercase tracking-wider">Key Legal Services</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {area.keyServices.map((service, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#F5F2ED]/80 font-light">
                <CheckCircle2 className="w-4 h-4 text-[#D9AD74] shrink-0 mt-0.5" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Benchmark Case & Attorney */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#0F0F0F] p-4 rounded-xl border border-white/10">
            <span className="text-[10px] text-[#D9AD74] uppercase font-bold tracking-widest">Benchmark Victory</span>
            <p className="text-xs text-[#F5F2ED]/80 mt-1 font-light">{area.featuredCase}</p>
          </div>

          <div className="bg-[#0F0F0F] p-4 rounded-xl border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D9AD74]/20 flex items-center justify-center text-[#D9AD74] shrink-0">
              <User className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-[#F5F2ED]/50 uppercase font-bold block">Lead Practice Director</span>
              <span className="text-xs text-[#F5F2ED] font-bold">{area.leadAttorney}</span>
            </div>
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#F5F2ED]/60">
            <span className="block text-[10px] uppercase tracking-wider">Confidential Legal Review</span>
            <span className="block text-[#F5F2ED] font-bold">+1 (800) 555-0199</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation(area.title);
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold px-5 py-2.5 text-xs uppercase tracking-widest transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Free Evaluation</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
