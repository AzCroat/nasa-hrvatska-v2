/**
 * practiceDrillEntries — pool entries for the PRACTICE PROGRAMME drills
 * (2026-08-29), split out of sessionPools.ts for max-lines.
 *
 * Same reason and same shape as `drillPoolEntries` (the C-level tranches) and
 * `categoryRoutes` (the routing maps): sessionPools.ts sits at its 800-line lint
 * cap, and this programme has 111 drills still to add. Adding them inline would
 * breach the cap immediately and repeatedly.
 *
 * Every entry here was authored for a specific curriculum lesson that taught
 * something the app never drilled. `practiceProgrammeDrills.test.ts` holds each
 * one to its lesson, its route, its pool tag and its skill group.
 */
import type { CefrPoolEntry } from './drillPoolEntries';

export const PRACTICE_PROGRAMME_ENTRIES: CefrPoolEntry[] = [
  // ── A1 ────────────────────────────────────────────────────────────────────
  // Wave 1: the plural — the commonest noun operation in the language, taught
  // at A1 and drilled at no level.
  { id: 'pluraldrill', label: 'Plural', screen: 'pluraldrill', cefr: 'A1', category: 'plural' },
  // Tranche 2: one drill per A1 lesson that led nowhere.
  { id: 'negacija', label: 'Negation', screen: 'negacija', cefr: 'A1', category: 'negation' },
  { id: 'pridjevi', label: 'Adjectives', screen: 'pridjevi', cefr: 'A1', category: 'adjectives' },
  {
    id: 'pokazne',
    label: 'Demonstratives',
    screen: 'pokazne',
    cefr: 'A1',
    category: 'demonstratives',
  },
  {
    id: 'imatidrill',
    label: 'Imati / nemati',
    screen: 'imatidrill',
    cefr: 'A1',
    category: 'having',
  },
  { id: 'imperativ', label: 'Imperative', screen: 'imperativ', cefr: 'A1', category: 'imperative' },
  // Tranche 3: the four remaining A1 lessons whose subject is a RULE rather
  // than a topic. `vrijemea1` is deliberately separate from the existing
  // `datumi` drill, which is C1 (ordinal declension, dates in the genitive) and
  // so is neither reachable nor useful to a learner who has just met the days
  // of the week.
  { id: 'upitne', label: 'Questions', screen: 'upitne', cefr: 'A1', category: 'questions' },
  {
    id: 'mjesto',
    label: 'Place prepositions',
    screen: 'mjesto',
    cefr: 'A1',
    category: 'place-prepositions',
  },
  {
    id: 'vrijemea1',
    label: 'Time & calendar',
    screen: 'vrijemea1',
    cefr: 'A1',
    category: 'time',
  },
  { id: 'pozdravi', label: 'Greetings', screen: 'pozdravi', cefr: 'A1', category: 'greetings' },
  // ── A2 ────────────────────────────────────────────────────────────────────
  // Tranche 1. Four of the five sit above an existing drill that was gated one
  // or two levels too high for the lesson that needed it (`svojmoj` B1,
  // `clitic` B2, `kolicina` B2, `stupnjevanje` B2) — the same hole as the A1
  // verb gap, one level up. `objekt` carries no new category: it is wired as
  // CATEGORY_EASIER_SCREEN.clitics, which also gives every learner below B2 a
  // clitics drill for the first time.
  {
    id: 'svojdrill',
    label: 'Svoj',
    screen: 'svojdrill',
    cefr: 'A2',
    category: 'reflexive-possessive',
  },
  { id: 'objekt', label: 'Object pronouns', screen: 'objekt', cefr: 'A2', category: 'clitics' },
  {
    id: 'mnozinapadezi',
    label: 'Plural cases',
    screen: 'mnozinapadezi',
    cefr: 'A2',
    category: 'plural-cases',
  },
  { id: 'kolicinaa2', label: 'Quantity', screen: 'kolicinaa2', cefr: 'A2', category: 'quantity' },
  {
    id: 'komparacija',
    label: 'Comparison',
    screen: 'komparacija',
    cefr: 'A2',
    category: 'comparison',
  },
  // ── B1 ────────────────────────────────────────────────────────────────────
  // Tranche 1, and the same finding as A2 with a twist. Every one of these five
  // lessons had a drill already — `infinitivda` (C1), `neizravni` (B2),
  // `bezlicne` (B2), `vremenske` (B2), `uzrocne` (B2) — but here the CEFR gate
  // is only half the problem: four of those five are tagged with a category that
  // is ALREADY routed somewhere else, and three share `subordination`, whose
  // easier route is `relpron`. Reusing the tags would have sent three different
  // lessons to one drill and `reported-speech` to relative pronouns. Each gets
  // its own pool-only category instead; the B2/C1 drills are untouched.
  {
    id: 'infda',
    label: 'Infinitive or da',
    screen: 'infda',
    cefr: 'B1',
    category: 'infinitive-da',
  },
  {
    id: 'prepricavanje',
    label: 'Reported speech',
    screen: 'prepricavanje',
    cefr: 'B1',
    category: 'reported-speech',
  },
  {
    id: 'bezlicnob1',
    label: 'Impersonal',
    screen: 'bezlicnob1',
    cefr: 'B1',
    category: 'impersonal',
  },
  {
    id: 'vrijemeklauze',
    label: 'Time clauses',
    screen: 'vrijemeklauze',
    cefr: 'B1',
    category: 'time-clauses',
  },
  {
    id: 'uzrokb1',
    label: 'Cause & purpose',
    screen: 'uzrokb1',
    cefr: 'B1',
    category: 'cause-purpose',
  },
  // ── B2 ────────────────────────────────────────────────────────────────────
  // Tranche 1, and a fourth pattern again. At A2 and B1 the matching drill sat
  // one or two levels ABOVE the lesson and could be rescued with an easier
  // route; at C2 the drills were present but buried under overloaded tags. B2
  // is the level where neither move works: `isklonidba` (C1), `gerunddrill`
  // (C2), `zelje` (C1), `modalnost` (C2) and `prijedlozni` (C1) all sit above
  // the lesson, and CATEGORY_EASIER_SCREEN only routes DOWNWARD — there was no
  // lower drill to fall back to. So these five are authored.
  {
    id: 'isklonidbab2',
    label: 'I-declension',
    screen: 'isklonidbab2',
    cefr: 'B2',
    category: 'i-declension',
  },
  {
    id: 'prilozib2',
    label: 'Verbal adverbs',
    screen: 'prilozib2',
    cefr: 'B2',
    category: 'verbal-adverbs',
  },
  {
    id: 'negacijab2',
    label: 'Advanced negation',
    screen: 'negacijab2',
    cefr: 'B2',
    category: 'negation-advanced',
  },
  {
    id: 'vidglagoli',
    label: 'Aspect after verbs',
    screen: 'vidglagoli',
    cefr: 'B2',
    category: 'aspect-verbs',
  },
  {
    id: 'intenzitet',
    label: 'Degrees & intensity',
    screen: 'intenzitet',
    cefr: 'B2',
    category: 'intensity',
  },
  // ── C1 ────────────────────────────────────────────────────────────────────
  // Tranche 1, and the only level where the survey's first answer was wrong in
  // BOTH directions. Two C1 drills were reachable and merely buried under a
  // catch-all tag, so they are retags (`kolokacije`, `pitchaccent`). Two more
  // looked like retags and are not: `stupnjevanje` (B2) builds comparatives,
  // which is not what `comparison-advanced` teaches, and the B1 `diminutives`
  // screen carries no augmentative content while half the lesson is
  // augmentatives. `tvorbarijeci` is the plain C2 gate. So four are authored.
  {
    id: 'usporedbec1',
    label: 'Advanced comparison',
    screen: 'usporedbec1',
    cefr: 'C1',
    category: 'advanced-comparison',
  },
  {
    id: 'tvorbac1',
    label: 'Word formation',
    screen: 'tvorbac1',
    cefr: 'C1',
    category: 'word-formation',
  },
  {
    id: 'deminutivi',
    label: 'Diminutives & augmentatives',
    screen: 'deminutivi',
    cefr: 'C1',
    category: 'diminutives',
  },
  {
    id: 'sazimanje',
    label: 'Summarising & paraphrase',
    screen: 'sazimanje',
    cefr: 'C1',
    category: 'summarising',
  },

  // ── A1, the TOPICAL block (2026-08-29) ────────────────────────────────────
  // The six lessons this programme deliberately left alone the longest, because
  // the only available partner was a topic-blind vocabulary game. Each of these
  // banks pairs the topic with the STRUCTURE its lesson teaches, which is what
  // makes the coupling say something true.
  {
    id: 'obitelj',
    label: 'Family & people',
    screen: 'obitelj',
    cefr: 'A1',
    category: 'family',
  },
  {
    id: 'zemlje',
    label: 'Countries & languages',
    screen: 'zemlje',
    cefr: 'A1',
    category: 'countries',
  },
  {
    id: 'hrana',
    label: 'Food & drink',
    screen: 'hrana',
    cefr: 'A1',
    category: 'food',
  },
  {
    id: 'grad',
    label: 'Directions & town',
    screen: 'grad',
    cefr: 'A1',
    category: 'directions',
  },
  {
    id: 'meteo',
    label: 'Weather & seasons',
    screen: 'meteo',
    cefr: 'A1',
    category: 'weather',
  },
  {
    id: 'svidjanje',
    label: 'Likes & preferences',
    screen: 'svidjanje',
    cefr: 'A1',
    category: 'preferences',
  },

  // ── A2, the TOPICAL block (2026-08-29) ────────────────────────────────────
  // Ten lessons, and a THIRD variant of "check whether the drill already
  // exists". At A2 tranche 1 the drill existed one level up; at B1 it existed
  // but its category was spoken for. Here five of the ten look served —
  // `clothes`, `bodydesc`, `professions`, `countries`, `lifeevents` are all in
  // the pool with matching names — and every one of them carries
  // `reference: true`: a browse list with no self-grading, which auto-completes
  // on view. Routing a coupling at one would resolve, send the learner to a
  // word list, and never clear, which is exactly the `idioms` dead end. So all
  // ten are authored, and the five reference screens are untouched.
  { id: 'dom', label: 'House & home', screen: 'dom', cefr: 'A2', category: 'home' },
  { id: 'zdravlje', label: 'Body & health', screen: 'zdravlje', cefr: 'A2', category: 'health' },
  { id: 'odjeca', label: 'Clothes', screen: 'odjeca', cefr: 'A2', category: 'clothing' },
  {
    id: 'izgled',
    label: 'Describing people',
    screen: 'izgled',
    cefr: 'A2',
    category: 'appearance',
  },
  { id: 'zanimanja', label: 'Work & jobs', screen: 'zanimanja', cefr: 'A2', category: 'jobs' },
  {
    id: 'skola',
    label: 'School & studying',
    screen: 'skola',
    cefr: 'A2',
    category: 'education',
  },
  { id: 'hobiji', label: 'Free time', screen: 'hobiji', cefr: 'A2', category: 'hobbies' },
  {
    id: 'putovanje',
    label: 'Travel & transport',
    screen: 'putovanje',
    cefr: 'A2',
    category: 'travel',
  },
  {
    id: 'dogovor',
    label: 'Plans & invitations',
    screen: 'dogovor',
    cefr: 'A2',
    category: 'invitations',
  },
  {
    id: 'blagdani',
    label: 'Celebrations',
    screen: 'blagdani',
    cefr: 'A2',
    category: 'celebrations',
  },

  // ── B1, the TOPICAL block (2026-08-30) ────────────────────────────────────
  // Ten lessons, and the survey found only ONE near-miss: `techvoc` (B2,
  // Tech Vocabulary) is the drill the `technology-internet` lesson wants and
  // sits a level above it. It could not be rescued the A2 way either — its tag
  // `vocab-b2` is an ALL_CATEGORIES member already routed to `znam`, so
  // retagging it would move an adaptive category's only pool member for an
  // unrelated reason, and CATEGORY_EASIER_SCREEN only routes DOWNWARD from a
  // route that does not exist. So all ten are authored, and `techvoc` is
  // untouched.
  {
    id: 'misljenje',
    label: 'Opinions',
    screen: 'misljenje',
    cefr: 'B1',
    category: 'opinions',
  },
  {
    id: 'osjecaji',
    label: 'Feelings',
    screen: 'osjecaji',
    cefr: 'B1',
    category: 'feelings',
  },
  {
    id: 'zalbe',
    label: 'Complaints',
    screen: 'zalbe',
    cefr: 'B1',
    category: 'complaints',
  },
  {
    id: 'salter',
    label: 'Paperwork',
    screen: 'salter',
    cefr: 'B1',
    category: 'bureaucracy',
  },
  {
    id: 'najam',
    label: 'Renting a flat',
    screen: 'najam',
    cefr: 'B1',
    category: 'renting',
  },
  {
    id: 'zivotopis',
    label: 'Job applications',
    screen: 'zivotopis',
    cefr: 'B1',
    category: 'job-search',
  },
  {
    id: 'mediji',
    label: 'News & media',
    screen: 'mediji',
    cefr: 'B1',
    category: 'news',
  },
  {
    id: 'tehnologija',
    label: 'Technology',
    screen: 'tehnologija',
    cefr: 'B1',
    category: 'technology',
  },
  {
    id: 'priroda',
    label: 'Nature & environment',
    screen: 'priroda',
    cefr: 'B1',
    category: 'nature',
  },
  {
    id: 'kuhanje',
    label: 'Cooking',
    screen: 'kuhanje',
    cefr: 'B1',
    category: 'cooking',
  },

  // ── B2, the FUNCTIONAL block (2026-08-30) ─────────────────────────────────
  // Twelve lessons — B2's whole second half, orders 18-30 minus formal-email,
  // which was already coupled. The survey found NO reusable drill this time,
  // and the reason is uniform rather than varied: every plausible partner is
  // both CEFR-gated above B2 and already claimed by a C1/C2 lesson.
  // `preciznost` (C2) is spoken for by `precizno-nijansiranje`, `register`
  // (C1) by `razgovorni-stil`, `nominalization` (C1) by two lessons,
  // `idiomdrill` (C1) by `idioms-register`. Retagging any of them would take
  // a drill away from the lesson it was written for. So all twelve are
  // authored.
  {
    id: 'argumentacija',
    label: 'Argument structure',
    screen: 'argumentacija',
    cefr: 'B2',
    category: 'argument',
  },
  {
    id: 'ograde',
    label: 'Hedging & precision',
    screen: 'ograde',
    cefr: 'B2',
    category: 'hedging',
  },
  {
    id: 'apstraktno',
    label: 'Abstract topics',
    screen: 'apstraktno',
    cefr: 'B2',
    category: 'abstract',
  },
  {
    id: 'registri',
    label: 'Writing registers',
    screen: 'registri',
    cefr: 'B2',
    category: 'registers',
  },
  {
    id: 'izlaganje',
    label: 'Presentations',
    screen: 'izlaganje',
    cefr: 'B2',
    category: 'presenting',
  },
  {
    id: 'sastanci',
    label: 'Meetings',
    screen: 'sastanci',
    cefr: 'B2',
    category: 'meetings',
  },
  {
    id: 'poslovno',
    label: 'Business & economy',
    screen: 'poslovno',
    cefr: 'B2',
    category: 'business',
  },
  {
    id: 'politika',
    label: 'Politics & society',
    screen: 'politika',
    cefr: 'B2',
    category: 'politics',
  },
  {
    id: 'caskanje',
    label: 'Conversational fluency',
    screen: 'caskanje',
    cefr: 'B2',
    category: 'smalltalk',
  },
  {
    id: 'humor',
    label: 'Humour & tone',
    screen: 'humor',
    cefr: 'B2',
    category: 'humour',
  },
  {
    id: 'povijestjezika',
    label: 'Language history',
    screen: 'povijestjezika',
    cefr: 'B2',
    category: 'language-history',
  },
  {
    id: 'knjizevnost',
    label: 'Literature',
    screen: 'knjizevnost',
    cefr: 'B2',
    category: 'literature',
  },

  // ── C1, the FUNCTIONAL block (2026-08-30) ─────────────────────────────────
  // Twelve lessons: orders 20-30 plus `discourse-particles` (15). That last one
  // closes a gap this repo has had on record — the C1 `discourse` drill covers
  // CONNECTORS (stoga, međutim) while the lesson teaches ATTITUDE particles
  // (pa, ma, baš, valjda), so it could never honestly be coupled there and was
  // left unmapped instead.
  //
  // Every other plausible partner is at C2 AND already claimed by a C2 lesson:
  // `kalkovi` by nothing but tagged `register` (owned by `razgovorni-stil`),
  // `lektor` by `uredjivanje-teksta`, `novinski` by `publicisticki-stil`,
  // `administrativni` by `administrativni-stil`. Same finding as B2, one level
  // up. So all twelve are authored.
  {
    id: 'cestice',
    label: 'Discourse particles',
    screen: 'cestice',
    cefr: 'C1',
    category: 'particles',
  },
  {
    id: 'debata',
    label: 'Debate & persuasion',
    screen: 'debata',
    cefr: 'C1',
    category: 'debate',
  },
  {
    id: 'govor',
    label: 'Formal speech',
    screen: 'govor',
    cefr: 'C1',
    category: 'formal-speech',
  },
  {
    id: 'prevodjenje',
    label: 'Translation traps',
    screen: 'prevodjenje',
    cefr: 'C1',
    category: 'translation',
  },
  {
    id: 'lektura',
    label: 'Proofreading',
    screen: 'lektura',
    cefr: 'C1',
    category: 'proofreading',
  },
  {
    id: 'analizamedija',
    label: 'Media analysis',
    screen: 'analizamedija',
    cefr: 'C1',
    category: 'media-analysis',
  },
  {
    id: 'pravo',
    label: 'Legal & administrative',
    screen: 'pravo',
    cefr: 'C1',
    category: 'legal',
  },
  {
    id: 'znanost',
    label: 'Science & technology',
    screen: 'znanost',
    cefr: 'C1',
    category: 'science',
  },
  {
    id: 'umjetnost',
    label: 'Arts & culture',
    screen: 'umjetnost',
    cefr: 'C1',
    category: 'arts',
  },
  {
    id: 'regionalizmi',
    label: 'Regional varieties',
    screen: 'regionalizmi',
    cefr: 'C1',
    category: 'regional',
  },
  {
    id: 'identitet',
    label: 'Language identity',
    screen: 'identitet',
    cefr: 'C1',
    category: 'identity',
  },
  {
    id: 'dijaspora',
    label: 'Diaspora & heritage',
    screen: 'dijaspora',
    cefr: 'C1',
    category: 'diaspora',
  },
];
