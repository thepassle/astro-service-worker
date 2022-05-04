import { App } from 'astro/app';
import { precacheAndRoute } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';

self.skipWaiting();
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

/**
 * Empty export to avoid the following error from being logged in the build:
 * "'createExports' is not exported by 'service-worker-integration/server.js'" 
 * 
 * We dont actually need this though 🤷‍♂️
 */
function createExports() {}

function start(manifest, args) {
  const app = new App(manifest)
  self.addEventListener('fetch', async (event) => {
    const match = app.match(event.request);
    
    if(event.request.mode === 'navigate') {
      if(match) {
        /** Match routes that we want to force to go to the network */
        // for(const route of args.networkOnly) {
        //   const pattern = new URLPattern({pathname: route});
        //   const match = pattern.exec(event.request.url);

        //   if(match) {
        //     return event.respondWith(fetch(event.request));
        //   }
        // }
    
        /** Render routes */
        const response = await app.render(event.request);
        return event.respondWith(response);
      } else {
        /** No match, fallback to network */
        return event.respondWith(fetch(event.request))
      }
    }
  });
}

export {
  createExports,
  start
};


