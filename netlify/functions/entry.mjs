import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { c as createMetadata, a as createAstro, b as createComponent, r as render, _ as _page0, d as _page1, e as _page2$1 } from './chunks/chunk.f8e87ab6.mjs';
import { d as deserializeManifest } from './chunks/chunk.b05aab4d.mjs';

const $$metadata = createMetadata("/src/pages/networkonly-astro.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
const $$Astro = createAstro("/src/pages/networkonly-astro.astro", "https://astro.build", "file:///Users/au87xu/astro-net/");
const $$NetworkonlyAstro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NetworkonlyAstro;
  return render`<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<title>Astro</title>
	<!--astro:head--></head>
	<body>
		<h1>I should be network only - and be excluded from the service worker bundle</h1>
	</body></html>`;
});

var _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	$$metadata: $$metadata,
	'default': $$NetworkonlyAstro
}, Symbol.toStringTag, { value: 'Module' }));

const pageMap = new Map([['src/pages/index.astro', _page0],['src/pages/networkonly-endpoint.js', _page1],['src/pages/networkonly-astro.astro', _page2],['src/pages/foo.js', _page2$1],]);
const renderers = [];

const _manifest = Object.assign(deserializeManifest({"routes":[{"file":"","links":["assets/asset.3211c58f.css"],"scripts":[],"routeData":{"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/"}},{"file":"","links":[],"scripts":[],"routeData":{"type":"endpoint","pattern":"^\\/networkonly-endpoint$","segments":[[{"content":"networkonly-endpoint","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/networkonly-endpoint.js","pathname":"/networkonly-endpoint"}},{"file":"","links":[],"scripts":[],"routeData":{"type":"endpoint","pattern":"^\\/foo$","segments":[[{"content":"foo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/foo.js","pathname":"/foo"}}],"markdown":{"mode":"mdx","drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[]},"pageMap":null,"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000astro-swsr-virtual-module-pages":"entry2.mjs","\u0000astro-swsr-virtual-module-sw":"entry3.mjs","astro:scripts/before-hydration.js":"data:text/javascript;charset=utf-8,//[no before-hydration script]"},"assets":["/favicon.ico"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler };
