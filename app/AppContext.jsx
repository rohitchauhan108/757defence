'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext(undefined);

export function AppProvider({ children }) {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [aiAdvisorOpen, setAiAdvisorOpen] = useState(false);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState('');

  const onOpenConsultation = useCallback((practiceArea = '') => {
    setSelectedPracticeArea(practiceArea || '');
    setConsultationOpen(true);
  }, []);

  const onCloseConsultation = useCallback(() => {
    setConsultationOpen(false);
  }, []);

  const onOpenAIAdvisor = useCallback(() => {
    setAiAdvisorOpen(true);
  }, []);

  const onCloseAIAdvisor = useCallback(() => {
    setAiAdvisorOpen(false);
  }, []);

  const value = {
    consultationOpen,
    aiAdvisorOpen,
    selectedPracticeArea,
    onOpenConsultation,
    onCloseConsultation,
    onOpenAIAdvisor,
    onCloseAIAdvisor,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used within AppProvider');
  }
  return ctx;
}
