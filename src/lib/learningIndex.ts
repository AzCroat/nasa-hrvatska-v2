/**
 * learningIndex — the derivation behind the Learning Center's lookup.
 *
 * THE GAP THIS CLOSES (2026-09-16). The app schedules superbly and looks up
 * nothing. Every teaching asset reaches a learner only when the scheduler hands
 * it over: the spine picks today's lesson, the session builder picks the drills,
 * the retention ladder picks the re-check. A learner who wants the genitive
 * RIGHT NOW, because they just got it wrong in conversation, had three doors and
 * all three were hand-listed:
 *
 *   * `BrowseContentModal` — 1,291 lines of hardcoded tiles → 26 of 180 lessons
 *   * `buildSearchIndex`   — vocabulary plus 52 hand-listed screens → 0 of 180
 *   * `GrammarReference`   — 5 hand-written topics, linking to nothing at all
 *
 * So searching "padeži" returned one small A2 screen, while the seven case
 * lessons, the fourteen case drills and the declension engine — all finished,
 * all shipped — were unreachable by lookup. That is the same decay this codebase
 * already recorded for the vocabulary deck, where a hardcoded 56-name list left
 * 1,030 of 2,357 core words unservable: a hand-listed door rots at exactly the
 * rate the content behind it grows, and silently, because a list cannot report
 * what it fails to mention.
 *
 * THE RULE, THEREFORE: this index is DERIVED and never hand-listed. Lessons come
 * from the curriculum spine, screens from the session pool. Authoring a lesson or
 * a drill puts it in the Learning Center the same day, with no second place to
 * remember — and `learningIndex.test.ts` fails the build if either catalogue
 * grows an entry this derivation cannot see.
 *
 * TWO CONTRACTS THIS MODULE HOLDS:
 *
 *   1. EVERY ENTRY IS OPENABLE. An index row names a target the app can actually
 *      open today — a lesson id for `launchAnimLesson` (ungated, opens any of the
 *      180 by id) or a screen key the router renders. An entry pointing at
 *      nothing is the dead-route defect this file exists to end, so content whose
 *      route does not exist yet stays OUT of the index until its route lands.
 *
 *   2. LOOKUP IS NOT CREDIT. Nothing here awards, completes or records. This
 *      module imports no stats, no award path and no storage — it is a pure
 *      function over two catalogues. Finding a lesson must never be worth what
 *      finishing one is worth.
 *
 * FIRST PAINT: no runtime imports, by construction — only `import type`. Vite's
 * `manualChunks` maps every `src/data/*` module into `chunk-data`, so a single
 * eager data import here would re-couple the content library to the startup
 * graph (see firstPaintGraph.test.ts). Callers inject the catalogues instead.
 */

/**
 * What a row in the index IS.
 *
 * `reference` is a pool browse-list screen (no graded finish); `concept` is one
 * of the case concept cards; `tool` is a reference instrument like the live
 * declension table. Note that `kind` says what a row IS and `target.kind` says
 * HOW to open it — a `reference` row opens as a `screen`, a `concept` row opens
 * on the reference desk. Different questions, deliberately separate fields.
 */
export type LearningEntryKind = 'lesson' | 'drill' | 'reference' | 'concept' | 'tool';

/**
 * How to open a row. Both arms are wired in the app today — that is the whole
 * admission criterion. Adding a third arm means wiring its route in the same
 * change, never before.
 */
export type LearningTarget =
  | { kind: 'lesson'; lessonId: string }
  | { kind: 'screen'; screen: string }
  | { kind: 'reference'; refId: string };

export interface LearningEntry {
  /** Unique across the index. `${target kind}:${id}`. */
  key: string;
  kind: LearningEntryKind;
  title: string;
  subtitle?: string;
  /** CEFR level, when the catalogue states one. */
  level?: string;
  /** Spine order, lessons only — the syllabus browser sorts on it. */
  order?: number;
  /** Skill category, screens only. */
  category?: string;
  /** Display icon, when the catalogue carries one. */
  icon?: string;
  /** Extra words this row should match on but does not display. */
  keywords: string[];
  target: LearningTarget;
  /** Folded text the search matches against. Built once, here. */
  text: string;
}

/** Structural shape of a curriculum spine entry. Kept structural so this module imports nothing. */
export interface LessonSource {
  id: string;
  level?: string;
  order?: number;
  title?: string;
  subtitle?: string;
  icon?: string;
  objectives?: readonly string[];
}

/** Structural shape of a session-pool entry. */
export interface ScreenSource {
  id: string;
  label: string;
  screen: string;
  cefr?: string;
  category?: string;
  reference?: boolean;
}

/**
 * A reference-desk panel: a case concept card, or an instrument like the live
 * declension table.
 *
 * These were held OUT of the index in phase 1 under its own rule — content whose
 * route does not exist yet stays out until the route lands — because the desk did
 * not exist and a row that opens nothing is the dead-route defect this index was
 * built to avoid. The desk exists now, so they go in.
 */
export interface ReferenceSource {
  id: string;
  kind: 'concept' | 'tool';
  title: string;
  subtitle?: string;
  icon?: string;
  /** Extra terms this panel should answer to (a case's Croatian name, say). */
  keywords?: readonly string[];
}

export interface LearningIndexSources {
  lessons?: readonly LessonSource[];
  screens?: readonly ScreenSource[];
  references?: readonly ReferenceSource[];
}

/**
 * Croatian ⇄ English grammatical terminology.
 *
 * THIS IS NOT THE HAND-LISTED THING THE HEADER FORBIDS, and the difference is
 * worth stating because it looks identical from a distance. A hand-listed
 * CONTENT list decays as content grows — that is what makes it a defect. This is
 * a THESAURUS over a closed set of linguistic facts: Croatian has seven cases and
 * has had them for as long as anyone has counted, and authoring a lesson adds no
 * entry here. It is applied at QUERY time (typing "padeži" also searches "case"),
 * so it never bakes a term onto a row and cannot go stale against the catalogues.
 *
 * It earns its place because the learner's own word for the thing is usually the
 * Croatian one — "padeži" is what the owner asked for by name — while every
 * lesson title, spine objective and drill label in the app is written in English.
 * Without it, the app's own subject matter is unsearchable in its own language.
 *
 * Terms are written WITHOUT diacritics because they are match keys, not prose —
 * but `expand()` folds every one before comparing, so adding the diacritics back
 * (`pade\u017e`, `rije\u010d`) changes nothing and cannot break the lookup. The Croatian
 * here is guarded by `learningIndex.test.ts` running the shared `findSerbism`
 * and `containsCyrillic` over it, NOT by the lint's TARGETS: these sit in a bare
 * nested array that `CRO_FIELD_RE` cannot match, so listing the file would be
 * the false-confidence trap CLAUDE.md records for `lessons.js` tables.
 */
export const GRAMMAR_SYNONYMS: ReadonlyArray<readonly string[]> = [
  ['padez', 'padezi', 'case', 'cases', 'declension'],
  ['nominativ', 'nominative'],
  ['genitiv', 'genitive'],
  ['dativ', 'dative'],
  ['akuzativ', 'accusative'],
  ['vokativ', 'vocative'],
  ['lokativ', 'locative'],
  ['instrumental', 'instrumentala'],
  ['glagol', 'glagoli', 'verb', 'verbs'],
  ['imenica', 'imenice', 'noun', 'nouns'],
  ['pridjev', 'pridjevi', 'adjective', 'adjectives'],
  ['zamjenica', 'zamjenice', 'pronoun', 'pronouns'],
  ['prijedlog', 'prijedlozi', 'preposition', 'prepositions'],
  ['broj', 'brojevi', 'number', 'numbers', 'numeral', 'numerals'],
  ['vrijeme', 'vremena', 'tense', 'tenses'],
  ['vid', 'aspect'],
  ['rod', 'gender'],
  ['mnozina', 'plural'],
  ['jednina', 'singular'],
  ['naglasak', 'accent', 'stress', 'pitch'],
  ['izgovor', 'pronunciation'],
  ['abeceda', 'alphabet'],
  ['rijec', 'rijeci', 'word', 'words', 'vocabulary'],
  ['recenica', 'recenice', 'sentence', 'syntax'],
  ['red rijeci', 'word order'],
  ['upitna', 'question', 'questions'],
  ['negacija', 'negation'],
  ['zapovjedni', 'imperative'],
  ['pogodbeni', 'conditional'],
  ['povratni', 'reflexive'],
  ['enklitika', 'enklitike', 'clitic', 'clitics'],
];

/**
 * Fold a string for matching: lowercase, Croatian diacritics removed.
 *
 * WHY AN EXPLICIT MAP AND NOT `normalize('NFD')`. NFD decomposes č ć š ž into a
 * base letter plus a combining mark, so stripping the marks appears to work —
 * and silently leaves `đ` untouched, because U+0111 is a letter with a stroke
 * and has no decomposition at all. Measured: `'čćđšž'` NFD-stripped is `'ccđsz'`.
 * A learner typing "dzepni" would never reach "džepni", and nothing would say so.
 * The half-working version passes every test written with č in it.
 */
export function foldCroatian(s: string): string {
  let out = '';
  for (const ch of s.toLowerCase()) {
    switch (ch) {
      case 'č':
      case 'ć':
        out += 'c';
        break;
      case 'đ':
        out += 'd';
        break;
      case 'š':
        out += 's';
        break;
      case 'ž':
        out += 'z';
        break;
      default:
        out += ch;
    }
  }
  return out;
}

/** Split an id or label into searchable words: `verb-government` → `verb government`. */
function words(s: string): string {
  return s.replace(/[-_]+/g, ' ');
}

function makeText(parts: ReadonlyArray<string | undefined>): string {
  return foldCroatian(parts.filter(Boolean).join(' ')).replace(/\s+/g, ' ').trim();
}

/**
 * Build the index from the app's own catalogues.
 *
 * Absent sources degrade to fewer rows, never to a throw: the spine is a cached
 * fetch and can legitimately be missing on a cold offline start, and a Learning
 * Centre that still lists every drill beats one that renders an error.
 */
export function buildLearningIndex(sources: LearningIndexSources): LearningEntry[] {
  const entries: LearningEntry[] = [];

  // Reference panels are built FIRST so that, on an equal score, "what IS the
  // genitive" sorts above a drill that merely practises it. A learner searching
  // a case name is usually asking the concept question.
  for (const r of sources.references ?? []) {
    if (!r || !r.id) continue;
    const keywords = [words(r.id), ...(r.keywords ?? [])];
    entries.push({
      key: `reference:${r.id}`,
      kind: r.kind,
      title: r.title,
      ...(r.subtitle ? { subtitle: r.subtitle } : {}),
      ...(r.icon ? { icon: r.icon } : {}),
      keywords,
      target: { kind: 'reference', refId: r.id },
      text: makeText([r.title, r.subtitle, ...keywords]),
    });
  }

  for (const l of sources.lessons ?? []) {
    if (!l || !l.id) continue;
    const title = l.title || words(l.id);
    const keywords = [words(l.id), ...(l.objectives ?? [])];
    entries.push({
      key: `lesson:${l.id}`,
      kind: 'lesson',
      title,
      ...(l.subtitle ? { subtitle: l.subtitle } : {}),
      ...(l.level ? { level: l.level } : {}),
      ...(typeof l.order === 'number' ? { order: l.order } : {}),
      ...(l.icon ? { icon: l.icon } : {}),
      keywords,
      target: { kind: 'lesson', lessonId: l.id },
      text: makeText([title, l.subtitle, ...keywords]),
    });
  }

  // Several pool entries can route to one screen (`cloze` serves past-tense and
  // conditional; `aspectdrill` serves all three aspect categories). One openable
  // thing is one row, so the duplicates MERGE: the first entry supplies the
  // title, the rest contribute their labels and categories as keywords, which
  // keeps every label searchable without listing the same screen twice.
  const byScreen = new Map<string, LearningEntry>();
  for (const s of sources.screens ?? []) {
    if (!s || !s.screen) continue;
    const existing = byScreen.get(s.screen);
    if (existing) {
      existing.keywords.push(s.label, ...(s.category ? [words(s.category)] : []));
      existing.text = makeText([existing.title, existing.subtitle, ...existing.keywords]);
      continue;
    }
    const keywords = [words(s.id), words(s.screen), ...(s.category ? [words(s.category)] : [])];
    const entry: LearningEntry = {
      key: `screen:${s.screen}`,
      kind: s.reference ? 'reference' : 'drill',
      title: s.label,
      ...(s.cefr ? { level: s.cefr } : {}),
      ...(s.category ? { category: s.category } : {}),
      keywords,
      target: { kind: 'screen', screen: s.screen },
      text: makeText([s.label, ...keywords]),
    };
    byScreen.set(s.screen, entry);
    entries.push(entry);
  }

  return entries;
}

const LEVEL_ORDER: Record<string, number> = { A1: 0, A2: 1, B1: 2, B2: 3, C1: 4, C2: 5 };

/**
 * Tie-break by what a row IS, before anything else.
 *
 * A learner typing a bare case name — "genitiv", "padeži" — is asking what the
 * thing IS, so the concept card must come before a drill that merely practises
 * it, and before the lesson that teaches it at length. Without this the order
 * fell out of the CEFR tie-break, and because a concept card carries no level it
 * sorted BELOW every levelled drill: searching "genitiv" put "Genitive Case"
 * (a drill) above the card explaining what the genitive is. Building the
 * reference rows first did not help, because the sort is not stable against a
 * differing tie-break key — measured, not assumed.
 */
const KIND_RANK: Record<LearningEntryKind, number> = {
  concept: 0,
  lesson: 1,
  tool: 2,
  drill: 3,
  reference: 4,
};

/** Expand a folded term with its thesaurus group, so "padezi" also searches "case". */
function expand(term: string): string[] {
  const out = [term];
  for (const group of GRAMMAR_SYNONYMS) {
    if (group.some((g) => foldCroatian(g) === term)) {
      for (const g of group) {
        const f = foldCroatian(g);
        if (!out.includes(f)) out.push(f);
      }
    }
  }
  return out;
}

/** Best score any of a term's synonyms achieves against one entry. 0 = no match. */
function scoreTerm(entry: LearningEntry, term: string): number {
  let best = 0;
  for (const t of expand(term)) {
    const title = foldCroatian(entry.title);
    let s = 0;
    if (title === t) s = 100;
    else if (title.startsWith(t)) s = 60;
    else if (new RegExp(`\\b${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(title)) s = 40;
    else if (title.includes(t)) s = 25;
    else if (entry.text.includes(t)) s = 10;
    if (s > best) best = s;
  }
  return best;
}

export interface LearningSearchOptions {
  /** Maximum rows returned. Default 25. */
  limit?: number;
  /** Restrict to one kind. */
  kind?: LearningEntryKind;
}

/**
 * Search the index. Every term must match (AND), so adding a word narrows —
 * which is what a learner expects and what makes "genitive plural" useful.
 * An empty query returns nothing rather than everything: the browse view is a
 * separate affordance and should not be something you reach by clearing a box.
 */
export function searchLearningIndex(
  index: readonly LearningEntry[],
  query: string,
  opts: LearningSearchOptions = {},
): LearningEntry[] {
  const terms = foldCroatian(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  const scored: Array<{ entry: LearningEntry; score: number }> = [];
  for (const entry of index) {
    if (opts.kind && entry.kind !== opts.kind) continue;
    let total = 0;
    let matchedAll = true;
    for (const term of terms) {
      const s = scoreTerm(entry, term);
      if (s === 0) {
        matchedAll = false;
        break;
      }
      total += s;
    }
    if (matchedAll) scored.push({ entry, score: total });
  }

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    const ka = KIND_RANK[a.entry.kind] ?? 9;
    const kb = KIND_RANK[b.entry.kind] ?? 9;
    if (ka !== kb) return ka - kb;
    const la = LEVEL_ORDER[a.entry.level ?? ''] ?? 99;
    const lb = LEVEL_ORDER[b.entry.level ?? ''] ?? 99;
    if (la !== lb) return la - lb;
    const oa = a.entry.order ?? 999;
    const ob = b.entry.order ?? 999;
    if (oa !== ob) return oa - ob;
    return a.entry.title.localeCompare(b.entry.title);
  });

  return scored.slice(0, opts.limit ?? 25).map((s) => s.entry);
}

/** The syllabus view: every lesson, level then spine order. Progress is the caller's business. */
export function lessonsByLevel(index: readonly LearningEntry[]): LearningEntry[] {
  return index
    .filter((e) => e.kind === 'lesson')
    .slice()
    .sort((a, b) => {
      const la = LEVEL_ORDER[a.level ?? ''] ?? 99;
      const lb = LEVEL_ORDER[b.level ?? ''] ?? 99;
      if (la !== lb) return la - lb;
      return (a.order ?? 999) - (b.order ?? 999);
    });
}
