import { getKieKey } from '@/lib/kieKey';

// Same-origin proxy for Kie's file upload host.
//
// Kie moved uploads off api.kie.ai onto redpandaai.co, which does not allow
// browser CORS. Proxying server-side also lets the key come from
// `KIE_API_KEY` in `.env.local` instead of localStorage.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const UPSTREAM = 'https://kieai.redpandaai.co/api/file-stream-upload';

export async function POST(request) {
  const key = getKieKey(request);
  if (!key) {
    return new Response(
      JSON.stringify({ error: 'No Kie API key. Add KIE_API_KEY to .env.local or enter a key in Settings.' }),
      { status: 401, headers: { 'content-type': 'application/json' } },
    );
  }

  const headers = new Headers({ Authorization: `Bearer ${key}` });
  const contentType = request.headers.get('content-type');
  if (contentType) headers.set('content-type', contentType);

  let upstream;
  try {
    upstream = await fetch(UPSTREAM, {
      method: 'POST',
      headers,
      body: await request.arrayBuffer(),
      cache: 'no-store',
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: `Kie upload unreachable: ${err.message}` }),
      { status: 502, headers: { 'content-type': 'application/json' } },
    );
  }

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      'content-type': upstream.headers.get('content-type') || 'application/json',
      'cache-control': 'no-store',
    },
  });
}
