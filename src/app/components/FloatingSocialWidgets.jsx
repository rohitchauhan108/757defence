'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  Share2, 
  X, 
  ChevronUp, 
  Mail, 
  ShieldAlert,
  ExternalLink
} from 'lucide-react';

export default function FloatingSocialWidgets({ onOpenConsultation }) {
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  // Phone number & WhatsApp
  const phoneFormatted = "(757) 757-3333";
  const rawPhone = "17577573333";
  const whatsappUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent("Hello 757 Defense Lawyers, I need emergency legal assistance regarding a case in Virginia.")}`;

  // Social media channels
  const socialLinks = [
    {
      id: 'whatsapp',
      name: 'WhatsApp 24/7',
      url: whatsappUrl,
      bg: 'bg-[#25D366] hover:bg-[#1EBE57] text-white',
      border: 'border-[#25D366]/40',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      )
    },
  
    {
      id: 'phone',
      name: 'Call (757) 757-3333',
      url: `tel:${rawPhone}`,
      bg: 'bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F]',
      border: 'border-[#D9AD74]',
      icon: <Phone className="w-5 h-5 fill-current" />
    }
  ];

  return (
    <>
      {/* ================= 1. DESKTOP FIXED LEFT FLOATING SOCIAL BAR ================= */}
     


      {/* ================= 2. MAIN BOTTOM-RIGHT FLOATING WHATSAPP & SOCIAL WIDGET ================= */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Expandable Social Links Panel when Toggle Button Clicked */}
        <AnimatePresence>
          {isSocialMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto bg-[#12100E]/95 backdrop-blur-md border border-[#D9AD74]/40 p-4 rounded-xs shadow-2xl space-y-3 w-64 text-xs"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="font-crimson text-sm font-bold text-[#D9AD74] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Connect With 757 Defense</span>
                </span>
                <button 
                  onClick={() => setIsSocialMenuOpen(false)}
                  className="text-[#D8D4CE]/60 hover:text-white p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* List of social channels in expandable card */}
              <div className="space-y-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target={social.id === 'phone' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-xs hover:bg-white/5 transition-colors border border-transparent hover:border-[#D9AD74]/20 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${social.bg}`}>
                        {social.icon}
                      </div>
                      <span className="font-medium text-[#F5F2ED] group-hover:text-[#D9AD74] transition-colors">
                        {social.name}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#D8D4CE]/40 group-hover:text-[#D9AD74]" />
                  </a>
                ))}
              </div>

              {/* Free consultation button inside drawer */}
              <button
                onClick={() => {
                  setIsSocialMenuOpen(false);
                  if (onOpenConsultation) onOpenConsultation();
                }}
                className="w-full mt-2 bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] font-bold py-2 text-center uppercase tracking-widest text-[10px] transition-colors rounded-xs cursor-pointer"
              >
                Book Free Case Evaluation
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Buttons Row */}
        <div className="pointer-events-auto flex items-center gap-3">
          
          {/* Social Hub Toggle Button */}
          <button
            onClick={() => setIsSocialMenuOpen(!isSocialMenuOpen)}
            className="w-12 h-12 bg-[#12100E] border border-[#D9AD74]/50 text-[#D9AD74] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#1A1815] transition-all transform hover:scale-105 cursor-pointer relative group"
            title="Social Media & Contact Links"
            aria-label="Toggle Social Media Menu"
          >
            {isSocialMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Share2 className="w-5 h-5" />
            )}
            
            {/* Tooltip */}
            <span className="absolute right-14 bg-[#0B0907] text-[#D8D4CE] border border-[#D9AD74]/30 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-xs shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Social Links
            </span>
          </button>

          {/* Standalone Direct WhatsApp Button with Pulsing Status Ring */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center group cursor-pointer"
            title="Chat directly on WhatsApp (24/7 Available)"
            aria-label="Chat on WhatsApp"
          >
            {/* Outer Green Pulse Ring */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" />
            
          

            {/* Hover Tooltip */}
            <span className="absolute right-16 bg-[#12100E] text-[#F5F2ED] border border-[#25D366]/50 text-xs font-semibold px-3 py-1.5 rounded-xs shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>WhatsApp Lawyers 24/7</span>
            </span>
          </a>

        </div>

      </div>
    </>
  );
}
