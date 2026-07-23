'use client';

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ConsultationModal from './components/ConsultationModal.jsx';
import AILegalAdvisor from './components/AILegalAdvisor.jsx';
import PopupLeadModal from './components/PopupLeadModal.jsx';
import FloatingSocialWidgets from './components/FloatingSocialWidgets.jsx';
import { RouterProvider } from '../lib/next-compat/navigation.jsx';

export default function RootLayout({ children, currentPath, navigate }) {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [aiAdvisorOpen, setAiAdvisorOpen] = useState(false);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState('');

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenConsultation = (practiceArea = '') => {
    setSelectedPracticeArea(practiceArea || '');
    setConsultationOpen(true);
  };

  return (
    <RouterProvider>
      <div className="min-h-screen bg-[#0F0F0F] text-[#F5F2ED] flex flex-col font-sans selection:bg-[#D9AD74] selection:text-[#0F0F0F]">
        {/* Top Navbar */}
        <Navbar
          currentPath={currentPath}
          navigate={navigate}
          onOpenConsultation={handleOpenConsultation}
          onOpenAIAdvisor={() => setAiAdvisorOpen(true)}
        />

        {/* Main App Route View */}
        <main className="flex-1">
          {React.isValidElement(children) 
            ? React.cloneElement(children, {
                onOpenConsultation: handleOpenConsultation,
                onOpenAIAdvisor: () => setAiAdvisorOpen(true)
              })
            : children}
        </main>

        {/* Footer */}
        <Footer
          navigate={navigate}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Auto 3-Second Lead Popup Modal */}
        <PopupLeadModal onOpenConsultation={handleOpenConsultation} />

        {/* Modals & Drawers */}
        <ConsultationModal
          isOpen={consultationOpen}
          onClose={() => setConsultationOpen(false)}
          initialPracticeArea={selectedPracticeArea}
        />

        <AILegalAdvisor
          isOpen={aiAdvisorOpen}
          onClose={() => setAiAdvisorOpen(false)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Floating Social & WhatsApp Widgets */}
        <FloatingSocialWidgets onOpenConsultation={handleOpenConsultation} />
      </div>
    </RouterProvider>
  );
}
