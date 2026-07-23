'use client';

import React from 'react';
import { X, Award, GraduationCap, Building, Phone, Mail, Calendar, CheckCircle2 } from 'lucide-react';

export default function AttorneyModal({ attorney, onClose, onOpenConsultation }) {
  if (!attorney) return null;

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

        {/* Profile Header */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center border-b border-white/10 pb-6">
          <div className="sm:col-span-4 h-48 sm:h-56 rounded-xl overflow-hidden bg-[#0F0F0F] border border-white/10">
            <img
              src={attorney.image}
              alt={attorney.name}
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="sm:col-span-8 space-y-2">
            <span className="text-[10px] font-bold text-[#D9AD74] uppercase tracking-widest bg-[#D9AD74]/10 px-2.5 py-1 rounded border border-[#D9AD74]/20">
              {attorney.experienceYears} Years Legal Practice
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F2ED]">{attorney.name}</h2>
            <p className="text-xs font-semibold text-[#D9AD74] uppercase tracking-wider">{attorney.role}</p>
            
            <div className="pt-2 text-xs space-y-1 text-[#F5F2ED]/70">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D9AD74]" />
                <span>{attorney.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D9AD74]" />
                <span>{attorney.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Bio */}
        <div className="space-y-3">
          <h3 className="font-serif text-lg font-semibold text-[#D9AD74]">Legal Background & Trial Career</h3>
          <p className="text-[#F5F2ED]/70 text-xs font-light leading-relaxed">{attorney.bio}</p>
        </div>

        {/* Credentials & Education */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#D9AD74] font-bold text-xs uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <p className="text-xs text-[#F5F2ED] font-light">{attorney.education}</p>
          </div>

          <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#D9AD74] font-bold text-xs uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>Court Admissions</span>
            </div>
            <p className="text-xs text-[#F5F2ED] font-light">{attorney.admissions}</p>
          </div>
        </div>

        {/* Key Awards & Recognition */}
        <div className="bg-[#0F0F0F] p-4 rounded-xl border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-[#D9AD74] font-bold text-xs uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Honors & Judicial Recognition</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {attorney.awards.map((award, idx) => (
              <span key={idx} className="text-xs bg-[#D9AD74]/15 text-[#D9AD74] border border-[#D9AD74]/30 px-2.5 py-1 rounded">
                {award}
              </span>
            ))}
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
          <div className="text-xs text-[#F5F2ED]/50 hidden sm:block">
            <span>Direct Assistant: +1 (800) 555-0199</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation(`Direct Counsel with ${attorney.name}`);
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold px-6 py-2.5 text-xs uppercase tracking-widest transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Private Counsel</span>
          </button>
        </div>

      </div>
    </div>
  );
}
