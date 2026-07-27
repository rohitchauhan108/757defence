'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useApp } from '../AppContext.jsx';
import { ShieldAlert, Phone, Printer, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  const router = useRouter();
  const { onOpenConsultation } = useApp();
  return (
    <footer className="bg-[#0B0907] text-[#D8D4CE] pt-16 pb-8 border-t border-[#D9AD74]/20 font-poppins">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Logo & Description */}
          <div className="space-y-4">
            <div 
              onClick={() => router.push('/')} 
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
                  KARPOV LAW, PLLC
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

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-crimson text-base font-bold text-[#F5F2ED] uppercase tracking-wider mb-4 border-b border-[#D9AD74]/30 pb-1">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D8D4CE]/70 font-light">
              {[
                { label: 'HOME', path: '/' },
                { label: 'OUR ATTORNEYS', path: '/attorneys' },
                { label: 'FAQS', path: '/faqs' },
                { label: 'BLOG', path: '/blog' },
                { label: 'CONTACT US', path: '/contact' }
              ].map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => router.push(item.path)}
                    className="hover:text-[#D9AD74] transition-colors cursor-pointer flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-2.5 h-2.5 text-[#D9AD74] group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="font-crimson text-base font-bold text-[#F5F2ED] uppercase tracking-wider mb-4 border-b border-[#D9AD74]/30 pb-1">
              OUR SERVICES
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D8D4CE]/70 font-light">
              {[
                { label: 'Defense Criminal Attorney', path: '/services/criminal-defense' },
                { label: 'Traffic Ticket Lawyer', path: '/services/traffic-ticket' },
                { label: 'DUI/DWI Lawyer', path: '/services/dui-dwi' }
              ].map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => router.push(item.path)}
                    className="hover:text-[#D9AD74] transition-colors cursor-pointer flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-2.5 h-2.5 text-[#D9AD74] group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Details */}
          <div>
            <h3 className="font-crimson text-base font-bold text-[#F5F2ED] uppercase tracking-wider mb-4 border-b border-[#D9AD74]/30 pb-1">
              KARPOV LAW, PLLC
            </h3>
            <div className="space-y-3 text-xs text-[#D8D4CE]/80 font-light">
              <p className="leading-relaxed">
                2400 Princess Anne Road,<br />
                Virginia Beach, VA 23456
              </p>
              <div className="pt-1 space-y-1">
                <p>
                  <strong className="text-[#F5F2ED] font-medium">Phone:</strong>{' '}
                  <a href="tel:7579079075" className="hover:text-[#D9AD74] font-semibold text-[#F5F2ED]">
                    (757) 907-9075
                  </a>
                </p>
                <p>
                  <strong className="text-[#F5F2ED] font-medium">Fax:</strong> (757) 782-9982
                </p>
                <p>
                  <strong className="text-[#F5F2ED] font-medium">Email:</strong>{' '}
                  <a href="mailto:757defense@gmail.com" className="hover:text-[#D9AD74]">
                    757defense@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Info Bar with Both Numbers */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-[#D8D4CE]/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D9AD74]/10 text-[#D9AD74] flex items-center justify-center border border-[#D9AD74]/30">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#D8D4CE]/50 block font-semibold">PHONE (24/7)</span>
              <a href="tel:7579079075" className="font-bold text-[#F5F2ED] hover:text-[#D9AD74]">(757) 907-9075</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D9AD74]/10 text-[#D9AD74] flex items-center justify-center border border-[#D9AD74]/30">
              <Printer className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#D8D4CE]/50 block font-semibold">FAX NUMBER</span>
              <span className="font-bold text-[#F5F2ED]">(757) 782-9982</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D9AD74]/10 text-[#D9AD74] flex items-center justify-center border border-[#D9AD74]/30">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#D8D4CE]/50 block font-semibold">EMAIL ADDRESS</span>
              <a href="mailto:757defense@gmail.com" className="font-bold text-[#F5F2ED] hover:text-[#D9AD74]">757defense@gmail.com</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D9AD74]/10 text-[#D9AD74] flex items-center justify-center border border-[#D9AD74]/30">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#D8D4CE]/50 block font-semibold">LOCATION</span>
              <span className="font-bold text-[#F5F2ED]">2400 Princess Anne Road, Virginia Beach, VA 23456</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Disclaimer */}
        <div className="pt-6 text-center space-y-3">
          <p className="text-[11px] text-[#D8D4CE]/50 font-light leading-relaxed max-w-4xl mx-auto">
            <strong className="text-[#D8D4CE]/70">LEGAL DISCLAIMER:</strong> The use of the internet or the email contact form for communication does not establish an attorney-client relationship. Karpov Law PLLC, and attorney Anton A. Karpov do not guarantee any particular outcome of the representation. Every case is different and fact specific, and the results obtained will be related to the facts and merits of the particular case.
          </p>
          <p className="text-xs text-[#D8D4CE]/40 font-medium">
            757defense is a registered name for Karpov Law PLLC and Pugh and Karpov Law PC. © 2026 757 Defense. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}