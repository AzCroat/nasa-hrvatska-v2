// src/data/drills/b2/relativePronounsCasesDrill.ts
//
// B2 RELATIVE PRONOUNS IN EVERY CASE — the drill for the `relative-pronouns-cases` lesson.
//
//   sg     — koji / koja / koje in the singular: kojeg, kojem, kojom, u kojem
//   pl     — the plural: kojih, kojima, koje, koja
//   tkosto — onaj tko, ono što and their cases (čega, čemu, kome, kim), and čiji
//
// kojeg / kojega, kojem / kojemu and komu / kome are each two standard forms of one
// word; only one of each pair ever appears in an item, so no correct form is marked
// wrong.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const RELATIVE_PRONOUNS_CASES_MODE_LABELS: Record<string, string> = {
  sg: '🔗 Singular: kojeg, kojoj, kojim',
  pl: '👥 Plural: kojih, kojima',
  tkosto: '❓ tko, što, čiji',
};

export const RELATIVE_PRONOUNS_CASES_DRILL_DATA: ModeDrillItem[] = [
  // ── sg ───────────────────────────────────────────────────────────────────
  {
    mode: 'sg',
    q: 'Žena ____ sam vidio na tržnici je moja teta.',
    en: 'The woman I saw at the market is my aunt.',
    opts: ['koja', 'koju', 'kojoj', 'kojom'],
    answer: 'koju',
    tip: 'She is the object of vidio: feminine accusative.',
  },
  {
    mode: 'sg',
    q: 'Prijatelj ____ sam pisao živi u Kanadi.',
    en: 'The friend I wrote to lives in Canada.',
    opts: ['koji', 'kojim', 'kojeg', 'kojem'],
    answer: 'kojem',
    tip: 'I wrote TO him: masculine dative.',
  },
  {
    mode: 'sg',
    q: 'To je kolegica s ____ radim.',
    en: 'That is the colleague I work with.',
    opts: ['kojom', 'kojoj', 'koju', 'koja'],
    answer: 'kojom',
    tip: 's + instrumental, feminine.',
  },
  {
    mode: 'sg',
    q: 'Grad u ____ živim je malen.',
    en: 'The town I live in is small.',
    opts: ['koji', 'kojim', 'kojem', 'kojoj'],
    answer: 'kojem',
    tip: 'u + locative, masculine.',
  },
  {
    mode: 'sg',
    q: 'Čovjek ____ si upoznala je liječnik.',
    en: 'The man you met is a doctor.',
    opts: ['koji', 'kojeg', 'kojem', 'kojim'],
    answer: 'kojeg',
    tip: 'A living man as the object: the accusative looks like the genitive.',
  },
  {
    mode: 'sg',
    q: 'To je stol ____ sam kupio.',
    en: 'That is the table I bought.',
    opts: ['kojeg', 'kojem', 'koji', 'kojim'],
    answer: 'koji',
    tip: 'A masculine thing as the object: the accusative equals the nominative.',
  },
  {
    mode: 'sg',
    q: 'Selo iz ____ dolazi moja baka je u Zagorju.',
    en: 'The village my grandmother comes from is in Zagorje.',
    opts: ['kojem', 'koje', 'kojeg', 'kojim'],
    answer: 'kojeg',
    tip: 'iz + genitive, neuter.',
  },
  {
    mode: 'sg',
    q: 'Kuća ispred ____ čekam je žuta.',
    en: 'The house I’m waiting in front of is yellow.',
    opts: ['kojoj', 'koju', 'koje', 'kojom'],
    answer: 'koje',
    tip: 'ispred + genitive, feminine.',
  },
  // ── pl ───────────────────────────────────────────────────────────────────
  {
    mode: 'pl',
    q: 'Ljudi o ____ pričamo upravo su stigli.',
    en: 'The people we are talking about have just arrived.',
    opts: ['kojih', 'kojima', 'koje', 'koji'],
    answer: 'kojima',
    tip: 'o + locative plural.',
  },
  {
    mode: 'pl',
    q: 'Knjige ____ čitam su zanimljive.',
    en: 'The books I am reading are interesting.',
    opts: ['koja', 'kojih', 'koje', 'kojima'],
    answer: 'koje',
    tip: 'The object, feminine plural: koje.',
  },
  {
    mode: 'pl',
    q: 'Studenti ____ predajem su marljivi.',
    en: 'The students I teach are hard-working.',
    opts: ['kojih', 'koje', 'koji', 'kojima'],
    answer: 'kojima',
    tip: 'predavati takes the dative: kojima.',
  },
  {
    mode: 'pl',
    q: 'Pravila bez ____ ne možemo igrati su jednostavna.',
    en: 'The rules we can’t play without are simple.',
    opts: ['kojih', 'kojima', 'koje', 'koja'],
    answer: 'kojih',
    tip: 'bez + genitive plural.',
  },
  {
    mode: 'pl',
    q: 'Sela ____ smo posjetili su prekrasna.',
    en: 'The villages we visited are beautiful.',
    opts: ['koje', 'koja', 'kojih', 'kojima'],
    answer: 'koja',
    tip: 'The object, neuter plural: koja.',
  },
  {
    mode: 'pl',
    q: 'Prijatelji s ____ putujem dolaze sutra.',
    en: 'The friends I travel with are coming tomorrow.',
    opts: ['kojim', 'kojih', 'kojima', 'koje'],
    answer: 'kojima',
    tip: 's + instrumental plural.',
  },
  {
    mode: 'pl',
    q: 'Djeca ____ se igraju u parku su glasna.',
    en: 'The children playing in the park are loud.',
    opts: ['koji', 'koje', 'kojima', 'koja'],
    answer: 'koja',
    tip: 'djeca takes koja.',
  },
  {
    mode: 'pl',
    q: 'Zemlje kroz ____ smo putovali bile su daleko.',
    en: 'The countries we travelled through were far away.',
    opts: ['koje', 'kojih', 'kojima', 'koja'],
    answer: 'koje',
    tip: 'kroz + accusative, feminine plural.',
  },
  // ── tkosto ───────────────────────────────────────────────────────────────
  {
    mode: 'tkosto',
    q: 'Onaj ____ rano ustaje ima više vremena.',
    en: 'Whoever gets up early has more time.',
    opts: ['što', 'tko', 'čiji', 'koga'],
    answer: 'tko',
    tip: 'onaj, svatko, nitko + tko.',
  },
  {
    mode: 'tkosto',
    q: 'Sve ____ imam dugujem roditeljima.',
    en: 'Everything I have I owe to my parents.',
    opts: ['tko', 'čiji', 'koje', 'što'],
    answer: 'što',
    tip: 'sve, ono, nešto + što.',
  },
  {
    mode: 'tkosto',
    q: 'Ono ____ se najviše bojim je samoća.',
    en: 'What I fear most is loneliness.',
    opts: ['koga', 'čega', 'čemu', 'čime'],
    answer: 'čega',
    tip: 'bojati se takes the genitive: čega.',
  },
  {
    mode: 'tkosto',
    q: 'To je ono o ____ razmišljam.',
    en: 'That is what I am thinking about.',
    opts: ['čega', 'što', 'čemu', 'čim'],
    answer: 'čemu',
    tip: 'o + locative of što: o čemu.',
  },
  {
    mode: 'tkosto',
    q: 'Nisam našao nikoga s ____ bih mogao razgovarati.',
    en: 'I didn’t find anyone I could talk to.',
    opts: ['kome', 'koga', 'kim', 'čim'],
    answer: 'kim',
    tip: 's + instrumental of tko: s kim.',
  },
  {
    mode: 'tkosto',
    q: 'Upoznao sam susjedu ____ sin svira u bendu.',
    en: 'I met the neighbour whose son plays in a band.',
    opts: ['čija', 'čiji', 'čije', 'čiju'],
    answer: 'čiji',
    tip: 'čiji agrees with sin, the thing owned.',
  },
  {
    mode: 'tkosto',
    q: 'Ovo je pisac ____ knjige svi čitaju.',
    en: 'This is the writer whose books everyone reads.',
    opts: ['čiji', 'čija', 'čije', 'čijih'],
    answer: 'čije',
    tip: 'čiji agrees with knjige: feminine plural.',
  },
  {
    mode: 'tkosto',
    q: 'Onaj ____ sam pomogao zahvalio mi je.',
    en: 'The one I helped thanked me.',
    opts: ['koga', 'tko', 'kome', 'kim'],
    answer: 'kome',
    tip: 'pomoći takes the dative of tko.',
  },
];
