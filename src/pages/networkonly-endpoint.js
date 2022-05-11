// This is a nodejs built-in module, not available on the client/service worker
// import { builtinModules } from 'module';

export const get = () => new Response(JSON.stringify([]), {status: 200});