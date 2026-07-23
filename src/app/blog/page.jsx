'use client';

import BlogPage from '../pages/BlogPage.jsx';

export default function Page({ navigate, onOpenConsultation, onOpenAIAdvisor }) {
  return (
    <BlogPage
      navigate={navigate}
      onOpenConsultation={onOpenConsultation}
      onOpenAIAdvisor={onOpenAIAdvisor}
    />
  );
}
