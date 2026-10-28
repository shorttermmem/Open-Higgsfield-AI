// Result URLs point at Kie's CDN, which 403s requests carrying a foreign
// Referer. `<video>` always sends one and ignores `referrerPolicy`, so remote
// media is routed through our own origin instead.
const REMOTE = /^https?:\/\//i;

export function mediaUrl(url) {
    if (!url || typeof url !== 'string') return url;
    if (!REMOTE.test(url)) return url; // blob:, data:, /relative
    return `/api/media?url=${encodeURIComponent(url)}`;
}
