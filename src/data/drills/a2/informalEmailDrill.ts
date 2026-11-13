// src/data/drills/a2/informalEmailDrill.ts
//
// A2 WRITING TO A FRIEND — the drill for the `informal-email` lesson.
//
// An informal email is a frame of set phrases, and each phrase leans on grammar the
// learner already has: the name in the vocative after Dragi / Draga, hvala na + the
// locative, the past and the future for news, and tvoj / tvoja agreeing with the WRITER
// at the end.
//
// Three modes:
//   pocetak — the opening and the first lines
//   vijesti — the news in the middle
//   kraj    — the goodbye and the signature

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const INFORMAL_EMAIL_MODE_LABELS: Record<string, string> = {
  pocetak: '👋 Početak',
  vijesti: '📰 Vijesti',
  kraj: '✍️ Kraj',
};

export const INFORMAL_EMAIL_DRILL_DATA: ModeDrillItem[] = [
  // ── pocetak ───────────────────────────────────────────────────────────────
  {
    mode: 'pocetak',
    q: 'Dragi ____,',
    en: 'Dear Ivan, (opening an email to a friend)',
    opts: ['Ivane', 'Ivan', 'Ivana', 'Ivanu'],
    answer: 'Ivane',
    tip: 'In an address the name is in the vocative: Ivan adds -e.',
  },
  {
    mode: 'pocetak',
    q: 'Dragi ____,',
    en: 'Dear Petar, (opening an email to a friend)',
    opts: ['Petre', 'Petar', 'Petra', 'Petru'],
    answer: 'Petre',
    tip: 'Petar loses its a in the vocative: Petre.',
  },
  {
    mode: 'pocetak',
    q: '____ Ana,',
    en: 'Dear Ana, (opening an email to a friend)',
    opts: ['Draga', 'Dragi', 'Drago', 'Dragu'],
    answer: 'Draga',
    tip: 'Ana is a woman, so the feminine form.',
  },
  {
    mode: 'pocetak',
    q: 'Draga ____,',
    en: 'Dear Grandma,',
    opts: ['bako', 'baka', 'baku', 'baki'],
    answer: 'bako',
    tip: 'The vocative of baka is bako.',
  },
  {
    mode: 'pocetak',
    q: '____ Marko,',
    en: 'Dear Marko, (opening an email to a friend)',
    opts: ['Dragi', 'Draga', 'Drago', 'Dragog'],
    answer: 'Dragi',
    tip: 'Marko is a man; dragi keeps its basic masculine form in an address.',
  },
  {
    mode: 'pocetak',
    q: 'Kako ____? Što ima novo?',
    en: "How are you? What's new? (to a friend)",
    opts: ['si', 'sam', 'je', 'smo'],
    answer: 'si',
    tip: 'To a friend: the ti form of biti.',
  },
  {
    mode: 'pocetak',
    q: 'Hvala na ____!',
    en: 'Thanks for your message!',
    opts: ['poruci', 'poruka', 'poruku', 'poruke'],
    answer: 'poruci',
    tip: 'hvala na + locative; k becomes c before -i.',
  },
  {
    mode: 'pocetak',
    q: 'Hvala na ____!',
    en: 'Thanks for your letter!',
    opts: ['pismu', 'pismo', 'pisma', 'pismom'],
    answer: 'pismu',
    tip: 'hvala na + locative: pismo → pismu.',
  },
  // ── vijesti ───────────────────────────────────────────────────────────────
  {
    mode: 'vijesti',
    q: 'Dugo ti se nisam ____.',
    en: "I haven't been in touch for a long time. (a woman writing)",
    opts: ['javila', 'javio', 'javiti', 'javim'],
    answer: 'javila',
    tip: 'The past participle agrees with the writer, a woman.',
  },
  {
    mode: 'vijesti',
    q: 'Dugo ____ se nisam javio.',
    en: "I haven't been in touch with you for a long time.",
    opts: ['ti', 'te', 'tebe', 'tvoj'],
    answer: 'ti',
    tip: 'javiti se takes the dative: ti, before se.',
  },
  {
    mode: 'vijesti',
    q: 'Imam puno ____.',
    en: 'I have lots of news.',
    opts: ['novosti', 'novost', 'novostima', 'novošću'],
    answer: 'novosti',
    tip: 'puno + genitive plural: novosti.',
  },
  {
    mode: 'vijesti',
    q: 'Prošli tjedan sam ____ na moru.',
    en: 'Last week I was at the seaside. (a woman writing)',
    opts: ['bila', 'bio', 'bilo', 'bili'],
    answer: 'bila',
    tip: 'A woman: bila.',
  },
  {
    mode: 'vijesti',
    q: 'U kolovozu ____ doći u Zagreb.',
    en: 'In August I will come to Zagreb.',
    opts: ['ću', 'ćeš', 'sam', 'bih'],
    answer: 'ću',
    tip: 'A plan: the future, ću for ja.',
  },
  {
    mode: 'vijesti',
    q: 'Preselila sam se u ____ stan.',
    en: 'I moved into a new flat.',
    opts: ['novi', 'novom', 'novog', 'novim'],
    answer: 'novi',
    tip: 'Moving INTO: u + accusative; stan is masculine inanimate, so novi.',
  },
  {
    mode: 'vijesti',
    q: 'Radim u ____ firmi u Splitu.',
    en: 'I work at a small company in Split.',
    opts: ['maloj', 'mala', 'malu', 'malom'],
    answer: 'maloj',
    tip: 'Where: u + locative; firma is feminine, so -oj.',
  },
  {
    mode: 'vijesti',
    q: 'Prošli vikend smo bili na ____.',
    en: 'Last weekend we were on Korčula.',
    opts: ['Korčuli', 'Korčula', 'Korčulu', 'Korčulom'],
    answer: 'Korčuli',
    tip: 'Where: na + locative.',
  },
  // ── kraj ──────────────────────────────────────────────────────────────────
  {
    mode: 'kraj',
    q: '____ se!',
    en: 'Get in touch!',
    opts: ['Javi', 'Javiš', 'Javiti', 'Javim'],
    answer: 'Javi',
    tip: 'The ti-imperative of javiti se.',
  },
  {
    mode: 'kraj',
    q: 'Puno ____!',
    en: 'Lots of love! (literally: many greetings)',
    opts: ['pozdrava', 'pozdrav', 'pozdravi', 'pozdravom'],
    answer: 'pozdrava',
    tip: 'puno + genitive plural.',
  },
  {
    mode: 'kraj',
    q: '____ Ana',
    en: 'Your Ana (the signature)',
    opts: ['Tvoja', 'Tvoj', 'Tvoje', 'Tvoju'],
    answer: 'Tvoja',
    tip: 'The possessive agrees with the writer, a woman.',
  },
  {
    mode: 'kraj',
    q: '____ Marko',
    en: 'Your Marko (the signature)',
    opts: ['Tvoj', 'Tvoja', 'Tvoje', 'Tvojeg'],
    answer: 'Tvoj',
    tip: 'The possessive agrees with the writer, a man.',
  },
  {
    mode: 'kraj',
    q: 'Pozdravi ____ i tatu!',
    en: 'Say hi to your mum and dad!',
    opts: ['mamu', 'mama', 'mami', 'mamom'],
    answer: 'mamu',
    tip: 'pozdraviti takes the accusative: mamu.',
  },
  {
    mode: 'kraj',
    q: 'Vidimo se ____!',
    en: 'See you soon!',
    opts: ['uskoro', 'skori', 'brzi', 'skora'],
    answer: 'uskoro',
    tip: 'uskoro = soon, an adverb.',
  },
  {
    mode: 'kraj',
    q: 'Koji završetak pripada formalnom pismu?',
    en: 'Which closing belongs in a formal letter?',
    opts: ['S poštovanjem,', 'Puno pozdrava!', 'Grlim te!', 'Javi se!'],
    answer: 'S poštovanjem,',
    tip: 'S poštovanjem (with respect) is the formal closing; the others are for friends.',
  },
  {
    mode: 'kraj',
    q: 'Piši ____!',
    en: 'Write to me!',
    opts: ['mi', 'me', 'ja', 'moj'],
    answer: 'mi',
    tip: 'Write TO me: the dative clitic mi.',
  },
];
