// src/data/drills/b2/agreementSpecialNounsDrill.ts
//
// B2 SPECIAL NOUNS IN -A — the drill for the `agreement-special-nouns` lesson.
//
// Three groups decline like žena but agree differently:
//   - type tata (tata, kolega, vođa, Luka, Nikola): masculine agreement in the SINGULAR.
//     The plural (naši/naše kolege) takes either gender, so it is never tested;
//   - type varalica (common gender): the verb follows the person's sex. Only items whose
//     referent is unambiguous are tested, and the predicate adjective for a man (velika /
//     veliki varalica, both heard) is never offered against itself;
//   - type braća (braća, djeca, gospoda): feminine singular adjective, plural verb, plural
//     participle in -a. Distractors are a singular verb or a plural adjective — never the
//     masculine participle došli, which some grammars accept for braća.
//
// Three modes:
//   tata     — masculine nouns in -a
//   varalica — common-gender nouns
//   braca    — collective nouns

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const AGREEMENT_SPECIAL_NOUNS_MODE_LABELS: Record<string, string> = {
  tata: '👨 Tata',
  varalica: '🎭 Varalica',
  braca: '👨‍👦‍👦 Braća',
};

export const AGREEMENT_SPECIAL_NOUNS_DRILL_DATA: ModeDrillItem[] = [
  // ── tata ─────────────────────────────────────────────────────────────────
  {
    mode: 'tata',
    q: '____ tata radi u bolnici.',
    en: 'Our dad works at the hospital.',
    opts: ['Naš', 'Naša', 'Naše', 'Naši'],
    answer: 'Naš',
    tip: 'Tata is masculine, whatever its ending.',
  },
  {
    mode: 'tata',
    q: 'Tata je jučer ____ iz Njemačke.',
    en: 'Dad came back from Germany yesterday.',
    opts: ['došla', 'došao', 'došlo', 'došle'],
    answer: 'došao',
    tip: 'A masculine singular participle.',
  },
  {
    mode: 'tata',
    q: 'Ljeto smo proveli kod ____ tate.',
    en: 'We spent the summer at our dad’s.',
    opts: ['naše', 'našoj', 'našeg', 'naših'],
    answer: 'našeg',
    tip: 'Tate is genitive like žene, but the adjective is masculine.',
  },
  {
    mode: 'tata',
    q: 'Išao sam na pecanje s ____ tatom.',
    en: 'I went fishing with my dad.',
    opts: ['mojom', 'mojim', 'moje', 'mojem'],
    answer: 'mojim',
    tip: 'Instrumental; tata is masculine, so the adjective is masculine.',
  },
  {
    mode: 'tata',
    q: '____ kolega je počeo raditi u ponedjeljak.',
    en: 'The new colleague started work on Monday.',
    opts: ['Nova', 'Novu', 'Novi', 'Nove'],
    answer: 'Novi',
    tip: 'Kolega here is a man: masculine agreement.',
  },
  {
    mode: 'tata',
    q: 'Luka je bio ____ vođa ekipe.',
    en: 'Luka was a good team leader.',
    opts: ['dobra', 'dobar', 'dobru', 'dobre'],
    answer: 'dobar',
    tip: 'Vođa and Luka are masculine in the singular.',
  },
  {
    mode: 'tata',
    q: 'Kupila sam poklon ____ tati.',
    en: 'I bought a present for our dad.',
    opts: ['našoj', 'našem', 'naše', 'našu'],
    answer: 'našem',
    tip: 'Dative; masculine adjective.',
  },
  {
    mode: 'tata',
    q: 'Nikola nam je ____ istinu.',
    en: 'Nikola told us the truth.',
    opts: ['rekla', 'reklo', 'rekao', 'rekle'],
    answer: 'rekao',
    tip: 'Nikola is a man’s name: masculine participle.',
  },
  // ── varalica ─────────────────────────────────────────────────────────────
  {
    mode: 'varalica',
    q: 'Ana je velika varalica, ____ je sve nas.',
    en: 'Ana is a big cheat, she fooled all of us.',
    opts: ['prevario', 'prevarila', 'prevarili', 'prevarilo'],
    answer: 'prevarila',
    tip: 'The cheat is a woman: feminine participle.',
  },
  {
    mode: 'varalica',
    q: 'Marko je velika varalica, opet nas je ____.',
    en: 'Marko is a big cheat, he has fooled us again.',
    opts: ['prevarila', 'prevario', 'prevarile', 'prevarilo'],
    answer: 'prevario',
    tip: 'The cheat is a man: the verb shows his sex.',
  },
  {
    mode: 'varalica',
    q: 'Maja je prava ____.',
    en: 'Maja is a real ignoramus.',
    opts: ['neznalica', 'neznalicu', 'neznalice', 'neznalicom'],
    answer: 'neznalica',
    tip: 'After je the nominative.',
  },
  {
    mode: 'varalica',
    q: 'Ivana je ____ varalica.',
    en: 'Ivana is a terrible cheat.',
    opts: ['strašni', 'strašna', 'strašno', 'strašnog'],
    answer: 'strašna',
    tip: 'For a woman everything is feminine.',
  },
  {
    mode: 'varalica',
    q: 'Ahmed je izbjeglica iz Sirije. U Hrvatsku je ____ prije tri godine.',
    en: 'Ahmed is a refugee from Syria. He came to Croatia three years ago.',
    opts: ['stigla', 'stigao', 'stiglo', 'stigle'],
    answer: 'stigao',
    tip: 'The refugee is a man: masculine participle.',
  },
  {
    mode: 'varalica',
    q: 'Moja susjeda je bila ____, ali se promijenila.',
    en: 'My neighbour (a woman) used to be a drunkard, but she changed.',
    opts: ['pijanica', 'pijanicu', 'pijanice', 'pijanicom'],
    answer: 'pijanica',
    tip: 'After bila the nominative.',
  },
  {
    mode: 'varalica',
    q: 'Kako se zovu imenice poput "varalica" i "izbjeglica"?',
    en: 'What are nouns like these two called?',
    opts: [
      'imenice zajedničkog roda',
      'zbirne imenice',
      'imenice srednjeg roda',
      'glagolske imenice',
    ],
    answer: 'imenice zajedničkog roda',
    tip: 'Common-gender nouns: they can name a man or a woman.',
  },
  // ── braca ────────────────────────────────────────────────────────────────
  {
    mode: 'braca',
    q: 'Moja braća ____ u Kanadi.',
    en: 'My brothers live in Canada.',
    opts: ['živi', 'žive', 'živim', 'živiš'],
    answer: 'žive',
    tip: 'Braća takes a plural verb.',
  },
  {
    mode: 'braca',
    q: '____ djeca idu u školu.',
    en: 'Our children go to school.',
    opts: ['Naši', 'Naše', 'Naša', 'Našu'],
    answer: 'Naša',
    tip: 'The adjective with djeca is feminine singular.',
  },
  {
    mode: 'braca',
    q: 'Djeca su se cijeli dan ____.',
    en: 'The children played all day.',
    opts: ['igrao', 'igrala', 'igralo', 'igrale'],
    answer: 'igrala',
    tip: 'With djeca the plural participle ends in -a.',
  },
  {
    mode: 'braca',
    q: 'Ljeti putujemo s mojom ____.',
    en: 'In summer we travel with my brothers.',
    opts: ['braća', 'braće', 'braćom', 'braći'],
    answer: 'braćom',
    tip: 'Instrumental, like ženom.',
  },
  {
    mode: 'braca',
    q: 'Nemam ni ____ ni sestara.',
    en: 'I have neither brothers nor sisters.',
    opts: ['braća', 'braće', 'braću', 'braći'],
    answer: 'braće',
    tip: 'Nemam takes the genitive.',
  },
  {
    mode: 'braca',
    q: 'Gospoda su ____ za stol.',
    en: 'The gentlemen sat down at the table.',
    opts: ['sjela', 'sjeo', 'sjelo', 'sjele'],
    answer: 'sjela',
    tip: 'Gospoda is like braća: plural participle in -a.',
  },
  {
    mode: 'braca',
    q: 'Imam dva ____ i jednu sestru.',
    en: 'I have two brothers and one sister.',
    opts: ['braća', 'brata', 'braće', 'braćom'],
    answer: 'brata',
    tip: 'Count with brat, not the collective.',
  },
  {
    mode: 'braca',
    q: 'Koja je rečenica ispravna?',
    en: 'Which sentence is correct?',
    opts: [
      'Moja braća dolazi sutra.',
      'Moji braća dolaze sutra.',
      'Moja braća dolaze sutra.',
      'Moje braća dolaze sutra.',
    ],
    answer: 'Moja braća dolaze sutra.',
    tip: 'Feminine singular adjective + plural verb.',
  },
  {
    mode: 'braca',
    q: 'Dame i ____, dobro došli!',
    en: 'Ladies and gentlemen, welcome!',
    opts: ['gospoda', 'gospodo', 'gospodu', 'gospode'],
    answer: 'gospodo',
    tip: 'Addressing a group: the vocative.',
  },
];
