/**
 * sessionPools — static data for the Daily Session builder (7a extraction,
 * max-lines): the CEFR-annotated Priority-3 fill pool and the structural
 * difficulty tiers. Logic stays in useDailySession; this module is data only.
 */
import { C_LEVEL_DRILL_ENTRIES } from './drillPoolEntries';
import { PRACTICE_PROGRAMME_ENTRIES } from './practiceDrillEntries';

export type { CefrPoolEntry } from './drillPoolEntries';
import type { CefrPoolEntry } from './drillPoolEntries';

// Exported for the content-coverage CI gate (src/tests/content-coverage.test.ts),
// which tabulates this pool into a (CEFR level × skill group) matrix.
export const CEFR_EXERCISE_POOL: CefrPoolEntry[] = [
  { id: 'flashcards', label: 'Flashcards', screen: 'flashcards', cefr: 'A1', category: 'vocab-a2' },
  { id: 'mcgame', label: 'Quiz', screen: 'mcgame', cefr: 'A1', category: 'vocab-a2' },
  { id: 'match', label: 'Match Pairs', screen: 'match', cefr: 'A1', category: 'vocab-a2' },
  { id: 'review', label: 'SRS Review', screen: 'review', cefr: 'A1', category: 'vocab-a2' },
  { id: 'znam', label: 'Translate', screen: 'znam', cefr: 'A2', category: 'vocab-a2' },
  { id: 'qwords', label: 'Questions', screen: 'qwords', cefr: 'A2', category: 'vocab-a2' },
  // Gender is taught by the A1 'gender' animated lesson — the drill matches (7a).
  // Retagged from 'vocab-a2' (owner decision, 2026-08-28) so that pairing can
  // finally be expressed: 'vocab-a2' routes to `znam`, which is A2, so the
  // coupling for an A1 lesson resolved to a screen its learners cannot open.
  { id: 'genderdrill', label: 'Gender', screen: 'genderdrill', cefr: 'A1', category: 'gender' },
  { id: 'cloze', label: 'Sentence Cloze', screen: 'cloze', cefr: 'A2', category: 'vocab-a2' },
  { id: 'unjumble', label: 'Word Order', screen: 'unjumble', cefr: 'A2', category: 'word-order' },
  { id: 'prepdrill', label: 'Prepositions', screen: 'prepdrill', cefr: 'A2', category: 'genitive' },
  { id: 'negation', label: 'Negation', screen: 'negation', cefr: 'A2', category: 'genitive' },
  {
    id: 'genitivedrill',
    label: 'Genitive Case',
    screen: 'genitivedrill',
    // Cases are the core challenge for English speakers (no case system in
    // English), so the full padež system is introduced from A1 — every case
    // drill unlocks at A1 and reinforces at every level above (unlock is
    // cumulative). Deeper case applications (prepdrill/negation/dative/animateacc)
    // still phase in higher up.
    cefr: 'A1',
    category: 'genitive',
  },
  {
    id: 'nomdrill',
    label: 'Nominative Case',
    screen: 'nomdrill',
    cefr: 'A1',
    category: 'nominative',
  },
  // A1 verb + syntax (recommender audit, 2026-08-20). A1 TEACHES both —
  // `present-tense-verbs` and `pronouns-biti` are A1 lessons — but the lowest
  // verb drill in this pool was A2 (imperative/modal/conjdrill/verbdrill) and
  // the lowest syntax drill was A2 (unjumble/sentbuild/sentencetiles). A1 is the
  // only level that cannot inherit downward, so the practice simply did not
  // exist for the entry cohort: six cases drilled, "govorim" drilled zero times.
  {
    id: 'presentdrill',
    label: 'Present Tense',
    screen: 'presentdrill',
    cefr: 'A1',
    category: 'present-tense',
  },
  {
    id: 'wordorderdrill',
    label: 'Word Order',
    screen: 'wordorderdrill',
    cefr: 'A1',
    category: 'word-order',
  },
  {
    id: 'locdrill',
    label: 'Locative Case',
    screen: 'locdrill',
    cefr: 'A1',
    category: 'dative-locative',
  },
  {
    id: 'sentbuild',
    label: 'Build Sentences',
    screen: 'sentbuild',
    cefr: 'A2',
    category: 'word-order',
  },
  {
    id: 'sentencetiles',
    label: 'Tile Assembly',
    screen: 'sentencetiles',
    cefr: 'A2',
    category: 'word-order',
  },
  // Typing drills the same core vocab pool flashcards/mcgame serve at A1 (7a).
  { id: 'typing', label: 'Typing', screen: 'typing', cefr: 'A1', category: 'vocab-a2' },
  {
    id: 'aspectdrill',
    label: 'Aspect Drill',
    screen: 'aspectdrill',
    cefr: 'B1',
    category: 'aspect-imperfective',
  },
  {
    id: 'accusativedrill',
    label: 'Accusative Case',
    screen: 'accusativedrill',
    // Accusative (direct object) is foundational — introduced at A1 with the rest
    // of the case system (was B1). Content is basic direct objects.
    cefr: 'A1',
    category: 'accusative',
  },
  { id: 'future', label: 'Future Tense', screen: 'future', cefr: 'B1', category: 'future-tense' },
  {
    id: 'comparatives',
    label: 'Compare',
    screen: 'comparatives',
    cefr: 'B1',
    category: 'vocab-b1',
  },
  { id: 'clitic', label: 'Clitic Drill', screen: 'clitic', cefr: 'B2', category: 'clitics' },
  { id: 'dictation', label: 'Dictation', screen: 'dictation', cefr: 'B1', category: 'speaking' },
  // B2 — advanced grammar (existing drills surfaced into the session pool).
  { id: 'passive', label: 'Passive Voice', screen: 'passive', cefr: 'B2', category: 'passive' },
  {
    id: 'numcases',
    label: 'Numbers & Cases',
    screen: 'numcases',
    cefr: 'B2',
    category: 'numerals',
  },
  // B2 — net-new drills authored to clear the coverage floor.
  {
    id: 'participles',
    label: 'Participles',
    screen: 'participles',
    cefr: 'B2',
    category: 'participle',
  },
  {
    id: 'subordination',
    label: 'Subordinate Clauses',
    screen: 'subordination',
    cefr: 'B2',
    category: 'subordination',
  },
  {
    id: 'conditionaldrill',
    label: 'Conditional',
    screen: 'conditionaldrill',
    cefr: 'B2',
    category: 'conditional',
  },
  // B2 drill-pool expansion (A1-B2 content focus, 2026-08): the three B2
  // grammar units that were TAUGHT (grammarAdvanced animated lessons) but
  // never DRILLED — futur II, reported speech, prefixed verbs of motion.
  // B2 had 9 pool drills vs 30-41 at every level below.
  {
    id: 'futur2',
    label: 'Futur drugi',
    screen: 'futur2',
    cefr: 'B2',
    category: 'future-tense',
  },
  // B2 tranche 7 (2026-08-15): genitive prepositions, n/t-stem nouns, questions.
  {
    id: 'prijedlozigen',
    label: 'Prijedlozi s genitivom',
    screen: 'prijedlozigen',
    cefr: 'B2',
    category: 'genitive',
  },
  {
    id: 'imenicame',
    label: 'Imenice tipa ime',
    screen: 'imenicame',
    cefr: 'B2',
    category: 'nominative',
  },
  {
    id: 'pitanja',
    label: 'Umijeće pitanja',
    screen: 'pitanja',
    cefr: 'B2',
    category: 'word-order',
  },
  // B2 tranche 6 (2026-08-15): pronoun forms, cause/consequence, quantity.
  {
    id: 'zamjenice',
    label: 'Naglašene i nenaglašene',
    screen: 'zamjenice',
    cefr: 'B2',
    category: 'clitics',
  },
  {
    id: 'uzrocne',
    label: 'Uzrok i posljedica',
    screen: 'uzrocne',
    cefr: 'B2',
    category: 'subordination',
  },
  {
    id: 'kolicina',
    label: 'Izricanje količine',
    screen: 'kolicina',
    cefr: 'B2',
    category: 'genitive',
  },
  // B2 tranche 5 (2026-08-15): irregular plurals, spatial prepositions, comparison.
  {
    id: 'mnozina',
    label: 'Nepravilna množina',
    screen: 'mnozina',
    cefr: 'B2',
    category: 'nominative',
  },
  {
    id: 'prostorni',
    label: 'Prostorni prijedlozi',
    screen: 'prostorni',
    cefr: 'B2',
    category: 'accusative',
  },
  {
    id: 'stupnjevanje',
    label: 'Stupnjevanje',
    screen: 'stupnjevanje',
    cefr: 'B2',
    category: 'nominative',
  },
  // B2 tranche 4 (2026-08-15): aspect in commands, possessives, temporal clauses.
  {
    id: 'vidimperativ',
    label: 'Vid u zapovijedi',
    screen: 'vidimperativ',
    cefr: 'B2',
    category: 'aspect-perfective',
  },
  {
    id: 'posvojni',
    label: 'Posvojni pridjevi',
    screen: 'posvojni',
    cefr: 'B2',
    category: 'genitive',
  },
  {
    id: 'vremenske',
    label: 'Vremenske rečenice',
    screen: 'vremenske',
    cefr: 'B2',
    category: 'subordination',
  },
  {
    id: 'glagolskiprilozi',
    label: 'Glagolski prilozi',
    screen: 'glagolskiprilozi',
    cefr: 'B2',
    category: 'participle',
  },
  {
    id: 'aoristimperfekt',
    label: 'Aorist i imperfekt',
    screen: 'aoristimperfekt',
    cefr: 'B2',
    category: 'past-tense',
  },
  {
    id: 'rekcija',
    label: 'Glagolska rekcija',
    screen: 'rekcija',
    cefr: 'B2',
    // Retagged from 'dative-locative' (owner decision, 2026-08-28). The drill's
    // three modes are dativ / genitiv / prijedlozna — it is about which case a
    // VERB governs, across the whole case system, not about the locative. The
    // old tag routed it to `locdrill` and made the C1 verb-government lesson
    // impossible to couple honestly.
    category: 'verb-government',
  },
  // B2 tranche 2 (2026-08-15): impersonals, indefinite pronouns, numerals.
  {
    id: 'bezlicne',
    label: 'Bezlične konstrukcije',
    screen: 'bezlicne',
    cefr: 'B2',
    category: 'passive',
  },
  {
    id: 'neodredjene',
    label: 'Neodređene zamjenice',
    screen: 'neodredjene',
    cefr: 'B2',
    category: 'word-order',
  },
  {
    id: 'slaganjebrojeva',
    label: 'Slaganje brojeva',
    screen: 'slaganjebrojeva',
    cefr: 'B2',
    category: 'numerals',
  },
  ...C_LEVEL_DRILL_ENTRIES,
  ...PRACTICE_PROGRAMME_ENTRIES,
  {
    id: 'neizravni',
    label: 'Neizravni govor',
    screen: 'neizravni',
    cefr: 'B2',
    category: 'subordination',
  },
  {
    id: 'kretanje',
    label: 'Glagoli kretanja',
    screen: 'kretanje',
    cefr: 'B2',
    category: 'aspect-perfective',
  },
  // B1 — case drills surfaced into the pool (previously routable but never in the
  // daily session). Instrumental/dative also gave the adaptive picker only the
  // generic cloze screen; these add dedicated at-level practice.
  {
    id: 'instrumental',
    label: 'Instrumental Case',
    screen: 'instrumental',
    cefr: 'A1',
    category: 'instrumental',
  },
  { id: 'dative', label: 'Dative Case', screen: 'dative', cefr: 'B1', category: 'dative-locative' },
  {
    id: 'animateacc',
    label: 'Animate Accusative',
    screen: 'animateacc',
    cefr: 'B1',
    category: 'accusative',
  },
  // C1 — idiomatic, discourse-level and register/style competence.
  { id: 'idiomdrill', label: 'Idioms', screen: 'idiomdrill', cefr: 'C1', category: 'idioms' },
  {
    id: 'discourse',
    label: 'Discourse Connectors',
    screen: 'discourse',
    cefr: 'C1',
    category: 'discourse',
  },
  { id: 'register', label: 'Register', screen: 'register', cefr: 'C1', category: 'register' },
  {
    id: 'nominalization',
    label: 'Nominalization',
    screen: 'nominalization',
    cefr: 'C1',
    category: 'nominalization',
  },
  // Long-form listening — the audit's listening gap. Surfaced as CEFR-gated fill
  // candidates so the daily session serves comprehension of connected speech, not
  // just single sentences. 'listeningComprehension' uses the authored graded-story
  // bank (audio + transcript + quiz, from A1); 'aiListening' generates a fresh
  // dialogue/monologue at the user's level (B1+). Both feed recordTopicResult
  // ('listening') so weak listening resurfaces.
  {
    id: 'listeningComprehension',
    label: 'Listening',
    screen: 'listening_comprehension',
    cefr: 'A1',
    category: 'listening',
    adaptive: true, // graded-story audio bank spans A1-C2 per level
  },
  {
    id: 'aiListening',
    label: 'AI Listening',
    screen: 'ai_listening',
    cefr: 'B1',
    category: 'listening',
    adaptive: true, // generates a dialogue at the user's level
  },
  // ── 7a: A1 rotation expansion ─────────────────────────────────────────────
  // Existing self-contained practice screens (each awards/completes on finish;
  // AppRouter passes only goBack+award) registered so beginners rotate through
  // more than the original 10 drills. Screens stay reachable from Practice too.
  { id: 'boje', label: 'Colors', screen: 'boje', cefr: 'A1', category: 'vocab-a2' },
  { id: 'numtime', label: 'Numbers & Time', screen: 'numtime', cefr: 'A1', category: 'numerals' },
  {
    id: 'wordsprint',
    label: 'Word Sprint',
    screen: 'wordsprint',
    cefr: 'A1',
    category: 'vocab-a2',
  },
  // Retagged from 'nominative' (2026-08-29). PossessivesScreen drills
  // moj/moja/moje agreement — it is not a nominative drill, and the tag
  // meant the A1 `possessives` lesson could not be coupled to the drill
  // that already existed for it. Same class as the rekcija retag.
  { id: 'possess', label: 'Possessives', screen: 'possess', cefr: 'A1', category: 'possessives' },
  {
    id: 'cityloc',
    label: 'City Locative',
    screen: 'cityloc',
    cefr: 'A1',
    category: 'dative-locative',
  },
  {
    id: 'imperative',
    label: 'Imperative',
    screen: 'imperative',
    cefr: 'A2',
    category: 'present-tense',
  },
  { id: 'neggen', label: 'Negative Genitive', screen: 'neggen', cefr: 'A2', category: 'genitive' },
  {
    id: 'coloragree',
    label: 'Color Agreement',
    screen: 'coloragree',
    cefr: 'A2',
    category: 'nominative',
  },
  // C2 — the pool's first C2 grammar-structure drill: before this, the
  // guaranteed-grammar slot could only offer C1 to a C2 user. Covers the
  // C2 animated lessons' ground: aorist/imperfekt/pluskvamperfekt
  // recognition, administrative nominal style, and comma rules.
  {
    id: 'c2drill',
    label: 'C2 Structure',
    screen: 'c2drill',
    cefr: 'C2',
    category: 'nominalization',
  },
  {
    id: 'gerunddrill',
    label: 'Glagolski prilozi',
    screen: 'gerunddrill',
    cefr: 'C2',
    category: 'participle',
  },
  {
    id: 'preciznost',
    label: 'Preciznost izraza',
    screen: 'preciznost',
    cefr: 'C2',
    category: 'precision',
  },
  // ── Wave 1: session catchment expansion (2026-07 eligibility audit) ────────
  // Screens that already met the session contract (goBack+award props, bounded
  // drill/quiz, completion signal via completeExercise or the useAward path)
  // but were never registered, so daily-session users could not reach them.
  // Registration only — no screen code changed. The discovery slot (see
  // useDailySession Priority 3) rotates these in by least-recently-served.
  { id: 'declension', label: 'Declension', screen: 'declension', cefr: 'A2', category: 'genitive' },
  { id: 'padezi', label: 'Cases Overview', screen: 'padezi', cefr: 'A2', category: 'genitive' },
  { id: 'vocative', label: 'Vocative Case', screen: 'vocative', cefr: 'A1', category: 'vocative' },
  {
    id: 'ordinals',
    label: 'Ordinal Numbers',
    screen: 'ordinals',
    cefr: 'A2',
    category: 'numerals',
  },
  { id: 'pronouns', label: 'Pronouns', screen: 'pronouns', cefr: 'A2', category: 'clitics' },
  { id: 'modal', label: 'Modal Verbs', screen: 'modal', cefr: 'A2', category: 'present-tense' },
  {
    id: 'conjdrill',
    label: 'Conjugation',
    screen: 'conjdrill',
    cefr: 'A2',
    category: 'present-tense',
  },
  {
    id: 'verbdrill',
    label: 'Verb Drill',
    screen: 'verbdrill',
    cefr: 'A2',
    category: 'present-tense',
  },
  {
    id: 'fillstory',
    label: 'Fill the Story',
    screen: 'fillstory',
    cefr: 'A2',
    category: 'word-order',
  },
  {
    id: 'emogender',
    label: 'Emotion Gender',
    screen: 'emogender',
    cefr: 'A2',
    category: 'nominative',
  },
  {
    id: 'profgender',
    label: 'Profession Gender',
    screen: 'profgender',
    cefr: 'A2',
    category: 'nominative',
  },
  {
    id: 'proncontrast',
    label: 'Sound Contrast',
    screen: 'proncontrast',
    cefr: 'A2',
    category: 'speaking',
  },
  {
    id: 'vocabscenes',
    label: 'Vocab Scenes',
    screen: 'vocabscenes',
    cefr: 'A2',
    category: 'vocab-a2',
  },
  {
    id: 'reflexive',
    label: 'Reflexive Verbs',
    screen: 'reflexive',
    cefr: 'B1',
    category: 'present-tense',
  },
  { id: 'tenseflip', label: 'Tense Flip', screen: 'tenseflip', cefr: 'B1', category: 'past-tense' },
  {
    id: 'casetransformer',
    label: 'Case Transformer',
    screen: 'casetransformer',
    cefr: 'B1',
    category: 'genitive',
  },
  {
    id: 'relpron',
    label: 'Relative Pronouns',
    screen: 'relpron',
    cefr: 'B1',
    category: 'subordination',
  },
  { id: 'svojmoj', label: 'Svoj vs Moj', screen: 'svojmoj', cefr: 'B1', category: 'nominative' },
  {
    id: 'diminutives',
    label: 'Diminutives',
    screen: 'diminutives',
    cefr: 'B1',
    category: 'vocab-b1',
  },
  {
    id: 'wordfamilies',
    label: 'Word Families',
    screen: 'wordfamilies',
    cefr: 'B1',
    category: 'vocab-b1',
  },
  {
    id: 'collocations',
    label: 'Collocations',
    screen: 'collocations',
    cefr: 'B1',
    category: 'vocab-b1',
  },
  { id: 'riddles', label: 'Riddles', screen: 'riddles', cefr: 'B1', category: 'vocab-b1' },
  { id: 'logicquiz', label: 'Logic Quiz', screen: 'logicquiz', cefr: 'B1', category: 'vocab-b1' },
  {
    id: 'translate_drills',
    label: 'Translate Drills',
    screen: 'translate_drills',
    cefr: 'B1',
    category: 'vocab-b1',
  },
  {
    id: 'wordform',
    label: 'Word Formation',
    screen: 'wordform',
    cefr: 'B2',
    category: 'nominalization',
  },
  // ── Wave 2: the two culture-group screens that are really graded drills ────
  // Both were stranded in OUTSIDE_SESSION's culture block but carry a full
  // quiz + award completion signal, so they belong in the graded pool (not the
  // auto-complete Croatia rotation). Registration only — no screen code changed.
  // Alka: 9-question gamified vocab ride (Sinjska Alka theme), awards via
  // useAlkaRide's onXp callback.
  { id: 'alka', label: 'Alka Challenge', screen: 'alka', cefr: 'A1', category: 'vocab-a2' },
  // Sibilarization (k→c, g→z, h→s) fires in dative/locative plural — the drill
  // ends with a gc bump + award, a real completion signal.
  {
    id: 'sibil',
    label: 'Sound Changes',
    screen: 'sibil',
    cefr: 'A2',
    category: 'dative-locative',
  },
  // ── Wave 3: production/AI/utility screens with real bounded completion ─────
  // Graded reader: catalog A1–C2, reader → comprehension quiz → award on
  // results. The daily session can now serve the extensive-reading corpus.
  {
    id: 'gradedreader',
    label: 'Graded Reader',
    screen: 'graded_input',
    cefr: 'A1',
    category: 'reading',
  },
  // AI story: one bounded personalized story (A2–B1 prompt), single quota-gated
  // /api/maja call per story, explicit Done award. Same cost posture as
  // aiListening (already in pool).
  {
    id: 'aistory',
    label: 'AI Story',
    screen: 'ai_story',
    cefr: 'A2',
    category: 'reading',
    adaptive: true, // prompt tracks getUserCefr (AIStoryScreen)
  },
  // Listening quiz: 10-question MC over the LISTEN bank. Cold launch is covered
  // by the dedicated launcher branch (setLsInitQ) — ScreenGuard otherwise.
  {
    id: 'listeninggame',
    label: 'Listening Quiz',
    screen: 'listening',
    cefr: 'A1',
    category: 'listening',
  },
  // SR-prioritized conjugation drill (15 cells). Bare launch defaults to
  // present-tense; completion via signalSessionCompleteIfActive('conjpractice').
  // Already adaptive-reachable — registering closes the coverage-gate gap.
  {
    id: 'conjpractice',
    label: 'Smart Conjugation',
    screen: 'conjpractice',
    cefr: 'A2',
    category: 'present-tense',
  },
  // Phoneme practice (č/ć/š/ž/lj/nj): awards on each "I've got it"; the
  // all-mastered mount path signals session completion explicitly (Wave 3).
  {
    id: 'phonemes',
    label: 'Phoneme Practice',
    screen: 'phoneme_practice',
    cefr: 'A1',
    category: 'speaking',
  },
  // Scripted role-play scenes (B1+): bounded lines → "Scene complete"; awards
  // once per scenario reached-end (Wave 3 wiring — mic optional, reveal path).
  {
    id: 'roleplay',
    label: 'Roleplay Scenes',
    screen: 'roleplay',
    cefr: 'B1',
    category: 'speaking',
  },
  // ── Wave 4a: reference-group screens with REAL quiz + award completion ─────
  // Verified by the 35-screen eligibility audit; registration only, no screen
  // code changed. All launch cold with goBack(+award) and finish with a guarded
  // award (several via the ≥75%-gated completeLesson/completeExercise helpers).
  { id: 'alphabet', label: 'Alphabet', screen: 'alphabet', cefr: 'A1', category: 'vocab-a2' },
  { id: 'convmatch', label: 'Reply Match', screen: 'convmatch', cefr: 'A2', category: 'vocab-a2' },
  { id: 'falsefr', label: 'False Friends', screen: 'falsefr', cefr: 'A2', category: 'vocab-a2' },
  { id: 'phonology', label: 'Sound System', screen: 'phonology', cefr: 'A1', category: 'speaking' },
  {
    id: 'padezifull',
    label: 'Full Declension',
    screen: 'padezifull',
    cefr: 'B1',
    category: 'genitive',
  },
  {
    id: 'aspectlesson',
    label: 'Verb Aspect',
    screen: 'aspect',
    cefr: 'B1',
    category: 'aspect-imperfective',
  },
  {
    id: 'conditionallesson',
    label: 'Conditional Mood',
    screen: 'conditional',
    cefr: 'B1',
    category: 'conditional',
  },
  { id: 'tenses', label: 'Tense Trainer', screen: 'tenses', cefr: 'B1', category: 'past-tense' },
  { id: 'texting', label: 'Texting Slang', screen: 'texting', cefr: 'B1', category: 'vocab-b1' },
  {
    id: 'formalregister',
    label: 'Formal Register',
    screen: 'formalregister',
    cefr: 'B1',
    category: 'register',
  },
  {
    id: 'impersonal',
    label: 'Impersonal Se',
    screen: 'impersonal',
    cefr: 'B2',
    category: 'passive',
  },
  { id: 'techvoc', label: 'Tech Vocabulary', screen: 'techvoc', cefr: 'B2', category: 'vocab-b2' },
  {
    id: 'pitchaccent',
    label: 'Pitch Accents',
    screen: 'pitchaccent',
    cefr: 'C1',
    category: 'speaking',
  },
  // ── Wave 4b: bounded bilingual browse screens (reference contract) ─────────
  // No self-grading completion — they complete on return (max one per session).
  {
    id: 'opposites',
    label: 'Opposites',
    screen: 'opposites',
    cefr: 'A1',
    category: 'vocab-a2',
    reference: true,
  },
  {
    id: 'clothes',
    label: 'Clothing Vocab',
    screen: 'clothes',
    cefr: 'A1',
    category: 'vocab-a2',
    reference: true,
  },
  {
    id: 'weather',
    label: 'Weather Vocab',
    screen: 'weather',
    cefr: 'A1',
    category: 'vocab-a2',
    reference: true,
  },
  {
    id: 'bodydesc',
    label: 'Body & Appearance',
    screen: 'bodydesc',
    cefr: 'A2',
    category: 'vocab-a2',
    reference: true,
  },
  {
    id: 'countries',
    label: 'Countries',
    screen: 'countries',
    cefr: 'A2',
    category: 'vocab-a2',
    reference: true,
  },
  {
    id: 'professions',
    label: 'Professions',
    screen: 'professions',
    cefr: 'A2',
    category: 'vocab-a2',
    reference: true,
  },
  {
    id: 'lifeevents',
    label: 'Life Events',
    screen: 'lifeevents',
    cefr: 'A2',
    category: 'vocab-a2',
    reference: true,
  },
  {
    id: 'brzalice',
    label: 'Tongue Twisters',
    screen: 'brzalice',
    cefr: 'A2',
    category: 'speaking',
    reference: true,
  },
  {
    id: 'tivicompare',
    label: 'Ti vs Vi',
    screen: 'tivicompare',
    cefr: 'A2',
    category: 'register',
    reference: true,
  },
  {
    id: 'colorquirk',
    label: 'Color Idioms',
    screen: 'colorquirk',
    cefr: 'B1',
    category: 'idioms',
    reference: true,
  },
  {
    id: 'idioms',
    label: 'Idioms & Slang',
    screen: 'idioms',
    cefr: 'B1',
    category: 'idioms',
    reference: true,
  },
  // ── Wave 5: animated lessons / long-form learn content ─────────────────────
  // The rotating animated-lesson slot: one route ('animlesson') serving the
  // 45-lesson A1–C2 catalog. The session launcher picks the least-recently-
  // served lesson unlocked at the session's CEFR (see useScreenLauncher);
  // completion = award on the summary slide.
  {
    id: 'animlesson',
    label: 'Animated Lesson',
    screen: 'animlesson',
    cefr: 'A1',
    category: 'grammar-lesson',
  },
  // Fleeting-a / l→o drill: 18-question gated MCQ (completeExercise, 75%).
  { id: 'fleetinga', label: 'Fleeting A', screen: 'fleetinga', cefr: 'C1', category: 'nominative' },
  // Tabbed lesson+quiz hybrids (same class as formalregister/impersonal, Wave 4):
  // completion via their Vježba quiz (gated 75% / 60% respectively).
  {
    id: 'future_tense_lesson',
    label: 'Future Tense Lesson',
    screen: 'future_tense_lesson',
    cefr: 'A2',
    category: 'future-tense',
  },
  {
    id: 'past_tense_lesson',
    label: 'Past Tense Lesson',
    screen: 'past_tense_lesson',
    cefr: 'A2',
    category: 'past-tense',
  },
  // AI video lesson: topic pick → generated dialogue + quiz; same bounded
  // quota-gated posture as aiListening.
  {
    id: 'video_lesson',
    label: 'Video Lesson',
    screen: 'video_lesson',
    cefr: 'B1',
    category: 'listening',
  },
  // ── Wave 6: in-screen drills found inside "hub" screens ────────────────────
  // Smart Review: bounded adaptive round over the user's SRS + mistake data;
  // the no-data empty state signals session completion (Wave-6 wiring).
  {
    id: 'adaptive_review',
    label: 'Smart Review',
    screen: 'adaptive_review',
    cefr: 'A1',
    category: 'vocab-a2',
  },
  // Mistake Review: bounded flashcard round over the mistake deck; empty-log
  // and no-master finishes signal session completion (Wave-6 wiring).
  { id: 'mistakes', label: 'Mistake Review', screen: 'mistakes', cefr: 'A1', category: 'vocab-a2' },
  // Top-500 frequency words: learned-word grid + 5-question quiz; per-word award.
  {
    id: 'frequency_track',
    label: 'Frequency Words',
    screen: 'frequency_track',
    cefr: 'A1',
    category: 'vocab-a2',
  },
  // Per-letter pronunciation rounds (3-question check + mark-as-practiced award).
  {
    id: 'pronunciation_course',
    label: 'Pronunciation',
    screen: 'pronunciation_course',
    cefr: 'A1',
    category: 'speaking',
  },
  // ── Wave 7: AI-cost screens admitted per owner decision (option 1) ─────────
  // All endpoints are requireAuthedAI/_aiQuota-gated (300-unit daily ceiling),
  // so per-user spend stays bounded; the owner explicitly accepted the cost.
  // Full AI conversation with Maja: per-turn cost; awards on End & Evaluate
  // (≥2 exchanges) or the bounded write mode's submit.
  { id: 'aiconvo', label: 'AI Conversation', screen: 'aiconvo', cefr: 'B1', category: 'speaking' },
  // AI grammar lesson generator (23 topics, level-aware): one generation per
  // lesson, awards on quiz submit.
  {
    id: 'grammarexplainer',
    label: 'AI Grammar Lesson',
    screen: 'grammarexplainer',
    cefr: 'A2',
    category: 'grammar-lesson',
  },
  // Personalized micro-lesson over the user's weak words: one generation per
  // lesson, awards on results; the no-weak-words/error phase signals session
  // completion (Wave-7 wiring).
  {
    id: 'micro_lesson',
    label: 'Micro Lesson',
    screen: 'micro_lesson',
    cefr: 'A2',
    category: 'vocab-a2',
    adaptive: true, // /api/micro-lesson generates at the user's level
  },
  // Grammar X-Ray reader: tap-a-word AI analysis (opt-in, cached per word);
  // no self-grading → reference contract (auto-complete, max one per session).
  {
    id: 'grammarreader',
    label: 'Grammar X-Ray',
    screen: 'grammarreader',
    cefr: 'B1',
    category: 'reading',
    reference: true,
    adaptive: true, // reader passages are per-level buckets (GrammarReader)
  },
  // ── Wave 8: AI tutors ──────────────────────────────────────────────────────
  // Both award on their end-of-session/debrief exits. (Formerly premium-gated;
  // the subscription system was removed 2026-08 — they serve every user.)
  {
    id: 'maja',
    label: 'Maja AI Tutor',
    screen: 'maja',
    cefr: 'A2',
    category: 'speaking',
  },
  {
    id: 'live_tutor',
    label: 'Live Tutor',
    screen: 'live_tutor',
    cefr: 'A2',
    category: 'speaking',
  },
  // ── Wave 9: redesigned-for-completion screens (owner decision, option 3) ───
  // Story Mode gained an explicit Finish button (the organic scroll+tap award
  // could silently never fire); AI cost is the approved quota posture.
  {
    id: 'storymode',
    label: 'Story Mode',
    screen: 'storymode',
    cefr: 'A2',
    category: 'reading',
    adaptive: true, // scene banks are per-level (StoryModeScreen useStats)
  },
  // Pronunciation check: mic-required (builder-filtered); finishing now signals
  // session completion even when every phrase was skipped.
  {
    id: 'pronunciation_assess',
    label: 'Pronunciation Check',
    screen: 'pronunciation_assess',
    cefr: 'A1',
    category: 'speaking',
    micRequired: true,
  },
];
export { EXERCISE_DIFFICULTY } from './exerciseDifficulty';
