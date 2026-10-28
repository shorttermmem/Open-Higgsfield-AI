import fs from 'node:fs';
import path from 'node:path';

// Read a single value from `.env.local` at request time.
//
// Next only loads env files once at boot, so reading the file here means
// editing `.env.local` takes effect without restarting the server.
export function getEnvFileValue(name) {
  try {
    const text = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf8');
    const match = text.match(new RegExp(`^[ \\t]*${name}[ \\t]*=[ \\t]*(.*)$`, 'm'));
    if (!match) return '';
    return match[1].trim().replace(/^["'](.*)["']$/, '$1').trim();
  } catch {
    // No .env.local — the browser may supply its own key instead.
    return '';
  }
}
