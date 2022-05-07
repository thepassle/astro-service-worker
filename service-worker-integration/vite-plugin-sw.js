import path from 'path';
import fs from 'fs';
import { MANIFEST_REPLACE, SW_FILE_NAME } from './constants.js';

const virtualSwModuleId = 'astro-swsr-virtual-module-sw';
const resolvedVirtualSwModuleId = '\0' + virtualSwModuleId;

/**
 * Vite plugin
 */
export function vitePluginSW(options) {
  let customServiceWorkerCode = '';

  if(options?.swSrc) {
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
      const { 
        networkOnly, 
        renderers, 
        pages, 
        adapter,
        shim
      } = options;
      
      if (id === resolvedVirtualSwModuleId) {
        let i = 0;
        const rendererImports = [];
        const pagesImports = [];
        let importMap = '';
        let rendererItems = '';

        /**
         * Construct renderer imports, these need to be first in the module because renderers may
         * add custom shims that need to be loaded before importing pages
         * 
         * e.g. a `page` may use an API that a `renderer` needs to shim
         */
        for (const renderer of renderers) {
          const variable = `_renderer${i}`;
          rendererImports.push(`import ${variable} from '${renderer.serverEntrypoint}';`);
          rendererItems += `Object.assign(${JSON.stringify(renderer)}, { ssr: ${variable} }),`;
          i++;
        }

        i = 0;
        
        /**
         * Construct imports for pages
         */
        for (const page of pages.values()) {
          /** Exclude networkOnly routes from the build */
          if(networkOnly?.includes(page.route.pathname)) continue;

          const variable = `_page${i}`;
          pagesImports.push(`import * as ${variable} from '${page.moduleSpecifier}';`);
          importMap += `['${page.component}', ${variable}],`;
          i++;
        }

        /**
         * Create the service worker module
         */
        return `${shim.map(shim => `import '${shim}'`).join('\n')}
${rendererImports.join('\n')}
${pagesImports.join('\n')}
import { start } from '${adapter.serverEntrypoint}';
import { deserializeManifest as _deserializeManifest } from 'astro/app';

${customServiceWorkerCode}

const _pageMap = new Map([${importMap}]);
const _renderers = [${rendererItems}];

const _manifest = Object.assign(_deserializeManifest('${MANIFEST_REPLACE}'), {
  pageMap: _pageMap,
  renderers: _renderers
});

self._args = ${adapter.args ? JSON.stringify(adapter.args) : '{}'}
start(_manifest, self._args);
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
