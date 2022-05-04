import path from 'path';
import fs from 'fs';
import { pagesVirtualModuleId } from './vite-plugin-pages.js';
import { MANIFEST_REPLACE, SW_FILE_NAME } from './constants.js';

const virtualSwModuleId = 'astro-swsr-virtual-module-sw';
const resolvedVirtualSwModuleId = '\0' + virtualSwModuleId;

/**
 * Vite plugin
 */
export function vitePluginSW(options) {
  let customServiceWorkerCode = '';

  if('swSrc' in options) {
    const userSwPath = path.join(process.cwd(), options.swSrc);
    customServiceWorkerCode = fs.readFileSync(userSwPath, 'utf-8');
  }

  return {
    name: 'vite-plugin-swsr-sw',
    enforce: 'post',
    options(opts) {
      return {
        ...opts,
        input: [...(opts.input ?? []), virtualSwModuleId],
      };
    },
    resolveId(id) {
      if (id === virtualSwModuleId) {
        return resolvedVirtualSwModuleId;
      }
    },
    load(id) {
      const adapter = options.adapter;

      if (id === resolvedVirtualSwModuleId) {
        return `import { start } from '${adapter.serverEntrypoint}';
import * as _main from '${pagesVirtualModuleId}';
import { deserializeManifest as _deserializeManifest } from 'astro/app';

${customServiceWorkerCode}

const _manifest = Object.assign(_deserializeManifest('${MANIFEST_REPLACE}'), {
  pageMap: _main.pageMap,
  renderers: _main.renderers
});

const _args = ${adapter.args ? JSON.stringify(adapter.args) : '{}'};
start(_manifest, _args);
`;
      }
    },
    generateBundle(_, bundle) {
      for (const [_chunkName, chunk] of Object.entries(bundle)) {
        if (chunk?.modules?.[resolvedVirtualSwModuleId]) {
          chunk.fileName = SW_FILE_NAME;
        }
      }
    }
  }
}
