// src/data/drills/b2/falseFriendsDrill.ts
//
// B2 FALSE FRIENDS — the drill for the `false-friends` lesson.
//
// Two modes:
//   meaning — what a look-alike Croatian word means. The options ARE English meanings, so
//             these items carry no English gloss (a gloss would answer them).
//   context — which Croatian word says what you mean: pravi, not aktualan; na kraju, not
//             eventualno; teretana, not gimnazija.
//
// Every distractor is a real word used in the WRONG sense — the confusion the drill exists
// to catch — and never a non-standard form.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const FALSE_FRIENDS_MODE_LABELS: Record<string, string> = {
  meaning: '🎭 What does it mean?',
  context: '🎯 The word you meant',
};

export const FALSE_FRIENDS_DRILL_DATA: ModeDrillItem[] = [
  // ── meaning ───────────────────────────────────────────────────────────────
  {
    mode: 'meaning',
    q: 'Što znači riječ „aktualan” u rečenici „To je vrlo aktualna tema”?',
    opts: ['actual', 'topical', 'active', 'accurate'],
    answer: 'topical',
    tip: 'aktualan = current, topical. "Actual" is pravi.',
  },
  {
    mode: 'meaning',
    q: 'Što znači „eventualno” u rečenici „Eventualno ću doći kasnije”?',
    opts: ['eventually', 'possibly', 'finally', 'certainly'],
    answer: 'possibly',
    tip: 'eventualno = possibly. "Eventually" is na kraju.',
  },
  {
    mode: 'meaning',
    q: 'Što znači „simpatičan” u rečenici „Novi konobar je jako simpatičan”?',
    opts: ['likeable', 'sympathetic', 'sensitive', 'symmetrical'],
    answer: 'likeable',
    tip: 'simpatičan = likeable. "Sympathetic" is suosjećajan.',
  },
  {
    mode: 'meaning',
    q: 'Što je „gimnazija”?',
    opts: ['a gym', 'a sports club', 'an academic secondary school', 'a gymnastics class'],
    answer: 'an academic secondary school',
    tip: 'A gimnazija prepares pupils for university. A gym is teretana.',
  },
  {
    mode: 'meaning',
    q: 'Što je „ordinacija”?',
    opts: ['an ordination', 'a doctor’s surgery', 'an order', 'a regulation'],
    answer: 'a doctor’s surgery',
    tip: 'An ordinacija is where a doctor or dentist sees patients.',
  },
  {
    mode: 'meaning',
    q: 'Što je „ambulanta”?',
    opts: ['an ambulance', 'an outpatient clinic', 'a hospital ward', 'a pharmacy'],
    answer: 'an outpatient clinic',
    tip: 'An ambulanta is a local clinic. The ambulance is hitna pomoć.',
  },
  {
    mode: 'meaning',
    q: 'Što je „lektira”?',
    opts: ['a lecture', 'a lesson', 'a reader', 'required reading'],
    answer: 'required reading',
    tip: 'lektira = the books on the school reading list. A lecture is predavanje.',
  },
  {
    mode: 'meaning',
    q: 'Što znači „evidencija” u rečenici „Tvrtka vodi evidenciju o radnom vremenu”?',
    opts: ['evidence', 'records', 'proof', 'a witness'],
    answer: 'records',
    tip: 'evidencija = records, a register. Evidence is dokaz.',
  },
  {
    mode: 'meaning',
    q: 'Što je „kaucija” kad iznajmljujete stan?',
    opts: ['a deposit', 'a warning', 'a contract', 'a fine'],
    answer: 'a deposit',
    tip: 'kaucija = deposit (or bail). Caution is oprez.',
  },
  {
    mode: 'meaning',
    q: 'Što je „novela”?',
    opts: ['a novel', 'a short story', 'a piece of news', 'a novelty'],
    answer: 'a short story',
    tip: 'novela = a short story or novella. A novel is roman.',
  },
  {
    mode: 'meaning',
    q: 'Što je „kompozicija” u glazbi?',
    opts: ['a school essay', 'a musical piece', 'a choir', 'a concert hall'],
    answer: 'a musical piece',
    tip: 'kompozicija = a musical composition. A school essay is sastavak.',
  },
  {
    mode: 'meaning',
    q: 'Što znači „aktualne vijesti”?',
    opts: ['the actual news', 'the latest news', 'active news', 'the true news'],
    answer: 'the latest news',
    tip: 'aktualan = current, topical.',
  },
  // ── context ───────────────────────────────────────────────────────────────
  {
    mode: 'context',
    q: '____ razlog svog odlaska nikad nije rekao.',
    en: 'He never told the actual reason for his departure.',
    opts: ['Aktualni', 'Pravi', 'Eventualni', 'Simpatični'],
    answer: 'Pravi',
    tip: '"Actual" is pravi. Aktualni razlog is the current reason.',
  },
  {
    mode: 'context',
    q: '____ smo ipak stigli na vrijeme.',
    en: 'Eventually we arrived on time after all.',
    opts: ['Eventualno', 'Na kraju', 'Aktualno', 'Simpatično'],
    answer: 'Na kraju',
    tip: '"Eventually" is na kraju. Eventualno means possibly.',
  },
  {
    mode: 'context',
    q: 'Tri puta tjedno vježbam u ____.',
    en: 'I work out at the gym three times a week.',
    opts: ['gimnaziji', 'teretani', 'ordinaciji', 'lektiri'],
    answer: 'teretani',
    tip: 'The gym is teretana; gimnazija is a school.',
  },
  {
    mode: 'context',
    q: 'Moja kći ide u ____ jer želi studirati medicinu.',
    en: 'My daughter goes to grammar school because she wants to study medicine.',
    opts: ['teretanu', 'ordinaciju', 'gimnaziju', 'ambulantu'],
    answer: 'gimnaziju',
    tip: 'The academic secondary school is gimnazija.',
  },
  {
    mode: 'context',
    q: 'Policija nije našla nikakav ____.',
    en: 'The police found no evidence.',
    opts: ['evidenciju', 'dokaz', 'kauciju', 'oprez'],
    answer: 'dokaz',
    tip: 'Evidence is dokaz. Evidencija means records.',
  },
  {
    mode: 'context',
    q: 'Moj djed je četrdeset godina radio u ____.',
    en: 'My grandfather worked in a factory for forty years.',
    opts: ['tvornici', 'gimnaziji', 'ordinaciji', 'lektiri'],
    answer: 'tvornici',
    tip: 'The standard word for a factory is tvornica.',
  },
  {
    mode: 'context',
    q: 'Na fakultetu slušamo zanimljivo ____ o povijesti.',
    en: 'At university we are attending an interesting lecture on history.',
    opts: ['lektiru', 'predavanje', 'kompoziciju', 'evidenciju'],
    answer: 'predavanje',
    tip: 'A lecture is predavanje; lektira is required reading.',
  },
  {
    mode: 'context',
    q: 'Dogodila se nesreća! Zovite ____ pomoć!',
    en: 'There has been an accident! Call an ambulance!',
    opts: ['ambulantu', 'hitnu', 'ordinaciju', 'kauciju'],
    answer: 'hitnu',
    tip: 'The ambulance service is hitna pomoć.',
  },
  {
    mode: 'context',
    q: 'Prošlog ljeta pročitala sam dug ____ od petsto stranica.',
    en: 'Last summer I read a long novel of five hundred pages.',
    opts: ['novelu', 'roman', 'lektiru', 'kompoziciju'],
    answer: 'roman',
    tip: 'A novel is roman; a novela is a short story.',
  },
  {
    mode: 'context',
    q: 'Kad me boli zub, idem u zubarsku ____.',
    en: 'When I have toothache, I go to the dentist’s surgery.',
    opts: ['ordinaciju', 'gimnaziju', 'teretanu', 'evidenciju'],
    answer: 'ordinaciju',
    tip: 'A dentist’s surgery is an ordinacija.',
  },
  {
    mode: 'context',
    q: 'Moja susjeda je vrlo ____ kad netko ima problem — uvijek razumije.',
    en: 'My neighbour is very sympathetic when someone has a problem — she always understands.',
    opts: ['simpatična', 'aktualna', 'suosjećajna', 'eventualna'],
    answer: 'suosjećajna',
    tip: '"Sympathetic" is suosjećajan; simpatičan only means likeable.',
  },
  {
    mode: 'context',
    q: 'Za stan smo platili ____ od tisuću eura.',
    en: 'We paid a deposit of a thousand euros for the flat.',
    opts: ['kauciju', 'evidenciju', 'oprez', 'lektiru'],
    answer: 'kauciju',
    tip: 'A deposit is kaucija.',
  },
];
