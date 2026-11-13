// src/data/drills/b2/consumerismAdvertisingDrill.ts
//
// B2 CONSUMERS AND ADVERTS — the drill for the `consumerism-advertising` lesson
// (B2 position 44).
//
// Three modes, eight items each:
//   kupnja      — shopping words and their grammar (na rasprodaji, kupiti na rate,
//                 utjecati na + accusative)
//   reklama     — the persuasive language of advertising
//   razgovorno  — colloquial shopping words and their standard equivalents
//
// Colloquial words are always labelled as colloquial; an item never asks the
// learner to treat one as standard.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CONSUMERISM_ADVERTISING_MODE_LABELS: Record<string, string> = {
  kupnja: '🛍️ Kupnja',
  reklama: '📣 Reklama',
  razgovorno: '💬 Razgovorno',
};

export const CONSUMERISM_ADVERTISING_DRILL_DATA: ModeDrillItem[] = [
  // ── kupnja ────────────────────────────────────────────────────────────────
  {
    mode: 'kupnja',
    q: 'Kupila sam ove čizme ____ rasprodaji.',
    en: 'I bought these boots at the sale.',
    opts: ['na', 'u', 'za', 'od'],
    answer: 'na',
    tip: 'A sale is an event: na rasprodaji.',
  },
  {
    mode: 'kupnja',
    q: 'Novi televizor kupili smo na ____.',
    en: 'We bought the new TV in instalments.',
    opts: ['rate', 'ratama', 'rata', 'ratu'],
    answer: 'rate',
    tip: 'kupiti na rate — accusative plural after na.',
  },
  {
    mode: 'kupnja',
    q: 'Reklame utječu na ____.',
    en: 'Adverts influence consumers.',
    opts: ['potrošačima', 'potrošače', 'potrošačem', 'potrošači'],
    answer: 'potrošače',
    tip: 'utjecati na + accusative.',
  },
  {
    mode: 'kupnja',
    q: 'Studenti imaju ____ od deset posto.',
    en: 'Students get a ten per cent discount.',
    opts: ['popust', 'račun', 'ormar', 'potrošač'],
    answer: 'popust',
    tip: 'The reduction you get off a price.',
  },
  {
    mode: 'kupnja',
    q: 'Prije blagdana zahvati nas potrošačka ____.',
    en: 'Before the holidays consumer fever takes hold of us.',
    opts: ['groznica', 'prehlada', 'temperatura', 'bolnica'],
    answer: 'groznica',
    tip: 'The fixed phrase is potrošačka groznica.',
  },
  {
    mode: 'kupnja',
    q: 'Kupila sam haljinu koja mi ne treba — bila je to impulzivna ____.',
    en: 'I bought a dress I do not need — it was an impulse buy.',
    opts: ['kupnja', 'prodaja', 'zarada', 'trgovina'],
    answer: 'kupnja',
    tip: 'impulzivna kupnja — buying on impulse.',
  },
  {
    mode: 'kupnja',
    q: 'Na Dan bez ____ nisam potrošio ni jedan euro.',
    en: 'On Buy Nothing Day I did not spend a single euro.',
    opts: ['kupnje', 'prodaje', 'novca', 'reklame'],
    answer: 'kupnje',
    tip: 'Dan bez kupnje — the genitive after bez.',
  },
  {
    mode: 'kupnja',
    q: 'When is Buy Nothing Day held?',
    opts: ['in early January', 'in late November', 'at Easter', 'in midsummer'],
    answer: 'in late November',
    tip: 'The same weekend as Black Friday.',
  },

  // ── reklama ───────────────────────────────────────────────────────────────
  {
    mode: 'reklama',
    q: 'Which slogan uses the polite imperative?',
    opts: ['Najbolja kava u gradu', 'Probajte novi okus!', 'Samo danas', 'Dva za cijenu jednog'],
    answer: 'Probajte novi okus!',
    tip: 'Look for a verb in the Vi form telling you what to do.',
  },
  {
    mode: 'reklama',
    q: 'Which slogan uses the superlative?',
    opts: ['Ne propustite!', 'Samo do nedjelje', 'Najbrži internet u gradu', 'Kupite odmah!'],
    answer: 'Najbrži internet u gradu',
    tip: 'Naj- + comparative is the superlative.',
  },
  {
    mode: 'reklama',
    q: 'Which trick does "Samo danas!" use?',
    opts: ['urgency', 'the superlative', 'a famous face', 'a guarantee'],
    answer: 'urgency',
    tip: 'Time pressure.',
  },
  {
    mode: 'reklama',
    q: 'Ponuda vrijedi do isteka ____.',
    en: 'The offer is valid while stocks last.',
    opts: ['zaliha', 'zalihom', 'zalihama', 'zalihu'],
    answer: 'zaliha',
    tip: 'do isteka + genitive plural.',
  },
  {
    mode: 'reklama',
    q: '____ priliku!',
    en: 'Seize the opportunity!',
    opts: ['Iskoristite', 'Iskoristili', 'Iskoristiti', 'Iskorištenu'],
    answer: 'Iskoristite',
    tip: 'Adverts speak in the polite imperative.',
  },
  {
    mode: 'reklama',
    q: 'Dva proizvoda za cijenu ____.',
    en: 'Two products for the price of one.',
    opts: ['jednog', 'jedan', 'jednom', 'jedna'],
    answer: 'jednog',
    tip: 'cijena + genitive: the price of one.',
  },
  {
    mode: 'reklama',
    q: 'Which trick does "Ograničena ponuda" use?',
    opts: ['scarcity', 'the superlative', 'humour', 'a low price'],
    answer: 'scarcity',
    tip: 'Something limited seems more valuable.',
  },
  {
    mode: 'reklama',
    q: 'Ne ____ ovu priliku!',
    en: 'Do not miss this opportunity!',
    opts: ['propustite', 'propustiti', 'propustili', 'propušteno'],
    answer: 'propustite',
    tip: 'The negative polite imperative: ne + the Vi imperative.',
  },

  // ── razgovorno ────────────────────────────────────────────────────────────
  {
    mode: 'razgovorno',
    q: 'Colloquial "lova" is standard ____.',
    opts: ['novac', 'gotovina', 'račun', 'popust'],
    answer: 'novac',
    tip: 'lova is colloquial for money in general.',
  },
  {
    mode: 'razgovorno',
    q: 'Colloquial "keš" is standard ____.',
    opts: ['novac', 'gotovina', 'kartica', 'štednja'],
    answer: 'gotovina',
    tip: 'Money in notes and coins.',
  },
  {
    mode: 'razgovorno',
    q: 'Colloquial "šoping" is standard ____.',
    opts: ['kupovina', 'trgovina', 'potrošač', 'izlog'],
    answer: 'kupovina',
    tip: 'The activity of shopping.',
  },
  {
    mode: 'razgovorno',
    q: 'What does colloquial "švorc" mean?',
    opts: ['broke', 'rich', 'stingy', 'lucky'],
    answer: 'broke',
    tip: 'The standard phrase is bez novca.',
  },
  {
    mode: 'razgovorno',
    q: 'What does colloquial "spiskati" mean?',
    opts: ['to save', 'to blow (money)', 'to borrow', 'to earn'],
    answer: 'to blow (money)',
    tip: 'The standard verb is potrošiti.',
  },
  {
    mode: 'razgovorno',
    q: 'What does colloquial "papreno" say about a price?',
    opts: ['very low', 'very high', 'fair', 'fixed'],
    answer: 'very high',
    tip: 'Like pepper — it burns.',
  },
  {
    mode: 'razgovorno',
    q: 'Napiši standardno: "Nemam love." → "Nemam ____."',
    opts: ['novca', 'novac', 'novcu', 'novcem'],
    answer: 'novca',
    tip: 'nemam + genitive.',
  },
  {
    mode: 'razgovorno',
    q: 'Where is "Potrošio sam svu lovu" out of place?',
    opts: [
      'in a chat with a friend',
      'in a formal complaint to a shop',
      'in a film dialogue',
      'in a text message',
    ],
    answer: 'in a formal complaint to a shop',
    tip: 'lova is colloquial; formal writing takes novac.',
  },
];
