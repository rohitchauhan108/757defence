'use client';

import React from 'react';
import { Award, CheckCircle2, DollarSign } from 'lucide-react';

export default function CaseResultCard({ result, onOpenConsultation }) {
  return (
    <div className="bg-[#141414] border border-white/10 hover:border-[#D9AD74]/50 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#D9AD74]/5 flex flex-col justify-between group relative font-sans">
      <div>
        {/* Top Victory Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] font-bold text-[#D9AD74] bg-[#D9AD74]/10 px-3 py-1 rounded border border-[#D9AD74]/20 flex items-center gap-1 uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>{result.type} ({result.year})</span>
          </span>
          <span className="text-[11px] text-[#F5F2ED]/50 font-medium uppercase tracking-wider">{result.category}</span>
        </div>

        {/* Financial Amount */}
        <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#F5F2ED] group-hover:text-[#D9AD74] transition-colors mb-2 tracking-tight">
          {result.amount}
        </div>

        <h3 className="text-base font-bold text-[#F5F2ED] mb-2 leading-snug">
          {result.title}
        </h3>

        <p className="text-[#F5F2ED]/60 text-xs font-light leading-relaxed mb-4">
          {result.description}
        </p>
      </div>

      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#F5F2ED]/60">
        <div>
          <span className="text-[10px] uppercase tracking-wider block">Lead Attorney:</span>
          <span className="text-[#F5F2ED] font-semibold block text-xs">{result.leadAttorney}</span>
        </div>
        <button
          onClick={() => onOpenConsultation(result.category)}
          className="text-[10px] font-bold uppercase tracking-widest text-[#D9AD74] hover:underline"
        >
          Evaluate Case →
        </button>
      </div>
    </div>
  );
}
