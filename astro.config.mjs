import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import customElements from 'custom-elements-ssr/astro.js';
import serviceWorker from './index.js';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [
    customElements(),
    serviceWorker({
      /** Provide custom service worker logic */
      swSrc: 'user-sw.js',
      /** 
       * Excludes specific pages from the service worker bundle, and forces them to always go to the network
       * This is useful for server-only specific code, for example database connections
       */
      networkOnly: ['/networkonly'],
      /** Configure workbox options */
      workbox: {
        globPatterns: ["**/*.{js,css,html,png}"]
      },
      /** Configure esbuild options */
      esbuild: {},
      /** When set to true, enables minifcation for esbuild, defaults to true */
      dev: false,
      /** Override the default service worker registration and update script */
      // swScript: ''
    }),
  ]
});
