// src/tests/c1Curriculum.test.ts
//
// C1 IS A COMPLETE LEVEL (Wave 5 content, 2026-08-28).
//
// C1 had EIGHT lessons. The level descriptor is "can use the language flexibly
// and effectively for social, academic and professional purposes" and the level
// contained nothing academic and nothing professional at all. Absent from it:
//
//   * VERB GOVERNMENT — which case each verb demands. This is the single most
//     common source of error at this level and no lesson anywhere named it;
//   * aspect NUANCE, so aspect was taught as a rule (perfective = completed)
//     and never as the choice it actually is when both forms are grammatical;
//   * condensation and the passive CHOICES — the two things that separate
//     written Croatian from transcribed speech;
//   * collocation, which is what "fluent" mostly means in practice;
//   * discourse particles: pa, ma, baš, valjda, zar. A learner could reach C1
//     without ever being told what any of them do;
//   * accent and prosody, so nothing had ever explained why a learner's
//     grammatically perfect sentence still sounds foreign;
//   * and every professional register — academic, legal, technical, ceremonial.
//
// Same contract as A1 through B2: pin SHAPE, not prose.

import { describe, it, expect, vi } from 'vitest';

// The lesson-day block at the bottom drives the REAL session builder.
vi.mock('../lib/srs', () => ({ getDueReviews: vi.fn(() => []) }));
vi.mock('../lib/cefrCertification', () => ({
  getCertifiedLevel: vi.fn(() => 'C1'),
  getContentUnlockLevel: vi.fn((l: string) => l),
}));

const { CURRICULUM, spineForLevel, CURRICULUM_LEVELS } =
  await import('../../functions/api/content/_data/curriculum.js');
const { LESSONS } = await import('../../functions/api/content/_data/lessons.js');
const { ORDER_A2, ORDER_B1, ORDER_B2, ORDER_C1 } =
  await import('../../functions/api/content/_data/levelOrders.js');
const { LESSON_TAUGHT_CATEGORY } = await import('../lib/teachPractice');
const { CATEGORY_SCREEN_MAP } = await import('../lib/categoryRoutes');
const { CEFR_EXERCISE_POOL } = await import('../lib/sessionPools');

const { buildSessionActivities, GRAMMAR_STRUCTURE_CATEGORIES } =
  await import('../hooks/useDailySession');
const { writeCurriculumSpine } = await import('../lib/curriculumProgress');

type Entry = { id: string; level: string; order: number; prerequisites: string[] };
type CurriculumEntry = Entry & { objectives: string[]; title: string };
type Lesson = { id: string; level: string; slides: { type: string }[] };

const c1Spine = spineForLevel('C1') as Entry[];
const c1Lessons = (LESSONS as Lesson[]).filter((l) => l.level === 'C1');
const orderOf = new Map(c1Spine.map((e) => [e.id, e.order]));

describe('C1 covers the structures the level was missing', () => {
  const REQUIRED = [
    'verb-government',
    'aspect-nuance',
    'condensation',
    'clause-types',
    'comparison-advanced',
    'passive-choices',
    'diminutives-augmentatives',
    'collocations',
    'discourse-particles',
    'accent-prosody',
  ];

  it.each(REQUIRED)('teaches %s', (id) => {
    expect(
      c1Lessons.some((l) => l.id === id),
      `C1 lost the lesson that teaches ${id}`,
    ).toBe(true);
    expect(orderOf.has(id), `${id} is not sequenced in the C1 spine`).toBe(true);
  });

  it('teaches verb government, which NO level had ever taught', () => {
    // Every level taught cases from the NOUN side — this ending means that
    // case. Nothing anywhere said that `sjećati se` takes the genitive and
    // `radovati se` the dative, which is where C1 learners actually go wrong.
    expect(orderOf.has('verb-government')).toBe(true);
  });

  it('keeps the academic and professional registers, which ARE the descriptor', () => {
    // "Can use the language flexibly and effectively for social, ACADEMIC and
    // PROFESSIONAL purposes" is the CEFR wording for C1. The level had nothing
    // for either before 2026-08-28.
    for (const id of ['academic-writing', 'formal-speech', 'law-administration']) {
      expect(orderOf.has(id), `C1 lost ${id}`).toBe(true);
    }
  });

  it('keeps its size after C2 was folded in (ORDER_C1, 80 lessons)', () => {
    expect(ORDER_C1.length).toBeGreaterThanOrEqual(80);
    expect(c1Lessons.length).toBeGreaterThanOrEqual(ORDER_C1.length);
    expect(c1Spine.length).toBe(c1Lessons.length);
  });
});

// The eleven USE lessons among the fifteen former C2 lessons (now C1 orders 61-75).
const FOLDED_FUNCTIONAL = [
  'precizno-nijansiranje',
  'stilske-figure',
  'knjizevni-stil',
  'publicisticki-stil',
  'ironija-podtekst',
  'humor-jezicni',
  'sinteza-izvora',
  'rekonstrukcija-argumenta',
  'spontani-govor',
  'stari-tekstovi',
  'jezik-i-drustvo',
];

describe('C1 teaches use, not only structure', () => {
  const PROFESSIONAL = [
    'summarising-paraphrase',
    'academic-writing',
    'debate-persuasion',
    'formal-speech',
    'translation-pitfalls',
    'proofreading-editing',
  ];

  it.each(PROFESSIONAL)('teaches %s', (id) => {
    expect(
      c1Lessons.some((l) => l.id === id),
      `C1 lost ${id}`,
    ).toBe(true);
  });

  const DOMAIN = [
    'media-analysis',
    'law-administration',
    'science-technology',
    'arts-culture',
    'regional-varieties',
    'diaspora-identity',
  ];

  it.each(DOMAIN)('teaches %s', (id) => {
    expect(
      c1Lessons.some((l) => l.id === id),
      `C1 lost ${id}`,
    ).toBe(true);
  });

  it('keeps a functional share — C1 is not a grammar level', () => {
    // A C1 learner who only ever met more grammar would have no reason to believe
    // the level had moved on. The floor was 0.35 of 30 lessons. The 2026-11-12
    // Croaticum restructure took C1 to 65 by ADDING grammar (clause types, case
    // idioms, collectives, orthography, the six lessons moved down from C2) while
    // keeping all twelve use lessons, so the share is now 12/65 ≈ 0.18. The floor
    // follows the measured share; the twelve lessons are each pinned above, and the
    // absolute count must not fall either.
    //
    // 2026-11-18: the course ends at C1, so the fifteen lessons that used to be C2 now sit at
    // C1 (orders 61-75). Eleven of them are USE lessons — styles, figures, irony, synthesis,
    // reconstruction, spontaneous speech, old texts, language and society, precision — and
    // join the functional set, taking the share to 23/80 ≈ 0.29.
    const functional = [...PROFESSIONAL, ...DOMAIN, ...FOLDED_FUNCTIONAL];
    expect(functional.filter((id) => orderOf.has(id)).length).toBeGreaterThanOrEqual(23);
    expect(functional.length / c1Lessons.length).toBeGreaterThanOrEqual(0.28);
  });
});

describe('the sequence does not put a lesson before what it needs', () => {
  const AFTER: [string, string][] = [
    // The hinge: condensation is what the professional block is built out of.
    ['condensation', 'verbal-nouns'],
    ['summarising-paraphrase', 'condensation'],
    ['academic-writing', 'summarising-paraphrase'],
    ['proofreading-editing', 'academic-writing'],
    // Word formation before the things that are word formation applied.
    ['diminutives-augmentatives', 'tvorba-rijeci'],
    ['science-technology', 'tvorba-rijeci'],
    // Restructure (2026-11-12): collocations now sits before tvorba-rijeci and
    // requires condensation instead.
    ['collocations', 'condensation'],
    ['translation-pitfalls', 'collocations'],
    // Argument machinery.
    ['debate-persuasion', 'discourse-particles'],
    ['formal-speech', 'debate-persuasion'],
    // Passive choices need the participle the verbal-noun lesson builds.
    ['passive-choices', 'verbal-nouns'],
    ['law-administration', 'passive-choices'],
    // Clause inventory before reading long sentences for what they hide.
    ['media-analysis', 'clause-types'],
    // Prosody before the varieties that differ mostly in prosody.
    ['regional-varieties', 'accent-prosody'],
    ['language-identity', 'regional-varieties'],
    ['diaspora-identity', 'language-identity'],
    // Register before the lesson that judges register.
    ['arts-culture', 'idioms-register'],
    // The former C2 lessons (now C1 orders 61-75). The precision block builds on the frame.
    ['pravopis-dvojbe', 'norma-i-uzus'],
    ['sklonidba-iznimke', 'hypocoristics-dvojica'],
    ['slaganje-suptilnosti', 'multi-subject-agreement'],
    // Style: wordplay after irony. (The old C2 pair "rhythm after the figures" no longer
    // holds: the 2026-11-18 layout puts ritam-recenice at order 65, in C1-13, and
    // stilske-figure at 66, in C1-14. Left unasserted, and reported to the owner.)
    ['humor-jezicni', 'ironija-podtekst'],
    // Synthesis chain — this is the CEFR descriptor in order.
    ['rekonstrukcija-argumenta', 'sinteza-izvora'],
  ];

  it.each(AFTER)('%s comes after %s', (later, earlier) => {
    expect(orderOf.get(later)!, `${later} sits above ${earlier}`).toBeGreaterThan(
      orderOf.get(earlier)!,
    );
  });

  it('every same-level prerequisite is earlier in the spine', () => {
    const byId = new Map((CURRICULUM as Entry[]).map((e) => [e.id, e]));
    for (const e of c1Spine) {
      for (const p of e.prerequisites) {
        const pe = byId.get(p);
        if (!pe || pe.level !== 'C1') continue;
        expect(pe.order, `${e.id} requires later C1 lesson ${p}`).toBeLessThan(e.order);
      }
    }
  });
});

describe('every C1 lesson is a usable lesson', () => {
  it('has enough slides to teach something', () => {
    for (const l of c1Lessons) {
      expect(l.slides.length, `${l.id} has only ${l.slides.length} slides`).toBeGreaterThanOrEqual(
        7,
      );
    }
  });

  it('checks understanding before it claims to have taught', () => {
    for (const l of c1Lessons) {
      expect(
        l.slides.some((s) => s.type === 'quiz'),
        `${l.id} never checks whether the learner followed it`,
      ).toBe(true);
    }
  });

  it('ends on the summary slide that records the completion', () => {
    for (const l of c1Lessons) {
      expect(l.slides[l.slides.length - 1].type, `${l.id} does not end on a summary`).toBe(
        'summary',
      );
    }
  });
});

describe('teach → practice coupling stays HONEST at C1', () => {
  // Resolution is asserted centrally by curriculumCouplingResolves.test.ts,
  // which goes through the real session builder. This file pins only WHICH
  // category each lesson claims — the editorial decision, not the plumbing.
  const EXPECTED: Record<string, string> = {
    'aspect-nuance': 'aspect-perfective',
    condensation: 'nominalization',
    'clause-types': 'subordination',
    'passive-choices': 'passive',
    'academic-writing': 'writing',
    // Mappable as of 2026-08-28: the `rekcija` pool entry was retagged from
    // 'dative-locative' to 'verb-government' (owner decision), so the coupling
    // now lands on RekcijaDrill — which IS verb government — instead of the
    // locative drill. This lesson was in DELIBERATELY_UNMAPPED until then.
    'verb-government': 'verb-government',
    // Practice programme, C1 tranche 1 (2026-08-29). Two RETAGS of C1 drills
    // that were only unreachable because their pool tag was a catch-all
    // (`kolokacije` under `register`, `pitchaccent` under `speaking`), and four
    // AUTHORED banks. The two that look like retags and are not are worth
    // recording, because the near-miss is the whole risk at this level:
    //   * `comparison-advanced` does NOT take `stupnjevanje`, which IS reachable
    //     from C1 — two of its three modes build comparatives, which the A2
    //     lesson owns, while this lesson teaches the CONSTRUCTIONS and their
    //     case government (kao vs poput, za razliku od + genitive).
    //   * `diminutives-augmentatives` does NOT take the B1 `diminutives` screen,
    //     which has no augmentative content at all while half the lesson is
    //     augmentatives — one side covered, both sides claimed.
    collocations: 'collocations',
    'accent-prosody': 'prosody',
    'comparison-advanced': 'advanced-comparison',
    'tvorba-rijeci': 'word-formation',
    'diminutives-augmentatives': 'diminutives',
    'summarising-paraphrase': 'summarising',
    // The FUNCTIONAL block (2026-08-30): orders 20-30 plus discourse-particles.
    //   discourse-particles  pa, ma, baš, valjda — and valjda is a shrug where
    //                        vjerojatno is an estimate
    //   debate-persuasion    concede the true part, then reject the FRAMING:
    //                        ne radi se o X, nego o Y
    //   formal-speech        the ceremonial formulas, and nazdraviti + DATIVE
    //   translation-pitfalls eventualno, od strane, vršiti analizu — what marks
    //                        a text as thought in English
    //   proofreading-editing checking in passes, and the comma rule learners
    //                        invert (Znam da dolaziš — no comma)
    //   media-analysis       who disappeared into the passive; navodno against
    //                        tobože; the near-synonym that was not chosen
    //   law-administration   temeljem + genitive, sukladno + dative, and the rok
    //   science-technology   splitting a coined term (toplomjer, zemljopis) and
    //                        the decimal comma
    //   arts-culture         potresan is praise, not a warning
    //   regional-varieties   understand a variety; do not perform one
    //   language-identity    what marks a text as Croatian, from the Croatian
    //                        side only — see the note below
    //   diaspora-identity    zavičaj, and how to talk about your own Croatian
    'discourse-particles': 'particles',
    'debate-persuasion': 'debate',
    'formal-speech': 'formal-speech',
    'translation-pitfalls': 'translation',
    'proofreading-editing': 'proofreading',
    'media-analysis': 'media-analysis',
    'law-administration': 'legal',
    'science-technology': 'science',
    'arts-culture': 'arts',
    'regional-varieties': 'regional',
    'language-identity': 'identity',
    'diaspora-identity': 'diaspora',
    // The fifteen former C2 lessons (C1 orders 61-75, units C1-13..C1-15), 2026-11-18. The
    // drills were authored for them at C2 and are now gated C1. Categories decided in the
    // C2 blocks of 2026-08-29/30 (own pool-only tags, so nothing existing is displaced).
    'norma-i-uzus': 'norm',
    'pravopis-dvojbe': 'orthography',
    'kondicional-drugi': 'conditional',
    'precizno-nijansiranje': 'precision',
    'ritam-recenice': 'rhythm',
    'stilske-figure': 'figures-of-speech',
    'knjizevni-stil': 'literary-style',
    'publicisticki-stil': 'journalistic-style',
    'ironija-podtekst': 'irony',
    'humor-jezicni': 'wordplay',
    'sinteza-izvora': 'writing',
    'rekonstrukcija-argumenta': 'reconstruction',
    'spontani-govor': 'spontaneous',
    'stari-tekstovi': 'old-texts',
    'jezik-i-drustvo': 'language-society',
    // The five that moved down from C2 on 2026-11-12 keep the couplings decided there; their
    // drills were regated to C1 so the coupling resolves. The pluperfect has its own drill
    // since 2026-11-13 (`cloze` had no pluperfect item).
    'sklonidba-iznimke': 'declension-exceptions',
    'brojevi-norma': 'number-norm',
    'slaganje-suptilnosti': 'agreement-subtleties',
    'padezne-suptilnosti': 'case-subtleties',
    pluskvamperfekt: 'c1-pluperfect',
  };

  it.each(Object.entries(EXPECTED))('%s practises %s', (lesson, category) => {
    expect(LESSON_TAUGHT_CATEGORY[lesson]).toBe(category);
  });

  it('finishing the verb-government drill CLEARS the coupling', async () => {
    // Reachability is asserted centrally; this asserts the other half of the
    // round trip, and it is the half the retag was actually about.
    //
    // completeExercise clears the queue with categoryForScreen(key) — the POOL
    // TAG of the screen the learner finished. So a coupling only clears when
    // the pool tag and the routed category agree. Before 2026-08-28 they did
    // not for this lesson: the route would have sent the learner to `locdrill`
    // and the pool tag said 'dative-locative', so the queue entry would have
    // survived its full 14-day TTL and re-claimed a slot every session.
    //
    // The round trip now holds for EVERY mapping — clearing became route-aware
    // on 2026-08-28, which fixed the 18 that shared a screen. That is asserted
    // for all of them in curriculumCouplingResolves.test.ts. What this test
    // still adds is a pin on the POOL TAG specifically: route-based clearing
    // would keep working even if the rekcija tag were reverted, so without
    // this assertion nothing would catch that regression.
    const {
      recordLessonTaught,
      recordCategoryPractised,
      pendingTaughtCategories,
      categoryForScreen,
      clearTaughtQueue,
    } = await import('../lib/teachPractice');
    clearTaughtQueue();
    recordLessonTaught('verb-government');
    expect(pendingTaughtCategories()).toContain('verb-government');

    const practiced = categoryForScreen('rekcija');
    expect(practiced).toBe('verb-government');
    recordCategoryPractised(practiced!);
    expect(pendingTaughtCategories()).not.toContain('verb-government');
    clearTaughtQueue();
  });

  // EMPTY. C1 is fully coupled as of 2026-08-30, and `discourse-particles` —
  // the entry this list existed to explain — left it the only honest way. The
  // reason recorded here was correct and is worth keeping: the C1 `discourse`
  // drill covers CONNECTORS (stoga, međutim, unatoč tome) while the lesson
  // teaches ATTITUDE particles (pa, ma, baš, valjda). Adjacent, not the same.
  // The answer was a drill written for the particles, not a mapping to the
  // connectors; both drills remain reachable through the P3 CEFR fill.
  const DELIBERATELY_UNMAPPED: string[] = [];

  it('nothing is left unmapped at C1', () => {
    expect(DELIBERATELY_UNMAPPED).toEqual([]);
    const uncoupled = c1Lessons.filter((l) => !LESSON_TAUGHT_CATEGORY[l.id]).map((l) => l.id);
    expect(uncoupled, `C1 lessons with no drill: ${uncoupled.join(', ')}`).toEqual([]);
  });

  it('the language-identity drill teaches from the Croatian side only', () => {
    // The constraint that shapes that bank, pinned so it cannot be relaxed by
    // someone making the drill "match the lesson better".
    //
    // The LESSON teaches the contrast with a neighboring standard and holds the
    // one sanctioned CONTRASTIVE_LESSONS carve-out in lintCroatianText.mjs,
    // because there the form is a labeled comparison column. A DRILL cannot do
    // that: its options are clickable, so the same content would put a
    // neighboring standard's word in front of a learner as a live choice —
    // which the 2026-08-26 distractor directive forbids and the carve-out was
    // written NOT to cover.
    //
    // The bank therefore covers the lesson's second objective (recognize the
    // lexical choices that mark a text as Croatian) from the Croatian side, and
    // the Croatian lint is what enforces it — the same lint caught an ekavian
    // distractor in the regional and language-history banks on their first runs.
    expect(LESSON_TAUGHT_CATEGORY['language-identity']).toBe('identity');
    expect(CATEGORY_SCREEN_MAP['identity']).toBe('identitet');
  });

  it('the language-identity lesson prints no Serbian form at all', async () => {
    // Owner decision, 2026-11-18: "no need for table". The lesson used to carry a
    // Croatian/Serbian pairs table under a lint carve-out; the table is now Croatian's own
    // native/international pairs (zrakoplov/avion, glazba/muzika), the lesson is linted
    // like every other, and this pins it: no string on any slide may be a blocklisted form.
    const { findSerbism } = await import('../../functions/api/_serbisms.js');
    const lesson = LESSONS.find((l: { id: string }) => l.id === 'language-identity')!;
    const slides = lesson.slides as { type: string; headers?: string[] }[];
    expect(
      slides.some((s) => (s.headers || []).includes('Serbian')),
      'a Serbian column is back',
    ).toBe(false);
    const hits: string[] = [];
    const walk = (v: unknown) => {
      if (typeof v === 'string') {
        const hit = findSerbism(v);
        if (hit) hits.push(`"${v.slice(0, 60)}" (${hit.match})`);
      } else if (Array.isArray(v)) v.forEach(walk);
      else if (v && typeof v === 'object') Object.values(v).forEach(walk);
    };
    walk(slides);
    expect(hits, `Serbian form in the lesson:\n  ${hits.join('\n  ')}`).toEqual([]);
    // Non-vacuity: the walk reads real text, and the replacement table is there.
    expect(JSON.stringify(slides)).toMatch(/zrakoplov/);
  });

  it('idioms-register routes to the DRILL, not the browse list of the same name', () => {
    // The last dead-end coupling in the app, closed 2026-08-30, and the reason
    // it lasted is worth pinning rather than just fixing.
    //
    // Two pool entries look like the `idioms` category: `idioms` (B1,
    // IdiomsScreen — tap an idiom to hear it, no quiz, no completion) and
    // `idiomdrill` (C1, twelve figurative idioms, graded, finishing through
    // completeExercise). The 2026-08-28 dead-mapping repair routed five orphan
    // categories by NAME and picked the one whose id matched, so this lesson
    // queued a category the learner could never discharge.
    //
    // It was then exempted in couplingClearingPath with the reason "needs an
    // idiom DRILL at C1 (`frazeologija` exists but is C2)" — which named the
    // wrong candidate. `idiomdrill` had been sitting in the pool at C1 the whole
    // time; nothing ever had to be authored.
    expect(LESSON_TAUGHT_CATEGORY['idioms-register']).toBe('idioms');
    expect(CATEGORY_SCREEN_MAP['idioms']).toBe('idiomdrill');
    // And the drill it points at must be reachable for the C1 learners this
    // lesson serves — the `gender → vocab-a2` trap in its other form.
    const entry = CEFR_EXERCISE_POOL.find((e) => e.screen === 'idiomdrill');
    expect(entry, 'idiomdrill left the pool — the coupling resolves to nothing').toBeTruthy();
    expect(entry!.cefr, 'idiomdrill is no longer openable at C1').toBe('C1');
    expect(entry!.reference ?? false, 'idiomdrill became a reference screen').toBe(false);
  });
});

describe('a C1 lesson day still teaches STRUCTURE', () => {
  // The C1 leg of the audit that corrected A1 (9->3), B1 (4->2) and B2
  // (10->7) on 2026-08-31. Since the length contract closed, the grammar
  // backstop yields on a lesson day, so the coupled drill is the only structure
  // that day contains — which makes each category's SKILL_GROUP row something a
  // learner can feel.
  //
  // C1 MOVED NOTHING, and that is the result rather than a gap. The same
  // item-share criterion was applied (a drill is structural when its
  // FORM-PRODUCTION items are a substantial share of the 24-item bank;
  // calibration food 14/24 and home 12/24, lowest accepted renting 9/24).
  // Measured across this level's ModeDrill banks:
  //   word-formation 11/24, diminutives 10/24, debate 9/24, diaspora 8/24,
  //   formal-speech 6/24, science 5/24, particles 5/24, legal 5/24, arts 4/24,
  //   media-analysis 2/24, regional 0/24, identity 0/24
  //
  // Three across C1/C2 cleared the bar and all three were rejected on the items,
  // the same way `presenting` was at B2 — counting finds candidates, only
  // reading decides:
  //   word-formation 11/24  derivational morphology (pisati -> prepisati,
  //                         upisati, opisati). It builds LEXEMES rather than
  //                         grammatical forms.
  //   diminutives    10/24  the same, plus the palatalisation that comes with it
  //                         (ruka -> ručica). Word building, not agreement.
  //   debate          9/24  a rhetorical tactic (concede the true part first).
  //                         Its blanks are a grab-bag — određene, bih,
  //                         djelomično, nego, cijeni — with no single structure.
  //
  // Nine routes across these two levels go to hand-written screens rather than
  // ModeDrill banks, so the census cannot read them; they were checked by hand
  // and none is structural. `punctuation` is the one worth recording: the LESSON
  // is `zarez-interpunkcija`, but `InterpunkcijaDrill` is hyphen-vs-dash,
  // Croatian quotation marks and colon/semicolon conventions — typography, not
  // the clause boundaries a comma drill would test. Do not infer the drill from
  // the lesson title.
  const NON_STRUCTURAL_C1: Record<string, string> = {
    'tvorba-rijeci': 'derivational morphology — builds lexemes, not grammatical forms (11/24)',
    'diminutives-augmentatives': 'word building plus its palatalisation; not agreement (10/24)',
    collocations: 'which words go together — lexis by definition',
    'discourse-particles': 'attitude particles (pa, ma, baš) — spoken colouring',
    'idioms-register': 'figurative idioms; the drill is meaning, not form',
    'accent-prosody': 'pitch accent — a speaking drill',
    'academic-writing': 'couples to writing_guided, the production screen',
    'debate-persuasion': 'a rhetorical tactic; its blanks share no structure (9/24)',
    'formal-speech': 'spoken performance (6/24)',
    'media-analysis': 'reading a text for what it does not say outright (2/24)',
    'law-administration': 'legal reading and its fixed vocabulary (5/24)',
    'science-technology': 'scientific register vocabulary (5/24)',
    'arts-culture': 'arts vocabulary (4/24)',
    'regional-varieties': 'dialect awareness — a reading/listening topic (0/24)',
    'language-identity': 'the Croatian/Serbian contrast, taught as comparison (0/24)',
    'diaspora-identity': 'diaspora vocabulary and usage (8/24, all lexical)',
    // New in the restructure: capital letters in names per Hrvatski pravopis. Orthography,
    // like the punctuation drill — which word of a name is capitalised, not a form.
    'capitals-names-geography': 'orthography — capital letters in personal and place names',
    'capitals-institutions': 'orthography — capital letters in institution and event names',
    // The former C2 lessons whose day contains no grammar drill (recorded at C2 on 2026-08-31,
    // same item-share criterion; moved here when C2 was folded into C1, 2026-11-18).
    'pravopis-dvojbe': 'spelling doubts (ije/je, č/ć) — orthography',
    'ironija-podtekst': 'irony and subtext — pragmatics (2/24)',
    'humor-jezicni': 'wordplay and puns (0/24)',
    'knjizevni-stil': 'literary style — a reading drill (1/24)',
    'stari-tekstovi': 'reading texts written before Gaj (0/24)',
    'sinteza-izvora': 'couples to writing_guided, the production screen',
    'rekonstrukcija-argumenta': 'reconstructing an argument — reading (7/24)',
    'precizno-nijansiranje': 'finer shades of meaning — lexical nuance',
    'spontani-govor': 'spontaneous speech (3/24)',
    'jezik-i-drustvo': 'language and society — a discussion topic (0/24)',
  };

  const bareLessonDays = (): string[] =>
    c1Lessons
      .filter((l) => {
        localStorage.clear();
        writeCurriculumSpine([
          {
            id: l.id,
            level: 'C1',
            order: 1,
            prerequisites: [],
            objectives: ['x'],
            title: l.id,
          } as CurriculumEntry,
        ]);
        return !buildSessionActivities('C1').some((a) =>
          GRAMMAR_STRUCTURE_CATEGORIES.has(a.category),
        );
      })
      .map((l) => l.id);

  it('every C1 lesson day contains structure, but for the recorded few', () => {
    const unexpected = bareLessonDays().filter((id) => !(id in NON_STRUCTURAL_C1));
    expect(
      unexpected,
      `these C1 lesson days now contain NO grammar drill at all: ${unexpected.join(', ')}. ` +
        `Check the drill's SKILL_GROUP row against what its ITEMS test.`,
    ).toEqual([]);
  });

  it('and the recorded few still genuinely lack structure', () => {
    // The staleness half, and the ONLY thing standing between this level and a
    // silent drift: nothing here was reclassified, so this list is the entire
    // record of the audit's negative result. If a drill is later rewritten with
    // structural content, or its row is moved, the entry must go.
    const bare = new Set(bareLessonDays());
    const ids = new Set(c1Lessons.map((l) => l.id));
    for (const [id, reason] of Object.entries(NON_STRUCTURAL_C1)) {
      expect(ids, `${id} is listed here but is not a C1 lesson any more`).toContain(id);
      expect(
        bare.has(id),
        `${id} is listed as non-structural ("${reason}") but its day now DOES contain ` +
          `grammar. Delete the entry.`,
      ).toBe(true);
    }
  });

  // 18 since 2026-11-13: zarez-interpunkcija was merged into comma-dependent-clauses, and
  // its slot went to text-connectors, whose drill is structural (syntax). 28 since 2026-11-18,
  // when ten former C2 lessons with no structure joined the level (80 lessons).
  it('the list stays at 28 of eighty', () => {
    expect(Object.keys(NON_STRUCTURAL_C1).length).toBe(28);
  });
});

describe('C2 was folded into C1 (2026-11-18): the course ends at C1', () => {
  // The fifteen surviving C2 lessons are C1 lessons at orders 61-75, in units C1-13..C1-15;
  // the old last C1 unit is now C1-16 (orders 76-80). Nine C2 lessons were deleted and their
  // unique slides folded into existing C1 lessons.
  const FOLDED_IN = [
    'norma-i-uzus',
    'pravopis-dvojbe',
    'kondicional-drugi',
    'precizno-nijansiranje',
    'ritam-recenice',
    'stilske-figure',
    'knjizevni-stil',
    'publicisticki-stil',
    'ironija-podtekst',
    'humor-jezicni',
    'sinteza-izvora',
    'rekonstrukcija-argumenta',
    'spontani-govor',
    'stari-tekstovi',
    'jezik-i-drustvo',
  ];

  const DELETED = [
    'glagolski-vid-granice',
    'glagolski-nacini',
    'administrativni-stil',
    'znanstveni-stil',
    'razgovorni-stil',
    'prevodjenje-strucno',
    'uredjivanje-teksta',
    'frazeologija-dubinska',
    'dijalekti-dubinski',
  ];

  it.each(FOLDED_IN)('%s is a C1 lesson, spined and sequenced at orders 61-75', (id) => {
    expect(
      c1Lessons.some((l) => l.id === id),
      `${id} has no C1 lesson body`,
    ).toBe(true);
    const order = orderOf.get(id);
    expect(order, `${id} is not in the C1 spine`).toBeDefined();
    expect(order!).toBeGreaterThanOrEqual(61);
    expect(order!).toBeLessThanOrEqual(75);
  });

  it('norma-i-uzus opens the folded block, which frames every later lesson in it', () => {
    // Everything after it assumes the learner has stopped asking "is this correct" and
    // started asking "which correct form".
    expect(orderOf.get('norma-i-uzus')).toBe(61);
  });

  it('the old last unit follows the folded block (orders 76-80)', () => {
    const last = [
      'science-technology',
      'arts-culture',
      'regional-varieties',
      'language-identity',
      'diaspora-identity',
    ];
    expect(last.map((id) => orderOf.get(id))).toEqual([76, 77, 78, 79, 80]);
  });

  it('the nine deleted lessons are gone from the spine, the bodies and the coupling map', () => {
    const spineIds = new Set((CURRICULUM as Entry[]).map((e) => e.id));
    const bodyIds = new Set((LESSONS as Lesson[]).map((l) => l.id));
    for (const id of DELETED) {
      expect(spineIds.has(id), `${id} is still in the spine`).toBe(false);
      expect(bodyIds.has(id), `${id} still has a lesson body`).toBe(false);
      expect(id in LESSON_TAUGHT_CATEGORY, `${id} still has a coupling`).toBe(false);
    }
  });

  it('no C2 lesson, no C2 spine entry and no C2 order list remains', () => {
    expect((LESSONS as Lesson[]).filter((l) => l.level === 'C2')).toEqual([]);
    expect((CURRICULUM as Entry[]).filter((e) => e.level === 'C2')).toEqual([]);
    expect(CURRICULUM_LEVELS).toEqual(['A1', 'A2', 'B1', 'B2', 'C1']);
  });

  it('every C1 lesson is coupled to a drill', () => {
    const uncoupled = c1Lessons.filter((l) => !LESSON_TAUGHT_CATEGORY[l.id]).map((l) => l.id);
    expect(uncoupled, 'a C1 lesson leads nowhere — author its drill').toEqual([]);
  });

  it('the five lessons moved down from C2 on 2026-11-12 are still C1 lessons', () => {
    for (const id of [
      'slaganje-suptilnosti',
      'pluskvamperfekt',
      'padezne-suptilnosti',
      'sklonidba-iznimke',
      'brojevi-norma',
    ]) {
      expect(orderOf.has(id), `${id} left the course or moved off C1`).toBe(true);
    }
  });
});

describe('THE CURRICULUM IS COMPLETE (whole-course assertions)', () => {
  // Level sizes follow the Croaticum books (A1 100, levelOrders.js for the rest) and C1 now
  // carries the former C2 as well: 345 lessons in all. A level cannot quietly shrink.
  it('every CEFR level keeps at least its size, and the course at least 345 lessons', () => {
    const FLOOR: Record<string, number> = {
      A1: 100,
      A2: ORDER_A2.length,
      B1: ORDER_B1.length,
      B2: ORDER_B2.length,
      C1: ORDER_C1.length,
    };
    expect(FLOOR).toEqual({ A1: 100, A2: 50, B1: 50, B2: 65, C1: 80 });
    let total = 0;
    for (const level of CURRICULUM_LEVELS as string[]) {
      const n = (LESSONS as Lesson[]).filter((l) => l.level === level).length;
      total += n;
      expect(n, `${level} has only ${n} lessons`).toBeGreaterThanOrEqual(FLOOR[level]);
    }
    expect(total).toBeGreaterThanOrEqual(345);
  });

  it('the spine and the lesson bodies agree exactly, at every level', () => {
    const lessonIds = new Set((LESSONS as Lesson[]).map((l) => l.id));
    const spineIds = new Set((CURRICULUM as Entry[]).map((e) => e.id));
    expect(
      [...spineIds].filter((id) => !lessonIds.has(id)),
      'spine entries with no lesson',
    ).toEqual([]);
    expect(
      [...lessonIds].filter((id) => !spineIds.has(id)),
      'lessons missing from the spine',
    ).toEqual([]);
  });

  it('no lesson is sequenced at a level other than its own', () => {
    const levelOf = new Map((LESSONS as Lesson[]).map((l) => [l.id, l.level]));
    for (const e of CURRICULUM as Entry[]) {
      expect(levelOf.get(e.id), `${e.id} is spined at ${e.level}`).toBe(e.level);
    }
  });

  it('orders within a level are unique and contiguous from 1', () => {
    for (const level of CURRICULUM_LEVELS as string[]) {
      const orders = (spineForLevel(level) as Entry[]).map((e) => e.order).sort((a, b) => a - b);
      expect(new Set(orders).size, `${level} has duplicate orders`).toBe(orders.length);
      expect(orders[0], `${level} does not start at 1`).toBe(1);
      expect(orders[orders.length - 1], `${level} has a gap in its ordering`).toBe(orders.length);
    }
  });
});
