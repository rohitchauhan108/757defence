'use client';

import React, { useState } from 'react';
import { 
  Scale, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Check,
  Building2, 
  Landmark, 
  Briefcase, 
  Gavel, 
  Monitor, 
  Phone, 
  Calendar,
  Mail,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export default function AboutPage({ onOpenConsultation, onOpenAIAdvisor }) {
  // Appointment Form State
  const [apptName, setApptName] = useState('');
  const [apptPhone, setApptPhone] = useState('');
  const [apptEmail, setApptEmail] = useState('');
  const [apptDate, setApptDate] = useState('');
  const [apptMessage, setApptMessage] = useState('');
  const [apptSubmitted, setApptSubmitted] = useState(false);

  // Newsletter Form State
  const [emailNewsletter, setEmailNewsletter] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleApptSubmit = (e) => {
    e.preventDefault();
    setApptSubmitted(true);
    setTimeout(() => {
      setApptSubmitted(false);
      setApptName('');
      setApptPhone('');
      setApptEmail('');
      setApptDate('');
      setApptMessage('');
    }, 4000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (emailNewsletter.trim()) {
      setNewsletterSubscribed(true);
      setEmailNewsletter('');
      setTimeout(() => setNewsletterSubscribed(false), 4000);
    }
  };

  return (
    <div className="bg-[#0B0A08] text-[#D8D4CE] font-poppins selection:bg-[#D9AD74] selection:text-[#0F0F0F]">
      
      {/* 1. TOP HERO HEADER BANNER ("Page - About 757 Defense") */}
      <section className="relative bg-[#0F0E0C] text-[#F5F2ED] py-16 md:py-24 overflow-hidden border-b border-[#D9AD74]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left Header Title */}
            <div className="space-y-3">
              <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.3em] block">
                HOME &nbsp;/&nbsp; ABOUT 757 DEFENSE
              </span>
              <h1 className="font-crimson text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F2ED] tracking-wide">
                About Our Defense Firm
              </h1>
            </div>

            {/* Right Courthouse Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-xs h-56 sm:h-64 rounded-xs overflow-hidden shadow-2xl border border-[#D9AD74]/20">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop"
                  alt="Virginia Beach Courthouse"
                  className="w-full h-full object-cover filter brightness-90 contrast-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0C] via-transparent to-transparent opacity-80" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="bg-[#FAF8F5] text-[#1A1815] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header row & paragraphs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.2em] block">
                VIRGINIA DEFENSE ATTORNEYS
              </span>
              <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12100E] leading-tight">
                Relentless Advocacy <br />When Freedom Is On The Line
              </h2>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-[#3D3A35] font-light leading-relaxed">
              <p>
                757 Defense was established with a singular mission: to protect individuals facing DUI, reckless driving, domestic violence, drug distribution, violent felonies, and military UCMJ charges across Hampton Roads courts.
              </p>
              <p>
                Our defense team includes former Commonwealth prosecutors and decorated military JAG officers who understand local court procedures in Virginia Beach, Norfolk, Chesapeake, and Federal District Courts.
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-[#524E48] font-light leading-relaxed">
            <p>
              We know that an arrest can disrupt your career, driving privileges, security clearance, and family life. That is why we begin building an aggressive defense strategy from minute one—examining officer bodycam footage, breathalyzer maintenance logs, and search warrant legality.
            </p>
            <p>
              Whether negotiating a dismissal with prosecutors before trial or arguing before a judge and jury, 757 Defense provides personalized, round-the-clock defense representation tailored to your unique case.
            </p>
          </div>

          {/* Large Team Group Photo with Certificate Overlay */}
          <div className="relative rounded-xs overflow-hidden border border-black/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
              alt="757 Defense Trial Lawyers"
              className="w-full h-[380px] sm:h-[460px] object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Certificate Overlay Badge */}
            <div className="absolute bottom-6 right-6 bg-[#0B0907] text-[#F5F2ED] border border-[#D9AD74]/50 p-4 sm:p-5 shadow-2xl flex items-center gap-4 max-w-xs rounded-xs">
              <div className="w-12 h-12 bg-[#D9AD74]/20 border border-[#D9AD74] rounded-full flex items-center justify-center text-[#D9AD74] shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-crimson text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D9AD74]">
                  TOP TRIAL LAWYERS
                </h4>
                <p className="text-[10px] sm:text-xs text-[#D8D4CE]/80 font-light">
                  Criminal & DUI Defense Association
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OUR SERVICES SECTION */}
      <section className="bg-[#0E0C0A] text-[#F5F2ED] py-20 px-6 lg:px-8 border-t border-[#D9AD74]/20 relative">
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-6 space-y-2">
              <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.2em] block">
                OUR DEFENSE PRACTICES
              </span>
              <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F2ED] leading-tight">
                Trial Lawyers Built <br />For High-Stakes Defense
              </h2>
            </div>

            <div className="lg:col-span-6 flex flex-col items-start lg:items-end gap-3">
              <p className="text-xs text-[#D8D4CE]/70 font-light max-w-md leading-relaxed">
                Aggressive representation for felony and misdemeanor offenses throughout Virginia Beach and Hampton Roads.
              </p>
              <button 
                onClick={() => onOpenConsultation && onOpenConsultation()}
                className="text-xs font-semibold text-[#D9AD74] hover:underline uppercase tracking-wider flex items-center gap-1 cursor-pointer"
              >
                <span>Book Free Case Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div 
              onClick={() => onOpenConsultation && onOpenConsultation('DUI Defense')}
              className="relative h-80 overflow-hidden border border-white/10 hover:border-[#D9AD74] transition-all group cursor-pointer rounded-xs"
            >
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop" 
                alt="DUI Defense" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-crimson text-base font-bold text-[#F5F2ED] uppercase tracking-wider">
                  DUI & DWI Defense
                </h3>
                <p className="text-xs text-[#D9AD74]">Breathalyzer & License Defense</p>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              onClick={() => onOpenConsultation && onOpenConsultation('Reckless Driving')}
              className="relative h-80 overflow-hidden border border-white/10 hover:border-[#D9AD74] transition-all group cursor-pointer rounded-xs"
            >
              <img 
                src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=600&auto=format&fit=crop" 
                alt="Reckless Driving" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-crimson text-base font-bold text-[#F5F2ED] uppercase tracking-wider">
                  Reckless Driving
                </h3>
                <p className="text-xs text-[#D9AD74]">Speeding & Traffic Misdemeanors</p>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              onClick={() => onOpenConsultation && onOpenConsultation('Domestic Violence')}
              className="relative h-80 overflow-hidden border border-white/10 hover:border-[#D9AD74] transition-all group cursor-pointer rounded-xs"
            >
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=600&auto=format&fit=crop" 
                alt="Domestic Violence" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-crimson text-base font-bold text-[#F5F2ED] uppercase tracking-wider">
                  Domestic Violence
                </h3>
                <p className="text-xs text-[#D9AD74]">Assault & Protective Orders</p>
              </div>
            </div>

            {/* Card 4 */}
            <div 
              onClick={() => onOpenConsultation && onOpenConsultation('Military UCMJ')}
              className="relative h-80 overflow-hidden border border-white/10 hover:border-[#D9AD74] transition-all group cursor-pointer rounded-xs"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop" 
                alt="Military UCMJ" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-crimson text-base font-bold text-[#F5F2ED] uppercase tracking-wider">
                  Military UCMJ Defense
                </h3>
                <p className="text-xs text-[#D9AD74]">Naval Station Norfolk Defense</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. OUR BENEFITS SECTION */}
      <section className="bg-[#12100E] text-[#F5F2ED] py-20 px-6 lg:px-8 border-t border-[#D9AD74]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.2em] block">
              OUR PROMISE
            </span>

            <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F2ED] leading-tight">
              Why Trust 757 Defense?
            </h2>

            <p className="text-xs sm:text-sm text-[#D8D4CE]/70 font-light leading-relaxed">
              We treat every client with dignity, absolute transparency, and unyielding defense strategy.
            </p>

            {/* 2-Column Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="space-y-3 text-xs sm:text-sm text-[#D8D4CE]">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D9AD74] text-[#0F0F0F] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>24/7 Direct Attorney Cell Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D9AD74] text-[#0F0F0F] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Hundreds of Charges Reduced</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D9AD74] text-[#0F0F0F] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Transparent Flat-Fee Retainers</span>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#D8D4CE]">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D9AD74] text-[#0F0F0F] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Former Prosecutors on Staff</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D9AD74] text-[#0F0F0F] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>JAG Military Defense Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D9AD74] text-[#0F0F0F] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>100% Confidential Consultation</span>
                </div>
              </div>

            </div>

            {/* Certificate Emblem Badge */}
            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-[#D9AD74] bg-[#D9AD74]/10 flex items-center justify-center text-[#D9AD74]">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-crimson text-xs font-bold uppercase tracking-wider text-[#D9AD74]">
                  TOP 100 TRIAL LAWYERS
                </h4>
                <p className="text-[10px] text-[#D8D4CE]/60 font-light">National Trial Lawyers Association</p>
              </div>
            </div>

          </div>

          {/* Right Column Female Attorney Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm h-[400px] sm:h-[460px] border border-[#D9AD74]/30 shadow-2xl rounded-xs overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="757 Defense Senior Partner"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. TIMELINE SECTION */}
      <section className="bg-[#FAF8F5] text-[#12100E] py-20 px-6 lg:px-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.2em] block">
              OUR MILESTONES
            </span>
            <h2 className="font-crimson text-3xl sm:text-4xl font-bold text-[#12100E]">
              Growth of 757 Defense
            </h2>
          </div>

          {/* 4 Step Timeline */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="hidden lg:block absolute top-6 left-12 right-12 h-0.5 bg-[#D9AD74]/30 z-0" />

            <div className="relative z-10 bg-white p-6 border border-black/10 shadow-lg text-center space-y-3 rounded-xs">
              <div className="w-12 h-12 rounded-full bg-[#12100E] border-2 border-[#D9AD74] text-[#D9AD74] font-crimson font-bold text-sm flex items-center justify-center mx-auto shadow-md">
                2012
              </div>
              <h3 className="font-crimson text-sm font-bold uppercase tracking-wider text-[#12100E]">
                FIRM ESTABLISHED
              </h3>
              <p className="text-xs text-[#524E48] font-light leading-relaxed">
                Founded in Virginia Beach to defend citizens accused of criminal offenses.
              </p>
            </div>

            <div className="relative z-10 bg-white p-6 border border-black/10 shadow-lg text-center space-y-3 rounded-xs">
              <div className="w-12 h-12 rounded-full bg-[#12100E] border-2 border-[#D9AD74] text-[#D9AD74] font-crimson font-bold text-sm flex items-center justify-center mx-auto shadow-md">
                2016
              </div>
              <h3 className="font-crimson text-sm font-bold uppercase tracking-wider text-[#12100E]">
                NORFOLK DEFENSE BRANCH
              </h3>
              <p className="text-xs text-[#524E48] font-light leading-relaxed">
                Expanded presence near Norfolk Circuit and Federal District Court.
              </p>
            </div>

            <div className="relative z-10 bg-white p-6 border border-black/10 shadow-lg text-center space-y-3 rounded-xs">
              <div className="w-12 h-12 rounded-full bg-[#12100E] border-2 border-[#D9AD74] text-[#D9AD74] font-crimson font-bold text-sm flex items-center justify-center mx-auto shadow-md">
                2019
              </div>
              <h3 className="font-crimson text-sm font-bold uppercase tracking-wider text-[#12100E]">
                MILITARY UCMJ DIVISION
              </h3>
              <p className="text-xs text-[#524E48] font-light leading-relaxed">
                Added military JAG trial lawyers for defense at Naval Station Norfolk.
              </p>
            </div>

            <div className="relative z-10 bg-white p-6 border border-black/10 shadow-lg text-center space-y-3 rounded-xs">
              <div className="w-12 h-12 rounded-full bg-[#12100E] border-2 border-[#D9AD74] text-[#D9AD74] font-crimson font-bold text-sm flex items-center justify-center mx-auto shadow-md">
                2024
              </div>
              <h3 className="font-crimson text-sm font-bold uppercase tracking-wider text-[#12100E]">
                500+ DISMISSALS
              </h3>
              <p className="text-xs text-[#524E48] font-light leading-relaxed">
                Surpassed 500 complete criminal charge dismissals in Hampton Roads.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. FREE CONSULTATION APPOINTMENT FORM */}
      <section className="bg-[#FAF8F5] text-[#12100E] py-20 px-6 lg:px-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="bg-[#EFE8DC] border border-[#D9AD74]/40 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 rounded-xs">
            
            {/* Left Image */}
            <div className="lg:col-span-5 relative min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
                alt="757 Defense Lawyer"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div>
                <h3 className="font-crimson text-2xl sm:text-3xl font-bold text-[#12100E] uppercase tracking-wide">
                  SCHEDULE FREE CASE EVALUATION
                </h3>
                <p className="text-xs text-[#524E48] font-light mt-1">
                  100% confidential case review with senior partners Nadim Al-Mansur or J. Ryan Stirling.
                </p>
              </div>

              <form onSubmit={handleApptSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={apptName}
                    onChange={(e) => setApptName(e.target.value)}
                    required
                    className="w-full bg-white border border-black/10 px-4 py-3 text-xs focus:outline-none focus:border-[#D9AD74] rounded-xs"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={apptPhone}
                    onChange={(e) => setApptPhone(e.target.value)}
                    required
                    className="w-full bg-white border border-black/10 px-4 py-3 text-xs focus:outline-none focus:border-[#D9AD74] rounded-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={apptEmail}
                    onChange={(e) => setApptEmail(e.target.value)}
                    required
                    className="w-full bg-white border border-black/10 px-4 py-3 text-xs focus:outline-none focus:border-[#D9AD74] rounded-xs"
                  />
                  <input
                    type="date"
                    value={apptDate}
                    onChange={(e) => setApptDate(e.target.value)}
                    required
                    className="w-full bg-white border border-black/10 px-4 py-3 text-xs focus:outline-none focus:border-[#D9AD74] rounded-xs"
                  />
                </div>

                <textarea
                  rows="3"
                  placeholder="Details of alleged charge or court date..."
                  value={apptMessage}
                  onChange={(e) => setApptMessage(e.target.value)}
                  className="w-full bg-white border border-black/10 p-4 text-xs focus:outline-none focus:border-[#D9AD74] rounded-xs"
                />

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold text-xs uppercase tracking-[0.2em] transition-colors rounded-xs cursor-pointer"
                >
                  TRANSMIT REQUEST
                </button>

                {apptSubmitted && (
                  <p className="text-xs text-emerald-800 font-bold pt-2">
                    ✓ Request sent! An attorney will call you within 15 minutes.
                  </p>
                )}
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* 7. SUBSCRIBE NEWSLETTER BANNER */}
      <section className="relative bg-[#0B0907] text-[#F5F2ED] py-16 px-6 lg:px-8 border-t border-[#D9AD74]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          
          <div className="space-y-2 max-w-xl">
            <h2 className="font-crimson text-2xl sm:text-3xl font-bold text-[#F5F2ED]">
              Subscribe to Virginia Legal Updates
            </h2>
            <p className="text-xs text-[#D8D4CE]/60 font-light">
              Stay updated with Virginia DUI laws, court precedents, and defense strategies.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="w-full md:w-auto flex items-center gap-2">
            <input 
              type="email"
              placeholder="Your Email"
              value={emailNewsletter}
              onChange={(e) => setEmailNewsletter(e.target.value)}
              required
              className="bg-[#14120F] border border-[#D9AD74]/40 px-4 py-3 text-xs text-[#F5F2ED] focus:outline-none focus:border-[#D9AD74] w-full sm:w-64 rounded-xs"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold text-xs uppercase tracking-wider transition-colors shrink-0 rounded-xs cursor-pointer"
            >
              SUBSCRIBE
            </button>
          </form>

        </div>

        {newsletterSubscribed && (
          <div className="max-w-7xl mx-auto mt-4 text-xs text-[#D9AD74] font-medium text-center">
            ✓ Thank you for subscribing to 757 Defense updates!
          </div>
        )}
      </section>

    </div>
  );
}
