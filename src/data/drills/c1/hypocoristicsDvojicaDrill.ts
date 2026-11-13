// src/data/drills/c1/hypocoristicsDvojicaDrill.ts
//
// C1 MASCULINE NAMES AND GROUPS OF MEN — the drill for the `hypocoristics-dvojica` lesson.
//
// Names in -ko (Marko, Marka), in -o and -e (Ivo, Ive; Ante, Anti — exactly like žena,
// instrumental -om as in ženom), in -a (Luka, Luki); masculine agreement whatever the ending; dvojica,
// trojica, četvorica for groups of men.
//
// Deliberately never offered as a distractor, because each is heard: Iva / Ivu as forms of
// Ivo (regional), and the -li participle with dvojica (agreement by meaning). Count items
// use nouns whose form after 2–4 differs from the genitive plural (studenta / studenata),
// so the ordinary numeral cannot also be right.
//
// Three modes:
//   imena    — the case form of the name
//   slaganje — masculine agreement; agreement with dvojica
//   skupine  — choosing and declining dvojica, trojica, četvorica

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const HYPOCORISTICS_DVOJICA_MODE_LABELS: Record<string, string> = {
  imena: '📛 Imena',
  slaganje: '🔗 Slaganje',
  skupine: '👥 Skupine',
};

export const HYPOCORISTICS_DVOJICA_DRILL_DATA: ModeDrillItem[] = [
  // ── imena ─────────────────────────────────────────────────────────────────
  {
    mode: 'imena',
    q: 'Večeras smo kod ____ na večeri.',
    cue: 'Ivo',
    en: 'Tonight we are having dinner at his place.',
    opts: ['Ive', 'Ivu', 'Ivi', 'Ivom'],
    answer: 'Ive',
    tip: 'kod + genitive. Ivo declines like žena in the singular: Ive.',
  },
  {
    mode: 'imena',
    q: 'Sinoć sam vidio ____ u kinu.',
    cue: 'Marko',
    en: 'Last night I saw him at the cinema.',
    opts: ['Marko', 'Marka', 'Marku', 'Markom'],
    answer: 'Marka',
    tip: 'Names in -ko decline like brat; the accusative of a person is the genitive form: Marka.',
  },
  {
    mode: 'imena',
    q: 'Pismo sam poslao ____.',
    cue: 'Ante',
    en: 'I sent the letter to him.',
    opts: ['Ante', 'Antu', 'Anti', 'Antom'],
    answer: 'Anti',
    tip: 'The dative of the -e names ends like ženi: Anti.',
  },
  {
    mode: 'imena',
    q: 'Idem u šetnju s ____.',
    cue: 'Luka',
    en: 'I am going for a walk with him.',
    opts: ['Luka', 'Luke', 'Luki', 'Lukom'],
    answer: 'Lukom',
    tip: 's + instrumental: s Lukom.',
  },
  {
    mode: 'imena',
    q: 'Ovo je stan ____.',
    cue: 'Franjo',
    en: 'This is his flat.',
    opts: ['Franjo', 'Franje', 'Franji', 'Franju'],
    answer: 'Franje',
    tip: 'The genitive of Franjo follows žena: Franje.',
  },
  {
    mode: 'imena',
    q: 'Razgovarali smo o ____.',
    cue: 'Jure',
    en: 'We talked about him.',
    opts: ['Jure', 'Juru', 'Juri', 'Jurom'],
    answer: 'Juri',
    tip: 'o + locative; the -e names take -i: o Juri.',
  },
  {
    mode: 'imena',
    q: 'Čestitao sam rođendan ____.',
    cue: 'Mirko',
    en: 'I wished him a happy birthday.',
    opts: ['Mirko', 'Mirka', 'Mirku', 'Mirkom'],
    answer: 'Mirku',
    tip: 'čestitati + dative; -ko names take -u like a masculine noun: Mirku.',
  },
  {
    mode: 'imena',
    q: 'Zovem ____ da dođe na ručak.',
    cue: 'Đuro',
    en: 'I am calling him to come to lunch.',
    opts: ['Đuro', 'Đure', 'Đuri', 'Đuru'],
    answer: 'Đuru',
    tip: 'The accusative of Đuro is like ženu: Đuru.',
  },

  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: 'Ante je jučer ____ iz Splita.',
    en: 'Ante came back from Split yesterday.',
    opts: ['došao', 'došla', 'došlo', 'došle'],
    answer: 'došao',
    tip: 'Ante is a man: masculine participle, whatever the final vowel.',
  },
  {
    mode: 'slaganje',
    q: 'Naš ____ Luka diplomirao je prošli tjedan.',
    en: 'Our dear Luka graduated last week.',
    opts: ['dragi', 'draga', 'drago', 'drage'],
    answer: 'dragi',
    tip: 'Masculine agreement: naš dragi Luka.',
  },
  {
    mode: 'slaganje',
    q: 'Jure je ____ najbolji prijatelj.',
    en: 'Jure is my best friend.',
    opts: ['moj', 'moja', 'moje', 'moji'],
    answer: 'moj',
    tip: 'Masculine singular: moj najbolji prijatelj.',
  },
  {
    mode: 'slaganje',
    q: 'Franjo je bio vrlo ____.',
    en: 'Franjo was very tired.',
    opts: ['umoran', 'umorna', 'umorno', 'umorne'],
    answer: 'umoran',
    tip: 'A man: masculine predicate adjective.',
  },
  {
    mode: 'slaganje',
    q: 'Mate je cijeli život ____ na Hvaru.',
    en: 'Mate lived on Hvar all his life.',
    opts: ['živio', 'živjela', 'živjelo', 'živjele'],
    answer: 'živio',
    tip: 'Masculine participle: živio.',
  },
  {
    mode: 'slaganje',
    q: 'Dvojica studenata ____ su na ispit.',
    en: 'Two students were late for the exam.',
    opts: ['zakasnila', 'zakasnio', 'zakasnile', 'zakasnilo'],
    answer: 'zakasnila',
    tip: 'dvojica: plural verb, and the grammar gives the participle in -la: su zakasnila.',
  },
  {
    mode: 'slaganje',
    q: 'Trojica igrača ____ na klupi.',
    en: 'Three players are sitting on the bench.',
    opts: ['sjede', 'sjedi', 'sjedimo', 'sjediš'],
    answer: 'sjede',
    tip: 'The verb is third-person plural with trojica.',
  },
  {
    mode: 'slaganje',
    q: 'Ta su dvojica cijeli dan ____ o politici.',
    en: 'Those two talked about politics all day.',
    opts: ['pričala', 'pričao', 'pričale', 'pričalo'],
    answer: 'pričala',
    tip: 'su + the -la participle: Ta su dvojica pričala.',
  },

  // ── skupine ───────────────────────────────────────────────────────────────
  {
    mode: 'skupine',
    q: '____ sinova pomažu ocu na brodu.',
    en: 'His two sons help their father on the boat.',
    opts: ['Dvojica', 'Dvoje', 'Dvije', 'Dva'],
    answer: 'Dvojica',
    tip: 'Two men as a group, with the genitive plural sinova. dva would take sina.',
  },
  {
    mode: 'skupine',
    q: '____ studenata položila su ispit.',
    en: 'Three students passed the exam.',
    opts: ['Trojica', 'Troje', 'Tri', 'Treći'],
    answer: 'Trojica',
    tip: 'trojica + studenata, plural verb. tri would take studenta; troje would take položilo je.',
  },
  {
    mode: 'skupine',
    q: 'U sobu su ušla ____ policajaca.',
    en: 'Four policemen came into the room.',
    opts: ['četiri', 'četvero', 'četvorica', 'četvrta'],
    answer: 'četvorica',
    tip: 'četvorica + genitive plural policajaca; četiri would take policajca.',
  },
  {
    mode: 'skupine',
    q: 'Razgovarao sam s ____ kolega.',
    en: 'I talked with two colleagues.',
    opts: ['dvojica', 'dvojicu', 'dvojici', 'dvojicom'],
    answer: 'dvojicom',
    tip: 'dvojica declines like žena: s dvojicom.',
  },
  {
    mode: 'skupine',
    q: 'Pomogli smo ____ turista.',
    en: 'We helped three tourists.',
    opts: ['trojica', 'trojicu', 'trojici', 'trojicom'],
    answer: 'trojici',
    tip: 'pomoći takes the dative: trojici turista.',
  },
  {
    mode: 'skupine',
    q: 'Vidio sam ____ mladića ispred zgrade.',
    en: 'I saw four young men in front of the building.',
    opts: ['četvorica', 'četvoricu', 'četvorici', 'četvoricom'],
    answer: 'četvoricu',
    tip: 'The object of vidjeti: accusative četvoricu.',
  },
  {
    mode: 'skupine',
    q: 'Koga brojimo imenicom „petorica“?',
    en: 'Whom do we count with this noun?',
    opts: ['pet muškaraca', 'pet žena', 'pet djece', 'pet stolova'],
    answer: 'pet muškaraca',
    tip: 'The -orica nouns count male persons only.',
  },
  {
    mode: 'skupine',
    q: 'Razgovarao sam s ____ kolega cijelu večer.',
    en: 'I talked with three colleagues (men) all evening.',
    opts: ['trojicom', 'trojica', 'tri', 'trojice'],
    answer: 'trojicom',
    tip: 'trojica declines like žena: s trojicom kolega — instrumental, then the genitive plural.',
  },
];
