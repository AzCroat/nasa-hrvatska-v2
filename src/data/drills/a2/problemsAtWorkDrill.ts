// src/data/drills/a2/problemsAtWorkDrill.ts
//
// A2 PROBLEMS AT WORK AND AT HOME — the drill for the `problems-at-work` lesson.
//
// Saying what is wrong takes three structures the learner already has: s + the
// instrumental for WHO or WHAT the problem is with (sa before s, š, z, ž), nema + the
// genitive for what is missing, and the dative pronoun mi for what somebody did to you.
// Then the other half of the conversation: answering a friend with sympathy.
//
// Three modes:
//   problem     — imam problem s…, nema + genitive, broken things
//   posao       — complaints about work, with the dative pronoun and agreement
//   suosjecanje — the sympathetic answer

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PROBLEMS_AT_WORK_MODE_LABELS: Record<string, string> = {
  problem: '⚠️ Problem',
  posao: '💼 Posao',
  suosjecanje: '🤝 Suosjećanje',
};

export const PROBLEMS_AT_WORK_DRILL_DATA: ModeDrillItem[] = [
  // ── problem ───────────────────────────────────────────────────────────────
  {
    mode: 'problem',
    q: 'Imam problem ____ šefom.',
    en: 'I have a problem with my boss.',
    opts: ['sa', 's', 'na', 'od'],
    answer: 'sa',
    tip: 'The problem is WITH him: s + instrumental. Before š the preposition becomes sa.',
  },
  {
    mode: 'problem',
    q: 'Imam problem s ____.',
    en: 'I have a problem with the computer.',
    opts: ['računalom', 'računalo', 'računala', 'računalu'],
    answer: 'računalom',
    tip: 's + instrumental: računalo → računalom.',
  },
  {
    mode: 'problem',
    q: 'U stanu nema ____.',
    en: 'There is no hot water in the flat.',
    opts: ['tople vode', 'topla voda', 'toplu vodu', 'toplom vodom'],
    answer: 'tople vode',
    tip: 'After nema the missing thing goes into the genitive, adjective and noun together.',
  },
  {
    mode: 'problem',
    q: 'Već dva dana nema ____.',
    en: 'There has been no electricity for two days.',
    opts: ['struje', 'struja', 'struju', 'strujom'],
    answer: 'struje',
    tip: 'nema + genitive: struja → struje.',
  },
  {
    mode: 'problem',
    q: 'Printer opet ne ____.',
    en: "The printer isn't working again.",
    opts: ['radi', 'radim', 'rade', 'radiš'],
    answer: 'radi',
    tip: 'One printer, so the on/ona/ono form: ne radi.',
  },
  {
    mode: 'problem',
    q: 'Auto je opet u ____.',
    en: 'The car has broken down again.',
    opts: ['kvaru', 'kvar', 'kvara', 'kvarom'],
    answer: 'kvaru',
    tip: 'u kvaru — out of order — is u + locative.',
  },
  {
    mode: 'problem',
    q: 'Imam problem sa ____.',
    en: 'I have a problem with the neighbours.',
    opts: ['susjedima', 'susjedi', 'susjede', 'susjeda'],
    answer: 'susjedima',
    tip: 'Instrumental plural -ima; sa because the noun begins with s.',
  },
  {
    mode: 'problem',
    q: 'Radim u ____ uredu.',
    en: 'I work in a cold office.',
    opts: ['hladnom', 'hladan', 'hladnog', 'hladnim'],
    answer: 'hladnom',
    tip: 'u + locative for where; ured is masculine, so the adjective ends in -om.',
  },
  // ── posao ─────────────────────────────────────────────────────────────────
  {
    mode: 'posao',
    q: 'Šef ____ je dao previše posla.',
    en: 'My boss gave me too much work.',
    opts: ['mi', 'me', 'ja', 'moj'],
    answer: 'mi',
    tip: 'Gave TO me: the dative clitic mi, before je.',
  },
  {
    mode: 'posao',
    q: 'Koji je red riječi točan?',
    en: "Which word order says: my colleague hasn't given the money back to me?",
    opts: [
      'Kolega mi nije vratio novac.',
      'Kolega nije mi vratio novac.',
      'Mi kolega nije vratio novac.',
      'Kolega mi vratio nije novac.',
    ],
    answer: 'Kolega mi nije vratio novac.',
    tip: 'mi is a clitic: second place, before the full word nije.',
  },
  {
    mode: 'posao',
    q: 'Plaća je jako ____.',
    en: 'The pay is very low.',
    opts: ['mala', 'malu', 'male', 'malom'],
    answer: 'mala',
    tip: 'plaća is feminine and the subject: mala.',
  },
  {
    mode: 'posao',
    q: 'Opet radim ____.',
    en: "I'm working overtime again.",
    opts: ['prekovremeno', 'prekovremeni', 'prekovremena', 'prekovremenog'],
    answer: 'prekovremeno',
    tip: 'It says HOW you work, so the adverb in -o.',
  },
  {
    mode: 'posao',
    q: 'Stalno sam ____.',
    en: "I'm always tired. (a woman speaking)",
    opts: ['umorna', 'umoran', 'umorno', 'umorni'],
    answer: 'umorna',
    tip: 'The adjective agrees with the speaker, a woman.',
  },
  {
    mode: 'posao',
    q: 'Kolege mi ne ____.',
    en: "My colleagues don't help me.",
    opts: ['pomažu', 'pomaže', 'pomažem', 'pomoći'],
    answer: 'pomažu',
    tip: 'kolege are plural: the oni form of pomagati.',
  },
  {
    mode: 'posao',
    q: 'Na poslu imam puno ____.',
    en: 'I have a lot of stress at work.',
    opts: ['stresa', 'stres', 'stresom', 'stresu'],
    answer: 'stresa',
    tip: 'puno + genitive: stres → stresa.',
  },
  {
    mode: 'posao',
    q: 'Moram raditi ____.',
    en: 'I have to work at weekends.',
    opts: ['vikendom', 'vikend', 'vikenda', 'vikendu'],
    answer: 'vikendom',
    tip: 'At weekends, as a habit: the instrumental used as an adverb — vikendom.',
  },
  // ── suosjecanje ───────────────────────────────────────────────────────────
  {
    mode: 'suosjecanje',
    q: 'Prijatelj kaže: "Izgubio sam posao." Ti kažeš: ____',
    en: 'Pick the sympathetic answer.',
    opts: ['Žao mi je.', 'Čestitam!', 'Dobar tek!', 'Sretan put!'],
    answer: 'Žao mi je.',
    tip: 'Losing a job calls for sympathy: I am sorry.',
  },
  {
    mode: 'suosjecanje',
    q: '____ mi je, to je grozno.',
    en: "I'm sorry, that's awful.",
    opts: ['Žao', 'Drago', 'Dobro', 'Lijepo'],
    answer: 'Žao',
    tip: 'Žao mi je = I am sorry. Drago mi je means I am glad.',
  },
  {
    mode: 'suosjecanje',
    q: 'Kako ti ____ pomoći?',
    en: 'How can I help you?',
    opts: ['mogu', 'možeš', 'može', 'moći'],
    answer: 'mogu',
    tip: 'I can: the ja form of moći is mogu.',
  },
  {
    mode: 'suosjecanje',
    q: 'Nemoj se ____.',
    en: "Don't worry.",
    opts: ['brinuti', 'brineš', 'brini', 'brinem'],
    answer: 'brinuti',
    tip: 'nemoj is always followed by the infinitive.',
  },
  {
    mode: 'suosjecanje',
    q: 'Što se ____?',
    en: 'What happened?',
    opts: ['dogodilo', 'dogodio', 'dogodila', 'dogoditi'],
    answer: 'dogodilo',
    tip: 'što is neuter, so the participle ends in -lo.',
  },
  {
    mode: 'suosjecanje',
    q: 'Razumijem ____.',
    en: 'I understand you. (to a friend)',
    opts: ['te', 'ti', 'tebi', 'tvoj'],
    answer: 'te',
    tip: 'razumjeti takes the accusative: te. ti and tebi are dative.',
  },
  {
    mode: 'suosjecanje',
    q: 'Joj, to je ____!',
    en: "Oh, that's awful!",
    opts: ['grozno', 'grozan', 'grozna', 'grozni'],
    answer: 'grozno',
    tip: 'to is neuter, so the neuter form: grozno.',
  },
  {
    mode: 'suosjecanje',
    q: 'Prijateljica kaže: "Susjedi su glasni svaku noć." Ti kažeš: ____',
    en: 'Pick the reply that fits.',
    opts: ['To je grozno!', 'Baš lijepo!', 'Živjeli!', 'Dobar tek!'],
    answer: 'To je grozno!',
    tip: 'A complaint deserves sympathy, not a toast.',
  },
];
