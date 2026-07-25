'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Phone,
  ChevronDown,
  MessageSquare,
  Gavel,
  Target,
  ShieldAlert
} from 'lucide-react';

export default function TrafficTicketServicePage({ navigate, onOpenConsultation }) {
  const [openFaqs, setOpenFaqs] = useState({ 0: true });
  const toggleFaq = (id) => setOpenFaqs(prev => ({ ...prev, [id]: !prev[id] }));

  const faqs = [
    { q: "What should I do if I receive a traffic ticket?", a: "If you receive a traffic ticket, the first step is to carefully review the citation for accuracy. Pay attention to the details such as the date, time, and location of the violation.. Consulting with a traffic ticket lawyer from 757defense can help you understand your options and the potential consequences of your decision. A lawyer can provide advice on how to proceed and represent you in court if needed." },
    { q: "How can a traffic ticket lawyer help with my case?", a: null },
    { q: "How can I find a good traffic ticket lawyer?", a: null },
    { q: "What can I expect during the legal process for a traffic violation?", a: null }
  ];

  const whatWeDo = [
    {
      title: "Expert Knowledge of Traffic Laws",
      para1: "Traffic laws can be confusing, especially since they often vary from place to place. That's why having someone who truly understands the local system is so important. When you work with a Reckless Driving Lawyer from 757Defense in Virginia, you're getting more than just legal support — you're getting someone who knows the ins and outs of state and local traffic laws.",
      para2: "This deep understanding allows our team to spot legal errors or procedural mistakes that could help your case. Whether you're facing a minor traffic ticket or a serious charge like reckless driving, an experienced Reckless Driving Lawyer can build a strong defense tailored to your situation, giving you the best chance at a fair outcome."
    },
    {
      title: "Negotiation Skills",
      para1: "One of the key roles of a traffic ticket lawyer is to negotiate on your behalf. They can work with the prosecutor to reduce the charges or penalties associated with your traffic violation.",
      para2: "This might include negotiating for a lower fine, reduced points on your driving record, or even a dismissal of the charges."
    },
    {
      title: "Court Representation",
      para1: "If your case goes to court, having a good traffic ticket lawyer in Virginia from 757defense can be a significant advantage.",
      para2: "They will represent you in court, presenting your case effectively and arguing on your behalf. Their courtroom experience and legal expertise can greatly increase your chances of a favorable outcome."
    },
    {
      title: "Mitigating the Impact on Your Driving Record",
      para1: "Traffic violations can lead to points on your driving record, which can result in increased insurance rates and even a suspended license.",
      para2: "A traffic violation lawyer in Virginia can help mitigate these effects by working to reduce or eliminate points and avoid license suspension."
    }
  ];

  const whyChooseUs = [
    { title: "Experienced Attorneys", text: "Our team consists of experienced traffic ticket lawyers who have successfully handled a wide range of traffic cases. We understand the intricacies of traffic law and how to apply it effectively to benefit our clients." },
    { title: "Personalized Approach", text: "We believe in a personalized approach to every case. We take the time to understand your Case situation and tailor our legal and unique strategies to meet your specific Case needs. Your case is important to us, and we work tirelessly to achieve the best possible results." },
    { title: "Proven Track Record", text: "We have a history of successfully resolving traffic violation cases, whether through negotiation, reduction of charges, or dismissal. Our clients' satisfaction is our top priority, and we strive to deliver outstanding results." },
    { title: "Clear Communication", text: "We believe in clear and honest communication throughout the legal process. You will always be informed about the status of your case and any important developments." }
  ];

  return (
    <div className="bg-[#0B0A08] text-[#D8D4CE] min-h-screen font-poppins selection:bg-[#D9AD74] selection:text-[#0F0F0F]">

      {/* 1. HERO */}
      <section className="relative bg-[#0F0E0C] text-[#F5F2ED] py-16 md:py-24 overflow-hidden border-b border-[#D9AD74]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-4">
            <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.3em] block">
              HOME &nbsp;/&nbsp; SERVICES &nbsp;/&nbsp; TRAFFIC TICKET LAWYER
            </span>
            <h1 className="font-crimson text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-wide leading-[1.05]">
              <span className="text-[#D9AD74]">Good Traffic Ticket</span> <br className="hidden sm:block" />
              Lawyer
            </h1>
            <p className="font-crimson text-2xl sm:text-3xl font-bold text-[#F5F2ED]/80 tracking-wide">
              A Good Traffic Ticket Lawyer from 757defense
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <a href="tel:7579079075" className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] rounded-xs shadow-2xl transition-all group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Call (757) 907-9075</span>
              </a>
              <button onClick={() => navigate && navigate('/contact')} className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#FAF8F5]/5 hover:bg-[#D9AD74]/10 border border-[#D9AD74]/40 hover:border-[#D9AD74] rounded-xs transition-all group">
                <MessageSquare className="w-4 h-4 text-[#D9AD74] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Free Ticket Review</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro / Traffic Ticket Lawyer Role */}
      <section className="bg-[#FAF8F5] text-[#1A1815] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#D9AD74] rounded-xs -z-0" />
                <div className="relative w-full h-[520px] rounded-xs overflow-hidden shadow-2xl border border-black/10">
                  <img
                    src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=900&auto=format&fit=crop"
                    alt="Traffic Ticket Lawyer - Road Stop with Police"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">Traffic Ticket lawyer</p>
                <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12100E] leading-tight">
                  Understanding the Role of a Good Traffic Ticket Lawyer
                </h2>
                <div className="h-0.5 w-20 bg-[#D9AD74]" />
              </div>
              <div className="space-y-5 text-sm sm:text-[15px] text-[#3D3A35] font-light leading-[1.85]">
                <p>
                  A traffic ticket might seem like a minor issue, but it can have serious consequences, especially if you're facing charges like reckless driving or DUI. That's where having the right legal support makes all the difference. A good Reckless Driving Lawyer is someone who not only understands the law but also knows how to fight for the best outcome in your case.
                </p>
                <p>
                  At 757Defense, our experienced traffic violation lawyers in Virginia are here to guide you every step of the way. From explaining your rights to helping you navigate the legal system, we take the time to make sure you fully understand your options. Whether it's a speeding ticket or a more serious charge, working with a skilled Reckless Driving Lawyer ensures you have someone in your corner who's committed to protecting your record, your license, and your future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO - 4 cards */}
      <section className="bg-[#0E0C0A] text-[#F5F2ED] py-20 px-6 lg:px-8 border-y border-[#D9AD74]/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">What We Do</p>
            <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide leading-tight">
              How a Traffic Violation Lawyer <span className="text-[#D9AD74]">Can Help</span>
            </h2>
            <div className="h-0.5 w-20 bg-[#D9AD74] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {whatWeDo.map((item, idx) => (
              <div key={item.title} className="group relative bg-[#12100E] border border-[#D9AD74]/25 hover:border-[#D9AD74]/60 rounded-xs p-7 sm:p-8 overflow-hidden transition-all hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#D9AD74] via-[#F5F2ED] to-[#D9AD74] opacity-60" />
                <div className="space-y-3.5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-[#D9AD74] flex items-center justify-center rounded-xs font-crimson font-extrabold text-lg text-[#0F0F0F]">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-crimson text-xl sm:text-2xl font-extrabold tracking-wide leading-snug pt-1">
                      {item.title}
                    </h3>
                  </div>
                  <div className="space-y-3 pt-1">
                    <p className="text-xs sm:text-[14px] text-[#D8D4CE]/80 font-light leading-[1.85]">{item.para1}</p>
                    <p className="text-xs sm:text-[14px] text-[#D8D4CE]/80 font-light leading-[1.85]">{item.para2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="bg-[#FAF8F5] text-[#1A1815] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-2 space-y-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">
                Why Choose Us for good traffic ticket lawyer
              </p>
              <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12100E] leading-tight">
                Why Choose <span className="text-[#D9AD74]">757defense</span>
              </h2>
              <div className="h-0.5 w-20 bg-[#D9AD74]" />
              <p className="text-xs sm:text-sm text-[#3D3A35] font-light leading-[1.85]">
                At 757defense, we pride ourselves on our commitment to providing exceptional legal representation for traffic violations. Here's why we stand out:
              </p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {whyChooseUs.map((item, idx) => (
                <div key={item.title} className="group bg-white hover:bg-[#FFFBF5] border border-black/10 hover:border-[#D9AD74]/60 rounded-xs p-6 transition-all shadow-sm hover:shadow-xl">
                  <div className="w-11 h-11 bg-[#12100E] group-hover:bg-[#D9AD74] border border-[#D9AD74]/30 group-hover:border-[#D9AD74] rounded-xs flex items-center justify-center mb-4 transition-all">
                    <span className="font-crimson text-sm font-extrabold text-[#D9AD74] group-hover:text-[#0F0F0F] transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-crimson text-lg font-extrabold tracking-wide mb-2 text-[#12100E]">{item.title}</h3>
                  <p className="text-xs text-[#524E48] font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="bg-[#0E0C0A] text-[#F5F2ED] py-20 px-6 lg:px-8 border-y border-[#D9AD74]/20">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9AD74] font-bold">Frequently Asked Questions (FAQs)</p>
            <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide leading-tight">FAQs</h2>
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
                      <span className="font-crimson text-lg sm:text-xl font-extrabold leading-none">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="flex-1 font-crimson text-base sm:text-lg font-bold text-[#F5F2ED] leading-snug pt-2">{item.q}</h3>
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
                          <p className="text-sm sm:text-[15px] text-[#D8D4CE]/85 font-light leading-[1.9]">{item.a}</p>
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

      {/* 6. FINAL CTA */}
      <section className="bg-gradient-to-br from-[#D9AD74] via-[#E8C191] to-[#B88D51] py-16 md:py-20 px-6 lg:px-8 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="absolute top-6 left-10 font-crimson text-[120px] font-extrabold leading-none text-black">757</div>
          <div className="absolute bottom-6 right-10 font-crimson text-[120px] font-extrabold leading-none text-black">DEFENSE</div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-6">
          <h2 className="font-crimson text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#0F0F0F] leading-tight tracking-wide">
            If you're facing a traffic ticket or violation, don't navigate the legal system alone.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#0F0F0F]/85 font-medium max-w-4xl mx-auto leading-relaxed">
            A good traffic ticket lawyer from 757defense in virginia beach can provide the expertise and support you need to achieve a favorable outcome. Our dedicated team is here to help you through every step of the process, from understanding your rights to representing you in court.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[#0F0F0F]/90 font-bold max-w-4xl mx-auto leading-relaxed">
            Contact 757defense today to schedule a consultation and take the first step towards resolving your traffic violation case.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button onClick={() => navigate && navigate('/contact')} className="group inline-flex items-center gap-3 px-10 py-5 bg-[#0F0E0C] hover:bg-black text-[#D9AD74] rounded-xs shadow-2xl transition-all">
              <ShieldAlert className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-crimson text-base font-extrabold uppercase tracking-[0.22em]">CONTACT US</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="tel:7579079075" className="inline-flex items-center gap-3 px-10 py-5 bg-black/15 hover:bg-[#0F0E0C] hover:text-[#D9AD74] text-[#0F0F0F] border-2 border-[#0F0E0C] rounded-xs transition-all group">
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-crimson text-base font-extrabold uppercase tracking-[0.22em]">(757) 907-9075</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
