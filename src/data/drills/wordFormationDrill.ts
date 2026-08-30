// src/data/drills/wordFormationDrill.ts
//
// C1 WORD FORMATION — the drill for the `tvorba-rijeci` lesson.
//
// `tvorbarijeci` exists and is exactly this, but it is C2, so a C1 learner
// cannot open it. This is the C1-reachable bank.
//
// This is the lesson that changes what a dictionary is for. Croatian builds
// almost everything from a small set of prefixes and suffixes, and a learner who
// can split a word into prefix + root + suffix can guess most of the vocabulary
// they have never met — *pisati* → *napisati*, *prepisati*, *potpisati*,
// *upisati*, *opisati*, *zapisati*, and each shift is predictable rather than
// arbitrary.
//
// Three modes:
//   prefiksi — what each verbal prefix does to the meaning
//   vrsitelj — the doer suffixes, and the register each carries
//   razlaganje — splitting an unknown word and reading it

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const WORD_FORMATION_MODE_LABELS: Record<string, string> = {
  prefiksi: '🔀 Prefiksi',
  vrsitelj: '👷 Vršitelj radnje',
  razlaganje: '🧩 Razlaganje',
};

export const WORD_FORMATION_DRILL_DATA: ModeDrillItem[] = [
  // ── prefiksi ──────────────────────────────────────────────────────────────
  {
    mode: 'prefiksi',
    q: 'pisati → ____ (prepisati s jednoga na drugo)',
    en: 'to copy out',
    opts: ['prepisati', 'napisati', 'upisati', 'opisati'],
    answer: 'prepisati',
    tip: 'pre- carries "across, over": prepisati, prevesti, prenijeti.',
  },
  {
    mode: 'prefiksi',
    q: 'pisati → ____ (staviti ime na popis)',
    en: 'to enrol',
    opts: ['upisati', 'napisati', 'opisati', 'zapisati'],
    answer: 'upisati',
    tip: 'u- is "into": upisati, ući, uložiti.',
  },
  {
    mode: 'prefiksi',
    q: 'pisati → ____ (reći kakvo je nešto)',
    en: 'to describe',
    opts: ['opisati', 'napisati', 'prepisati', 'potpisati'],
    answer: 'opisati',
    tip: 'o- goes "around" the thing: opisati, obići, ogledati.',
  },
  {
    mode: 'prefiksi',
    q: 'pisati → ____ (staviti ime na dnu)',
    en: 'to sign',
    opts: ['potpisati', 'upisati', 'zapisati', 'prepisati'],
    answer: 'potpisati',
    tip: 'pot-/pod- is "under": potpisati is literally to write underneath.',
  },
  {
    mode: 'prefiksi',
    q: 'Što najčešće radi prefiks vidu glagola?',
    en: 'What does a prefix usually do to aspect?',
    opts: ['čini ga svršenim', 'čini ga nesvršenim', 'ne mijenja ga', 'briše ga'],
    answer: 'čini ga svršenim',
    tip: 'A prefix perfectivises — which is why aspect and word formation are one topic.',
  },
  {
    mode: 'prefiksi',
    q: 'raditi → ____ (dovršiti posao)',
    en: 'to work through / finish',
    opts: ['odraditi', 'poraditi', 'uraditi', 'zaraditi'],
    answer: 'odraditi',
    tip: 'od- often means completing an obligation: odraditi smjenu.',
  },
  {
    mode: 'prefiksi',
    q: 'raditi → ____ (dobiti novac)',
    en: 'to earn',
    opts: ['zaraditi', 'odraditi', 'uraditi', 'preraditi'],
    answer: 'zaraditi',
    tip: 'za- frequently marks a result achieved: zaraditi, zaspati, zapisati.',
  },
  {
    mode: 'prefiksi',
    q: 'Zašto se isplati naučiti prefikse?',
    en: 'Why learn the prefixes?',
    opts: ['značenje postaje predvidivo', 'skraćuju rečenice', 'mijenjaju rod', 'nose naglasak'],
    answer: 'značenje postaje predvidivo',
    tip: 'One root plus eight prefixes is eight words you no longer have to look up.',
  },

  // ── vrsitelj ──────────────────────────────────────────────────────────────
  {
    mode: 'vrsitelj',
    q: 'učiti → ____ (osoba koja uči druge)',
    en: 'teacher',
    opts: ['učitelj', 'učač', 'učar', 'učnik'],
    answer: 'učitelj',
    tip: '-telj is the formal doer suffix: učitelj, roditelj, prijatelj, gledatelj.',
  },
  {
    mode: 'vrsitelj',
    q: 'igrati → ____ (osoba koja igra)',
    en: 'player',
    opts: ['igrač', 'igratelj', 'igrar', 'igrak'],
    answer: 'igrač',
    tip: '-ač is the everyday one, and also names devices: igrač, upaljač, mjenjač.',
  },
  {
    mode: 'vrsitelj',
    q: 'peći → ____ (osoba koja peče kruh)',
    en: 'baker',
    opts: ['pekar', 'pekač', 'pekatelj', 'peknik'],
    answer: 'pekar',
    tip: '-ar names trades: pekar, zidar, ribar, mesar.',
  },
  {
    mode: 'vrsitelj',
    q: 'Koji je sufiks najformalniji?',
    en: 'Which suffix is the most formal?',
    opts: ['-telj', '-ač', '-ar', '-ica'],
    answer: '-telj',
    tip: 'Official and institutional Croatian reaches for -telj: djelatnik, ravnatelj, gledatelj.',
  },
  {
    mode: 'vrsitelj',
    q: 'Koji sufiks često imenuje i UREĐAJ?',
    en: 'Which one also names devices?',
    opts: ['-ač', '-telj', '-ar', '-ost'],
    answer: '-ač',
    tip: 'upaljač, mjenjač, pokretač — the same suffix as igrač, applied to a machine.',
  },
  {
    mode: 'vrsitelj',
    q: 'Koji sufiks tvori apstraktne imenice?',
    en: 'Which builds abstract nouns?',
    opts: ['-ost', '-ač', '-ar', '-telj'],
    answer: '-ost',
    tip: 'mladost, mogućnost, vrijednost — and every one of them is i-declension.',
  },
  {
    mode: 'vrsitelj',
    q: 'zidati → ____',
    en: 'bricklayer',
    opts: ['zidar', 'zidač', 'zidatelj', 'zidnik'],
    answer: 'zidar',
    tip: 'A trade → -ar: zidar.',
  },
  {
    mode: 'vrsitelj',
    q: 'gledati → ____ (formalno, npr. na televiziji)',
    en: 'viewer',
    opts: ['gledatelj', 'gledač', 'gledar', 'glednik'],
    answer: 'gledatelj',
    tip: 'Broadcasting is formal register, so -telj: gledatelji i slušatelji.',
  },

  // ── razlaganje ────────────────────────────────────────────────────────────
  {
    mode: 'razlaganje',
    q: 'Kako pristupiti nepoznatoj riječi?',
    en: 'How do you approach an unknown word?',
    opts: [
      'prefiks + korijen + sufiks',
      'potražiti odmah u rječniku',
      'preskočiti je',
      'prevesti doslovno',
    ],
    answer: 'prefiks + korijen + sufiks',
    tip: 'Split it into three and read the pieces. That is the whole method.',
  },
  {
    mode: 'razlaganje',
    q: '"Neizbježan" — koji je korijen?',
    en: 'What is the root?',
    opts: ['bjeg', 'iz', 'ne', 'an'],
    answer: 'bjeg',
    tip: 'ne + iz + bjež + an — "not able to be fled from", so unavoidable.',
  },
  {
    mode: 'razlaganje',
    q: '"Prepoznatljiv" — što znači sufiks -ljiv?',
    en: 'What does -ljiv add?',
    opts: ['mogućnost', 'prošlost', 'množinu', 'umanjenicu'],
    answer: 'mogućnost',
    tip: '-ljiv means "able to be": prepoznatljiv, čitljiv, razumljiv.',
  },
  {
    mode: 'razlaganje',
    q: '"Nerazumljiv" — koliko dijelova?',
    en: 'How many parts?',
    opts: ['četiri', 'dva', 'tri', 'pet'],
    answer: 'četiri',
    tip: 'ne + raz + um + ljiv. Each one is a piece you already know.',
  },
  {
    mode: 'razlaganje',
    q: 'Što znači prefiks "ne-" na pridjevu?',
    en: 'What does ne- do?',
    opts: ['niječe', 'pojačava', 'umanjuje', 'mijenja rod'],
    answer: 'niječe',
    tip: 'It negates, and it is written joined: nemoguć, nejasan, nezavisan.',
  },
  {
    mode: 'razlaganje',
    q: '"Vodovod" je primjer:',
    en: 'What kind of word is it?',
    opts: ['složenice', 'izvedenice', 'skraćenice', 'posuđenice'],
    answer: 'složenice',
    tip: 'A compound: two roots joined by -o-, like vodopad and zrakoplov.',
  },
  {
    mode: 'razlaganje',
    q: 'Koji se spojnik rabi u složenicama?',
    en: 'Which linking vowel joins compounds?',
    opts: ['-o-', '-a-', '-e-', '-i-'],
    answer: '-o-',
    tip: 'vod-o-vod, zrak-o-plov, rukopis. The -o- is the standard joint.',
  },
  {
    mode: 'razlaganje',
    q: 'Zašto je tvorba korisna na razini C1?',
    en: 'Why does this matter at C1?',
    opts: [
      'omogućuje pogađanje novih riječi',
      'ubrzava izgovor',
      'zamjenjuje padeže',
      'skraćuje tekst',
    ],
    answer: 'omogućuje pogađanje novih riječi',
    tip: 'At C1 the vocabulary stops being listable; guessing accurately is the only way forward.',
  },
];
