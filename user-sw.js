import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

/**
 * This file provides custom service worker logic for the serviceWorker integration
 * You can configure this via the `swSrc` configuration property
 */
self.addEventListener('fetch', (e) => {
  console.log('Custom logging logic: ', e.request.url);
});

/* Cache the Google Fonts stylesheets with a stale-while-revalidate strategy. */
registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

/* Cache the underlying font files with a cache-first strategy for 1 year. */
registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);