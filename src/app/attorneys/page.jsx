'use client';

import AttorneysPage from '../pages/AttorneysPage.jsx';

export default function Page({ navigate, onOpenConsultation, onOpenAIAdvisor }) {
  return (
    <AttorneysPage
      navigate={navigate}
      onOpenConsultation={onOpenConsultation}
      onOpenAIAdvisor={onOpenAIAdvisor}
    />
  );
}
