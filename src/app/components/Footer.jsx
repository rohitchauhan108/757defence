'use client';

import React from 'react';
import { ShieldAlert, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer({ navigate }) {
  return (
    <footer className="bg-[#0B0907] text-[#D8D4CE] pt-16 pb-8 border-t border-[#D9AD74]/20 font-poppins">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Logo & Description */}
          <div className="space-y-4">
            <div 
              onClick={() => navigate('/')} 
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 border border-[#D9AD74] flex items-center justify-center text-[#D9AD74] group-hover:bg-[#D9AD74] group-hover:text-[#0F0F0F] transition-colors rounded-xs">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <span className="font-crimson text-2xl font-extrabold tracking-[0.1em] text-[#F5F2ED]">
                  757 <span className="text-[#D9AD74]">DEFENSE</span>
                </span>
                <p className="text-[8.5px] tracking-[0.2em] text-[#D9AD74] uppercase font-medium -mt-0.5">
                  CRIMINAL & DUI DEFENSE LAWYERS
                </p>
              </div>
            </div>

            <p className="text-xs text-[#D8D4CE]/60 font-light leading-relaxed">
              Top-rated criminal defense law firm serving Virginia Beach, Norfolk, Chesapeake, Portsmouth, Hampton, Newport News, and Eastern District of Virginia courts.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" onClick={(e) => e.preventDefault()} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#D8D4CE]/70 hover:text-[#D9AD74] hover:border-[#D9AD74] transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#D8D4CE]/70 hover:text-[#D9AD74] hover:border-[#D9AD74] transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#D8D4CE]/70 hover:text-[#D9AD74] hover:border-[#D9AD74] transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#D8D4CE]/70 hover:text-[#D9AD74] hover:border-[#D9AD74] transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Core Practice Areas */}
          <div>
            <h3 className="font-crimson text-base font-bold text-[#F5F2ED] uppercase tracking-wider mb-4 border-b border-[#D9AD74]/30 pb-1">
              PRACTICE AREAS
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D8D4CE]/70 font-light">
              {[
                'DUI & DWI Defense',
                'Reckless Driving & Traffic',
                'Domestic Violence & Assault',
                'Drug Crimes & PWID',
                'Violent Crimes & Firearms',
                'Military UCMJ Defense',
                'Expungements & Gun Rights'
              ].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => navigate('/practice-areas')}
                    className="hover:text-[#D9AD74] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-2.5 h-2.5 text-[#D9AD74]" />
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="font-crimson text-base font-bold text-[#F5F2ED] uppercase tracking-wider mb-4 border-b border-[#D9AD74]/30 pb-1">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D8D4CE]/70 font-light">
              {[
                { name: 'About Our Firm', path: '/about' },
                { name: 'Trial Attorney Team', path: '/attorneys' },
                { name: 'Case Victories & Results', path: '/case-results' },
                { name: 'Virginia Legal Blog', path: '/blog' },
                { name: 'Free Confidential Consultation', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <button 
                    onClick={() => navigate(item.path)}
                    className="hover:text-[#D9AD74] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-2.5 h-2.5 text-[#D9AD74]" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Court Locations Gallery */}
          <div>
            <h3 className="font-crimson text-base font-bold text-[#F5F2ED] uppercase tracking-wider mb-4 border-b border-[#D9AD74]/30 pb-1">
              HAMPTON ROADS COURTS
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative group overflow-hidden border border-white/10 rounded-xs">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=200&auto=format&fit=crop" 
                  alt="Virginia Beach Courthouse" 
                  className="w-full h-16 object-cover filter brightness-90 group-hover:scale-105 transition-transform"
                />
                <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[9px] text-[#D9AD74] font-medium text-center py-0.5">VA Beach</span>
              </div>
              <div className="relative group overflow-hidden border border-white/10 rounded-xs">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=200&auto=format&fit=crop" 
                  alt="Norfolk Courthouse" 
                  className="w-full h-16 object-cover filter brightness-90 group-hover:scale-105 transition-transform"
                />
                <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[9px] text-[#D9AD74] font-medium text-center py-0.5">Norfolk</span>
              </div>
              <div className="relative group overflow-hidden border border-white/10 rounded-xs">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=200&auto=format&fit=crop" 
                  alt="Chesapeake Courthouse" 
                  className="w-full h-16 object-cover filter brightness-90 group-hover:scale-105 transition-transform"
                />
                <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[9px] text-[#D9AD74] font-medium text-center py-0.5">Chesapeake</span>
              </div>
              <div className="relative group overflow-hidden border border-white/10 rounded-xs">
                <img 
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=200&auto=format&fit=crop" 
                  alt="Naval Station Norfolk Court" 
                  className="w-full h-16 object-cover filter brightness-90 group-hover:scale-105 transition-transform"
                />
                <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[9px] text-[#D9AD74] font-medium text-center py-0.5">Naval Base</span>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Info Bar */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-[#D8D4CE]/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D9AD74]/10 text-[#D9AD74] flex items-center justify-center border border-[#D9AD74]/30">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#D8D4CE]/50 block font-semibold">24/7 HOTLINE</span>
              <a href="tel:7577573333" className="font-bold text-[#F5F2ED] hover:text-[#D9AD74]">(757) 757-3333</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D9AD74]/10 text-[#D9AD74] flex items-center justify-center border border-[#D9AD74]/30">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#D8D4CE]/50 block font-semibold">EMAIL US</span>
              <a href="mailto:defense@757defense.com" className="font-bold text-[#F5F2ED] hover:text-[#D9AD74]">defense@757defense.com</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D9AD74]/10 text-[#D9AD74] flex items-center justify-center border border-[#D9AD74]/30">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#D8D4CE]/50 block font-semibold">MAIN OFFICE</span>
              <span className="font-bold text-[#F5F2ED]">Virginia Beach & Norfolk, VA</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 text-center space-y-2">
          <p className="text-[11px] text-[#D8D4CE]/40 font-light leading-relaxed max-w-3xl mx-auto">
            Disclaimer: The information on this website is for general informational purposes only and should not be construed as formal legal advice. Case results depend on a variety of factors unique to each case. Prior results do not guarantee a similar outcome.
          </p>
          <p className="text-xs text-[#D8D4CE]/50 font-medium">
            Copyright © 2026 757 Defense Criminal Lawyers. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
