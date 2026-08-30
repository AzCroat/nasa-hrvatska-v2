// Single source of truth for screen completion policy.
//
// One row per `vs` completion key. `completeExercise` (src/hooks/useExerciseCompletion.ts)
// reads this to decide HOW a screen counts as complete:
//   gated   — score-bearing: credited only at >= LESSON_PASS_THRESHOLD (75%)
//   effort  — productive task (no MCQ correctness): credited on genuine finish
//   passive — reference/reading: credited on read/dwell
//
// vsKey ALWAYS equals the map key (no renames) so existing user progress is preserved.
// statKind/activityType/questKind for not-yet-migrated rows are best-known from the audit
// and are re-verified against each component when that screen is wired up (Phases 1–4).

export type StatKind = 'lc' | 'gc' | 'sp' | 'rc';

export type CompletionPolicy =
  | { kind: 'gated'; statKind: StatKind }
  | { kind: 'effort'; statKind: StatKind }
  | { kind: 'passive'; statKind: StatKind };

export interface ExerciseEntry {
  vsKey: string;
  policy: CompletionPolicy;
  /** markQuest id (e.g. 'grammar' | 'vocab' | 'speaking' | 'listening' | 'culture'). */
  questKind?: string;
  /** award() activityType (e.g. 'grammar' | 'vocabulary' | 'speaking' | 'lesson'). */
  activityType?: string;
}

const g = (statKind: StatKind, questKind?: string, activityType?: string): ExerciseEntry => ({
  vsKey: '',
  policy: { kind: 'gated', statKind },
  questKind,
  activityType,
});
const e = (statKind: StatKind, questKind?: string, activityType?: string): ExerciseEntry => ({
  vsKey: '',
  policy: { kind: 'effort', statKind },
  questKind,
  activityType,
});
const p = (statKind: StatKind): ExerciseEntry => ({
  vsKey: '',
  policy: { kind: 'passive', statKind },
});

const RAW: Record<string, ExerciseEntry> = {
  // ── Passive lessons gated by PRs #36–#38 (completeLesson) ──
  declension: g('gc', 'grammar', 'lesson'),
  tenses: g('gc', 'grammar', 'lesson'),
  conditional: g('gc', 'grammar', 'lesson'),
  impersonal: g('gc', 'grammar', 'lesson'),
  formalregister: g('gc', 'grammar', 'lesson'),
  future_tense_lesson: g('gc', 'grammar', 'lesson'),
  wordform: g('lc', 'grammar', 'lesson'),
  diminutives: g('lc', 'grammar', 'lesson'),
  phonology: g('lc', 'grammar', 'lesson'),

  // ── Gated score-bearing grammar drills (Phases 1–2) ──
  accusative: g('gc', 'grammar', 'grammar'),
  animateacc: g('gc', 'grammar', 'grammar'),
  aspect: g('gc', 'grammar', 'grammar'), // shared by AspectScreen (lesson) + AspectDrillScreen — both gated
  clitic: g('gc', 'grammar', 'grammar'),
  cloze: g('gc', 'grammar', 'grammar'),
  conjugation: g('gc', 'grammar', 'grammar'),
  comparatives: g('gc', 'grammar', 'grammar'),
  'conv-match': g('gc', 'grammar', 'grammar'),
  dative: g('gc', 'grammar', 'grammar'),
  'fill-story': g('gc', 'grammar', 'grammar'),
  fleetinga: g('gc', 'grammar', 'grammar'),
  'future-tense': g('gc', 'grammar', 'grammar'),
  gender: g('gc', 'grammar', 'grammar'),
  pluraldrill: g('gc', 'grammar', 'grammar'),
  negacija: g('gc', 'grammar', 'grammar'),
  pridjevi: g('gc', 'grammar', 'grammar'),
  pokazne: g('gc', 'grammar', 'grammar'),
  imatidrill: g('gc', 'grammar', 'grammar'),
  imperativ: g('gc', 'grammar', 'grammar'),
  upitne: g('gc', 'grammar', 'grammar'),
  mjesto: g('gc', 'grammar', 'grammar'),
  vrijemea1: g('gc', 'grammar', 'grammar'),
  pozdravi: g('gc', 'grammar', 'grammar'),
  svojdrill: g('gc', 'grammar', 'grammar'),
  objekt: g('gc', 'grammar', 'grammar'),
  mnozinapadezi: g('gc', 'grammar', 'grammar'),
  kolicinaa2: g('gc', 'grammar', 'grammar'),
  komparacija: g('gc', 'grammar', 'grammar'),
  infda: g('gc', 'grammar', 'grammar'),
  prepricavanje: g('gc', 'grammar', 'grammar'),
  bezlicnob1: g('gc', 'grammar', 'grammar'),
  vrijemeklauze: g('gc', 'grammar', 'grammar'),
  uzrokb1: g('gc', 'grammar', 'grammar'),
  isklonidbab2: g('gc', 'grammar', 'grammar'),
  prilozib2: g('gc', 'grammar', 'grammar'),
  negacijab2: g('gc', 'grammar', 'grammar'),
  vidglagoli: g('gc', 'grammar', 'grammar'),
  intenzitet: g('gc', 'grammar', 'grammar'),
  usporedbec1: g('gc', 'grammar', 'grammar'),
  tvorbac1: g('gc', 'grammar', 'grammar'),
  deminutivi: g('gc', 'grammar', 'grammar'),
  sazimanje: g('gc', 'grammar', 'grammar'),
  obitelj: g('gc', 'grammar', 'grammar'),
  zemlje: g('gc', 'grammar', 'grammar'),
  hrana: g('gc', 'grammar', 'grammar'),
  grad: g('gc', 'grammar', 'grammar'),
  meteo: g('gc', 'grammar', 'grammar'),
  svidjanje: g('gc', 'grammar', 'grammar'),
  dom: g('gc', 'grammar', 'grammar'),
  zdravlje: g('gc', 'grammar', 'grammar'),
  odjeca: g('gc', 'grammar', 'grammar'),
  izgled: g('gc', 'grammar', 'grammar'),
  zanimanja: g('gc', 'grammar', 'grammar'),
  skola: g('gc', 'grammar', 'grammar'),
  hobiji: g('gc', 'grammar', 'grammar'),
  putovanje: g('gc', 'grammar', 'grammar'),
  dogovor: g('gc', 'grammar', 'grammar'),
  blagdani: g('gc', 'grammar', 'grammar'),
  misljenje: g('gc', 'grammar', 'grammar'),
  osjecaji: g('gc', 'grammar', 'grammar'),
  zalbe: g('gc', 'grammar', 'grammar'),
  salter: g('gc', 'grammar', 'grammar'),
  najam: g('gc', 'grammar', 'grammar'),
  zivotopis: g('gc', 'grammar', 'grammar'),
  mediji: g('gc', 'grammar', 'grammar'),
  tehnologija: g('gc', 'grammar', 'grammar'),
  priroda: g('gc', 'grammar', 'grammar'),
  kuhanje: g('gc', 'grammar', 'grammar'),
  genitive: g('gc', 'grammar', 'grammar'),
  imperative: g('gc', 'grammar', 'grammar'),
  // C2 structure drill (literary tenses / nominal style / comma) — first C2
  // grammar drill in the session pool.
  c2drill: g('gc', 'grammar', 'grammar'),
  // C2 drill-pool expansion: verbal adverbs + formal-register precision.
  gerunddrill: g('gc', 'grammar', 'grammar'),
  preciznost: g('gc', 'grammar', 'grammar'),
  // B2 drill-pool expansion: futur II, reported speech, verbs of motion.
  futur2: g('gc', 'grammar', 'grammar'),
  // B2 tranche 2 (2026-08-15): impersonals, indefinite pronouns, numerals.
  bezlicne: g('gc', 'grammar', 'grammar'),
  neodredjene: g('gc', 'grammar', 'grammar'),
  slaganjebrojeva: g('gc', 'grammar', 'grammar'),
  // B2 tranche 3 (2026-08-15): verbal adverbs, narrative past tenses, rekcija.
  glagolskiprilozi: g('gc', 'grammar', 'grammar'),
  aoristimperfekt: g('gc', 'grammar', 'grammar'),
  rekcija: g('gc', 'grammar', 'grammar'),
  // Tranche 4 (2026-08-15): B2 aspect/possessives/temporals, C1 numerals/
  // purpose/agreement, C2 clitics/academic/punctuation.
  vidimperativ: g('gc', 'grammar', 'grammar'),
  posvojni: g('gc', 'grammar', 'grammar'),
  vremenske: g('gc', 'grammar', 'grammar'),
  // Tranche 5 (2026-08-15): B2 plurals/prepositions/comparison, C1 participle/
  // infinitive/aspect-pairs, C2 capitalization/abbreviations/normative traps.
  mnozina: g('gc', 'grammar', 'grammar'),
  prostorni: g('gc', 'grammar', 'grammar'),
  stupnjevanje: g('gc', 'grammar', 'grammar'),
  trpni: g('gc', 'grammar', 'grammar'),
  infinitivda: g('gc', 'grammar', 'grammar'),
  vidskiparovi: g('gc', 'grammar', 'grammar'),
  velikoslovo: g('gc', 'grammar', 'grammar'),
  kratice: g('gc', 'grammar', 'grammar'),
  lektor: g('gc', 'grammar', 'grammar'),
  // Tranche 6 (2026-08-15): B2 pronouns/cause/quantity, C1 concessives/
  // pluperfect/quantifiers, C2 journalese/figurative/modality.
  zamjenice: g('gc', 'grammar', 'grammar'),
  uzrocne: g('gc', 'grammar', 'grammar'),
  kolicina: g('gc', 'grammar', 'grammar'),
  dopusne: g('gc', 'grammar', 'grammar'),
  pluskvamperfekt: g('gc', 'grammar', 'grammar'),
  savsvaki: g('gc', 'grammar', 'grammar'),
  novinski: g('gc', 'grammar', 'grammar'),
  prenesena: g('gc', 'grammar', 'grammar'),
  modalnost: g('gc', 'grammar', 'grammar'),
  // Tranche 7 (2026-08-15): B2 gen-prepositions/n-stems/questions, C1
  // biaspectuals/i-declension/time, C2 strata/correlatives/eponyms.
  prijedlozigen: g('gc', 'grammar', 'grammar'),
  imenicame: g('gc', 'grammar', 'grammar'),
  pitanja: g('gc', 'grammar', 'grammar'),
  dvovidni: g('gc', 'grammar', 'grammar'),
  isklonidba: g('gc', 'grammar', 'grammar'),
  vrijemeizraz: g('gc', 'grammar', 'grammar'),
  slojevi: g('gc', 'grammar', 'grammar'),
  parniveznici: g('gc', 'grammar', 'grammar'),
  eponimi: g('gc', 'grammar', 'grammar'),
  // Tranche 8 (2026-08-15): C1 wishes/comparisons/approximation, C2
  // politeness/calques/verbs-of-speaking.
  zelje: g('gc', 'grammar', 'grammar'),
  usporedbe: g('gc', 'grammar', 'grammar'),
  priblizno: g('gc', 'grammar', 'grammar'),
  uljudnost: g('gc', 'grammar', 'grammar'),
  kalkovi: g('gc', 'grammar', 'grammar'),
  glagoligovorenja: g('gc', 'grammar', 'grammar'),
  // Tranche 9 (2026-08-15): proverbs, figures, documents — program complete.
  poslovice: g('gc', 'grammar', 'grammar'),
  stilskefigure: g('gc', 'grammar', 'grammar'),
  dopisi: g('gc', 'grammar', 'grammar'),
  sklonidbabrojeva: g('gc', 'grammar', 'grammar'),
  namjera: g('gc', 'grammar', 'grammar'),
  srocnost: g('gc', 'grammar', 'grammar'),
  enklitike: g('gc', 'grammar', 'grammar'),
  akademski: g('gc', 'grammar', 'grammar'),
  interpunkcija: g('gc', 'grammar', 'grammar'),
  // C1 drill-pool expansion (2026-08-14): collocations, word order, aspect nuance.
  kolokacije: g('gc', 'grammar', 'grammar'),
  // C1 tranche 2 (2026-08-15): se-verbs, name declension, prepositions.
  povratni: g('gc', 'grammar', 'grammar'),
  sklonidbaimena: g('gc', 'grammar', 'grammar'),
  prijedlozni: g('gc', 'grammar', 'grammar'),
  // C1 tranche 3 (2026-08-15): conditionals, definiteness, dates and time.
  pogodbene: g('gc', 'grammar', 'grammar'),
  odredjenost: g('gc', 'grammar', 'grammar'),
  datumi: g('gc', 'grammar', 'grammar'),
  // C2 drill-pool expansion (2026-08-15): phraseology, word formation, synonymy.
  frazeologija: g('gc', 'grammar', 'grammar'),
  // C2 tranche 2 (2026-08-15): loanwords, sound changes, admin register.
  posudjenice: g('gc', 'grammar', 'grammar'),
  glasovnepromjene: g('gc', 'grammar', 'grammar'),
  administrativni: g('gc', 'grammar', 'grammar'),
  // C2 tranche 3 (2026-08-15): orthography, connectors, colloquial register.
  pravopis: g('gc', 'grammar', 'grammar'),
  konektori: g('gc', 'grammar', 'grammar'),
  razgovorni: g('gc', 'grammar', 'grammar'),
  tvorbarijeci: g('gc', 'grammar', 'grammar'),
  sinonimija: g('gc', 'grammar', 'grammar'),
  emfaza: g('gc', 'grammar', 'grammar'),
  vidnijanse: g('gc', 'grammar', 'grammar'),
  neizravni: g('gc', 'grammar', 'grammar'),
  kretanje: g('gc', 'grammar', 'grammar'),
  instrumental: g('gc', 'grammar', 'grammar'),
  locative: g('gc', 'grammar', 'grammar'),
  negation: g('gc', 'grammar', 'grammar'),
  negationgen: g('gc', 'grammar', 'grammar'),
  nominative: g('gc', 'grammar', 'grammar'),
  'numbers-cases': g('gc', 'grammar', 'grammar'),
  numtime: g('gc', 'grammar', 'grammar'),
  passive: g('gc', 'grammar', 'grammar'),
  possessives: g('gc', 'grammar', 'grammar'),
  preposition: g('gc', 'grammar', 'grammar'),
  production: g('gc', 'grammar', 'grammar'),
  pronouns: g('gc', 'grammar', 'grammar'),
  reflexive: g('gc', 'grammar', 'grammar'),
  'sentence-builder': g('gc', 'grammar', 'grammar'),
  'sentence-tile': g('gc', 'grammar', 'grammar'),
  translate: g('gc', 'vocab', 'grammar'),
  typing: g('gc', 'vocab', 'vocabulary'),
  unjumble: g('gc', 'grammar', 'grammar'),
  'verb-drill': g('gc', 'grammar', 'grammar'),
  'city-locative': g('gc', 'grammar', 'grammar'),

  // ── Gated vocab games (Phase 2) ──
  collocations: g('gc', 'vocab', 'vocabulary'),
  boje: g('gc', 'vocab', 'vocabulary'),
  znam: g('gc', 'vocab', 'vocabulary'),
  // MatchGame ends only when EVERY pair is matched — the score is 100% by
  // construction, so a 75% gate could never bind. Same reasoning as wordsprint:
  // there is no failing finish, only an abandoned one. → effort.
  match: e('gc', 'vocab', 'vocabulary'),
  wordsprint: e('gc', 'grammar', 'vocabulary'), // timed sprint: no pass threshold → effort
  'word-families': g('gc', 'grammar', 'grammar'),

  // ── Tier-1 true-bypass screens (Phase 3): gated; quiz wired/added there ──
  padezifull: g('gc', 'grammar', 'grammar'),
  padezi: g('gc', 'grammar', 'grammar'),
  svojmoj: g('gc', 'grammar', 'grammar'),
  modal: g('gc', 'grammar', 'grammar'),
  vocative: g('gc', 'grammar', 'grammar'),
  conjpractice: g('gc', 'grammar', 'grammar'),

  // ── Effort: productive tasks (no MCQ correctness) — credited on genuine finish (Phase 4) ──
  speaking: e('sp', 'speaking', 'speaking'),
  shadowing: e('lc', 'speaking', 'speaking'),
  writing: e('lc', 'grammar', 'grammar'),
  dictation: e('lc', 'listening', 'listening'),
  listening: e('lc', 'listening', 'listening'),
  'pitch-accent': e('gc', 'grammar', 'grammar'),
  'pronunciation-contrast': e('gc', 'grammar', 'grammar'),
  srsreview: e('rc', 'grammar', 'default'),
  'flashcards-quiz': e('lc', 'vocab', 'vocabulary'),
  'story-comprehension': e('lc', 'listening', 'listening'),
  // Listening-channel fix (2026-08-14): both long-form listening screens now
  // route their finish through completeExercise (they used to award XP
  // directly), so a Today's Session slot serving them can actually complete
  // and the cat_listening bridge consumes real quiz accuracy. Effort policy:
  // sets/generations are replayable and always paid score-scaled XP, so the
  // 75% gate must not bind (awardOnReplay preserves the per-run payout).
  listening_comprehension: e('lc', 'listening', 'listening'),
  'ai-listening': e('lc', 'listening', 'listening'),

  // ── Passive reference (Phase 4): read/dwell credit ──
  alphabet: p('lc'),
  techvoc: p('lc'),
  dialects: p('lc'),
  falsefr: p('lc'),
  grammarmap: p('gc'),
};

export const EXERCISE_COMPLETION: Record<string, ExerciseEntry> = Object.fromEntries(
  Object.entries(RAW).map(([k, v]) => [k, { ...v, vsKey: v.vsKey || k }]),
);
