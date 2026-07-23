'use client';

import React, { useState, useEffect } from 'react';
import PracticeAreaCard from '../components/PracticeAreaCard.jsx';
import PracticeAreaModal from '../components/PracticeAreaModal.jsx';
import { practiceAreas } from '../data/practiceAreas.js';
import { Search, Shield, ArrowRight } from 'lucide-react';

export default function PracticeAreasPage({ navigate, onOpenConsultation }) {
  const [selectedArea, setSelectedArea] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAreas = practiceAreas.filter((a) =>
    a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.keyServices.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-[#0F0F0F] text-[#F5F2ED] min-h-screen pb-16 space-y-12 font-sans">
      
      {/* Header */}
      <div className="bg-[#141414] border-b border-white/10 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-3">
          <span className="text-[#D9AD74] text-xs uppercase tracking-[0.3em] font-medium block">
            Practice Directory
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F2ED]">Core Practice Areas</h1>
          <p className="text-[#F5F2ED]/60 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Comprehensive trial litigation, corporate transactions, regulatory defense, and individual advocacy.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto pt-4 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search legal specialties (e.g. M&A, Malpractice, Patents)..."
              className="w-full bg-[#1A1A1A] border border-white/10 text-[#F5F2ED] placeholder:text-[#F5F2ED]/40 text-xs pl-10 pr-4 py-3 focus:outline-none focus:border-[#D9AD74]"
            />
            <Search className="w-4 h-4 text-[#F5F2ED]/40 absolute left-3.5 top-3.5" />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {filteredAreas.length === 0 ? (
          <div className="text-center py-12 text-[#F5F2ED]/50 text-xs font-light">
            No practice areas found matching "{searchQuery}". Call +1 (800) 555-0199 for general legal inquiries.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAreas.map((area) => (
              <PracticeAreaCard
                key={area.id}
                area={area}
                onSelect={setSelectedArea}
                onOpenConsultation={onOpenConsultation}
              />
            ))}
          </div>
        )}
      </div>

      <PracticeAreaModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </div>
  );
}
