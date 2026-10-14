import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// App-Name und Farben hier anpassen – sie landen im Web-App-Manifest.
const APP_NAME = 'Jessica Frieden – Portfolio';
const APP_SHORT_NAME = 'J. Frieden';
const THEME_COLOR = '#0d1424';
const BACKGROUND_COLOR = '#f5f2ea';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: APP_NAME,
        short_name: APP_SHORT_NAME,
        description: 'Portfolio von Jessica Frieden – Digital Solutions & ICT Specialist',
        lang: 'de',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        theme_color: THEME_COLOR,
        background_color: BACKGROUND_COLOR,
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{js,css,html,svg,png,ico,webp,woff2,pdf,jpg}'],
        // Nur lateinische Schriftschnitte vorab cachen (spart ~400 kB)
        globIgnores: ['**/*-cyrillic*', '**/*-greek*', '**/*-vietnamese*']
      }
    })
  ]
});
