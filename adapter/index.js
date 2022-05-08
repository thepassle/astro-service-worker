import { MIDDLEWARE_SHIM, SERVER_ENTRY_POINT, CLOUDFLARE_STATIC_ASSETS } from '../service-worker-integration/constants.js';

/**
 * Adapter
 */
function getAdapter(options) {
  return {
    name: 'astro-worker-adapter',
    serverEntrypoint: SERVER_ENTRY_POINT,
    exports: ['start'],
    // @TODO wait for PR to land to test this
    shim: [MIDDLEWARE_SHIM, ...(options?.shim ?? [])],
    args: {
      clientsClaim: false,
      skipWaiting: false,
      browser: false,
    }
  }
}

const cloudflare = {
  shim: [
    '@worker-tools/location-polyfill',
    CLOUDFLARE_STATIC_ASSETS,
  ]
}

function worker(options) {
  return {
    name: 'astro-worker',
    hooks: {
      'astro:config:done': ({ setAdapter }) => {
        setAdapter(getAdapter(options));
      },
      'astro:build:start': ({ buildConfig }) => {
        // buildConfig.serverEntry = 'index.js';
        // buildConfig.server = _config.outDir;
      },
    } 
  };
}

export { cloudflare, worker, worker as default };