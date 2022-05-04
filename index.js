import path from 'path';
import fs from 'fs';

import { injectManifest } from 'workbox-build';
import { build } from "esbuild";

import { vitePluginPages } from './service-worker-integration/vite-plugin-pages.js';
import { vitePluginSW } from './service-worker-integration/vite-plugin-sw.js';
import { getAdapter } from './service-worker-integration/adapter.js';

import { SW_SCRIPT, SW_FILE_NAME, SHIM, REPLACE_EXP } from './service-worker-integration/constants.js';

/**
 * Astro Integration
 */
export default function serviceWorker(options) {
  let cfg, swInDir, manifest, renderers = [];

  return {
    name: 'astro-swsr-integration',
    hooks: {
      'astro:config:setup': ({ config, command, injectScript }) => {
        renderers = config._ctx.renderers;

        /** Add SW registration script */
        if(command === 'build') {
          injectScript({stage: 'head-inline', content: options?.swScript ?? SW_SCRIPT});
        }
      },
      "astro:config:done": ({ config }) => {
        cfg = config;
      },
      'astro:build:setup': async ({ vite, pages }) => { 
        vite.plugins.push(vitePluginPages({ 
          pages,
          renderers,
          networkOnly: options.networkOnly,
        }));

        /** 
         * This plugin should be the last, even after vite-plugin-ssr,
         * otherwise the main Integration (netlify, firebase, etc) function will be output as `entry2.mjs`,
         * and then the created redirects might not work correctly (e.g. they'll point to `entry.mjs`, which is now the SW)
         */
        vite.plugins.push(vitePluginSW({ 
          swSrc: options?.swSrc,
          adapter: getAdapter(),
        }));

        swInDir = vite.build.outDir;
      },
      'astro:build:start': async ({ buildConfig }) => {
        buildConfig.excludePages = options.networkOnly;
			},
      'astro:build:ssr': (ssr) => {
        manifest = ssr.manifest;
        manifest.routes = manifest.routes.filter(({routeData}) => !options.networkOnly.includes(routeData.pathname));
      },
      "astro:build:done": async () => {
        const globDirectory = cfg.outDir.pathname;
        
        const swInPath = path.join(swInDir, SW_FILE_NAME);
        const swInFile = fs.readFileSync(swInPath, 'utf-8');
        const swOutPath = cfg.outDir.pathname;
        const swOutFile = path.join(swOutPath, SW_FILE_NAME);
      
        /** Add precacheManifest via Workbox */
        await injectManifest({
          globDirectory,
          swSrc: swInPath,
          swDest: swInPath,
          ...(options?.workbox ?? {})
        });

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
          inject: [SHIM],
          minify: options?.dev ?? true,
          ...(options?.esbuild ?? {})
        });

        fs.unlinkSync(swInPath);
      }
    }
  }
}