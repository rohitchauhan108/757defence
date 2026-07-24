'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldAlert, 
  Menu, 
  X, 
  MessageSquare
} from 'lucide-react';

export default function Navbar({ currentPath, navigate, onOpenConsultation, onOpenAIAdvisor }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLabels = [
    'HOME',
    'ABOUT',
    'PRACTICE AREAS',
    'CASE RESULTS',
    'ATTORNEYS',
    'NEWS',
    'CONTACT'
  ];

  return (
    <header className="w-full relative z-50 font-poppins bg-[#0E0C0A] border-b border-[#D9AD74]/20">
      {/* Top Bar */}
      <div className="bg-[#070605] text-[#D8D4CE] text-xs py-2 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-6 text-[11px] font-light">
            <a href="tel:7579079075" className="flex items-center gap-2 hover:text-[#D9AD74] transition-colors font-medium">
              <Phone className="w-3.5 h-3.5 text-[#D9AD74]" />
              <span>24/7 Hotline: (757) 907-9075</span>
            </a>
            <a href="mailto:757defense@gmail.com" className="hidden sm:flex items-center gap-2 hover:text-[#D9AD74] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#D9AD74]" />
              <span>757defense@gmail.com</span>
            </a>
            <div className="hidden md:flex items-center gap-2 text-[#D8D4CE]/60">
              <MapPin className="w-3.5 h-3.5 text-[#D9AD74]" />
              <span>2400 Princess Anne Road, Virginia Beach, VA 23456</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAIAdvisor}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-[#D9AD74]/10 hover:bg-[#D9AD74] hover:text-[#0F0F0F] text-[#D9AD74] transition-all border border-[#D9AD74]/30 text-[11px] font-medium rounded-xs cursor-pointer"
            >
              <MessageSquare className="w-3 h-3" />
              <span>AI Case Evaluator</span>
            </button>
            <button
              onClick={() => onOpenConsultation && onOpenConsultation()}
              className="px-3.5 py-1 bg-[#D9AD74] text-[#0F0F0F] hover:bg-[#B88D51] text-[11px] font-bold uppercase tracking-wider transition-colors rounded-xs shadow-sm cursor-pointer"
            >
              Free Case Review
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar Header */}
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          
          {/* Logo */}
          <div className="flex items-center gap-3 select-none">
            <div className="w-10 h-10 border border-[#D9AD74] flex items-center justify-center text-[#D9AD74] rounded-xs">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-crimson text-2xl font-extrabold tracking-[0.1em] text-[#F5F2ED]">
                  757 <span className="text-[#D9AD74]">DEFENSE</span>
                </span>
              </div>
              <p className="text-[8.5px] tracking-[0.2em] text-[#D9AD74] uppercase font-poppins font-medium -mt-1">
                CRIMINAL & DUI LAWYERS • HAMPTON ROADS
              </p>
            </div>
          </div>

          {/* Desktop Nav Labels (Non-clickable static text) */}
          <div className="hidden lg:flex items-center gap-7">
            {navLabels.map((label) => (
              <span
                key={label}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-[#F5F2ED]/70 py-2 cursor-default"
              >
                {label}
              </span>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F2ED] hover:text-[#D9AD74]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Nav Menu (Static text items) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121110] border-t border-[#D9AD74]/20 p-4 space-y-2">
            {navLabels.map((label) => (
              <span
                key={label}
                className="block w-full px-3 py-2 text-xs font-semibold uppercase tracking-widest text-[#F5F2ED]/70 cursor-default"
              >
                {label}
              </span>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}