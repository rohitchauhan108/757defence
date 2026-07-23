'use client';

import React from 'react';
import { useRouter } from './navigation.jsx';

export default function Link({ href, children, className, onClick, ...props }) {
  const router = useRouter();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && href && typeof href === 'string' && href.startsWith('/')) {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
