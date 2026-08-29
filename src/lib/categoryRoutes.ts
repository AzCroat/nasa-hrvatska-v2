// src/lib/categoryRoutes.ts
//
// CATEGORY → SCREEN ROUTING, extracted from useDailySession.ts (2026-08-28).
//
// Pure data, and the only reason it lives in its own module is that the hook
// had reached its 800-line lint cap and the coupling keeps needing new rows.
// Nothing else changed: the same three maps, the same comments, and
// useDailySession still passes them into buildCurriculumSlots exactly as before.
//
// The distinction that governs every row here: a category IN `ALL_CATEGORIES`
// is picked by the adaptive scheduler, so routing it changes what every learner
// at that level is served. A category NOT in it (nominative, subordination,
// numerals, word-order, idioms, passive, nominalization, register) is reachable
// only through the teach → practice coupling, so a row for it changes the
// coupling and nothing else. Check which kind you have before adding one.

import type { SkillCategory } from './adaptive';
import { CEFR_EXERCISE_POOL } from './sessionPools';

/** Maps adaptive SkillCategory → exercise screen id */
export const CATEGORY_SCREEN_MAP: Partial<Record<SkillCategory, string>> = {
  genitive: 'genitivedrill',
  accusative: 'accusativedrill',
  // 'nominative' is not in ALL_CATEGORIES, so the adaptive queue never picks it
  // and this row is inert for resolveAdaptiveActivity. It exists for the teach →
  // practice coupling: the A1 `cases` lesson teaches the case SYSTEM, and
  // nominative is where a learner starts using it. Without a route the coupling
  // would queue a category it could never resolve, and the lesson would once
  // again lead nowhere.
  nominative: 'nomdrill',
  // Route each case to its dedicated drill (these components already exist and
  // are registered in AppRouter). Previously dative-locative/instrumental/vocative
  // all collapsed to generic 'cloze', so even when the adaptive picker chose them
  // the learner never got a real case drill. Dative & locative share endings in
  // Croatian, so the locative drill covers the combined 'dative-locative' category.
  'dative-locative': 'locdrill',
  // Like 'nominative' above, 'subordination' is NOT in ALL_CATEGORIES, so the
  // adaptive queue never picks it and this row is inert for
  // resolveAdaptiveActivity. It exists for the teach → practice coupling, and it
  // repairs a mapping that has never resolved: `complex-sentences` (B2) has
  // pointed at this category since the coupling shipped, with no route to
  // follow, while eight subordination drills sat in the pool unreachable.
  subordination: 'subordination',
  // Five more categories that the coupling pointed at with no route to follow
  // (found 2026-08-28 by curriculumCouplingResolves.test.ts, which walks the
  // REAL maps instead of a copy). Ten lessons across every level queued a
  // category that could never become an activity. Like 'nominative' and
  // 'subordination', none of these is in ALL_CATEGORIES, so the adaptive picker
  // is unaffected — this changes the coupling and nothing else.
  numerals: 'numtime',
  // The A1 gender lesson's drill (owner decision, 2026-08-28). genderdrill is
  // A1, so unlike the old 'vocab-a2' route this resolves for exactly the
  // learners the lesson is written for.
  gender: 'genderdrill',
  // A1 plural drill (practice programme wave 1, 2026-08-29).
  plural: 'pluraldrill',
  negation: 'negacija',
  adjectives: 'pridjevi',
  demonstratives: 'pokazne',
  having: 'imatidrill',
  imperative: 'imperativ',
  // Existing A1 drill, retagged 2026-08-29 (it was 'nominative').
  possessives: 'possess',
  // A1 tranche 3 (2026-08-29). `time` routes to the A1 clock-and-calendar
  // drill, NOT to `numtime`/`datumi` — the `numerals` category already owns
  // those and they are about counting and ordinal declension.
  questions: 'upitne',
  'place-prepositions': 'mjesto',
  time: 'vrijemea1',
  greetings: 'pozdravi',
  // A2 tranche 1 (2026-08-29). Each replaces a route that existed only at B1/B2
  // and so could never resolve for the A2 lesson that needed it.
  'reflexive-possessive': 'svojdrill',
  'plural-cases': 'mnozinapadezi',
  quantity: 'kolicinaa2',
  comparison: 'komparacija',
  // B1 tranche 1 (2026-08-29). None of these reuses an existing category: the
  // drills that already taught this material are tagged `subordination`,
  // `passive` and `register`, all of which route elsewhere and three of which
  // would have collided on one screen.
  'infinitive-da': 'infda',
  'reported-speech': 'prepricavanje',
  impersonal: 'bezlicnob1',
  'time-clauses': 'vrijemeklauze',
  'cause-purpose': 'uzrokb1',
  // C2 tranche 1 (2026-08-29). No new drills — each of these routes to an
  // EXISTING C2 screen that was already the right exercise and could not be
  // reached, because its pool tag was one of the C-level catch-alls (`register`
  // held sixteen entries) and a category routes to one screen only.
  // B2 tranche 1 (2026-08-29). `i-declension` keeps the C1 drill as its PRIMARY
  // route — `isklonidba` is that paradigm and was simply mis-tagged
  // `instrumental`, which is a case, not a declension class — with the new B2
  // bank as the easier route below it. The other four are authored B2 drills
  // whose nearest existing match sat at C1/C2 with nothing lower to fall to.
  'i-declension': 'isklonidba',
  'verbal-adverbs': 'prilozib2',
  'negation-advanced': 'negacijab2',
  'aspect-verbs': 'vidglagoli',
  intensity: 'intenzitet',
  orthography: 'pravopis',
  punctuation: 'interpunkcija',
  'admin-style': 'administrativni',
  'academic-style': 'akademski',
  'journalistic-style': 'novinski',
  'figures-of-speech': 'stilskefigure',
  editing: 'lektor',
  precision: 'preciznost',
  // The C1 verb-government lesson's drill (owner decision, 2026-08-28). The
  // pool entry now carries this category, so the route and the tag agree and
  // the coupling lands on RekcijaDrill rather than the locative drill.
  // `rekcija` is B2 and the lesson is C1, so no easier fallback is needed.
  'verb-government': 'rekcija',
  // Same class again (2026-08-28): RegisterDrill is standard-vs-colloquial and
  // the C2 `razgovorni-stil` lesson is exactly that. Not in ALL_CATEGORIES, so
  // like the rows above this touches the coupling and nothing else.
  register: 'register',
  'word-order': 'wordorderdrill',
  idioms: 'idioms',
  passive: 'passive',
  nominalization: 'nominalization',
  instrumental: 'instrumental',
  vocative: 'vocative',
  'past-tense': 'cloze',
  'future-tense': 'future',
  'aspect-imperfective': 'aspectdrill',
  'aspect-perfective': 'aspectdrill',
  'aspect-negation': 'aspectdrill',
  conditional: 'cloze',
  clitics: 'clitic',
  'vocab-a2': 'znam',
  'vocab-b1': 'znam',
  'vocab-b2': 'znam',
  // 'speaking' category adaptive picks don't route to a dedicated drill here;
  // spoken output is guaranteed by the production slot instead (PRODUCTION_POOL,
  // which since Wave 3 includes speaking_sprint again — it uses only browser
  // speech APIs, no AI quota).
  // Listening-channel fix (2026-08-14): 'listening' routes to the authored
  // graded-story bank (A1+, zero AI cost — NOT ai_listening, which spends
  // quota). The screen levels its own content, and its quiz finish now runs
  // through completeExercise, so the session-category bridge reschedules
  // listening from real accuracy like any grammar category.
  listening: 'listening_comprehension',
  // Production-teaching (2026-08-18): 'writing' routes to the guided-writing
  // teaching screen (A1+; study → frames → free production). This is what
  // makes a weak writing signal — from an exam, a graded submission's
  // error-types, or the session-category bridge — actually reschedule
  // WRITING practice; before this the category didn't exist and written
  // production could only win a random draw in the production slot.
  writing: 'writing_guided',
};

// Lower-level equivalent for a category whose mapped drill is CEFR-locked.
// Only for categories where a genuinely easier drill teaches the SAME concept —
// never a substitute from a different skill. Consulted by
// resolveAdaptiveActivity, which still CEFR-gates the fallback itself, so this
// can never surface a locked screen; it only rescues a category that would
// otherwise be dropped for the whole level.
export const CATEGORY_EASIER_SCREEN: Partial<Record<SkillCategory, string>> = {
  // present-tense maps to `cloze` (A2). A1 learners meet verbs in the
  // `present-tense-verbs` lesson and previously had nowhere to practise them.
  'present-tense': 'presentdrill',
  // subordination maps to `subordination` (B2). The B1 relative-clause lesson
  // needs a drill a B1 learner can actually open, and `relpron` is the one that
  // teaches the same thing one level down.
  subordination: 'relpron',
  // clitics maps to `clitic` (B2). The A2 `object-pronouns` lesson is where
  // me/te/ga/joj are actually taught, and CLAUDE.md recorded that lesson as
  // unmappable precisely because the only clitic drill was two levels above it.
  // Unlike the rows above this one, `clitics` IS in ALL_CATEGORIES, so this
  // also changes the adaptive picker: a learner below B2 measured weak on
  // clitics used to have the category dropped for their whole level and is now
  // served the A2 drill. That is the same fix `present-tense` got, and the same
  // reason.
  clitics: 'objekt',
  // i-declension maps to `isklonidba` (C1). The B2 lesson that teaches this
  // paradigm needs a drill a B2 learner can open.
  'i-declension': 'isklonidbab2',
};

// Screen → CEFR lookup derived from the pool. Used to CEFR-gate the adaptive
// pick (resolveAdaptiveActivity) so the coverage floor can't surface a locked
// drill (e.g. B1 accusative, B2 clitics) to an A1/A2 user.
export const SCREEN_CEFR: Record<string, string> = {
  ...Object.fromEntries(CEFR_EXERCISE_POOL.map((e) => [e.screen, e.cefr])),
  // vocative (VocativeScreen) is routed by the adaptive picker but is not part of
  // the Priority-3 fill pool, so it has no pool-derived CEFR. Part of the full
  // case system introduced at A1.
  vocative: 'A1',
};
