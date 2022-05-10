# Astro-service-worker

> ⚙️ Offline-capable [Astro](https://astro.build) apps via SWSR (Service Worker Side Rendering)

`astro-service-worker` will take your Astro SSR project, and create a service worker build out of it. This has several benefits:

- Your app is now offline-capable
- Your app is now installable
- The function invocations of your hosting provider are reduced dramatically, because requests can be served by the service worker in-browser
- Huge performance benefits
- It's a progressive enhancement

All you have to do is add the integration, and consider that the code you write in your Astro frontmatter will now also need to run in the browser/service-worker. This means that you will not be able to make use of Nodejs built-in dependencies, or other commonjs libraries. If you still want to write server-only code, you can use the [`networkOnly`](#network-only) configuration option.


## Usage

### `serviceWorker`

Install:

```
npm i -S astro-service-worker
```

Add the integration to your configuration:

`astro.config.mjs`:
```js
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import serviceWorker from 'astro-service-worker';

export default defineConfig({
  adapter: netlify(),
  integrations: [
    /** Creates a client-side service worker */
    serviceWorker()
  ]
});
```

> **Note:** `astro-service-worker` requires your app to run in SSR mode, instead of SSG mode.

### `worker`

This package also includes an adapter to build your apps for worker-like environments, such as cloudflare.

`astro.config.mjs`:
```js
import { defineConfig } from 'astro/config';
import worker from 'astro-service-worker/adapter';

export default defineConfig({
  /** Creates an integration for worker-like environments */
  adapter: worker()
});
```

## Configuration

### `serviceWorker`

```js
import serviceWorker from 'astro-service-worker';

export default defineConfig({
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

      /** Both default to true, useful if you want to provide a custom installation experience */
      skipWaiting: false,
      clientsClaim: false,

      /** Configure esbuild options */
      esbuild: {},

      /** Enables minifcation for esbuild, defaults to true */
      minify: false,

      /** Override the default service worker registration and update script */
      swScript: '',
    }),
  ]
});
```
### `worker`

```js
import worker, { cloudflare } from 'astro-service-worker/adapter';

export default defineConfig({
  /** Using a preset: */
  adapter: worker(cloudflare),

  /** Configuration: */
  adapter: worker({
    /** Provide a module specifier to a custom shim file */
    shim: [
      /** local module */
      `${process.cwd()}/custom-shim.js`,
      /** bare module specifier */
      '@worker-tools/location-polyfill'
    ],
  })
});
```

## Advanced configuration

### `serviceWorker`: Overwriting Workbox options

Internally, `astro-service-worker` makes use of [Workbox](https://developer.chrome.com/docs/workbox/modules/workbox-build/#injectmanifest-mode)'s `injectManifest` functionality. You can overwrite the default configuration via the `workbox` options:


```js
export default defineConfig({
  integrations: [
    serviceWorker({
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpeg}'],
      }
    }),
  ]
});
```

### `serviceWorker`: Adding custom Service Worker logic

It could be the case that you need to extend the Service Worker to add custom logic. To do this, you can use the `swSrc` option.

```js
export default defineConfig({
  integrations: [
    serviceWorker({
      swSrc: 'my-custom-sw.js',
    }),
  ]
});
```

`my-project/my-custom-sw.js`:
```js
self.addEventListener('activate', (e) => {
  console.log('Custom logic!');
});
```

> Note that if you want to add custom logic for the `'fetch'` handler, you should use a [middleware](#middleware) instead.

Note that you can also use modules in your custom service worker logic:

```js
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);
```

### `serviceWorker`: Combine with other integrations

You can also combine this integration with other integrations.

```js
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import customElements from 'custom-elements-ssr/astro.js';
import serviceWorker from 'astro-service-worker';

export default defineConfig({
  adapter: netlify(),
  integrations: [
    customElements(),
    serviceWorker()
  ]
});
```
### `serviceWorker`: Network-only

It could be the case that you would like to make use of some server-only endpoints or pages, perhaps for creating database connections, or other things that depend on Nodejs built-in modules that are not available in the browser. If that is the case, you can specify which page you'd like to exclude from the service worker bundle:

```js
export default defineConfig({
  integrations: [
    serviceWorker({
      networkOnly: ['/networkonly-page', '/db-endpoint', 'etc']
    }),
  ]
});
```

### `worker`: Shim

It could be the case that other integrations will need to shim certain API's in the service worker, however. In this case, you can provide a custom import. The imports you provide here will be put at the very top of the service worker module before bundling.

```js
import { defineConfig } from 'astro/config';
import worker from 'astro-service-worker/adapter';

export default defineConfig({
  adapter: worker({
    shim: [
      // local module
      `${process.cwd()}/custom-shim.js`,
      // bare module specifier
      '@worker-tools/location-polyfill'
    ]
  }),
});
```

### `worker`: Presets

The adapter also comes with some environment specific presets, for example if you're deploying on cloudflare, you'll want to use the `cloudflare` preset:

```js
import worker, { cloudflare } from 'astro-service-worker/adapter';

export default defineConfig({
  adapter: worker(cloudflare)
});
```

Note that you're still in charge of creating your own `wrangler.toml`:

```toml
name = "cloudflare-astro" # Name of your project
main = "dist/worker/index.js" # Path to your function

[site]
bucket = './dist' # Path to where your static assets are located
```

### `worker`|`serviceWorker`: Middleware

It's also possible to add custom middleware to your service worker. To do so, you can add a function to `self.MIDDLEWARE`. A middleware function gets passed the `event` as well as Astro's SSR `manifest`, e.g.: `middleware(event, manifest)`.

If a middleware returns a response, other middleware will no longer run, and `event.respondWith` will be called with the response from the middleware that returned.

By default, **Astro** is the first middleware in the `MIDDLEWARE` array. You can add any additional middleware to run after Astro. If you need to run code _before_ Astro, you should prepend your middleware function to the `self.MIDDLEWARE` array, instead of `push`ing it to the end of the array. If no middleware has returned a response, the request will be sent to the network instead or when ran on the server, return a 404.

#### `serviceWorker`:

For client-side service workers, you can configure this via the `swSrc` property:

```js
serviceWorker({swSrc: 'custom-handler.js'})
```

Where `/custom-handler.js`:
```js
self.MIDDLEWARE.push((event, manifest) => {
  const url = new URL(event.request.url);
  if (url.pathname.endsWith('.jpg')) {
    return caches.match(event.request);
  }
});
```

#### `worker`:
If you're creating a preset for a server-run worker-like environment, you can do this in a shim file, for example:
```js
worker({shim: [`${process.cwd()}/my-shim.js`]})
```

Where `/my-shim.js`:
```js
import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

self.MIDDLEWARE.push((event, manifest) => {
  const url = new URL(event.request.url);

  if(manifest.assets.has(url.pathname)) {
    return getAssetFromKV(event);
  }
});
```

## Future: Streaming astro apps

In the future, once Astro release streaming responses, we can make use of that to improve performance even further:

`/blog/[id].astro`:
```astro
---
import Header from '../src/components/Header.astro';
import Sidemenu from '../src/components/Sidemenu.astro';
import Footer from '../src/components/Footer.astro';
const { id } = Astro.params;
---
<html>
  <Header/>
  <Sidemenu/>
  {fetch(`/blog/${id}.html`).then(render)}
  <Footer/>
</html>
```

In a similar fashion to this [Workbox example](https://glitch.com/edit/#!/workbox-streams?path=sw.js%3A26%3A0):

```js
import { strategy } from 'workbox-streams';
import { registerRoute } from 'workbox-core';

const streamResponse = strategy([
  () => caches.match(HEADER_CACHE_KEY, {cacheName: CACHE_NAME}),
  () => `<nav>sidebar<ul><li><a href="/about">about</a></li></ul></nav>`,
  ({event}) => apiStrategy.handle({
    event: event,
    request: new Request('/content/foo.md'),
  }),
  () => caches.match(FOOTER_CACHE_KEY, {cacheName: CACHE_NAME}),
]);

registerRoute('/foo', streamResponse);
```

As [Alex Russell says](https://twitter.com/slightlylate/status/1520857711163834368?s=20&t=l08UhgLfeAR3apcz20BYZg):
> This is awesome because it means that you can now get the document starting to request your (SW cached) CSS, JS, and other "header" resources *in parallel* with SW startup *and* the network fetch. None of the steps serialise until content comes back.


Given that the Astro's `render` function is a tagged template literal which returns an `Astro` component, which is an async Iterable, it seems like this future may not be far off:

```js
class AstroComponent {
  constructor(htmlParts, expressions) {
    this.htmlParts = htmlParts;
    this.expressions = expressions;
  }
  get [Symbol.toStringTag]() {
    return "AstroComponent";
  }
  *[Symbol.iterator]() {
    const { htmlParts, expressions } = this;
    for (let i = 0; i < htmlParts.length; i++) {
      const html = htmlParts[i];
      const expression = expressions[i];
      yield markHTMLString(html);
      yield _render(expression);
    }
  }
}
```