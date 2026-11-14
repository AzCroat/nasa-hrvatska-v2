// src/data/drills/a1/accusativeAnimateDrill.ts
//
// A1 ALIVE OR NOT — the drill for the `accusative-animate` lesson.
//
// A masculine object asks one question: is it alive? People, names, jobs and animals
// add -a (brat → brata, Ivan → Ivana, konobar → konobara, pas → psa); things stay
// (stol, auto, film). Masculine words in -a change like feminine ones (tata → tatu),
// and the adjective follows a living noun with -og / -eg.
//
// Three modes:
//   ziv      — alive or not, the noun alone
//   pridjev  — the adjective and possessive that follow
//   koga     — Koga? against Što?, and the -a words

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ACCUSATIVE_ANIMATE_MODE_LABELS: Record<string, string> = {
  ziv: '🧍 Živo ili ne',
  pridjev: '🎨 Pridjev',
  koga: '❓ Koga ili što',
};

export const ACCUSATIVE_ANIMATE_DRILL_DATA: ModeDrillItem[] = [
  // ── ziv ──────────────────────────────────────────────────────────────────
  {
    mode: 'ziv',
    q: 'Vidim ____. (brat)',
    en: 'I see my brother.',
    opts: ['brat', 'brata', 'bratu', 'braćom'],
    answer: 'brata',
    tip: 'A brother is alive: add -a.',
  },
  {
    mode: 'ziv',
    q: 'Vidim ____.',
    en: 'I see a table.',
    opts: ['stola', 'stolu', 'stol', 'stolom'],
    answer: 'stol',
    tip: 'A table is not alive: no change.',
  },
  {
    mode: 'ziv',
    q: 'Tražim ____. (konobar)',
    en: 'I am looking for the waiter.',
    opts: ['konobar', 'konobaru', 'konobari', 'konobara'],
    answer: 'konobara',
    tip: 'A job is a person: konobara.',
  },
  {
    mode: 'ziv',
    q: 'Kupujem ____.',
    en: 'I am buying a car.',
    opts: ['auta', 'auto', 'autu', 'autom'],
    answer: 'auto',
    tip: 'A car is not alive: no change.',
  },
  {
    mode: 'ziv',
    q: 'Zovem ____. (Ivan)',
    en: 'I am calling Ivan.',
    opts: ['Ivanu', 'Ivanom', 'Ivana', 'Ivani'],
    answer: 'Ivana',
    tip: 'A name is a person: add -a.',
  },
  {
    mode: 'ziv',
    q: 'Vidim ____. (pas)',
    en: 'I see a dog.',
    opts: ['pas', 'pasa', 'psu', 'psa'],
    answer: 'psa',
    tip: 'Alive, and the a in the middle drops out: psa.',
  },
  {
    mode: 'ziv',
    q: 'Čitam ____.',
    en: 'I am reading a novel.',
    opts: ['roman', 'romana', 'romanu', 'romanom'],
    answer: 'roman',
    tip: 'A novel is a thing: no change.',
  },
  {
    mode: 'ziv',
    q: 'Čekam ____.',
    en: 'I am waiting for the child.',
    opts: ['djeteta', 'dijete', 'djetetu', 'dijeta'],
    answer: 'dijete',
    tip: 'dijete is neuter: the alive question is only for masculine nouns.',
  },

  // ── pridjev ──────────────────────────────────────────────────────────────
  {
    mode: 'pridjev',
    q: 'Vidim ____ prijatelja. (dobar)',
    en: 'I see a good friend.',
    opts: ['dobar', 'dobrog', 'dobru', 'dobri'],
    answer: 'dobrog',
    tip: 'Next to a living masculine object: -og.',
  },
  {
    mode: 'pridjev',
    q: 'Vidim ____ auto. (nov)',
    en: 'I see a new car.',
    opts: ['novog', 'novu', 'novi', 'nova'],
    answer: 'novi',
    tip: 'A car is not alive: the adjective stays as it is.',
  },
  {
    mode: 'pridjev',
    q: 'Poznaješ li ____ susjeda? (naš)',
    en: 'Do you know our neighbour?',
    opts: ['naš', 'našu', 'naši', 'našeg'],
    answer: 'našeg',
    tip: 'After š the ending is -eg.',
  },
  {
    mode: 'pridjev',
    q: 'Volim ____ psa. (moj)',
    en: 'I love my dog.',
    opts: ['moga', 'moj', 'moju', 'moje'],
    answer: 'moga',
    tip: 'moj → mog or moga next to a living masculine object.',
  },
  {
    mode: 'pridjev',
    q: 'Upoznajem ____ kolegu. (nov)',
    en: 'I am meeting a new colleague.',
    opts: ['novu', 'novog', 'nova', 'novi'],
    answer: 'novog',
    tip: 'kolega is a man, so the adjective is masculine: novog.',
  },
  {
    mode: 'pridjev',
    q: 'Which phrase means "your new neighbour" (a man) as an object?',
    en: 'I know your new neighbour.',
    opts: ['tvoj novi susjed', 'tvoga novog susjeda', 'tvoju novu susjedu', 'tvog novi susjeda'],
    answer: 'tvoga novog susjeda',
    tip: 'All three words move together.',
  },
  {
    mode: 'pridjev',
    q: 'Slušamo ____ profesora. (mlad)',
    en: 'We are listening to a young professor.',
    opts: ['mlad', 'mladi', 'mladog', 'mladu'],
    answer: 'mladog',
    tip: 'A professor is alive: -og.',
  },
  {
    mode: 'pridjev',
    q: 'Kupujem ____ stol. (velik)',
    en: 'I am buying a big table.',
    opts: ['velikog', 'veliku', 'veliki', 'velika'],
    answer: 'veliki',
    tip: 'A table is a thing: nothing moves.',
  },

  // ── koga ─────────────────────────────────────────────────────────────────
  {
    mode: 'koga',
    q: '____ vidiš? — Vidim brata.',
    en: 'Whom do you see? — I see my brother.',
    opts: ['Što', 'Koga', 'Gdje', 'Kada'],
    answer: 'Koga',
    tip: 'A person: Koga?',
  },
  {
    mode: 'koga',
    q: '____ kupuješ? — Kupujem stol.',
    en: 'What are you buying? — I am buying a table.',
    opts: ['Koga', 'Tko', 'Što', 'Kako'],
    answer: 'Što',
    tip: 'A thing: Što?',
  },
  {
    mode: 'koga',
    q: 'Volim ____. (tata)',
    en: 'I love Dad.',
    opts: ['tata', 'tatu', 'tate', 'tatom'],
    answer: 'tatu',
    tip: 'A masculine word in -a changes like sestra: tatu.',
  },
  {
    mode: 'koga',
    q: 'Zovem ____. (kolega)',
    en: 'I am calling a colleague.',
    opts: ['kolegu', 'kolega', 'kolege', 'kolegom'],
    answer: 'kolegu',
    tip: '-a → -u, even though a colleague here is a man.',
  },
  {
    mode: 'koga',
    q: 'Vidim ____. (Luka)',
    en: 'I see Luka.',
    opts: ['Luke', 'Lukom', 'Luki', 'Luku'],
    answer: 'Luku',
    tip: 'A name in -a: -u.',
  },
  {
    mode: 'koga',
    q: 'Čekamo ____. (prijatelji)',
    en: 'We are waiting for our friends.',
    opts: ['prijatelji', 'prijatelja', 'prijatelje', 'prijateljima'],
    answer: 'prijatelje',
    tip: 'A masculine plural object ends in -e, alive or not.',
  },
  {
    mode: 'koga',
    q: 'Which sentence is correct?',
    en: 'I am buying a table and waiting for a friend.',
    opts: [
      'Kupujem stola i čekam prijatelja.',
      'Kupujem stol i čekam prijatelj.',
      'Kupujem stol i čekam prijatelja.',
      'Kupujem stola i čekam prijatelj.',
    ],
    answer: 'Kupujem stol i čekam prijatelja.',
    tip: 'The table stays, the friend changes.',
  },
  {
    mode: 'koga',
    q: 'Which sentence is correct?',
    en: 'I see a dog and a cat.',
    opts: ['Vidim pas i mačku.', 'Vidim psa i mačku.', 'Vidim psa i mački.', 'Vidim pas i mačka.'],
    answer: 'Vidim psa i mačku.',
    tip: 'pas → psa, mačka → mačku.',
  },
];
