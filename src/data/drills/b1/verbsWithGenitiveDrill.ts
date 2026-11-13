// src/data/drills/b1/verbsWithGenitiveDrill.ts
//
// B1 VERBS WITH THE GENITIVE — the drill for the `verbs-with-genitive` lesson.
//
// bojati se, plašiti se, sjećati se / sjetiti se, sramiti se, čuvati se, odreći se:
// what you fear, remember, are ashamed of or give up goes into the genitive. The
// errors are the accusative ("Bojim se mrak"), the English "remember about"
// ("sjećam se o…"), the -am present for bojati se ("bojam se") and a short pronoun
// placed after se.
//
// Three modes:
//   padez    — the genitive after the verb
//   prezent  — the -ati → -im present: bojim se, držim, ležim, trčim, stojim
//   zamjenica — pronouns and their place before se

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VERBS_WITH_GENITIVE_MODE_LABELS: Record<string, string> = {
  padez: '🕷️ Čega?',
  prezent: '✋ Bojim se, držim',
  zamjenica: '👤 Zamjenice',
};

export const VERBS_WITH_GENITIVE_DRILL_DATA: ModeDrillItem[] = [
  // ── padez ─────────────────────────────────────────────────────────────────
  {
    mode: 'padez',
    q: 'Kad sam bio mali, bojao sam se ____.',
    en: 'When I was little, I was afraid of the dark.',
    opts: ['mraka', 'mrak', 'mraku', 'mrakom'],
    answer: 'mraka',
    tip: 'Bojati se takes the genitive.',
  },
  {
    mode: 'padez',
    q: 'Moja sestra se boji ____.',
    en: 'My sister is afraid of heights.',
    opts: ['visine', 'visinu', 'visini', 'visina'],
    answer: 'visine',
    tip: 'Visina → visine in the genitive.',
  },
  {
    mode: 'padez',
    q: '____ se najviše bojiš?',
    en: 'What are you most afraid of?',
    opts: ['Čega', 'Što', 'Čemu', 'Čime'],
    answer: 'Čega',
    tip: 'The genitive of što is čega.',
  },
  {
    mode: 'padez',
    q: 'Sjećaš li se ____?',
    en: 'Do you remember that summer?',
    opts: ['tog ljeta', 'to ljeto', 'tom ljetu', 'o tom ljetu'],
    answer: 'tog ljeta',
    tip: 'Sjećati se takes the genitive, with no preposition.',
  },
  {
    mode: 'padez',
    q: 'Na vratima piše: Čuvaj se ____!',
    en: 'The sign on the gate says: Beware of the dog!',
    opts: ['psa', 'pas', 'psu', 'psom'],
    answer: 'psa',
    tip: 'Čuvati se takes the genitive: psa.',
  },
  {
    mode: 'padez',
    q: 'Odrekla sam se ____.',
    en: 'I gave up sugar.',
    opts: ['šećera', 'šećer', 'šećeru', 'šećerom'],
    answer: 'šećera',
    tip: 'Odreći se takes the genitive.',
  },
  {
    mode: 'padez',
    q: 'Ne sramim se svojih ____.',
    en: 'I am not ashamed of my mistakes.',
    opts: ['pogrešaka', 'pogreške', 'pogreškama', 'pogreška'],
    answer: 'pogrešaka',
    tip: 'Genitive plural, with the slipped-in a: pogrešaka.',
  },
  {
    mode: 'padez',
    q: 'Nisam se sjetila tvog ____.',
    en: 'I didn’t remember your birthday.',
    opts: ['rođendana', 'rođendan', 'rođendanu', 'rođendanom'],
    answer: 'rođendana',
    tip: 'Sjetiti se takes the genitive.',
  },
  {
    mode: 'padez',
    q: 'Which sentence is correct?',
    en: 'Choose the correct sentence.',
    opts: [
      'Zaboravio sam adresu.',
      'Zaboravio sam adresi.',
      'Zaboravio sam se adrese.',
      'Zaboravio sam o adresi.',
    ],
    answer: 'Zaboravio sam adresu.',
    tip: 'Zaboraviti is NOT a genitive verb: it takes the accusative.',
  },

  // ── prezent ───────────────────────────────────────────────────────────────
  {
    mode: 'prezent',
    q: 'Ja se ____ zmija.',
    en: 'I am afraid of snakes.',
    opts: ['bojim', 'bojam', 'bojem', 'bojajem'],
    answer: 'bojim',
    tip: 'Bojati se has an -im present.',
  },
  {
    mode: 'prezent',
    q: 'Djeca se ne ____ pasa.',
    en: 'The children aren’t afraid of dogs.',
    opts: ['boje', 'bojaju', 'boju', 'bojimo'],
    answer: 'boje',
    tip: 'The oni form of bojati se: boje se.',
  },
  {
    mode: 'prezent',
    q: 'Baka ____ unuka za ruku.',
    en: 'Grandma holds her grandson by the hand.',
    opts: ['drži', 'drža', 'držaje', 'držu'],
    answer: 'drži',
    tip: 'Držati is an -ati → -im verb: drži.',
  },
  {
    mode: 'prezent',
    q: 'Mačka ____ na suncu.',
    en: 'The cat is lying in the sun.',
    opts: ['leži', 'leža', 'ležaje', 'ležu'],
    answer: 'leži',
    tip: 'Ležati → ležim, leži.',
  },
  {
    mode: 'prezent',
    q: 'Djeca ____ po parku.',
    en: 'The children are running around the park.',
    opts: ['trče', 'trčaju', 'trču', 'trčimo'],
    answer: 'trče',
    tip: 'Trčati → trčim … trče.',
  },
  {
    mode: 'prezent',
    q: 'Zašto ____ na kiši?',
    en: 'Why are you standing in the rain?',
    opts: ['stojiš', 'stajaš', 'stajiš', 'stoješ'],
    answer: 'stojiš',
    tip: 'Stajati has the present stojim, stojiš.',
  },
  {
    mode: 'prezent',
    q: 'Dijete ____ deset sati svake noći.',
    en: 'The child sleeps ten hours every night.',
    opts: ['spava', 'spavi', 'spavu', 'spavije'],
    answer: 'spava',
    tip: 'Spavati is NOT an -im verb: spavam, spava.',
  },
  {
    mode: 'prezent',
    q: 'Mi se ____ ispita.',
    en: 'We are afraid of the exam.',
    opts: ['bojimo', 'bojamo', 'bojemo', 'bojaju'],
    answer: 'bojimo',
    tip: 'The mi form of bojati se: bojimo se.',
  },
  {
    mode: 'prezent',
    q: 'Mačke ____ od našeg psa.',
    en: 'The cats run away from our dog.',
    opts: ['bježe', 'bježu', 'bježaju', 'bježimo'],
    answer: 'bježe',
    tip: 'bježati is an -ati → -im verb: bježim, bježiš… oni bježe.',
  },

  // ── zamjenica ─────────────────────────────────────────────────────────────
  {
    mode: 'zamjenica',
    q: 'Sjećaš li ____ se? Bili smo susjedi.',
    en: 'Do you remember me? We were neighbours.',
    opts: ['me', 'mi', 'mene', 'ja'],
    answer: 'me',
    tip: 'The short genitive of ja, before se.',
  },
  {
    mode: 'zamjenica',
    q: 'Bojim ____ se.',
    en: 'I am afraid of him.',
    opts: ['ga', 'mu', 'on', 'njemu'],
    answer: 'ga',
    tip: 'The short genitive of on is ga.',
  },
  {
    mode: 'zamjenica',
    q: 'Ne boj ____ se, oni su dobri ljudi.',
    en: 'Don’t be afraid of them, they are good people.',
    opts: ['ih', 'im', 'oni', 'njima'],
    answer: 'ih',
    tip: 'The short genitive of oni is ih.',
  },
  {
    mode: 'zamjenica',
    q: 'Ne bojim se ____, nego tvog psa.',
    en: 'I am not afraid of you, but of your dog.',
    opts: ['tebe', 'tebi', 'ti', 'tobom'],
    answer: 'tebe',
    tip: 'With contrast the long genitive is used: tebe.',
  },
  {
    mode: 'zamjenica',
    q: 'Which sentence is correct?',
    en: 'Choose the correct sentence.',
    opts: ['Sjećaš li me se?', 'Sjećaš li se me?', 'Sjećaš me li se?', 'Me sjećaš li se?'],
    answer: 'Sjećaš li me se?',
    tip: 'After li, the short pronoun, then se.',
  },
  {
    mode: 'zamjenica',
    q: 'Which sentence is correct?',
    en: 'Choose the correct sentence.',
    opts: ['Bojim se njega.', 'Bojim se on.', 'Bojim se njemu.', 'Bojim se njim.'],
    answer: 'Bojim se njega.',
    tip: 'The long genitive of on is njega.',
  },
];
