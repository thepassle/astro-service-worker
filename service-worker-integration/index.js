import fs from 'fs';
import path from 'path';
import { build } from "esbuild";

function getAdapter({networkOnly = []} = {}) {
  return {
    name: "@astrojs/node",
    serverEntrypoint: "@astrojs/node/server.js",
    exports: ["handler"],
    args: {
      networkOnly
    }
  };
}
function createIntegration(options) {
  let cfg;
  return {
    name: "@astrojs/node",
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
      "astro:build:done": async ({dir}) => {
        const entry = fs.readFileSync(path.join(cfg.outDir.pathname, cfg.swEntryFile), 'utf-8');
        const swPath = path.join(cfg.outDir.pathname, 'sw.js');

        const result = await build({
          entryPoints: [path.join(cfg.outDir.pathname, cfg.swEntryFile)],
          outfile: swPath,
          platform: 'browser',
          bundle: true,
        });
        const sw = fs.readFileSync(swPath, 'utf-8');
        fs.writeFileSync(swPath, `
self.process = {env: {}, argv: []}; self.global = globalThis;
${sw}`);
      }
    }
  };
}
export {
  createIntegration as default,
  getAdapter
};
