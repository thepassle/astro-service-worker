import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// export const SHIM = `${process.cwd()}/service-worker-integration/shim.js`
export const SHIM = require.resolve('astro-service-worker/service-worker-integration/shim.js');

export const VIRTUAL_SW = 'astro-swsr-virtual-module';
export const VIRTUAL_SW_RESOLVED = '\0' + VIRTUAL_SW;

export const MANIFEST_REPLACE = '@@ASTRO_MANIFEST_REPLACE@@';
export const REPLACE_EXP = new RegExp(`['"](${MANIFEST_REPLACE})['"]`, 'g');

export const SW_FILE_NAME = 'sw.js';
export const SW_SCRIPT = `
navigator.serviceWorker.register('/${SW_FILE_NAME}');
let refreshing = false;

navigator.serviceWorker.addEventListener('controllerchange', async () => {
  if (refreshing) return;

  /** when the controllerchange event has fired, we get the new service worker */
  const newSw = (await navigator.serviceWorker.getRegistration())?.active?.state;

  /** if there was already an old activated service worker, and a new activating service worker, do the reload */
  if(oldSw === 'activated' && newSw === 'activating') {
    refreshing = true;
    window.location.reload();
  }
});
`;

