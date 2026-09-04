/**
 * vocabPool — the level-gated vocabulary deck (2026-09-04).
 *
 * THE FINDING THIS REPLACES
 * -------------------------
 * Every review, flashcard, quiz and match pool was built from `ALL_CATS`, a
 * 56-name list hardcoded in App.tsx with the comment "update if vocabulary.js
 * keys change". Nobody did. The server grew to 89 levelled categories plus 17
 * composed aliases, and the list never learned about 40 of them — the ENTIRE
 * B1 band among them — so 1,030 of the 2,357 core words could not be reached
 * by any drill. The three advanced tiers (V_B2 963, V_C1 900, V_C2 300) were
 * shipped to the client for a browse screen and never pooled at all. Measured
 * before writing this: a learner's vocabulary acquisition path ended at A2,
 * whatever their level.
 *
 * WHAT THIS IS
 * ------------
 * One pure derivation, gated on the learner's level, used by every deck:
 *
 *   - `vocabCategories`  — V categories whose V_LEVELS tag is at or below the
 *                          learner's level (browse lists, topic fallbacks)
 *   - `vocabPool`        — every word the learner may be SERVED: those
 *                          categories plus the advanced tiers at or below
 *                          their level, plus any word they are already
 *                          tracking in SRS whatever its band (a card you have
 *                          been reviewing never becomes unservable — the
 *                          demotion case). Deduped by lemma.
 *   - `acquisitionPool`  — the words a learner should MEET NEXT: their own
 *                          band, plus lower-band words already in SRS. This is
 *                          what random-sample surfaces (session flashcards,
 *                          quiz, match, speaking) draw from, so a C1 learner
 *                          is not handed a uniform sample of 4,300 words that
 *                          is 55% A1–B1.
 *
 * ORDERING IS THE ACQUISITION PATH. `vocabPool` places the learner's own band
 * FIRST, then lower bands descending. `getPrioritizedReviewQueue` tops a thin
 * review up with the first unseen words in pool order, so new words enter the
 * deck from the band the learner is working at — not from `greetings`, which
 * is what a category-order pool gave every learner at every level.
 *
 * The same inference the curriculum uses (`src/lib/curriculum.ts`): a band
 * strictly below the learner's level is treated as known unless SRS says they
 * are still working on it. Nothing is written; nothing claims a word was learnt.
 *
 * ABSENCE DEGRADES TO THE OLD BEHAVIOUR. A payload with no `V_LEVELS` (an old
 * cached blob, a fixture) yields every V category and no tiers — at least as
 * wide as the hardcoded list was. `cats` is an explicit override kept for test
 * fixtures that seed a single `basics` category; production never passes it.
 *
 * NEVER: import anything from src/data (this sits on the first-paint path via
 * App.tsx); rank a category by anything but V_LEVELS; drop a tracked word from
 * `vocabPool` because its band is above the learner.
 */
import { CEFR_ORDER, cefrRank, type CefrLevel } from './cefr';
import { getGenerationCefr } from './cefrCertification';
import { getSR } from './srs';

/** `[hr, en, example?]` — the row shape shared by V and the advanced tiers. */
export type VocabRow = string[];

/** The slice of the core content payload this module reads. */
export interface VocabSource {
  V?: Record<string, unknown> | null;
  V_LEVELS?: Record<string, string> | null;
  V_B2?: Record<string, unknown> | null;
  V_C1?: Record<string, unknown> | null;
  V_C2?: Record<string, unknown> | null;
}

export interface PoolOptions {
  /** Explicit category override (test fixtures). Bypasses gating and tiers. */
  cats?: string[] | null;
  /** SRS lemmas; defaults to the live map. Injectable for tests. */
  tracked?: Set<string>;
}

/** The level every vocabulary deck is gated on — one function so Home's count
 *  and Review's pool cannot disagree. Placement-aware, like the other vocab
 *  consumers (McGame, Flashcards) already are. */
export function vocabLevel(stats?: { xp?: number; lc?: number; gc?: number }): CefrLevel {
  return getGenerationCefr(stats);
}

const TIER_KEY: Partial<Record<CefrLevel, keyof VocabSource>> = {
  B2: 'V_B2',
  C1: 'V_C1',
  C2: 'V_C2',
};

function isRow(w: unknown): w is VocabRow {
  return Array.isArray(w) && typeof w[0] === 'string' && typeof w[1] === 'string' && !!w[0];
}

function rows(map: Record<string, unknown> | null | undefined, key: string): VocabRow[] {
  const v = map?.[key];
  return Array.isArray(v) ? (v as unknown[]).filter(isRow) : [];
}

function levelOf(src: VocabSource, cat: string): CefrLevel | null {
  const raw = src.V_LEVELS?.[cat];
  return raw && (CEFR_ORDER as readonly string[]).includes(raw) ? (raw as CefrLevel) : null;
}

/** Categories tagged exactly `band`, in V key order. */
function catsInBand(src: VocabSource, band: CefrLevel): string[] {
  return Object.keys(src.V ?? {}).filter((c) => levelOf(src, c) === band);
}

/** Every word in one band: its V categories plus its advanced tier, if any. */
function bandRows(src: VocabSource, band: CefrLevel): VocabRow[] {
  const out = catsInBand(src, band).flatMap((c) => rows(src.V as Record<string, unknown>, c));
  const tier = TIER_KEY[band];
  if (tier) {
    const t = src[tier] as Record<string, unknown> | null | undefined;
    for (const k of Object.keys(t ?? {})) out.push(...rows(t, k));
  }
  return out;
}

function dedupe(list: VocabRow[]): VocabRow[] {
  const seen = new Set<string>();
  const out: VocabRow[] = [];
  for (const w of list) {
    const k = w[0]!.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(w);
  }
  return out;
}

function trackedLemmas(opts?: PoolOptions): Set<string> {
  if (opts?.tracked) return opts.tracked;
  try {
    return new Set(Object.keys(getSR()));
  } catch {
    return new Set();
  }
}

/** Learner's band first, then every lower band descending. */
function bandsForAcquisition(level: CefrLevel): CefrLevel[] {
  return CEFR_ORDER.slice(0, cefrRank(level) + 1).reverse() as CefrLevel[];
}

/** The category tag, or null when the payload carries no tag for it. */
export function categoryLevel(src: VocabSource | null | undefined, cat: string): CefrLevel | null {
  return src ? levelOf(src, cat) : null;
}

/**
 * V categories the learner may be served, ascending by level then V key order.
 * No V_LEVELS in the payload → every category (the pre-derivation width).
 */
export function vocabCategories(
  src: VocabSource | null | undefined,
  level: CefrLevel,
  opts?: PoolOptions,
): string[] {
  if (opts?.cats) return opts.cats;
  if (!src?.V) return [];
  if (!src.V_LEVELS) return Object.keys(src.V);
  const out: string[] = [];
  for (const band of CEFR_ORDER.slice(0, cefrRank(level) + 1)) out.push(...catsInBand(src, band));
  return out;
}

/**
 * Every word the learner may be SERVED, own band first, lower bands
 * descending, then tracked words from bands above. Deduped by lemma.
 */
export function vocabPool(
  src: VocabSource | null | undefined,
  level: CefrLevel,
  opts?: PoolOptions,
): VocabRow[] {
  if (!src?.V) return [];
  if (opts?.cats) return opts.cats.flatMap((c) => rows(src.V as Record<string, unknown>, c));
  if (!src.V_LEVELS) {
    return dedupe(Object.keys(src.V).flatMap((c) => rows(src.V as Record<string, unknown>, c)));
  }
  const out = bandsForAcquisition(level).flatMap((b) => bandRows(src, b));
  const tracked = trackedLemmas(opts);
  if (tracked.size) {
    for (const band of CEFR_ORDER.slice(cefrRank(level) + 1)) {
      out.push(...bandRows(src, band).filter((w) => tracked.has(w[0]!)));
    }
  }
  return dedupe(out);
}

/** Lemmas of `vocabPool` — what Home counts servable reviews against. */
export function vocabPoolWords(
  src: VocabSource | null | undefined,
  level: CefrLevel,
  opts?: PoolOptions,
): Set<string> {
  return new Set(vocabPool(src, level, opts).map((w) => w[0]!));
}

/**
 * The words to MEET NEXT: the learner's own band plus anything they already
 * track from other bands. Falls back to the full pool when the band is empty
 * (a payload with no words at this level) so a launch never bails on a
 * classification gap.
 */
export function acquisitionPool(
  src: VocabSource | null | undefined,
  level: CefrLevel,
  opts?: PoolOptions,
): VocabRow[] {
  if (!src?.V || opts?.cats || !src.V_LEVELS) return vocabPool(src, level, opts);
  const own = bandRows(src, level);
  if (!own.length) return vocabPool(src, level, opts);
  const tracked = trackedLemmas(opts);
  const out = [...own];
  if (tracked.size) {
    for (const band of CEFR_ORDER) {
      if (band === level) continue;
      out.push(...bandRows(src, band).filter((w) => tracked.has(w[0]!)));
    }
  }
  return dedupe(out);
}
