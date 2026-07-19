/**
 * sessionPools — static data for the Daily Session builder (7a extraction,
 * max-lines): the CEFR-annotated Priority-3 fill pool and the structural
 * difficulty tiers. Logic stays in useDailySession; this module is data only.
 */
import type { SkillCategory } from './adaptive';

/** CEFR-annotated exercise pool for Priority 3 fill */
export interface CefrPoolEntry {
  id: string;
  label: string;
  screen: string;
  cefr: string;
  category: SkillCategory;
}
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
  { id: 'genderdrill', label: 'Gender', screen: 'genderdrill', cefr: 'A1', category: 'vocab-a2' },
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
  },
  {
    id: 'aiListening',
    label: 'AI Listening',
    screen: 'ai_listening',
    cefr: 'B1',
    category: 'listening',
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
  { id: 'possess', label: 'Possessives', screen: 'possess', cefr: 'A1', category: 'nominative' },
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
];

// Structural difficulty tier per session exercise type (1 = recognition …
// 5 = open production), mirroring exerciseMeta's scale. Used to bias the daily
// Priority-3 fill toward the user's ability so content scales as they advance
// (defect #1: difficulty was inert — nothing consumed difficulty tiers). Any id
// not listed defaults to tier 3.
export const EXERCISE_DIFFICULTY: Record<string, number> = {
  flashcards: 1,
  mcgame: 1,
  match: 1,
  review: 2,
  qwords: 2,
  genderdrill: 2,
  nomdrill: 2,
  unjumble: 2,
  negation: 2,
  znam: 3,
  cloze: 3,
  prepdrill: 3,
  genitivedrill: 3,
  locdrill: 3,
  sentencetiles: 3,
  typing: 3,
  accusativedrill: 3,
  future: 3,
  comparatives: 3,
  dictation: 3,
  sentbuild: 4,
  aspectdrill: 4,
  clitic: 4,
  instrumental: 3,
  dative: 3,
  animateacc: 3,
  numcases: 4,
  passive: 4,
  participles: 4,
  subordination: 4,
  conditionaldrill: 4,
  idiomdrill: 4,
  discourse: 4,
  register: 4,
  nominalization: 4,
  listeningComprehension: 3,
  aiListening: 4,
  // 7a additions — recognition/matching games tier 1-2, guided drills tier 2-3.
  boje: 1,
  wordsprint: 1,
  numtime: 2,
  possess: 2,
  cityloc: 2,
  coloragree: 2,
  imperative: 3,
  neggen: 3,
  c2drill: 5,
  // Wave 1 additions — recognition games tier 2, guided drills tier 3.
  declension: 3,
  padezi: 3,
  vocative: 3,
  ordinals: 2,
  pronouns: 2,
  modal: 2,
  conjdrill: 3,
  verbdrill: 3,
  fillstory: 3,
  emogender: 2,
  profgender: 2,
  proncontrast: 2,
  vocabscenes: 2,
  reflexive: 3,
  tenseflip: 3,
  casetransformer: 3,
  relpron: 3,
  svojmoj: 3,
  diminutives: 2,
  wordfamilies: 3,
  collocations: 3,
  riddles: 2,
  logicquiz: 2,
  translate_drills: 3,
  wordform: 3,
};
