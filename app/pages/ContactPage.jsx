'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle2, Send, MessageSquare, ShieldAlert, Printer, Navigation } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useApp } from '../AppContext.jsx';

const OFFICE_ADDRESS = "2400 Princess Anne Road, Virginia Beach, VA 23456";
const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent("757 Defense " + OFFICE_ADDRESS)}&output=embed`;
const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(OFFICE_ADDRESS)}`;

export default function ContactPage() {
  const router = useRouter();
  const { onOpenConsultation, onOpenAIAdvisor } = useApp();
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
                  <span>757 Defense 2400 Princess Anne Road, Virginia Beach, VA 23456</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D9AD74] shrink-0" />
                  <a href="tel:7579079075" className="hover:text-[#D9AD74] font-bold text-[#F5F2ED]">(757) 907-9075</a>
                </div>
                <div className="flex items-center gap-3">
                  <Printer className="w-4 h-4 text-[#D9AD74] shrink-0" />
                  <span>Fax: (757) 782-9982</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#D9AD74] shrink-0" />
                  <a href="mailto:757defense@gmail.com" className="hover:text-[#D9AD74]">757defense@Gmail.Com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#D9AD74] shrink-0" />
                  <span>24/7 Emergency Criminal & DUI Hotline</span>
                </div>
              </div>
            </div>

            {/* Google Map Mini Embed — Replaces AI Evaluator */}
            <div className="relative bg-[#181512] border border-[#D9AD74]/30 rounded-xs overflow-hidden shadow-xl group">
              <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-[#12100E] via-[#12100E]/90 to-transparent p-4 pb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#D9AD74]/15 border border-[#D9AD74]/30 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[#D9AD74]" />
                    </div>
                    <div>
                      <h4 className="font-crimson text-sm font-bold text-[#F5F2ED] leading-tight">Find Our Office</h4>
                      <p className="text-[10px] text-[#D8D4CE]/60 leading-tight">Virginia Beach, VA</p>
                    </div>
                  </div>
                  <a 
                    href={GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] text-[10px] font-bold uppercase tracking-widest rounded-xs transition-colors"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
              <div className="relative h-64 sm:h-72 lg:h-80 w-full">
                <iframe
                  title="757 Defense - Virginia Beach Office Map"
                  src={GOOGLE_MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[20%] contrast-110 saturate-[1.1]"
                />
              </div>
              {/* Bottom info strip */}
              <div className="bg-[#0F0E0C] border-t border-[#D9AD74]/20 px-5 py-3 flex items-center justify-between gap-3">
                <p className="text-[10px] text-[#D8D4CE]/70 font-light leading-snug truncate">
                  2400 Princess Anne Rd, Virginia Beach
                </p>
                <a 
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-[#D9AD74] hover:text-white transition-colors flex items-center gap-1"
                >
                  <MapPin className="w-3 h-3" />
                  <span>View on Map</span>
                </a>
              </div>
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
                  Thank you. Your message has been routed to the senior partners. An attorney will respond shortly.
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