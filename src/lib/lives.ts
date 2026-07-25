// lives.ts — Challenge Mode hearts system
// 5 hearts per day. Lose 1 on wrong answer. Regen 1 per 4 hours.
// Hearts reset at midnight.

import { localDateStr } from './dateUtils';

const KEY = 'nh_hearts';

interface HeartsState {
  date: string;
  hearts: number;
  lastRegen: number;
}

function getState(): HeartsState | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as HeartsState;
  } catch {
    return null;
  }
}

function saveState(s: HeartsState): void {
  // MUST NOT throw. getHearts() calls this unconditionally on the first read of a
  // new day, and McGame calls getHearts() inside a useMemo — i.e. DURING RENDER.
  // An unguarded setItem therefore threw a QuotaExceededError out of render and
  // the ErrorBoundary replaced the entire quiz screen. In Safari Private Browsing
  // (or any full-quota profile) getItem also returns null, so the `!s` branch is
  // always taken and the crash happened on EVERY entry to a Hearts/Challenge quiz.
  // loseHeart() has the same exposure in the answer-click path.
  // Failing to persist is harmless: hearts simply fall back to the day's default.
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* storage unavailable or full — keep playing with in-memory values */
  }
}

function todayKey(): string {
  return localDateStr();
}

export function getHearts(): number {
  const s = getState();
  const today = todayKey();
  if (!s || s.date !== today) {
    const fresh: HeartsState = { date: today, hearts: 5, lastRegen: Date.now() };
    saveState(fresh);
    return fresh.hearts;
  }
  // Clamp hearts from localStorage to valid range [0,5] — guards against corrupted data.
  const safeHearts = Math.min(5, Math.max(0, s.hearts || 0));
  const hoursPassed = (Date.now() - (s.lastRegen || 0)) / 14400000;
  const regenCount = Math.floor(hoursPassed);
  if (regenCount > 0 && safeHearts < 5) {
    const newHearts = Math.min(5, safeHearts + regenCount);
    // Advance the regen clock by exactly the whole 4-hour blocks consumed, not to
    // "now", so the sub-4h remainder carries over toward the next heart instead of
    // being discarded (which would make regen slower than the advertised 1 / 4h).
    const nextRegen = (s.lastRegen || 0) + regenCount * 14400000;
    const updated: HeartsState = { ...s, hearts: newHearts, lastRegen: nextRegen };
    saveState(updated);
    return newHearts;
  }
  return safeHearts;
}

export function loseHeart(): number {
  const s = getState();
  const today = todayKey();
  // Clamp to [0,5] exactly as getHearts() does. Without it a corrupted stored
  // value (say 99) decremented to 98 and was returned straight to the caller —
  // McGame passes this into the reducer as the displayed heart count, so the two
  // functions disagreed and hearts looked unlosable until they fell below 5.
  const raw = s && s.date === today ? s.hearts : 5;
  const current = Math.min(5, Math.max(0, Number.isFinite(raw) ? Math.floor(raw) : 5));
  const newHearts = Math.max(0, current - 1);
  // Anchor the regen clock at the moment hearts first drop below full. While a
  // user sits at 5 hearts, getHearts() never advances lastRegen (its regen branch
  // requires hearts < 5), so it stays pinned at the day's first read. Without
  // re-anchoring on the 5→4 drop, a heart lost hours later would be instantly
  // refunded by the next getHearts() (which would see many hours of "elapsed"
  // regen time). A new day (or a loss while already below 5) also resets to now /
  // preserves the ongoing cycle respectively.
  const lastRegen = s && s.date === today && current < 5 ? s.lastRegen || Date.now() : Date.now();
  saveState({ date: today, hearts: newHearts, lastRegen });
  return newHearts;
}

export function hasHearts(): boolean {
  return getHearts() > 0;
}

export function getRegenTimeMs(): number {
  const s = getState();
  if (!s || s.hearts >= 5) return 0;
  const elapsed = Math.max(0, Date.now() - (s.lastRegen || 0));
  const rem = elapsed % 14400000;
  return rem === 0 ? 0 : 14400000 - rem;
}
