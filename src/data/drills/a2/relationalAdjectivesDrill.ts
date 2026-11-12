// src/data/drills/a2/relationalAdjectivesDrill.ts
//
// A2 RELATIONAL ADJECTIVES — the drill for the `relational-adjectives` lesson
// (A2 position 5).
//
// Three modes, eight items each:
//   tvorba    — building the adjective from a place: -ski, -čki, -ški
//   slaganje  — the adjective agreeing with its noun in gender, number and case
//   pravopis  — a small letter, except at the start of a proper name
//
// Distractors are the wrong suffix, the wrong ending or the wrong capital letter.
// Proper names are used only where the capital is certain (Zagrebačka banka,
// Europska unija, Hrvatsko narodno kazalište, Splitsko-dalmatinska županija).

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const RELATIONAL_ADJECTIVES_MODE_LABELS: Record<string, string> = {
  tvorba: '🏗️ Tvorba',
  slaganje: '🔗 Slaganje',
  pravopis: '✍️ Pravopis',
};

export const RELATIONAL_ADJECTIVES_DRILL_DATA: ModeDrillItem[] = [
  // ── tvorba ────────────────────────────────────────────────────────────────
  {
    mode: 'tvorba',
    q: 'Pridjev od imena grada Split:',
    en: 'The adjective from the town of Split.',
    opts: ['splitski', 'splitki', 'splićki', 'splitčki'],
    answer: 'splitski',
    tip: 'A stem in t takes the plain -ski.',
  },
  {
    mode: 'tvorba',
    q: 'Pridjev od imena grada Rijeka:',
    en: 'The adjective from the town of Rijeka.',
    opts: ['rijekski', 'riječki', 'riješki', 'rijekin'],
    answer: 'riječki',
    tip: 'k + ski becomes čki.',
  },
  {
    mode: 'tvorba',
    q: 'Pridjev od imena grada Osijek:',
    en: 'The adjective from the town of Osijek.',
    opts: ['osijekski', 'osječki', 'osješki', 'osijekčki'],
    answer: 'osječki',
    tip: 'k + ski becomes čki, and ije shortens to je.',
  },
  {
    mode: 'tvorba',
    q: 'Pridjev od imena grada Zagreb:',
    en: 'The adjective from the city of Zagreb.',
    opts: ['zagrebski', 'zagrebački', 'zagrebški', 'zagrebčki'],
    answer: 'zagrebački',
    tip: 'One to learn as a word: -ački.',
  },
  {
    mode: 'tvorba',
    q: 'Pridjev od imena grada Dubrovnik:',
    en: 'The adjective from the town of Dubrovnik.',
    opts: ['dubrovnički', 'dubrovački', 'dubrovnikski', 'dubrovski'],
    answer: 'dubrovački',
    tip: 'Another one to learn as a word: -ački.',
  },
  {
    mode: 'tvorba',
    q: 'Pridjev od imena zemlje Njemačka:',
    en: 'The adjective from the country Germany.',
    opts: ['njemački', 'njemačkski', 'njemaški', 'njemačanski'],
    answer: 'njemački',
    tip: 'A country in -ka just switches to -i.',
  },
  {
    mode: 'tvorba',
    q: 'Pridjev od imena grada Pariz:',
    en: 'The adjective from the city of Paris.',
    opts: ['pariski', 'pariški', 'parizki', 'pariščki'],
    answer: 'pariški',
    tip: 'z and the ending blend into -ški.',
  },
  {
    mode: 'tvorba',
    q: 'Pridjev od imena poluotoka Istra:',
    en: 'The adjective from the Istrian peninsula.',
    opts: ['istrski', 'istarski', 'istrinski', 'istrijski'],
    answer: 'istarski',
    tip: 'An a appears between the s and the r.',
  },
  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: 'Šetamo po ____ rivi.',
    en: 'We are walking along the Split waterfront.',
    opts: ['splitski', 'splitskoj', 'splitsku', 'splitska'],
    answer: 'splitskoj',
    tip: 'Po + locative, feminine: -oj.',
  },
  {
    mode: 'slaganje',
    q: 'Pijem ____ vino.',
    en: 'I am drinking Istrian wine.',
    opts: ['istarski', 'istarsko', 'istarska', 'istarskog'],
    answer: 'istarsko',
    tip: 'Vino is neuter.',
  },
  {
    mode: 'slaganje',
    q: 'Volim ____ klape.',
    en: 'I love Dalmatian a cappella groups.',
    opts: ['dalmatinski', 'dalmatinska', 'dalmatinske', 'dalmatinskih'],
    answer: 'dalmatinske',
    tip: 'Klape is a feminine plural object.',
  },
  {
    mode: 'slaganje',
    q: 'Ovo je ____ tramvaj.',
    en: 'This is a Zagreb tram.',
    opts: ['zagrebački', 'zagrebačka', 'zagrebačko', 'zagrebačke'],
    answer: 'zagrebački',
    tip: 'Tramvaj is masculine.',
  },
  {
    mode: 'slaganje',
    q: '____ zidine su stare.',
    en: 'The Dubrovnik walls are old.',
    opts: ['Dubrovački', 'Dubrovačka', 'Dubrovačke', 'Dubrovačko'],
    answer: 'Dubrovačke',
    tip: 'Zidine is a feminine plural; the capital is only the start of the sentence.',
  },
  {
    mode: 'slaganje',
    q: 'Kupujemo ____ kulen.',
    en: 'We are buying Slavonian sausage.',
    opts: ['slavonsku', 'slavonski', 'slavonskog', 'slavonsko'],
    answer: 'slavonski',
    tip: 'A masculine thing does not change in the accusative.',
  },
  {
    mode: 'slaganje',
    q: 'Gledam ____ film.',
    en: 'I am watching a German film.',
    opts: ['njemačku', 'njemački', 'njemačkog', 'njemačka'],
    answer: 'njemački',
    tip: 'Film is a masculine thing.',
  },
  {
    mode: 'slaganje',
    q: 'Ona radi u ____ bolnici.',
    en: 'She works at the Osijek hospital.',
    opts: ['osječki', 'osječka', 'osječkoj', 'osječku'],
    answer: 'osječkoj',
    tip: 'U + locative, feminine: -oj.',
  },
  // ── pravopis ──────────────────────────────────────────────────────────────
  {
    mode: 'pravopis',
    q: 'Koja je rečenica pravilno napisana?',
    en: 'Which sentence is spelled correctly? (I speak Croatian.)',
    opts: ['Govorim Hrvatski.', 'Govorim hrvatski.', 'govorim Hrvatski.', 'Govorim HRVATSKI.'],
    answer: 'Govorim hrvatski.',
    tip: 'A language takes a small letter.',
  },
  {
    mode: 'pravopis',
    q: 'Koja je rečenica pravilno napisana?',
    en: 'Which sentence is spelled correctly? (I love the Split waterfront.)',
    opts: [
      'Volim splitsku rivu.',
      'Volim Splitsku rivu.',
      'Volim Splitsku Rivu.',
      'volim splitsku rivu.',
    ],
    answer: 'Volim splitsku rivu.',
    tip: 'Capital only at the start of the sentence.',
  },
  {
    mode: 'pravopis',
    q: 'Kako se pravilno piše ime banke?',
    en: 'How is the name of the bank written correctly?',
    opts: ['zagrebačka banka', 'Zagrebačka banka', 'Zagrebačka Banka', 'ZAGREBAČKA banka'],
    answer: 'Zagrebačka banka',
    tip: 'Only the first word of a name takes a capital.',
  },
  {
    mode: 'pravopis',
    q: 'Kako se pravilno piše ime zajednice europskih država?',
    en: 'How is the name of the union of European states written?',
    opts: ['europska unija', 'Europska unija', 'Europska Unija', 'europska Unija'],
    answer: 'Europska unija',
    tip: 'The adjective opens the name, so it takes the capital.',
  },
  {
    mode: 'pravopis',
    q: 'Kako se pravilno piše ime kazališta?',
    en: 'How is the name of the national theatre written?',
    opts: [
      'hrvatsko narodno kazalište',
      'Hrvatsko narodno kazalište',
      'Hrvatsko Narodno Kazalište',
      'hrvatsko Narodno kazalište',
    ],
    answer: 'Hrvatsko narodno kazalište',
    tip: 'One capital, on the first word.',
  },
  {
    mode: 'pravopis',
    q: 'Koja je rečenica pravilno napisana?',
    en: 'Which sentence is spelled correctly? (I am learning the German language.)',
    opts: [
      'Učim Njemački jezik.',
      'Učim njemački jezik.',
      'Učim Njemački Jezik.',
      'Učim njemački Jezik.',
    ],
    answer: 'Učim njemački jezik.',
    tip: 'Small letters for both words.',
  },
  {
    mode: 'pravopis',
    q: 'Čitam ____ novine.',
    en: 'I am reading Croatian newspapers.',
    opts: ['hrvatske', 'Hrvatske', 'HRVATSKE', 'Hrvatska'],
    answer: 'hrvatske',
    tip: 'A small letter, and novine is a feminine plural.',
  },
  {
    mode: 'pravopis',
    q: 'Kako se pravilno piše ime županije?',
    en: 'How is the name of the Split-Dalmatia county written?',
    opts: [
      'splitsko-dalmatinska županija',
      'Splitsko-dalmatinska županija',
      'Splitsko-Dalmatinska Županija',
      'splitsko-Dalmatinska županija',
    ],
    answer: 'Splitsko-dalmatinska županija',
    tip: 'Only the first word of the name takes a capital.',
  },
];
