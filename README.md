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
    serviceWorker()
  ]
});
```

> **Note:** `astro-service-worker` requires your app to run in SSR mode, instead of SSG mode.

## Configuration

```js
export default defineConfig({
  integrations: [
    serviceWorker({
      /** 
       * Provide custom service worker logic 
       */
      swSrc: 'user-sw.js',

      /** 
       * Excludes specific pages from the service worker bundle, and forces them to always go to the network
       * This is useful for server-only specific code, for example database connections
       */
      networkOnly: ['/networkonly-astro'],

      /** 
       * Configure workbox options 
       */
      workbox: {},

      /** Both default to true, useful if you want to provide a custom installation experience */
      skipWaiting: false,
      clientsClaim: false,

      /** 
       * Configure esbuild options 
       */
      esbuild: {},

      /** 
       * When set to true, enables minifcation for esbuild, defaults to true 
       */
      dev: false,

      /** 
       * Override the default service worker registration and update script 
       */
      swScript: '',

      /**
       * Provide a bare module specifier to a custom shim file. This may be useful when integrating third party
       * SSR integrations, which may need to shim certain API's in a service worker environment
       */
      shim: ['my-custom-integration/shim.js']
    }),
  ]
});
```


## Overwriting Workbox options

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

## Adding custom Service Worker logic

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
self.addEventListener('fetch', (e) => {
  console.log('Custom logic!');
});
```

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

## Combine with other integrations

You can also combine this integration with other integrations.

```js
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import customElements from 'custom-elements-ssr/astro.js';
import serviceWorker from './index.js';

export default defineConfig({
  adapter: netlify(),
  integrations: [
    customElements(),
    serviceWorker()
  ]
});
```

## Shim

It could be the case that other integrations will need to shim certain API's in the service worker, however. In this case, you can provide a custom import. The imports you provide here will be put at the very top of the service worker module before bundling.

```js
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import serviceWorker from './index.js';

export default defineConfig({
  adapter: netlify(),
  integrations: [
    serviceWorker({
      shim: ['my-custom-integration/shim.js']
    })
  ]
});
```


## Network-only

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