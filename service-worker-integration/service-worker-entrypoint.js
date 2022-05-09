import { App } from 'astro/app';
import { precacheAndRoute } from 'workbox-precaching';

self.__WB_DISABLE_DEV_LOGS = true;

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
        const response = await handler(event, manifest);
        if (response) return response;
      }

      return fetch(event.request);
    }());
  });
}

function createExports() {
  return { start };
}

export {
  createExports,
  start
};


