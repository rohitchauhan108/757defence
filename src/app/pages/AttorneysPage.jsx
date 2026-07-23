'use client';

import React, { useState } from 'react';
import AttorneyCard from '../components/AttorneyCard.jsx';
import AttorneyModal from '../components/AttorneyModal.jsx';
import { attorneys } from '../data/attorneys.js';
import { Users, Search } from 'lucide-react';

export default function AttorneysPage({ onOpenConsultation }) {
  const [selectedAttorney, setSelectedAttorney] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAttorneys = attorneys.filter((a) =>
    a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.practiceAreas.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-[#0F0F0F] text-[#F5F2ED] min-h-screen pb-16 space-y-12 font-sans">
      
      {/* Header */}
      <div className="bg-[#141414] border-b border-white/10 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-3">
          <span className="text-[#D9AD74] text-xs uppercase tracking-[0.3em] font-medium block">
            Firm Partners & Senior Litigators
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F2ED]">Our Legal Leadership</h1>
          <p className="text-[#F5F2ED]/60 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Experienced trial litigators educated at Harvard, Yale, and Georgetown with decades of court victory.
          </p>

          <div className="max-w-md mx-auto pt-4 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search attorney name or practice area..."
              className="w-full bg-[#1A1A1A] border border-white/10 text-[#F5F2ED] placeholder:text-[#F5F2ED]/40 text-xs pl-10 pr-4 py-3 focus:outline-none focus:border-[#D9AD74]"
            />
            <Search className="w-4 h-4 text-[#F5F2ED]/40 absolute left-3.5 top-3.5" />
          </div>
        </div>
      </div>

      {/* Attorney Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAttorneys.map((attorney) => (
            <AttorneyCard
              key={attorney.id}
              attorney={attorney}
              onSelect={setSelectedAttorney}
              onOpenConsultation={onOpenConsultation}
            />
          ))}
        </div>
      </div>

      <AttorneyModal
        attorney={selectedAttorney}
        onClose={() => setSelectedAttorney(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </div>
  );
}
