// @TODO remove, only for local testing
import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

import '@worker-tools/location-polyfill';
import { App } from 'astro/app';
import { precacheAndRoute } from 'workbox-precaching';

// @TODO remove, only for local testing
self.__maybeHandleStaticAssets = async (event) => await getAssetFromKV(event);

self.__WB_DISABLE_DEV_LOGS = true;

/**
 * Empty export to avoid the following error from being logged in the build:
 * "'createExports' is not exported by 'service-worker-integration/server.js'" 
 * 
 * We dont actually need this though 🤷‍♂️
 */
function createExports() {}

function start(manifest, args) {
  const app = new App(manifest);
  
  self.MIDDLEWARE.push((event) => {
    const match = app.match(event.request);
    if(match) return app.render(event.request);
  });

  if(args?.browser) {
    args?.skipWaiting && self.skipWaiting();
    args?.clientsClaim && self.addEventListener('activate', () => self.clients.claim());

    /** Only precache when the SW is run in a browser environment, as opposed to e.g. a cloudflare worker */
    precacheAndRoute(self.__WB_MANIFEST);
  }

  self.addEventListener('fetch', (event) => {
    event.respondWith(async function() {
      for (const handler of self.MIDDLEWARE) {
        const response = await handler(event.request);
        if (response) return response;
      }

      return fetch(event.request);
    }());
  });
}

export {
  createExports,
  start
};


