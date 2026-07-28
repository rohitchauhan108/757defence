'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Hero from '../components/Hero.jsx';
import ExperienceTrustSection from '../components/ExperienceTrustSection.jsx';
import PracticeAreaModal from '../components/PracticeAreaModal.jsx';
import AttorneyModal from '../components/AttorneyModal.jsx';
import { practiceAreas } from '../data/practiceAreas.js';
import { useRouter } from 'next/navigation';
import { useApp } from '../AppContext.jsx';
import { 
  Building2, 
  ShieldCheck, 
  Gavel, 
  Briefcase, 
  Landmark, 
  Monitor, 
  Check, 
  Quote, 
  Send,
  Calendar,
  User,
  Phone,
  Mail,
  Award,
  ShieldAlert,
  Car,
  FileText,
  Lock,
  Scale,
  GraduationCap
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const { onOpenConsultation, onOpenAIAdvisor } = useApp();
  const [selectedPracticeArea, setSelectedPracticeArea] = useState(null);
  const [selectedAttorney, setSelectedAttorney] = useState(null);
  const [emailNewsletter, setEmailNewsletter] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Appointment Form State
  const [apptName, setApptName] = useState('');
  const [apptPhone, setApptPhone] = useState('');
  const [apptEmail, setApptEmail] = useState('');
  const [apptDate, setApptDate] = useState('');
  const [apptMessage, setApptMessage] = useState('');
  const [apptSubmitted, setApptSubmitted] = useState(false);

  // High-resolution portraits for featured attorneys
  const antonPortrait = "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop";
  const gregoryPortrait = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";

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
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. ABOUT US SECTION */}
      <section className="relative bg-[#FAF8F5] text-[#1A1815] py-24 px-6 lg:px-8 overflow-hidden">
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop')`
          }}
        />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          {/* Header row */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.2em] block">
                ABOUT 757 DEFENSE
              </span>
              <h2 className="font-crimson text-4xl sm:text-5xl font-bold text-[#12100E] leading-tight">
                Top Rated Criminal & <br />DUI Defense Lawyers
              </h2>
              <div className="pt-2">
                <button 
                  onClick={() => router.push('/attorneys')}
                  className="px-8 py-3.5 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold text-xs uppercase tracking-[0.15em] transition-all shadow-md cursor-pointer rounded-xs"
                >
                  READ OUR STORY
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#3D3A35] font-light leading-relaxed">
              <p>
                757 Defense delivers aggressive, trial-tested criminal representation across Virginia Beach, Norfolk, Chesapeake, Portsmouth, Hampton, and Newport News courts. Founded by former public defender, we know exactly how the Commonwealth builds its case—and how to dismantle it.
              </p>
              <p>
                Whether you face DUI charges, reckless driving, domestic violence allegations, drug distribution or other criminal charges you will need an expert in criminal defense. To protect your rights your good name and your freedom
              </p>
            </div>
          </motion.div>

          {/* Certificate badge & Team image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="w-full h-[320px] sm:h-[450px] overflow-hidden border border-black/10 shadow-xl rounded-xs">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
                alt="757 Defense Executive Trial Partners"
                className="w-full h-full object-cover object-center filter grayscale-[15%] contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* FEATURED EXPERIENCE & TRUST SECTION */}
      <ExperienceTrustSection />

      {/* 3. OUR BENEFITS / WHY CHOOSE OUR DEFENSE LAWYERS? */}
      <section className="relative bg-[#12100E] text-[#F5F2ED] py-24 px-6 lg:px-8 border-t border-[#D9AD74]/20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none filter brightness-50"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1600&auto=format&fit=crop')`
          }}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.2em] block">
              THE 757 ADVANTAGE
            </span>

            <h2 className="font-crimson text-4xl sm:text-5xl font-bold text-[#F5F2ED]">
              Why Choose 757 Defense?
            </h2>

            <p className="text-[#D8D4CE]/70 text-xs sm:text-sm font-light leading-relaxed">
              When your freedom, reputation, and your well being are on the line, you need criminal attorneys who know local judges and Commonwealth prosecutors inside and out.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-light text-[#D8D4CE]">
              {[
                "24/7 Emergency Arrest & Bail Hotline",
                "Hundreds of DUI & Reckless Cases Defended",
                "Direct Senior Partner Representation",
                "Transparent Flat-Fee Defense Pricing"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 bg-[#D9AD74] text-[#0F0F0F] rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm h-[420px] overflow-hidden border border-[#D9AD74]/40 shadow-2xl rounded-xs">
              <img 
                src="https://images.pexels.com/photos/32266781/pexels-photo-32266781.jpeg"
                alt="757 Defense Trial Partner"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

        </div>
      </section>

      

      {/* 5. STATS & FREE CASE EVALUATION APPOINTMENT FORM */}
      <section className="bg-[#FAF8F5] text-[#12100E] pb-24 px-6 pt-24 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-5 space-y-2">
              <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.2em] block">
                TRIAL RECORD
              </span>
              <h2 className="font-crimson text-4xl font-bold text-[#12100E]">
                Proven Courtroom Results
              </h2>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#524E48] font-light leading-relaxed">
              <p>
                We review common wealth evidence :Inspect every police breathalyzer calibration, officer bodycam recording, witness testimonies and field sobriety test protocol for constitutional violations.
              </p>
              <p>
                From motion hearings to jury trials, 757 Defense leaves no stone unturned to safeguard your driving record and freedom.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "2000+", label: "Cases Defended" },
              { num: "24/7", label: "Emergency Hotline" },
              { num: "100%", label: "Confidential Review" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#12100E] text-[#F5F2ED] p-6 text-center border border-[#D9AD74]/30 shadow-xl space-y-2 rounded-xs hover:border-[#D9AD74] transition-colors"
              >
                <div className="font-crimson text-4xl sm:text-5xl font-bold text-[#D9AD74]">{stat.num}</div>
                <div className="text-xs uppercase tracking-wider text-[#D8D4CE]/80 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#EFE8DC] border border-[#D9AD74]/40 shadow-2xl rounded-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-5 relative min-h-[320px]">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
                alt="757 Defense Courthouse Consultation"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div>
                <h3 className="font-crimson text-3xl font-bold text-[#12100E] uppercase tracking-wide">
                  REQUEST FREE CASE REVIEW
                </h3>
                <p className="text-xs text-[#524E48] font-light mt-1">
                  Connect immediately with senior criminal partners Anton Karpov or Gregory Pugh.
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
                  placeholder="Details of charge or court date (Virginia Beach, Norfolk, Chesapeake...)"
                  value={apptMessage}
                  onChange={(e) => setApptMessage(e.target.value)}
                  className="w-full bg-white border border-black/10 p-4 text-xs focus:outline-none focus:border-[#D9AD74] rounded-xs"
                />

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold text-xs uppercase tracking-[0.2em] transition-all cursor-pointer shadow-lg rounded-xs"
                >
                  TRANSMIT CONFIDENTIAL REQUEST
                </button>

                {apptSubmitted && (
                  <p className="text-xs text-emerald-800 font-bold pt-2">
                    ✓ Request transmitted! A senior 757 Defense trial lawyer will call you within 15 minutes.
                  </p>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 6. LEGAL PRACTICE AREAS */}
      <section className="relative bg-[#0B0907] text-[#F5F2ED] py-24 px-6 lg:px-8 border-t border-[#D9AD74]/20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none filter brightness-50" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1600&auto=format&fit=crop')`
          }}
        />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-2"
          >
            <span className="text-[#D9AD74] font-serif italic text-sm tracking-[0.2em] uppercase block">
              OUR PRACTICE AREAS
            </span>
            <h2 className="font-crimson text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F2ED]">
              Virginia Criminal Defense
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, idx) => (
              <motion.div 
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedPracticeArea(area);
                }}
                className="bg-[#12100E]/90 p-8 rounded-xs border border-white/10 hover:border-[#D9AD74] transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-4 shadow-xl hover:shadow-[#D9AD74]/10 transform hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xs border border-[#D9AD74]/30 bg-[#0E0C0A] text-[#D9AD74] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h3 className="font-crimson text-2xl font-bold text-[#F5F2ED] group-hover:text-[#D9AD74] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-[#D8D4CE]/70 font-light leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center text-xs font-bold text-[#D9AD74] group-hover:underline uppercase tracking-wider">
                  Learn Defenses & Penalties →
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. ATTORNEY SPOTLIGHT SECTION (REPLACED CLIENT REVIEW SECTION) */}
      <section className="relative bg-[#0B0907] text-[#F5F2ED] py-24 px-6 lg:px-8 border-t border-[#D9AD74]/20 overflow-hidden font-poppins">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D9AD74]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-14 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.25em] flex items-center justify-center gap-2">
              <Scale className="w-4 h-4 text-[#D9AD74]" />
              LEADERSHIP & LEGAL EXPERIENCE
            </span>
            <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F2ED] uppercase tracking-tight">
              Meet Our Trial Attorneys
            </h2>
            <div className="w-16 h-0.5 bg-[#D9AD74] mx-auto opacity-70" />
          </div>

          {/* 2-Column Grid for Both Attorney Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            
            {/* ================= ATTORNEY 1: ANTON KARPOV ================= */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#14120F] border border-[#D9AD74]/30 rounded-xs overflow-hidden shadow-2xl flex flex-col sm:flex-row group hover:border-[#D9AD74]/60 transition-all"
            >
              {/* Image Column */}
              <div className="sm:w-2/5 relative h-72 sm:h-auto min-h-[300px] bg-[#0E0C0A] overflow-hidden shrink-0">
                <img 
                  src="/images/owner.jpg"
                  alt="Anton Karpov, Esq."
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14120F] via-transparent to-transparent sm:hidden" />
              </div>

              {/* Content Column */}
              <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[#D9AD74]">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-widest font-semibold">William & Mary Law ('06)</span>
                  </div>
                  <h3 className="font-crimson text-2xl font-bold text-[#F5F2ED] uppercase tracking-wider">
                    ANTON KARPOV, ESQ.
                  </h3>
                  <p className="text-xs text-[#D9AD74] font-medium">
                    Criminal & Traffic Defense • Personal Injury
                  </p>
                  <p className="text-xs text-[#D8D4CE]/80 font-light leading-relaxed pt-1">
                    Obtained his Law Degree in 2006 from William & Mary Law School. He began his legal career as a Public Defender in Virginia Beach. For twelve years, he fought fiercely and passionately for each client, tried hundreds of criminal cases, argued legal motions in Juvenile, General District, and Circuit Courts, and argued before the Virginia Court of Appeals and Supreme Court of Virginia.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#D8D4CE]/70">
                  <ShieldCheck className="w-4 h-4 text-[#D9AD74]" />
                  <span>Former Virginia Beach Public Defender</span>
                </div>
              </div>
            </motion.div>


            {/* ================= ATTORNEY 2: GREGORY K. PUGH ================= */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#14120F] border border-[#D9AD74]/30 rounded-xs overflow-hidden shadow-2xl flex flex-col sm:flex-row group hover:border-[#D9AD74]/60 transition-all"
            >
              {/* Image Column */}
              <div className="sm:w-2/5 relative h-72 sm:h-auto min-h-[300px] bg-[#0E0C0A] overflow-hidden shrink-0">
                <img 
                  src="/images/attorney.jpg"
                  alt="Gregory K. Pugh, Esq."
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14120F] via-transparent to-transparent sm:hidden" />
              </div>

              {/* Content Column */}
              <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[#D9AD74]">
                    <Award className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-widest font-semibold">LL.M. William & Mary ('91)</span>
                  </div>
                  <h3 className="font-crimson text-2xl font-bold text-[#F5F2ED] uppercase tracking-wider">
                    GREGORY K. PUGH, ESQ.
                  </h3>
                  <p className="text-xs text-[#D9AD74] font-medium">
                    Civil Litigation • Bankruptcy • Criminal Defense
                  </p>
                  <p className="text-xs text-[#D8D4CE]/80 font-light leading-relaxed pt-1">
                    Obtained his Juris Doctor degree from Pettit College of Law at Ohio Northern University in 1981 and an advanced Master of Laws Degree (LLM) from William & Mary in 1991. He has actively practiced in Virginia courts since 1988 and opened his own practice in 1996, specializing in civil litigation, bankruptcy, traffic, and criminal defense.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#D8D4CE]/70">
                  <ShieldCheck className="w-4 h-4 text-[#D9AD74]" />
                  <span>35+ Years Active Virginia Trial Practice</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 8. 55+ YEARS EXPERIENCE BANNER */}
      <section className="bg-[#FAF8F5] text-[#12100E] py-24 px-6 lg:px-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-around gap-8 p-8 bg-[#14120F] border border-[#D9AD74]/30 shadow-2xl rounded-xs"
          >
            <div className="flex items-center gap-4">
              <span className="font-crimson text-6xl font-bold text-[#D9AD74]">55+</span>
              <span className="font-crimson text-base uppercase tracking-wider text-[#F5F2ED]">
                years of combined <br />trial experience
              </span>
            </div>

            <div className="text-center">
              <span className="font-crimson text-4xl font-bold text-[#F5F2ED] block">1,000+</span>
              <span className="text-xs text-[#D8D4CE]/60 uppercase tracking-wider">Criminal & Defended Cases</span>
            </div>

            <div className="text-center">
              <span className="font-crimson text-4xl font-bold text-white block"></span>
              <span className="text-lg text-white uppercase tracking-wider">We are proud of the Results of our Work</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "DUI & DWI", tag: "Virginia Beach & Norfolk", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop" },
              { title: "Reckless Driving", tag: "Speeding & Traffic Defense", img: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=600&auto=format&fit=crop" },
              { title: "Domestic Violence", tag: "Protective Orders & Assault", img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=600&auto=format&fit=crop" }
            ].map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => router.push('/practice-areas')}
                className="relative h-80 overflow-hidden border border-white/10 hover:border-[#D9AD74] transition-all group cursor-pointer rounded-xs"
              >
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-crimson text-xl font-bold text-[#F5F2ED] uppercase tracking-wider">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#D9AD74]">{cat.tag}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. LATEST LEGAL BLOG ARTICLES */}
      {/* <section className="bg-[#FAF8F5] text-[#12100E] py-24 px-6 lg:px-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.2em] block">
              VIRGINIA LAW BLOG
            </span>
            <h2 className="font-crimson text-4xl sm:text-5xl font-bold text-[#12100E]">
              Virginia Defense & Legal Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "WHAT TO DO IMMEDIATELY IF ARRESTED FOR DUI IN VIRGINIA BEACH", date: "May 20, 2026" },
              { title: "HOW RECKLESS DRIVING OVER 85 MPH IS PENALIZED IN VIRGINIA", date: "June 14, 2026" },
              { title: "NAVIGATING MILITARY UCMJ CHARGES AT NAVAL STATION NORFOLK", date: "July 02, 2026" }
            ].map((news, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border border-[#D9AD74]/30 p-6 space-y-4 shadow-lg hover:border-[#D9AD74] transition-all rounded-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="font-crimson text-lg font-bold text-[#12100E] leading-snug">
                    {news.title}
                  </h3>
                  <div className="text-[11px] text-[#524E48] font-light">
                    757 Defense Trial Team | {news.date}
                  </div>
                  <p className="text-xs text-[#524E48] font-light leading-relaxed">
                    Essential court guidance and defense strategy analysis from our senior Virginia attorneys.
                  </p>
                </div>
                <button 
                  onClick={() => router.push('/blog')}
                  className="text-xs font-bold text-[#D9AD74] hover:underline uppercase tracking-wider block pt-2 cursor-pointer text-left"
                >
                  Read Full Article »
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => router.push('/blog')}
              className="text-xs font-bold text-[#D9AD74] hover:underline uppercase tracking-wider cursor-pointer"
            >
              View All Virginia Legal Articles »
            </button>
          </div>

        </div>
      </section> */}

      {/* 10. NEWSLETTER SECTION */}
      <section className="relative bg-[#0E0C0A] text-[#F5F2ED] py-24 px-6 lg:px-8 border-t border-[#D9AD74]/20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F2ED] tracking-wide"
          >
            Subscribe to Virginia Legal Updates
          </motion.h2>

          <p className="text-xs sm:text-sm text-[#D8D4CE]/70 max-w-xl mx-auto font-light leading-relaxed">
            Stay informed on changes to Virginia criminal laws, DUI defense strategies, and court procedures in Virginia Beach and Norfolk.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-4">
            <input 
              type="email"
              placeholder="Enter your email address..."
              value={emailNewsletter}
              onChange={(e) => setEmailNewsletter(e.target.value)}
              required
              className="w-full sm:w-auto flex-1 bg-[#161412] border border-[#D9AD74]/30 px-4 py-3 text-xs text-[#F5F2ED] placeholder-[#D8D4CE]/40 focus:outline-none focus:border-[#D9AD74] rounded-xs"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold text-xs uppercase tracking-widest transition-all rounded-xs cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {newsletterSubscribed && (
            <p className="text-xs text-[#D9AD74] font-medium pt-2">
              ✓ Thank you for subscribing to 757 Defense legal updates!
            </p>
          )}
        </div>
      </section>

      {/* MODALS */}
      {selectedPracticeArea && (
        <PracticeAreaModal 
          area={selectedPracticeArea} 
          onClose={() => setSelectedPracticeArea(null)} 
          onOpenConsultation={onOpenConsultation}
        />
      )}

      {selectedAttorney && (
        <AttorneyModal 
          attorney={selectedAttorney} 
          onClose={() => setSelectedAttorney(null)} 
        />
      )}

    </div>
  );
}