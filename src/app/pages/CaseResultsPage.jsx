'use client';

import React, { useState } from 'react';
import CaseResultCard from '../components/CaseResultCard.jsx';
import { caseResults } from '../data/caseResults.js';
import { Award, DollarSign, Filter } from 'lucide-react';

export default function CaseResultsPage({ onOpenConsultation }) {
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Personal Injury', 'Corporate & Commercial', 'Criminal Defense', 'Family Law', 'Intellectual Property', 'Employment Law', 'Real Estate'];

  const filteredResults = filterCategory === 'All'
    ? caseResults
    : caseResults.filter(r => r.category === filterCategory);

  return (
    <div className="bg-[#0F0F0F] text-[#F5F2ED] min-h-screen pb-16 space-y-12 font-sans">
      
      {/* Header */}
      <div className="bg-[#141414] border-b border-white/10 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-3">
          <span className="text-[#D9AD74] text-xs uppercase tracking-[0.3em] font-medium block">
            Landmark Courtroom Victories
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F2ED]">Case Results & Settlements</h1>
          <p className="text-[#F5F2ED]/60 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Over $250 million in trial verdicts and negotiated settlements secured for LawOne clients across New England and federal courts.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider font-semibold transition-colors ${
                  filterCategory === cat
                    ? 'bg-[#D9AD74] text-[#0F0F0F]'
                    : 'bg-[#1A1A1A] text-[#F5F2ED]/60 border border-white/10 hover:text-[#F5F2ED] hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((result) => (
            <CaseResultCard
              key={result.id}
              result={result}
              onOpenConsultation={onOpenConsultation}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
