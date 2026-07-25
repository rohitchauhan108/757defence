'use client';

import React, { useState } from 'react';
import { 
  Scale, 
  Phone, 
  Mail, 
  ChevronDown,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "The police officer calls with some questions, what should I do?",
    answer:
      "You are under no legal obligation to speak with law enforcement or participate in any investigation that may involve you or someone close to you. Virginia law does require citizens to provide identifying information during an official inquiry, but you are NOT required to answer any other questions about the facts they are investigating. Always remember that anything you say can and will be used against you in a court of law. Having an attorney present during any conversation with police is strongly recommended. Keep in mind — police investigators are specifically trained to elicit incriminating responses, and even an offhand remark could be interpreted as an admission of wrongdoing and land you in serious legal trouble."
  },
  {
    id: 2,
    question: "I was accused of a crime but have not been charged or arrested; what should I do?",
    answer:
      "First, contact a criminal defense lawyer immediately. An attorney can check whether there is an active warrant for your arrest and help you locate and preserve any evidence that proves your innocence — including eyewitness names and contact information, surveillance video, text messages, emails, and other digital evidence. An experienced criminal defense attorney can assist with an initial private investigation, potentially contact law enforcement on your behalf, ease your worries, and give you real peace of mind. For that reason, speaking to a criminal defense attorney as soon as possible is critical. We offer a free initial consultation to all interested parties, including close family members."
  },
  {
    id: 3,
    question: "My case was assigned to a public defender or court-appointed lawyer — should I hire my own defense attorney instead?",
    answer:
      "You may get lucky and have your case assigned to an excellent court-appointed lawyer who will take great care of you and your case. However, you cannot choose who is assigned to represent you unless you hire your own attorney of your own choosing. There are many well-qualified and experienced public defenders and court-appointed attorneys who take tremendous pride in their work — but too often they are severely overworked and simply cannot find the time to give every client the individualized attention their case truly deserves. Unfortunately, there are some bad apples in the system as well. Our honest advice: speak with your public defender or court-appointed attorney first, then make an informed decision based on how comfortable you feel moving forward with their representation."
  },
  {
    id: 4,
    question: "What is the difference between a felony and a misdemeanor?",
    answer:
      "In Virginia, a felony is any crime that carries a possible sentence of imprisonment for one year or more. There are six separate categories of felonies (Class 1 through Class 6), each varying widely in severity and length of possible punishment. Misdemeanors — which are divided into four classes — are considered less serious offenses and are punishable by up to 12 months in jail, a fine of up to $2,500, or both, plus additional case-specific consequences such as mandatory counseling, community service, probation, and license suspension, depending on the nature of the offense. In many cases, an experienced defense attorney can convince a judge to reduce a felony charge down to a misdemeanor — even when the evidence in the case appears to support a felony conviction."
  }
];

export default function FAQsPage({ navigate, onOpenConsultation }) {
  const [openItems, setOpenItems] = useState({});
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formQuestion, setFormQuestion] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isOpen = (id) => !!openItems[id];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormName('');
      setFormEmail('');
      setFormPhone('');
      setFormQuestion('');
    }, 4000);
  };

  return (
    <div className="bg-[#0B0A08] text-[#D8D4CE] font-poppins selection:bg-[#D9AD74] selection:text-[#0F0F0F]">
      
      {/* 1. HERO HEADER BANNER */}
      <section className="relative bg-[#0F0E0C] text-[#F5F2ED] py-16 md:py-24 overflow-hidden border-b border-[#D9AD74]/20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop"
            alt="Virginia Courthouse"
            className="w-full h-full object-cover filter brightness-50 contrast-110 opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="space-y-3">
            <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.3em] block">
              HOME &nbsp;/&nbsp; FREQUENTLY ASKED QUESTIONS
            </span>
            <h1 className="font-crimson text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F2ED] tracking-wide">
              Frequently Asked Questions
            </h1>
            <p className="text-xs sm:text-sm text-[#D8D4CE]/70 font-light max-w-2xl leading-relaxed pt-3">
              Get immediate answers to the most common questions about Virginia criminal defense, DUI, and traffic law. 
              Still have questions? Call us 24/7 for a free confidential consultation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FAQ ACCORDION SECTIONS */}
      <section className="bg-[#FAF8F5] text-[#1A1815] py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-3 pb-4">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#D9AD74]/10 border border-[#D9AD74]/30 rounded-xs">
              <HelpCircle className="w-4 h-4 text-[#D9AD74]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D9AD74]">
                Answers From Virginia Trial Lawyers
              </span>
            </div>
            <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12100E] tracking-wide">
              Frequently Asked Questions
            </h2>
            <div className="h-0.5 w-20 bg-[#D9AD74] mx-auto" />
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item) => (
              <div 
                key={item.id}
                className="group relative bg-white border border-black/10 rounded-xs overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                {/* Left gold accent bar on open */}
                <div className={`absolute left-0 top-0 h-full w-[3px] transition-all ${isOpen(item.id) ? 'bg-[#D9AD74]' : 'bg-transparent group-hover:bg-[#D9AD74]/30'}`} />
                
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-start gap-4 sm:gap-6 p-5 sm:p-6 pl-6 sm:pl-8 text-left"
                >
                  {/* Number Badge */}
                  <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex flex-col items-center justify-center rounded-xs border-2 transition-all ${
                    isOpen(item.id)
                      ? 'bg-[#D9AD74] border-[#D9AD74] text-[#0F0F0F]'
                      : 'bg-[#0F0E0C]/5 border-[#0F0E0C]/20 text-[#12100E] group-hover:border-[#D9AD74] group-hover:text-[#D9AD74]'
                  }`}>
                    <span className="font-crimson text-lg sm:text-xl font-extrabold leading-none">
                      {item.id.toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Question */}
                  <h3 className="flex-1 font-crimson text-base sm:text-lg font-bold text-[#12100E] leading-snug pt-2 group-hover:text-[#0F0E0C] transition-colors">
                    {item.question}
                  </h3>
                  
                  {/* Chevron */}
                  <div className={`flex-shrink-0 w-9 h-9 mt-1 rounded-full flex items-center justify-center border transition-all ${
                    isOpen(item.id)
                      ? 'bg-[#D9AD74] border-[#D9AD74] text-[#0F0F0F]'
                      : 'bg-[#FAF8F5] border-black/10 text-[#524E48] group-hover:border-[#D9AD74] group-hover:text-[#D9AD74]'
                  }`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen(item.id) ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                {isOpen(item.id) && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 -mt-2 animate-fadeIn">
                    <div className="flex gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 opacity-0" />
                      <div className="flex-1">
                        <div className="h-px w-16 bg-[#D9AD74]/50 mb-4" />
                        <p className="text-sm sm:text-[15px] text-[#524E48] font-light leading-[1.85]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. ASK A QUESTION CONTACT FORM */}
      <section className="bg-[#0E0C0A] text-[#F5F2ED] py-20 px-6 lg:px-8 border-t border-[#D9AD74]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[#D9AD74] text-xs font-semibold uppercase tracking-[0.2em] block">
                  STILL HAVE QUESTIONS?
                </span>
                <h2 className="font-crimson text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F2ED] leading-tight">
                  Get A Free Legal Answer <br />From Our Attorneys
                </h2>
              </div>
              
              <p className="text-xs sm:text-sm text-[#D8D4CE]/70 font-light leading-relaxed max-w-lg">
                Fill out the confidential form with your question. A senior 757 Defense attorney will personally review 
                your inquiry and respond within one business day. All information is protected by attorney-client privilege.
              </p>

              <div className="space-y-4 pt-2">
                <a 
                  href="tel:7579079075"
                  className="flex items-center gap-4 p-4 bg-[#14120F] border border-[#D9AD74]/30 rounded-xs hover:border-[#D9AD74] transition-colors group"
                >
                  <div className="w-11 h-11 bg-[#D9AD74] text-[#0F0F0F] rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#D9AD74] uppercase tracking-widest font-semibold">Call Us 24/7</p>
                    <p className="font-crimson text-lg font-bold text-[#F5F2ED]">(757) 907-9075</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:757defense@gmail.com"
                  className="flex items-center gap-4 p-4 bg-[#14120F] border border-white/10 rounded-xs hover:border-[#D9AD74] transition-colors group"
                >
                  <div className="w-11 h-11 bg-[#D9AD74]/20 text-[#D9AD74] border border-[#D9AD74]/30 rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#D9AD74] uppercase tracking-widest font-semibold">Email Us</p>
                    <p className="font-crimson text-base font-bold text-[#F5F2ED]">757defense@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D9AD74] via-[#B88D51] to-[#D9AD74] rounded-xl opacity-30 blur-sm" />
              <div className="relative bg-[#121110] border border-[#D9AD74]/30 p-8 sm:p-10 rounded-xs shadow-2xl">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#D9AD74]/20">
                  <div className="w-11 h-11 bg-[#D9AD74] text-[#0F0F0F] rounded-full flex items-center justify-center">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-crimson text-lg font-bold text-[#F5F2ED] uppercase">Confidential Legal Question</h3>
                    <p className="text-[10px] text-[#D8D4CE]/60 tracking-wider">ATTORNEY-CLIENT PRIVILEGE PROTECTED</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      required
                      className="w-full bg-[#0F0E0C] border border-white/10 px-4 py-3.5 text-xs text-[#F5F2ED] placeholder:text-[#D8D4CE]/40 focus:outline-none focus:border-[#D9AD74] transition-colors rounded-xs"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      required
                      className="w-full bg-[#0F0E0C] border border-white/10 px-4 py-3.5 text-xs text-[#F5F2ED] placeholder:text-[#D8D4CE]/40 focus:outline-none focus:border-[#D9AD74] transition-colors rounded-xs"
                    />
                  </div>
                  
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    required
                    className="w-full bg-[#0F0E0C] border border-white/10 px-4 py-3.5 text-xs text-[#F5F2ED] placeholder:text-[#D8D4CE]/40 focus:outline-none focus:border-[#D9AD74] transition-colors rounded-xs"
                  />
                  
                  <textarea
                    rows="5"
                    placeholder="Describe your legal question or situation in detail... *"
                    value={formQuestion}
                    onChange={(e) => setFormQuestion(e.target.value)}
                    required
                    className="w-full bg-[#0F0E0C] border border-white/10 p-4 text-xs text-[#F5F2ED] placeholder:text-[#D8D4CE]/40 focus:outline-none focus:border-[#D9AD74] transition-colors resize-none rounded-xs"
                  />
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold text-xs uppercase tracking-[0.2em] transition-all rounded-xs cursor-pointer shadow-lg shadow-[#D9AD74]/20 hover:shadow-[#D9AD74]/40"
                  >
                    <span>Submit Legal Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  
                  {formSubmitted && (
                    <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xs">
                      <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-[11px] text-emerald-300 font-medium">
                        ✓ Question submitted! An attorney will respond within 1 business day.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="relative bg-[#D9AD74] py-16 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0E0C]/10 via-transparent to-[#0F0E0C]/10" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-crimson text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F0F0F] uppercase tracking-wide">
              Need Immediate Legal Help?
            </h2>
            <p className="text-sm text-[#0F0F0F]/80 font-medium mt-1">
              Arrested or facing charges? Call us NOW — available 24 hours a day, 7 days a week.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation && onOpenConsultation()}
            className="flex items-center gap-3 px-8 py-4 bg-[#0F0E0C] hover:bg-black text-[#D9AD74] font-bold text-xs uppercase tracking-[0.2em] transition-all rounded-xs shadow-2xl cursor-pointer shrink-0 group"
          >
            <Phone className="w-4 h-4 group-hover:animate-pulse" />
            <span>Get Free Consultation</span>
          </button>
        </div>
      </section>

    </div>
  );
}
