# TODO

- Demo app, deploy
- Output a manifest, config option
- bug https://github.com/withastro/astro/issues/3298
  - remove .env files


- Combine with other integrations

```js
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import customElements from 'custom-elements-ssr/astro.js';
import serviceWorker from './index.js';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [
    customElements(),
    serviceWorker(),
  ]
});

```

- provide custom shim option?