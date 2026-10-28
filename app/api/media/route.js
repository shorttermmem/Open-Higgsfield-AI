// Same-origin media proxy.
//
// Kie's result CDN (ByteDance/AIGC) returns 403 text/html when a request carries
// a foreign `Referer`. Chrome sends one for `<video src>` and the HTML response
// then trips Opaque Response Blocking (`net::ERR_BLOCKED_BY_ORB`), which shows
// up as `MEDIA_ELEMENT_ERROR: Format error` — a blank player.
//
// `<video>` does not support the `referrerPolicy` attribute, so the only fix is
// to fetch server-side (no Referer) and stream it back from our own origin.
// Range headers are forwarded so seeking still works.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Hosts our own API keys can produce results on.
const ALLOWED_HOSTS = [
  'aigc-cloud.com',
  'redpandaai.co',
  'kie.ai',
];

const PASS_THROUGH = [
  'content-type',
  'content-length',
  'content-range',
  'accept-ranges',
  'last-modified',
  'etag',
];

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}

function hostAllowed(hostname) {
  const host = hostname.toLowerCase();
  return ALLOWED_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));
}

export async function GET(request) {
  const target = request.nextUrl.searchParams.get('url');
  if (!target) return json(400, { error: 'Missing url parameter' });

  let parsed;
  try {
    parsed = new URL(target);
  } catch {
    return json(400, { error: 'Invalid url' });
  }

  if (parsed.protocol !== 'https:') return json(400, { error: 'Only https URLs are proxied' });
  if (!hostAllowed(parsed.hostname)) return json(403, { error: `Host not allowed: ${parsed.hostname}` });

  const range = request.headers.get('range');
  const init = { referrerPolicy: 'no-referrer', cache: 'no-store' };
  if (range) init.headers = { range };

  let upstream;
  try {
    upstream = await fetch(parsed.toString(), init);
  } catch (err) {
    return json(502, { error: `Upstream unreachable: ${err.message}` });
  }

  const headers = new Headers();
  for (const name of PASS_THROUGH) {
    const value = upstream.headers.get(name);
    if (value) headers.set(name, value);
  }
  headers.set('cache-control', 'public, max-age=3600');
  headers.set('x-media-proxy', '1');

  return new Response(upstream.body, { status: upstream.status, headers });
}
