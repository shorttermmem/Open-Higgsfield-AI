import { getFishKey } from '@/lib/fishKey';

// Tells the client whether a Fish Audio key is configured server-side, so the
// voice features can be enabled without storing a key in the browser.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request) {
  return new Response(
    JSON.stringify({ serverKey: Boolean(getFishKey(request)) }),
    { headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } },
  );
}
