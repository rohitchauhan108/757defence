'use client';

import React from 'react';
import { Phone, Mail, Award, BookOpen, ArrowRight } from 'lucide-react';

export default function AttorneyCard({ attorney, onSelect, onOpenConsultation }) {
  return (
    <div className="bg-[#141414] border border-white/10 rounded-xl overflow-hidden hover:border-[#D9AD74]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#D9AD74]/5 group flex flex-col justify-between font-sans">
      <div>
        {/* Photo Header */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-[#0F0F0F]">
          <img
            src={attorney.image}
            alt={attorney.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-90" />
          
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#D9AD74] bg-[#141414]/90 backdrop-blur-sm px-2.5 py-1 rounded border border-[#D9AD74]/30">
              {attorney.experienceYears} Years Experience
            </span>
            <span className="text-[9px] uppercase tracking-wider text-[#F5F2ED]/70 bg-[#0F0F0F]/90 px-2 py-1 rounded">
              {attorney.casesCount}+ Cases Won
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#F5F2ED] group-hover:text-[#D9AD74] transition-colors">
              {attorney.name}
            </h3>
            <p className="text-xs text-[#D9AD74] font-medium uppercase tracking-wider">{attorney.role}</p>
          </div>

          <p className="text-[#F5F2ED]/60 text-xs font-light line-clamp-3 leading-relaxed">
            {attorney.bio}
          </p>

          <div className="pt-2 border-t border-white/10">
            <span className="text-[9px] uppercase tracking-widest font-bold text-[#F5F2ED]/40 block mb-1">Focus Areas:</span>
            <div className="flex flex-wrap gap-1">
              {attorney.practiceAreas.map((area, idx) => (
                <span key={idx} className="text-[10px] bg-[#1A1A1A] text-[#F5F2ED]/80 border border-white/5 px-2 py-0.5 rounded">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="p-5 pt-0 border-t border-white/10 mt-2 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelect(attorney)}
          className="text-xs font-bold uppercase tracking-wider text-[#D9AD74] hover:text-[#F5F2ED] flex items-center gap-1"
        >
          <span>Biography</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => onOpenConsultation(`Direct Counsel: ${attorney.name}`)}
          className="text-[10px] font-bold uppercase tracking-widest border border-[#D9AD74] text-[#D9AD74] hover:bg-[#D9AD74] hover:text-[#0F0F0F] px-3 py-1.5 transition-colors"
        >
          Consult
        </button>
      </div>
    </div>
  );
}
