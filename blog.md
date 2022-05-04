# Service Worker Side Rendering

Server Side Rendering (SSR) seems to be all the rage. Hydration strategies are the talk of the town, and honestly, it's been kind of a refreshing change from the client side JS-heavy framework status quo. However, I'm always surprised at how little exploration into service workers takes place in these discussions. 

Single Page Application Progressive Web App (whew) architecture has been [well established](https://developer.chrome.com/blog/app-shell/) by now; You build your application shell, precache your required assets, and fetch dynamic data that makes your app do what your app does. Additionally, Single Page Applications (SPA's) are usually relatively easy to PWA-ify _after_ they're already build.

The same can't be said for Multi Page Applications (MPA's), however, for MPA's you really have to take any kind of offline-capabilities along in your architecture right from the start of your project. And I just can't help but feel there's currently no real good solution for PWA-ifying MPA's, that has an excellent developer experience, like so many JS frameworks, or SSR frameworks have. Static Site Generators don't seem to really be investing in this space a whole lot, either. In fact, there only a handful of solutions I could find for this kind of architecture at all!

## Service Workers on the Server

One of those solutions is made by the brilliant [Jeff Posnick](https://twitter.com/jeffposnick). His blog [jeffy.info](jeffy.info) is completely rendered by a service worker. The initial render happens on the server, in a [Cloudflare Worker](https://developers.cloudflare.com/workers/examples/) which uses the same API's as a service worker that would run in the browser. What's interesting about this approach is that this allows Jeff to reuse the same code both on his server, as well as the client. This is also known as _isomorphic rendering_.

When the user visits the blog for the first time, the Cloudflare Worker renders the page, and on the client side the service worker starts installing. When the service worker has installed, the service worker can take control of network requests, and serve responses itself; potentially omitting the server entirely, and delivering instant responses. 

You can read all about how Jeff build his blog on, well, [his blog about it](https://jeffy.info/2021/07/17/sw-rendering.html), but it mainly comes down to: Streams.



### Stream Stitching

Consider the following example:
```js
registerRoute(
  new URLPatternMatcher({pathname: '/(.*).html'}).matcher,
  streamingStrategy(
    [
      () => Templates.Start({site}),

      async ({event, params}) => {
        const post = params.pathname.groups[0];
        const response = await loadStatic(event, `/static/${post}.json`);
        if (response?.ok) {
          const json = await response.json();
          return Templates.Page({site, ...json});
        }
        return Templates.Error({site});
      },

      () => Templates.End({site}),
    ],
    {'content-type': 'text/html'},
  ),
);
```

Here, Jeff makes use of a pattern I'll refer to as _stream stitching_. This is cool, because browsers can already start rendering streamed HTML _as it arrives_. This also means you can already stream the `<head>` of your page, which may already start downloading scripts, parsing styles, and other assets, while waiting for the rest of the HTML to come streaming in.


While from a technical point of view this is _really_ exciting, I can't help but feel the developer experience is somewhat... lacking. Workbox does an _excellent_ job at providing abstractions over streaming APIs so you [dont have to do things manually](https://gist.github.com/jakearchibald/64e26e7a1d9b06b3fa3ec0383f2b1f91), and helps with things like registering and matching routes, but even then it still feels somewhat close to the metal, especially compared to the developer experience of all these flashy SSR frameworks. Why can't we have nice things with service workers?

## Service Worker Side Rendering with Astro

I've recently been hacking on [Astro](https://astro.build) SSR projects a bunch, and was looking into creating a Cloudflare adapter to deploy my Astro SSR application to a Cloudflare environment. It was when I was reading up on Cloudflare workers that I was reminded of this [chat](https://cloudflare.tv/event/6ZJ5mEjrgcnCtBXBsUtyqV) by Jeff Posnick and Luke Edwards about his blog and the architecture laid out earlier in this blogpost, and it made me wonder; if I'm able to deploy Astro on an environment thats so similar to a service worker... **Why can't I run Astro in an actual service worker?**

So I got hacking and, well, it turns out you totally can. In this example, you can see a real Astro SSR application run by a service worker. This is hugely exciting for several reasons:

🚨 @TODO VIDEO 🚨

- Your Astro app is now offline-capable
- Your app is now installable
- The function invocations of your hosting provider are reduced dramatically, because requests can be served by the service worker in-browser
- Huge performance benefits
- It's a progressive enhancement

But most of all, it means we get an excellent developer experience! Consider the following example:

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
  {fetch(`/blog/${id}.html`)}
  <Footer/>
</html>
```

Wouldn't this be amazing? This code could run both on the server, as well as in a service worker. ⚠️ _However!_ As cool as this would be, we're not quite there _yet_. There are a few changes to be done in Astro to make this a reality, which I'll get into later in this blogpost, but spoiler alert; They're already in the works, and not far off.

What would happen in this code snippet is the following: On initial visit, the server renders this page, much like in Jeff's blog example. After the initial visit, the service worker gets installed and takes over, which means that from now on, _the exact same_ code can get rendered by the service worker in the browser instead, and deliver responses immediately.

Furthermore, in this example the `<Header/>` and `<Sidemenu/>` are static components and can be streamed immediately. The `fetch` promise returns a response, which body is... You guessed it, a stream! This means the browser can already start rendering the header (which may also start download other assets), render the sidemenu, and then immediately start streaming the result of the `fetch` to the browser.

### Isomorphic rendering

We could even expand on this pattern:

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
  {fetch(`/blog/${id}.html`).catch(() => {
    return caches?.match?.('/404.html') || fetch('/404.html');
  })}
  <Footer/>
</html>
```

Imagine if we visited a URL with an `id` that doesnt exist. If the user doesn't have a service worker installed yet, the server would:
- Try to fetch `/blog/${id}.html`, which fails
- Run the `catch` callback, and try to execute `caches?.match?.('/404.html')`, which we don't have access to on the server
- So it'll fall back to `|| fetch('/404.html')` instead

However, if the user _does_ have a service worker installed already, it could have precached the `'/404.html'` during installation, and just load it instantly from the cache.

### Server-first, server-only, service worker

When service-worker-izing your Astro applications, you have to keep in mind that the Astro code you write in your Astro frontmatter should now also be able to run in the browser. This means that you can't make use of any commonjs dependencies, or node built-ins, like `'fs'`, for example. However, it could be the case that you have need for some server-only code, like for example accessing a database, or webhooks, or redirect callbacks, or whatever. In this case, you could exclude those endpoints from the output service worker bundle.

This means that you can have an entire fullstack codebase with: Server-first, server-only, and service worker code **in the same project**. Additionally, the service worker is entirely a progressive enhancement. If your user uses a browser that doesn't support service workers, the server will still render your app just fine.


## The downsides

### Not quite yet

Currently, Astro's responses are not streamed **yet**, however, [I've been told](https://twitter.com/n_moore/status/1521527267658276865?s=20&t=xlxL7wxeqg9zTc8m23Hq0w) it's already in the works and streams have been the end goal since day one. When you consider that Astro components, once compiled, are just async iterators, this future doesn't seem far off:

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

This would even allow for for [promises and iterables](https://github.com/withastro/rfcs/discussions/188#discussioncomment-2681215) in Astro expressions, e.g.:

```js
---
import Header from '../src/components/Header.astro';

function* renderLongList() {
  yield "item 1";
  yield "item 2";
}
---
<html>
  <Header/>
  {renderLongList()}
</html>
```

Or the example with `fetch` we saw earlier in this post:

```jsx
<Header/>
<Sidemenu/>
{fetch(`/blog/${id}.html`)}
<Footer/>
```

### Bundlesize

The other downside is bundlesize. Admittedly, Astro's bundle when run in a service worker is... large. However, I've not done too much experimentation here yet, but it seems like there's a lot of room for improvement on bundlesize.


## Astro-service-worker

While streaming responses in Astro may be a ways off yet, I did turn all of this into an Astro Integration that you can already use today: `astro-service-worker`. This integration will take your Astro SSR project, and create a service worker build for it.

Getting started is easy, install the dependency:

```
npm i -S astro-service-worker
```

And add the integration to your `astro.config.mjs`:
```diff
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
+import serviceWorker from 'astro-service-worker';

export default defineConfig({
  adapters: netlify(),
  integrations: [
+   serviceWorker()
  ]
});
```

Do note that the code you write in your Astro frontmatter will now also need to run in the browser/service-worker. This means that you will not be able to make use of Nodejs built-in dependencies, or other commonjs libraries. If you still want to write server-only code, you can use the [`networkOnly`](#network-only) configuration option.

### Network-only

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

### Customize Service Worker logic

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
