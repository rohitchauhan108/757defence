'use client';

import React from 'react';
import { 
  Building2, 
  ShieldAlert, 
  Gavel, 
  HeartHandshake, 
  Landmark, 
  Lightbulb, 
  Users, 
  FileCheck,
  ArrowRight,
  Award
} from 'lucide-react';

const iconMap = {
  Building2: Building2,
  ShieldAlert: ShieldAlert,
  Gavel: Gavel,
  HeartHandshake: HeartHandshake,
  Landmark: Landmark,
  Lightbulb: Lightbulb,
  Users: Users,
  FileCheck: FileCheck
};

export default function PracticeAreaCard({ area, onSelect, onOpenConsultation }) {
  const IconComponent = iconMap[area.icon] || Gavel;

  return (
    <div className="bg-[#141414] border border-white/10 rounded-xl p-6 hover:border-[#D9AD74]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#D9AD74]/5 group flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Top Gold Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#D9AD74] opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Header Icon & Title */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-12 h-12 bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#D9AD74] group-hover:bg-[#D9AD74] group-hover:text-[#0F0F0F] transition-colors duration-300">
            <IconComponent className="w-6 h-6 stroke-[2]" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#D9AD74] bg-[#D9AD74]/10 px-2.5 py-1 rounded border border-[#D9AD74]/20">
            {area.stats}
          </span>
        </div>

        <h3 className="font-serif text-xl font-bold text-[#F5F2ED] group-hover:text-[#D9AD74] transition-colors mb-2">
          {area.title}
        </h3>

        <p className="text-[#F5F2ED]/60 text-xs font-light leading-relaxed mb-4">
          {area.shortDescription}
        </p>

        {/* Key Services Preview */}
        <div className="space-y-1.5 mb-6">
          {area.keyServices.slice(0, 3).map((service, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-[#F5F2ED]/80 font-light">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9AD74]" />
              <span className="truncate">{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelect(area)}
          className="text-xs font-bold uppercase tracking-wider text-[#D9AD74] hover:text-[#F5F2ED] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => onOpenConsultation(area.title)}
          className="text-[10px] font-bold uppercase tracking-widest border border-[#D9AD74] text-[#D9AD74] hover:bg-[#D9AD74] hover:text-[#0F0F0F] px-3 py-1.5 transition-colors"
        >
          Consultation
        </button>
      </div>
    </div>
  );
}
