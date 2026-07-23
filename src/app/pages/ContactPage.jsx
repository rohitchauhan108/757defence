'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle2, Send, MessageSquare, ShieldAlert } from 'lucide-react';

export default function ContactPage({ onOpenConsultation, onOpenAIAdvisor }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#0B0A08] text-[#D8D4CE] min-h-screen pb-16 space-y-16 font-poppins selection:bg-[#D9AD74] selection:text-[#0F0F0F]">
      
      {/* Header */}
      <div className="bg-[#0E0C0A] border-b border-[#D9AD74]/20 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-3">
          <span className="text-[#D9AD74] text-xs uppercase tracking-[0.3em] font-semibold block">
            24/7 VIRGINIA BEACH & NORFOLK CRIMINAL DEFENSE
          </span>
          <h1 className="font-crimson text-4xl sm:text-5xl font-bold text-[#F5F2ED]">Contact 757 Defense</h1>
          <p className="text-[#D8D4CE]/70 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Our trial partners are available 24/7 for emergency arrests, bail hearings, and free confidential legal consultations.
          </p>
        </div>
      </div>

      {/* Contact Content Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Office Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#12100E] border border-[#D9AD74]/30 rounded-xs p-6 space-y-4 shadow-xl">
              <h3 className="font-crimson text-xl font-bold text-[#F5F2ED] border-b border-[#D9AD74]/20 pb-2">
                Virginia Beach Office (Main)
              </h3>
              
              <div className="space-y-3 text-xs text-[#D8D4CE]/80 font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D9AD74] shrink-0 mt-0.5" />
                  <span>2490 Virginia Beach Blvd, Suite 300, Virginia Beach, VA 23454</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D9AD74] shrink-0" />
                  <a href="tel:7577573333" className="hover:text-[#D9AD74] font-bold text-[#F5F2ED]">(757) 757-3333</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#D9AD74] shrink-0" />
                  <a href="mailto:defense@757defense.com" className="hover:text-[#D9AD74]">defense@757defense.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#D9AD74] shrink-0" />
                  <span>24/7 Emergency Criminal & DUI Hotline</span>
                </div>
              </div>
            </div>

            <div className="bg-[#12100E] border border-[#D9AD74]/30 rounded-xs p-6 space-y-4 shadow-xl">
              <h3 className="font-crimson text-xl font-bold text-[#F5F2ED] border-b border-[#D9AD74]/20 pb-2">
                Norfolk Courthouse Office
              </h3>
              
              <div className="space-y-3 text-xs text-[#D8D4CE]/80 font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D9AD74] shrink-0 mt-0.5" />
                  <span>150 Boush Street, Suite 800, Norfolk, VA 23510</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D9AD74] shrink-0" />
                  <a href="tel:7577573333" className="hover:text-[#D9AD74] font-bold text-[#F5F2ED]">(757) 757-3333</a>
                </div>
              </div>
            </div>

            <div className="bg-[#181512] border border-[#D9AD74]/30 rounded-xs p-6 space-y-3 text-center">
              <ShieldAlert className="w-8 h-8 text-[#D9AD74] mx-auto" />
              <h4 className="font-crimson text-base font-bold text-[#F5F2ED]">Instant AI Case Evaluator</h4>
              <p className="text-xs text-[#D8D4CE]/70 font-light">Ask initial Virginia legal questions or evaluate charges 24/7.</p>
              <button
                onClick={onOpenAIAdvisor}
                className="w-full bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold py-2.5 uppercase text-xs tracking-widest transition-colors rounded-xs cursor-pointer"
              >
                Launch AI Case Evaluator
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#12100E] border border-[#D9AD74]/30 rounded-xs p-8 space-y-6 shadow-2xl">
            <div>
              <span className="text-xs font-bold text-[#D9AD74] uppercase tracking-[0.3em] block mb-1">100% Confidential Inquiry</span>
              <h2 className="font-crimson text-2xl font-bold text-[#F5F2ED]">Direct Message To 757 Trial Lawyers</h2>
            </div>

            {formSubmitted ? (
              <div className="bg-[#D9AD74]/10 border border-[#D9AD74]/30 p-6 rounded-xs text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#D9AD74] mx-auto" />
                <h3 className="font-crimson text-xl font-bold text-[#F5F2ED]">Message Transmitted</h3>
                <p className="text-xs text-[#D8D4CE]/80 font-light">
                  Thank you. Your message has been routed to senior partners Nadim Al-Mansur and J. Ryan Stirling. An attorney will respond shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-[#D9AD74] uppercase tracking-wider font-bold underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D8D4CE]/70 block mb-1 font-bold">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0E0C0A] border border-white/10 p-3 text-xs text-[#F5F2ED] placeholder:text-[#D8D4CE]/30 focus:border-[#D9AD74] focus:outline-none rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D8D4CE]/70 block mb-1 font-bold">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(757) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0E0C0A] border border-white/10 p-3 text-xs text-[#F5F2ED] placeholder:text-[#D8D4CE]/30 focus:border-[#D9AD74] focus:outline-none rounded-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D8D4CE]/70 block mb-1 font-bold">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="marcus@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0E0C0A] border border-white/10 p-3 text-xs text-[#F5F2ED] placeholder:text-[#D8D4CE]/30 focus:border-[#D9AD74] focus:outline-none rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D8D4CE]/70 block mb-1 font-bold">Charge / Court Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Virginia Beach DUI / Speeding"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#0E0C0A] border border-white/10 p-3 text-xs text-[#F5F2ED] placeholder:text-[#D8D4CE]/30 focus:border-[#D9AD74] focus:outline-none rounded-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#D8D4CE]/70 block mb-1 font-bold">Case Brief / Message *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your legal matter, arrest location, or court date in strict confidence..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0E0C0A] border border-white/10 p-3 text-xs text-[#F5F2ED] placeholder:text-[#D8D4CE]/30 focus:border-[#D9AD74] focus:outline-none rounded-xs"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold py-3.5 text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer rounded-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Confidential Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
