/**
 * Adapter
 */
export function getAdapter(options) {
  return {
    name: "astro-swsr-adapter",
    serverEntrypoint: process?.env?.__SWSR_DEV === 'dev' 
      ? `${process.cwd()}/service-worker-integration/service-worker-entrypoint.js`
      : 'astro-service-worker/service-worker-integration/service-worker-entrypoint.js',
    exports: ['start'],
    args: {
      clientsClaim: options.clientsClaim,
      skipWaiting: options.skipWaiting,
      browser: options.browser,
    }
  }
}