// src/data/drills/rentingDrill.ts
//
// B1 RENTING A FLAT — the drill for the `renting-flat` lesson.
//
// One fact in this lesson costs money if it is missed: Croatian counts rooms
// WITHOUT the kitchen and bathroom, and the count includes the living room. A
// *dvosoban stan* is not a two-bedroom flat — it is a living room plus one
// bedroom. A learner reading adverts in English arithmetic will view the wrong
// flats for a month.
//
// The second is that the advertised *najamnina* is not what you pay. *Režije* —
// utilities — are usually separate, and *Jesu li režije uključene?* is the
// question that decides whether an advert is cheap or not. Then the *polog*,
// and an *ugovor o najmu*, which a residence-permit application will want to
// see.
//
// Three modes:
//   oglas         — reading the advert
//   sobe          — how the rooms are counted, and what the rent covers
//   razgledavanje — the viewing, and the questions that matter

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const RENTING_MODE_LABELS: Record<string, string> = {
  oglas: '📰 Oglas',
  sobe: '🛏️ Sobe i troškovi',
  razgledavanje: '🔑 Razgledavanje',
};

export const RENTING_DRILL_DATA: ModeDrillItem[] = [
  // ── oglas ─────────────────────────────────────────────────────────────────
  {
    mode: 'oglas',
    q: 'Što znači "iznajmljuje se"?',
    en: 'What does it mean?',
    opts: ['for rent', 'for sale', 'sold', 'under offer'],
    answer: 'for rent',
    tip: 'The impersonal se again — nobody is named as the landlord.',
  },
  {
    mode: 'oglas',
    q: 'Što je "garsonijera"?',
    en: 'What is a garsonijera?',
    opts: ['studio flat', 'two-room flat', 'shared room', 'attic room'],
    answer: 'studio flat',
    tip: 'One room with everything in it.',
  },
  {
    mode: 'oglas',
    q: 'Što znači "namješten"?',
    en: 'What does namješten mean?',
    opts: ['furnished', 'renovated', 'available', 'south-facing'],
    answer: 'furnished',
    tip: 'nenamješten is unfurnished — one prefix apart, so read carefully.',
  },
  {
    mode: 'oglas',
    q: 'Stan ima 55 ____. (kvadrat)',
    en: 'The flat is 55 square metres.',
    opts: ['kvadrata', 'kvadrate', 'kvadrat', 'kvadratima'],
    answer: 'kvadrata',
    tip: 'Genitive plural after a number above four: 55 kvadrata.',
  },
  {
    mode: 'oglas',
    q: 'Što je "najamnina"?',
    en: 'What is najamnina?',
    opts: ['the rent', 'the deposit', 'the agency fee', 'the utilities'],
    answer: 'the rent',
    tip: 'From najam. The deposit is polog.',
  },
  {
    mode: 'oglas',
    q: 'Što je "polog"?',
    en: 'What is a polog?',
    opts: ['deposit', 'first month rent', 'agency fee', 'insurance'],
    answer: 'deposit',
    tip: 'Also called jamstvo. Usually one or two months.',
  },
  {
    mode: 'oglas',
    q: 'Što su "režije"?',
    en: 'What are režije?',
    opts: ['utilities', 'house rules', 'furnishings', 'renovations'],
    answer: 'utilities',
    tip: 'Electricity, water, heating, waste. Plural-only, and rarely in the rent.',
  },
  {
    mode: 'oglas',
    q: 'Oglas kaže "blizu centra". Koji padež?',
    en: 'Which case after blizu?',
    opts: ['genitiv', 'lokativ', 'akuzativ', 'dativ'],
    answer: 'genitiv',
    tip: 'blizu centra — genitive, like every position word.',
  },

  // ── sobe ──────────────────────────────────────────────────────────────────
  {
    mode: 'sobe',
    q: 'Koliko spavaćih soba ima "dvosoban stan"?',
    en: 'How many bedrooms in a dvosoban stan?',
    opts: ['jednu', 'dvije', 'tri', 'nijednu'],
    answer: 'jednu',
    tip: 'The count includes the living room: dvosoban = living room plus one bedroom.',
  },
  {
    mode: 'sobe',
    q: 'Ulaze li kuhinja i kupaonica u broj soba?',
    en: 'Do the kitchen and bathroom count?',
    opts: ['ne', 'da', 'samo kuhinja', 'samo kupaonica'],
    answer: 'ne',
    tip: 'Never. That is the whole reason the arithmetic surprises people.',
  },
  {
    mode: 'sobe',
    q: 'Što je "jednosoban stan"?',
    en: 'What is a jednosoban stan?',
    opts: [
      'jedna soba plus kuhinja i kupaonica',
      'jedna spavaća i dnevni boravak',
      'samo jedna prostorija',
      'dvije sobe',
    ],
    answer: 'jedna soba plus kuhinja i kupaonica',
    tip: 'One room that serves as both — with the kitchen and bathroom separate.',
  },
  {
    mode: 'sobe',
    q: 'Jesu li režije ____? (uključen)',
    en: 'Are the utilities included?',
    opts: ['uključene', 'uključen', 'uključeno', 'uključena'],
    answer: 'uključene',
    tip: 'Režije is plural feminine, so uključene.',
  },
  {
    mode: 'sobe',
    q: 'Zašto se to pita svaki put?',
    en: 'Why ask every time?',
    opts: [
      'režije su često dodatne',
      'zakon to traži',
      'režije su uvijek u cijeni',
      'iz uljudnosti',
    ],
    answer: 'režije su često dodatne',
    tip: 'They usually are, and they change what the flat actually costs.',
  },
  {
    mode: 'sobe',
    q: 'Koliki je ____? (deposit)',
    en: 'How much is the deposit?',
    opts: ['polog', 'poloz', 'pologa', 'polozi'],
    answer: 'polog',
    tip: 'Koliki je polog?',
  },
  {
    mode: 'sobe',
    q: 'Najamnina je 500 ____ mjesečno. (euro)',
    en: '500 euros a month',
    opts: ['eura', 'euro', 'eure', 'eurima'],
    answer: 'eura',
    tip: 'Genitive plural after a number above four.',
  },
  {
    mode: 'sobe',
    q: 'Što znači "trosoban"?',
    en: 'What is a trosoban stan?',
    opts: [
      'dnevni boravak i dvije spavaće',
      'tri spavaće sobe',
      'tri prostorije s kuhinjom',
      'tri kata',
    ],
    answer: 'dnevni boravak i dvije spavaće',
    tip: 'Same rule, one room further along.',
  },

  // ── razgledavanje ─────────────────────────────────────────────────────────
  {
    mode: 'razgledavanje',
    q: 'Mogu li ____ stan?',
    en: 'Can I view the flat?',
    opts: ['pogledati', 'pogledam', 'gledati', 'pogled'],
    answer: 'pogledati',
    tip: 'The infinitive after a modal.',
  },
  {
    mode: 'razgledavanje',
    q: 'Na koliko dugo je ____? (ugovor)',
    en: 'How long is the contract for?',
    opts: ['ugovor', 'ugovora', 'ugovoru', 'ugovorom'],
    answer: 'ugovor',
    tip: 'The subject stays nominative.',
  },
  {
    mode: 'razgledavanje',
    q: 'Kako se zove najmoprimac na hrvatskom?',
    en: 'The person renting IN:',
    opts: ['najmoprimac', 'najmodavac', 'vlasnik', 'stanar broja'],
    answer: 'najmoprimac',
    tip: 'najmoprimac takes, najmodavac gives. Two letters apart in the contract.',
  },
  {
    mode: 'razgledavanje',
    q: 'Je li dopušteno držati ____? (kućni ljubimci)',
    en: 'Are pets allowed?',
    opts: ['kućne ljubimce', 'kućni ljubimci', 'kućnih ljubimaca', 'kućnim ljubimcima'],
    answer: 'kućne ljubimce',
    tip: 'Accusative plural after držati.',
  },
  {
    mode: 'razgledavanje',
    q: 'Zašto tražiti "ugovor o najmu"?',
    en: 'Why insist on a written contract?',
    opts: ['traži ga i zahtjev za boravak', 'jeftinije je', 'vlasnik to voli', 'nije potrebno'],
    answer: 'traži ga i zahtjev za boravak',
    tip: 'A residence-permit application will ask to see it.',
  },
  {
    mode: 'razgledavanje',
    q: 'Stan je na ____ katu. (četvrti)',
    en: 'on the fourth floor',
    opts: ['četvrtom', 'četvrti', 'četvrtog', 'četiri'],
    answer: 'četvrtom',
    tip: 'Ordinal in the locative — and ask whether there is a dizalo.',
  },
  {
    mode: 'razgledavanje',
    q: 'Što znači "useljivo odmah"?',
    en: 'What does it mean?',
    opts: ['available now', 'newly built', 'recently renovated', 'sold with furniture'],
    answer: 'available now',
    tip: 'From useliti se, to move in.',
  },
  {
    mode: 'razgledavanje',
    q: 'Plaćam najamninu ____. (mjesec)',
    en: 'I pay the rent monthly.',
    opts: ['mjesečno', 'mjesec', 'mjeseca', 'mjesecu'],
    answer: 'mjesečno',
    tip: 'An adverb: mjesečno, tjedno, godišnje.',
  },
];
