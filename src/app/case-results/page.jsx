'use client';

import CaseResultsPage from '../pages/CaseResultsPage.jsx';

export default function Page({ navigate, onOpenConsultation, onOpenAIAdvisor }) {
  return (
    <CaseResultsPage
      navigate={navigate}
      onOpenConsultation={onOpenConsultation}
      onOpenAIAdvisor={onOpenAIAdvisor}
    />
  );
}
