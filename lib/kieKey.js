import { getEnvFileValue } from './envFile';

// Resolve the Kie key for a request.
//
// Order: browser key (`x-kie-key`, BYOK) → process env → `.env.local`.
export function getKieKey(request) {
  const header = request?.headers?.get('x-kie-key');
  if (header) return header.trim();

  return (process.env.KIE_API_KEY || '').trim() || getEnvFileValue('KIE_API_KEY');
}
