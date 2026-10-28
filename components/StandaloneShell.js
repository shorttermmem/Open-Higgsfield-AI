'use client';

import { useState, useEffect, useCallback } from 'react';
import { ImageStudio, VideoStudio, LipSyncStudio, CinemaStudio, SERVER_KEY } from 'studio';
import ApiKeyModal from './ApiKeyModal';

const TABS = [
  { id: 'image',   label: 'Image Studio' },
  { id: 'video',   label: 'Video Studio' },
  { id: 'lipsync', label: 'Lip Sync' },
  { id: 'cinema',  label: 'Cinema Studio' },
];

const STORAGE_KEY = 'kie_key';
const FISH_KEY = 'fish_key';

export default function StandaloneShell() {
  const [apiKey, setApiKey] = useState(null);
  const [serverKey, setServerKey] = useState(null); // null = still checking
  const [fishKey, setFishKey] = useState(null);
  const [fishInput, setFishInput] = useState('');
  const [activeTab, setActiveTab] = useState('image');
  const [showSettings, setShowSettings] = useState(false);
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setApiKey(stored);
    const storedFish = localStorage.getItem(FISH_KEY);
    if (storedFish) setFishKey(storedFish);
    // The key may also live server-side (KIE_API_KEY in .env.local), in which
    // case the browser never sees it and we skip the key modal.
    fetch('/api/kie/config')
      .then((r) => r.json())
      .then((cfg) => setServerKey(Boolean(cfg?.serverKey)))
      .catch(() => setServerKey(false));

    // Same for Fish Audio (voice generation is optional).
    if (!storedFish) {
      fetch('/api/fish/config')
        .then((r) => r.json())
        .then((cfg) => { if (cfg?.serverKey) setFishKey(SERVER_KEY); })
        .catch(() => {});
    }
  }, []);

  const handleKeySave = useCallback((key) => {
    localStorage.setItem(STORAGE_KEY, key);
    setApiKey(key);
    setShowKeyModal(false);
  }, []);

  const handleKeyChange = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setApiKey(null);
    setShowKeyModal(true);
  }, []);

  const handleFishSave = useCallback(() => {
    const trimmed = fishInput.trim();
    if (!trimmed) return;
    localStorage.setItem(FISH_KEY, trimmed);
    setFishKey(trimmed);
    setFishInput('');
  }, [fishInput]);

  const handleFishClear = useCallback(() => {
    localStorage.removeItem(FISH_KEY);
    setFishKey(null);
    setFishInput('');
  }, []);

  if (!hasMounted || (serverKey === null && !apiKey)) return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div className="animate-spin text-[#d9ff00] text-3xl">◌</div>
    </div>
  );

  // Server-side key (.env.local) is used when the browser has none of its own.
  const usingServerKey = !apiKey && serverKey;
  const effectiveKey = apiKey || SERVER_KEY;

  if (showKeyModal || (!apiKey && !serverKey)) {
    return (
      <ApiKeyModal
        onSave={handleKeySave}
        onCancel={serverKey ? () => setShowKeyModal(false) : undefined}
      />
    );
  }

  return (
    <div className="h-screen bg-[#050505] flex flex-col overflow-hidden">
      {/* Header */}
      <header className="flex-shrink-0 flex items-center justify-between px-4 pt-4 pb-0 border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="text-white font-black text-lg tracking-wider uppercase">
            Open Higgsfield AI
          </span>
        </div>

        {/* Tabs */}
        <nav className="flex items-center gap-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#d9ff00] text-black'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Settings */}
        <button
          onClick={() => setShowSettings(true)}
          className="text-white/40 hover:text-white text-sm transition-colors"
        >
          ⚙ Settings
        </button>
      </header>

      {/* Studio Content */}
      <div className="flex-1">
        {activeTab === 'image'   && <ImageStudio   apiKey={effectiveKey} />}
        {activeTab === 'video'   && <VideoStudio   apiKey={effectiveKey} />}
        {activeTab === 'lipsync' && <LipSyncStudio apiKey={effectiveKey} fishKey={fishKey} />}
        {activeTab === 'cinema'  && <CinemaStudio  apiKey={effectiveKey} />}
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto custom-scrollbar">
            <h2 className="text-white font-bold text-xl mb-6">Settings</h2>

            {/* Kie.ai key */}
            <div className="mb-6">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Kie.ai API key</span>
              <p className="text-white/50 text-sm mb-3 mt-2">
                {usingServerKey ? (
                  <span className="text-white/80">Using <code className="text-[#d9ff00]">KIE_API_KEY</code> from <code>.env.local</code></span>
                ) : (
                  <span className="text-white/80 font-mono">{apiKey.slice(0, 8)}••••••••</span>
                )}
              </p>
              <button
                onClick={handleKeyChange}
                className="w-full py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 text-sm transition-colors"
              >
                Change Kie.ai key
              </button>
            </div>

            {/* Fish Audio key */}
            <div className="mb-6 pt-5 border-t border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Fish Audio API key</span>
                <span className={`text-[10px] font-bold ${fishKey ? 'text-[#d9ff00]' : 'text-white/30'}`}>
                  {fishKey ? 'ACTIVE' : 'OPTIONAL'}
                </span>
              </div>
              <p className="text-white/40 text-xs mb-3">
                Enables AI voice generation and cloning in Lip Sync. Stored locally, sent only to Fish Audio via this app.
                {' '}
                <a
                  href="https://fish.audio/app/api-keys/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#d9ff00] hover:underline whitespace-nowrap"
                >
                  Get a key ↗
                </a>
              </p>
              {fishKey === SERVER_KEY ? (
                <p className="text-white/50 text-sm">
                  Using <code className="text-[#d9ff00]">FISH_API_KEY</code> from <code>.env.local</code>
                </p>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="password"
                    value={fishInput}
                    onChange={(e) => setFishInput(e.target.value)}
                    placeholder={fishKey ? 'Paste a new key to replace' : 'Paste your Fish Audio key…'}
                    className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#d9ff00]/40"
                  />
                  <button
                    onClick={handleFishSave}
                    disabled={!fishInput.trim()}
                    className="px-4 py-2 rounded-lg bg-[#d9ff00] text-black text-sm font-black disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Save
                  </button>
                </div>
              )}
              {fishKey && fishKey !== SERVER_KEY && (
                <button
                  onClick={handleFishClear}
                  className="mt-2 text-xs text-red-400/80 hover:text-red-400 transition-colors"
                >
                  Remove Fish Audio key
                </button>
              )}
            </div>

            <button
              onClick={() => setShowSettings(false)}
              className="w-full py-2 rounded-lg bg-white/5 text-white hover:bg-white/10 text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
