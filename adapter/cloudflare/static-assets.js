import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

self.MIDDLEWARE.push(async (event) => {
  try {
    const response = await getAssetFromKV(event);
    return response;
  } catch {}
});