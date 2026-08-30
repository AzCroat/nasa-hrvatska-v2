// src/lib/teachPractice.ts
//
// TEACH → PRACTICE COUPLING (recommender audit, 2026-08-20).
//
// The audit's systemic finding: finishing a lesson changed nothing about what
// the learner was offered next. An A1 learner could complete
// `present-tense-verbs` and the daily session would carry on serving vocabulary
// and case drills, because the session builder had no idea a lesson had
// happened. That is also WHY the A1 verb hole stayed invisible for so long —
// nothing connected "taught this" to "never practised it".
//
// This module is the connective tissue:
//   1. A lesson finishes  → recordLessonTaught(id) queues the category it taught.
//   2. The next session   → buildSessionActivities claims a slot for that
//                           category's drill (Priority 1.5, ahead of the
//                           adaptive scheduler's guess — a concept the learner
//                           just met beats a statistical estimate).
//   3. That drill finishes → recordCategoryPractised() clears the queue entry.
//
// DESIGN NOTES
// * The map is deliberately CONSERVATIVE. A lesson only appears here when the
//   practice category is unambiguous. `adjective-agreement` and `basic-questions`
//   are omitted on purpose: no drill teaches exactly those, and a wrong pairing
//   would send the learner somewhere confusing right after a lesson — worse than
//   the current behaviour of doing nothing.
// * Entries EXPIRE (TAUGHT_TTL_DAYS). A lesson finished three weeks ago is not a
//   pending intention any more, and a stale queue would quietly outrank the
//   adaptive scheduler forever.
// * Storage is best-effort throughout: private mode / storage-disabled must
//   degrade to today's behaviour, never throw into a completion path.

import type { SkillCategory } from './adaptive';
import { CEFR_EXERCISE_POOL } from './sessionPools';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN } from './categoryRoutes';

/**
 * Every category the pool actually uses. Derived rather than hand-listed so it
 * cannot drift: a retagged pool entry updates this automatically.
 */
const KNOWN_CATEGORIES: ReadonlySet<string> = new Set(CEFR_EXERCISE_POOL.map((e) => e.category));

const KEY = 'nh_taught_pending';
export const TAUGHT_TTL_DAYS = 14;
/** Queue cap — the coupling is a nudge, not a backlog to grind through. */
export const TAUGHT_MAX = 5;

/**
 * Lesson completion key → the category whose drill practises it.
 *
 * Two id spaces intentionally share one map:
 *   * server content lessons (functions/api/content/_data/lessons.js), whose ids
 *     reach us through AnimatedLesson;
 *   * the dedicated lesson SCREENS, which complete through completeExercise with
 *     their screenId as the key.
 * They never collide, and one map means one place to look.
 */
export const LESSON_TAUGHT_CATEGORY: Readonly<Record<string, SkillCategory>> = {
  // ── verbs: present ────────────────────────────────────────────────────────
  'present-tense-verbs': 'present-tense',
  present: 'present-tense',
  'modal-verbs-a2': 'present-tense',
  // Teaches biti + personal pronouns; presentdrill carries the biti items.
  'pronouns-biti': 'present-tense',
  // A1 modals and reflexives are both present-tense conjugation in practice,
  // and presentdrill is the A1-reachable drill for it — the same reasoning that
  // already pairs modal-verbs-a2 with this category.
  'modals-basic': 'present-tense',
  'reflexive-verbs': 'present-tense',
  // ── verbs: other tenses ───────────────────────────────────────────────────
  'past-tense': 'past-tense',
  // The A2 lesson on asking and denying in the past. `cloze` is A2, so unlike
  // the vocab route this resolves for exactly the learners it is written for.
  'past-questions-negation': 'past-tense',
  // B1 narration is past-tense production; cloze (A2) carries the items.
  'telling-a-story': 'past-tense',
  'aorist-imperfekt': 'past-tense',
  pluskvamperfekt: 'past-tense',
  tenses: 'past-tense', // TensesScreen
  'future-tense': 'future-tense',
  future_tense_lesson: 'future-tense',
  conditional: 'conditional',
  'unreal-conditions': 'conditional',
  // C2 second conditional (bio bih došao) is the same mood one step further;
  // the conditional drill is where it is practised.
  'kondicional-drugi': 'conditional',
  // ── aspect ────────────────────────────────────────────────────────────────
  aspect: 'aspect-imperfective',
  'aspect-imperfective': 'aspect-imperfective',
  'aspect-perfective': 'aspect-perfective',
  'aspect-negation': 'aspect-negation',
  // C2 aspect edges: the negated imperative is the lesson's central rule and is
  // exactly what the aspect-negation drill tests.
  'glagolski-vid-granice': 'aspect-negation',
  'motion-verbs': 'aspect-perfective',
  // B1 verb prefixes: a prefix is what makes a verb perfective, so aspectdrill
  // (B1) is practising exactly what the lesson taught.
  'verb-prefixes': 'aspect-perfective',
  // B2 secondary imperfectives (-ivati / -avati): aspectdrill is the pair drill,
  // and making a perfective imperfective again is exactly what it tests.
  'aspect-suffixes': 'aspect-imperfective',
  // C1 aspect nuance is about CHOOSING between two grammatical aspects; the
  // perfective side is the one the lesson argues for most often, and aspectdrill
  // (B1) is the pair drill a C1 learner opens without a gate.
  'aspect-nuance': 'aspect-perfective',
  // ── cases ─────────────────────────────────────────────────────────────────
  // The umbrella `cases` lesson introduces the system; nominative is where a
  // learner starts using it, and nomdrill is available from A1.
  cases: 'nominative',
  declension: 'genitive',
  'genitive-deep': 'genitive',
  'genitive-intro': 'genitive',
  'accusative-deep': 'accusative',
  'accusative-intro': 'accusative',
  'dative-locative': 'dative-locative',
  // The A1 locative lesson: locdrill is A1, so unlike the vocab route below
  // this one actually resolves for the learners the lesson is written for.
  'locative-intro': 'dative-locative',
  // The A2 dative lesson routes to the same category: dative and locative share
  // their singular endings, which is exactly why CATEGORY_SCREEN_MAP already
  // sends the combined category to the locative drill.
  'dative-intro': 'dative-locative',
  'vocative-intro': 'vocative',
  instrumental: 'instrumental',
  'instrumental-intro': 'instrumental',
  // C1 verb government — which case each verb demands. Mappable as of
  // 2026-08-28: the `rekcija` pool entry was retagged from 'dative-locative'
  // to 'verb-government' (owner decision), so the coupling now lands on
  // RekcijaDrill, which teaches exactly this, instead of the locative drill.
  'verb-government': 'verb-government',
  // ── syntax / structure ────────────────────────────────────────────────────
  'word-order-emphasis': 'word-order',
  clitics: 'clitics',
  'clitics-advanced': 'clitics',
  'complex-sentences': 'subordination',
  // B1 relative clauses. CATEGORY_SCREEN_MAP now routes this category, and
  // CATEGORY_EASIER_SCREEN drops it to `relpron` (B1) — the drill that teaches
  // exactly relative pronouns — so it resolves for the level it is written for.
  'relative-deep': 'subordination',
  // B2 concession: iako / premda clauses are subordination, and the B2 learner
  // can open the main `subordination` screen rather than the easier route.
  'concession-contrast': 'subordination',
  // C1 clause types names and builds every subordinate clause Croatian uses —
  // the `subordination` screen is that inventory as a drill.
  'clause-types': 'subordination',
  'passive-voice': 'passive',
  // C1 passive CHOICES: participial vs se-passive vs impersonal. The passive
  // drill is where those alternatives are contrasted.
  'passive-choices': 'passive',
  // The B2 participial-adjective lesson builds the passive participle, which is
  // the ingredient the passive drill is made of.
  'participial-adjectives': 'passive',
  'verbal-nouns': 'nominalization',
  // C1 condensation IS nominalization applied: compressing a clause into a
  // phrase is exactly what the nominalization drill asks for.
  condensation: 'nominalization',
  // ── vocabulary / other ────────────────────────────────────────────────────
  // The A1 gender lesson. `genderdrill` is A1 and drills exactly what the lesson
  // teaches (sort by gender, make it plural, adjective agreement) — the pool has
  // said so in a comment for a long time, but the coupling could not express it
  // while the drill shared the 'vocab-a2' tag, which routes to `znam` (A2). The
  // drill now carries its own pool-only category (owner decision, 2026-08-28).
  //
  // The completion key is 'gender', not 'genderdrill' — categoryForScreen's
  // documented "the key IS a category" fallback is what makes the clear path
  // work, and it only works because the category is now named in the pool.
  gender: 'gender',
  // A1 plural formation. `pluraldrill` is A1 and was authored FOR this lesson
  // (practice programme wave 1) — the lesson had no drill anywhere before it.
  'plural-nouns': 'plural',
  negation: 'negation',
  'adjectives-basic': 'adjectives',
  demonstratives: 'demonstratives',
  'imati-nemati': 'having',
  'imperative-basic': 'imperative',
  possessives: 'possessives',
  // A1 tranche 3 (2026-08-29). `basic-questions` is one of the two lessons this
  // file has named for months as unmapped "because no drill teaches exactly
  // those" — that was true until the drill was written. `greetings-farewells`
  // looks like the topical block and is not: which greeting you use is decided
  // by the hour and by the relationship, which is a rule a drill can test.
  'basic-questions': 'questions',
  'prepositions-place': 'place-prepositions',
  'time-calendar': 'time',
  'greetings-farewells': 'greetings',
  // A2 tranche 1 (2026-08-29). `object-pronouns` is the entry CLAUDE.md singled
  // out as unmappable because the only clitic drill was B2; the A2 drill is
  // wired as the easier route for the same category, so the mapping is now
  // honest at the level the lesson is written for.
  svoj: 'reflexive-possessive',
  'object-pronouns': 'clitics',
  'plural-cases': 'plural-cases',
  quantity: 'quantity',
  'comparatives-a2': 'comparison',
  // B1 tranche 1 (2026-08-29). `reported-speech` is the entry this file recorded
  // as the notable one — the pool HAS a reported-speech drill, but it is B2 and
  // the easier route for its category was taken by `relpron`, so mapping it
  // would have sent a B1 learner to relative pronouns. Each of these now has its
  // own category and its own B1 drill, so nothing is shared or displaced.
  'infinitive-vs-da': 'infinitive-da',
  'reported-speech': 'reported-speech',
  impersonal: 'impersonal',
  'time-clauses': 'time-clauses',
  'cause-purpose': 'cause-purpose',
  // C2 tranche 1 (2026-08-29). `precizno-nijansiranje` is the entry this file
  // recorded as the near miss worth writing down: the `preciznost` drill IS
  // precision of expression, but its pool entry was tagged `idioms`, so the
  // mapping would have delivered the idiom drill instead of the one whose name
  // matched. Retagging was called its own decision; this is that decision, and
  // seven more of exactly the same shape.
  // B2 tranche 1 (2026-08-29). `degrees-intensity` deliberately does NOT map to
  // `stupnjevanje` despite the close names: that drill builds comparatives,
  // which the A2 `comparatives-a2` lesson already owns via `komparacija`. This
  // lesson is about GRADING — sve + comparative, the intensifier register, and
  // pre- meaning "too" — so pairing the two would be the wrong-drill mistake.
  // C1 tranche 1 (2026-08-29). `comparison-advanced` deliberately does NOT map
  // to `stupnjevanje`, which is reachable from C1: two of that drill's three
  // modes build comparatives, which the A2 lesson already owns, while this
  // lesson is about the CONSTRUCTIONS (kao vs poput, za razliku od) and the case
  // each governs. `diminutives-augmentatives` likewise does not map to the B1
  // `diminutives` screen, which has no augmentative content while half the
  // lesson is augmentatives — one side covered, both sides claimed.
  // A1 topical block (2026-08-29). These six were the longest-standing entries
  // in every DELIBERATELY_UNMAPPED list, and the reason was sound: the only
  // partner available was a topic-blind vocabulary game. They leave the list the
  // only honest way — a drill written for each lesson's actual subject.
  'family-people': 'family',
  'countries-languages': 'countries',
  'food-drink': 'food',
  'directions-town': 'directions',
  'weather-seasons': 'weather',
  'likes-preferences': 'preferences',
  // A2 topical block (2026-08-29), the last ten topical lessons at A2. Five of
  // them had a same-named screen already in the pool and none of those five
  // could have served: `clothes`, `bodydesc`, `professions`, `countries` and
  // `lifeevents` are reference/browse entries with no completion, so a mapping
  // to one would resolve and then never clear.
  'house-home': 'home',
  'body-health': 'health',
  'clothes-appearance': 'clothing',
  'describing-people': 'appearance',
  'work-jobs': 'jobs',
  'school-studies': 'education',
  'hobbies-free-time': 'hobbies',
  'travel-transport': 'travel',
  'plans-invitations': 'invitations',
  'celebrations-holidays': 'celebrations',
  // B1 topical block (2026-08-30). The last ten topical lessons at B1; the
  // three B1 lessons still unmapped after this are grammar (time-duration,
  // position-placement, real-conditions), none of which has a drill anywhere.
  'opinions-agreeing': 'opinions',
  'feelings-inner-life': 'feelings',
  'complaints-problems': 'complaints',
  bureaucracy: 'bureaucracy',
  'renting-flat': 'renting',
  'job-interview': 'job-search',
  'media-news': 'news',
  'technology-internet': 'technology',
  'environment-nature': 'nature',
  'food-cooking': 'cooking',
  // B2 functional block (2026-08-30): the level's second half. The three B2
  // lessons still unmapped after this are grammar (wishes-regrets,
  // modal-nuance, prepositions-advanced).
  'argument-structure': 'argument',
  'hedging-precision': 'hedging',
  'abstract-topics': 'abstract',
  'writing-registers': 'registers',
  presentations: 'presenting',
  'meetings-negotiation': 'meetings',
  'business-economy': 'business',
  'politics-society': 'politics',
  'small-talk-fluency': 'smalltalk',
  'humour-irony': 'humour',
  'language-history': 'language-history',
  'literature-canon': 'literature',
  // C1 functional block (2026-08-30). `discourse-particles` is the notable one:
  // it was uncoupled because the `discourse` drill covers CONNECTORS while the
  // lesson teaches ATTITUDE particles, which is a real distinction and not a
  // wiring oversight. It now has a drill written for it.
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
  'norma-i-uzus': 'norm',
  'sklonidba-iznimke': 'declension-exceptions',
  'brojevi-norma': 'number-norm',
  'slaganje-suptilnosti': 'agreement-subtleties',
  'padezne-suptilnosti': 'case-subtleties',
  'glagolski-nacini': 'modality',
  'ritam-recenice': 'rhythm',
  'ironija-podtekst': 'irony',
  'humor-jezicni': 'wordplay',
  'knjizevni-stil': 'literary-style',
  'stari-tekstovi': 'old-texts',
  'rekonstrukcija-argumenta': 'reconstruction',
  'spontani-govor': 'spontaneous',
  'prevodjenje-strucno': 'specialist-translation',
  'frazeologija-dubinska': 'phraseology',
  'dijalekti-dubinski': 'dialects-deep',
  'jezik-i-drustvo': 'language-society',
  collocations: 'collocations',
  'accent-prosody': 'prosody',
  'comparison-advanced': 'advanced-comparison',
  'tvorba-rijeci': 'word-formation',
  'diminutives-augmentatives': 'diminutives',
  'summarising-paraphrase': 'summarising',
  'i-declension': 'i-declension',
  'verbal-adverbs': 'verbal-adverbs',
  'negation-advanced': 'negation-advanced',
  'aspect-with-verbs': 'aspect-verbs',
  'degrees-intensity': 'intensity',
  'pravopis-dvojbe': 'orthography',
  'zarez-interpunkcija': 'punctuation',
  'administrativni-stil': 'admin-style',
  'znanstveni-stil': 'academic-style',
  'publicisticki-stil': 'journalistic-style',
  'stilske-figure': 'figures-of-speech',
  'uredjivanje-teksta': 'editing',
  'precizno-nijansiranje': 'precision',
  'numbers-time': 'numerals',
  'numbers-nouns': 'numerals',
  'collective-numbers': 'numerals',
  'shopping-prices': 'numerals',
  'ordinals-dates': 'numerals',
  'idioms-register': 'idioms',
  // C2 colloquial register. RegisterDrill is literally standard-vs-colloquial,
  // and 'register' is not in ALL_CATEGORIES, so routing it (CATEGORY_SCREEN_MAP)
  // touches the coupling and nothing the adaptive picker does.
  'razgovorni-stil': 'register',
  // B2 formal correspondence is written production; CATEGORY_SCREEN_MAP.writing
  // routes to the guided-writing teaching screen.
  'formal-email': 'writing',
  // C1 academic writing is written production against a rubric; guided writing
  // is the teaching screen for it.
  'academic-writing': 'writing',
  // C2 synthesis across sources is written production against a structure;
  // guided writing is the teaching screen for it.
  'sinteza-izvora': 'writing',
  // DELIBERATELY UNMAPPED — fourteen lessons as of 2026-08-30, and the list is
  // DERIVED rather than restated here. A hand-maintained census of it went
  // stale repeatedly while the practice programme shipped, and once made a
  // merged tranche report the wrong coverage figure, because a list of
  // judgements is not a count of lessons. `practiceProgrammeDrills.test.ts`
  // holds the count per level and NAMES the uncoupled ids in its failure
  // message, so the authoritative list is one test run away and cannot drift
  // from this map.
  //
  // What belongs here is WHY each is still unmapped, because "no drill exists
  // yet" and "no honest pairing exists" look identical from inside a list of
  // ids — and the whole programme turned on that difference:
  //
  //   A1 `alphabet` (1). It HAS a screen; AlphabetScreen never reaches
  //   `recordScreenPractised`, so a coupling would resolve and then never
  //   clear. Blocked on the clearing path rather than on content — see
  //   `couplingClearingPath.test.ts`.
  //
  //   A2 `adverbs`, `conjunctions`, `relative-koji`, `indefinites`,
  //   `vi-vs-ti`, `prepositions-action`, `adjective-agreement` (7);
  //   B1 `time-duration`, `position-placement`, `real-conditions` (3);
  //   B2 `wishes-regrets`, `modal-nuance`, `prepositions-advanced` (3).
  //   No drill teaches these at any level. Each needs an authored bank, the way
  //   the A1, A2, B1, B2, C1 and C2 blocks got theirs. Debt, not judgement.
  //
  // Every judgement call that used to sit on this list is resolved, and each
  // came off it the same honest way — by making the drill it names actually
  // teach it, never by loosening the pairing:
  //   `verb-government` (2026-08-28) — retagged the `rekcija` pool entry.
  //   `object-pronouns` (2026-08-29) — clitics had a drill, B2-gated; `objekt`
  //     gives the category an A2-reachable easier route.
  //   `reported-speech` (2026-08-29) — recorded here by name as "wrong drill,
  //     so no drill": `neizravni` is B2 and `subordination`'s easier route was
  //     already taken. Fixed with its own category and its own bank.
  //   `precizno-nijansiranje` (2026-08-29) — retagged `preciznost` off
  //     `idioms`, which had been routing it to the idiom drill.
  //   `padezne-suptilnosti` (2026-08-30) — the last, and the clearest case of
  //     the distinction above. It was left unmapped because no case drill
  //     practised "case meaning where nothing governs anything". That was true
  //     of every case drill the app HAD; `padezisupt` was authored for exactly
  //     it.
  //
  // `idioms-register` is mapped but is the one live DEAD END: `idioms` routes
  // to IdiomsScreen, a reference list with no completion. It needs a C1 idiom
  // drill (`frazeologija` is C2), not a remapping.
};

interface TaughtEntry {
  /** category */
  c: SkillCategory;
  /** epoch ms when the lesson was completed */
  at: number;
}

function read(): TaughtEntry[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (e): e is TaughtEntry =>
        !!e &&
        typeof (e as TaughtEntry).c === 'string' &&
        typeof (e as TaughtEntry).at === 'number',
    );
  } catch {
    return [];
  }
}

function write(entries: TaughtEntry[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(entries.slice(-TAUGHT_MAX)));
  } catch {
    /* storage unavailable — coupling degrades to today's behaviour */
  }
}

function fresh(entries: TaughtEntry[], now: number): TaughtEntry[] {
  const cutoff = now - TAUGHT_TTL_DAYS * 86400000;
  return entries.filter((e) => e.at >= cutoff);
}

/**
 * A lesson was completed. Queues the category it taught, if we know one.
 * Idempotent per category: re-reading a lesson refreshes its timestamp rather
 * than stacking duplicates.
 */
export function recordLessonTaught(lessonKey: string, now = Date.now()): void {
  const category = LESSON_TAUGHT_CATEGORY[lessonKey];
  if (!category) return; // unmapped lesson — no coupling, no harm
  const entries = fresh(read(), now).filter((e) => e.c !== category);
  entries.push({ c: category, at: now });
  write(entries);
}

/** A drill in this category was completed — the coupling is satisfied. */
export function recordCategoryPractised(category: SkillCategory, now = Date.now()): void {
  const entries = fresh(read(), now);
  const next = entries.filter((e) => e.c !== category);
  if (next.length !== entries.length) write(next);
}

/**
 * Every category whose coupling drill IS this screen, according to the app's
 * own routing. Both maps count: `CATEGORY_EASIER_SCREEN` is where the learner
 * is actually sent when the main drill is CEFR-locked, so a coupling satisfied
 * via the easier route must clear too.
 */
function categoriesRoutedTo(screenKey: string): SkillCategory[] {
  const out = new Set<SkillCategory>();
  for (const map of [CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN]) {
    for (const [category, screen] of Object.entries(map)) {
      if (screen === screenKey) out.add(category as SkillCategory);
    }
  }
  return [...out];
}

/**
 * A screen was completed — discharge every coupling it satisfies.
 *
 * WHY THIS IS ROUTE-BASED AND NOT TAG-BASED (2026-08-28).
 *
 * The obvious implementation — clear the pool tag of the screen just finished —
 * was the implementation, and it silently failed for 18 of 62 mappings. A pool
 * entry carries ONE category, but several categories legitimately route to the
 * same screen: `cloze` is the drill for both 'past-tense' and 'conditional'
 * while being tagged 'vocab-a2'; `aspectdrill` serves all three aspect
 * categories under one tag; `writing_guided` has no pool entry at all, so no
 * retag could ever have fixed it. In every one of those cases the coupling
 * resolved perfectly, sent the learner to the right drill, and then never
 * cleared — so the entry sat for its full 14-day TTL and re-claimed a session
 * slot every single day, serving the same drill over and over.
 *
 * The queue is a list of INTENTIONS ("taught this, not yet practised"), and the
 * coupling's own definition of practising X is "do the drill CATEGORY_SCREEN_MAP
 * points at for X". So if the app's own router says the drill for X is screen S
 * and the learner finished S, the intention is discharged by construction. This
 * claims nothing about content or accuracy — it reads the app's routing table,
 * not the learner's performance — so it stays on the right side of the
 * never-state-what-you-did-not-measure rule.
 *
 * The pool tag is still honoured, because a screen can be reached without the
 * coupling having sent you there, and finishing a genitive drill should clear a
 * pending genitive intention whichever way you arrived.
 *
 * ONE DELIBERATE OVER-CLEAR: when two queued categories route to the SAME
 * screen (past-tense and conditional both → cloze), finishing it clears both.
 * That is correct rather than sloppy — the app has no other drill to offer
 * either of them, so keeping one queued would serve that same screen again
 * tomorrow for a category whose only drill the learner just did. The
 * alternative is a loop.
 *
 * This function touches ONLY the coupling queue. The adaptive store and the
 * mastery ledger keep recording the pool tag, which remains the honest
 * statement about what content was practised.
 */
export function recordScreenPractised(screenKey: string, now = Date.now()): void {
  const satisfied = new Set<SkillCategory>(categoriesRoutedTo(screenKey));
  const tag = categoryForScreen(screenKey);
  if (tag) satisfied.add(tag);
  if (satisfied.size === 0) return;

  const entries = fresh(read(), now);
  const next = entries.filter((e) => !satisfied.has(e.c));
  if (next.length !== entries.length) write(next);
}

/**
 * Categories taught but not yet practised, oldest first — the order the session
 * builder should honour so nothing waits behind a newer lesson.
 */
export function pendingTaughtCategories(now = Date.now()): SkillCategory[] {
  return fresh(read(), now)
    .sort((a, b) => a.at - b.at)
    .map((e) => e.c);
}

/**
 * The category a finished exercise practised, from its completion key.
 *
 * Two shapes reach us, because completion keys were never standardised:
 *   * some drills key on the category itself (NominativeDrill → 'nominative',
 *     PresentTenseDrill → 'present-tense');
 *   * others key on their screen id (e.g. 'locdrill'), which the pool maps.
 * Checking the pool first and falling back to "the key IS a category" covers
 * both without forcing a rename of every drill's completion key.
 */
export function categoryForScreen(key: string): SkillCategory | undefined {
  const entry = CEFR_EXERCISE_POOL.find((e) => e.screen === key || e.id === key);
  if (entry) return entry.category;
  return KNOWN_CATEGORIES.has(key) ? (key as SkillCategory) : undefined;
}

/** Test/diagnostic helper — clears the queue. */
export function clearTaughtQueue(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* no-op */
  }
}
