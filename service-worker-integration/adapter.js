/**
 * Adapter
 */
export function getAdapter(options) {
  return {
    name: "astro-swsr-adapter",
    // serverEntrypoint: 'astro-service-worker/service-worker-integration/service-worker-entrypoint.js',
    serverEntrypoint: `${process.cwd()}/service-worker-integration/service-worker-entrypoint.js`,
    exports: ['start'],
    args: {
      clientsClaim: options.clientsClaim,
      skipWaiting: options.skipWaiting,
    }
  }
}