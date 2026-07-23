'use client';

import React from 'react';

export default function Image({ src, alt, width, height, className, priority, fill, ...props }) {
  const style = fill
    ? { position: 'absolute', height: '100%', width: '100%', inset: 0, objectFit: 'cover' }
    : {};

  return (
    <img
      src={src}
      alt={alt || ''}
      width={width}
      height={height}
      className={className}
      style={{ ...style, ...(props.style || {}) }}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
