/**
 * pronunciationCurriculum — a structured, weakness-driven progression over the
 * eight hard Croatian phonemes, plus the plumbing that turns a real acoustic
 * pronunciation score into a tracked weakness (Content-Rec #8).
 *
 * The audit flagged pronunciation as the app's most fragmented skill: several
 * screens record a spoken attempt, but the acoustic score they compute is shown
 * once and then discarded — nothing feeds back into what the learner should
 * practise next. This module closes that loop:
 *
 *   speak  →  PronunciationScorer produces a 0-100 score (+ worst phoneme)
 *          →  logPronunciationWeakness() writes the weak sound to the unified
 *             learner-error ledger under the 'pronunciation' category
 *          →  getWeakPhonemes() ranks the sounds the learner struggles with
 *          →  the phoneme practice grid surfaces the weakest sound first, and
 *             CroatianErrorInsights shows it with a drill button.
 *
 * It ships NO machine-authored Croatian: the eight phonemes and their example
 * words already live in the reviewed PHONEME_GUIDES. The curriculum is just an
 * ordering + a mapping from acoustic scores onto those existing sounds, so the
 * engine-first content rule is preserved.
 */

import { logError, getTopErrors } from './learnerErrors';

/** The eight Croatian sounds that most distinguish native from learner speech,
 *  ordered roughly easiest → hardest to acquire. Keys match PHONEME_GUIDES and
 *  PHONEME_HINTS in pronunciationUtils.js. */
export const PRONUNCIATION_PHONEMES = ['š', 'ž', 'č', 'ć', 'nj', 'lj', 'đ', 'r'] as const;

export type PhonemeKey = (typeof PRONUNCIATION_PHONEMES)[number];

const PHONEME_SET = new Set<string>(PRONUNCIATION_PHONEMES);

// A score at or above this is "good enough" — no weakness is recorded. Matches
// the 70% "Good!" threshold used by scoreLabel/scoreColor in pronunciationUtils.
const PASS_SCORE = 70;

// IPA / SAPI-style labels Azure may return for each Croatian phoneme, mapped
// back onto our letter keys. Azure's phoneme labels are not guaranteed to be a
// Croatian letter, so we normalise both the raw IPA symbols and the letters.
const IPA_TO_KEY: Record<string, PhonemeKey> = {
  tʃ: 'č',
  tɕ: 'ć',
  ʃ: 'š',
  ʒ: 'ž',
  dʑ: 'đ',
  dʒ: 'đ',
  ʎ: 'lj',
  ɲ: 'nj',
  r: 'r',
  r̩: 'r',
};

/**
 * Resolve an arbitrary phoneme label (a Croatian letter, a digraph, or an IPA
 * symbol from Azure) onto one of the eight tracked phoneme keys. Returns null
 * when the label is not one of the sounds we track (e.g. a plain vowel).
 */
export function resolvePhonemeKey(raw: string | null | undefined): PhonemeKey | null {
  if (!raw) return null;
  const s = String(raw).trim();
  if (!s) return null;
  const lower = s.toLowerCase();
  if (PHONEME_SET.has(lower)) return lower as PhonemeKey;
  if (IPA_TO_KEY[s]) return IPA_TO_KEY[s];
  if (IPA_TO_KEY[lower]) return IPA_TO_KEY[lower];
  // Digraph embedded in a longer label (e.g. "lj_1") — check before single chars.
  if (lower.includes('lj')) return 'lj';
  if (lower.includes('nj')) return 'nj';
  for (const k of PRONUNCIATION_PHONEMES) {
    if (k.length === 1 && lower.includes(k)) return k;
  }
  return null;
}

/**
 * The tracked hard phonemes present in a Croatian string, excluding the trilled
 * 'r' (too common to be a meaningful weakness signal from mere presence — 'r'
 * is only recorded when Azure names it as the worst phoneme). Used as the
 * fallback weakness signal when no per-phoneme acoustic breakdown is available.
 */
export function phonemesInText(text: string | null | undefined): PhonemeKey[] {
  if (!text) return [];
  const lower = String(text).toLowerCase();
  const found: PhonemeKey[] = [];
  for (const k of PRONUNCIATION_PHONEMES) {
    if (k === 'r') continue; // presence of 'r' alone is not a weakness signal
    if (lower.includes(k) && !found.includes(k)) found.push(k);
  }
  return found;
}

// Namespaced pattern so an acoustic-weakness entry never collides with the
// heuristic pronunciation patterns (c_vs_c_confusion, dj_diacritics, …) that
// detectAndLogCroatianErrors writes. CroatianErrorInsights maps these back to a
// friendly label + a drill route.
export function weaknessPattern(key: PhonemeKey): string {
  return `phoneme_${key}`;
}

const PATTERN_PREFIX = 'phoneme_';

export interface PronunciationScoreEvent {
  /** The acoustic score (0-100) or null when the attempt was not acoustically scored. */
  score: number | null;
  /** Azure's single worst phoneme, when a per-phoneme breakdown was available. */
  worstPhoneme?: string | null;
  /** The Croatian text the learner was attempting — used for the fallback signal. */
  targetText?: string | null;
  /** Where the attempt happened (for the error ledger context). */
  source?: string;
}

/**
 * Turn a completed acoustic pronunciation attempt into a tracked weakness.
 * A no-op when the attempt was not scored (null) or scored at/above the pass
 * bar. Prefers Azure's worst phoneme; otherwise falls back to the hard phonemes
 * present in the target text. De-duped per call so one attempt never floods the
 * ledger. Returns the phoneme keys it recorded (for tests / callers).
 */
export function logPronunciationWeakness(ev: PronunciationScoreEvent): PhonemeKey[] {
  if (typeof ev.score !== 'number' || ev.score >= PASS_SCORE) return [];
  const keys = new Set<PhonemeKey>();
  const fromAzure = resolvePhonemeKey(ev.worstPhoneme);
  if (fromAzure) {
    keys.add(fromAzure);
  } else {
    for (const k of phonemesInText(ev.targetText)) keys.add(k);
  }
  const source = ev.source || 'pronunciation';
  for (const k of keys) {
    logError(weaknessPattern(k), 'pronunciation', { source, score: ev.score });
  }
  return [...keys];
}

/**
 * The tracked phonemes the learner struggles with, ranked most-weak first, read
 * from the unified error ledger. Only acoustic-weakness entries (phoneme_*) are
 * considered — the heuristic spelling patterns are surfaced separately.
 */
export function getWeakPhonemes(): PhonemeKey[] {
  const ranked: PhonemeKey[] = [];
  for (const e of getTopErrors(50, 'pronunciation')) {
    if (!e.pattern.startsWith(PATTERN_PREFIX)) continue;
    const key = e.pattern.slice(PATTERN_PREFIX.length);
    if (PHONEME_SET.has(key) && !ranked.includes(key as PhonemeKey)) {
      ranked.push(key as PhonemeKey);
    }
  }
  return ranked;
}

/**
 * Re-order a list of phoneme keys so the learner's measured-weak sounds come
 * first (in weakness order), with the remaining sounds keeping their original
 * relative order. Pure — safe to call on every render.
 */
export function orderByWeakness(keys: readonly string[]): string[] {
  const weak = getWeakPhonemes();
  const weakRank = new Map<string, number>();
  weak.forEach((k, i) => weakRank.set(k, i));
  return [...keys].sort((a, b) => {
    const ra = weakRank.has(a) ? weakRank.get(a)! : Infinity;
    const rb = weakRank.has(b) ? weakRank.get(b)! : Infinity;
    if (ra !== rb) return ra - rb;
    return keys.indexOf(a) - keys.indexOf(b);
  });
}

/**
 * The single weakest phoneme the learner has not yet mastered, or null when
 * there is no measured weakness among the un-mastered sounds. Drives the
 * "recommended next sound" hint.
 */
export function getNextWeakPhoneme(mastered: Iterable<string> = []): PhonemeKey | null {
  const masteredSet = new Set<string>([...mastered]);
  for (const k of getWeakPhonemes()) {
    if (!masteredSet.has(k)) return k;
  }
  return null;
}
