/**
 * Copyright (C) 2017-present by Andrea Giammarchi - @WebReflection
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

const {replace} = '';
const ca = /[&<>'"]/g;

const esca = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;'
};
const pe = m => esca[m];

/**
 * Safely escape HTML entities such as `&`, `<`, `>`, `"`, and `'`.
 * @param {string} es the input to safely escape
 * @returns {string} the escaped input, and it **throws** an error if
 *  the input type is unexpected, except for boolean and numbers,
 *  converted as string.
 */
const escape = es => replace.call(es, ca, pe);

const escapeHTML = escape;
class HTMLString extends String {
}
const markHTMLString = (value) => {
  if (value instanceof HTMLString) {
    return value;
  }
  if (typeof value === "string") {
    return new HTMLString(value);
  }
  return value;
};

function serializeListValue(value) {
  const hash = {};
  push(value);
  return Object.keys(hash).join(" ");
  function push(item) {
    if (item && typeof item.forEach === "function")
      item.forEach(push);
    else if (item === Object(item))
      Object.keys(item).forEach((name) => {
        if (item[name])
          push(name);
      });
    else {
      item = item == null ? "" : String(item).trim();
      if (item) {
        item.split(/\s+/).forEach((name) => {
          hash[name] = true;
        });
      }
    }
  }
}
function hydrationSpecifier(hydrate) {
  return `astro/client/${hydrate}.js`;
}

Object.getOwnPropertyNames(Object.prototype).sort().join('\0');

class Metadata {
  constructor(filePathname, opts) {
    this.modules = opts.modules;
    this.hoisted = opts.hoisted;
    this.hydratedComponents = opts.hydratedComponents;
    this.clientOnlyComponents = opts.clientOnlyComponents;
    this.hydrationDirectives = opts.hydrationDirectives;
    this.mockURL = new URL(filePathname, "http://example.com");
    this.metadataCache = /* @__PURE__ */ new Map();
  }
  resolvePath(specifier) {
    return specifier.startsWith(".") ? new URL(specifier, this.mockURL).pathname : specifier;
  }
  getPath(Component) {
    const metadata = this.getComponentMetadata(Component);
    return (metadata == null ? void 0 : metadata.componentUrl) || null;
  }
  getExport(Component) {
    const metadata = this.getComponentMetadata(Component);
    return (metadata == null ? void 0 : metadata.componentExport) || null;
  }
  *hydratedComponentPaths() {
    const found = /* @__PURE__ */ new Set();
    for (const metadata of this.deepMetadata()) {
      for (const component of metadata.hydratedComponents) {
        const path = metadata.getPath(component);
        if (path && !found.has(path)) {
          found.add(path);
          yield path;
        }
      }
    }
  }
  *clientOnlyComponentPaths() {
    const found = /* @__PURE__ */ new Set();
    for (const metadata of this.deepMetadata()) {
      for (const component of metadata.clientOnlyComponents) {
        const path = metadata.resolvePath(component);
        if (path && !found.has(path)) {
          found.add(path);
          yield path;
        }
      }
    }
  }
  *hydrationDirectiveSpecifiers() {
    const found = /* @__PURE__ */ new Set();
    for (const metadata of this.deepMetadata()) {
      for (const directive of metadata.hydrationDirectives) {
        if (!found.has(directive)) {
          found.add(directive);
          yield hydrationSpecifier(directive);
        }
      }
    }
  }
  *hoistedScriptPaths() {
    for (const metadata of this.deepMetadata()) {
      let i = 0, pathname = metadata.mockURL.pathname;
      while (i < metadata.hoisted.length) {
        yield `${pathname}?astro&type=script&index=${i}`;
        i++;
      }
    }
  }
  *deepMetadata() {
    yield this;
    const seen = /* @__PURE__ */ new Set();
    for (const { module: mod } of this.modules) {
      if (typeof mod.$$metadata !== "undefined") {
        const md = mod.$$metadata;
        for (const childMetdata of md.deepMetadata()) {
          if (!seen.has(childMetdata)) {
            seen.add(childMetdata);
            yield childMetdata;
          }
        }
      }
    }
  }
  getComponentMetadata(Component) {
    if (this.metadataCache.has(Component)) {
      return this.metadataCache.get(Component);
    }
    const metadata = this.findComponentMetadata(Component);
    this.metadataCache.set(Component, metadata);
    return metadata;
  }
  findComponentMetadata(Component) {
    const isCustomElement = typeof Component === "string";
    for (const { module, specifier } of this.modules) {
      const id = this.resolvePath(specifier);
      for (const [key, value] of Object.entries(module)) {
        if (isCustomElement) {
          if (key === "tagName" && Component === value) {
            return {
              componentExport: key,
              componentUrl: id
            };
          }
        } else if (Component === value) {
          return {
            componentExport: key,
            componentUrl: id
          };
        }
      }
    }
    return null;
  }
}
function createMetadata(filePathname, options) {
  return new Metadata(filePathname, options);
}

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
const htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
const svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
async function _render(child) {
  child = await child;
  if (child instanceof HTMLString) {
    return child;
  } else if (Array.isArray(child)) {
    return markHTMLString((await Promise.all(child.map((value) => _render(value)))).join(""));
  } else if (typeof child === "function") {
    return _render(child());
  } else if (typeof child === "string") {
    return markHTMLString(escapeHTML(child));
  } else if (!child && child !== 0) ; else if (child instanceof AstroComponent || Object.prototype.toString.call(child) === "[object AstroComponent]") {
    return markHTMLString(await renderAstroComponent(child));
  } else {
    return child;
  }
}
class AstroComponent {
  constructor(htmlParts, expressions) {
    this.htmlParts = htmlParts;
    this.expressions = expressions;
  }
  get [Symbol.toStringTag]() {
    return "AstroComponent";
  }
  *[Symbol.iterator]() {
    const { htmlParts, expressions } = this;
    for (let i = 0; i < htmlParts.length; i++) {
      const html = htmlParts[i];
      const expression = expressions[i];
      yield markHTMLString(html);
      yield _render(expression);
    }
  }
}
function isAstroComponent(obj) {
  return typeof obj === "object" && Object.prototype.toString.call(obj) === "[object AstroComponent]";
}
async function render(htmlParts, ...expressions) {
  return new AstroComponent(htmlParts, expressions);
}
function createComponent(cb) {
  cb.isAstroComponentFactory = true;
  return cb;
}
async function renderSlot(_result, slotted, fallback) {
  if (slotted) {
    return await _render(slotted);
  }
  return fallback;
}
function createDeprecatedFetchContentFn() {
  return () => {
    throw new Error("Deprecated: Astro.fetchContent() has been replaced with Astro.glob().");
  };
}
function createAstroGlobFn() {
  const globHandler = (importMetaGlobResult, globValue) => {
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new Error(`Astro.glob(${JSON.stringify(globValue())}) - no matches found.`);
    }
    return Promise.all(allEntries.map((fn) => fn()));
  };
  return globHandler;
}
function createAstro(filePathname, _site, projectRootStr) {
  const site = new URL(_site);
  const url = new URL(filePathname, site);
  const projectRoot = new URL(projectRootStr);
  return {
    site,
    fetchContent: createDeprecatedFetchContentFn(),
    glob: createAstroGlobFn(),
    resolve(...segments) {
      let resolved = segments.reduce((u, segment) => new URL(segment, u), url).pathname;
      if (resolved.startsWith(projectRoot.pathname)) {
        resolved = "/" + resolved.slice(projectRoot.pathname.length);
      }
      return resolved;
    }
  };
}
const toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
const STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
      return markHTMLString(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    return markHTMLString(` ${key.slice(0, -5)}="${toAttributeString(serializeListValue(value))}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
    return markHTMLString(` ${key}`);
  } else {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
}
function spreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function defineStyleVars(selector, vars) {
  let output = "\n";
  for (const [key, value] of Object.entries(vars)) {
    output += `  --${key}: ${value};
`;
  }
  return markHTMLString(`${selector} {${output}}`);
}
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `let ${key} = ${JSON.stringify(value)};
`;
  }
  return markHTMLString(output);
}
function getHandlerFromModule(mod, method) {
  if (mod[method]) {
    return mod[method];
  }
  if (method === "delete" && mod["del"]) {
    return mod["del"];
  }
  if (mod["all"]) {
    return mod["all"];
  }
  return void 0;
}
async function renderEndpoint(mod, request, params) {
  var _a;
  const chosenMethod = (_a = request.method) == null ? void 0 : _a.toLowerCase();
  const handler = getHandlerFromModule(mod, chosenMethod);
  if (!handler || typeof handler !== "function") {
    throw new Error(`Endpoint handler not found! Expected an exported function for "${chosenMethod}"`);
  }
  return await handler.call(mod, params, request);
}
async function replaceHeadInjection(result, html) {
  let template = html;
  if (template.indexOf("<!--astro:head-->") > -1) {
    template = template.replace("<!--astro:head-->", await renderHead(result));
  }
  return template;
}
async function renderPage(result, componentFactory, props, children) {
  try {
    const response = await componentFactory(result, props, children);
    if (isAstroComponent(response)) {
      let template = await renderAstroComponent(response);
      const html = await replaceHeadInjection(result, template);
      return {
        type: "html",
        html
      };
    } else {
      return {
        type: "response",
        response
      };
    }
  } catch (err) {
    if (err instanceof Response) {
      return {
        type: "response",
        response: err
      };
    } else {
      throw err;
    }
  }
}
const uniqueElements = (item, index, all) => {
  const props = JSON.stringify(item.props);
  const children = item.children;
  return index === all.findIndex((i) => JSON.stringify(i.props) === props && i.children == children);
};
async function renderHead(result) {
  const styles = Array.from(result.styles).filter(uniqueElements).map((style) => renderElement("style", style));
  let needsHydrationStyles = false;
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script, i) => {
    if ("data-astro-component-hydration" in script.props) {
      needsHydrationStyles = true;
    }
    return renderElement("script", __spreadProps(__spreadValues({}, script), {
      props: __spreadProps(__spreadValues({}, script.props), { "astro-script": result._metadata.pathname + "/script-" + i })
    }));
  });
  if (needsHydrationStyles) {
    styles.push(renderElement("style", {
      props: {},
      children: "astro-root, astro-fragment { display: contents; }"
    }));
  }
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement("link", link, false));
  return markHTMLString(links.join("\n") + styles.join("\n") + scripts.join("\n") + "\n<!--astro:head:injected-->");
}
async function renderAstroComponent(component) {
  let template = [];
  for await (const value of component) {
    if (value || value === 0) {
      template.push(value);
    }
  }
  return markHTMLString(await _render(template));
}
function renderElement(name, { props: _props, children = "" }, shouldEscape = true) {
  const _a = _props, { lang: _, "data-astro-id": astroId, "define:vars": defineVars } = _a, props = __objRest(_a, ["lang", "data-astro-id", "define:vars"]);
  if (defineVars) {
    if (name === "style") {
      if (props["is:global"]) {
        children = defineStyleVars(`:root`, defineVars) + "\n" + children;
      } else {
        children = defineStyleVars(`.astro-${astroId}`, defineVars) + "\n" + children;
      }
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  return `<${name}${spreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}

var index_astro_astro_type_style_index_0_lang = '';

const $$metadata = createMetadata("/src/pages/index.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
const $$Astro = createAstro("/src/pages/index.astro", "https://astro.build", "file:///Users/au87xu/astro-net/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return render`<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<title>Astro</title>
		
	<!--astro:head--></head>
	<body>
		<h1>Astro</h1>
	</body></html>`;
});

var _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata,
  'default': $$Index
}, Symbol.toStringTag, { value: 'Module' }));

function get$1() {
  return new Response('Im network only', {status: 200});
}

var _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get: get$1
}, Symbol.toStringTag, { value: 'Module' }));

function get() {
	console.log('asdf');
}

var _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get: get
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, createAstro as a, createComponent as b, createMetadata as c, _page1 as d, _page2 as e, renderSlot as f, renderPage as g, renderHead as h, renderEndpoint as i, render as r };
