import path from 'path';
import fs from 'fs';

import { injectManifest } from 'workbox-build';
import { build, transform } from "esbuild";

import { vitePluginSW } from './service-worker-integration/vite-plugin-sw.js';
import { getAdapter } from './service-worker-integration/adapter.js';

import { 
  SW_SCRIPT, 
  SW_FILE_NAME, 
  PROCESS_SHIM, 
  REPLACE_EXP 
} from './service-worker-integration/constants.js';

/**
 * Astro Integration
 */
export default function serviceWorker(options) {
  let cfg, swInDir, manifest, renderers = [];

  return {
    name: 'astro-swsr-integration',
    hooks: {
      'astro:config:setup': async ({ config, command, injectScript }) => {
        renderers = config._ctx.renderers;
        cfg = config;

        /** Add SW registration script */
        if(command === 'build') {
          injectScript('head-inline', (await transform(options?.swScript ?? SW_SCRIPT, {minify: true})).code);
        }
      },
      'astro:build:setup': async ({ vite, pages }) => { 
        /** 
         * This plugin should be the last, even after vite-plugin-ssr,
         * otherwise the main Integration (netlify, firebase, etc) function will be output as `entry2.mjs`,
         * and then the created redirects might not work correctly (e.g. they'll point to `entry.mjs`, which is now the SW)
         */
        vite.plugins.push(
          vitePluginSW({ 
            pages,
            renderers,
            networkOnly: options?.networkOnly,
            swSrc: options?.swSrc,
            adapter: getAdapter({
              clientsClaim: options?.clientsClaim ?? true,
              skipWaiting: options?.skipWaiting ?? true,
              browser: options?.browser ?? true,
              shim: options?.shim ?? [],
            }),
          })
        );

        swInDir = vite.build.outDir;
      },
      'astro:build:ssr': (ssr) => {
        manifest = ssr.manifest;
      },
      "astro:build:done": async () => {
        const globDirectory = cfg.outDir.pathname;
        
        const swInPath = path.join(swInDir, SW_FILE_NAME);
        const swInFile = fs.readFileSync(swInPath, 'utf-8');
        const swOutPath = cfg.outDir.pathname;
        const swOutFile = path.join(swOutPath, SW_FILE_NAME);

        /** Filter out network only routes */
        manifest.routes = manifest.routes.filter(({routeData}) => !options?.networkOnly?.includes(routeData.pathname));

        /** Add SSR Manifest */
        fs.writeFileSync(
          swInPath, 
          swInFile.replace(
            REPLACE_EXP, 
            () => JSON.stringify(manifest)
          )
        );

        /** Bundle and build for the browser */
        await build({
          entryPoints: [swInPath],
          outfile: swOutFile,
          platform: 'browser',
          bundle: true,
          inject: [PROCESS_SHIM],
          minify: options?.minify ?? true,
          ...(options?.esbuild ?? {})
        });

        fs.unlinkSync(swInPath);

        /** Add precacheManifest via Workbox */
        await injectManifest({
          globDirectory,
          swSrc: swOutFile,
          swDest: swOutFile,
          ...(options?.workbox ?? {})
        });
      }
    }
  }
}
