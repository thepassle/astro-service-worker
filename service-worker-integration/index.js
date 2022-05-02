import fs from 'fs';
import path from 'path';
import { injectManifest } from 'workbox-build';
import { build } from "esbuild";

const SHIM = `self.process = {env: {}, argv: []}; self.global = globalThis;`;

function getAdapter({networkOnly = []} = {}) {
  return {
    name: "astro-service-worker",
    serverEntrypoint: `astro-service-worker/service-worker-integration/server.js`,
    // serverEntrypoint: `${process.cwd()}/service-worker-integration/server.js`,
    exports: [],
    args: { networkOnly }
  };
}

function createIntegration(options) {
  if(!options?.outDir) {
    throw new Error(`[astro-service-worker] Missing required option: outDir
E.g.: serviceWorker({outDir: 'dist'});
    `);
  }

  let cfg;
  let userSwSrc = '';
  let outDir = options?.outDir;

  return {
    name: "astro-service-worker",
    hooks: {
      "astro:config:done": ({ config, setAdapter }) => {
        setAdapter(getAdapter(options));
        cfg = config;
      },
      'astro:build:start': async ({ buildConfig }) => {
        buildConfig.serverEntry = 'index.js';
        cfg.swEntryFile = buildConfig.serverEntry;
        buildConfig.server = cfg.outDir;
      },
      "astro:build:done": async () => {
        if('swSrc' in options) {
          const userSwPath = `${process.cwd()}/${options.swSrc}`;
          userSwSrc = fs.readFileSync(userSwPath, 'utf-8');
        }

        const swInDir = cfg.outDir.pathname;
        const swInPath = path.join(swInDir, cfg.swEntryFile);
        const swOutDir = `${process.cwd()}/${outDir}/`;
        const swOutPath = path.join(swOutDir, 'sw.js');

        const swInFile = fs.readFileSync(swInPath, 'utf-8');

        /** Add custom user-provided SW logic if provided */
        fs.writeFileSync(swInPath, [userSwSrc, swInFile].join('\n'));
      
        /** Add precacheManifest via Workbox */
        await injectManifest({
          globDirectory: swOutDir,
          swSrc: swInPath,
          swDest: swInPath,
          ...(options?.workbox ?? {})
        });

        /** Bundle and build for the browser */
        await build({
          entryPoints: [swInPath],
          outfile: swOutPath,
          platform: 'browser',
          bundle: true,
          minify: options?.dev ?? false
        });

        /** Add node shim for process.env and process.argv */
        const swOutFile = fs.readFileSync(swOutPath, 'utf-8');
        fs.writeFileSync(swOutPath, [SHIM, swOutFile].join('\n'));

        /** Clean up */
        fs.rmdirSync(swInDir, { recursive: true });
      }
    }
  };
}

export {
  createIntegration as default,
  getAdapter
};
