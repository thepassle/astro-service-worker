---
id: 2
title: Protecting assets with Netlify Edge Functions in Astro
published: true
description: 
tags: netlify, edge, astro
---

I recently worked on a [project](https://dev.to/thepassle/trying-out-astro-ssr-astro-10-hackaton-3h0g) for the Astro 1.0 Hackathon, that has some authentication and a paid section. Naturally, I'd like the content in the paid section to only be available to... paying customers. For example, there are loads of images, but also markdown files, and other static assets that I'd like to _protect_.

Since Astro currently doesn't really have a [middleware system](https://github.com/withastro/rfcs/discussions/174), it's been kind of tricky to figure out how to protect static assets, or how to kind of... intercept a request.

> TL;DR: Source code [here](https://github.com/thepassle/astro-protected-assets), live demo [here](https://astro-protected-assets.netlify.app/)

## Netlify Edge Functions to the rescue

_But!_ Then along came [Netlify Edge Functions](https://www.netlify.com/blog/announcing-serverless-compute-with-edge-functions/). Netlify Edge Functions can be used in a similar way to middleware — we can essentially put an Edge Function _in front_ of the Netlify Function that serves our Astro application, and do something with the request; like for example check authentication status!

### The difference between Edge Functions and Regular Functions

Edge Functions are run on the _edge_, which I've taken to mean they're available in more regions than regular functions, or; potentially a region that's closer to your user. They also have a faster start up time, because they use Deno instead of Node.js. This also means that you have to keep in mind that you can't use any dependencies that depend on Node.js built-ins when writing Edge Functions, which may or may not be really inconvenient.

Additionally, Netlify Edge Functions have a really nice concept of _forwarding_ or `next()`ing a request, which will essentially defer the handler to the next handler in line;

```js
export default async function(req, context) {
  console.log('Handling request!');

  // if we transform the request, we have to call `context.next()`
  return await context.next();

  // if we want to just 'forward' the request to the next handler, we can just return
  return;
}
```

That's right, you can have multiple Edge Functions handling a response. From the [Netlify Documentation](https://docs.netlify.com/netlify-labs/experimental-features/edge-functions/declarations/), a request for `/admin` would invoke the `auth` function first, and then the `injector` function:

```toml
[[edge_functions]]
  path = "/admin"
  function = "auth"

[[edge_functions]]
  path = "/admin"
  function = "injector"

[[edge_functions]]
  path = "/blog/*"
  function = "auth"
```

The order of execution is:
- Netlify Edge Functions (potentially multiple)
- Evaluating redirect rules from your `_redirect` if present
- Static content
- Netlify Function

## Protecting static assets

Now that we know how to use Edge Functions to act as a middleware of sorts, we can start getting our hands dirty. First of all, I've created my project with:

```
npm init astro@latest -- --template minimal
```

This will scaffold a barebones Astro starter project. Next up, install the `@astrojs/netlify` adapter:
```
npm i -S @astrojs/netlify
```

And add the adapter to your configuration:
```diff
import { defineConfig } from 'astro/config';
+ import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
+  adapter: netlify()
});
```

> As an aside, you can also [run Astro directly on Netlify Edge Functions](https://astro.build/blog/netlify-edge-functions/), but in this case my project uses some dependencies that are not compatible with Deno

We'll also create a `protected/` folder inside the `public` folder that has been scaffolded by Astro, and add an image to it, for example: `my-app/public/protected/my-image.png`.

Great! We can now create our Edge Function. In the root of your project, create a `edge-functions/` folder, that contains a `protected.js`:

`my-project/edge-functions/protected.js`:
```js
export default async (req) => {
  const url = new URL(req.url);
  const protectedRoutes = new URLPattern({pathname: '/protected/:img'});
  const match = protectedRoutes.exec(url);

  const auth = url.searchParams.has('auth');

  if(match && !auth) return new Response(null, {status: 403});
  return;
};
```

> In this case, because we're not transforming the request, we're simply `return`ing instead of calling `context.next()`

In this file we use an [URLPattern](https://web.dev/urlpattern/) to see whether the request matches a protected asset or not. If it does, we want to see if a user is authenticated. For demoing purposes, we'll just check if the `auth` query parameter is present (for example: `https://my-app.netlify.app/protected/foo.png?auth=true`). If the `auth` query parameter is present, we just return, which will defer the request to the next step in Netlify's execution line (netlify edge functions -> redirect rules -> static assets -> netlify function), which in this case means the static image will be served to the browser. If the `auth` query parameter is absent, the user will get a `403 Forbidden` response, and the static asset will not be served.

In a real application, you'll probably want to check the authentication status of the user by verifying the JWT, or whatever other authentication mechanism you use, for example:

```js
import { verify } from "https://deno.land/x/djwt@v2.4/mod.ts";

const encoder = new TextEncoder();
const keyBuf = encoder.encode(Deno.env.get('JWT_SECRET'));
const key = await crypto.subtle.importKey( "raw", keyBuf, {name: "HMAC", hash: "SHA-256"}, true, ["sign", "verify"]);

export default async (req, context) => {
  const url = new URL(req.url);
  const protectedRoutes = new URLPattern({pathname: '/protected/:img'});
  const match = protectedRoutes.exec(url);

  if(match) {
    try {
      const jwt = context?.cookies?.get('jwt') ?? '';
      await verify(jwt, key);
      return;
    } catch(e) {
      return new Response(null, {status: 403});
    }
  }

  return;
};
```

Next up, we have to create a `netlify.toml` file in the root of our project, and declare our Edge Function:
```toml
[[edge_functions]]
path = "/protected/*"
function = "protected"
```

This means that for every request that matches `/protected/*`, it will execute our `protected.js` Edge Function.

## Deploying

Excellent, we should now be all set, and have some protection of our static assets in place. 

To wrap things up, all we have to do is add the following `deploy` script to our `package.json`:

```diff

  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
+    "deploy": "astro build && cp -R ./edge-functions ./netlify && netlify deploy --prod --build --dir=netlify",
    "preview": "astro preview"
  },
```

The reason we have our `edge-functions/` folder in the root of our project is that running `astro build` will wipe the contents of the `netlify/` folder, so if we'd have the source code of our edge function in the `netlify/` folder, it would get overwritten whenever we run `astro build`. To work around this, we just keep the `edge-functions/` folder in our root, and at build-time, we copy them to the `netlify/` folder with a simple command: `cp -R ./edge-functions ./netlify`.

Do note that if you're deploying with the Netlify CLI, you'll now have to use the `--build` flag as well to correctly deploy your Edge Function, e.g.: `netlify deploy --prod --build --dir=netlify`.

And when we finally run `npm run deploy`, we can see our application works exactly as expected:

- `https://astro-protected-assets.netlify.app/protected/foo.png` -> 403 Forbidden, image is not shown
- `https://astro-protected-assets.netlify.app/protected/foo.png?auth=true` -> 200 OK, image is shown

You can find a link to the demo [here](https://astro-protected-assets.netlify.app/), and a link to the source code [here](https://github.com/thepassle/astro-protected-assets).

