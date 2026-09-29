// src/components/croatia/bakaBooks.ts
// Bakino Ljeto as FOUR BOOKS OF FOUR LETTERS (owner decision, 2026-09-29:
// "we can't have 16 letters for the user to read through … broken down into 4
// different lessons of 4 … make sure we aren't overwhelming the user in any
// lesson").
//
// THE BOOKS ARE CHUNKS, NOT LISTS. `CHAPTERS` (bakaChapters.ts) is the one
// array of letters; a book is four consecutive entries of it, so the only
// authored part here is four names. A second list of chapter ids per book
// would be the hand-maintained-list decay this repo keeps rediscovering.
//
// PROGRESS KEYS ARE UNCHANGED. `nh_baka_done` (global 0-based chapter indices)
// and `nh_baka_ch` (global resume pointer) are read and written exactly as the
// one-screen version wrote them, so no learner loses a letter. Each book reads
// the same set and shows only its four. Neither key is synced — that was the
// precedent (nothing in progressSnapshot names them) and the book-bonus flag
// follows it.
//
// XP: 20 per letter (unchanged) and 25 per completed book (4 × 25 = 100, the
// old single end bonus, total unchanged). A learner already holding the legacy
// `nh_baka_done_bonus` flag was paid the 100 and is paid no book bonus.
//
// Scanned by scripts/lintCroatianText.mjs (in TARGETS; positive-controlled in
// an `hr` field before it was added).
import { lsGet, lsSet, ssGet } from '../../lib/safeStorage';

export const CHAPTERS_PER_BOOK = 4;
export const BOOK_COUNT = 4;
export const LETTER_XP = 20;
export const BOOK_BONUS_XP = 25;

/** Global 0-based indices of the letters the learner has marked complete (JSON array). */
export const DONE_KEY = 'nh_baka_done';
/** Global 0-based index of the letter to resume on. */
export const RESUME_KEY = 'nh_baka_ch';
/** The pre-split flag: the single 100 XP bonus for all sixteen letters. Read, never written. */
export const LEGACY_BONUS_KEY = 'nh_baka_done_bonus';
/** Book numbers (1–4) whose 25 XP bonus has been paid (JSON array). */
export const BOOK_BONUS_KEY = 'nh_baka_book_bonus';

/** The route key the daily-session pool serves; it resumes on the current book. */
export const RESUME_ROUTE = 'baka_summer';

export interface BakaBook {
  /** 1-based book number. */
  n: number;
  /** Route key in AppRouter / routeKeys / screenTabs. Book 1 keeps the historical key. */
  route: string;
  /** Croatian title, shown in the screen header. */
  hr: string;
  /** English subtitle, shown under the header. */
  en: string;
  /** The Priče door card. Titles are DISTINCT and none contains another (Playwright's
   *  substring `getByText("Baka's Summer")` must keep matching exactly one card). */
  doorTitle: string;
  doorSub: string;
}

export const BOOKS: readonly BakaBook[] = [
  {
    n: 1,
    route: 'baka_summer',
    hr: 'Ljeto počinje',
    en: 'Early summer by the sea — June and July',
    doorTitle: "Baka's Summer",
    doorSub: 'Letters 1–4 · Ljeto počinje',
  },
  {
    n: 2,
    route: 'baka_berba',
    hr: 'Fešta i berba',
    en: 'High summer and the harvest',
    doorTitle: "Baka's Harvest",
    doorSub: 'Letters 5–8 · Fešta i berba',
  },
  {
    n: 3,
    route: 'baka_zima',
    hr: 'Od bure do Božića',
    en: 'Autumn to New Year',
    doorTitle: "Baka's Winter",
    doorSub: 'Letters 9–12 · Od bure do Božića',
  },
  {
    n: 4,
    route: 'baka_pisma',
    hr: 'Pisma iz drugih krajeva',
    en: 'Letters from Slavonija, Zagorje, Baranja and Istra',
    doorTitle: 'Letters from Afar',
    doorSub: 'Letters 13–16 · Pisma iz drugih krajeva',
  },
];

export function bookMeta(n: number): BakaBook {
  return BOOKS[n - 1]!;
}

export function bookForRoute(route: string): number | null {
  const b = BOOKS.find((x) => x.route === route);
  return b ? b.n : null;
}

/** Global 0-based chapter range of book n, inclusive on both ends. */
export function chapterRange(n: number): { start: number; end: number } {
  const start = (n - 1) * CHAPTERS_PER_BOOK;
  return { start, end: start + CHAPTERS_PER_BOOK - 1 };
}

function readNumberSet(key: string): Set<number> {
  try {
    const arr = JSON.parse(lsGet(key) || '[]') as unknown;
    if (!Array.isArray(arr)) return new Set();
    return new Set(arr.filter((x): x is number => typeof x === 'number' && Number.isFinite(x)));
  } catch {
    return new Set();
  }
}

export function readChaptersDone(): Set<number> {
  return readNumberSet(DONE_KEY);
}

export function writeChaptersDone(done: Set<number>): void {
  lsSet(DONE_KEY, JSON.stringify([...done].sort((a, b) => a - b)));
}

export function bookComplete(n: number, done: Set<number>): boolean {
  const { start, end } = chapterRange(n);
  for (let i = start; i <= end; i++) if (!done.has(i)) return false;
  return true;
}

/** Book 1 is always open; book n opens when every letter of book n-1 is done. */
export function bookUnlocked(n: number, done: Set<number>): boolean {
  return n <= 1 || bookComplete(n - 1, done);
}

/** The reason a locked book cannot be opened yet, or null when it can. */
export function lockReason(n: number, done: Set<number>): string | null {
  if (bookUnlocked(n, done)) return null;
  return `Finish ${bookMeta(n - 1).doorTitle} first`;
}

/** The first book with an unread letter; the last book once everything is read. */
export function currentBook(done: Set<number>): number {
  for (let n = 1; n <= BOOK_COUNT; n++) if (!bookComplete(n, done)) return n;
  return BOOK_COUNT;
}

/**
 * Which book `baka_summer` opens when the router passes no `book` prop.
 *
 * The daily session (the P4 culture slot) launches `baka_summer` and must land
 * on the learner's CURRENT book — the session says "read Baka's letters", not
 * "re-read book one". The Priče door launches the SAME key for its book-1 card,
 * and there it must open book 1. The two are told apart the way
 * `launchedLevel` tells them apart: the session writes the screen it launched
 * into `nh_session_started` (sessionStorage) before navigating, and nothing
 * else does.
 */
export function resolveLaunchBook(done: Set<number>): number {
  let started: string | null = null;
  try {
    started = ssGet('nh_session_started');
  } catch {
    started = null;
  }
  return started === RESUME_ROUTE ? currentBook(done) : 1;
}

export function legacyBonusPaid(): boolean {
  return !!lsGet(LEGACY_BONUS_KEY);
}

export function readBookBonuses(): Set<number> {
  return readNumberSet(BOOK_BONUS_KEY);
}

/** True when book n's 25 XP must not be paid (again): paid already, or the old 100 was. */
export function bookBonusPaid(n: number, paid: Set<number> = readBookBonuses()): boolean {
  return legacyBonusPaid() || paid.has(n);
}

export function markBookBonusPaid(n: number): Set<number> {
  const paid = readBookBonuses();
  paid.add(n);
  lsSet(BOOK_BONUS_KEY, JSON.stringify([...paid].sort((a, b) => a - b)));
  return paid;
}

/**
 * For the Priče door: a locked book's card must say so — a lock glyph and the
 * previous book's name — never render as an ordinary card that opens onto a
 * lock notice. Null for anything that is not a Bakino Ljeto book or is open.
 */
export function bakaDoorLock(itemId: string): { reason: string } | null {
  const n = bookForRoute(itemId);
  if (n === null) return null;
  const reason = lockReason(n, readChaptersDone());
  return reason ? { reason } : null;
}
