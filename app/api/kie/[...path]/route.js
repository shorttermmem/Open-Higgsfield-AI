// Same-origin proxy for the Kie.ai task API.
//
// The Kie key can come from either:
//   * the browser, as `x-kie-key` (BYOK, same pattern as the Fish key), or
//   * the server, from `KIE_API_KEY` in `.env.local`.
//
// Keeping the server option means the key never has to be stored in
// localStorage, and it survives a browser/profile change. Only the endpoints
// this app actually uses are proxied.
import { getKieKey } from '@/lib/kieKey';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const UPSTREAM = 'https://api.kie.ai';

const ALLOWED = [
  /^api\/v1\/jobs\/createTask$/,
  /^api\/v1\/jobs\/recordInfo$/,
  /^api\/v1\/veo\/generate$/,
  /^api\/v1\/veo\/record-info$/,
];

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}

async function proxy(request, context) {
  const { path } = await context.params;
  const sub = (path || []).join('/');

  if (!ALLOWED.some((re) => re.test(sub))) {
    return json(404, { error: `Unsupported Kie endpoint: ${sub}` });
  }

  const key = getKieKey(request);
  if (!key) {
    return json(401, {
      error: 'No Kie API key. Add KIE_API_KEY to .env.local or enter a key in Settings.',
    });
  }

  const url = new URL(request.url);
  const headers = new Headers({ Authorization: `Bearer ${key}` });
  const contentType = request.headers.get('content-type');
  if (contentType) headers.set('content-type', contentType);

  const init = { method: request.method, headers, cache: 'no-store' };
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    init.body = await request.arrayBuffer();
  }

  let upstream;
  try {
    upstream = await fetch(`${UPSTREAM}/${sub}${url.search}`, init);
  } catch (err) {
    return json(502, { error: `Kie unreachable: ${err.message}` });
  }

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      'content-type': upstream.headers.get('content-type') || 'application/json',
      'cache-control': 'no-store',
    },
  });
}

export const GET = proxy;
export const POST = proxy;
