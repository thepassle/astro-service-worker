import { build } from "esbuild";
import { PROCESS_SHIM, MIDDLEWARE_SHIM, SERVER_ENTRY_POINT, CLOUDFLARE_STATIC_ASSETS } from '../service-worker-integration/constants.js';

/**
 * Adapter
 */
function getAdapter(options) {
  return {
    name: 'astro-worker-adapter',
    serverEntrypoint: SERVER_ENTRY_POINT,
    exports: ['start'],
    // @TODO depends on PR
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
  let cfg;
  let workerInPath;

  return {
    name: 'astro-worker',
    hooks: {
      'astro:config:done': ({ config, setAdapter }) => {
        cfg = config;
        setAdapter(getAdapter(options));
      },
      'astro:build:start': ({ buildConfig }) => {
        buildConfig.client = cfg.outDir;
				buildConfig.server = new URL('./worker/', cfg.outDir);
        buildConfig.serverEntry = 'index.js';

        workerInPath = new URL(`${buildConfig.server}${buildConfig.serverEntry}`).pathname;
      },
      'astro:build:done': async () => {
        await build({
          entryPoints: [workerInPath],
          outfile: workerInPath,
          platform: 'browser',
          bundle: true,
          allowOverwrite: true,
          inject: [PROCESS_SHIM],
          minify: options?.minify ?? false,
          ...(options?.esbuild ?? {})
        });
      }
    } 
  };
}

export { cloudflare, worker, worker as default };