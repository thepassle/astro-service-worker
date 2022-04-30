import { App } from 'astro/app';
// @TODO urlpatternpolyfill

self.addEventListener('install', event => {
  console.log('sw install');
});

self.addEventListener('activate', () => {
  console.log('sw activate');
  clients.claim();
});

let app;
function createExports(manifest) {
  app = new App(manifest);
  return {
    async handler(req, res, next) {
      const route = app.match(req);
      if (route) {
        try {
          const response = await app.render(req);
        } catch (err) {
          if (next) {
            next(err);
          } else {
            throw err;
          }
        }
      } else if (next) {
        return next();
      }
    }
  };
}

async function start(manifest, args = {networkOnly: []}) {

  self.addEventListener('fetch', async (event) => {
    const match = app.match(event.request);
    
    if(event.request.mode === 'navigate') {
      console.log(1, {manifest, match, event});
      if(match) {
        for(const route of args.networkOnly) {
          const pattern = new URLPattern({pathname: route});
          console.log(2, pattern)
          const match = pattern.exec(event.request.url);
          console.log(3, match)
          if(match) {
            console.log(4)
            return event.respondWith(fetch(event.request));
          }
        }
    
        const response = await app.render(event.request);
        // const text = await response.text()
        return event.respondWith(response);
      } else {
        console.log(5);
        return event.respondWith(fetch(event.request))
      }
    }
  });

}

export {
  createExports,
  start
};
