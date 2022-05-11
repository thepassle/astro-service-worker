# Astro on Cloudflare Workers

It's Platform Week at Cloudflare, and with that, comes all sort of goodies, like for example the release of [Wrangler 2.0 beta](https://blog.cloudflare.com/wrangler-v2-beta/). Interested in what's new? Sunil Pai wrote all about it here:  [10 things I love about Wrangler v2.0](https://blog.cloudflare.com/10-things-i-love-about-wrangler/).

Additionally, Astro recently released experimental support for [server-side rendering Astro apps](https://astro.build/blog/experimental-server-side-rendering/).

What better time to combine the two, jump on the hype train, and create a Cloudflare Worker adapter for Astro. While looking into creating this adapter, I admittedly got slightly sidetracked; _If I can create an Astro adapter for Cloudflare Workers, an environment that's so similar to Service workers, why can't I run Astro in a Service Worker? 🤯_. As it turns out, you totally can, and I wrote all about my crazy experimentation in that area [here](https://dev.to/thepassle/service-worker-side-rendering-swsr-cb1), are you excited for a [streaming future](https://github.com/withastro/rfcs/discussions/188) via SWSR (Service Worker Side Rendering)? I know I am!

## Getting started

First up, scaffold your Astro project with:
```
npm init astro@latest
```

Next up, we have to install some dependencies; the new wrangler CLI, and the Cloudflare Worker adapter:
```
npm install -D wrangler
npm install -S astro-service-worker
```

Once installed, add the adapter to your `astro.config.mjs`:
```js
import { defineConfig } from 'astro/config';
import worker, { cloudflare } from 'astro-service-worker/adapter';

export default defineConfig({
  adapter: worker(cloudflare)
});
```

You can now build your project by running:
```
npm run build
```

If you don't yet have a `wrangler.toml` file, the adapter will create one for you during the build. If you do have one, make sure you point the `main` and `bucket` properties to the correct locations, here's an example of what they should look like:
```toml
name = "my-project"
main = "dist/worker/index.js" # The adapter will output the worker in this location
compatibility_date = "2022-05-10"

[site]
bucket = './dist' # The adapter will output static assets in this folder
```

Once you're all setup, you can now deploy your app:
```
wrangler publish
```

## Workers Everywhere

You may have noticed that the instead of shipping a `cloudflare()` adapter, `astro-service-worker` instead ships a `worker()` adapter that takes a preset object. Many different providers and organisations seem to be embracing worker-like environments, and have even joined forces to set up a [Community Group for web-interoperable JavaScript runtimes](https://blog.cloudflare.com/introducing-the-wintercg/), and even Ryan Dahl (creater of Node/Deno) recently blogged about a similar future: [JavaScript containers](https://tinyclouds.org/javascript_containers). 

This kind of standardization is _great_, and the `worker()` adapter is built to be compatible with multiple worker-like environments. In fact; it uses the same service worker entrypoint as the client-side Service Worker integration, which is intended to run in the browser.

### Shim Environment Specific Details

Since most of these environments support the same basics in the way of event handling, supporting API's like `fetch`, and `Response`, etc, it makes sense to make the `worker()` adapter modular. However, there may still be environment-specific details and differences between providers, like for example the way static files are handled, or polyfilling.

You can take care of these things in a so-called _preset_ object. A preset object takes an optional `shim` array, which is an array of module specifiers pointing to environment-specific polyfills/shims, and an optional `initConfig` function that you can use to setup environment-specific configuration files, like for example a `wrangler.toml` in the case of Cloudflare.

For example the `cloudflare` preset contains the following `shim`: 
`cloudflare/static-assets.js`:
```js
import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

self.MIDDLEWARE.push(async (event) => {
  try {
    return await getAssetFromKV(event);
  } catch {}
});
```

> That's all the cloudflare-specific logic required!

If you're interested in supporting your own worker-like environment, you can easily create a preset and provide your environment-specific code like so:

```js
const myEnvironment = {
  /** Polyfill environment specific handling */
  shim: ['my-environment/static-assets.js'],
  /** Scaffold environment specific configuration file, like for example `wrangler.toml` */
  initConfig: (dir) => {}
}

worker(myEnvironment);
```

For more information, see the [documentation](https://npmjs.org/package/astro-service-worker).

## Offline

You can also combine this integration and go full-worker, by adding the `serviceWorker` integration:

```js
import { defineConfig } from 'astro/config';
import worker, { cloudflare } from 'astro-service-worker/adapter';
import serviceWorker from 'astro-service-worker';

export default defineConfig({
  adapter: worker(cloudflare),
  integrations:[
    serviceWorker()
  ]
});
```

And your Astro SSR app will now initially get rendered by a Cloudflare Worker, and then entirely in a Service Worker!