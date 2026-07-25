'use client';

import React, { useState, useEffect } from 'react';
import RootLayout from './app/layout.jsx';
import HomePage from './app/page.jsx';
import AboutPage from './app/about/page.jsx';
import PracticeAreasPage from './app/practice-areas/page.jsx';
import CriminalDefenseServicePage from './app/services/criminal-defense/page.jsx';
import TrafficTicketServicePage from './app/services/traffic-ticket/page.jsx';
import DUIDWIServicePage from './app/services/dui-dwi/page.jsx';
import CaseResultsPage from './app/case-results/page.jsx';
import AttorneysPage from './app/attorneys/page.jsx';
import FAQsPage from './app/faqs/page.jsx';
import BlogPage from './app/blog/page.jsx';
import ContactPage from './app/contact/page.jsx';

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname || '/' : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path.split('?')[0]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderRoute = () => {
    const route = currentPath.split('?')[0];

    switch (route) {
      case '/about':
        return <AboutPage navigate={navigate} />;
      case '/practice-areas':
        return <PracticeAreasPage navigate={navigate} />;
      case '/services/criminal-defense':
        return <CriminalDefenseServicePage navigate={navigate} />;
      case '/services/traffic-ticket':
        return <TrafficTicketServicePage navigate={navigate} />;
      case '/services/dui-dwi':
        return <DUIDWIServicePage navigate={navigate} />;
      case '/case-results':
        return <CaseResultsPage navigate={navigate} />;
      case '/attorneys':
        return <AttorneysPage navigate={navigate} />;
      case '/faqs':
        return <FAQsPage navigate={navigate} />;
      case '/blog':
        return <BlogPage navigate={navigate} />;
      case '/contact':
        return <ContactPage navigate={navigate} />;
      case '/':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <RootLayout currentPath={currentPath} navigate={navigate}>
      {renderRoute()}
    </RootLayout>
  );
}
