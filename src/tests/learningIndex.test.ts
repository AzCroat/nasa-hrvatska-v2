/**
 * learningIndex.test.ts — the Learning Center's index is DERIVED, and every row
 * in it can be opened.
 *
 * WHAT THIS GUARDS, AND WHY THE EXISTING SUITES DO NOT.
 *
 * The three doors to content that existed before this index were all hand-listed,
 * and every one of them decayed silently: `BrowseContentModal` reached 26 of 180
 * lessons, `buildSearchIndex` reached 0 of 180 while being labelled "Search
 * lessons…", and `GrammarReference` held five hand-written topics that linked to
 * nothing. Nothing failed, because a list cannot report what it fails to mention
 * — the identical shape as the hardcoded 56-name vocabulary list that left 1,030
 * core words unservable.
 *
 * So the assertions below never restate a list of ids. They walk the app's own
 * catalogues — the curriculum spine and the three session pools — and require the
 * derivation to reach every entry in them. Authoring a lesson or a drill puts it
 * in the Learning Center with no second place to remember; authoring one the
 * derivation cannot see fails the build here, and the failure message names it.
 *
 * The other half is openability. An index that lists something unreachable is the
 * dead-route defect this codebase has now met four times (`idioms`,
 * `writing_guided`, `relpron`, the ten dead couplings), so every target is walked
 * to the REAL router or the REAL lesson bodies.
 *
 * WHAT THIS PHASE DELIBERATELY LEAVES OUT, stated so the next person does not
 * read the green run as wider than it is:
 *
 *   * THE SOURCE ASSEMBLY. Which catalogues feed the index is decided by the
 *     caller, and in this phase the only caller is this file. A production
 *     assembler — and a guard that it names every catalogue — lands with the UI.
 *   * 54 ROUTED SCREENS IN NO CATALOGUE AT ALL. Measured against the real
 *     router: about twenty are infrastructure (dashboard, profile, privacy) and
 *     correctly absent, but the rest are genuine teaching content that no pool
 *     lists — `grammar_track`, `readlist`, `slang`, `pitch_accent`, `scenes`,
 *     `conjlab` among them. They are missing from the Learning Center because
 *     they are missing from every catalogue the app keeps, which is a content-
 *     organisation gap and not an index one. Fixing it means pooling them, and
 *     that changes what the daily session can serve — a separate decision with
 *     its own measurement, not a tidy-up to fold in here.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { findSerbism } from '../../functions/api/_serbisms.js';
import { containsCyrillic } from '../../functions/api/_croatianGuard.js';
import {
  GRAMMAR_SYNONYMS,
  buildLearningIndex,
  searchLearningIndex,
  lessonsByLevel,
  foldCroatian,
  type LessonSource,
  type ScreenSource,
} from '../lib/learningIndex';

const { CURRICULUM } = await import('../../functions/api/content/_data/curriculum.js');
const { LESSONS } = await import('../../functions/api/content/_data/lessons.js');
const { CEFR_EXERCISE_POOL } = await import('../lib/sessionPools');
const { CROATIA_POOL } = await import('../lib/croatiaPool');
const { PRODUCTION_POOL } = await import('../hooks/useDailySession');

interface RawSpine {
  id: string;
  level: string;
  order: number;
  objectives?: string[];
}
interface RawLesson {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
}
interface RawPool {
  id: string;
  label: string;
  screen: string;
  cefr?: string;
  category?: string;
  reference?: boolean;
}

const spine = CURRICULUM as RawSpine[];
const bodies = LESSONS as RawLesson[];
const BODY_BY_ID = new Map(bodies.map((l) => [l.id, l]));

/**
 * The spine as the CLIENT receives it. The raw CURRICULUM constant carries no
 * display metadata — `/api/content/curriculum` joins each entry to its lesson
 * body for title/subtitle/icon "so it cannot disagree" — and the index is built
 * from what the client is served, so the test must build the same shape. This
 * joins the two real datasets; it restates neither.
 */
const servedSpine: LessonSource[] = spine
  .filter((e) => BODY_BY_ID.has(e.id))
  .map((e) => {
    const body = BODY_BY_ID.get(e.id)!;
    return {
      id: e.id,
      level: e.level,
      order: e.order,
      title: body.title,
      ...(body.subtitle ? { subtitle: body.subtitle } : {}),
      ...(body.icon ? { icon: body.icon } : {}),
      ...(e.objectives ? { objectives: e.objectives } : {}),
    };
  });

const allPools: ScreenSource[] = [
  ...(CEFR_EXERCISE_POOL as RawPool[]),
  ...(CROATIA_POOL as RawPool[]),
  ...(PRODUCTION_POOL as RawPool[]),
];

const index = buildLearningIndex({ lessons: servedSpine, screens: allPools });

/** Screens the REAL router renders. Derived from AppRouter, never listed here. */
const routedScreens = (() => {
  const src = readFileSync('src/components/AppRouter.tsx', 'utf8');
  const out = new Set<string>();
  for (const m of src.matchAll(/currentScreen === '([^']+)'/g)) out.add(m[1]!);
  return out;
})();

describe('the index is derived from the app’s own catalogues', () => {
  it('reaches EVERY lesson on the curriculum spine', () => {
    const indexed = new Set(
      index.filter((e) => e.target.kind === 'lesson').map((e) => e.target.lessonId),
    );
    const missing = servedSpine.map((l) => l.id).filter((id) => !indexed.has(id));
    expect(missing, `lessons absent from the Learning Center: ${missing.join(', ')}`).toEqual([]);
    // A floor, so a source that silently empties cannot pass by reaching "all zero".
    expect(indexed.size).toBe(servedSpine.length);
    expect(indexed.size).toBeGreaterThanOrEqual(180);
  });

  it('reaches EVERY screen in every session pool', () => {
    const indexed = new Set(
      index.filter((e) => e.target.kind === 'screen').map((e) => e.target.screen),
    );
    const missing = [...new Set(allPools.map((p) => p.screen))].filter((s) => !indexed.has(s));
    expect(
      missing,
      `pooled screens absent from the Learning Center: ${missing.join(', ')}`,
    ).toEqual([]);
    expect(indexed.size).toBeGreaterThanOrEqual(370);
  });

  it('tolerates all three pool SHAPES, which differ in their optional fields', () => {
    // WHAT THIS DOES AND DOES NOT PROVE. It is not a guard on the source
    // assembly — in this phase the assembly lives in this file's fixture, and a
    // test cannot meaningfully guard its own fixture. That guard arrives with
    // the production assembler in the next phase.
    //
    // What it does prove is real and was verified by mutation: the three
    // catalogues carry DIFFERENT optional fields (Croatia entries may omit
    // `cefr`, production entries add `micRequired`/`kind`, only the CEFR pool
    // sets `reference`), so a builder that quietly required any one of them
    // would drop a whole catalogue. Making `cefr` mandatory fails this.
    const screens = new Set(
      index.filter((e) => e.target.kind === 'screen').map((e) => e.target.screen),
    );
    expect(screens.has('cityofday')).toBe(true); // CROATIA_POOL
    expect(screens.has('writing_guided')).toBe(true); // PRODUCTION_POOL
    expect(screens.has('genitivedrill')).toBe(true); // CEFR_EXERCISE_POOL
  });

  it('merges pool entries that share one screen into one openable row', () => {
    // Load-bearing on real data, but only just: `dictation` is the single screen
    // carried by two pools today. The keyword half of the merge is therefore
    // driven synthetically as well, so it stays covered if that one case goes.
    const dictation = index.filter(
      (e) => e.target.kind === 'screen' && e.target.screen === 'dictation',
    );
    expect(dictation).toHaveLength(1);

    const merged = buildLearningIndex({
      screens: [
        { id: 'a', label: 'Sentence Cloze', screen: 'cloze', cefr: 'A2', category: 'past-tense' },
        { id: 'b', label: 'Conditional Gap', screen: 'cloze', cefr: 'B1', category: 'conditional' },
      ],
    });
    expect(merged).toHaveLength(1);
    // The second entry's label stays findable rather than being dropped.
    expect(searchLearningIndex(merged, 'conditional gap')).toHaveLength(1);
    expect(searchLearningIndex(merged, 'sentence cloze')).toHaveLength(1);
  });
});

describe('every row can actually be opened', () => {
  it('every lesson target has a body launchAnimLesson can find', () => {
    const bad = index
      .filter((e) => e.target.kind === 'lesson')
      .map((e) => (e.target as { lessonId: string }).lessonId)
      .filter((id) => !BODY_BY_ID.has(id));
    expect(bad, `lesson rows with no body: ${bad.join(', ')}`).toEqual([]);
  });

  it('every screen target is rendered by the REAL router', () => {
    const bad = index
      .filter((e) => e.target.kind === 'screen')
      .map((e) => (e.target as { screen: string }).screen)
      .filter((s) => !routedScreens.has(s));
    expect(bad, `screen rows the router cannot render: ${bad.join(', ')}`).toEqual([]);
    expect(routedScreens.size).toBeGreaterThan(100); // the derivation itself still works
  });

  it('keys are unique, so a row cannot be rendered twice', () => {
    const keys = index.map((e) => e.key);
    expect(new Set(keys).size).toBe(keys.length);
  });
});

describe('looking something up is not credit', () => {
  it('the module has no runtime imports at all', () => {
    // The whole module is pure by construction: stats, awards, storage and the
    // content library are all unreachable from here, so finding a lesson can
    // never be worth what finishing one is worth — and no `src/data` module can
    // ride this onto the first-paint graph (vite maps them all to chunk-data).
    const src = readFileSync('src/lib/learningIndex.ts', 'utf8');
    const runtimeImports = [...src.matchAll(/^import\s+(?!type\b)[^;]+;/gm)].map((m) => m[0]);
    expect(runtimeImports, `learningIndex must stay pure: ${runtimeImports.join(' | ')}`).toEqual(
      [],
    );
  });
});

describe('the lookup a learner actually performs', () => {
  const idsFor = (q: string): string[] =>
    searchLearningIndex(index, q, { limit: 40 }).map((e) =>
      e.target.kind === 'lesson' ? e.target.lessonId : e.target.screen,
    );

  it('finds the case material for "padeži" — the word the learner uses', () => {
    const hits = idsFor('padeži');
    // The owner's own example. Before this index it returned one A2 screen.
    expect(hits).toContain('cases');
    expect(hits).toContain('padezifull');
    expect(hits.length).toBeGreaterThan(5);
  });

  it('folds diacritics, so "padezi" and "padeži" are the same search', () => {
    expect(idsFor('padezi')).toEqual(idsFor('padeži'));
  });

  it('folds \u0111 in real content, not just in a unit test', () => {
    // `odredjenost` is labelled "Odre\u0111eni i neodre\u0111eni vid". A learner typing the
    // ASCII form must reach it. This is the assertion that makes foldCroatian's
    // explicit map load-bearing in SEARCH: under an NFD-only fold the label keeps
    // its \u0111, "odredeni" matches nothing, and only the isolated unit test notices.
    expect(idsFor('odredeni')).toContain('odredjenost');
    expect(idsFor('posudenice')).toContain('posudjenice');
  });

  it('finds the genitive LESSONS and the genitive DRILL together', () => {
    const hits = idsFor('genitive');
    expect(hits).toContain('genitive-intro'); // A1 lesson
    expect(hits).toContain('genitive-deep'); // B1 lesson
    expect(hits).toContain('genitivedrill'); // the drill
  });

  it('answers the Croatian case names, not only the English ones', () => {
    // A closed linguistic set, so this is a thesaurus rather than a content list:
    // authoring a lesson adds nothing here. Each must reach its own material.
    expect(idsFor('genitiv')).toContain('genitive-intro');
    expect(idsFor('akuzativ')).toContain('accusative-intro');
    expect(idsFor('lokativ')).toContain('locative-intro');
    expect(idsFor('vokativ')).toContain('vocative-intro');
    expect(idsFor('dativ')).toContain('dative-intro');
  });

  it('narrows as terms are added, rather than widening', () => {
    // A LENGTH COMPARISON CANNOT SEE THIS, and the first version of this test was
    // decorative for exactly that reason: switching the engine to OR made every
    // row score zero-but-included, so both queries returned the capped 100 and
    // `two.length <= one.length` held. Found by mutation. The assertions below
    // are the ones OR cannot satisfy — an unmatchable term must annihilate the
    // result, and every narrowed hit must still be a hit of the broader query.
    const one = searchLearningIndex(index, 'genitive', { limit: 500 });
    const two = searchLearningIndex(index, 'genitive plural', { limit: 500 });
    expect(two.length).toBeGreaterThan(0);
    expect(two.length).toBeLessThan(one.length);

    const oneKeys = new Set(one.map((e) => e.key));
    expect(two.every((e) => oneKeys.has(e.key))).toBe(true);

    expect(searchLearningIndex(index, 'genitive zzzqqnotaword', { limit: 500 })).toEqual([]);
  });

  it('returns nothing for an empty query', () => {
    // Browse is a separate affordance; you must not reach "everything" by
    // clearing the box, or the first thing a learner sees is 555 rows.
    expect(searchLearningIndex(index, '')).toEqual([]);
    expect(searchLearningIndex(index, '   ')).toEqual([]);
  });

  it('ranks an exact title above a passing mention', () => {
    const hits = searchLearningIndex(index, 'alphabet', { limit: 5 });
    expect(hits[0]?.title.toLowerCase()).toContain('alphabet');
  });

  it('can be restricted to lessons, for the syllabus view', () => {
    const hits = searchLearningIndex(index, 'genitive', { limit: 40, kind: 'lesson' });
    expect(hits.length).toBeGreaterThan(0);
    expect(hits.every((h) => h.kind === 'lesson')).toBe(true);
  });
});

describe('foldCroatian', () => {
  it('folds all five diacritics INCLUDING đ', () => {
    // NFD decomposes č ć š ž and leaves đ alone (U+0111 has no decomposition),
    // so the obvious `normalize('NFD').replace(...)` yields 'ccđsz' and quietly
    // fails only on đ — and passes every test written with č in it.
    expect(foldCroatian('čćđšž')).toBe('ccdsz');
    expect(foldCroatian('ČĆĐŠŽ')).toBe('ccdsz');
    expect('čćđšž'.normalize('NFD').replace(/[̀-ͯ]/g, '')).toBe('ccđsz');
  });

  it('leaves the digraphs alone', () => {
    expect(foldCroatian('džepni ljuštura njiva')).toBe('dzepni ljustura njiva');
  });
});

describe('the Croatian in the thesaurus is guarded here, not by the lint', () => {
  // `GRAMMAR_SYNONYMS` holds Croatian grammatical terms in a bare nested array —
  // a shape `CRO_FIELD_RE` cannot match, so adding this file to the lint's
  // TARGETS would produce a file everybody believes is linted and is not (the
  // `lessons.js` tables, exactly). The morphology engine has the same problem and
  // the same answer: run the SHARED rules over the strings from in here.
  const terms = GRAMMAR_SYNONYMS.flat();

  it('has no Cyrillic homoglyph anywhere in it', () => {
    for (const t of terms) expect(containsCyrillic(t), t).toBe(false);
    // Positive control: the guard can actually see a homoglyph in this shape.
    expect(containsCyrillic('gen\u0438tiv')).toBe(true);
  });

  it('names no Serbian form', () => {
    for (const t of terms) {
      const hit = findSerbism(t);
      expect(hit, `${t} \u2192 ${hit?.use ?? ''}`).toBeNull();
    }
    // Positive control: `vreme` is the ekavica form the app must never show.
    expect(findSerbism('vreme')).not.toBeNull();
  });
});

describe('the syllabus view', () => {
  it('orders every lesson by level then spine order', () => {
    const ordered = lessonsByLevel(index);
    expect(ordered).toHaveLength(servedSpine.length);
    const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    let last = -1;
    for (const e of ordered) {
      const li = LEVELS.indexOf(e.level ?? '');
      expect(li).toBeGreaterThanOrEqual(0);
      expect(li).toBeGreaterThanOrEqual(last);
      last = li;
    }
    expect(ordered[0]?.level).toBe('A1');
    expect(ordered[0]?.order).toBe(1);
  });

  it('degrades to fewer rows when a catalogue is absent, never to a throw', () => {
    // The spine is a cached fetch and can legitimately be missing on a cold
    // offline start. A Centre still listing every drill beats one that errors.
    expect(() => buildLearningIndex({})).not.toThrow();
    expect(buildLearningIndex({})).toEqual([]);
    expect(buildLearningIndex({ screens: allPools }).length).toBeGreaterThan(370);
  });
});
