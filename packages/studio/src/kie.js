import { findModelById } from './models.js';

// Requests go through our own origin (app/api/kie/*), which forwards to Kie and
// can supply the key from `.env.local`. File uploads live on a different host
// than the task API, so they get their own proxy.
const BASE_URL = '/api/kie';
const UPLOAD_BASE_URL = '/api/kie-upload';

// Sentinel used when the app is running on the server-side `.env.local` key.
export const SERVER_KEY = '__server__';

function usingServerKey(apiKey) {
    return !apiKey || apiKey === SERVER_KEY;
}

async function getHeaders(apiKey) {
    const headers = { 'Content-Type': 'application/json' };
    if (!usingServerKey(apiKey)) headers['x-kie-key'] = apiKey;
    return headers;
}

async function pollJobs(taskId, apiKey, maxAttempts = 900, interval = 2000) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        await new Promise(resolve => setTimeout(resolve, interval));

        let response;
        try {
            response = await fetch(`${BASE_URL}/api/v1/jobs/recordInfo?taskId=${encodeURIComponent(taskId)}`, {
                headers: await getHeaders(apiKey)
            });
        } catch (error) {
            // Network hiccup: retry, but don't hide it forever.
            if (attempt === maxAttempts) throw error;
            continue;
        }

        if (!response.ok) {
            const errText = await response.text();
            // 5xx/429 are transient; everything else (401, 402, 404, 422)
            // must surface immediately instead of looking like a hang.
            if (response.status >= 500 || response.status === 429) {
                if (attempt === maxAttempts) {
                    throw new Error(`Poll Failed: ${response.status} - ${errText.slice(0, 200)}`);
                }
                continue;
            }
            throw new Error(`Poll Failed: ${response.status} - ${errText.slice(0, 200)}`);
        }

        const json = await response.json();
        if (json.code && json.code !== 200) {
            if (json.code === 429 || json.code >= 500) {
                if (attempt === maxAttempts) throw new Error(`KIE Poll Error ${json.code}: ${json.msg}`);
                continue;
            }
            throw new Error(`KIE Poll Error ${json.code}: ${json.msg || 'Unknown error'}`);
        }

        const data = json.data || {};
        const state = (data.state || '').toLowerCase();
        if (state === 'success') return data;
        if (state === 'fail' || state === 'error') {
            throw new Error(`Generation failed: ${data.failMsg || 'Unknown error'}`);
        }
    }
    throw new Error('Generation timed out after polling.');
}

function extractResultUrl(data) {
    if (Array.isArray(data.resultUrls) && data.resultUrls.length) return data.resultUrls[0];
    if (data.response?.resultUrls?.length) return data.response.resultUrls[0];
    return null;
}

async function submitTask(apiKey, slug, input, onRequestId, maxAttempts = 60) {
    const response = await fetch(`${BASE_URL}/api/v1/jobs/createTask`, {
        method: 'POST',
        headers: await getHeaders(apiKey),
        body: JSON.stringify({ model: slug, input })
    });
    if (!response.ok) {
        const errText = await response.text();
        throw new Error(`API Request Failed: ${response.status} ${response.statusText} - ${errText.slice(0, 200)}`);
    }
    const json = await response.json();
    if (json.code && json.code !== 200) {
        throw new Error(`KIE Error ${json.code}: ${json.msg || 'Unknown error'}`);
    }
    const taskId = json.data?.taskId;
    if (!taskId) return json;
    console.log('[Kie] task created', { model: slug, taskId });
    if (onRequestId) onRequestId(taskId);
    const result = await pollJobs(taskId, apiKey, maxAttempts);
    const outputUrl = extractResultUrl(result) || result.url;
    return { ...result, url: outputUrl };
}

// Every selectable model carries the exact Kie slug that will be submitted.
// Resolving from the registry (instead of guessing from the id) keeps the
// picker label and the model that actually runs in sync.
function requireModel(params) {
    const model = findModelById(params.model);
    if (!model?.slug) {
        throw new Error(`Unsupported model: ${params.model || '(none)'}`);
    }
    return model;
}

function buildInput(model, params) {
    const input = { ...(model.defaults || {}) };
    const set = (field, value) => {
        if (field && value !== undefined && value !== null && value !== '') input[field] = value;
    };

    if (model.inputs?.prompt) set('prompt', params.prompt);
    if (model.inputs?.aspect_ratio) set('aspect_ratio', params.aspect_ratio);
    if (model.inputs?.duration) set('duration', params.duration);
    if (model.inputs?.mode) set('mode', params.mode);
    if (model.inputs?.quality) set('quality', params.quality);

    if (model.inputs?.resolution) {
        const value = params.resolution ?? params.quality;
        if (model.slug === 'omnihuman-1-5') {
            set('output_resolution', value === undefined ? undefined : String(value).replace(/p$/i, ''));
        } else {
            set(model.resolutionField || 'resolution', value);
        }
    }

    const images = params.images_list?.length
        ? params.images_list
        : (params.image_url ? [params.image_url] : []);
    if (images.length && model.imageField) {
        input[model.imageField] = model.imageFieldType === 'array' ? images : images[0];
    }
    if (params.video_url && model.videoField) {
        input[model.videoField] = model.videoFieldType === 'array' ? [params.video_url] : params.video_url;
    }
    if (params.audio_url && model.audioField) {
        input[model.audioField] = model.audioFieldType === 'array' ? [params.audio_url] : params.audio_url;
    }
    if (params.seed !== undefined && model.hasSeed) set('seed', params.seed);

    return input;
}

export async function generateImage(apiKey, params) {
    const model = requireModel(params);
    return submitTask(apiKey, model.slug, buildInput(model, params), params.onRequestId, 60);
}

export async function generateI2I(apiKey, params) {
    const model = requireModel(params);
    return submitTask(apiKey, model.slug, buildInput(model, params), params.onRequestId, 60);
}

const VEO_LEGACY_SLUGS = new Set(['veo3', 'veo3_fast']);

export async function generateVideo(apiKey, params) {
    const model = requireModel(params);
    if (VEO_LEGACY_SLUGS.has(model.slug)) {
        return generateVeo(apiKey, params, { family: 'veo', model: model.slug });
    }
    return submitTask(apiKey, model.slug, buildInput(model, params), params.onRequestId, 900);
}

export async function generateI2V(apiKey, params) {
    const model = requireModel(params);
    if (VEO_LEGACY_SLUGS.has(model.slug)) {
        return generateVeo(apiKey, params, { family: 'veo', model: model.slug });
    }
    return submitTask(apiKey, model.slug, buildInput(model, params), params.onRequestId, 900);
}

async function generateVeo(apiKey, params, settings) {
    const isI2v = !!params.image_url;
    const body = {
        prompt: params.prompt,
        model: settings.model,
        generationType: isI2v ? 'FIRST_AND_LAST_FRAMES_2_VIDEO' : 'TEXT_2_VIDEO',
        aspect_ratio: params.aspect_ratio || '16:9',
        resolution: params.resolution || '720p',
        enableFallback: false
    };
    if (isI2v) body.imageUrls = [params.image_url];

    const response = await fetch(`${BASE_URL}/api/v1/veo/generate`, {
        method: 'POST',
        headers: await getHeaders(apiKey),
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        const errText = await response.text();
        throw new Error(`API Request Failed: ${response.status} ${response.statusText} - ${errText.slice(0, 200)}`);
    }
    const json = await response.json();
    if (json.code && json.code !== 200) throw new Error(`KIE Error ${json.code}: ${json.msg}`);

    const taskId = json.data?.taskId;
    if (!taskId) return json;
    if (params.onRequestId) params.onRequestId(`veo:${taskId}`);

    for (let attempt = 1; attempt <= 900; attempt++) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const record = await fetch(`${BASE_URL}/api/v1/veo/record-info?taskId=${encodeURIComponent(taskId)}`, {
            headers: await getHeaders(apiKey)
        });
        if (!record.ok) {
            if (record.status >= 500) continue;
            throw new Error(`Poll Failed: ${record.status}`);
        }
        const recordJson = await record.json();
        const data = recordJson.data || {};
        if (data.successFlag === 1) {
            const videoUrl = data.response?.resultUrls?.[0] || null;
            return { ...data, url: videoUrl };
        }
        if (data.successFlag === 2 || data.successFlag === 3) {
            throw new Error(`Generation failed: ${data.errorMessage || 'Unknown error'}`);
        }
    }
    throw new Error('Generation timed out after polling.');
}

export async function processLipSync(apiKey, params) {
    const model = requireModel(params);
    if (!params.audio_url) {
        throw new Error('LipSync requires an audio file.');
    }
    if (!params.image_url && !params.video_url) {
        throw new Error('LipSync requires a source image or video.');
    }
    // Some talking-avatar models require a prompt. OmniHuman's prompt is
    // optional and also steers body/hand motion, so don't invent one there.
    const input = buildInput(model, {
        ...params,
        prompt: params.prompt || (model.requiresPrompt ? 'The person is talking naturally.' : undefined),
    });
    return submitTask(apiKey, model.slug, input, params.onRequestId, 900);
}

export function uploadFile(apiKey, file, onProgress) {
    return new Promise((resolve, reject) => {
        // Kie moved file uploads off api.kie.ai onto its storage host; the
        // /api/v1/... path now returns 404. Response shape is
        // { success, code, msg, data: { downloadUrl, filePath, ... } }.
        const url = `${UPLOAD_BASE_URL}/api/file-stream-upload`;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('uploadPath', 'open-higgsfield');
        formData.append('fileName', file.name);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        if (!usingServerKey(apiKey)) xhr.setRequestHeader('x-kie-key', apiKey);

        if (onProgress) {
            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const percentComplete = Math.round((event.loaded / event.total) * 100);
                    onProgress(percentComplete);
                }
            };
        }

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const json = JSON.parse(xhr.responseText);
                    if (json.code && json.code !== 200) {
                        reject(new Error(`File upload failed: ${json.code} ${json.msg}`));
                        return;
                    }
                    const fileUrl = json.data?.downloadUrl || json.data?.fileUrl || json.data?.url || json.url;
                    if (!fileUrl) {
                        reject(new Error('No URL returned from file upload'));
                    } else {
                        resolve(fileUrl);
                    }
                } catch (e) {
                    reject(new Error('Failed to parse upload response'));
                }
            } else {
                reject(new Error(`File upload failed: ${xhr.status} - ${xhr.statusText}`));
            }
        };

        xhr.onerror = () => reject(new Error('Network error during file upload'));
        xhr.send(formData);
    });
}
