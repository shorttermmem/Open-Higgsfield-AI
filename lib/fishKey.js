import { getEnvFileValue } from './envFile';

// Resolve the Fish Audio key for a request.
//
// Order: browser key (`x-fish-key`, BYOK) → process env → `.env.local`.
export function getFishKey(request) {
  const header = request?.headers?.get('x-fish-key');
  if (header) return header.trim();

  return (process.env.FISH_API_KEY || '').trim() || getEnvFileValue('FISH_API_KEY');
}
