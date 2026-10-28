import { getFishKey } from '@/lib/fishKey';

// Same-origin proxy for the Fish Audio API.
//
// The key can come from either the browser (`x-fish-key`, BYOK) or server-side
// (`FISH_API_KEY` in `.env.local`). Forwarding here avoids Fish's CORS policy
// and lets audio bytes stream straight back.
//
// Only the endpoints this app needs are proxied.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const UPSTREAM = 'https://api.fish.audio';

const ALLOWED = [
  /^v1\/tts$/,
  /^model$/,
  /^model\/[A-Za-z0-9_-]{1,64}$/,
  /^wallet\/self-usage$/,
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
    return json(404, { error: `Unsupported Fish Audio endpoint: ${sub}` });
  }

  const key = getFishKey(request);
  if (!key) return json(401, { error: 'Missing Fish Audio API key. Add FISH_API_KEY to .env.local or enter one in Settings.' });

  const url = new URL(request.url);
  const target = `${UPSTREAM}/${sub}${url.search}`;

  const headers = new Headers({ Authorization: `Bearer ${key}` });
  const contentType = request.headers.get('content-type');
  if (contentType) headers.set('content-type', contentType);
  const accept = request.headers.get('accept');
  if (accept) headers.set('accept', accept);
  // The TTS endpoint takes the model name in a header, not the body.
  const model = request.headers.get('x-fish-model');
  if (model) headers.set('model', model);

  const init = { method: request.method, headers, cache: 'no-store' };
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    init.body = await request.arrayBuffer();
  }

  let upstream;
  try {
    upstream = await fetch(target, init);
  } catch (err) {
    return json(502, { error: `Fish Audio unreachable: ${err.message}` });
  }

  // Pass audio (tts) and JSON (models) through unchanged.
  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      'content-type': upstream.headers.get('content-type') || 'application/octet-stream',
      'cache-control': 'no-store',
    },
  });
}

export const GET = proxy;
export const POST = proxy;
export const DELETE = proxy;
