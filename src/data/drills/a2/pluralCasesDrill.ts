// src/data/drills/a2/pluralCasesDrill.ts
//
// A2 PLURAL CASES — the drill for the `plural-cases` lesson.
//
// Follows Razgovarajte s nama! A2–B1, pages 16, 18, 32, 46, 55, 115, 132 and 168: the
// plural columns of the case tables with their examples ("Kakve prijatelje imaju? Imaju
// drage prijatelje.", "Vidimo zelena polja.", "Ljudi žive u lijepim gradovima… u lijepim
// selima.", "sastanak s poslovnim partnerima"), the review notes "razgovarati s rođacima"
// and "ima puno zemalja (sekundarno a)", the guests who bring something "domaćinima", the
// box "Posebnosti genitiva množine" and the nouns that have only a plural ("Pročitao je
// to u novinama").
//
// Where the book and the lesson differ: the book has no single lesson on the plural. It
// adds a plural column to each case as that case comes up, always together with the
// adjective, and it teaches the irregular genitive plurals (nogu, ruku, očiju, gostiju,
// prstiju). The lesson gathers the noun endings in one place: accusative -e / -e / -a,
// the long genitive -a with its extra "a" (studenata, sestara), and one ending -ima /
// -ama for dative, locative and instrumental. The drill practices the lesson's endings
// on the book's nouns; the irregular genitives are left out because the lesson does not
// teach them.
//
// Three modes:
//   akuzativ — the plural as an object: susjede, otoke, polja
//   genitiv  — after numbers and quantities: zemalja, olovaka, tjedana
//   ima      — one ending for dative, locative and instrumental: -ima / -ama

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PLURAL_CASES_MODE_LABELS: Record<string, string> = {
  akuzativ: '👀 Koga? Što?',
  genitiv: '🔢 Koliko?',
  ima: '🤝 -ima i -ama',
};

export const PLURAL_CASES_DRILL_DATA: ModeDrillItem[] = [
  // ── akuzativ ──────────────────────────────────────────────────────────────
  {
    mode: 'akuzativ',
    q: 'Tanja i Marin zovu sve ____ u vikendicu.',
    en: 'Tanja and Marin are inviting all the neighbors to their weekend house.',
    opts: ['susjede', 'susjedi', 'susjeda', 'susjedima'],
    answer: 'susjede',
    tip: 'The people they invite are the object, and a masculine plural object ends in -e: susjede. susjedi is the subject form, susjeda is the genitive, and susjedima the dative, locative or instrumental.',
  },
  {
    mode: 'akuzativ',
    q: 'Ljeti na moru vidim strane ____.',
    en: 'In the summer I see foreign tourists at the seaside.',
    opts: ['turiste', 'turisti', 'turista', 'turistima'],
    answer: 'turiste',
    tip: 'Tourists are the object, so the masculine plural takes -e: turiste, and people get the same -e as things in the plural. turisti is the subject form, turista the genitive, and turistima the -ima form.',
  },
  {
    mode: 'akuzativ',
    q: 'S prozora vidimo zelena ____.',
    en: 'From the window we see green fields.',
    opts: ['polja', 'polje', 'polju', 'poljima'],
    answer: 'polja',
    tip: 'A neuter plural object ends in -a, the same as the plural subject, and zelena matches it: zelena polja. polje is one field, polju is the dative or locative singular, and poljima the -ima form.',
  },
  {
    mode: 'akuzativ',
    q: 'Martina pakira svoje ____.',
    en: 'Martina is packing her shoes.',
    opts: ['cipele', 'cipela', 'cipelama', 'cipelu'],
    answer: 'cipele',
    tip: 'A feminine plural object ends in -e and looks just like the plural subject: cipele. cipela is the genitive plural, cipelama the -ama form, and cipelu is one shoe, which does not match svoje.',
  },
  {
    mode: 'akuzativ',
    q: 'Želim vidjeti hrvatske ____: Mljet, Krk i Hvar.',
    en: 'I want to see the Croatian islands: Mljet, Krk and Hvar.',
    opts: ['otoke', 'otoci', 'otoka', 'otocima'],
    answer: 'otoke',
    tip: 'The islands are the object, so -e: otoke. The k comes back here; it turns into c only before -i, as in the subject form otoci and in otocima. otoka is the genitive.',
  },
  {
    mode: 'akuzativ',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct? (We are waiting for the guests.)',
    opts: ['Čekamo goste.', 'Čekamo gosti.', 'Čekamo gostima.', 'Čekamo gost.'],
    answer: 'Čekamo goste.',
    tip: 'čekati takes an object, and the masculine plural object ends in -e: goste. gosti is the subject form, gostima the dative, locative or instrumental, and gost is one guest in the subject form.',
  },
  {
    mode: 'akuzativ',
    q: 'Učiteljica voli svoje ____.',
    en: 'The teacher loves her students.',
    opts: ['učenike', 'učenici', 'učenika', 'učenicima'],
    answer: 'učenike',
    tip: 'The students are the object, so -e, and the k of učenik stays: učenike. učenici is the subject form, where k turns into c before -i; učenika is the genitive and učenicima the -ima form.',
  },
  {
    mode: 'akuzativ',
    q: 'Volim mala ____ na moru.',
    en: 'I love small towns by the sea.',
    opts: ['mjesta', 'mjesto', 'mjestu', 'mjestima'],
    answer: 'mjesta',
    tip: 'A neuter plural object ends in -a, and mala matches it: mala mjesta. mjesto is one town, mjestu is the dative or locative singular, and mjestima the -ima form.',
  },
  {
    mode: 'akuzativ',
    q: 'Za vikend idemo u ____.',
    en: 'This weekend we are going to the mountains.',
    opts: ['planine', 'planinama', 'planina', 'planini'],
    answer: 'planine',
    tip: 'Going somewhere is u + accusative, and the feminine plural ends in -e: u planine. u planinama is where you already are, planina is the genitive plural, and planini is the locative singular.',
  },

  // ── genitiv ───────────────────────────────────────────────────────────────
  {
    mode: 'genitiv',
    q: 'Europa ima više od četrdeset ____.',
    en: 'Europe has more than forty countries.',
    opts: ['zemalja', 'zemlje', 'zemlji', 'zemljama'],
    answer: 'zemalja',
    tip: 'After numbers from five up comes the genitive plural, and an extra a breaks up the ml of zemlja: zemalja. zemlje is the subject or object plural, zemlji the dative singular, and zemljama the -ama form.',
  },
  {
    mode: 'genitiv',
    q: 'Na fakultetu radi pedeset ____.',
    en: 'Fifty professors work at the college.',
    opts: ['profesora', 'profesori', 'profesore', 'profesorima'],
    answer: 'profesora',
    tip: 'After pedeset the noun is in the genitive plural, with its long -a: profesora. profesori is the subject plural, profesore the object plural, and profesorima the -ima form.',
  },
  {
    mode: 'genitiv',
    q: 'U torbi imam deset ____.',
    en: 'I have ten pencils in my bag.',
    opts: ['olovaka', 'olovke', 'olovka', 'olovkama'],
    answer: 'olovaka',
    tip: 'deset takes the genitive plural, and an extra a breaks up the vk of olovka: olovaka. olovke is the subject or object plural, olovka is one pencil, and olovkama is the -ama form.',
  },
  {
    mode: 'genitiv',
    q: 'U Hrvatskoj ima više od tisuću ____.',
    en: 'There are more than a thousand islands in Croatia.',
    opts: ['otoka', 'otoci', 'otoke', 'otocima'],
    answer: 'otoka',
    tip: 'After tisuću comes the genitive plural with -a: otoka. otoci is the subject plural, otoke the object plural, and otocima the -ima form.',
  },
  {
    mode: 'genitiv',
    q: 'Plitvice imaju šesnaest ____.',
    en: 'Plitvice has sixteen lakes.',
    opts: ['jezera', 'jezero', 'jezeru', 'jezerima'],
    answer: 'jezera',
    tip: 'šesnaest takes the genitive plural, which for a neuter noun ends in -a: jezera. jezero is one lake, jezeru is the dative or locative singular, and jezerima the -ima form.',
  },
  {
    mode: 'genitiv',
    q: 'Tečaj hrvatskog traje šest ____.',
    en: 'The Croatian course lasts six weeks.',
    opts: ['tjedana', 'tjedni', 'tjedne', 'tjednima'],
    answer: 'tjedana',
    tip: 'šest takes the genitive plural, and tjedan keeps its a between d and n: tjedana. tjedni is the subject plural, tjedne the object plural, and tjednima the -ima form.',
  },
  {
    mode: 'genitiv',
    q: 'Stanujem kod ____.',
    en: 'I live at my parents’ place.',
    opts: ['roditelja', 'roditelji', 'roditelje', 'roditeljima'],
    answer: 'roditelja',
    tip: 'kod always takes the genitive, and in the plural that is the long -a: kod roditelja. roditelji is the subject form, roditelje the object form, and roditeljima the -ima form.',
  },
  {
    mode: 'genitiv',
    q: 'U razredu je deset učenika i dvanaest ____.',
    en: 'There are ten boys and twelve girls in the class.',
    opts: ['učenica', 'učenice', 'učenicu', 'učenicama'],
    answer: 'učenica',
    tip: 'dvanaest takes the genitive plural. For a noun like učenica it is written the same as the dictionary form, only said with a long final a: dvanaest učenica. učenice is the plural subject or object, učenicu one girl as an object, and učenicama the -ama form.',
  },
  {
    mode: 'genitiv',
    q: 'Izaberi točnu rečenicu.',
    en: 'Which sentence is correct? (I have a lot of questions.)',
    opts: [
      'Imam puno pitanja.',
      'Imam puno pitanje.',
      'Imam puno pitanjima.',
      'Imam puno pitanju.',
    ],
    answer: 'Imam puno pitanja.',
    tip: 'puno takes the genitive, and for things you can count that is the genitive plural: puno pitanja. pitanje is the dictionary form, pitanjima the -ima form, and pitanju the dative or locative singular.',
  },

  // ── ima ───────────────────────────────────────────────────────────────────
  {
    mode: 'ima',
    q: 'Studenti stanuju u ____ blizu fakulteta.',
    en: 'The students live in apartments near the college.',
    cue: 'stanovi',
    opts: ['stanovima', 'stanove', 'stanova', 'stanovi'],
    answer: 'stanovima',
    tip: 'Where they live is u + locative, and in the plural a masculine noun takes -ima: u stanovima. stanove is the object form, used for moving into them; stanova is the genitive and stanovi the subject form.',
  },
  {
    mode: 'ima',
    q: 'Učim hrvatski da mogu razgovarati s ____.',
    en: 'I am learning Croatian so that I can talk with my relatives.',
    opts: ['rođacima', 'rođake', 'rođaka', 'rođaci'],
    answer: 'rođacima',
    tip: 's meaning with takes the instrumental, in the plural -ima, and the k of rođak turns into c before it: s rođacima. rođake is the object form, rođaka the genitive, and rođaci the subject form.',
  },
  {
    mode: 'ima',
    q: 'Sandra ima sastanak s ____ iz Njemačke.',
    en: 'Sandra has a meeting with partners from Germany.',
    cue: 'partneri',
    opts: ['partnerima', 'partnere', 'partnera', 'partneri'],
    answer: 'partnerima',
    tip: 's meaning with takes the instrumental, and the plural ending for a masculine noun is -ima: s partnerima. partnere is the object form, partnera the genitive, and partneri the subject form.',
  },
  {
    mode: 'ima',
    q: 'Pišem razglednice ____ iz ureda.',
    en: 'I am writing postcards to my (female) colleagues from the office.',
    cue: 'kolegice',
    opts: ['kolegicama', 'kolegice', 'kolegica', 'kolegicom'],
    answer: 'kolegicama',
    tip: 'The people you write to are in the dative, and the feminine plural takes -ama: kolegicama. kolegice is the subject or object plural, kolegica the genitive plural, and kolegicom the instrumental of one colleague.',
  },
  {
    mode: 'ima',
    q: 'Čitao sam o tome u ____.',
    en: 'I read about it in the newspaper.',
    opts: ['novinama', 'novine', 'novina', 'novinarima'],
    answer: 'novinama',
    tip: 'novine has only a plural, and u + locative gives the feminine -ama: u novinama. novine is the subject or object form, novina the genitive, and novinarima means journalists.',
  },
  {
    mode: 'ima',
    q: 'O ____ u Lici znam malo.',
    en: 'I know little about the villages in Lika.',
    cue: 'sela',
    opts: ['selima', 'sela', 'selo', 'selom'],
    answer: 'selima',
    tip: 'o takes the locative, and a neuter plural takes -ima just like a masculine one: o selima. sela is the plural subject or object, selo is one village, and selom is the instrumental singular.',
  },
  {
    mode: 'ima',
    q: 'Kad idemo u goste, nosimo mali dar ____.',
    en: 'When we go visiting, we bring a small gift for the hosts.',
    opts: ['domaćinima', 'domaćine', 'domaćina', 'domaćini'],
    answer: 'domaćinima',
    tip: 'The people who receive something are in the dative, in the plural -ima: domaćinima. domaćine is the object form, domaćina the genitive, and domaćini the subject form.',
  },
  {
    mode: 'ima',
    q: 'Klara ide na kavu s ____.',
    en: 'Klara is going for coffee with her (female) friends.',
    cue: 'prijateljice',
    opts: ['prijateljicama', 'prijateljice', 'prijateljica', 'prijateljicu'],
    answer: 'prijateljicama',
    tip: 's meaning with takes the instrumental, and the feminine plural ending is -ama: s prijateljicama. prijateljice is the subject or object plural, prijateljica the genitive plural, and prijateljicu one friend as an object.',
  },
  {
    mode: 'ima',
    q: 'Samo je jedna rečenica točna. Koja?',
    en: 'Which sentence is correct? (The child is playing with toys.)',
    opts: [
      'Dijete se igra igračkama.',
      'Dijete se igra igračke.',
      'Dijete se igra igračaka.',
      'Dijete se igra igračku.',
    ],
    answer: 'Dijete se igra igračkama.',
    tip: 'What you play with is in the instrumental, and the feminine plural takes -ama: igračkama. igračke is the subject or object plural, igračaka the genitive plural, and igračku one toy as an object.',
  },
];
