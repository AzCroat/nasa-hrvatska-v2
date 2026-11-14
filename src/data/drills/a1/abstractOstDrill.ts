// src/data/drills/a1/abstractOstDrill.ts
//
// A1 NOUNS IN -OST — the drill for the `abstract-ost` lesson.
//
// A quality becomes a noun: feminine adjective minus -a, plus -ost (hrabra → hrabrost).
// Every noun BUILT with -ost (mlad → mladost) is a feminine i-noun (gost and most, which
// only end in -ost, are masculine), so it takes feminine agreement and i-noun endings.
//
// Three modes:
//   tvorba — building the noun from the adjective
//   rod    — feminine agreement around it
//   padezi — the i-noun endings in the cases already taught

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ABSTRACT_OST_MODE_LABELS: Record<string, string> = {
  tvorba: '🛠️ Tvorba',
  rod: '♀️ Rod',
  padezi: '🔤 Padeži',
};

export const ABSTRACT_OST_DRILL_DATA: ModeDrillItem[] = [
  {
    mode: 'tvorba',
    q: 'Imenica od "mlad" je ____.',
    en: 'The noun made from the adjective for young.',
    opts: ['mladost', 'mladstvo', 'mladanost', 'mladeost'],
    answer: 'mladost',
    tip: 'mlada → mlad- → mladost (youth).',
  },
  {
    mode: 'tvorba',
    q: 'Imenica od "hrabar" je ____.',
    en: 'The noun made from the adjective for brave.',
    opts: ['hrabarost', 'hrabrost', 'hrabrstvo', 'hrabaost'],
    answer: 'hrabrost',
    tip: 'Start from the feminine hrabra, which has lost the fleeting a.',
  },
  {
    mode: 'tvorba',
    q: 'Imenica od "mudar" je ____.',
    en: 'The noun made from the adjective for wise.',
    opts: ['mudarost', 'mudrstvo', 'mudrost', 'mudaost'],
    answer: 'mudrost',
    tip: 'mudra → mudr- → mudrost (wisdom).',
  },
  {
    mode: 'tvorba',
    q: 'Imenica od "ljubazan" je ____.',
    en: 'The noun made from the adjective for kind.',
    opts: ['ljubazanost', 'ljubaznost', 'ljubazost', 'ljubaznstvo'],
    answer: 'ljubaznost',
    tip: 'ljubazna → ljubazn- → ljubaznost (kindness).',
  },
  {
    mode: 'tvorba',
    q: 'Imenica od "važan" je ____.',
    en: 'The noun made from the adjective for important.',
    opts: ['važanost', 'važost', 'važnost', 'važnstvo'],
    answer: 'važnost',
    tip: 'važna → važn- → važnost (importance).',
  },
  {
    mode: 'tvorba',
    q: 'Imenica od "iskren" je ____.',
    en: 'The noun made from the adjective for honest.',
    opts: ['iskrenost', 'iskrnost', 'iskrenstvo', 'iskreanost'],
    answer: 'iskrenost',
    tip: 'iskrena → iskren- → iskrenost (honesty).',
  },
  {
    mode: 'tvorba',
    q: 'Imenica od "slab" je ____.',
    en: 'The noun made from the adjective for weak.',
    opts: ['slabaost', 'slabost', 'slabnost', 'slabstvo'],
    answer: 'slabost',
    tip: 'slaba → slab- → slabost (weakness).',
  },
  {
    mode: 'tvorba',
    q: 'Imenica od "sretan" u svakodnevnom govoru je ____.',
    en: 'The everyday noun for happiness.',
    opts: ['sreća', 'sretan', 'sretno', 'sretna'],
    answer: 'sreća',
    tip: 'Not every quality takes -ost: the noun from sretan is sreća.',
  },
  {
    mode: 'rod',
    q: 'Moja mladost je bila ____.',
    en: 'My youth was beautiful.',
    opts: ['lijepa', 'lijep', 'lijepo', 'lijepi'],
    answer: 'lijepa',
    tip: 'Mladost is feminine, so the adjective is too.',
  },
  {
    mode: 'rod',
    q: '____ hrabrost!',
    en: 'What great courage!',
    opts: ['Kakva', 'Kakav', 'Kakvo', 'Kakvi'],
    answer: 'Kakva',
    tip: 'Hrabrost is feminine: kakva.',
  },
  {
    mode: 'rod',
    q: 'Iskrenost je ____.',
    en: 'Honesty is important.',
    opts: ['važna', 'važan', 'važno', 'važni'],
    answer: 'važna',
    tip: 'A feminine subject takes a feminine adjective.',
  },
  {
    mode: 'rod',
    q: '____ starost je bila mirna.',
    en: 'His old age was peaceful.',
    opts: ['Njegova', 'Njegov', 'Njegovo', 'Njegovi'],
    answer: 'Njegova',
    tip: 'The possessive agrees with starost, a feminine noun.',
  },
  {
    mode: 'rod',
    q: 'Njegova mudrost je ____.',
    en: 'His wisdom is great.',
    opts: ['velika', 'velik', 'veliko', 'veliki'],
    answer: 'velika',
    tip: 'Mudrost is feminine.',
  },
  {
    mode: 'rod',
    q: 'Imam samo jednu ____.',
    en: 'I have only one option.',
    opts: ['mogućnost', 'mogućnosti', 'mogućnošću', 'mogućnosta'],
    answer: 'mogućnost',
    tip: 'The accusative of an i-noun looks like its subject form.',
  },
  {
    mode: 'rod',
    q: 'Kojeg je roda imenica "radost"?',
    en: 'What gender is the noun for joy?',
    opts: ['ženskog', 'muškog', 'srednjeg', 'nema roda'],
    answer: 'ženskog',
    tip: 'A noun built with -ost is feminine, though it ends in a consonant.',
  },
  {
    mode: 'rod',
    q: 'Točnost je na poslu ____.',
    en: 'Punctuality is needed at work.',
    opts: ['potrebna', 'potreban', 'potrebno', 'potrebni'],
    answer: 'potrebna',
    tip: 'Točnost is feminine: potrebna.',
  },
  {
    mode: 'padezi',
    q: 'Hvala na ____.',
    en: 'Thanks for the kindness.',
    opts: ['ljubaznost', 'ljubaznosti', 'ljubaznošću', 'ljubaznostu'],
    answer: 'ljubaznosti',
    tip: 'Hvala na + locative; an i-noun ends in -i.',
  },
  {
    mode: 'padezi',
    q: 'Treba mi malo ____.',
    en: 'I need a little courage.',
    opts: ['hrabrost', 'hrabrosti', 'hrabrošću', 'hrabrostu'],
    answer: 'hrabrosti',
    tip: 'Malo takes the genitive: hrabrosti.',
  },
  {
    mode: 'padezi',
    q: 'To je pitanje velike ____.',
    en: 'That is a question of great importance.',
    opts: ['važnost', 'važnosti', 'važnošću', 'važnostom'],
    answer: 'važnosti',
    tip: '"Of great importance" is the genitive.',
  },
  {
    mode: 'padezi',
    q: 'Djeca su nas dočekala s velikom ____.',
    en: 'The children greeted us with great joy.',
    opts: ['radost', 'radošću', 'radostom', 'radostima'],
    answer: 'radošću',
    tip: 'Instrumental singular of an i-noun; st becomes šć.',
  },
  {
    mode: 'padezi',
    q: 'Imamo tri ____.',
    en: 'We have three options.',
    opts: ['mogućnost', 'mogućnosti', 'mogućnošću', 'mogućnostima'],
    answer: 'mogućnosti',
    tip: 'After tri, the same form as the plural.',
  },
  {
    mode: 'padezi',
    q: 'U ____ želim živjeti na moru.',
    en: 'In old age I want to live by the sea.',
    opts: ['starost', 'starosti', 'starošću', 'starostu'],
    answer: 'starosti',
    tip: 'u + locative: starosti.',
  },
  {
    mode: 'padezi',
    q: 'Bez ____ nema prijateljstva.',
    en: 'Without honesty there is no friendship.',
    opts: ['iskrenost', 'iskrenosti', 'iskrenošću', 'iskrenostom'],
    answer: 'iskrenosti',
    tip: 'Bez takes the genitive: iskrenosti.',
  },
  {
    mode: 'padezi',
    q: 'Divim se njegovoj ____.',
    en: 'I admire his wisdom.',
    opts: ['mudrost', 'mudrosti', 'mudrošću', 'mudrostu'],
    answer: 'mudrosti',
    tip: 'Diviti se takes the dative; an i-noun ends in -i.',
  },
  {
    mode: 'padezi',
    q: 'Govorimo o toj ____.',
    en: 'We are talking about that thought.',
    opts: ['misli', 'misao', 'mislu', 'misla'],
    answer: 'misli',
    tip: 'misao keeps -ao only in the bare form; with an ending the stem is misl-.',
  },
  {
    mode: 'rod',
    q: 'To je ____ misao.',
    en: 'That is a good idea.',
    opts: ['dobra', 'dobar', 'dobro', 'dobri'],
    answer: 'dobra',
    tip: 'misao is feminine, though it ends in -ao.',
  },
];
