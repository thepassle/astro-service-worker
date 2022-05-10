import { 
  PROCESS_SHIM, 
  MIDDLEWARE_SHIM, 
  SERVER_ENTRY_POINT, 
  CLOUDFLARE_STATIC_ASSETS 
} from '../service-worker-integration/constants.js';

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
  shim: [PROCESS_SHIM, CLOUDFLARE_STATIC_ASSETS],
}

function worker(options) {
  let outdir;

  return {
    name: 'astro-worker',
    hooks: {
      'astro:config:done': ({ config, setAdapter }) => {
        outdir = config.outDir;
        setAdapter(getAdapter(options));
      },
      'astro:build:start': ({ buildConfig }) => {
        buildConfig.client = outdir;
        buildConfig.server = new URL('./worker/', outdir);
        buildConfig.serverEntry = 'index.js';
      },
      'astro:build:setup': ({ vite }) => { 
        vite.build.rollupOptions.output.format = 'iife';
        vite.build.rollupOptions.output.inlineDynamicImports = true;

        vite.ssr.noExternal = true;
      },
    } 
  };
}

export { cloudflare, worker, worker as default };