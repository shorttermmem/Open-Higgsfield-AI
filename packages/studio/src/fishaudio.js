// Fish Audio client.
//
// All calls go through the same-origin proxy at /api/fish so the browser never
// hits api.fish.audio directly (CORS). The key may come from the browser
// (BYOK) or from `FISH_API_KEY` in `.env.local`.
// Reference: https://docs.fish.audio/api-reference

import { SERVER_KEY } from './kie';

const PROXY = '/api/fish';

export const TTS_MODELS = [
    { id: 's2.1-pro-free', name: 'S2.1 Pro Free', note: 'free developer tier' },
    { id: 's2.1-pro', name: 'S2.1 Pro', note: 'best quality (needs API credit)' },
    { id: 's2-pro', name: 'S2 Pro', note: 'needs API credit' },
    { id: 'drama-3', name: 'Drama 3', note: 'expressive dialogue (needs API credit)' },
    { id: 's1', name: 'S1', note: 'legacy' },
];

function authHeaders(apiKey, extra = {}) {
    // With the server-side key the proxy injects auth itself.
    if (!apiKey || apiKey === SERVER_KEY) return extra;
    return { 'x-fish-key': apiKey, ...extra };
}

async function readError(response) {
    let detail = '';
    try {
        const text = await response.text();
        try {
            const parsed = JSON.parse(text);
            detail = parsed.message || parsed.error || text;
        } catch {
            detail = text;
        }
    } catch {
        /* ignore */
    }
    // Fish keeps API credit separate from the platform (web app) balance, so a
    // paying account can still get 402 here. Point at the right place.
    if (response.status === 402) {
        return new Error(
            'Fish Audio has no API credit — it is a separate balance from your fish.audio account. '
            + 'Top up at fish.audio/app/developers, or switch the model to S2.1 Pro Free.'
        );
    }
    const hint = response.status === 401 ? ' (check your Fish Audio key)' : '';
    return new Error(`Fish Audio ${response.status}${hint}${detail ? `: ${String(detail).slice(0, 160)}` : ''}`);
}

/**
 * Text -> speech audio.
 * @returns {Promise<Blob>} mp3 bytes
 */
export async function synthesizeSpeech(apiKey, params) {
    const {
        text,
        referenceId = null,
        model = 's2.1-pro',
        format = 'mp3',
        speed = 1,
        temperature = 0.7,
        topP = 0.7,
        language = null,
    } = params || {};

    if (!text || !text.trim()) throw new Error('Text is required to generate speech.');

    const body = {
        text: text.trim(),
        format,
        temperature,
        top_p: topP,
        normalize: true,
        chunk_length: 300,
        prosody: { speed, volume: 0, normalize_loudness: true },
    };
    if (referenceId) body.reference_id = referenceId;
    if (language) body.language = language;

    const response = await fetch(`${PROXY}/v1/tts`, {
        method: 'POST',
        headers: authHeaders(apiKey, {
            'content-type': 'application/json',
            'x-fish-model': model,
        }),
        body: JSON.stringify(body),
    });

    if (!response.ok) throw await readError(response);
    const blob = await response.blob();
    if (!blob.size) throw new Error('Fish Audio returned empty audio.');
    return blob;
}

/**
 * List voice models owned by this Fish Audio account (cloned voices).
 */
export async function listVoices(apiKey, { pageSize = 50, pageNumber = 1 } = {}) {
    const qs = new URLSearchParams({
        self: 'true',
        page_size: String(pageSize),
        page_number: String(pageNumber),
        sort_by: 'created_at',
    });
    const response = await fetch(`${PROXY}/model?${qs}`, {
        method: 'GET',
        headers: authHeaders(apiKey),
    });
    if (!response.ok) throw await readError(response);
    const data = await response.json();
    return (data.items || []).filter((m) => m.type === 'tts');
}

/**
 * Clone a voice from reference audio. Fish wants >=10s of clean speech.
 */
export async function createVoice(apiKey, { title, description = '', files, texts = null }) {
    const list = Array.isArray(files) ? files : [files];
    if (!title || !title.trim()) throw new Error('Give the voice a name.');
    if (!list.length || !list[0]) throw new Error('Upload a reference audio clip.');

    const form = new FormData();
    form.append('type', 'tts');
    form.append('title', title.trim());
    form.append('train_mode', 'fast');
    form.append('visibility', 'private');
    if (description) form.append('description', description);
    list.forEach((file) => form.append('voices', file, file.name));
    if (texts && texts.length) texts.forEach((t) => form.append('texts', t));

    const response = await fetch(`${PROXY}/model`, {
        method: 'POST',
        headers: authHeaders(apiKey),
        body: form,
    });
    if (!response.ok) throw await readError(response);
    return response.json();
}

export async function deleteVoice(apiKey, id) {
    const response = await fetch(`${PROXY}/model/${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: authHeaders(apiKey),
    });
    if (!response.ok) throw await readError(response);
    return true;
}

/** Wrap generated audio bytes so kie.uploadFile() can ingest them. */
export function blobToAudioFile(blob, name = 'fish-voice.mp3') {
    return new File([blob], name, { type: blob.type || 'audio/mpeg' });
}

/**
 * Accepts a bare voice model ID or a shared link such as
 * https://fish.audio/m/44ae4e7bf7a44ac384e77412d7207a56
 */
export function parseVoiceId(value) {
    const raw = String(value || '').trim();
    if (!raw) return '';
    const fromUrl = raw.match(/\/m\/([A-Za-z0-9_-]+)/);
    if (fromUrl) return fromUrl[1];
    return raw;
}
