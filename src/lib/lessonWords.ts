// src/lib/lessonWords.ts
//
// A LESSON'S OWN WORDS GO INTO REVIEW (academic recommendation 3, owner go-ahead
// 2026-09-29). Measured before: the vocabulary deck was one global pool levelled by
// band, and nothing tied a lesson's target words to it — passing "Food and Drink"
// scheduled its grammar for re-checks and left its words to chance. In a classroom the
// week's words are the week's review.
//
// Each lesson may carry `vocab: [[hr, en, example], …]` (placed by lessonPractice.js).
// When the lesson's mastery check is PASSED, `enrolLessonVocab` records every row here
// and adds each headword to spaced repetition as a new card; the deck
// (`lib/vocabPool`) serves these rows like any tracked word, so Home's count and the
// Review screen agree by construction. A fail enrols nothing: those words are the
// lesson's, and the lesson is not learned yet.
//
// Synced additively (progressSnapshot + applyRemoteProgress + mergeLessonWords): a row
// known to either device stays known, and the EARLIER enrolment date wins, so a second
// device cannot make an old word look new.

import { addWordToSRS } from './srs';
import { localDateStr } from './dateUtils';

export const LESSON_WORDS_KEY = 'nh_lesson_words';

export interface LessonWord {
  hr: string;
  en: string;
  example: string;
  lessonId: string;
  at: string;
}

export type LessonWordsStore = Record<string, LessonWord>;

const key = (hr: string) => hr.trim().toLowerCase();

export function sanitizeLessonWords(v: unknown): LessonWordsStore {
  const out: LessonWordsStore = {};
  if (!v || typeof v !== 'object') return out;
  for (const [k, raw] of Object.entries(v as Record<string, unknown>)) {
    const w = raw as Partial<LessonWord> | null;
    if (
      w &&
      typeof w.hr === 'string' &&
      w.hr.trim() &&
      typeof w.en === 'string' &&
      typeof w.example === 'string' &&
      typeof w.lessonId === 'string' &&
      typeof w.at === 'string' &&
      key(w.hr) === k
    ) {
      out[k] = { hr: w.hr, en: w.en, example: w.example, lessonId: w.lessonId, at: w.at };
    }
  }
  return out;
}

export function readLessonWords(): LessonWordsStore {
  try {
    return sanitizeLessonWords(JSON.parse(localStorage.getItem(LESSON_WORDS_KEY) || '{}'));
  } catch {
    return {};
  }
}

function writeLessonWords(store: LessonWordsStore): void {
  try {
    localStorage.setItem(LESSON_WORDS_KEY, JSON.stringify(store));
  } catch {
    /* storage full or unavailable — the words simply are not enrolled */
  }
}

/** The store, or undefined when empty — so a fresh device never clobbers the server. */
export function lessonWordsOrUndef(): LessonWordsStore | undefined {
  const s = readLessonWords();
  return Object.keys(s).length ? s : undefined;
}

/** A passed lesson's rows. Idempotent: a word already enrolled keeps its first date. */
export function enrolLessonVocab(
  lessonId: string,
  vocab: unknown,
  at: string = localDateStr(),
): number {
  if (!lessonId || !Array.isArray(vocab)) return 0;
  const store = readLessonWords();
  let added = 0;
  for (const row of vocab) {
    if (!Array.isArray(row)) continue;
    const [hr, en, example] = row as unknown[];
    if (typeof hr !== 'string' || !hr.trim() || typeof en !== 'string') continue;
    const k = key(hr);
    if (!store[k]) {
      store[k] = {
        hr: hr.trim(),
        en,
        example: typeof example === 'string' ? example : '',
        lessonId,
        at,
      };
      added++;
    }
    addWordToSRS(store[k]!.hr);
  }
  if (added) writeLessonWords(store);
  return added;
}

/** The rows in the deck's own shape: [hr, en, example]. */
export function lessonWordRows(store: LessonWordsStore = readLessonWords()): string[][] {
  return Object.values(store).map((w) => [w.hr, w.en, w.example]);
}

/** Union of both devices; the EARLIER enrolment wins. */
export function mergeLessonWords(local: unknown, remote: unknown): LessonWordsStore {
  const l = sanitizeLessonWords(local);
  const r = sanitizeLessonWords(remote);
  const out: LessonWordsStore = { ...r, ...l };
  for (const k of Object.keys(r)) {
    if (l[k] && r[k]!.at < l[k]!.at) out[k] = r[k]!;
  }
  return out;
}

/** Apply a remote blob into local storage (the sync-down half). */
export function applyRemoteLessonWords(remote: unknown): void {
  const merged = mergeLessonWords(readLessonWords(), remote);
  if (Object.keys(merged).length) writeLessonWords(merged);
}
