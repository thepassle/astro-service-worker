import { defineConfig } from 'astro/config';
import serviceWorker from './service-worker-integration/index.js';

export default defineConfig({
  adapter: serviceWorker({
    networkOnly: ['/networkonly']
  }),
});
