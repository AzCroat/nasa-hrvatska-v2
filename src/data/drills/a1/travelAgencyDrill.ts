// src/data/drills/a1/travelAgencyDrill.ts
//
// A1 AT THE TRAVEL AGENCY — the drill for the `travel-agency` lesson.
//
// Three modes:
//   karte     — the ticket as an object: kartu, povratnu kartu, karta za trajekt
//   kada      — when: u petak, za subotu, ujutro, Kada ide autobus?
//   razgovor  — the counter conversation: Molim Vas …, Želim …, za mene, uzimam ih
//
// The polite request is Molim (Vas) … / Želim …, as in the book: the conditional
// (Htio / Htjela bih) is never taught in A1, and telling the time needs numbers +
// genitive (lesson 84), so neither appears here.
//
// Distractors are the dictionary form or another case, the wrong person of the verb,
// or a preposition that cannot carry the meaning. No item offers "na" with a ferry
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
    q: 'Molim Vas ____ za Split.',
    en: 'A ticket to Split, please.',
    opts: ['kartu', 'karta', 'karti', 'kartom'],
    answer: 'kartu',
    tip: 'The ticket is an object: feminine -a becomes -u.',
  },
  {
    mode: 'karte',
    q: 'Želim ____ kartu.',
    en: 'I want a return ticket.',
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
    q: 'Trebam rezervirati ____.',
    en: 'I need to book a trip.',
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
    q: 'Trajekt ide ____. (in the morning)',
    en: 'The ferry goes in the morning.',
    opts: ['ujutro', 'navečer', 'jučer', 'noću'],
    answer: 'ujutro',
    tip: 'ujutro — in the morning; navečer — in the evening.',
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
    q: 'Vlak za Split ide u ____.',
    en: 'The train to Split goes on Monday.',
    opts: ['ponedjeljak', 'ponedjeljka', 'ponedjeljku', 'ponedjeljkom'],
    answer: 'ponedjeljak',
    tip: 'On a day: u + accusative; ponedjeljak is a masculine thing and does not change.',
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
    q: 'Jednu kartu, ____.',
    en: 'One ticket, please.',
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
    q: 'Kupac: ____ Vas povratnu kartu.',
    en: 'Customer: A return ticket, please.',
    opts: ['Molim', 'Molite', 'Moli', 'Moliti'],
    answer: 'Molim',
    tip: 'Molim Vas — "I ask you": please, at a counter.',
  },
  {
    mode: 'razgovor',
    q: 'Kupac: ____ kartu za Zadar.',
    en: 'Customer: I want a ticket to Zadar.',
    opts: ['Želim', 'Želiš', 'Želimo', 'Želi'],
    answer: 'Želim',
    tip: 'I want: želim.',
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
    q: 'Moramo ići ____ kolodvor ujutro.',
    en: 'We have to go to the station in the morning.',
    opts: ['na', 'u', 'kod', 'iz'],
    answer: 'na',
    tip: 'Learn it as a pair: na kolodvor.',
  },
];
