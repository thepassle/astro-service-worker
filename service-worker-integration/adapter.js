import { MIDDLEWARE_SHIM, SERVER_ENTRY_POINT } from './constants.js';

/**
 * Adapter
 */
export function getAdapter(options) {
  return {
    name: "astro-swsr-adapter",
    serverEntrypoint: SERVER_ENTRY_POINT,
    exports: ['start'],
    shim: [MIDDLEWARE_SHIM, ...(options?.shim || [])],
    args: {
      clientsClaim: options.clientsClaim,
      skipWaiting: options.skipWaiting,
      browser: options.browser,
    }
  }
}