import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'next/navigation': path.resolve(__dirname, './src/lib/next-compat/navigation.jsx'),
      'next/link': path.resolve(__dirname, './src/lib/next-compat/link.jsx'),
      'next/image': path.resolve(__dirname, './src/lib/next-compat/image.jsx'),
    },
  },

  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },

  build: {
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,

    // Better code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['motion'],
          icons: ['lucide-react'],
        },
      },
    },
  },
});