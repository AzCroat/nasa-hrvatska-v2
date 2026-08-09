/**
 * useTranslator — inline Croatian ↔ English translation state and handler.
 * Proxies through /api/translate (Cloudflare Worker) to avoid CSP issues.
 */
import { useState, useRef } from 'react';
import { apiFetch } from '../lib/apiFetch';
import { classifyAiLimit, BUDGET_PAUSE_EN } from '../lib/aiLimit';

export function useTranslator(): {
  tDir: string;
  setTDir: React.Dispatch<React.SetStateAction<string>>;
  tIn: string;
  setTIn: React.Dispatch<React.SetStateAction<string>>;
  tOut: string;
  setTOut: React.Dispatch<React.SetStateAction<string>>;
  tL: boolean;
  doTr: () => Promise<void>;
} {
  const [tDir, setTDir] = useState('en-hr'); // translation direction
  const [tIn, setTIn] = useState(''); // input text
  const [tOut, setTOut] = useState(''); // translated output
  const [tL, setTL] = useState(false); // loading flag
  const abortRef = useRef<AbortController | null>(null);

  async function doTr(): Promise<void> {
    const t = tIn.trim();
    if (!t) return;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setTL(true);
    setTOut('');
    const [from, to] = tDir === 'en-hr' ? ['en', 'hr'] : ['hr', 'en'];
    try {
      // apiFetch attaches the Firebase Bearer token — /api/translate requires it
      // (a raw fetch got 401 'unauthenticated' on every call).
      const r = await apiFetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: t, from, to }),
        signal: controller.signal,
      });
      const d = (await r.json()) as { translation?: string; error?: string };
      const limit = classifyAiLimit({ status: r.status, code: d.error });
      if (d.translation) {
        setTOut(d.translation);
      } else if (limit === 'budget') {
        setTOut(BUDGET_PAUSE_EN);
      } else if (limit === 'daily') {
        setTOut(
          'Daily translation limit reached. Try again tomorrow or visit translate.google.com',
        );
      } else if (limit === 'burst') {
        // The old check was `d.error === 'rate_limit'` — a code the server never
        // emits — so every 429, including the per-minute limiter, fell into the
        // daily-limit branch and told the user to come back tomorrow.
        setTOut('Too many translations at once — wait a minute and try again.');
      } else {
        setTOut('Translation unavailable. Try translate.google.com');
      }
    } catch (e) {
      const err = e as Error;
      if (err.name === 'AbortError') return;
      setTOut('Translation unavailable. Try translate.google.com');
    }
    setTL(false);
  }

  return { tDir, setTDir, tIn, setTIn, tOut, setTOut, tL, doTr };
}
