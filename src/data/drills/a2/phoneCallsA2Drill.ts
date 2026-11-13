// src/data/drills/a2/phoneCallsA2Drill.ts
//
// A2 PHONE CALLS — the drill for the `phone-calls-a2` lesson.
//
// A formal call: asking for someone with s + instrumental (s gospođom Novak), polite
// requests in the conditional (Biste li mogli…?), the set phrases for a bad line and a
// dropped call, and a voicemail that asks to be called back with the accusative
// (nazovite me).
//
// Three modes:
//   poziv   — answering and asking for someone
//   problem — a bad line, a cut-off call, a flat battery
//   poruka  — leaving a message and ending the call

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PHONE_CALLS_A2_MODE_LABELS: Record<string, string> = {
  poziv: '📞 Poziv',
  problem: '📶 Problemi',
  poruka: '📝 Poruka',
};

export const PHONE_CALLS_A2_DRILL_DATA: ModeDrillItem[] = [
  // ── poziv ─────────────────────────────────────────────────────────────────
  {
    mode: 'poziv',
    q: 'Mogu li razgovarati s ____ Novak?',
    en: 'May I speak to Mrs Novak?',
    opts: ['gospođa', 'gospođu', 'gospođom', 'gospođi'],
    answer: 'gospođom',
    tip: 'razgovarati s + instrumental.',
  },
  {
    mode: 'poziv',
    q: 'Mogu li razgovarati s gospodinom ____?',
    en: 'May I speak to Mr Kovač?',
    opts: ['Kovač', 'Kovača', 'Kovačem', 'Kovaču'],
    answer: 'Kovačem',
    tip: 'A man’s surname declines too: s gospodinom Kovačem.',
  },
  {
    mode: 'poziv',
    q: 'Someone asks who is calling. Which reply is right?',
    en: 'This is Ana Horvat.',
    opts: ['Ovdje Anu Horvat.', 'Ovdje Ana Horvat.', 'Ovdje Ani Horvat.', 'Ovdje Anom Horvat.'],
    answer: 'Ovdje Ana Horvat.',
    tip: 'Your name stays in the nominative.',
  },
  {
    mode: 'poziv',
    q: '____ bih razgovarati s direktorom.',
    en: 'I would like to speak to the director. (a man speaking)',
    opts: ['Htio', 'Htjela', 'Htjeli', 'Hoću'],
    answer: 'Htio',
    tip: 'The conditional: htio bih for a man.',
  },
  {
    mode: 'poziv',
    q: 'Trenutak, molim, ____ vas.',
    en: 'One moment, please, I’ll put you through.',
    opts: ['spajaš', 'spajam', 'spaja', 'spajamo'],
    answer: 'spajam',
    tip: 'The person answering speaks about themself: spajam.',
  },
  {
    mode: 'poziv',
    q: 'Nažalost, trenutno nije u ____.',
    en: 'Unfortunately she is not in the office right now.',
    opts: ['ured', 'uredu', 'ureda', 'uredom'],
    answer: 'uredu',
    tip: 'u + locative for where someone is.',
  },
  {
    mode: 'poziv',
    q: 'Which is a formal way to answer the phone at work?',
    en: 'Hotel Adria, good morning, how can I help?',
    opts: [
      'Hotel Adria, dobar dan, izvolite.',
      'Hotel Adria, bog, reci.',
      'Hotel Adria, što hoćeš?',
      'Hotel Adria, halo, tko je?',
    ],
    answer: 'Hotel Adria, dobar dan, izvolite.',
    tip: 'A greeting and izvolite — the formal offer of help.',
  },
  {
    mode: 'poziv',
    q: 'Želite li ostaviti ____?',
    en: 'Would you like to leave a message?',
    opts: ['poruka', 'poruci', 'porukom', 'poruku'],
    answer: 'poruku',
    tip: 'ostaviti + accusative.',
  },

  // ── problem ───────────────────────────────────────────────────────────────
  {
    mode: 'problem',
    q: 'Loše se ____.',
    en: 'The line is bad.',
    opts: ['čujem', 'čuje', 'čuješ', 'čuju'],
    answer: 'čuje',
    tip: 'The impersonal: se + third person singular.',
  },
  {
    mode: 'problem',
    q: 'Prekinula se ____.',
    en: 'We got cut off.',
    opts: ['vezu', 'vezi', 'veza', 'vezom'],
    answer: 'veza',
    tip: 'The connection is the subject — nominative.',
  },
  {
    mode: 'problem',
    q: '____ li mogli ponoviti?',
    en: 'Could you repeat that? (polite)',
    opts: ['Bi', 'Bih', 'Bismo', 'Biste'],
    answer: 'Biste',
    tip: 'The conditional for Vi: biste.',
  },
  {
    mode: 'problem',
    q: 'Ne čujem ____ dobro.',
    en: 'I can’t hear you well. (polite)',
    opts: ['vam', 'vas', 'vaš', 'Vi'],
    answer: 'vas',
    tip: 'čuti + accusative.',
  },
  {
    mode: 'problem',
    q: 'Baterija ____ je prazna.',
    en: 'My battery is flat.',
    opts: ['me', 'mi', 'moja', 'ja'],
    answer: 'mi',
    tip: 'The possessive dative: mi.',
  },
  {
    mode: 'problem',
    q: 'Nemam ____.',
    en: 'I have no signal.',
    opts: ['signal', 'signalu', 'signala', 'signalom'],
    answer: 'signala',
    tip: 'nemati + genitive.',
  },
  {
    mode: 'problem',
    q: 'Which sentence says the call was cut off?',
    en: 'The connection dropped.',
    opts: ['Prekinuo se veza.', 'Prekinula se veza.', 'Prekinula se vezu.', 'Prekinulo se veza.'],
    answer: 'Prekinula se veza.',
    tip: 'veza is feminine and the subject.',
  },
  {
    mode: 'problem',
    q: 'Nazvat ____ vas ponovno za pet minuta.',
    en: 'I’ll call you again in five minutes.',
    opts: ['će', 'ćeš', 'ću', 'ćemo'],
    answer: 'ću',
    tip: 'I will → ću, after nazvat.',
  },

  // ── poruka ────────────────────────────────────────────────────────────────
  {
    mode: 'poruka',
    q: 'Molim vas, nazovite ____.',
    en: 'Please call me.',
    opts: ['mi', 'me', 'ja', 'moj'],
    answer: 'me',
    tip: 'nazvati takes the accusative.',
  },
  {
    mode: 'poruka',
    q: 'Zovem ____ sastanka u petak.',
    en: 'I’m calling about the meeting on Friday.',
    opts: ['za', 'o', 'zbog', 'na'],
    answer: 'zbog',
    tip: 'sastanka is a genitive, and zbog takes the genitive.',
  },
  {
    mode: 'poruka',
    q: 'Ostavite poruku nakon zvučnog ____.',
    en: 'Leave a message after the tone.',
    opts: ['signal', 'signalom', 'signalu', 'signala'],
    answer: 'signala',
    tip: 'nakon + genitive.',
  },
  {
    mode: 'poruka',
    q: 'Oprostite, pogriješio sam ____.',
    en: 'Sorry, I dialled the wrong number.',
    opts: ['broj', 'broja', 'brojem', 'broju'],
    answer: 'broj',
    tip: 'pogriješiti + accusative.',
  },
  {
    mode: 'poruka',
    q: 'Recite ____, molim vas: zvala je Ana.',
    en: 'Please tell her that Ana called.',
    opts: ['ju', 'joj', 'nju', 'ona'],
    answer: 'joj',
    tip: 'reći takes the person in the dative.',
  },
  {
    mode: 'poruka',
    q: 'Hvala ____ pozivu.',
    en: 'Thanks for the call.',
    opts: ['za', 'u', 'na', 's'],
    answer: 'na',
    tip: 'Thanking for something: na + locative.',
  },
  {
    mode: 'poruka',
    q: 'Which phrase ends a call with a friend?',
    en: 'Talk soon!',
    opts: ['Čujemo se!', 'Čujete se!', 'Čujem se!', 'Čuju se!'],
    answer: 'Čujemo se!',
    tip: 'We will hear each other: the we-form.',
  },
  {
    mode: 'poruka',
    q: 'Which message is in the right order?',
    en: 'Hello, this is Marko. Please call me.',
    opts: [
      'Dobar dan, ovdje Marko. Molim vas, nazovite me.',
      'Dobar dan, ovdje Marko. Molim vas, nazovite mi.',
      'Dobar dan, ovdje Marka. Molim vas, nazovite me.',
      'Dobar dan, ovdje Marko. Molim vas, me nazovite.',
    ],
    answer: 'Dobar dan, ovdje Marko. Molim vas, nazovite me.',
    tip: 'Name in the nominative, nazvati + accusative, and me cannot open the clause.',
  },
];
