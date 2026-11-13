// src/data/drills/c1/objectiveGenitiveDrill.ts
//
// C1 THE GENITIVE AFTER A NOUN — the drill for the `objective-genitive` lesson
// (C1 position 27).
//
// Three modes, eight items each:
//   odnos      — subjective or objective: dolazak gostiju, zaštita okoliša
//   posvojnost — očeva kuća against kuća moga oca; the possessive adjective's agreement
//   oblik      — apposition (u gradu Zagrebu) and the genitive of quality
//
// A genitive after a bare single owner (kuća oca) is stylistically weak rather than
// ungrammatical, so it is never offered as a wrong option.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const OBJECTIVE_GENITIVE_MODE_LABELS: Record<string, string> = {
  odnos: '🔄 Tko radi, što se radi',
  posvojnost: '🏠 Čije je',
  oblik: '🧩 Oblik',
};

export const OBJECTIVE_GENITIVE_DRILL_DATA: ModeDrillItem[] = [
  // ── odnos ─────────────────────────────────────────────────────────────────
  {
    mode: 'odnos',
    q: 'Zaštita okoliša: što je okoliš?',
    en: 'In the phrase meaning environmental protection, what is the environment?',
    opts: ['ono što se štiti', 'onaj koji štiti', 'vlasnik zaštite', 'mjesto zaštite'],
    answer: 'ono što se štiti',
    tip: 'netko štiti okoliš — an objective genitive.',
  },
  {
    mode: 'odnos',
    q: 'Dolazak gostiju: što su gosti?',
    en: 'In the phrase meaning the arrival of the guests, what are the guests?',
    opts: ['oni koji dolaze', 'ono što se donosi', 'vlasnici dolaska', 'mjesto dolaska'],
    answer: 'oni koji dolaze',
    tip: 'gosti dolaze — a subjective genitive.',
  },
  {
    mode: 'odnos',
    q: 'Izgradnja mosta: što je most?',
    en: 'In the phrase meaning the building of the bridge, what is the bridge?',
    opts: ['ono što se gradi', 'onaj koji gradi', 'vlasnik gradnje', 'vrsta gradnje'],
    answer: 'ono što se gradi',
    tip: 'netko gradi most.',
  },
  {
    mode: 'odnos',
    q: 'Pad cijena: što su cijene?',
    en: 'In the phrase meaning the fall in prices, what are the prices?',
    opts: ['ono što pada', 'ono što netko spušta', 'vlasnici pada', 'mjesto pada'],
    answer: 'ono što pada',
    tip: 'cijene padaju: padati has no object.',
  },
  {
    mode: 'odnos',
    q: 'Osvajanje vrha: što je vrh?',
    en: 'In the phrase meaning the conquest of the summit, what is the summit?',
    opts: ['ono što se osvaja', 'onaj koji osvaja', 'vlasnik osvajanja', 'vrsta osvajanja'],
    answer: 'ono što se osvaja',
    tip: 'netko osvaja vrh.',
  },
  {
    mode: 'odnos',
    q: 'Pjevanje ptica: što su ptice?',
    en: 'In the phrase meaning the singing of birds, what are the birds?',
    opts: ['one koje pjevaju', 'ono što se pjeva', 'vlasnici pjesme', 'mjesto pjevanja'],
    answer: 'one koje pjevaju',
    tip: 'ptice pjevaju — the doer.',
  },
  {
    mode: 'odnos',
    q: 'Koji izraz jasno kaže da netko voli majku?',
    en: 'Which phrase clearly says that someone loves the mother?',
    opts: ['ljubav prema majci', 'ljubav majke', 'majčina ljubav', 'majka ljubavi'],
    answer: 'ljubav prema majci',
    tip: 'A preposition makes the object explicit.',
  },
  {
    mode: 'odnos',
    q: 'Koji izraz jasno kaže da netko brine o djeci?',
    en: 'Which phrase clearly says that someone looks after the children?',
    opts: ['briga za djecu', 'briga djece', 'dječja briga', 'djeca brige'],
    answer: 'briga za djecu',
    tip: 'za + accusative names the object of the care.',
  },
  // ── posvojnost ────────────────────────────────────────────────────────────
  {
    mode: 'posvojnost',
    q: 'Ovo je kuća ____.',
    en: 'This is my father’s house.',
    opts: ['moga oca', 'moj otac', 'mojem ocu', 'mog očeva'],
    answer: 'moga oca',
    tip: 'An owner with a pronoun of its own goes after the noun.',
  },
  {
    mode: 'posvojnost',
    q: 'To je ____ auto.',
    en: 'That is Ana’s car.',
    opts: ['Anin', 'Anina', 'Anino', 'Aninog'],
    answer: 'Anin',
    tip: 'auto is masculine, in the nominative.',
  },
  {
    mode: 'posvojnost',
    q: 'To je ____ knjiga.',
    en: 'That is Marko’s book.',
    opts: ['Markova', 'Markov', 'Markovo', 'Markove'],
    answer: 'Markova',
    tip: 'knjiga is feminine.',
  },
  {
    mode: 'posvojnost',
    q: 'Stiglo je ____ pismo.',
    en: 'Ivan’s letter has arrived.',
    opts: ['Ivanovo', 'Ivanov', 'Ivanova', 'Ivanove'],
    answer: 'Ivanovo',
    tip: 'pismo is neuter.',
  },
  {
    mode: 'posvojnost',
    q: 'To je auto ____.',
    en: 'That is our neighbour’s car.',
    opts: ['našeg susjeda', 'naš susjed', 'našem susjedu', 'našeg susjedov'],
    answer: 'našeg susjeda',
    tip: 'A modified owner stands in the genitive.',
  },
  {
    mode: 'posvojnost',
    q: 'Ljeta provodimo u ____ kući.',
    en: 'We spend summers in Father’s house.',
    opts: ['očevoj', 'očeva', 'očevu', 'očevom'],
    answer: 'očevoj',
    tip: 'u + locative, feminine: the adjective agrees with kući.',
  },
  {
    mode: 'posvojnost',
    q: 'Čitam roman ____.',
    en: 'I am reading a novel by Ivana Brlić-Mažuranić.',
    opts: [
      'Ivane Brlić-Mažuranić',
      'Ivana Brlić-Mažuranić',
      'Ivanin Brlić-Mažuranić',
      'Ivani Brlić-Mažuranić',
    ],
    answer: 'Ivane Brlić-Mažuranić',
    tip: 'A first name with a surname stands in the genitive; a woman’s surname in -ić does not decline.',
  },
  {
    mode: 'posvojnost',
    q: 'Ovo je soba ____.',
    en: 'This is my younger sister’s room.',
    opts: ['moje mlađe sestre', 'moja mlađa sestra', 'mojoj mlađoj sestri', 'moje mlađe sestrina'],
    answer: 'moje mlađe sestre',
    tip: 'A modified owner stands in the genitive, every word agreeing.',
  },
  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Živim u gradu ____.',
    en: 'I live in the city of Zagreb.',
    opts: ['Zagrebu', 'Zagreba', 'Zagreb', 'Zagrebom'],
    answer: 'Zagrebu',
    tip: 'Apposition: the name takes the same case as gradu.',
  },
  {
    mode: 'oblik',
    q: 'Djetinjstvo sam proveo na otoku ____.',
    en: 'I spent my childhood on the island of Krk.',
    opts: ['Krku', 'Krka', 'Krk', 'Krkom'],
    answer: 'Krku',
    tip: 'The name follows the locative of otoku.',
  },
  {
    mode: 'oblik',
    q: 'Kuća nam je uz rijeku ____.',
    en: 'Our house is by the river Sava.',
    opts: ['Savu', 'Save', 'Sava', 'Savom'],
    answer: 'Savu',
    tip: 'uz + accusative, and the name follows rijeku.',
  },
  {
    mode: 'oblik',
    q: 'Kupali smo se u rijeci ____.',
    en: 'We swam in the river Krka.',
    opts: ['Krki', 'Krke', 'Krka', 'Krkom'],
    answer: 'Krki',
    tip: 'Apposition in the locative.',
  },
  {
    mode: 'oblik',
    q: 'Moj djed bio je čovjek ____.',
    en: 'My grandfather was a man with a big heart.',
    opts: ['velikog srca', 'veliko srce', 'velikim srcem', 'velikom srcu'],
    answer: 'velikog srca',
    tip: 'The genitive of quality, with its adjective.',
  },
  {
    mode: 'oblik',
    q: 'Upoznao sam ženu ____.',
    en: 'I met a woman with fair hair.',
    opts: ['plave kose', 'plava kosa', 'plavu kosu', 'plavoj kosi'],
    answer: 'plave kose',
    tip: 'The genitive of quality describes the person.',
  },
  {
    mode: 'oblik',
    q: 'Za njega je to bilo pitanje ____.',
    en: 'For him it was a matter of honour.',
    opts: ['časti', 'čast', 'čašću', 'časte'],
    answer: 'časti',
    tip: 'An explanatory genitive: what the matter is about.',
  },
  {
    mode: 'oblik',
    q: 'Sve nas je obuzeo osjećaj ____.',
    en: 'A feeling of fear came over all of us.',
    opts: ['straha', 'strah', 'strahu', 'strahom'],
    answer: 'straha',
    tip: 'An explanatory genitive after osjećaj.',
  },
];
