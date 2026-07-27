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
    <footer className="bg-[#0B0907] text-[#D8D4CE] pt-16 pb-8 border-t border-[#D9AD74]/20 font-poppins">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Columns Grid (6 Columns Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand Logo & Description */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-2">
            <Link
              href="/"
              onClick={(e) => handleNavigation(e, "/")}
              className="flex items-center gap-3 group inline-flex"
            >
              <div className="w-10 h-10 border border-[#D9AD74] flex items-center justify-center text-[#D9AD74] group-hover:bg-[#D9AD74] group-hover:text-[#0F0F0F] transition-colors rounded-xs">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <span className="font-crimson text-2xl font-extrabold tracking-[0.1em] text-[#F5F2ED]">
                  757 <span className="text-[#D9AD74]">DEFENSE</span>
                </span>
                <p className="text-[8.5px] tracking-[0.2em] text-[#D9AD74] uppercase font-medium -mt-0.5">
                  KARPOV LAW, PLLC
                </p>
              </div>
            </Link>

            <p className="text-xs text-[#D8D4CE]/60 font-light leading-relaxed max-w-sm">
              Top-rated criminal defense law firm serving Virginia Beach,
              Norfolk, Chesapeake, Portsmouth, Hampton, Newport News, and
              Eastern District of Virginia courts.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#D8D4CE]/70 hover:text-[#D9AD74] hover:border-[#D9AD74] transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#D8D4CE]/70 hover:text-[#D9AD74] hover:border-[#D9AD74] transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#D8D4CE]/70 hover:text-[#D9AD74] hover:border-[#D9AD74] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#D8D4CE]/70 hover:text-[#D9AD74] hover:border-[#D9AD74] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-crimson text-sm font-bold text-[#F5F2ED] uppercase tracking-wider mb-4 border-b border-[#D9AD74]/30 pb-1.5">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D8D4CE]/70 font-light">
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
                    className="hover:text-[#D9AD74] transition-colors cursor-pointer flex items-center gap-2 group text-left"
                  >
                    <ArrowRight className="w-3 h-3 text-[#D9AD74] group-hover:translate-x-1 transition-transform shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Criminal Offenses */}
          <div>
            <h3 className="font-crimson text-sm font-bold text-[#F5F2ED] uppercase tracking-wider mb-4 border-b border-[#D9AD74]/30 pb-1.5">
              CRIMINAL OFFENSES
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D8D4CE]/70 font-light">
              {[
                {
                  label: "ASSAULT AND BATTERY",
                  path: "/criminal-offenses/assault-and-battery",
                },
                {
                  label: "DRUG CRIMES",
                  path: "/criminal-offenses/drug-crimes",
                },
                {
                  label: "THEFT/PROPERTY CRIMES",
                  path: "/criminal-offenses/theft-property-crimes",
                },
                {
                  label: "VIOLENT OFFENSES",
                  path: "/criminal-offenses/violent-offenses",
                },
                {
                  label: "WEAPONS/FIREARMS",
                  path: "/criminal-offenses/weapons-firearms",
                },
                {
                  label: "DOMESTIC VIOLENCE",
                  path: "/criminal-offenses/domestic-violence",
                },
                {
                  label: "PROTECTIVE ORDERS",
                  path: "/criminal-offenses/protective-orders",
                },
                {
                  label: "JUVENILE OFFENSES",
                  path: "/criminal-offenses/juvenile-offense",
                },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    onClick={(e) => handleNavigation(e, item.path)}
                    className="hover:text-[#D9AD74] transition-colors cursor-pointer flex items-center gap-2 group text-left uppercase text-[11px]"
                  >
                    <ArrowRight className="w-3 h-3 text-[#D9AD74] group-hover:translate-x-1 transition-transform shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: What We Do */}
          <div>
            <h3 className="font-crimson text-sm font-bold text-[#F5F2ED] uppercase tracking-wider mb-4 border-b border-[#D9AD74]/30 pb-1.5">
              WHAT WE DO
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D8D4CE]/70 font-light">
              {[
                {
                  label: "Bond Hearing and Appeals",
                  path: "/bond-hearings-and-appeals",
                },
                { label: "Criminal Discovery", path: "/criminal-discovery" },
                { label: "Evidentiary Motion", path: "/evidentiary-motion" },
                {
                  label: "Motions to suppress the evidence",
                  path: "/motions-to-suppress-the-evidence",
                },
                { label: "Preliminary Hearing", path: "/preliminary-hearing" },
                { label: "Probation Hearing", path: "/probation-hearing" },
                {
                  label: "Bench and Jury Trials",
                  path: "/bench-and-jury-trials",
                },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    onClick={(e) => handleNavigation(e, item.path)}
                    className="hover:text-[#D9AD74] transition-colors cursor-pointer flex items-center gap-2 group text-left uppercase text-[11px]"
                  >
                    <ArrowRight className="w-3 h-3 text-[#D9AD74] group-hover:translate-x-1 transition-transform shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Office Location / Info */}
          <div>
            <h3 className="font-crimson text-sm font-bold text-[#F5F2ED] uppercase tracking-wider mb-4 border-b border-[#D9AD74]/30 pb-1.5">
              KARPOV LAW, PLLC
            </h3>
            <div className="space-y-3 text-xs text-[#D8D4CE]/80 font-light">
              <p className="leading-relaxed">
                2400 Princess Anne Road,
                <br />
                Virginia Beach, VA 23456
              </p>
              <div className="pt-1 space-y-1 text-[11px]">
                <p>
                  <strong className="text-[#F5F2ED] font-medium">Phone:</strong>{" "}
                  <a
                    href="tel:7579079075"
                    className="hover:text-[#D9AD74] font-semibold text-[#F5F2ED]"
                  >
                     7579079075
                  </a>
                </p>
                <p>
                  <strong className="text-[#F5F2ED] font-medium">Fax:</strong>{" "}
                  (757) 782-9982
                </p>
                <p className="break-all">
                  <strong className="text-[#F5F2ED] font-medium">Email:</strong>{" "}
                  <a
                    href="mailto:757defense@gmail.com"
                    className="hover:text-[#D9AD74]"
                  >
                    757defense@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-[#D8D4CE]/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D9AD74]/10 text-[#D9AD74] flex items-center justify-center border border-[#D9AD74]/30 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#D8D4CE]/50 block font-semibold">
                PHONE (24/7)
              </span>
              <a
                href="tel:7579079075"
                className="font-bold text-[#F5F2ED] hover:text-[#D9AD74]"
              >
                 7579079075
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D9AD74]/10 text-[#D9AD74] flex items-center justify-center border border-[#D9AD74]/30 shrink-0">
              <Printer className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#D8D4CE]/50 block font-semibold">
                FAX NUMBER
              </span>
              <span className="font-bold text-[#F5F2ED]">(757) 782-9982</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D9AD74]/10 text-[#D9AD74] flex items-center justify-center border border-[#D9AD74]/30 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#D8D4CE]/50 block font-semibold">
                EMAIL ADDRESS
              </span>
              <a
                href="mailto:757defense@gmail.com"
                className="font-bold text-[#F5F2ED] hover:text-[#D9AD74]"
              >
                757defense@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D9AD74]/10 text-[#D9AD74] flex items-center justify-center border border-[#D9AD74]/30 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#D8D4CE]/50 block font-semibold">
                LOCATION
              </span>
              <span className="font-bold text-[#F5F2ED]">
                2400 Princess Anne Road, Virginia Beach, VA 23456
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Disclaimer */}
        <div className="pt-6 text-center space-y-3">
          <p className="text-[11px] text-[#D8D4CE]/50 font-light leading-relaxed max-w-4xl mx-auto">
            <strong className="text-[#D8D4CE]/70">LEGAL DISCLAIMER:</strong> The
            use of the internet or the email contact form for communication does
            not establish an attorney-client relationship. Karpov Law PLLC, and
            attorney Anton A. Karpov do not guarantee any particular outcome of
            the representation. Every case is different and fact specific, and
            the results obtained will be related to the facts and merits of the
            particular case.
          </p>
          <p className="text-xs text-[#D8D4CE]/40 font-medium">
            757defense is a registered name for Karpov Law PLLC and Pugh and
            Karpov Law PC. © 2026 757 Defense. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
