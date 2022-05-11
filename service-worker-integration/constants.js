import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const url = u => process?.env?.__SWSR_DEV === 'dev' ? `${process.cwd()}${u}` : require.resolve(`astro-service-worker${u}`);

export const MIDDLEWARE_SHIM = url('/service-worker-integration/shim/middleware.js');
export const PROCESS_SHIM = url('/service-worker-integration/shim/process.js');
export const SERVER_ENTRY_POINT = url('/service-worker-integration/service-worker-entrypoint.js');
export const CLOUDFLARE_STATIC_ASSETS = url('/adapter/cloudflare/static-assets.js');

export const VIRTUAL_SW = 'astro-swsr-virtual-module';
export const VIRTUAL_SW_RESOLVED = '\0' + VIRTUAL_SW;

export const MANIFEST_REPLACE = '@@ASTRO_MANIFEST_REPLACE@@';
export const REPLACE_EXP = new RegExp(`['"](${MANIFEST_REPLACE})['"]`, 'g');

export const SW_FILE_NAME = 'sw.js';
export const SW_SCRIPT = `
navigator.serviceWorker.register('/${SW_FILE_NAME}');
async function handleUpdate() {
  if ("serviceWorker"in navigator) {
    let refreshing;

    // check to see if there is a current active service worker
    const oldSw = (await navigator.serviceWorker.getRegistration())?.active?.state;

    navigator.serviceWorker.addEventListener('controllerchange', async () => {
      if (refreshing) return;

      // when the controllerchange event has fired, we get the new service worker
      const newSw = (await navigator.serviceWorker.getRegistration())?.active?.state;

      // if there was already an old activated service worker, and a new activating service worker, do the reload
      if(oldSw === 'activated' && newSw === 'activating') {
        refreshing = true;
        window.location.reload();
      }
    });
  }
}

handleUpdate();
`;

