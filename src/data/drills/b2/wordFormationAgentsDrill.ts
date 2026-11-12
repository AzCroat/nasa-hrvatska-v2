// src/data/drills/b2/wordFormationAgentsDrill.ts
//
// B2 WORD FORMATION — the drill for the `word-formation-agents` lesson.
//
// Agent nouns and their female forms, nouns of quality, diminutives and
// augmentatives. Every correct answer is a real, standard word; every distractor is
// either a made-up formation or a real word from the same family with a different
// meaning (igračka, knjižnica, mladić). A second correct formation is never offered:
// mačić (also "kitten") and spisatelj (also "writer") are left out on purpose.
//
// Three modes:
//   vrsitelj  — who does it, and the woman who does it
//   svojstvo  — the noun of a quality or state
//   velicina  — small and big

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const WORD_FORMATION_AGENTS_MODE_LABELS: Record<string, string> = {
  vrsitelj: '🧑‍🔧 Tko to radi',
  svojstvo: '💎 Svojstvo',
  velicina: '🔍 Malo i veliko',
};

export const WORD_FORMATION_AGENTS_DRILL_DATA: ModeDrillItem[] = [
  // ── vrsitelj ──────────────────────────────────────────────────────────────
  {
    mode: 'vrsitelj',
    q: 'Onaj tko vozi je ____.',
    en: 'A person who drives.',
    opts: ['vozač', 'vožnja', 'vozilo', 'vozni'],
    answer: 'vozač',
    tip: 'voziti + the agent suffix -ač.',
  },
  {
    mode: 'vrsitelj',
    q: 'Onaj tko igra je ____.',
    en: 'A person who plays a sport or a game.',
    opts: ['igrač', 'igračka', 'igralište', 'igra'],
    answer: 'igrač',
    tip: 'igrati + -ač; igračka is a toy, igralište a playground.',
  },
  {
    mode: 'vrsitelj',
    q: 'Onaj tko piše knjige je ____.',
    en: 'A person who writes books.',
    opts: ['pisac', 'pismo', 'pisaljka', 'pisanje'],
    answer: 'pisac',
    tip: 'pisati + -ac; the a drops in the other cases: pisca.',
  },
  {
    mode: 'vrsitelj',
    q: 'Onaj tko radi u tvornici je ____.',
    en: 'A person who works in a factory.',
    opts: ['radnik', 'rad', 'radionica', 'radnja'],
    answer: 'radnik',
    tip: 'raditi + -ik.',
  },
  {
    mode: 'vrsitelj',
    q: 'Muškarac koji uči djecu u školi je ____.',
    en: 'A man who teaches children at school.',
    opts: ['učitelj', 'učenik', 'učionica', 'udžbenik'],
    answer: 'učitelj',
    tip: 'učiti + -telj; učenik is the pupil.',
  },
  {
    mode: 'vrsitelj',
    q: 'Ženski oblik od "učenik" je ____.',
    en: 'The female form.',
    opts: ['učenica', 'učenikica', 'učenka', 'učenikinja'],
    answer: 'učenica',
    tip: 'The k of -ik drops before -ica.',
  },
  {
    mode: 'vrsitelj',
    q: 'Ženski oblik od "vozač" je ____.',
    en: 'The female form.',
    opts: ['vozačica', 'vozakinja', 'vozica', 'vozačina'],
    answer: 'vozačica',
    tip: 'Nouns in -ač take -ica.',
  },
  {
    mode: 'vrsitelj',
    q: 'Ženski oblik od "novinar" je ____.',
    en: 'The female form.',
    opts: ['novinarka', 'novinarstvo', 'novinarski', 'novinarnica'],
    answer: 'novinarka',
    tip: 'novinar takes -ka; novinarstvo is journalism.',
  },
  {
    mode: 'vrsitelj',
    q: 'Ženski oblik od "ravnatelj" je ____.',
    en: 'The female head of a school.',
    opts: ['ravnateljica', 'ravnateljka', 'ravnateljina', 'ravnateljstvo'],
    answer: 'ravnateljica',
    tip: 'Nouns in -telj take -ica.',
  },

  // ── svojstvo ──────────────────────────────────────────────────────────────
  {
    mode: 'svojstvo',
    q: 'Imenica od pridjeva "mlad" je ____.',
    en: 'The quality noun from the adjective meaning young.',
    opts: ['mladost', 'mladić', 'mladica', 'mladenac'],
    answer: 'mladost',
    tip: '-ost names a quality; mladić is a young man.',
  },
  {
    mode: 'svojstvo',
    q: 'Imenica od pridjeva "hrabar" je ____.',
    en: 'The noun meaning courage.',
    opts: ['hrabrost', 'hrabarost', 'hrabrota', 'hrabrina'],
    answer: 'hrabrost',
    tip: '-ost, and the fleeting a drops.',
  },
  {
    mode: 'svojstvo',
    q: 'Imenica od pridjeva "lijep" je ____.',
    en: 'The noun meaning beauty.',
    opts: ['ljepota', 'lijepost', 'lijepota', 'ljepost'],
    answer: 'ljepota',
    tip: '-ota, and ije shortens to je.',
  },
  {
    mode: 'svojstvo',
    q: 'Imenica od pridjeva "dobar" je ____.',
    en: 'The noun meaning kindness, goodness.',
    opts: ['dobrota', 'dobrost', 'dobarstvo', 'dobarnost'],
    answer: 'dobrota',
    tip: '-ota, and the fleeting a drops.',
  },
  {
    mode: 'svojstvo',
    q: 'Imenica od pridjeva "brz" je ____.',
    en: 'The noun meaning speed.',
    opts: ['brzina', 'brzota', 'brzstvo', 'brzanje'],
    answer: 'brzina',
    tip: '-ina, like visina and dubina.',
  },
  {
    mode: 'svojstvo',
    q: 'Imenica od "siromah" koja znači stanje je ____.',
    en: 'The noun meaning poverty.',
    opts: ['siromaštvo', 'siromahost', 'siromahota', 'siromahina'],
    answer: 'siromaštvo',
    tip: '-stvo names a state.',
  },
  {
    mode: 'svojstvo',
    q: 'Imenica od pridjeva "nezaposlen" je ____.',
    en: 'The noun meaning unemployment.',
    opts: ['nezaposlenost', 'nezaposlenstvo', 'nezaposlenota', 'nezaposlenina'],
    answer: 'nezaposlenost',
    tip: '-ost on the adjective.',
  },
  {
    mode: 'svojstvo',
    q: 'Odnos dvoje prijatelja zove se ____.',
    en: 'The bond between two friends.',
    opts: ['prijateljstvo', 'prijateljica', 'prijateljski', 'prijateljost'],
    answer: 'prijateljstvo',
    tip: '-stvo names a relationship; prijateljica is a female friend.',
  },

  // ── velicina ──────────────────────────────────────────────────────────────
  {
    mode: 'velicina',
    q: 'Mala kuća je ____.',
    en: 'A little house.',
    opts: ['kućica', 'kućerina', 'kućanstvo', 'kućni'],
    answer: 'kućica',
    tip: 'Feminine nouns take -ica.',
  },
  {
    mode: 'velicina',
    q: 'Mali stol je ____.',
    en: 'A little table.',
    opts: ['stolić', 'stolica', 'stolar', 'stolnjak'],
    answer: 'stolić',
    tip: 'Masculine nouns take -ić; stolica is a chair.',
  },
  {
    mode: 'velicina',
    q: 'Mala knjiga je ____.',
    en: 'A small book, a booklet.',
    opts: ['knjižica', 'knjižnica', 'knjižara', 'knjigić'],
    answer: 'knjižica',
    tip: 'g softens to ž before -ica; knjižnica is a library.',
  },
  {
    mode: 'velicina',
    q: 'Mala ruka je ____.',
    en: 'A little hand.',
    opts: ['ručica', 'rukić', 'ručerina', 'ručnik'],
    answer: 'ručica',
    tip: 'k softens to č before -ica; ručnik is a towel.',
  },
  {
    mode: 'velicina',
    q: 'Mlada mačka je ____.',
    en: 'A young cat.',
    opts: ['mače', 'mačak', 'mačji', 'mačka'],
    answer: 'mače',
    tip: 'Young animals take a short neuter form; mačak is a tomcat.',
  },
  {
    mode: 'velicina',
    q: 'Golema, upadljiva kuća, rečeno s čuđenjem, je ____.',
    en: 'A huge, eye-catching house, said with surprise.',
    opts: ['kućerina', 'kućica', 'kućni', 'kućanstvo'],
    answer: 'kućerina',
    tip: 'An augmentative: big, and never neutral.',
  },
  {
    mode: 'velicina',
    q: 'Što znači "bratić"?',
    en: 'Choose the meaning.',
    opts: ['a cousin', 'a little brother', 'a brotherhood', 'a twin'],
    answer: 'a cousin',
    tip: 'Some diminutive-looking words became separate words.',
  },
];
