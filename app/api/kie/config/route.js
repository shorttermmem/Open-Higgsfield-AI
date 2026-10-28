import { getKieKey } from '@/lib/kieKey';

// Tells the client whether a Kie key is configured server-side, so it can skip
// the "enter your API key" modal. Never returns the key itself.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request) {
  return new Response(
    JSON.stringify({ serverKey: Boolean(getKieKey(request)) }),
    { headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } },
  );
}
