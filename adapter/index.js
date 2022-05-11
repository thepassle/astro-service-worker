import fs from 'fs';
import path from 'path';
import { build } from 'esbuild';

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
    args: {
      clientsClaim: false,
      skipWaiting: false,
      browser: false,
    }
  }
}

const WRANGLER_TOML =  `name = "my-project"
main = "dist/worker/index.js"
compatibility_date = "${(new Date()).toISOString().split('T')[0]}"

[site]
bucket = './dist'`;

const cloudflare = {
  shim: [MIDDLEWARE_SHIM, CLOUDFLARE_STATIC_ASSETS],
  initConfig: () => {
    const wranglerPath = path.join(process.cwd(), 'wrangler.toml');
    if(!fs.existsSync(wranglerPath)) {
      fs.writeFileSync(wranglerPath, WRANGLER_TOML);
    }
  }
}

function worker(options) {
  let cfg, outdir;

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
        cfg = buildConfig;
      },
      'astro:build:setup': ({ vite }) => { 
        vite.ssr.noExternal = true;
      },
      'astro:build:done': async (dir) => {
        const chunksPath = path.join(cfg.server.pathname, 'chunks', path.sep);
        const workerInFilePath = path.join(cfg.server.pathname, 'index.js');
        const workerInFile = fs.readFileSync(workerInFilePath);

        /** Add shims */
        fs.writeFileSync(
          workerInFilePath, 
          [
            ...options?.shim?.map(s => `import '${s}';`),
            workerInFile
          ].join('\n')
        );

        await build({
          entryPoints: [workerInFilePath],
          outfile: workerInFilePath,
          allowOverwrite: true,
          platform: 'browser',
          bundle: true,
          inject: [PROCESS_SHIM],
          minify: options?.minify ?? false,
          ...(options?.esbuild ?? {})
        });

        fs.rmdirSync(chunksPath, { recursive: true });
      }
    } 
  };
}

export { cloudflare, worker, worker as default };