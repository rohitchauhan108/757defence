'use client';

import React from 'react';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  ChevronDown,
  Gavel
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useApp } from '../AppContext.jsx';

export default function PracticeAreasPage() {
  const router = useRouter();
  const { onOpenConsultation } = useApp();
  
  const services = [
    {
      id: 'criminal-defense',
      title: 'Defense Criminal Attorney',
      subtitle: 'Criminal Defense & Car Accident Representation',
      tagline: 'Top defense criminal attorney & Top-rated car accident attorney Virginia',
      path: '/services/criminal-defense',
      icon: (
        <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      accent: 'from-[#0F0E0C] via-[#1A150F] to-[#0F0E0C]',
      features: [
        'Misdemeanor & Felony Charges',
        'Car Accident Representation',
        'Personal Injury Cases'
      ]
    },
    {
      id: 'traffic-ticket',
      title: 'Traffic Ticket Lawyer',
      subtitle: 'Reckless Driving · Speeding · CDL Violations',
      tagline: 'A Good Traffic Ticket Lawyer from 757defense',
      path: '/services/traffic-ticket',
      icon: (
        <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      ),
      accent: 'from-[#1a1410] via-[#0F0E0C] to-[#1a1410]',
      features: [
        'Reckless Driving Defense',
        'Speeding Ticket Reduction',
        'DUI / DWI Traffic Charges'
      ]
    },
    {
      id: 'dui-dwi',
      title: 'DUI / DWI Lawyer',
      subtitle: '1st/2nd/3rd Offense · Breath Test · Felony DUI',
      tagline: 'The Role and Importance of a DUI/DWI Lawyers',
      path: '/services/dui-dwi',
      icon: (
        <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
          <path d="M6 3v2h2l-2.5 9.5A2.5 2.5 0 008 17.5V20h-1v2h6v-2h-1v-2.5a2.5 2.5 0 002.5-2.5L12 5h2V3H6zm10 2v5.5L13.5 19h1l1.25-5H19l.25-3.5h-2.5L17 5zm1.2 5l1.8 2.5H18l-1.05-2.5h.25zM15.3 5l1 4h-1.2l1-4z"/>
        </svg>
      ),
      accent: 'from-[#0F0E0C] via-[#2A1810] to-[#0F0E0C]',
      features: [
        '1st, 2nd, 3rd Offense DUI',
        'Underage & CDL DUI Defense',
        'Military DUI Representation'
      ]
    }
  ];

  return (
    <div className="bg-[#0B0A08] text-[#D8D4CE] min-h-screen font-poppins selection:bg-[#D9AD74] selection:text-[#0F0F0F]">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0F0E0C] text-[#F5F2ED] py-16 md:py-24 overflow-hidden border-b border-[#D9AD74]/20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1600&auto=format&fit=crop"
            alt="Virginia Courtroom - Justice Scales"
            className="w-full h-full object-cover filter brightness-50 contrast-110 opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.3em] block">
              HOME &nbsp;/&nbsp; PRACTICE AREAS
            </span>
            <h1 className="font-crimson text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F2ED] tracking-wide leading-tight">
              Our Legal Services &amp; Practice Areas
            </h1>
            <p className="text-xs sm:text-sm text-[#D8D4CE]/70 font-light max-w-2xl leading-relaxed pt-3">
              757Defense provides aggressive trial-tested representation across Hampton Roads. 
              Below are our three core legal service areas with detailed information about how we fight for you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="bg-[#FAF8F5] text-[#1A1815] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Header */}
          <div className="text-center space-y-3 pb-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D9AD74]/10 border border-[#D9AD74]/30 rounded-xs">
              <Gavel className="w-4 h-4 text-[#D9AD74]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D9AD74]">
                Three Core Practice Areas · Virginia Beach
              </span>
            </span>
            <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12100E] leading-tight">
              Choose the Service That Matches Your Need
            </h2>
            <div className="h-0.5 w-20 bg-[#D9AD74] mx-auto" />
          </div>

          {/* 3 Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {services.map((svc) => (
              <button
                key={svc.id}
                onClick={() => router.push(svc.path)}
                className="group relative text-left overflow-hidden rounded-xs border border-black/10 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top gradient banner */}
                <div className={`relative h-44 bg-gradient-to-br ${svc.accent} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-3 left-3 font-crimson text-[100px] font-extrabold leading-none text-[#D9AD74]">
                      {String(services.indexOf(svc) + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="relative z-10 text-[#D9AD74] group-hover:scale-110 transition-transform duration-500">
                    {svc.icon}
                  </div>
                  {/* Gold top bar */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#D9AD74] via-[#F5F2ED] to-[#D9AD74]" />
                </div>

                <div className="p-7 space-y-5">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D9AD74]">
                      {svc.tagline}
                    </p>
                    <h3 className="font-crimson text-2xl font-extrabold text-[#12100E] leading-snug group-hover:text-[#0F0F0F]">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-[#524E48] font-light leading-snug">
                      {svc.subtitle}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-1">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs text-[#3D3A35] font-light">
                        <div className="w-4 h-4 mt-0.5 shrink-0 rounded-full bg-[#D9AD74]/15 border border-[#D9AD74]/40 flex items-center justify-center">
                          <ChevronDown className="w-2.5 h-2.5 text-[#D9AD74] rotate-[-90deg]" />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 flex items-center justify-between border-t border-black/5 pt-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#524E48]">
                      View Full Service
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#12100E] group-hover:bg-[#D9AD74] text-[#D9AD74] group-hover:text-[#0F0F0F] flex items-center justify-center transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 3. GOLD CTA BANNER */}
      <section className="relative bg-gradient-to-br from-[#D9AD74] via-[#E8C191] to-[#B88D51] py-16 md:py-18 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 select-none pointer-events-none">
          <div className="absolute top-6 left-10 font-crimson text-[120px] font-extrabold leading-none text-black">757</div>
          <div className="absolute bottom-6 right-10 font-crimson text-[120px] font-extrabold leading-none text-black">DEFENSE</div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-crimson text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F0F0F] uppercase tracking-wide leading-tight">
              Need an Attorney Right Now?
            </h2>
            <p className="text-sm sm:text-base text-[#0F0F0F]/80 font-medium mt-1.5 max-w-xl">
              Arrested, ticketed, or under investigation? Our Virginia Beach attorneys are on call 24/7.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a 
              href="tel:7579079075"
              className="flex items-center gap-2.5 px-7 py-4 bg-[#0F0E0C] hover:bg-black text-[#D9AD74] rounded-xs shadow-xl transition-all group"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">(757) 907-9075</span>
            </a>
            <button 
              onClick={() => router.push('/contact')}
              className="flex items-center gap-2.5 px-7 py-4 bg-[#0F0F0F]/10 hover:bg-[#0F0F0F] hover:text-[#D9AD74] text-[#0F0F0F] border-2 border-[#0F0F0F] rounded-xs transition-all group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Contact Us</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
