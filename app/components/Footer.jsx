"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Phone,
  Printer,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";

export default function Footer({ navigate }) {
  // Navigation Handler Helper (runs custom navigate if passed, otherwise lets Link handle standard routing)
  const handleNavigation = (e, path) => {
    if (navigate) {
      e.preventDefault();
      navigate(path);
    }
  };

  return (
    <footer className="bg-[#0B0907] text-[#D8D4CE] pt-16 pb-8 border-t border-[#D9AD74]/20 font-poppins relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D9AD74]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Columns Grid (5 Columns Balanced Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Logo & Description (Spans 2 columns on large screens) */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-2">
            <Link
              href="/"
              onClick={(e) => handleNavigation(e, "/")}
              className="flex items-center gap-3 group inline-flex"
            >
              <div className="w-12 h-12 border border-[#D9AD74]/60 flex items-center justify-center text-[#D9AD74] group-hover:bg-[#D9AD74] group-hover:text-[#0F0F0F] transition-all duration-300 rounded-sm shadow-lg shadow-[#D9AD74]/5">
                <ShieldAlert className="w-7 h-7" />
              </div>
              <div>
                <span className="font-crimson text-3xl font-extrabold tracking-[0.1em] text-[#F5F2ED]">
                  757 <span className="text-[#D9AD74]">DEFENSE</span>
                </span>
                <p className="text-[10px] tracking-[0.25em] text-[#D9AD74] uppercase font-medium -mt-1">
                  KARPOV LAW, PLLC
                </p>
              </div>
            </Link>

            <p className="text-sm text-[#D8D4CE]/75 font-light leading-relaxed max-w-sm">
              Top-rated criminal defense law firm serving Virginia Beach,
              Norfolk, Chesapeake, Portsmouth, Hampton, Newport News, and
              Eastern District of Virginia courts with unwavering dedication.
            </p>

            <div className="flex items-center gap-3 pt-1">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#D8D4CE]/80 hover:text-[#D9AD74] hover:border-[#D9AD74] hover:bg-[#D9AD74]/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-crimson text-base font-bold text-[#F5F2ED] uppercase tracking-wider border-b border-[#D9AD74]/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-[#D8D4CE]/75 font-light">
              {[
                { label: "HOME", path: "/" },
                { label: "OUR ATTORNEYS", path: "/attorneys" },
                { label: "FAQS", path: "/faqs" },
                { label: "BLOG", path: "/blog" },
                { label: "CONTACT US", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    onClick={(e) => handleNavigation(e, item.path)}
                    className="hover:text-[#D9AD74] transition-colors duration-200 cursor-pointer flex items-center gap-2.5 group text-left"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9AD74] group-hover:translate-x-1.5 transition-transform duration-200 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Criminal Offenses */}
          <div className="space-y-4">
            <h3 className="font-crimson text-base font-bold text-[#F5F2ED] uppercase tracking-wider border-b border-[#D9AD74]/30 pb-2">
              Criminal Offenses
            </h3>
            <ul className="space-y-3 text-xs text-[#D8D4CE]/75 font-light">
              {[
                { label: "ASSAULT AND BATTERY", path: "/criminal-offenses/assault-and-battery" },
                { label: "DRUG CRIMES", path: "/criminal-offenses/drug-crimes" },
                { label: "THEFT/PROPERTY CRIMES", path: "/criminal-offenses/theft-property-crimes" },
                { label: "VIOLENT OFFENSES", path: "/criminal-offenses/violent-offenses" },
                { label: "WEAPONS/FIREARMS", path: "/criminal-offenses/weapons-firearms" },
                { label: "DOMESTIC VIOLENCE", path: "/criminal-offenses/domestic-violence" },
                { label: "PROTECTIVE ORDERS", path: "/criminal-offenses/protective-orders" },
                { label: "JUVENILE OFFENSES", path: "/criminal-offenses/juvenile-offense" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    onClick={(e) => handleNavigation(e, item.path)}
                    className="hover:text-[#D9AD74] transition-colors duration-200 cursor-pointer flex items-center gap-2.5 group text-left uppercase text-xs"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9AD74] group-hover:translate-x-1.5 transition-transform duration-200 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: What We Do */}
          <div className="space-y-4">
            <h3 className="font-crimson text-base font-bold text-[#F5F2ED] uppercase tracking-wider border-b border-[#D9AD74]/30 pb-2">
              What We Do
            </h3>
            <ul className="space-y-3 text-xs text-[#D8D4CE]/75 font-light">
              {[
                { label: "Bond Hearing and Appeals", path: "/bond-hearings-and-appeals" },
                { label: "Criminal Discovery", path: "/criminal-discovery" },
                { label: "Evidentiary Motion", path: "/evidentiary-motion" },
                { label: "Motions to suppress", path: "/motions-to-suppress-the-evidence" },
                { label: "Preliminary Hearing", path: "/preliminary-hearing" },
                { label: "Probation Hearing", path: "/probation-hearing" },
                { label: "Bench and Jury Trials", path: "/bench-and-jury-trials" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    onClick={(e) => handleNavigation(e, item.path)}
                    className="hover:text-[#D9AD74] transition-colors duration-200 cursor-pointer flex items-center gap-2.5 group text-left uppercase text-xs"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9AD74] group-hover:translate-x-1.5 transition-transform duration-200 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Contact Info Bar */}
        <div className="py-8 border-b border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-[#D8D4CE]/85">
          <div className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-full bg-[#D9AD74]/10 text-[#D9AD74] flex items-center justify-center border border-[#D9AD74]/30 shrink-0 group-hover:bg-[#D9AD74] group-hover:text-[#0F0F0F] transition-all duration-300">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase text-[#D8D4CE]/55 block font-semibold tracking-wider">
                Call / Text (24/7)
              </span>
              <a
                href="tel:7579079075"
                className="font-bold text-[#F5F2ED] hover:text-[#D9AD74] transition-colors text-base"
              >
                757-907-9075
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-full bg-[#D9AD74]/10 text-[#D9AD74] flex items-center justify-center border border-[#D9AD74]/30 shrink-0 group-hover:bg-[#D9AD74] group-hover:text-[#0F0F0F] transition-all duration-300">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase text-[#D8D4CE]/55 block font-semibold tracking-wider">
                Fax Number
              </span>
              <span className="font-bold text-[#F5F2ED] text-base">(757) 782-9982</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-full bg-[#D9AD74]/10 text-[#D9AD74] flex items-center justify-center border border-[#D9AD74]/30 shrink-0 group-hover:bg-[#D9AD74] group-hover:text-[#0F0F0F] transition-all duration-300">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase text-[#D8D4CE]/55 block font-semibold tracking-wider">
                Email Address
              </span>
              <a
                href="mailto:757defense@gmail.com"
                className="font-bold text-[#F5F2ED] hover:text-[#D9AD74] transition-colors text-sm break-all"
              >
                757defense@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-full bg-[#D9AD74]/10 text-[#D9AD74] flex items-center justify-center border border-[#D9AD74]/30 shrink-0 group-hover:bg-[#D9AD74] group-hover:text-[#0F0F0F] transition-all duration-300">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase text-[#D8D4CE]/55 block font-semibold tracking-wider">
                Location
              </span>
              <span className="font-bold text-[#F5F2ED] text-sm leading-relaxed block">
                2400 Princess Anne Rd, Virginia Beach, VA 23456
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Disclaimer */}
        <div className="pt-8 text-center space-y-4">
          <p className="text-xs text-[#D8D4CE]/60 font-light leading-relaxed max-w-4xl mx-auto">
            <strong className="text-[#D8D4CE]/80 font-medium">LEGAL DISCLAIMER:</strong> The
            use of the internet or the email contact form for communication does
            not establish an attorney-client relationship. Karpov Law PLLC, and
            attorney Anton A. Karpov do not guarantee any particular outcome of
            the representation. Every case is different and fact-specific, and
            the results obtained will be related to the facts and merits of the
            particular case.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-[#D8D4CE]/50 font-medium pt-2">
            <span>757defense is a registered name for Karpov Law PLLC and Pugh and Karpov Law PC.</span>
            <span className="hidden sm:inline">•</span>
            <span>© 2026 757 Defense. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}