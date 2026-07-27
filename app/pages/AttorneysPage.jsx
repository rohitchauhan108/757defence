'use client';

import React from 'react';
import { attorneys } from '../data/attorneys.js';
import { 
  Phone, 
  Mail, 
  Gavel, 
  Award, 
  GraduationCap, 
  ShieldAlert, 
  Wine, 
  ArrowRight,
  MapPin,
  CheckCircle2,
  Scale
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useApp } from '../AppContext.jsx';

export default function AttorneysPage() {
  const router = useRouter();
  const { onOpenConsultation } = useApp();
  const anton = attorneys.find(a => a.id === 'anton-karpov');
  const gregory = attorneys.find(a => a.id === 'gregory-pugh');

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <div className="bg-[#0B0A08] text-[#D8D4CE] font-poppins selection:bg-[#D9AD74] selection:text-[#0F0F0F]">
      
      {/* ============================================================
           1. TOP HERO BANNER
      ============================================================ */}
      <section className="relative bg-[#0F0E0C] text-[#F5F2ED] py-16 md:py-24 overflow-hidden border-b border-[#D9AD74]/20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop"
            alt="Virginia Supreme Court"
            className="w-full h-full object-cover filter brightness-50 contrast-110 opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.3em] block">
              HOME &nbsp;/&nbsp; OUR ATTORNEYS
            </span>
            <h1 className="font-crimson text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F2ED] tracking-wide">
              Our Attorneys
            </h1>
            <p className="text-xs sm:text-sm text-[#D8D4CE]/70 font-light max-w-2xl leading-relaxed pt-3">
              Meet the experienced Virginia Beach trial lawyers at 757 Defense. 
              Former Public Defenders and decorated advocates with decades of combined 
              courtroom experience fighting for your freedom.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
           2. ANTON KARPOV PROFILE SECTION
      ============================================================ */}
      {anton && (
        <section className="bg-[#FAF8F5] text-[#1A1815] py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* LEFT: Attorney Photo */}
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#D9AD74] rounded-xs -z-0" />
                  <div className="relative w-full h-[480px] sm:h-[540px] rounded-xs overflow-hidden shadow-2xl border border-black/10">
                    <img 
                      src={anton.image}
                      alt={anton.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop";
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute left-0 right-0 bottom-0 p-6 text-white">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[#D9AD74] font-bold mb-1">
                        Founding Partner
                      </p>
                      <h2 className="font-crimson text-2xl sm:text-3xl font-extrabold tracking-wide">
                        ANTON KARPOV, ESQ.
                      </h2>
                    </div>
                  </div>

                  {/* Floating Experience Badge */}
                  <div className="absolute -right-4 sm:-right-6 top-6 bg-[#0F0E0C] text-[#F5F2ED] border border-[#D9AD74] p-4 sm:p-5 shadow-2xl rounded-xs max-w-[160px]">
                    <div className="text-[#D9AD74] font-crimson text-4xl sm:text-5xl font-extrabold leading-none">
                      {anton.experienceYears}+
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-[#D8D4CE]/70 font-semibold mt-1">
                      Years Experience
                    </div>
                  </div>
                </div>

                {/* Quick Info Cards */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-[#0F0E0C] p-4 rounded-xs border border-white/5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <GraduationCap className="w-4 h-4 text-[#D9AD74] shrink-0" />
                      <p className="text-[10px] uppercase tracking-wider text-[#D9AD74] font-bold">Education</p>
                    </div>
                    <p className="text-xs text-white/80 leading-snug font-light">
                      William & Mary Law School, 2006
                    </p>
                  </div>
                  <div className="bg-[#0F0E0C] p-4 rounded-xs border border-white/5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Scale className="w-4 h-4 text-[#D9AD74] shrink-0" />
                      <p className="text-[10px] uppercase tracking-wider text-[#D9AD74] font-bold">Career Start</p>
                    </div>
                    <p className="text-xs text-white/80 leading-snug font-light">
                      Public Defender, Virginia Beach (12 yrs)
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT: Bio & Details */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D9AD74]/10 border border-[#D9AD74]/30 rounded-xs">
                    <Award className="w-3.5 h-3.5 text-[#D9AD74]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#D9AD74] font-bold">
                      Top Criminal Defense Attorney · Hampton Roads
                    </span>
                  </div>
                  <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12100E] leading-tight">
                    {anton.displayName}
                  </h2>
                  <div className="h-0.5 w-20 bg-[#D9AD74]" />
                </div>

                {/* Bio Paragraphs (EXACT COPY) */}
                <div className="space-y-4 text-sm sm:text-[15px] text-[#3D3A35] font-light leading-relaxed">
                  <p>
                    Attorney Anton Karpov obtained his Law Degree in 2006 from William & Mary Law School.
                  </p>
                  <p>
                    He began his legal career as a Public Defender in Virginia Beach. For twelve years, he fought fiercely and passionately for each client, tried hundreds of criminal cases, argued legal motions in the Juvenile and Domestic, General District and Circuit Courts of Virginia Beach, and argued appellate cases before the Virginia Court of Appeals and Supreme Court of Virginia.
                  </p>
                  <p>
                    Attorney Karpov specializes in Criminal and Traffic Defense and Personal Injury cases and is considered one of the best criminal defense attorneys in the area.
                  </p>
                </div>

                {/* Practice Areas Tags */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#D9AD74] font-bold mb-3">
                    Practice Areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {anton.practiceAreas.map((area) => (
                      <span 
                        key={area}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#12100E] text-[#F5F2ED] border border-[#D9AD74]/30 text-[11px] font-semibold uppercase tracking-wider rounded-xs"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#D9AD74]" />
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Awards / Highlights */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#D9AD74] font-bold mb-3">
                    Career Highlights
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {anton.awards.map((award) => (
                      <div key={award} className="flex items-start gap-2.5 p-3 bg-white border border-black/5 rounded-xs">
                        <div className="w-5 h-5 shrink-0 rounded-full bg-[#D9AD74] flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-[#0F0F0F] stroke-[3]" />
                        </div>
                        <p className="text-xs font-medium text-[#3D3A35] leading-snug">{award}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Row */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a 
                    href={`tel:${anton.phone.replace(/\D/g,'')}`}
                    className="flex items-center gap-2.5 px-5 py-3 bg-[#0F0E0C] hover:bg-[#1a1714] text-white rounded-xs border border-[#D9AD74]/30 transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-[#D9AD74] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-wider">{anton.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${anton.email}`}
                    className="flex items-center gap-2.5 px-5 py-3 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] rounded-xs transition-colors group"
                  >
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-wider">Email Attorney</span>
                  </a>
                  <button 
                    onClick={() => onOpenConsultation && onOpenConsultation()}
                    className="flex items-center gap-2.5 px-5 py-3 bg-[#12100E] hover:bg-[#D9AD74] hover:text-[#0F0F0F] text-white rounded-xs border-2 border-[#12100E] hover:border-[#D9AD74] transition-all group"
                  >
                    <Gavel className="w-4 h-4 text-[#D9AD74] group-hover:text-[#0F0F0F]" />
                    <span className="text-xs font-bold uppercase tracking-wider">Free Consultation</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ============================================================
           3. GREGORY K. PUGH PROFILE SECTION (DARK BG FOR CONTRAST)
      ============================================================ */}
      {gregory && (
        <section className="bg-[#0E0C0A] text-[#F5F2ED] py-20 px-6 lg:px-8 border-t border-[#D9AD74]/20">
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* LEFT: Bio & Details (swapped order for desktop) */}
              <div className="lg:col-span-7 lg:order-1 space-y-6">
                
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D9AD74]/10 border border-[#D9AD74]/30 rounded-xs">
                    <GraduationCap className="w-3.5 h-3.5 text-[#D9AD74]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#D9AD74] font-bold">
                      Master of Laws (LLM) · William & Mary
                    </span>
                  </div>
                  <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F2ED] leading-tight">
                    {gregory.displayName}
                  </h2>
                  <div className="h-0.5 w-20 bg-[#D9AD74]" />
                </div>

                {/* Bio Paragraphs (EXACT COPY) */}
                <div className="space-y-4 text-sm sm:text-[15px] text-[#D8D4CE]/80 font-light leading-relaxed">
                  <p>
                    Attorney Gregory Pugh obtained his Juris Doctor degree from Pettit College of Law at Ohio Northern University in 1981 and an advanced Master of Laws Degree (LLM) was awarded to him by the Law School at the College of William and Mary in 1991.
                  </p>
                  <p>
                    He has actively practiced in Virginia courts since 1988 and opened his own practice in 1996, specializing in civil litigation, bankruptcy, traffic, and criminal defense.
                  </p>
                </div>

                {/* Practice Areas Tags */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#D9AD74] font-bold mb-3">
                    Practice Areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {gregory.practiceAreas.map((area) => (
                      <span 
                        key={area}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#FAF8F5]/5 text-[#F5F2ED] border border-[#D9AD74]/30 text-[11px] font-semibold uppercase tracking-wider rounded-xs"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#D9AD74]" />
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#D9AD74] font-bold mb-3">
                    Career Milestones
                  </p>
                  <div className="space-y-3">
                    {[
                      { year: "1981", text: "Juris Doctor — Pettit College of Law, Ohio Northern University" },
                      { year: "1988", text: "Active Practice in Virginia Courts Begins" },
                      { year: "1991", text: "Master of Laws (LLM) — College of William and Mary Law School" },
                      { year: "1996", text: "Opened Independent Private Practice — Criminal, Civil, Bankruptcy & Traffic" }
                    ].map((item) => (
                      <div key={item.year} className="flex items-start gap-4">
                        <div className="w-16 shrink-0 font-crimson text-xl font-extrabold text-[#D9AD74] pt-0.5">
                          {item.year}
                        </div>
                        <div className="flex-1 pb-3 border-l-2 border-[#D9AD74]/20 pl-5 relative">
                          <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#D9AD74] border-2 border-[#0E0C0A]" />
                          <p className="text-xs sm:text-sm text-[#D8D4CE]/80 leading-relaxed font-light">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Row */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a 
                    href={`tel:${gregory.phone.replace(/\D/g,'')}`}
                    className="flex items-center gap-2.5 px-5 py-3 bg-[#FAF8F5]/5 hover:bg-[#D9AD74]/10 text-white rounded-xs border border-[#D9AD74]/30 hover:border-[#D9AD74] transition-all group"
                  >
                    <Phone className="w-4 h-4 text-[#D9AD74] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-wider">{gregory.phone}</span>
                  </a>
                  <button 
                    onClick={() => onOpenConsultation && onOpenConsultation()}
                    className="flex items-center gap-2.5 px-5 py-3 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] rounded-xs transition-colors group"
                  >
                    <Gavel className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-wider">Request Consultation</span>
                  </button>
                </div>
              </div>

              {/* RIGHT: Attorney Photo */}
              <div className="lg:col-span-5 lg:order-2">
                <div className="relative">
                  <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#D9AD74] rounded-xs -z-0" />
                  <div className="relative w-full h-[480px] sm:h-[540px] rounded-xs overflow-hidden shadow-2xl border border-[#D9AD74]/20">
                    <img 
                      src={gregory.image}
                      alt={gregory.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute left-0 right-0 bottom-0 p-6 text-white">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[#D9AD74] font-bold mb-1">
                        Senior Partner
                      </p>
                      <h2 className="font-crimson text-2xl sm:text-3xl font-extrabold tracking-wide">
                        {gregory.displayName}
                      </h2>
                    </div>
                  </div>

                  {/* Floating Experience Badge */}
                  <div className="absolute -left-4 sm:-left-6 top-6 bg-[#FAF8F5] text-[#12100E] border border-[#D9AD74] p-4 sm:p-5 shadow-2xl rounded-xs max-w-[160px]">
                    <div className="text-[#D9AD74] font-crimson text-4xl sm:text-5xl font-extrabold leading-none">
                      {gregory.experienceYears}+
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-[#524E48] font-bold mt-1">
                      Years Practicing
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="mt-6 space-y-3">
                  <div className="bg-[#FAF8F5]/5 p-4 rounded-xs border border-white/5 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#D9AD74] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#D9AD74] font-bold mb-0.5">Admission</p>
                      <p className="text-xs text-[#D8D4CE]/80 leading-snug font-light">
                        {gregory.admissions}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* ============================================================
           4. CTA BANNER: FIGHTING FOR BEST OUTCOME (EXACT COPY)
      ============================================================ */}
      <section className="relative bg-gradient-to-br from-[#D9AD74] via-[#E8C191] to-[#B88D51] py-16 md:py-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-[120px] font-crimson font-extrabold text-black leading-none select-none">
            757
          </div>
          <div className="absolute bottom-10 right-10 text-[120px] font-crimson font-extrabold text-black leading-none select-none">
            DEFENSE
          </div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/20 border border-black/20 rounded-full">
            <ShieldAlert className="w-4 h-4 text-black" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-black font-bold">
              Aggressive · Experienced · Trial-Ready
            </span>
          </div>
          
          <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0F0F0F] uppercase tracking-wide leading-tight">
            Fighting for the Best Outcome <br className="hidden sm:block" />
            on Criminal &amp; Traffic Charges
          </h2>

          <div className="pt-4 pb-2">
            <a 
              href="tel:7579079075"
              className="inline-flex items-center gap-4 px-8 py-5 bg-[#0F0F0F] hover:bg-black text-[#D9AD74] shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] rounded-xs transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#D9AD74] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 text-black fill-current" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/70 font-semibold mb-0.5">
                  Call For A Free Consultation
                </p>
                <p className="font-crimson text-2xl sm:text-3xl font-extrabold tracking-wide">
                  (757) 907-9075
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
           5. EXPERT CRIMINAL DEFENSE + DUI/DWI SECTION (EXACT COPY)
      ============================================================ */}
      <section className="bg-[#FAF8F5] text-[#1A1815] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-14">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.3em] block">
              Why Choose 757 Defense
            </span>
            <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12100E] leading-tight">
              Defending Your Freedom in Every Courtroom
            </h2>
            <div className="h-0.5 w-20 bg-[#D9AD74] mx-auto" />
          </div>

          {/* Two Column Services Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            
            {/* Card 1: EXPERT CRIMINAL DEFENSE (EXACT COPY) */}
            <div className="group relative bg-white border border-black/10 rounded-xs overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0F0E0C] via-[#D9AD74] to-[#0F0E0C]" />
              
              <div className="p-8 sm:p-10 space-y-6">
                
                {/* Icon + Label */}
                <div className="flex items-center gap-4 pb-4 border-b border-black/5">
                  <div className="w-16 h-16 bg-[#0F0E0C] group-hover:bg-[#D9AD74] group-hover:rotate-6 rounded-xs flex items-center justify-center shrink-0 transition-all duration-300 shadow-xl">
                    <ShieldAlert className="w-8 h-8 text-[#D9AD74] group-hover:text-[#0F0F0F] transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#D9AD74] font-bold mb-1">
                      Speciality #1
                    </p>
                    <h3 className="font-crimson text-2xl sm:text-3xl font-extrabold text-[#12100E] tracking-wide">
                      Expert Criminal Defense
                    </h3>
                  </div>
                </div>

                {/* EXACT BODY COPY */}
                <p className="text-sm sm:text-[15px] text-[#524E48] font-light leading-relaxed">
                  Attorney Anton Karpov is an award-winning, recognized by his peers and appreciated by his clients Virginia criminal and traffic defense lawyer serving Hampton Roads.
                </p>
                <p className="text-sm sm:text-[15px] text-[#524E48] font-light leading-relaxed">
                  Felony warrants and misdemeanor charges in Virginia Beach, Chesapeake, Norfolk, Hampton, Portsmouth, and Newport News courts.
                </p>

                {/* Jurisdiction Tags */}
                <div className="pt-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#D9AD74] font-bold mb-2">
                    Jurisdictions Served
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Virginia Beach", "Chesapeake", "Norfolk", "Hampton", "Portsmouth", "Newport News"].map((city) => (
                      <span key={city} className="text-[10px] font-semibold px-2.5 py-1.5 bg-[#D9AD74]/10 text-[#12100E] uppercase tracking-wider border border-[#D9AD74]/30 rounded-xs">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-black/5 pt-5">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#D9AD74]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#12100E]">Award Winning</span>
                  </div>
                  <button 
                    onClick={() => onOpenConsultation && onOpenConsultation()}
                    className="text-xs font-bold uppercase tracking-wider text-[#D9AD74] hover:text-black flex items-center gap-1.5 group/btn"
                  >
                    <span>Get Defense</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: DUI / DWI (EXACT COPY) */}
            <div className="group relative bg-[#0F0E0C] text-[#F5F2ED] border border-[#D9AD74]/30 rounded-xs overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D9AD74] via-[#F5F2ED] to-[#D9AD74]" />
              
              <div className="p-8 sm:p-10 space-y-6">
                
                {/* Icon + Label */}
                <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                  <div className="w-16 h-16 bg-[#D9AD74] group-hover:rotate-6 rounded-xs flex items-center justify-center shrink-0 transition-all duration-300 shadow-xl">
                    <Wine className="w-8 h-8 text-[#0F0F0F]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#D9AD74] font-bold mb-1">
                      Speciality #2
                    </p>
                    <h3 className="font-crimson text-2xl sm:text-3xl font-extrabold tracking-wide">
                      DUI / DWI
                    </h3>
                  </div>
                </div>

                {/* EXACT BODY COPY */}
                <p className="text-sm sm:text-[15px] text-[#D8D4CE]/80 font-light leading-relaxed">
                  Experienced and tough as nails defense attorney for Virginia DUI / DWI drunk driving, reckless driving, and traffic misdemeanor charges in Virginia Beach, Chesapeake, Norfolk, Hampton, Portsmouth, and Newport News courts.
                </p>

                {/* Charge Tags */}
                <div className="pt-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#D9AD74] font-bold mb-2">
                    Charges Defended
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["DUI / DWI", "Drunk Driving", "Reckless Driving", "Traffic Misdemeanors", "Breath Test Refusal"].map((ch) => (
                      <span key={ch} className="text-[10px] font-semibold px-2.5 py-1.5 bg-[#D9AD74]/15 text-[#F5F2ED] uppercase tracking-wider border border-[#D9AD74]/30 rounded-xs">
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-white/10 pt-5">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-[#D9AD74]" />
                    <span className="text-xs font-bold uppercase tracking-wider">Tough As Nails</span>
                  </div>
                  <button 
                    onClick={() => onOpenConsultation && onOpenConsultation('DUI Defense')}
                    className="text-xs font-bold uppercase tracking-wider text-[#D9AD74] hover:text-white flex items-center gap-1.5 group/btn"
                  >
                    <span>Fight DUI Charges</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
