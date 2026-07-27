'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Phone,
  ChevronDown,
  MessageSquare,
  Target,
  Users,
  Award,
  GraduationCap,
  Gavel,
  Briefcase,
  ShieldAlert,
  AlertTriangle,
  Clock,
  Scale,
  FileText,
  Handshake,
  ShieldCheck,
  Wine
} from 'lucide-react';
import { attorneys } from '../data/attorneys.js';
import { useRouter } from 'next/navigation';
import { useApp } from '../AppContext.jsx';

export default function DUIDWIServicePage() {
  const router = useRouter();
  const { onOpenConsultation } = useApp();
  const [openFaqs, setOpenFaqs] = useState({ 0: true });
  const toggleFaq = (id) => setOpenFaqs(prev => ({ ...prev, [id]: !prev[id] }));

  const anton = attorneys.find(a => a.id === 'anton-karpov');
  const gregory = attorneys.find(a => a.id === 'gregory-pugh');

  const faqs = [
    { q: "What should I do immediately after being charged with a DUI?", a: "If you've been charged with a DUI, the first step is to contact an experienced DUI/DWI Lawyers or attorney at 757Defense as soon as possible. It's crucial to have legal representation to guide you through the process and protect your rights. Additionally, avoid discussing your case with anyone other than your attorney to prevent any statements that could be used against you." },
    { q: "How can a DUI/DWI lawyers help with my case?", a: null },
    { q: "What are the potential consequences of a DUI conviction?", a: null },
    { q: "Will I always have to go to court for a DUI charge?", a: null },
    { q: "How can a DUI attorney challenge the evidence against me?", a: null }
  ];

  const duiDefenseServices = [
    "First Offense DUI",
    "Second and Subsequent Offenses",
    "Underage DUI",
    "Commercial Driver's License (CDL) DUI",
    "Military DUI",
    "Vehicular Manslaughter"
  ];

  const consequences = [
    { icon: Briefcase, title: "Employment Issues" },
    { icon: ShieldAlert, title: "Travel Restrictions" },
    { icon: AlertTriangle, title: "Increased Insurance Rates" },
    { icon: Clock, title: "License Suspension" }
  ];

  const duiAttorneyRole = [
    { icon: Scale, title: "Legal Advice" },
    { icon: FileText, title: "Case Assessment" },
    { icon: Target, title: "Defense Strategy" },
    { icon: Handshake, title: "Negotiation" },
    { icon: Gavel, title: "Court Representation" },
    { icon: ShieldCheck, title: "Sentencing Advocacy" },
    { icon: Award, title: "License Issues" }
  ];

  return (
    <div className="bg-[#0B0A08] text-[#D8D4CE] min-h-screen font-poppins selection:bg-[#D9AD74] selection:text-[#0F0F0F]">

      {/* 1. HERO */}
      <section className="relative bg-[#0F0E0C] text-[#F5F2ED] py-16 md:py-24 overflow-hidden border-b border-[#D9AD74]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-4">
            <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.3em] block">
              HOME &nbsp;/&nbsp; SERVICES &nbsp;/&nbsp; DUI / DWI
            </span>

            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#D9AD74]/10 border border-[#D9AD74]/30 rounded-xs">
              <Wine className="w-3.5 h-3.5 text-[#D9AD74]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D9AD74]">
                The Role and Importance of a DUI/DWI Lawyers
              </span>
            </div>

            <h1 className="font-crimson text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-wide leading-[1.05]">
              DUI/DWI <span className="text-[#D9AD74]">Lawyers</span>
            </h1>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="tel:7579079075"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] rounded-xs shadow-2xl transition-all group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Call (757) 907-9075</span>
              </a>
              <button
                onClick={() => router.push('/contact')}
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#FAF8F5]/5 hover:bg-[#D9AD74]/10 border border-[#D9AD74]/40 hover:border-[#D9AD74] rounded-xs transition-all group"
              >
                <MessageSquare className="w-4 h-4 text-[#D9AD74] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO: Role and Importance */}
      <section className="bg-[#FAF8F5] text-[#1A1815] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#D9AD74] rounded-xs -z-0" />
                <div className="relative w-full h-[480px] rounded-xs overflow-hidden shadow-2xl border border-black/10">
                  <img
                    src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=900&auto=format&fit=crop"
                    alt="DUI / DWI Lawyers - 757Defense"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">
                  DUI / DWI Lawyers
                </p>
                <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12100E] leading-tight">
                  The Role and Importance of a <span className="text-[#D9AD74]">DUI/DWI Lawyer</span>
                </h2>
                <div className="h-0.5 w-20 bg-[#D9AD74]" />
              </div>

              <div className="space-y-5 text-sm sm:text-[15px] text-[#3D3A35] font-light leading-[1.85]">
                <p>
                  Facing a charge for Driving Under the Influence (DUI) or Driving While Intoxicated (DWI) is not just stressful—it can deeply affect your personal life, your freedom, and even your career. In moments like these, having the right support can make all the difference. That's where an experienced DUI lawyer comes in.
                </p>
                <p>
                  At 757defense, we understand how overwhelming a DWI conviction can be. Our team is here to guide you through every step of the legal process with clarity and confidence. From explaining your rights to building a strong defense, a skilled DUI lawyer is your best ally in protecting your future.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ATTORNEYS - ANTON & GREGORY with real headshots + exact bios */}
      <section className="bg-[#0E0C0A] text-[#F5F2ED] py-20 px-6 lg:px-8 border-y border-[#D9AD74]/20">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">
              Our DUI/DWI Lawyers &amp; Attorneys
            </p>
            <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide leading-tight">
              Attorneys <span className="text-[#D9AD74]">Karpov</span> and <span className="text-[#D9AD74]">Pugh</span>
            </h2>
            <div className="h-0.5 w-20 bg-[#D9AD74] mx-auto" />
            <p className="text-xs sm:text-sm text-[#D8D4CE]/75 font-light max-w-2xl mx-auto leading-relaxed">
              Attorneys Karpov and Pugh bring unmatched experience and dedication to every case they handle at 757defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">

            {anton && (
              <div className="group relative bg-gradient-to-br from-[#12100E] to-[#0F0E0C] border border-[#D9AD74]/30 rounded-xs overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#D9AD74] via-[#F5F2ED] to-[#D9AD74]" />
                <div className="p-7 sm:p-8 space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="relative shrink-0">
                      <div className="w-28 h-32 sm:w-32 sm:h-36 rounded-xs overflow-hidden border-2 border-[#D9AD74]/50 shadow-xl">
                        <img
                          src={anton.image}
                          alt={anton.displayName}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-[#D9AD74] text-[#0F0F0F] px-2.5 py-1 rounded-xs shadow-lg">
                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold">Partner #01</p>
                      </div>
                    </div>

                    <div className="flex-1 space-y-2.5 pt-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-7 h-7 rounded-full bg-[#D9AD74]/15 border border-[#D9AD74]/40 flex items-center justify-center">
                          <Award className="w-3.5 h-3.5 text-[#D9AD74]" />
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#D9AD74] font-bold">
                          DUI / DWI Lawyer
                        </p>
                      </div>
                      <h3 className="font-crimson text-2xl sm:text-3xl font-extrabold tracking-wide leading-tight">
                        Attorney Anton Karpov
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-[14px] text-[#D8D4CE]/80 font-light leading-[1.85]">
                    <div className="flex items-start gap-2.5">
                      <GraduationCap className="w-4 h-4 text-[#D9AD74] shrink-0 mt-0.5" />
                      <p>He earned his law degree from William &amp; Mary in 2006. With 12 years as a Public Defender in Virginia Beach, he has tried hundreds of cases across multiple courts.</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Gavel className="w-4 h-4 text-[#D9AD74] shrink-0 mt-0.5" />
                      <p>Specializing in Criminal and Traffic Defense and Personal Injury, he is a top-rated defense attorney.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {gregory && (
              <div className="group relative bg-white text-[#1A1815] border border-black/10 rounded-xs overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0F0E0C] via-[#D9AD74] to-[#0F0E0C]" />
                <div className="p-7 sm:p-8 space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="relative shrink-0">
                      <div className="w-28 h-32 sm:w-32 sm:h-36 rounded-xs overflow-hidden border-2 border-[#D9AD74]/70 shadow-xl">
                        <img
                          src={gregory.image}
                          alt={gregory.displayName}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-[#0F0E0C] text-[#D9AD74] px-2.5 py-1 rounded-xs shadow-lg">
                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold">Partner #02</p>
                      </div>
                    </div>

                    <div className="flex-1 space-y-2.5 pt-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-7 h-7 rounded-full bg-[#D9AD74]/15 border border-[#D9AD74]/40 flex items-center justify-center">
                          <Award className="w-3.5 h-3.5 text-[#D9AD74]" />
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#D9AD74] font-bold">
                          DUI / DWI Lawyer
                        </p>
                      </div>
                      <h3 className="font-crimson text-2xl sm:text-3xl font-extrabold tracking-wide leading-tight text-[#12100E]">
                        Attorney Gregory K. Pugh
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-[14px] text-[#524E48] font-light leading-[1.85]">
                    <div className="flex items-start gap-2.5">
                      <GraduationCap className="w-4 h-4 text-[#D9AD74] shrink-0 mt-0.5" />
                      <p>He has over 30 years of legal experience. He earned his JD from Ohio Northern University and an LLM from William &amp; Mary.</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Gavel className="w-4 h-4 text-[#D9AD74] shrink-0 mt-0.5" />
                      <p>Practicing in Virginia since 1988, he specializes in civil litigation, bankruptcy, traffic, and criminal defense, offering expert DUI representation.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 4. EXPERT DUI DEFENSE */}
      <section className="bg-[#FAF8F5] text-[#1A1815] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-14">

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">Expert DUI Defense</p>
            <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12100E] leading-tight">
              Expert <span className="text-[#D9AD74]">DUI Defense</span>
            </h2>
            <div className="h-0.5 w-20 bg-[#D9AD74] mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-[#D9AD74]/20">
                <ShieldAlert className="w-10 h-10 text-[#D9AD74]" />
                <h3 className="font-crimson text-2xl sm:text-3xl font-extrabold tracking-wide text-[#12100E]">
                  Why Choose 757 for DUI
                </h3>
              </div>
              <p className="text-sm sm:text-[15px] text-[#3D3A35] font-light leading-[1.9]">
                Choosing the right DUI lawyer can have a big impact on how your case unfolds — and ultimately, how it ends. At 757Defense, we know how stressful and uncertain this time can be, which is why our dedicated team of DUI and DWI attorneys is here to stand firmly by your side.
              </p>
              <p className="text-sm sm:text-[15px] text-[#3D3A35] font-light leading-[1.9]">
                With years of experience handling DUI cases, our lawyers understand the ins and outs of the legal system and are committed to fighting for your rights. When you work with a trusted DUI lawyer from our team, you're not just getting legal representation — you're getting an advocate who genuinely cares about helping you move forward.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => router.push('/attorneys')}
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-[#12100E] hover:bg-[#D9AD74] hover:text-[#0F0F0F] text-[#F5F2ED] border-2 border-[#12100E] hover:border-[#D9AD74] rounded-xs transition-all"
                >
                  <Users className="w-4 h-4 text-[#D9AD74] group-hover:text-[#0F0F0F]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em]">Meet Our Attorneys</span>
                  <ArrowRight className="w-4 h-4 text-[#D9AD74] group-hover:text-[#0F0F0F] group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#D9AD74] rounded-xs -z-0" />
                <div className="relative w-full h-[420px] sm:h-[480px] rounded-xs overflow-hidden shadow-2xl border border-black/10">
                  <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=900&auto=format&fit=crop"
                    alt="Expert DUI Defense Team"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. DUI DEFENSE SERVICES - 6 title-only cards */}
      <section className="bg-[#0E0C0A] text-[#F5F2ED] py-20 px-6 lg:px-8 border-y border-[#D9AD74]/20">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">
              Our DUI Defense Services
            </p>
            <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide leading-tight">
              DUI Defense <span className="text-[#D9AD74]">Services</span>
            </h2>
            <div className="h-0.5 w-20 bg-[#D9AD74] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {duiDefenseServices.map((title, idx) => (
              <div key={title} className="group relative bg-[#12100E] border border-[#D9AD74]/20 hover:border-[#D9AD74]/60 rounded-xs p-7 overflow-hidden transition-all hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#D9AD74] to-[#F5F2ED] opacity-60" />
                <div className="space-y-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-[#D9AD74] flex items-center justify-center rounded-xs shrink-0 font-crimson font-extrabold text-lg text-[#0F0F0F]">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-crimson text-lg sm:text-xl font-extrabold tracking-wide leading-snug">
                      {title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONSEQUENCES + WHY CHOOSE 757 + ROLE OF ATTORNEY */}
      <section className="bg-[#FAF8F5] text-[#1A1815] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Consequences of DUI - 4 title-only cards + goal banner */}
          <div className="space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">
                Consequences of DUI
              </p>
              <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12100E] leading-tight">
                Consequences of a <span className="text-[#D9AD74]">DUI Conviction</span>
              </h2>
              <div className="h-0.5 w-20 bg-[#D9AD74] mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {consequences.map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.title} className="group relative bg-white border border-black/10 hover:border-[#D9AD74]/60 rounded-xs p-6 overflow-hidden transition-all hover:shadow-xl">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-[#D9AD74] opacity-60" />
                    <div className="w-12 h-12 bg-[#12100E] group-hover:bg-[#D9AD74] border border-[#D9AD74]/40 group-hover:border-[#D9AD74] rounded-xs flex items-center justify-center mb-5 transition-all">
                      <IconComp className="w-6 h-6 text-[#D9AD74] group-hover:text-[#0F0F0F] transition-colors" />
                    </div>
                    <h3 className="font-crimson text-xl font-extrabold tracking-wide text-[#12100E]">{item.title}</h3>
                  </div>
                );
              })}
            </div>

            <div className="bg-[#D9AD74]/10 border border-[#D9AD74]/30 p-6 sm:p-8 rounded-xs text-center space-y-3">
              <h3 className="font-crimson text-xl sm:text-2xl font-extrabold text-[#12100E]">
                Our Goal at 757Defense
              </h3>
              <p className="text-xs sm:text-sm text-[#3D3A35] font-light max-w-3xl mx-auto leading-relaxed">
                Our goal at 757Defense is to mitigate these consequences as much as possible. We are committed to providing comprehensive support throughout the legal process to help you avoid or minimize the impact of a conviction.
              </p>
            </div>
          </div>

          {/* Why Choose 757Defense for Your DUI/DWI Case? */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-2 space-y-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">
                Why Choose 757Defense for Your DUI/DWI Case?
              </p>
              <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12100E] leading-tight">
                Why Choose <span className="text-[#D9AD74]">757Defense</span>
              </h2>
              <div className="h-0.5 w-20 bg-[#D9AD74]" />
              <p className="text-xs sm:text-sm text-[#3D3A35] font-light leading-[1.9]">
                Facing a DUI charge can be overwhelming, but having the right support can change everything. The experience and dedication of a skilled DUI lawyer can make a real difference in how your case is handled — and how it ends.
              </p>
              <p className="text-xs sm:text-sm text-[#3D3A35] font-light leading-[1.9]">
                At 757Defense, our team of experienced DUI/DWI lawyers takes a personal, client-focused approach to every case. We know that no two situations are the same, so we craft tailored defense strategies that fit your unique circumstances. DUI laws can be complex, but our attorneys have the in-depth knowledge and proactive mindset needed to guide you through the process with confidence.
              </p>
              <p className="text-xs sm:text-sm text-[#3D3A35] font-light leading-[1.9]">
                From questioning the evidence to negotiating with prosecutors, we work hard to reduce the impact these charges may have on your life. If you're searching for a DUI lawyer who offers both expert representation and compassionate support, 757Defense is here to protect your rights and stand with you every step of the way.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#D9AD74] rounded-xs -z-0" />
                <div className="relative w-full rounded-xs overflow-hidden shadow-2xl border border-black/10">
                  <img
                    src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000&auto=format&fit=crop"
                    alt="757Defense - DUI Defense Attorneys"
                    className="w-full h-[480px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Role of a DUI Attorney - 7 title-only cards */}
          <div className="space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">
                The Role of a DUI Attorney
              </p>
              <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12100E] leading-tight">
                Role of a <span className="text-[#D9AD74]">DUI Attorney</span>
              </h2>
              <div className="h-0.5 w-20 bg-[#D9AD74] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {duiAttorneyRole.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={item.title} className="group bg-white hover:bg-[#FFFBF5] border border-black/10 hover:border-[#D9AD74]/60 rounded-xs p-6 transition-all shadow-sm hover:shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-[#12100E] group-hover:bg-[#D9AD74] border border-[#D9AD74]/40 group-hover:border-[#D9AD74] rounded-xs flex items-center justify-center shrink-0 transition-all">
                        <IconComp className="w-5 h-5 text-[#D9AD74] group-hover:text-[#0F0F0F] transition-colors" />
                      </div>
                      <div className="space-y-1 pt-1">
                        <div className="font-crimson text-xs font-extrabold text-[#D9AD74] tracking-widest">
                          {String(idx + 1).padStart(2, '0')}
                        </div>
                        <h3 className="font-crimson text-lg font-extrabold tracking-wide text-[#12100E]">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION - ONLY Q1 has answer */}
      <section className="bg-[#0E0C0A] text-[#F5F2ED] py-20 px-6 lg:px-8 border-y border-[#D9AD74]/20">
        <div className="max-w-5xl mx-auto space-y-10">

          <div className="text-center space-y-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">Frequently Asked Questions</p>
            <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide leading-tight">
              DUI / DWI Defense <span className="text-[#D9AD74]">FAQs</span>
            </h2>
            <div className="h-0.5 w-20 bg-[#D9AD74] mx-auto" />
          </div>

          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openFaqs[idx];
              return (
                <div key={idx} className="group relative bg-[#12100E] border border-white/10 hover:border-[#D9AD74]/40 rounded-xs overflow-hidden transition-all">
                  <div className={`absolute left-0 top-0 h-full w-[3px] transition-all ${isOpen ? 'bg-[#D9AD74]' : 'bg-transparent group-hover:bg-[#D9AD74]/30'}`} />
                  <button onClick={() => toggleFaq(idx)} className="w-full flex items-start gap-4 sm:gap-6 p-5 sm:p-6 pl-6 sm:pl-8 text-left">
                    <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex flex-col items-center justify-center rounded-xs border-2 transition-all ${isOpen ? 'bg-[#D9AD74] border-[#D9AD74] text-[#0F0F0F]' : 'bg-[#FAF8F5]/5 border-[#F5F2ED]/20 text-[#F5F2ED] group-hover:border-[#D9AD74] group-hover:text-[#D9AD74]'}`}>
                      <span className="font-crimson text-lg sm:text-xl font-extrabold leading-none">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="flex-1 font-crimson text-base sm:text-lg font-bold text-[#F5F2ED] leading-snug pt-2">
                      {item.q}
                    </h3>
                    <div className={`flex-shrink-0 w-9 h-9 mt-1 rounded-full flex items-center justify-center border transition-all ${isOpen ? 'bg-[#D9AD74] border-[#D9AD74] text-[#0F0F0F]' : 'bg-[#FAF8F5]/5 border-white/10 text-[#D8D4CE]/70 group-hover:border-[#D9AD74] group-hover:text-[#D9AD74]'}`}>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  {isOpen && item.a && (
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 -mt-2">
                      <div className="flex gap-4 sm:gap-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 opacity-0" />
                        <div className="flex-1">
                          <div className="h-px w-16 bg-[#D9AD74]/40 mb-4" />
                          <p className="text-sm sm:text-[15px] text-[#D8D4CE]/85 font-light leading-[1.9]">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FINAL WHY 757 STANDS OUT + CONTACT US CTA */}
      <section className="bg-[#0F0E0C] text-[#F5F2ED] py-16 md:py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          <div className="space-y-5">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">
              Why 757Defense Stands Out
            </p>
            <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-wide">
              Why <span className="text-[#D9AD74]">757</span> Stands Out
            </h2>
            <p className="text-xs sm:text-sm text-[#D8D4CE]/80 font-light leading-[1.9]">
              At 757Defense, our commitment to your case goes beyond just legal representation. We prioritize your well-being and work to achieve the best possible outcome while navigating the complexities of DUI law. Our expertise and dedication ensure that you receive the highest level of defense, tailored to the specifics of your situation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => router.push('/contact')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] rounded-xs shadow-2xl transition-all"
              >
                <Target className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-crimson text-base font-extrabold uppercase tracking-[0.22em]">Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:7579079075"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#FAF8F5]/5 hover:bg-[#D9AD74]/10 border-2 border-[#D9AD74]/40 hover:border-[#D9AD74] rounded-xs transition-all group"
              >
                <Phone className="w-5 h-5 text-[#D9AD74] group-hover:scale-110 transition-transform" />
                <span className="font-crimson text-base font-extrabold uppercase tracking-[0.22em]">(757) 907-9075</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#D9AD74] rounded-xs -z-0" />
            <div className="relative w-full h-[400px] sm:h-[480px] rounded-xs overflow-hidden shadow-2xl border border-[#D9AD74]/30">
              <img
                src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1000&auto=format&fit=crop"
                alt="757Defense - DUI Defense Attorneys"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
