// src/data/drills/c1/temporalAccusativeDrill.ts
//
// C1 TIME IN THE ACCUSATIVE — the drill for the `temporal-accusative` lesson.
//
// Three modes, eight items each:
//   bez        — a length or a repetition with no preposition: cijelu noć, svaki dan
//   prijedlozi — u, na, za, pred, kroz + accusative: u petak, na Božić, za deset dana
//   razlika    — the actual length, the planned length and the time ahead
//
// The genitive of time (svakog dana, svake večeri, ove subote) is standard Croatian, so it
// is never offered as a wrong option; nor are o Božiću, za Božić, na proljeće or noću.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const TEMPORAL_ACCUSATIVE_MODE_LABELS: Record<string, string> = {
  bez: '⏳ Bez prijedloga',
  prijedlozi: '📅 S prijedlogom',
  razlika: '⚖️ Za, na ili ništa',
};

export const TEMPORAL_ACCUSATIVE_DRILL_DATA: ModeDrillItem[] = [
  // ── bez ───────────────────────────────────────────────────────────────────
  {
    mode: 'bez',
    q: 'Nisam spavao ____.',
    en: 'I did not sleep all night.',
    opts: ['cijelu noć', 'cijeloj noći', 'cijela noć', 'u cijelu noć'],
    answer: 'cijelu noć',
    tip: 'A length of time is a bare accusative.',
  },
  {
    mode: 'bez',
    q: '____ pijem kavu u istom kafiću.',
    en: 'Every day I drink coffee in the same café.',
    opts: ['Svaki dan', 'Svakom danu', 'U svaki dan', 'Za svaki dan'],
    answer: 'Svaki dan',
    tip: 'A repetition needs no preposition; svakog dana is equally standard.',
  },
  {
    mode: 'bez',
    q: 'Čekali smo ____.',
    en: 'We waited for two hours.',
    opts: ['dva sata', 'za dva sata', 'u dva sata', 'dvama satima'],
    answer: 'dva sata',
    tip: 'za dva sata would mean "in two hours from now"; u dva sata is a clock time.',
  },
  {
    mode: 'bez',
    q: 'Živjela je u Londonu ____.',
    en: 'She lived in London for a year.',
    opts: ['godinu dana', 'za godinu dana', 'u godini dana', 'godina dana'],
    answer: 'godinu dana',
    tip: 'The length that actually passed: a bare accusative.',
  },
  {
    mode: 'bez',
    q: '____ radim od kuće.',
    en: 'This week I am working from home.',
    opts: ['Ovaj tjedan', 'Ovom tjednu', 'Ovi tjedni', 'Ovim tjednom'],
    answer: 'Ovaj tjedan',
    tip: 'One occasion in the accusative; ovoga tjedna is also standard.',
  },
  {
    mode: 'bez',
    q: 'Trčala je ____ bez odmora.',
    en: 'She ran for a whole hour without a break.',
    opts: ['cijeli sat', 'cijelim satom', 'cijelom satu', 'u cijeli sat'],
    answer: 'cijeli sat',
    tip: 'Duration: cijeli sat in the accusative.',
  },
  {
    mode: 'bez',
    q: '____ zove baku u Zagreb.',
    en: 'Every evening she calls her grandmother in Zagreb.',
    opts: ['Svaku večer', 'Svakoj večeri', 'Svaka večer', 'U svakoj večeri'],
    answer: 'Svaku večer',
    tip: 'A repetition in the accusative; svake večeri is equally standard.',
  },
  {
    mode: 'bez',
    q: 'Bio je bolestan ____.',
    en: 'He was ill for three weeks.',
    opts: ['tri tjedna', 'za tri tjedna', 'tri tjedni', 'trima tjednima'],
    answer: 'tri tjedna',
    tip: 'A length that passed: no preposition.',
  },

  // ── prijedlozi ────────────────────────────────────────────────────────────
  {
    mode: 'prijedlozi',
    q: 'Vidimo se ____.',
    en: 'See you on Friday.',
    opts: ['u petak', 'u petku', 'na petak', 'petka'],
    answer: 'u petak',
    tip: 'A day of the week: u + accusative.',
  },
  {
    mode: 'prijedlozi',
    q: 'Dolaze nam ____.',
    en: 'They are coming to us on Christmas Day.',
    opts: ['na Božić', 'na Božića', 'u Božiću', 'Božićem'],
    answer: 'na Božić',
    tip: 'A feast day: na + accusative.',
  },
  {
    mode: 'prijedlozi',
    q: 'Predstava počinje ____.',
    en: 'The show starts at eight o’clock.',
    opts: ['u osam sati', 'osam sati', 'na osam sati', 'u osmi sat'],
    answer: 'u osam sati',
    tip: 'A clock time is a point: u + accusative.',
  },
  {
    mode: 'prijedlozi',
    q: 'Rezultati će stići ____.',
    en: 'The results will arrive ten days from now.',
    opts: ['za deset dana', 'deset dana', 'na deset dana', 'deset dani'],
    answer: 'za deset dana',
    tip: 'za + accusative counts forward from now.',
  },
  {
    mode: 'prijedlozi',
    q: '____ se gradovi na obali isprazne.',
    en: 'Towards the end of September the coastal towns empty.',
    opts: ['Pred kraj rujna', 'Pred krajem rujna', 'Na kraj rujna', 'U kraj rujna'],
    answer: 'Pred kraj rujna',
    tip: 'pred + accusative: approaching a point in time.',
  },
  {
    mode: 'prijedlozi',
    q: 'Cijela obitelj ide na misu ____.',
    en: 'The whole family goes to Mass on Easter Sunday.',
    opts: ['na Uskrs', 'na Uskrsu', 'u Uskrs', 'Uskrsom'],
    answer: 'na Uskrs',
    tip: 'A feast day: na + accusative.',
  },
  {
    mode: 'prijedlozi',
    q: '____ se Split razvijao oko Dioklecijanove palače.',
    en: 'Over the centuries Split grew around Diocletian’s Palace.',
    opts: ['Kroz stoljeća', 'Za stoljeća', 'Na stoljeća', 'Pred stoljeća'],
    answer: 'Kroz stoljeća',
    tip: 'kroz + accusative runs across a whole period.',
  },
  {
    mode: 'prijedlozi',
    q: 'Krenuli smo ____.',
    en: 'We set off as evening was coming on.',
    opts: ['pred večer', 'pred večeri', 'za večer', 'u večeri'],
    answer: 'pred večer',
    tip: 'pred večer — towards evening.',
  },

  // ── razlika ───────────────────────────────────────────────────────────────
  {
    mode: 'razlika',
    q: 'Otišla je u Kanadu ____, a ostala deset godina.',
    en: 'She went to Canada for one year (that was the plan) and stayed ten.',
    opts: ['na godinu dana', 'za godinu dana', 'godine dana', 'u godini dana'],
    answer: 'na godinu dana',
    tip: 'A planned length: na + accusative.',
  },
  {
    mode: 'razlika',
    q: 'Bio je u bolnici ____.',
    en: 'He was in hospital for two weeks.',
    opts: ['dva tjedna', 'za dva tjedna', 'dvaju tjedana', 'pred dva tjedna'],
    answer: 'dva tjedna',
    tip: 'A length that actually passed: the bare accusative.',
  },
  {
    mode: 'razlika',
    q: 'Vratit ću ti knjigu ____.',
    en: 'I will give the book back to you a week from now.',
    opts: ['za tjedan dana', 'tjedan dana', 'tjedna dana', 'pred tjedan dana'],
    answer: 'za tjedan dana',
    tip: 'Time ahead: za + accusative.',
  },
  {
    mode: 'razlika',
    q: 'Iznajmili smo apartman ____.',
    en: 'We rented an apartment for ten days.',
    opts: ['na deset dana', 'pred deset dana', 'deset dani', 'kroz deset dani'],
    answer: 'na deset dana',
    tip: 'The length agreed in advance: na + accusative.',
  },
  {
    mode: 'razlika',
    q: 'Koncert je ____ navečer.',
    en: 'The concert is on Saturday evening.',
    opts: ['u subotu', 'u suboti', 'na subotu', 'subota'],
    answer: 'u subotu',
    tip: 'A day takes u + accusative, never the locative.',
  },
  {
    mode: 'razlika',
    q: 'Na Hvaru su bili ____.',
    en: 'They were on Hvar the whole summer.',
    opts: ['cijelo ljeto', 'cijelom ljetu', 'za cijelo ljeto', 'cijelim ljetom'],
    answer: 'cijelo ljeto',
    tip: 'Duration: the bare accusative.',
  },
  {
    mode: 'razlika',
    q: 'Doći ću ____.',
    en: 'I will come in spring.',
    opts: ['u proljeće', 'u proljeću', 'na proljeću', 'proljećem'],
    answer: 'u proljeće',
    tip: 'A season with u is in the accusative; proljeće looks like its nominative.',
  },
  {
    mode: 'razlika',
    q: 'Trgovina se zatvara ____.',
    en: 'The shop closes at noon.',
    opts: ['u podne', 'u podnevu', 'za podne', 'podnevom'],
    answer: 'u podne',
    tip: 'A point in the day: u + accusative.',
  },
];
