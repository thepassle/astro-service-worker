import { App } from 'astro/app';
import { precacheAndRoute } from 'workbox-precaching';

self.__WB_DISABLE_DEV_LOGS = true;
/**
 * Empty export to avoid the following error from being logged in the build:
 * "'createExports' is not exported by 'service-worker-integration/server.js'" 
 * 
 * We dont actually need this though 🤷‍♂️
 */
function createExports() {}

function start(manifest, args) {
  const app = new App(manifest)

  if(args.browser) {
    args.skipWaiting && self.skipWaiting();
    args.clientsClaim && self.addEventListener('activate', () => self.clients.claim());

    /** Only precache when the SW is run in a browser environment, as opposed to e.g. a cloudflare worker */
    precacheAndRoute(self.__WB_MANIFEST);
  }

  self.addEventListener('fetch', (event) => {
    const match = app.match(event.request);
    
    if(match) {   
      /** Render routes */
      const response = app.render(event.request);
      event.respondWith(response);
    } else {
      /** No match, fallback to network */
      event.respondWith(fetch(event.request))
    }
  });
}

export {
  createExports,
  start
};


