// src/data/drills/a1/travelAgencyDrill.ts
//
// A1 AT THE TRAVEL AGENCY — the drill for the `travel-agency` lesson.
//
// Three modes:
//   karte     — the ticket as an object: kartu, povratnu kartu, karta za trajekt
//   kada      — when: u petak, za subotu, u osam sati, Kada ide autobus?
//   razgovor  — the counter conversation: Htio / Htjela bih, za mene, uzimam ih
//
// Distractors are the dictionary form or another case, the wrong polite form for the
// speaker, or a preposition that cannot carry the meaning. No item offers "na" with a ferry
// to an island (trajekt na Brač is real Croatian) or a plural accusative as a wrong answer.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const TRAVEL_AGENCY_MODE_LABELS: Record<string, string> = {
  karte: '🎫 Karte',
  kada: '🕗 Kada',
  razgovor: '💬 Na šalteru',
};

export const TRAVEL_AGENCY_DRILL_DATA: ModeDrillItem[] = [
  // ── karte ──────────────────────────────────────────────────────────────
  {
    mode: 'karte',
    q: 'Htio bih ____ za Split.',
    en: 'I would like a ticket to Split. (a man speaking)',
    opts: ['kartu', 'karta', 'karti', 'kartom'],
    answer: 'kartu',
    tip: 'The ticket is an object: feminine -a becomes -u.',
  },
  {
    mode: 'karte',
    q: 'Htjela bih ____ kartu.',
    en: 'I would like a return ticket. (a woman speaking)',
    opts: ['povratnu', 'povratna', 'povratnoj', 'povratnom'],
    answer: 'povratnu',
    tip: 'The adjective takes the same -u as kartu.',
  },
  {
    mode: 'karte',
    q: 'Trebam ____ kartu za Zagreb.',
    en: 'I need a one-way ticket to Zagreb.',
    opts: ['jednosmjernu', 'jednosmjerna', 'jednosmjernoj', 'jednosmjernom'],
    answer: 'jednosmjernu',
    tip: 'The adjective takes the same -u as kartu.',
  },
  {
    mode: 'karte',
    q: 'Imate li kartu ____ trajekt?',
    en: 'Do you have a ticket for the ferry?',
    opts: ['za', 'kod', 'iz', 'od'],
    answer: 'za',
    tip: 'A ticket is FOR something: za.',
  },
  {
    mode: 'karte',
    q: 'Koliko ____ karta?',
    en: 'How much does the ticket cost?',
    opts: ['košta', 'koštaju', 'koštam', 'koštaš'],
    answer: 'košta',
    tip: 'One ticket is "it": košta.',
  },
  {
    mode: 'karte',
    q: 'Želim rezervirati ____.',
    en: 'I want to book a room.',
    opts: ['sobu', 'soba', 'sobi', 'sobom'],
    answer: 'sobu',
    tip: 'The room is the object of rezervirati.',
  },
  {
    mode: 'karte',
    q: 'Kupujem kartu za ____.',
    en: 'I am buying a ticket for the train.',
    opts: ['vlak', 'vlaka', 'vlaku', 'vlakom'],
    answer: 'vlak',
    tip: 'za + a masculine thing: no change.',
  },
  {
    mode: 'karte',
    q: 'Htjela bih rezervirati ____.',
    en: 'I would like to book a trip.',
    opts: ['putovanje', 'putovanju', 'putovanjem', 'putovanjima'],
    answer: 'putovanje',
    tip: 'putovanje is neuter, so it does not change as an object.',
  },
  // ── kada ───────────────────────────────────────────────────────────────
  {
    mode: 'kada',
    q: 'Idemo u Dubrovnik ____ petak.',
    en: 'We are going to Dubrovnik on Friday.',
    opts: ['u', 'kod', 'iz', 'od'],
    answer: 'u',
    tip: 'On a day: u + accusative.',
  },
  {
    mode: 'kada',
    q: 'Idemo na izlet u ____.',
    en: 'We are going on a trip on Sunday.',
    opts: ['nedjelju', 'nedjelja', 'nedjelji', 'nedjeljom'],
    answer: 'nedjelju',
    tip: 'u + accusative: nedjelja → nedjelju.',
  },
  {
    mode: 'kada',
    q: 'Kada ____ autobus za Rijeku?',
    en: 'When does the bus to Rijeka go?',
    opts: ['ide', 'idu', 'idem', 'ideš'],
    answer: 'ide',
    tip: 'One bus is "it": ide.',
  },
  {
    mode: 'kada',
    q: 'Trajekt ide u osam ____.',
    en: "The ferry goes at eight o'clock.",
    opts: ['sati', 'sat', 'sata', 'satu'],
    answer: 'sati',
    tip: 'After five and above: sati.',
  },
  {
    mode: 'kada',
    q: 'Imate li sobu za ____?',
    en: 'Do you have a room for Saturday?',
    opts: ['subotu', 'subota', 'suboti', 'subotom'],
    answer: 'subotu',
    tip: 'za + accusative: subota → subotu.',
  },
  {
    mode: 'kada',
    q: 'Kada idu ____ za Hvar?',
    en: 'When do the ferries to Hvar go?',
    opts: ['trajekti', 'trajekt', 'trajekta', 'trajektu'],
    answer: 'trajekti',
    tip: 'idu is plural, so the subject is plural too: trajekti.',
  },
  {
    mode: 'kada',
    q: 'Vlak za Split ide ____ devet.',
    en: 'The train to Split goes at nine.',
    opts: ['u', 'na', 'kod', 'od'],
    answer: 'u',
    tip: 'At a time on the clock: u.',
  },
  {
    mode: 'kada',
    q: 'Rezerviram hotel za ____ i subotu.',
    en: 'I am booking the hotel for Friday and Saturday.',
    opts: ['petak', 'petka', 'petku', 'petkom'],
    answer: 'petak',
    tip: 'za + a masculine thing: no change.',
  },
  // ── razgovor ───────────────────────────────────────────────────────────
  {
    mode: 'razgovor',
    q: 'Agent: Dobar dan, ____.',
    en: 'Agent: Good afternoon, how can I help?',
    opts: ['izvolite', 'doviđenja', 'laku noć', 'do sutra'],
    answer: 'izvolite',
    tip: 'izvolite invites the customer to say what they want.',
  },
  {
    mode: 'razgovor',
    q: 'Za koga je soba? — Za ____ i mog brata.',
    en: 'Who is the room for? — For me and my brother.',
    opts: ['mene', 'ja', 'meni', 'moj'],
    answer: 'mene',
    tip: 'After za: the long object form of ja.',
  },
  {
    mode: 'razgovor',
    q: 'Htjela bih jednu kartu, ____.',
    en: 'I would like one ticket, please.',
    opts: ['molim', 'doviđenja', 'laku noć', 'izvolite'],
    answer: 'molim',
    tip: 'molim — please. Izvolite is what the agent says.',
  },
  {
    mode: 'razgovor',
    q: 'Karte? Uzimam ____.',
    en: 'The tickets? I will take them.',
    opts: ['ih', 'ga', 'je', 'nas'],
    answer: 'ih',
    tip: 'The tickets are "they": ih.',
  },
  {
    mode: 'razgovor',
    q: 'Kupac (žena): ____ bih povratnu kartu.',
    en: 'Customer (a woman): I would like a return ticket.',
    opts: ['Htjela', 'Htio', 'Htjeli', 'Hoću'],
    answer: 'Htjela',
    tip: 'A woman says Htjela bih; a man says Htio bih.',
  },
  {
    mode: 'razgovor',
    q: 'Kupac (muškarac): ____ bih kartu za Zadar.',
    en: 'Customer (a man): I would like a ticket to Zadar.',
    opts: ['Htio', 'Htjela', 'Htjeli', 'Hoću'],
    answer: 'Htio',
    tip: 'A man says Htio bih.',
  },
  {
    mode: 'razgovor',
    q: 'Idemo ____ izlet na Krk.',
    en: 'We are going on a trip to Krk.',
    opts: ['na', 'u', 'kod', 'iz'],
    answer: 'na',
    tip: 'A trip is an activity: na izlet.',
  },
  {
    mode: 'razgovor',
    q: 'Moramo ići ____ kolodvor u sedam.',
    en: 'We have to go to the station at seven.',
    opts: ['na', 'u', 'kod', 'iz'],
    answer: 'na',
    tip: 'Learn it as a pair: na kolodvor.',
  },
];
