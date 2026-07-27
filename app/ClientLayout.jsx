'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ConsultationModal from './components/ConsultationModal.jsx';
import AILegalAdvisor from './components/AILegalAdvisor.jsx';
import PopupLeadModal from './components/PopupLeadModal.jsx';
import FloatingSocialWidgets from './components/FloatingSocialWidgets.jsx';
import { AppProvider, useApp } from './AppContext.jsx';

function LayoutShell({ children }) {
  const {
    consultationOpen,
    aiAdvisorOpen,
    selectedPracticeArea,
    onOpenConsultation,
    onCloseConsultation,
    onOpenAIAdvisor,
    onCloseAIAdvisor,
  } = useApp();

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

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F5F2ED] flex flex-col font-sans selection:bg-[#D9AD74] selection:text-[#0F0F0F]">
      <Navbar
        onOpenConsultation={onOpenConsultation}
        onOpenAIAdvisor={onOpenAIAdvisor}
      />

      <main className="flex-1">
        {children}
      </main>

      <Footer onOpenConsultation={onOpenConsultation} />

      <PopupLeadModal />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={onCloseConsultation}
        initialPracticeArea={selectedPracticeArea}
      />

      <AILegalAdvisor
        isOpen={aiAdvisorOpen}
        onClose={onCloseAIAdvisor}
        onOpenConsultation={onOpenConsultation}
      />

      <FloatingSocialWidgets />
    </div>
  );
}

export default function ClientLayout({ children }) {
  return (
    <AppProvider>
      <LayoutShell>{children}</LayoutShell>
    </AppProvider>
  );
}
