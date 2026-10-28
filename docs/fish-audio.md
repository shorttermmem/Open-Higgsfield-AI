# Fish Audio voice integration

BYOK voice generation and cloning for the Lip Sync studio, using
[Fish Audio](https://fish.audio) directly instead of the legacy Kie-hosted
ElevenLabs TTS path in `netlify/functions/` (Netlify-only, not used by this app).

## How it works

```
Browser ──x-fish-key──▶ app/api/fish/[...path] ──Bearer──▶ api.fish.audio
   │                          (same-origin proxy)
   └─ generated mp3 ──▶ kie.uploadFile() ──▶ audio_url ──▶ lip-sync model
```

The key never leaves the browser except as a header on requests to this app's
proxy, which forwards it to Fish and streams the response back. There is no
server-side storage and no shared key.

## Routes proxied

| Path | Purpose |
|---|---|
| `POST /v1/tts` | text → audio (model sent in the `x-fish-model` header) |
| `GET /model?self=true` | list cloned voices owned by the account |
| `POST /model` | create a cloned voice (multipart, `train_mode=fast`) |
| `DELETE /model/{id}` | remove a cloned voice |
| `GET /wallet/self-usage` | credit check (not surfaced in the UI yet) |

Anything else returns 404 — the proxy is not a general Fish Audio passthrough.

## Kie file upload host

Kie moved uploads off its task API: `api.kie.ai/api/v1/file-stream-upload`
returns **404**. Uploads now go to `https://kieai.redpandaai.co/api/file-stream-upload`
and the URL comes back as `data.downloadUrl`. This matters for every studio, not
just voice — image, video and audio pickers all share `kie.js: uploadFile()`.

## Using it

1. `⚙ Settings` → paste a **Fish Audio API key** (optional; Kie.ai key still required).
2. Lip Sync → the **AI Voice** button appears next to the audio picker.
3. Pick a cloned voice or paste a voice model ID, type the line, choose a model
   (`s2.1-pro` default, `s2.1-pro-free` for the free tier) and speed.
4. **Generate voice** → the mp3 is uploaded to Kie → it becomes the lip-sync
   audio input. No separate download step.

Cloning: **+ Clone voice**, give it a name and a 10–30s clean speech clip
(WAV/MP3/FLAC). `train_mode=fast` makes it usable immediately; Fish runs ASR on
the clip when no transcript is supplied.

## Files

| File | Role |
|---|---|
| `app/api/fish/[...path]/route.js` | same-origin proxy + path allowlist |
| `packages/studio/src/fishaudio.js` | client: `synthesizeSpeech`, `listVoices`, `createVoice`, `deleteVoice` |
| `packages/studio/src/components/VoicePicker.jsx` | modal UI (voice list, clone form, script, model/speed) |
| `packages/studio/src/components/LipSyncStudio.jsx` | `fishKey` prop, AI Voice button, blob → `uploadFile()` bridge |
| `components/StandaloneShell.js` | `fish_key` in localStorage, Settings panel |

## Costs and limits

- Fish bills per character, and **API credit is a separate balance from the
  fish.audio platform credit** — an account with credits for the web app can
  still get `402` from the API. Top up at `fish.audio/app/developers`.
- `s2.1-pro-free` is the free developer tier and works with no API credit; it is
  the picker's default for that reason.
- Cloning consumes credits on creation.
- Generated audio is uploaded to Kie so lip-sync models receive a public URL —
  that means the voice clip transits two vendors.
- Fish enforces rate limits; `402` is surfaced with the top-up link in the
  message, `401` as a bad-key message.

## Not done

- Voice previews (Fish `samples[].audio`) are not played in the picker.
- The old `data/voices.json` (67 ElevenLabs presets) is untouched and still
  unused by this app.
- No server-side key, quotas, or per-user metering — matching the app's BYOK model.
