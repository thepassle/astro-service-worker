import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

self.__maybeHandleStaticAssets = async (event) => await getAssetFromKV(event);

// @TODO
// self.MIDDLEWARE.push(async (event) => {
//   try {
//     const response = await getAssetFromKV(event);
//     return response;
//   } catch {}
// });