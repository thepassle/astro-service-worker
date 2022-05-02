# Astro-service-worker

> ⚙️ Offline-first Astro apps via SWSR (Service Worker Side Rendering)

## Configuration

```js
export default defineConfig({
  adapter: serviceWorker({
    /** 
     * Directory to output the service worker to 
     * For example, if you're using Astro's Netlify adapter, use: 'netlify'
     */
    outDir: 'dist',
    /** Array of routes to be matched only on the server */
    networkOnly: ['/networkonly'],
    /** Provide custom logic to be added to your service worker */
    swSrc: 'user-sw.js',
    /** Configure or overwrite workbox-build `injectManifest` configuration */
    workbox: {},
    /** When set to true, enables minification for esbuild */
    dev: false
  }),
});
```

## Usage

Currently, it's not possible to have multiple Astro `adapter`s. Thats why it's recommended to have two Astro configurations when using the service worker integration: `astro.config.mjs` and a special `astro.sw.config.mjs`.

`astro.config.mjs`:
```js
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  adapter: netlify()
});
```

And `astro.sw.config.mjs`:
```js
import { defineConfig } from 'astro/config';
import serviceWorker from 'astro-service-worker';

export default defineConfig({
  adapter: serviceWorker({
    outDir: 'dist',
  })
});
```

And then add the following script to your `package.json`:
```json
{
  "scripts": {
    "build": "astro build && astro build --config astro.sw.config.mjs",
  }
}
```

## Adding custom Service Worker logic

It could be the case that you need to extend the Service Worker to add custom logic. To do this, you can use the `swSrc` option.

```js
export default defineConfig({
  adapter: serviceWorker({
    outDir: 'dist',
    swSrc: 'my-custom-sw.js',
  }),
});
```

`my-project/my-custom-sw.js`:
```js
self.addEventListener('fetch', (e) => {
  console.log('Custom logic!');
});
```

## Limitations

### Multiple adapters

Because currently multiple adapters and not supported, there is also no cross-communication between adapters possible, which means the `astro-service-worker` integration can't call `injectScript` to inject the service worker registration code. You'll have to manually add it to all your pages for now. In the future, this adapter may be just an integration, but some APIs required to make that happen are currently missing.

### Dependencies
Currently, there's no good way to distinguish between which of your source code should be executed only on the server, and which of your source code should be browser-compatible. That means that currently, all your `.astro` pages and components, and all your `.js` route handlers get bundled to the service worker. This means you can not use any dependencies that rely on Node built-in modules, for example, or other server-only dependencies.


## Future steps and Feedback

### Missing pieces/apis to make this happen

Im currently working on turning this adapter into a integration (see gist [here](https://gist.github.com/thepassle/be9010c330d7524133a4cfcf0a1c2ea1)), which includes a vite plugin for bundling the service worker, which will make using this package a little bit easier:

```js
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  adapter: netlify(),
  integrations: [serviceWorker()]
});
```

There are a few things missing to make this happen though. In order to create the service worker bundle, I need to have access to the SSR Manifest, which currently is not available in any of the integration hooks or vite/rollup hooks. I've created an issue for this [here](https://github.com/withastro/astro/issues/3251). 

Additionally, it'd be nice to be able to import the `manifestReplace` and `pagesVirtualModuleId`, but they are not available in `astro/core`'s package export map.

Ideally, I'd also have access to the pageData in my integration/vite plugin, which is in `internals` via `eachPageData(internals)`, but `internals` is not exposed anywhere either. Having access to internals also gives greater control over which code should be **server-only** and **service-worker-only**.
### Streaming astro apps

Dreaming even further, it would be even more amazing to be able to stitch together stream responses in Astro components.

```astro
---
import Header from '../src/components/Header.astro';
import Sidemenu from '../src/components/Sidemenu.astro';
import Footer from '../src/components/Footer.astro';
import { streamable } from 'astro';
---
<html>
  <Header/>
  <Sidemenu/>
  {streamable(() => fetch('/content/foo.md').then(render))}
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


Given that the `render` function is a tagged template literal which returns an `Astro` component, it seems like something like this should not be completely impossible in the future, but likely requires some changes in Astro.

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

E.g.: if `expression.type === 'streamable'`, execute the callback which returns the stream, and stream it along to the browser.
