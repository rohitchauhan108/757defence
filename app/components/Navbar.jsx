'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useApp } from '../AppContext.jsx';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldAlert, 
  Menu, 
  X, 
  MessageSquare,
  ChevronDown,
  Gavel,
  Car,
  Wine,
  ArrowRight,
  Swords
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    const router = useRouter();
    const pathname = usePathname();
    const { onOpenConsultation, onOpenAIAdvisor } = useApp();

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/karpovlaw/',
      bg: 'bg-[#3b5998] hover:bg-[#D9AD74]',
      hoverText: 'hover:text-[#0F0F0F]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Google Business',
      url: 'https://www.google.com/search?client=mobilesearchapp&sca_esv=1923549eed9fda7f&channel=iss&cs=1&hl=en&rlz=1MDAPLA_enUS814US814&v=331.0.665236494&output=search&q=Attorney+Anton+Karpov&ludocid=11315783154219315376&gsas=1&lsig=AB86z5UtqYxdCNTsO2Cc9b6_-LqR&shndl=-1&shem=lrnolc,lsde,vslcea&source=sh/x/loc/act/m1/5&kgs=ad88619a9a412f38',
      bg: 'bg-[#c71610] hover:bg-[#D9AD74]',
      hoverText: 'hover:text-[#0F0F0F]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#fff"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff"/>
        </svg>
      )
    },
    {
      name: 'Avvo Attorney Profile',
      url: 'https://www.avvo.com/attorneys/23456-va-anton-karpov-4697109.html',
      bg: 'bg-[#0077b5] hover:bg-[#D9AD74]',
      hoverText: 'hover:text-[#0F0F0F]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.42 8.15c-.53 0-.97-.18-1.34-.55-.37-.37-.55-.81-.55-1.34 0-.53.18-.97.55-1.34.37-.37.81-.55 1.34-.55.53 0 .97.18 1.34.55.37.37.55.81.55 1.34 0 .53-.18.97-.55 1.34-.37.37-.81.55-1.34.55zm0-5.55c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM9.3 5.5l.8 3.42h3.48l-3.02 2.19 1.15 4.55L8.38 10.7l-2.8 2.19L6.7 8.92 4.05 6.9h3.28l.8-3.42h2.17z"/>
        </svg>
      )
    }
  ];

  const servicesDropdown = [
    {
      label: 'Defense Criminal Attorney',
      description: 'Felonies, misdemeanors, drug crimes, domestic violence',
      path: '/services/criminal-defense',
      icon: Swords
    },
    {
      label: 'Traffic Ticket Lawyer',
      description: 'Reckless driving, speeding, suspended license, CDL tickets',
      path: '/services/traffic-ticket',
      icon: Car
    },
    {
      label: 'DUI/DWI Lawyer',
      description: '1st/2nd/3rd offense DUI, breath test refusal, felony DUI',
      path: '/services/dui-dwi',
      icon: Wine
    }
  ];

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'OUR ATTORNEYS', path: '/attorneys' },
    { 
      label: 'SERVICES', 
      path: '/practice-areas',
      dropdown: servicesDropdown
    },
    { label: 'FAQS', path: '/faqs' },
    { label: 'CONTACT US', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const handleNavigate = (path) => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    router.push(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full relative z-50 font-poppins bg-[#0E0C0A] border-b border-[#D9AD74]/20">
      {/* Top Bar */}
      <div className="bg-[#070605] text-[#D8D4CE] text-xs py-2 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-6 text-[11px] font-light">
            <a href="tel:7579079075" className="flex items-center gap-2 hover:text-[#D9AD74] transition-colors font-medium">
              <Phone className="w-3.5 h-3.5 text-[#D9AD74]" />
              <span>24/7 Hotline: (757) 907-9075</span>
            </a>
            <a href="mailto:757defense@gmail.com" className="hidden sm:flex items-center gap-2 hover:text-[#D9AD74] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#D9AD74]" />
              <span>757defense@gmail.com</span>
            </a>
            <div className="hidden md:flex items-center gap-2 text-[#D8D4CE]/60">
              <MapPin className="w-3.5 h-3.5 text-[#D9AD74]" />
              <span>2400 Princess Anne Road, Virginia Beach, VA 23456</span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Navbar Header */}
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center h-22">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 select-none cursor-pointer"
            onClick={() => handleNavigate('/')}
          >
            <img src="/757-logo.webp" alt=""
            height={100}
            width={110} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setServicesOpen(true)}
                onMouseLeave={() => item.dropdown && setServicesOpen(false)}
              >
                <button
                  onClick={() => !item.dropdown && handleNavigate(item.path)}
                  className={`relative text-xs font-semibold uppercase tracking-[0.15em] py-2 flex items-center gap-1.5 transition-all ${
                    isActive(item.path)
                      ? 'text-[#D9AD74] cursor-pointer'
                      : 'text-[#F5F2ED]/70 hover:text-[#D9AD74] cursor-pointer'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180 text-[#D9AD74]' : ''}`} />
                  )}
                  {item.dropdown && servicesOpen && (
                    <div className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-[#D9AD74]" />
                  )}
                </button>

                {item.dropdown && servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 min-w-[420px] z-50">
                    <div className="relative overflow-hidden rounded-xs shadow-2xl border border-[#D9AD74]/30 bg-gradient-to-b from-[#12100E] to-[#0E0C0A]">
                      {/* Top Accent Bar */}
                     
                      
                      {/* Dropdown Items */}
                      <div className="p-3 space-y-1">
                        {item.dropdown.map((subItem) => {
                          const IconComp = subItem.icon || Gavel;
                          return (
                            <button
                              key={subItem.label}
                              onClick={() => handleNavigate(subItem.path)}
                              className="group relative w-full flex items-start gap-4 p-4 rounded-md hover:bg-[#D9AD74]/10 transition-all duration-200 border border-transparent hover:border-[#D9AD74]/20"
                            >
                              {/* Left Hover Accent */}
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-8 bg-[#D9AD74] group-hover:w-[3px] transition-all duration-200 rounded-r" />
                              
                              {/* Icon */}
                              <div className="relative shrink-0">
                                <div className="w-11 h-11 bg-[#D9AD74]/10 border border-[#D9AD74]/30 group-hover:bg-[#D9AD74] group-hover:border-[#D9AD74] rounded-md flex items-center justify-center text-[#D9AD74] group-hover:text-[#0F0F0F] transition-all duration-200">
                                  <IconComp className="w-5 h-5" />
                                </div>
                              </div>
                              
                              {/* Text Content */}
                              <div className="flex-1 text-left min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-crimson text-sm font-bold text-[#F5F2ED] group-hover:text-[#D9AD74] transition-colors tracking-wide">
                                    {subItem.label}
                                  </h4>
                                </div>
                                <p className="text-[11px] text-[#D8D4CE]/50 group-hover:text-[#D8D4CE]/70 font-light leading-snug transition-colors">
                                  {subItem.description}
                                </p>
                              </div>
                              
                              {/* Arrow */}
                              <ArrowRight className="w-4 h-4 text-[#D9AD74]/0 group-hover:text-[#D9AD74] shrink-0 translate-x-[-4px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-200 mt-2" />
                            </button>
                          );
                        })}
                      </div>
                      
                      
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className={`w-10 h-10 ${social.bg} text-white ${social.hoverText} flex items-center justify-center rounded-xs transition-all shadow-sm hover:shadow-md hover:scale-105`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F2ED] hover:text-[#D9AD74]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121110] border-t border-[#D9AD74]/20 p-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => {
                    if (item.dropdown) {
                      setMobileServicesOpen(!mobileServicesOpen);
                    } else {
                      handleNavigate(item.path);
                    }
                  }}
                  className={`flex items-center justify-between w-full px-3 py-3 text-xs font-semibold uppercase tracking-widest text-left transition-colors rounded-xs ${
                    isActive(item.path)
                      ? 'text-[#D9AD74] bg-[#D9AD74]/10'
                      : 'text-[#F5F2ED]/70 hover:text-[#D9AD74] hover:bg-[#D9AD74]/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {item.dropdown && mobileServicesOpen && (
                  <div className="mt-2 ml-2 space-y-2 border-l-2 border-[#D9AD74]/30 pl-3">
                    {item.dropdown.map((subItem) => {
                      const IconComp = subItem.icon || Gavel;
                      return (
                        <button
                          key={subItem.label}
                          onClick={() => handleNavigate(subItem.path)}
                          className="w-full flex items-start gap-3 text-left px-3 py-3 bg-[#0F0E0C] hover:bg-[#D9AD74]/10 rounded-md border border-white/5 hover:border-[#D9AD74]/20 transition-all"
                        >
                          <div className="w-9 h-9 shrink-0 bg-[#D9AD74]/15 border border-[#D9AD74]/30 rounded flex items-center justify-center text-[#D9AD74]">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-bold text-[#F5F2ED] uppercase tracking-wide mb-0.5">
                              {subItem.label}
                            </p>
                            <p className="text-[10px] text-[#D8D4CE]/50 font-light leading-snug">
                              {subItem.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}