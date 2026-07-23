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
      id: 'facebook',
      name: 'Facebook',
      url: 'https://facebook.com',
      bg: 'bg-[#1877F2] hover:bg-[#0d65d9] text-white',
      border: 'border-[#1877F2]/40',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://instagram.com',
      bg: 'bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white',
      border: 'border-pink-500/40',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      bg: 'bg-[#0A66C2] hover:bg-[#084e96] text-white',
      border: 'border-[#0A66C2]/40',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      id: 'twitter',
      name: 'X (Twitter)',
      url: 'https://twitter.com',
      bg: 'bg-[#000000] hover:bg-[#1a1a1a] text-white border border-white/20',
      border: 'border-white/30',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
                  <span>Connect With 757</span>
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
