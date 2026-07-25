'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Phone,
  Mail,
  ChevronDown,
  MessageSquare,
  Scale,
  Award,
  Users,
  Gavel,
  ShieldAlert,
  Target,
  Star
} from 'lucide-react';

export default function CriminalDefenseServicePage({ navigate, onOpenConsultation }) {
  const [openFaqs, setOpenFaqs] = useState({ 0: true });
  const toggleFaq = (id) => setOpenFaqs(prev => ({ ...prev, [id]: !prev[id] }));

  const faqs = [
    { q: "What should I do if I am arrested in Virginia Beach?", a: "Contact a defense criminal attorney from 757Defense as soon as possible to ensure your rights are protected and to receive expert legal advice." },
    { q: "How do I know if I need a criminal defense attorney?", a: null },
    { q: "How can a top-rated car accident attorney help me?", a: null },
    { q: "What factors should I consider when choosing a car accident attorney?", a: null },
    { q: "How much does it cost to hire a defense criminal attorney or car accident attorney?", a: null }
  ];

  const whyChooseUs = [
    { title: "Expertise and Experience", text: "Our attorneys have extensive experience in handling both criminal defense and car accident cases. We bring a deep understanding of Virginia law and a proven track record of success in the courtroom." },
    { title: "Client-Centered Approach", text: "We prioritize your needs and concerns, offering personalized attention and tailored legal strategies. We understand that each case is unique and work diligently to address your specific circumstances." },
    { title: "Aggressive Advocacy", text: "Whether you are fighting criminal charges or seeking compensation for an injury, we advocate vigorously on your behalf." },
    { title: "Transparent Communication", text: "We believe in clear and honest communication throughout the legal process. You will always be informed about the status of your case and any important developments." }
  ];

  return (
    <div className="bg-[#0B0A08] text-[#D8D4CE] min-h-screen font-poppins selection:bg-[#D9AD74] selection:text-[#0F0F0F]">

      {/* 1. HERO */}
      <section className="relative bg-[#0F0E0C] text-[#F5F2ED] py-16 md:py-24 overflow-hidden border-b border-[#D9AD74]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-4">
            <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.3em] block">
              HOME &nbsp;/&nbsp; SERVICES &nbsp;/&nbsp; DEFENSE CRIMINAL ATTORNEY
            </span>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#D9AD74]/10 border border-[#D9AD74]/30 rounded-xs">
              <Star className="w-3.5 h-3.5 text-[#D9AD74]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D9AD74]">
                Top defense criminal attorney &amp; Top-rated car accident attorney Virginia
              </span>
            </div>
            <h1 className="font-crimson text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#F5F2ED] tracking-wide leading-[1.05]">
              defense <span className="text-[#D9AD74]">criminal attorney</span>
            </h1>
            <div className="flex flex-wrap gap-3 pt-4">
              <a href="tel:7579079075" className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] rounded-xs shadow-2xl transition-all group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Call (757) 907-9075</span>
              </a>
              <button onClick={() => navigate && navigate('/contact')} className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#FAF8F5]/5 hover:bg-[#D9AD74]/10 border border-[#D9AD74]/40 hover:border-[#D9AD74] text-[#F5F2ED] rounded-xs transition-all group">
                <MessageSquare className="w-4 h-4 text-[#D9AD74] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Welcome / Intro */}
      <section className="bg-[#FAF8F5] text-[#1A1815] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#D9AD74] rounded-xs -z-0" />
                <div className="relative w-full h-[480px] rounded-xs overflow-hidden shadow-2xl border border-black/10">
                  <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=900&auto=format&fit=crop"
                    alt="Defense Criminal Attorney - 757Defense"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">Defense Criminal Attorney</p>
                <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12100E] leading-tight">
                  Welcome to 757Defense, your trusted legal partner in Virginia Beach.
                </h2>
                <div className="h-0.5 w-20 bg-[#D9AD74]" />
              </div>
              <div className="space-y-5 text-sm sm:text-[15px] text-[#3D3A35] font-light leading-[1.85]">
                <p>
                  At our law firm, we understand how stressful and life-changing legal troubles can be. Whether you're facing criminal charges or dealing with the aftermath of a car accident in Virginia Beach, you don't have to go through it alone. Our team is here to offer clear guidance, strong advocacy, and the personal attention your case deserves.
                </p>
                <p>
                  As experienced criminal defense lawyers, we're committed to protecting your rights and helping you navigate the legal system with confidence. We take the time to understand your situation and build a strategy that fits your unique needs. Whether you're looking for a trusted criminal defense lawyer or a skilled car accident attorney, our firm is dedicated to getting the best possible outcome for you, every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO - 2 Cards */}
      <section className="bg-[#0E0C0A] text-[#F5F2ED] py-20 px-6 lg:px-8 border-y border-[#D9AD74]/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">What We Do</p>
            <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide leading-tight">
              At 757Defense, we offer comprehensive legal services to address a range of legal issues. Our primary areas of focus include:
            </h2>
            <div className="h-0.5 w-20 bg-[#D9AD74] mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-[#12100E] to-[#0F0E0C] border border-[#D9AD74]/30 rounded-xs overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#D9AD74] via-[#F5F2ED] to-[#D9AD74]" />
              <div className="p-8 sm:p-10 space-y-5">
                <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                  <div className="w-16 h-16 bg-[#D9AD74]/15 border border-[#D9AD74]/40 group-hover:bg-[#D9AD74] group-hover:border-[#D9AD74] rounded-xs flex items-center justify-center shrink-0 transition-all">
                    <ShieldAlert className="w-8 h-8 text-[#D9AD74] group-hover:text-[#0F0F0F] transition-colors" />
                  </div>
                  <h3 className="font-crimson text-2xl sm:text-3xl font-extrabold tracking-wide">
                    Defense Criminal Attorney
                  </h3>
                </div>
                <p className="text-sm sm:text-[15px] text-[#D8D4CE]/80 font-light leading-[1.9]">
                  If you are facing criminal charges, our team of skilled defense criminal attorney is dedicated to protecting your rights and building a robust defense. We handle cases involving misdemeanors, felonies, and everything in between. Our approach is thorough, strategic, and personalized to your specific case.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white text-[#1A1815] border border-black/10 rounded-xs overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0F0E0C] via-[#D9AD74] to-[#0F0E0C]" />
              <div className="p-8 sm:p-10 space-y-5">
                <div className="flex items-center gap-4 pb-4 border-b border-black/5">
                  <div className="w-16 h-16 bg-[#12100E] border border-[#D9AD74]/50 group-hover:bg-[#D9AD74] group-hover:border-[#D9AD74] rounded-xs flex items-center justify-center shrink-0 transition-all">
                    <svg className="w-8 h-8 text-[#D9AD74] group-hover:text-[#0F0F0F] transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" /></svg>
                  </div>
                  <h3 className="font-crimson text-2xl sm:text-3xl font-extrabold tracking-wide text-[#12100E]">
                    Car Accident Representation
                  </h3>
                </div>
                <p className="text-sm sm:text-[15px] text-[#524E48] font-light leading-[1.9]">
                  If you have been involved in a car accident, our top-rated car accident attorneys are here to help you navigate the complexities of insurance claims and personal injury lawsuits. We work tirelessly to ensure you receive the compensation you deserve for your injuries, property damage, and other losses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HIGHLY-TRAINED TEAM */}
      <section className="bg-[#FAF8F5] text-[#1A1815] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <div className="relative">
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#D9AD74] rounded-xs -z-0" />
                <div className="relative w-full h-[460px] rounded-xs overflow-hidden shadow-2xl border border-black/10">
                  <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=900&auto=format&fit=crop"
                    alt="Highly-Trained Team of Skilled Car Accident Attorneys"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:order-1 space-y-6">
              <div className="space-y-3">
                <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12100E] leading-tight">
                  A Highly-Trained Team of Skilled Car Accident Attorneys
                </h2>
                <div className="h-0.5 w-20 bg-[#D9AD74]" />
              </div>
              <div className="space-y-5 text-sm sm:text-[15px] text-[#3D3A35] font-light leading-[1.85]">
                <p>
                  Behind every great attorney is a trusted team of professionals working together to support your case from every angle. Whether it's a top-rated car accident attorney or an experienced criminal defense lawyer, success comes from strong collaboration and attention to detail.
                </p>
                <p>
                  In complex cases—like car accidents involving medical records, witness accounts, and official reports—this team effort becomes even more critical. From gathering key evidence to dealing with insurance companies, a well-coordinated legal team ensures nothing is missed. The same approach applies when you're working with a criminal defense lawyer, where every detail can make a difference in protecting your rights.
                </p>
              </div>
              <button onClick={() => navigate && navigate('/attorneys')} className="group inline-flex items-center gap-3 px-7 py-4 bg-[#12100E] hover:bg-[#D9AD74] hover:text-[#0F0F0F] text-[#F5F2ED] border-2 border-[#12100E] hover:border-[#D9AD74] rounded-xs transition-all">
                <Users className="w-4 h-4 text-[#D9AD74] group-hover:text-[#0F0F0F]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em]">Meet Our Attorneys</span>
                <ArrowRight className="w-4 h-4 text-[#D9AD74] group-hover:text-[#0F0F0F] group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          </div>

          {/* VIEW ALL SERVICES ROW */}
          <div className="mt-20 text-center">
            <button onClick={() => navigate && navigate('/practice-areas')} className="group inline-flex items-center gap-3 px-10 py-4.5 bg-[#12100E] hover:bg-[#0F0F0F] text-[#F5F2ED] border-2 border-[#D9AD74] rounded-xs shadow-xl hover:shadow-[0_20px_40px_-12px_rgba(217,173,116,0.4)] transition-all">
              <Scale className="w-5 h-5 text-[#D9AD74] group-hover:scale-110 transition-transform" />
              <span className="font-crimson text-sm sm:text-base font-extrabold uppercase tracking-[0.2em]">
                VIEW ALL SERVICES
              </span>
              <ArrowRight className="w-5 h-5 text-[#D9AD74] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="bg-[#0E0C0A] text-[#F5F2ED] py-20 px-6 lg:px-8 border-y border-[#D9AD74]/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-2 space-y-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">Why Choose Us</p>
              <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide leading-tight">
                Why Choose <span className="text-[#D9AD74]">757Defense</span>
              </h2>
              <div className="h-0.5 w-20 bg-[#D9AD74]" />
              <div className="space-y-4 text-xs sm:text-sm text-[#D8D4CE]/75 font-light leading-[1.85]">
                <p>
                  At 757Defense, we know how overwhelming it can be to choose the right attorney after a car accident. You're dealing with stress, uncertainty, and a lot of questions — and that's exactly why we're here. With decades of experience and a dedicated legal team, we're committed to standing up for your rights and fighting for the outcome you deserve.
                </p>
                <p>
                  We've built a strong reputation in Virginia Beach for achieving favorable settlements, and we're always ready to take your case to trial if that's what it takes. Whether you need a skilled car accident attorney or an experienced criminal defense lawyer, our team is here to support you with care and determination.
                </p>
                <p>
                  757Defense is proud to offer exceptional legal representation to clients throughout Virginia Beach, USA. From aggressive courtroom advocacy to personalized legal guidance, we're the top choice for anyone seeking a top-rated car accident attorney or a trusted criminal defense lawyer who truly has your back.
                </p>
              </div>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {whyChooseUs.map((item, idx) => (
                <div key={item.title} className="group bg-[#12100E] hover:bg-[#181411] border border-[#D9AD74]/20 hover:border-[#D9AD74]/50 rounded-xs p-6 transition-all">
                  <div className="w-11 h-11 bg-[#D9AD74]/15 border border-[#D9AD74]/35 group-hover:bg-[#D9AD74] group-hover:border-[#D9AD74] rounded-xs flex items-center justify-center mb-4 transition-all">
                    <span className="font-crimson text-sm font-extrabold text-[#D9AD74] group-hover:text-[#0F0F0F] transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-crimson text-lg font-extrabold tracking-wide mb-2">{item.title}</h3>
                  <p className="text-xs text-[#D8D4CE]/75 font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="bg-[#FAF8F5] text-[#1A1815] py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">Frequently Asked Questions (FAQs)</p>
            <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12100E] leading-tight">FAQs</h2>
            <div className="h-0.5 w-20 bg-[#D9AD74] mx-auto" />
          </div>
          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openFaqs[idx];
              return (
                <div key={idx} className="group relative bg-white border border-black/10 rounded-xs overflow-hidden shadow-sm hover:shadow-lg transition-all">
                  <div className={`absolute left-0 top-0 h-full w-[3px] transition-all ${isOpen ? 'bg-[#D9AD74]' : 'bg-transparent group-hover:bg-[#D9AD74]/30'}`} />
                  <button onClick={() => toggleFaq(idx)} className="w-full flex items-start gap-4 sm:gap-6 p-5 sm:p-6 pl-6 sm:pl-8 text-left">
                    <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex flex-col items-center justify-center rounded-xs border-2 transition-all ${isOpen ? 'bg-[#D9AD74] border-[#D9AD74] text-[#0F0F0F]' : 'bg-[#0F0E0C]/5 border-[#0F0E0C]/20 text-[#12100E] group-hover:border-[#D9AD74] group-hover:text-[#D9AD74]'}`}>
                      <span className="font-crimson text-lg sm:text-xl font-extrabold leading-none">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="flex-1 font-crimson text-base sm:text-lg font-bold text-[#12100E] leading-snug pt-2">{item.q}</h3>
                    <div className={`flex-shrink-0 w-9 h-9 mt-1 rounded-full flex items-center justify-center border transition-all ${isOpen ? 'bg-[#D9AD74] border-[#D9AD74] text-[#0F0F0F]' : 'bg-[#FAF8F5] border-black/10 text-[#524E48] group-hover:border-[#D9AD74] group-hover:text-[#D9AD74]'}`}>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  {isOpen && item.a && (
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 -mt-2">
                      <div className="flex gap-4 sm:gap-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 opacity-0" />
                        <div className="flex-1">
                          <div className="h-px w-16 bg-[#D9AD74]/50 mb-4" />
                          <p className="text-sm sm:text-[15px] text-[#524E48] font-light leading-[1.9]">{item.a}</p>
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

      {/* 7. FINAL CTA */}
      <section className="bg-[#0F0E0C] text-[#F5F2ED] py-20 px-6 lg:px-8 border-t border-[#D9AD74]/20">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-wide">
            If you are in need of a defense criminal attorney or a top-rated car accident attorney in Virginia Beach USA, 757Defense is here to help.
          </h2>
          <p className="text-xs sm:text-sm text-[#D8D4CE]/80 font-light max-w-3xl mx-auto leading-relaxed">
            Contact us today to schedule a consultation and discuss your case with our dedicated team of legal professionals. We are committed to providing the highest quality legal representation and ensuring that your rights are protected.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button onClick={() => navigate && navigate('/contact')} className="group inline-flex items-center gap-3 px-10 py-5 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] rounded-xs shadow-2xl transition-all">
              <Target className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-crimson text-base font-extrabold uppercase tracking-[0.22em]">CONTACT US</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="tel:7579079075" className="inline-flex items-center gap-3 px-10 py-5 bg-[#FAF8F5]/5 hover:bg-[#D9AD74]/10 border-2 border-[#D9AD74]/40 hover:border-[#D9AD74] rounded-xs transition-all group">
              <Phone className="w-5 h-5 text-[#D9AD74] group-hover:scale-110 transition-transform" />
              <span className="font-crimson text-base font-extrabold uppercase tracking-[0.22em] text-[#F5F2ED]">(757) 907-9075</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
