import { defineConfig } from 'astro/config';
import serviceWorker from './service-worker-integration/index.js';

export default defineConfig({
  adapter: serviceWorker({
    /** 
     * Directory to output the service worker to 
     * For example, if you're using Astro's Netlify adapter, use: 'netlify'
     */
    outDir: 'netlify',
    /** Array of routes to be matched only on the server */
    networkOnly: ['/networkonly'],
    /** Provide custom logic to be added to your service worker */
    swSrc: 'user-sw.js',
    /** Configure or overwrite workbox-build `injectManifest` configuration */
    workbox: {
      globPatterns: ['**/*.{png,js,css,html}']
    },
    /** When set to true, enables minification for esbuild */
    dev: false
  }),
});
