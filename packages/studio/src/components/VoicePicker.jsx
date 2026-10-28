"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import {
    synthesizeSpeech,
    listVoices,
    createVoice,
    parseVoiceId,
    TTS_MODELS,
} from '../fishaudio.js';

// ---------------------------------------------------------------------------
// Fish Audio voice picker: pick a cloned voice, clone a new one, speak text.
// Returns the generated audio Blob via onAudio(blob, meta).
// ---------------------------------------------------------------------------
export default function VoicePicker({ fishKey, onClose, onAudio }) {
    const [voices, setVoices] = useState([]);
    const [voicesState, setVoicesState] = useState('idle'); // idle | loading | ready | error
    const [voicesError, setVoicesError] = useState('');

    const [selectedVoiceId, setSelectedVoiceId] = useState('');
    const [manualId, setManualId] = useState('');
    const [text, setText] = useState('');
    const [model, setModel] = useState(TTS_MODELS[0].id);
    const [speed, setSpeed] = useState(1);

    const [generating, setGenerating] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    const [showClone, setShowClone] = useState(false);
    const [cloneTitle, setCloneTitle] = useState('');
    const [cloneFile, setCloneFile] = useState(null);
    const [cloning, setCloning] = useState(false);
    const [cloneError, setCloneError] = useState('');
    const fileRef = useRef(null);

    const loadVoices = useCallback(async () => {
        if (!fishKey) return;
        setVoicesState('loading');
        setVoicesError('');
        try {
            const items = await listVoices(fishKey);
            setVoices(items);
            setVoicesState('ready');
            if (!selectedVoiceId && items.length) setSelectedVoiceId(items[0]._id);
        } catch (err) {
            setVoicesState('error');
            setVoicesError(err.message);
        }
    }, [fishKey, selectedVoiceId]);

    useEffect(() => { loadVoices(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [fishKey]);

    const referenceId = (parseVoiceId(manualId) || selectedVoiceId) || null;

    const handleGenerate = async () => {
        if (!text.trim()) { setError('Enter the words to speak.'); return; }
        setGenerating(true);
        setError('');
        try {
            const blob = await synthesizeSpeech(fishKey, {
                text,
                referenceId,
                model,
                speed: Number(speed),
            });
            const voiceName = voices.find((v) => v._id === referenceId)?.title || 'AI voice';
            // onAudio uploads to Kie; it throws if that fails.
            setUploading(true);
            await onAudio(blob, { voice: voiceName, text: text.trim(), model });
            onClose();
        } catch (err) {
            setError(err.message);
        } finally {
            setUploading(false);
            setGenerating(false);
        }
    };

    const handleClone = async () => {
        if (!cloneFile) { setCloneError('Choose a reference audio clip.'); return; }
        setCloning(true);
        setCloneError('');
        try {
            const created = await createVoice(fishKey, { title: cloneTitle, files: [cloneFile] });
            setShowClone(false);
            setCloneTitle('');
            setCloneFile(null);
            if (fileRef.current) fileRef.current.value = '';
            await loadVoices();
            if (created?._id) setSelectedVoiceId(created._id);
        } catch (err) {
            setCloneError(err.message);
        } finally {
            setCloning(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-[#111] border border-white/10 rounded-3xl p-5 md:p-6 max-h-[90vh] overflow-y-auto custom-scrollbar">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                    <div>
                        <h2 className="text-white font-black text-lg tracking-wide">AI Voice — Fish Audio</h2>
                        <p className="text-muted text-xs mt-1">
                            Clone a voice or pick one, write the line, and it drops straight into Lip Sync.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-white/40 hover:text-white transition-colors text-xl leading-none"
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>

                {/* Voice selection */}
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Voice</span>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={loadVoices}
                                className="text-[10px] font-bold text-secondary hover:text-white transition-colors"
                            >
                                ↻ Refresh
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowClone((v) => !v)}
                                className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                            >
                                + Clone voice
                            </button>
                        </div>
                    </div>

                    <select
                        value={selectedVoiceId}
                        onChange={(e) => setSelectedVoiceId(e.target.value)}
                        disabled={voicesState === 'loading'}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-primary/40"
                    >
                        <option value="">Default voice (no reference)</option>
                        {voices.map((v) => (
                            <option key={v._id} value={v._id}>
                                {v.title}{v.state && v.state !== 'trained' ? ` — ${v.state}` : ''}
                            </option>
                        ))}
                    </select>

                    {voicesState === 'error' && (
                        <p className="text-red-400 text-xs mt-2">{voicesError}</p>
                    )}
                    {voicesState === 'ready' && voices.length === 0 && (
                        <p className="text-muted text-xs mt-2">
                            No cloned voices yet — use <span className="text-primary">Clone voice</span> with 10–30s of clean speech.
                        </p>
                    )}

                    <input
                        value={manualId}
                        onChange={(e) => setManualId(e.target.value)}
                        placeholder="Paste a voice link (fish.audio/m/…) or model ID"
                        className="mt-2 w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-primary/40"
                    />
                    {manualId.trim() && (
                        <p className="text-[10px] text-muted mt-1">
                            Using voice ID <span className="text-white/70 font-mono">{parseVoiceId(manualId)}</span>
                        </p>
                    )}
                </div>

                {/* Clone form */}
                {showClone && (
                    <div className="mb-4 p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                        <span className="text-[10px] font-bold text-muted uppercase tracking-widest">New cloned voice</span>
                        <input
                            value={cloneTitle}
                            onChange={(e) => setCloneTitle(e.target.value)}
                            placeholder="Voice name (e.g. Narrator)"
                            className="mt-2 w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/40"
                        />
                        <div className="flex items-center gap-2 mt-2">
                            <input
                                ref={fileRef}
                                type="file"
                                accept="audio/*"
                                onChange={(e) => setCloneFile(e.target.files?.[0] || null)}
                                className="flex-1 text-xs text-secondary file:mr-3 file:px-3 file:py-1.5 file:rounded-lg file:border-0 file:bg-primary/10 file:text-primary file:text-xs file:font-bold hover:file:bg-primary/20"
                            />
                            <button
                                type="button"
                                onClick={handleClone}
                                disabled={cloning || !cloneTitle.trim() || !cloneFile}
                                className="px-4 py-2 rounded-xl bg-primary text-black text-xs font-black disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                {cloning ? 'Cloning…' : 'Create voice'}
                            </button>
                        </div>
                        <p className="text-[10px] text-muted mt-2">
                            WAV/MP3/FLAC, 10–30s of clean speech works best. Fast mode is ready immediately.
                        </p>
                        {cloneError && <p className="text-red-400 text-xs mt-1">{cloneError}</p>}
                    </div>
                )}

                {/* Script */}
                <div className="mb-3">
                    <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Line to speak</span>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        rows={4}
                        placeholder="Type what the character says…"
                        className="mt-2 w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/40 resize-none"
                    />
                </div>

                {/* Model + speed */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                    <label className="flex items-center gap-2 text-[10px] font-bold text-muted uppercase tracking-widest">
                        Model
                        <select
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            className="bg-black/40 border border-white/10 rounded-lg px-2 py-1.5 text-xs font-medium text-white normal-case tracking-normal focus:outline-none focus:border-primary/40"
                        >
                            {TTS_MODELS.map((m) => (
                                <option key={m.id} value={m.id}>
                                    {m.name}{m.note ? ` — ${m.note}` : ''}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className="flex items-center gap-2 text-[10px] font-bold text-muted uppercase tracking-widest">
                        Speed
                        <input
                            type="range"
                            min="0.5"
                            max="2"
                            step="0.05"
                            value={speed}
                            onChange={(e) => setSpeed(e.target.value)}
                            className="w-28 accent-[#d9ff00]"
                        />
                        <span className="text-white/70 font-mono text-xs normal-case">{Number(speed).toFixed(2)}×</span>
                    </label>
                </div>

                {error && <p className="text-red-400 text-xs mb-3">{error}</p>}

                <div className="flex items-center justify-end gap-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2.5 rounded-xl bg-white/5 text-white text-xs font-bold hover:bg-white/10 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleGenerate}
                        disabled={generating || !text.trim()}
                        className="px-5 py-2.5 rounded-xl bg-primary text-black text-xs font-black hover:scale-[1.02] active:scale-95 transition-transform disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {uploading ? 'Uploading…' : generating ? 'Generating…' : 'Generate voice ✨'}
                    </button>
                </div>
            </div>
        </div>
    );
}
