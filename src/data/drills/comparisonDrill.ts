// src/data/drills/comparisonDrill.ts
//
// B1 COMPARISON — the drill for the `comparatives-a2` lesson (B1 since the Croaticum
// restructure; the id keeps its old name).
//
// `stupnjevanje` exists but is B2, so the A2 lesson had no reachable drill. The
// content splits cleanly into one thing that is mechanical (add -iji, prefix
// naj-) and one that is a real choice English does not make the learner face:
// od + genitive versus nego. Both mean "than", and picking the wrong one is the
// mistake that survives longest, because od looks like the easy option and stops
// working the moment the second half of the comparison is anything but a bare
// noun.
//
// Three modes:
//   tvorba     — forming the comparative
//   nepravilni — the handful that must simply be known (dobar, zao/loš, velik, malen, dug)
//   nego       — od + genitive vs nego, and the superlative

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const COMPARISON_MODE_LABELS: Record<string, string> = {
  tvorba: '🔧 Tvorba komparativa',
  nepravilni: '⭐ Nepravilni oblici',
  nego: '⚖️ Od ili nego',
};

export const COMPARISON_DRILL_DATA: ModeDrillItem[] = [
  // ── tvorba ────────────────────────────────────────────────────────────────
  {
    mode: 'tvorba',
    q: 'jednostavan → ____',
    en: 'simple → simpler',
    opts: ['jednostavniji', 'jednostavni', 'jednostavnij', 'najjednostavniji'],
    answer: 'jednostavniji',
    tip: 'The regular pattern: stem + -iji.',
  },
  {
    mode: 'tvorba',
    q: 'star → ____',
    en: 'old → older',
    opts: ['stariji', 'starji', 'najstariji', 'stari'],
    answer: 'stariji',
    tip: 'star → stariji.',
  },
  {
    mode: 'tvorba',
    q: 'lijep → ____',
    en: 'beautiful → more beautiful',
    opts: ['ljepši', 'lijepiji', 'lijepši', 'najljepši'],
    answer: 'ljepši',
    tip: 'The -ši group, and the ije shortens to je: lijep → ljepši.',
  },
  {
    mode: 'tvorba',
    q: 'lak → ____',
    en: 'easy → easier',
    opts: ['lakši', 'lakiji', 'laki', 'najlakši'],
    answer: 'lakši',
    tip: 'lak → lakši, like lijep → ljepši.',
  },
  {
    mode: 'tvorba',
    q: 'skup → ____',
    en: 'expensive → more expensive',
    opts: ['skuplji', 'skupiji', 'skupši', 'najskuplji'],
    answer: 'skuplji',
    tip: 'The -ji ending fuses with the p: skup → skuplji.',
  },
  {
    mode: 'tvorba',
    q: 'Kako se tvori superlativ?',
    en: 'How is the superlative formed?',
    opts: ['naj- + komparativ', 'naj- + osnova', 'super- + pridjev', 'ponavljanjem'],
    answer: 'naj- + komparativ',
    tip: 'najbolji, najveći, najljepši — one prefix, no other change.',
  },
  {
    mode: 'tvorba',
    q: 'brz → ____',
    en: 'fast → faster',
    opts: ['brži', 'brziji', 'brzši', 'najbrži'],
    answer: 'brži',
    tip: 'brz → brži.',
  },
  {
    mode: 'tvorba',
    q: 'visok → ____',
    en: 'tall → taller',
    opts: ['viši', 'visokiji', 'najviši', 'visočiji'],
    answer: 'viši',
    tip: 'visok drops -ok and takes -ji, and s + j gives š: viši. A sound change, not an irregular.',
  },
  {
    mode: 'tvorba',
    q: 'Koliko nastavaka ima komparativ?',
    en: 'How many comparative endings are there?',
    opts: ['tri', 'jedan', 'dva', 'pet'],
    answer: 'tri',
    tip: '-iji, -ji and -ši. Most adjectives take the first.',
  },

  // ── nepravilni ────────────────────────────────────────────────────────────
  {
    mode: 'nepravilni',
    q: 'dobar → ____',
    en: 'good → better',
    opts: ['bolji', 'dobriji', 'najbolji', 'dobro'],
    answer: 'bolji',
    tip: 'dobar → bolji → najbolji. Nothing in the form gives it away; learn it whole.',
  },
  {
    mode: 'nepravilni',
    q: 'loš → ____',
    en: 'bad → worse',
    opts: ['gori', 'loše', 'najgori', 'goriji'],
    answer: 'gori',
    tip: 'loš → gori → najgori. (Lošiji is standard too.)',
  },
  {
    mode: 'nepravilni',
    q: 'velik → ____',
    en: 'big → bigger',
    opts: ['veći', 'velikiji', 'najveći', 'velik'],
    answer: 'veći',
    tip: 'velik → veći → najveći.',
  },
  {
    mode: 'nepravilni',
    q: 'malen → ____',
    en: 'small → smaller',
    opts: ['manji', 'maleniji', 'najmanji', 'malenši'],
    answer: 'manji',
    tip: 'malen → manji → najmanji.',
  },
  {
    mode: 'nepravilni',
    q: 'dug → ____',
    en: 'long → longer',
    opts: ['dulji', 'dugiji', 'najdulji', 'dug'],
    answer: 'dulji',
    tip: 'dug and dugačak → dulji → najdulji (duži is also standard).',
  },
  {
    mode: 'nepravilni',
    q: 'zao → ____',
    en: 'bad, evil → worse',
    opts: ['gori', 'zaliji', 'najgori', 'zao'],
    answer: 'gori',
    tip: 'zao shares its comparative with loš: gori → najgori.',
  },
  {
    mode: 'nepravilni',
    q: 'Superlativ od "dobar":',
    en: 'The superlative of dobar:',
    opts: ['najbolji', 'najdobriji', 'bolji', 'naj dobar'],
    answer: 'najbolji',
    tip: 'The prefix goes on the irregular comparative, not the base adjective.',
  },
  {
    mode: 'nepravilni',
    q: 'Ovo je ____ restoran u gradu. (loš)',
    en: 'This is the worst restaurant in town.',
    opts: ['najgori', 'gori', 'loš', 'goriji'],
    answer: 'najgori',
    tip: 'loš → gori → najgori.',
  },
  {
    mode: 'nepravilni',
    q: 'Koliko nepravilnih komparativa treba znati napamet?',
    en: 'How many irregulars must you memorise?',
    opts: ['nekolicinu', 'nijedan', 'sve pridjeve', 'desetke'],
    answer: 'nekolicinu',
    tip: 'A handful — dobar, zao/loš, velik, malen, dug. Everything else follows -iji, -ji or -ši.',
  },

  // ── nego ──────────────────────────────────────────────────────────────────
  {
    mode: 'nego',
    q: 'Viši je ____ mene.',
    en: 'He is taller than me.',
    opts: ['od', 'nego', 'kao', 'za'],
    answer: 'od',
    tip: 'A bare noun or pronoun → od + genitive: viši od mene.',
  },
  {
    mode: 'nego',
    q: 'Bolje je učiti ____ spavati.',
    en: 'It is better to study than to sleep.',
    opts: ['nego', 'od', 'kao', 'iz'],
    answer: 'nego',
    tip: 'Comparing two verbs or two phrases → nego. Od cannot govern an infinitive.',
  },
  {
    mode: 'nego',
    q: 'Zagreb je veći ____ Splita.',
    en: 'Zagreb is bigger than Split.',
    opts: ['od', 'nego', 'kao', 'do'],
    answer: 'od',
    tip: 'One noun against another → od + genitive: od Splita.',
  },
  {
    mode: 'nego',
    q: 'Radije pijem čaj ____ kavu.',
    en: 'I would rather drink tea than coffee.',
    opts: ['nego', 'od', 'kao', 'za'],
    answer: 'nego',
    tip: 'Both items are objects of the same verb, so nego, and the case matches: kavu.',
  },
  {
    mode: 'nego',
    q: 'Koji padež traži "od" u usporedbi?',
    en: 'Which case does od take?',
    opts: ['genitiv', 'akuzativ', 'dativ', 'lokativ'],
    answer: 'genitiv',
    tip: 'Always the genitive: od mene, od Splita, od tebe.',
  },
  {
    mode: 'nego',
    q: 'Kada "od" ne radi?',
    en: 'When does od not work?',
    opts: [
      'kad se uspoređuju surečenice',
      'kad je pridjev nepravilan',
      'u superlativu',
      'u množini',
    ],
    answer: 'kad se uspoređuju surečenice',
    tip: 'Od needs a single noun phrase after it. Anything longer takes nego.',
  },
  {
    mode: 'nego',
    q: 'Ovo je ____ grad u Hrvatskoj. (velik)',
    en: 'This is the biggest city in Croatia.',
    opts: ['najveći', 'veći', 'velik', 'najvelik'],
    answer: 'najveći',
    tip: 'The superlative needs no "than" at all.',
  },
  {
    mode: 'nego',
    q: 'Danas je hladnije ____ jučer.',
    en: 'Today is colder than yesterday.',
    opts: ['nego', 'od', 'kao', 'do'],
    answer: 'nego',
    tip: 'Jučer is an adverb, not a noun, so it cannot take the genitive — nego.',
  },
];
