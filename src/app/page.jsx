'use client';

import HomePage from './pages/HomePage.jsx';

export default function Page({ navigate, onOpenConsultation, onOpenAIAdvisor }) {
  return (
    <HomePage
      navigate={navigate}
      onOpenConsultation={onOpenConsultation}
      onOpenAIAdvisor={onOpenAIAdvisor}
    />
  );
}
