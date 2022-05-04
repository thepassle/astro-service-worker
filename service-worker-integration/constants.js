import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export const MANIFEST_REPLACE = '@@ASTRO_MANIFEST_REPLACE@@';
export const REPLACE_EXP = new RegExp(`['"](${MANIFEST_REPLACE})['"]`, 'g');

export const SW_FILE_NAME = 'sw.js';
export const SW_SCRIPT = `
navigator.serviceWorker.register('/${SW_FILE_NAME}');
let refreshing = false;
navigator.serviceWorker.addEventListener('controllerchange', () => {
  if (refreshing) return;
  window.location.reload();
  refreshing = true;
});
`;

// @TODO: require.resolve('astro-service-worker/service-worker-integration/shim.js')
export const SHIM = `${process.cwd()}/service-worker-integration/shim.js`
