export const pagesVirtualModuleId = 'astro-swsr-virtual-module-pages';
const resolvedPagesVirtualModuleId = '\0' + pagesVirtualModuleId;

export function vitePluginPages(options) {
  return {
    name: 'vite-plugin-swsr-pages',
    enforce: 'post',
    options(opts) {
      return {
        ...opts,
        input: [...(opts.input ?? []), pagesVirtualModuleId]
      }
    },
    resolveId(id) {
      if(id === pagesVirtualModuleId) {
        return resolvedPagesVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedPagesVirtualModuleId) {
        let importMap = "";
        let imports = [];
        let i = 0;

        for (const page of options.pages.values()) {
          if(options.networkOnly.includes(page.route.pathname)) continue;

          const variable = `_page${i}`;
          imports.push(`import * as ${variable} from '${page.moduleSpecifier}';`);
          importMap += `['${page.component}', ${variable}],`;
          i++;
        }

        i = 0;
        let rendererItems = "";

        for (const renderer of options.renderers) {
          const variable = `_renderer${i}`;
          imports.unshift(`import ${variable} from '${renderer.serverEntrypoint}';`);
          rendererItems += `Object.assign(${JSON.stringify(renderer)}, { ssr: ${variable} }),`;
          i++;
        }
        const def = `${imports.join("\n")}

export const pageMap = new Map([${importMap}]);
export const renderers = [${rendererItems}];`;
        return def;
      }
    }
  }
}
