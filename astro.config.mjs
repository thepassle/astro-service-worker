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
      // swSrc: 'user-sw.js',
      //
      networkOnly: ['/networkonly', '/networkonly-endpoint'],
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,ico}"]
      },
      esbuild: {},
      minify: false,
      
      worker: true,
    }),
  ]
});
