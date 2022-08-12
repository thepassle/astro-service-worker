// import cloudflare from '@astrojs/cloudflare';
import netlify from '@astrojs/netlify/functions';
import { defineConfig } from 'astro/config';
import serviceWorker from './index.js';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  output: 'server',
  integrations: [
    serviceWorker({
      /** Provide custom service worker logic */
      swSrc: 'user-sw.js',
      // clientsClaim: false,
      // skipWaiting: false,
      /** 
       * Excludes specific pages from the service worker bundle, and forces them to always go to the network
       * This is useful for server-only specific code, for example database connections
       */
      networkOnly: ['/networkonly', '/networkonly-endpoint'],
      /** Configure workbox options */
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,ico}"]
      },
      /** Configure esbuild options */
      esbuild: {},
      /** When set to true, enables minifcation for esbuild, defaults to true */
      minify: false,
      /** Override the default service worker registration and update script */
      // swScript: ''
      /**
       * Provide a bare module specifier to a custom shim file. This may be useful when integrating third party
       * SSR integrations, which may need to shim certain API's in a service worker environment
       */
      // shim: [
      //   `${process.cwd()}/src/shim-reset.js`
      // ]
    }),
  ]
});
