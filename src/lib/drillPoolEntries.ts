/**
 * drillPoolEntries — the C1/C2 drill tranches of the 2026-08 fluency
 * initiative (program target: 30+ drills per level), split out of
 * sessionPools.ts for max-lines. Spread into CEFR_EXERCISE_POOL where the
 * C-level section sits; future C-level tranches land here.
 */
import type { SkillCategory } from './adaptive';

/** CEFR-annotated exercise pool entry (lives here to keep sessionPools -> drillPoolEntries acyclic) */
export interface CefrPoolEntry {
  id: string;
  label: string;
  screen: string;
  cefr: string;
  category: SkillCategory;
  /**
   * Wave 4: bounded browse/reference screens with no self-grading completion.
   * Reference entries complete on return-to-Home (SESSION_AUTOCOMPLETE_SCREENS
   * derives from this flag) and the session builder serves AT MOST ONE per
   * session so browse content never crowds out graded drills.
   */
  reference?: boolean;
  /**
   * Wave 9: entries whose activity is impossible without a microphone. The
   * builder skips them when readMicState() is 'denied'/'unsupported' —
   * mirroring PRODUCTION_POOL's micRequired contract.
   */
  micRequired?: boolean;
  /**
   * Phase 1 (fluency initiative, 2026-08): the SCREEN levels its own content
   * to the user's CEFR (leveled readers, level-aware AI generation, per-level
   * scene banks). For these, a fixed EXERCISE_DIFFICULTY score misleads the
   * difficulty-nearest fill sort — a C1 user was ranked away from the app's
   * richest input content because the entry "looked like" a tier-3 exercise.
   * The builder treats adaptive entries as ALWAYS difficulty-matched (dist 0).
   */
  adaptive?: boolean;
}

export const C_LEVEL_DRILL_ENTRIES: CefrPoolEntry[] = [
  {
    id: 'frazeologija',
    label: 'Frazeologija',
    screen: 'frazeologija',
    cefr: 'C2',
    category: 'idioms',
  },
  {
    id: 'tvorbarijeci',
    label: 'Tvorba riječi',
    screen: 'tvorbarijeci',
    cefr: 'C2',
    category: 'nominalization',
  },
  {
    id: 'sinonimija',
    label: 'Sinonimija',
    screen: 'sinonimija',
    cefr: 'C2',
    category: 'register',
  },
  {
    id: 'posudjenice',
    label: 'Posuđenice i standard',
    screen: 'posudjenice',
    cefr: 'C2',
    category: 'register',
  },
  {
    id: 'glasovnepromjene',
    label: 'Glasovne promjene',
    screen: 'glasovnepromjene',
    cefr: 'C2',
    category: 'genitive',
  },
  {
    id: 'administrativni',
    label: 'Administrativni jezik',
    screen: 'administrativni',
    cefr: 'C2',
    category: 'register',
  },
  {
    id: 'pravopis',
    label: 'Pravopis',
    screen: 'pravopis',
    cefr: 'C2',
    category: 'register',
  },
  {
    id: 'konektori',
    label: 'Tekstni konektori',
    screen: 'konektori',
    cefr: 'C2',
    category: 'discourse',
  },
  {
    id: 'razgovorni',
    label: 'Razgovorni jezik',
    screen: 'razgovorni',
    cefr: 'C2',
    category: 'register',
  },
  {
    id: 'kolokacije',
    label: 'Kolokacije',
    screen: 'kolokacije',
    cefr: 'C1',
    category: 'register',
  },
  {
    id: 'emfaza',
    label: 'Red riječi',
    screen: 'emfaza',
    cefr: 'C1',
    category: 'word-order',
  },
  {
    id: 'vidnijanse',
    label: 'Vid — nijanse',
    screen: 'vidnijanse',
    cefr: 'C1',
    category: 'aspect-perfective',
  },
  {
    id: 'povratni',
    label: 'Povratni glagoli',
    screen: 'povratni',
    cefr: 'C1',
    category: 'register',
  },
  {
    id: 'sklonidbaimena',
    label: 'Sklonidba imena',
    screen: 'sklonidbaimena',
    cefr: 'C1',
    category: 'genitive',
  },
  {
    id: 'prijedlozni',
    label: 'Prijedložni izrazi',
    screen: 'prijedlozni',
    cefr: 'C1',
    category: 'genitive',
  },
  {
    id: 'pogodbene',
    label: 'Pogodbene rečenice',
    screen: 'pogodbene',
    cefr: 'C1',
    category: 'conditional',
  },
  {
    id: 'odredjenost',
    label: 'Određeni i neodređeni vid',
    screen: 'odredjenost',
    cefr: 'C1',
    category: 'nominative',
  },
  {
    id: 'datumi',
    label: 'Datumi i vrijeme',
    screen: 'datumi',
    cefr: 'C1',
    category: 'numerals',
  },
  // C1 tranche 4 (2026-08-15): numeral declension, purpose clauses, agreement.
  {
    id: 'sklonidbabrojeva',
    label: 'Sklonidba brojeva',
    screen: 'sklonidbabrojeva',
    cefr: 'C1',
    category: 'numerals',
  },
  {
    id: 'namjera',
    label: 'Izricanje namjere',
    screen: 'namjera',
    cefr: 'C1',
    category: 'subordination',
  },
  {
    id: 'srocnost',
    label: 'Sročnost',
    screen: 'srocnost',
    cefr: 'C1',
    category: 'nominative',
  },
  // C2 tranche 4 (2026-08-15): clitic clusters, academic register, punctuation.
  {
    id: 'enklitike',
    label: 'Red enklitika',
    screen: 'enklitike',
    cefr: 'C2',
    category: 'clitics',
  },
  {
    id: 'akademski',
    label: 'Akademski stil',
    screen: 'akademski',
    cefr: 'C2',
    category: 'nominalization',
  },
  {
    id: 'interpunkcija',
    label: 'Interpunkcija',
    screen: 'interpunkcija',
    cefr: 'C2',
    category: 'register',
  },
  // C1 tranche 5 (2026-08-15): passive participle, infinitive vs da, aspect pairs.
  {
    id: 'trpni',
    label: 'Trpni pridjev',
    screen: 'trpni',
    cefr: 'C1',
    category: 'participle',
  },
  {
    id: 'infinitivda',
    label: 'Infinitiv ili da',
    screen: 'infinitivda',
    cefr: 'C1',
    category: 'register',
  },
  {
    id: 'vidskiparovi',
    label: 'Vidski parovi',
    screen: 'vidskiparovi',
    cefr: 'C1',
    category: 'aspect-imperfective',
  },
  // C2 tranche 5 (2026-08-15): capitalization, abbreviations, normative traps.
  {
    id: 'velikoslovo',
    label: 'Veliko i malo slovo',
    screen: 'velikoslovo',
    cefr: 'C2',
    category: 'register',
  },
  {
    id: 'kratice',
    label: 'Kratice i strana imena',
    screen: 'kratice',
    cefr: 'C2',
    category: 'genitive',
  },
  {
    id: 'lektor',
    label: 'Lektorske zamke',
    screen: 'lektor',
    cefr: 'C2',
    category: 'register',
  },
  // C1 tranche 6 (2026-08-15): concessives, pluperfect, quantifier pronouns.
  {
    id: 'dopusne',
    label: 'Dopusne rečenice',
    screen: 'dopusne',
    cefr: 'C1',
    category: 'subordination',
  },
  {
    id: 'pluskvamperfekt',
    label: 'Pluskvamperfekt',
    screen: 'pluskvamperfekt',
    cefr: 'C1',
    category: 'past-tense',
  },
  {
    id: 'savsvaki',
    label: 'Sav, svaki, sam',
    screen: 'savsvaki',
    cefr: 'C1',
    category: 'nominative',
  },
  // C2 tranche 6 (2026-08-15): journalese, figurative meanings, epistemic modality.
  {
    id: 'novinski',
    label: 'Novinski stil',
    screen: 'novinski',
    cefr: 'C2',
    category: 'discourse',
  },
  {
    id: 'prenesena',
    label: 'Prenesena značenja',
    screen: 'prenesena',
    cefr: 'C2',
    category: 'idioms',
  },
  {
    id: 'modalnost',
    label: 'Izricanje sigurnosti',
    screen: 'modalnost',
    cefr: 'C2',
    category: 'conditional',
  },
  // C1 tranche 7 (2026-08-15): biaspectuals, i-declension, time expressions.
  {
    id: 'dvovidni',
    label: 'Dvovidni glagoli',
    screen: 'dvovidni',
    cefr: 'C1',
    category: 'aspect-imperfective',
  },
  {
    id: 'isklonidba',
    label: 'I-sklonidba',
    screen: 'isklonidba',
    cefr: 'C1',
    category: 'instrumental',
  },
  {
    id: 'vrijemeizraz',
    label: 'Izricanje vremena',
    screen: 'vrijemeizraz',
    cefr: 'C1',
    category: 'genitive',
  },
  // C2 tranche 7 (2026-08-15): lexical strata, correlative conjunctions, eponyms.
  {
    id: 'slojevi',
    label: 'Slojevi leksika',
    screen: 'slojevi',
    cefr: 'C2',
    category: 'register',
  },
  {
    id: 'parniveznici',
    label: 'Parni veznici',
    screen: 'parniveznici',
    cefr: 'C2',
    category: 'discourse',
  },
  {
    id: 'eponimi',
    label: 'Frazemi s imenom',
    screen: 'eponimi',
    cefr: 'C2',
    category: 'idioms',
  },
];
