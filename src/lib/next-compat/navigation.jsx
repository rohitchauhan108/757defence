'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext({
  pathname: '/',
  push: (path) => {},
  replace: (path) => {},
  back: () => {},
  forward: () => {},
});

export function RouterProvider({ children }) {
  const [pathname, setPathname] = useState(
    typeof window !== 'undefined' ? window.location.pathname || '/' : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const push = (path) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setPathname(path.split('?')[0]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const replace = (path) => {
    if (typeof window !== 'undefined') {
      window.history.replaceState({}, '', path);
      setPathname(path.split('?')[0]);
    }
  };

  const back = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  const forward = () => {
    if (typeof window !== 'undefined') {
      window.history.forward();
    }
  };

  return (
    <RouterContext.Provider value={{ pathname, push, replace, back, forward }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  return {
    push: context.push,
    replace: context.replace,
    back: context.back,
    forward: context.forward,
    prefetch: () => {},
  };
}

export function usePathname() {
  const context = useContext(RouterContext);
  return context.pathname || '/';
}

export function useSearchParams() {
  if (typeof window === 'undefined') return new URLSearchParams();
  return new URLSearchParams(window.location.search);
}
