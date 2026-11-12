// src/data/drills/c1/commaBasicsDrill.ts
//
// C1 COMMA BASICS — the drill for the `comma-basics` lesson.
//
// Three modes, eight items each. Every item offers four punctuations of one sentence and
// exactly one follows Hrvatski pravopis:
//   nabrajanje — a list: commas between items, none before i or ili
//   vokativ    — the person addressed, an interjection, an answering da or ne
//   umetanje   — appositions, inserted phrases, adversative connectors, and no comma
//                before nego in a comparison
//
// Commas in complex sentences with dependent clauses belong to a later lesson and are
// kept out of this bank.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const COMMA_BASICS_MODE_LABELS: Record<string, string> = {
  nabrajanje: '📋 Nabrajanje',
  vokativ: '👋 Vokativ i uzvici',
  umetanje: '✂️ Umetci i veznici',
};

const Q = 'Koja je rečenica točna?';

export const COMMA_BASICS_DRILL_DATA: ModeDrillItem[] = [
  // ── nabrajanje ────────────────────────────────────────────────────────────
  {
    mode: 'nabrajanje',
    q: Q,
    en: 'We bought bread, milk and eggs.',
    opts: [
      'Kupili smo kruh, mlijeko i jaja.',
      'Kupili smo kruh, mlijeko, i jaja.',
      'Kupili smo, kruh, mlijeko i jaja.',
      'Kupili smo kruh mlijeko, i jaja.',
    ],
    answer: 'Kupili smo kruh, mlijeko i jaja.',
    tip: 'No comma before i in a list.',
  },
  {
    mode: 'nabrajanje',
    q: Q,
    en: 'We visited Zadar, Split and Dubrovnik.',
    opts: [
      'Posjetili smo Zadar, Split, i Dubrovnik.',
      'Posjetili smo Zadar, Split i Dubrovnik.',
      'Posjetili smo Zadar Split, i Dubrovnik.',
      'Posjetili, smo Zadar, Split i Dubrovnik.',
    ],
    answer: 'Posjetili smo Zadar, Split i Dubrovnik.',
    tip: 'Croatian has no serial comma.',
  },
  {
    mode: 'nabrajanje',
    q: Q,
    en: 'Will you have tea, coffee or juice?',
    opts: [
      'Hoćeš li čaj, kavu, ili sok?',
      'Hoćeš li, čaj, kavu ili sok?',
      'Hoćeš li čaj, kavu ili sok?',
      'Hoćeš li čaj kavu, ili sok?',
    ],
    answer: 'Hoćeš li čaj, kavu ili sok?',
    tip: 'No comma before ili in a list of alternatives.',
  },
  {
    mode: 'nabrajanje',
    q: Q,
    en: 'Ana cooked and Marko washed the dishes.',
    opts: [
      'Ana je kuhala i Marko je prao suđe.',
      'Ana je kuhala, i Marko je prao suđe.',
      'Ana, je kuhala i Marko je prao suđe.',
      'Ana je kuhala i Marko, je prao suđe.',
    ],
    answer: 'Ana je kuhala i Marko je prao suđe.',
    tip: 'No comma before i, even when it joins two whole clauses.',
  },
  {
    mode: 'nabrajanje',
    q: Q,
    en: 'He speaks English, German, French and Italian.',
    opts: [
      'Govori engleski, njemački, francuski, i talijanski.',
      'Govori engleski njemački, francuski i talijanski.',
      'Govori, engleski, njemački, francuski i talijanski.',
      'Govori engleski, njemački, francuski i talijanski.',
    ],
    answer: 'Govori engleski, njemački, francuski i talijanski.',
    tip: 'Commas between items, none before the final i.',
  },
  {
    mode: 'nabrajanje',
    q: Q,
    en: 'In the garden there are roses, tulips, lilies and violets.',
    opts: [
      'U vrtu su ruže, tulipani, ljiljani i ljubičice.',
      'U vrtu su ruže, tulipani, ljiljani, i ljubičice.',
      'U vrtu su, ruže, tulipani, ljiljani i ljubičice.',
      'U vrtu su ruže tulipani, ljiljani i ljubičice.',
    ],
    answer: 'U vrtu su ruže, tulipani, ljiljani i ljubičice.',
    tip: 'Every item separated, except the last two, joined by i.',
  },
  {
    mode: 'nabrajanje',
    q: Q,
    en: 'Bring a pencil, a notebook and a dictionary.',
    opts: [
      'Donesi olovku bilježnicu, i rječnik.',
      'Donesi, olovku, bilježnicu i rječnik.',
      'Donesi olovku, bilježnicu, i rječnik.',
      'Donesi olovku, bilježnicu i rječnik.',
    ],
    answer: 'Donesi olovku, bilježnicu i rječnik.',
    tip: 'No comma before i in a list.',
  },
  {
    mode: 'nabrajanje',
    q: Q,
    en: 'We will come on Monday or Tuesday.',
    opts: [
      'Doći ćemo u ponedjeljak ili utorak.',
      'Doći ćemo u ponedjeljak, ili utorak.',
      'Doći ćemo, u ponedjeljak ili utorak.',
      'Doći, ćemo u ponedjeljak ili utorak.',
    ],
    answer: 'Doći ćemo u ponedjeljak ili utorak.',
    tip: 'No comma before ili joining two alternatives.',
  },

  // ── vokativ ───────────────────────────────────────────────────────────────
  {
    mode: 'vokativ',
    q: Q,
    en: 'Marko, come here.',
    opts: ['Marko dođi ovamo.', 'Marko, dođi ovamo.', 'Marko dođi, ovamo.', 'Marko, dođi, ovamo.'],
    answer: 'Marko, dođi ovamo.',
    tip: 'The vocative is set off from the rest of the sentence.',
  },
  {
    mode: 'vokativ',
    q: Q,
    en: 'Listen, Ivana, this is important.',
    opts: [
      'Slušaj Ivana, ovo je važno.',
      'Slušaj, Ivana ovo je važno.',
      'Slušaj, Ivana, ovo je važno.',
      'Slušaj Ivana ovo, je važno.',
    ],
    answer: 'Slušaj, Ivana, ovo je važno.',
    tip: 'A vocative in the middle takes a comma on each side.',
  },
  {
    mode: 'vokativ',
    q: Q,
    en: 'Thank you, madam.',
    opts: [
      'Hvala vam gospođo.',
      'Hvala, vam gospođo.',
      'Hvala, vam, gospođo.',
      'Hvala vam, gospođo.',
    ],
    answer: 'Hvala vam, gospođo.',
    tip: 'A comma before the vocative at the end.',
  },
  {
    mode: 'vokativ',
    q: Q,
    en: 'Ouch, how it hurts!',
    opts: ['Joj, kako boli!', 'Joj kako boli!', 'Joj kako, boli!', 'Joj, kako, boli!'],
    answer: 'Joj, kako boli!',
    tip: 'An interjection is separated from what follows.',
  },
  {
    mode: 'vokativ',
    q: Q,
    en: 'Yes, I saw him yesterday.',
    opts: [
      'Da vidio sam ga jučer.',
      'Da vidio, sam ga jučer.',
      'Da, vidio sam ga jučer.',
      'Da, vidio, sam ga jučer.',
    ],
    answer: 'Da, vidio sam ga jučer.',
    tip: 'An answering da is followed by a comma.',
  },
  {
    mode: 'vokativ',
    q: Q,
    en: 'No, I was not there.',
    opts: [
      'Ne nisam bio ondje.',
      'Ne nisam, bio ondje.',
      'Ne, nisam, bio ondje.',
      'Ne, nisam bio ondje.',
    ],
    answer: 'Ne, nisam bio ondje.',
    tip: 'An answering ne is followed by a comma.',
  },
  {
    mode: 'vokativ',
    q: Q,
    en: 'Mum, where are my keys?',
    opts: [
      'Mama, gdje su moji ključevi?',
      'Mama gdje su moji ključevi?',
      'Mama gdje, su moji ključevi?',
      'Mama gdje su, moji ključevi?',
    ],
    answer: 'Mama, gdje su moji ključevi?',
    tip: 'The person addressed is set off.',
  },
  {
    mode: 'vokativ',
    q: Q,
    en: 'Come in, please, Mr Horvat.',
    opts: [
      'Uđite molim vas gospodine Horvat.',
      'Uđite, molim vas gospodine Horvat.',
      'Uđite molim, vas gospodine Horvat.',
      'Uđite, molim vas, gospodine Horvat.',
    ],
    answer: 'Uđite, molim vas, gospodine Horvat.',
    tip: 'Both molim vas and the vocative gospodine Horvat are set off.',
  },

  // ── umetanje ──────────────────────────────────────────────────────────────
  {
    mode: 'umetanje',
    q: Q,
    en: 'Zagreb, the capital of Croatia, lies on the Sava.',
    opts: [
      'Zagreb, glavni grad Hrvatske leži na Savi.',
      'Zagreb glavni grad Hrvatske, leži na Savi.',
      'Zagreb, glavni grad Hrvatske, leži na Savi.',
      'Zagreb, glavni, grad Hrvatske leži na Savi.',
    ],
    answer: 'Zagreb, glavni grad Hrvatske, leži na Savi.',
    tip: 'An apposition is opened and closed.',
  },
  {
    mode: 'umetanje',
    q: Q,
    en: 'Nikola Tesla, the famous inventor, was born in Smiljan.',
    opts: [
      'Nikola Tesla, slavni izumitelj, rođen je u Smiljanu.',
      'Nikola Tesla slavni izumitelj, rođen je u Smiljanu.',
      'Nikola Tesla, slavni izumitelj rođen je u Smiljanu.',
      'Nikola, Tesla slavni izumitelj, rođen je u Smiljanu.',
    ],
    answer: 'Nikola Tesla, slavni izumitelj, rođen je u Smiljanu.',
    tip: 'A pair of commas around the apposition.',
  },
  {
    mode: 'umetanje',
    q: Q,
    en: 'That is, in my opinion, the best solution.',
    opts: [
      'To je po mom mišljenju, najbolje rješenje.',
      'To je, po mom mišljenju najbolje rješenje.',
      'To, je po mom mišljenju najbolje rješenje.',
      'To je, po mom mišljenju, najbolje rješenje.',
    ],
    answer: 'To je, po mom mišljenju, najbolje rješenje.',
    tip: 'An inserted phrase takes a comma on each side.',
  },
  {
    mode: 'umetanje',
    q: Q,
    en: 'It is expensive, but worth it.',
    opts: [
      'Skupo je ali vrijedi.',
      'Skupo je, ali vrijedi.',
      'Skupo je ali, vrijedi.',
      'Skupo, je ali vrijedi.',
    ],
    answer: 'Skupo je, ali vrijedi.',
    tip: 'A comma before ali.',
  },
  {
    mode: 'umetanje',
    q: Q,
    en: 'He did not call; he wrote a letter instead.',
    opts: [
      'Nije nazvao nego, je napisao pismo.',
      'Nije, nazvao nego je napisao pismo.',
      'Nije nazvao, nego je napisao pismo.',
      'Nije nazvao nego je, napisao pismo.',
    ],
    answer: 'Nije nazvao, nego je napisao pismo.',
    tip: 'A comma before adversative nego.',
  },
  {
    mode: 'umetanje',
    q: Q,
    en: 'It is better late than never.',
    opts: [
      'Bolje je kasno nego nikad.',
      'Bolje je kasno, nego nikad.',
      'Bolje je, kasno nego nikad.',
      'Bolje, je kasno nego nikad.',
    ],
    answer: 'Bolje je kasno nego nikad.',
    tip: 'nego in a comparison takes no comma.',
  },
  {
    mode: 'umetanje',
    q: Q,
    en: 'Mrs Horvat, our neighbour, is a doctor.',
    opts: [
      'Gospođa Horvat, naša susjeda liječnica je.',
      'Gospođa Horvat naša susjeda, liječnica je.',
      'Gospođa, Horvat naša susjeda liječnica je.',
      'Gospođa Horvat, naša susjeda, liječnica je.',
    ],
    answer: 'Gospođa Horvat, naša susjeda, liječnica je.',
    tip: 'The apposition is closed before the predicate.',
  },
  {
    mode: 'umetanje',
    q: Q,
    en: 'We, of course, agreed at once.',
    opts: [
      'Mi smo, naravno, odmah pristali.',
      'Mi smo naravno, odmah pristali.',
      'Mi smo, naravno odmah pristali.',
      'Mi, smo naravno odmah pristali.',
    ],
    answer: 'Mi smo, naravno, odmah pristali.',
    tip: 'An inserted word takes a pair of commas.',
  },
];
