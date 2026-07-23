'use client';

import ContactPage from '../pages/ContactPage.jsx';

export default function Page({ navigate, onOpenConsultation, onOpenAIAdvisor }) {
  return (
    <ContactPage
      navigate={navigate}
      onOpenConsultation={onOpenConsultation}
      onOpenAIAdvisor={onOpenAIAdvisor}
    />
  );
}
