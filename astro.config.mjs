import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import serviceWorker from './index.js';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [
    serviceWorker({
      /** Provide custom service worker logic */
      swSrc: 'user-sw.js',
      /** 
       * Excludes specific pages from the service worker bundle, and forces them to always go to the network
       * This is useful for server-only specific code, for example database connections
       */
      networkOnly: ['/networkonly-astro'],
      /** Configure workbox options */
      workbox: {},
      /** Configure esbuild options */
      esbuild: {},
      /** When set to true, enables minifcation for esbuild, defaults to true */
      dev: false,
      /** Override the default service worker registration and update script */
      swScript: ''
    }),
  ]
});
