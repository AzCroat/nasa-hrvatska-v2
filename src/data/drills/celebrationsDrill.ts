// src/data/drills/celebrationsDrill.ts
//
// A2 CELEBRATIONS & HOLIDAYS — the drill for the `celebrations-holidays` lesson.
//
// The structure under the calendar is one small adjective that has to agree
// with whatever follows it, and gets it wrong in public: *Sretan Božić* but
// *Sretna Nova godina*, *Sretan rođendan* but *Sretni blagdani*. A learner who
// memorises the phrase for Christmas and reuses the same form on New Year's Eve
// is making the mistake in front of a room.
//
// The rest is knowing what is actually said and when. *Čestitam!* covers
// congratulation of every kind, *Živjeli!* is the toast — with eye contact —
// and the *imendan* is a real occasion celebrated alongside the birthday, which
// no English-speaking learner expects.
//
// Three modes:
//   sretan    — the agreement, occasion by occasion
//   kalendar  — the Croatian year
//   obicaji   — what is said, and what you bring

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const CELEBRATIONS_MODE_LABELS: Record<string, string> = {
  sretan: '🎉 Sretan ili sretna',
  kalendar: '📆 Godina',
  obicaji: '🥂 Običaji',
};

export const CELEBRATIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── sretan ────────────────────────────────────────────────────────────────
  {
    mode: 'sretan',
    q: '____ Božić!',
    en: 'Merry Christmas!',
    opts: ['Sretan', 'Sretna', 'Sretno', 'Sretni'],
    answer: 'Sretan',
    tip: 'Božić is masculine → Sretan Božić.',
  },
  {
    mode: 'sretan',
    q: '____ Nova godina!',
    en: 'Happy New Year!',
    opts: ['Sretna', 'Sretan', 'Sretno', 'Sretni'],
    answer: 'Sretna',
    tip: 'Godina is feminine → Sretna Nova godina. The commonest slip in the language.',
  },
  {
    mode: 'sretan',
    q: '____ rođendan!',
    en: 'Happy birthday!',
    opts: ['Sretan', 'Sretna', 'Sretno', 'Sretni'],
    answer: 'Sretan',
    tip: 'rođendan is masculine.',
  },
  {
    mode: 'sretan',
    q: '____ blagdani!',
    en: 'Happy holidays!',
    opts: ['Sretni', 'Sretan', 'Sretna', 'Sretno'],
    answer: 'Sretni',
    tip: 'Plural noun → plural adjective: sretni blagdani.',
  },
  {
    mode: 'sretan',
    q: '____ imendan!',
    en: 'Happy name day!',
    opts: ['Sretan', 'Sretna', 'Sretno', 'Sretni'],
    answer: 'Sretan',
    tip: 'imendan is masculine, like rođendan.',
  },
  {
    mode: 'sretan',
    q: 'S čime se slaže "sretan"?',
    en: 'What does sretan agree with?',
    opts: ['s riječi koja slijedi', 's govornikom', 'sa slušateljem', 'ni s čim'],
    answer: 's riječi koja slijedi',
    tip: 'With the occasion named, not with anybody in the room.',
  },
  {
    mode: 'sretan',
    q: '____ Uskrs!',
    en: 'Happy Easter!',
    opts: ['Sretan', 'Sretna', 'Sretno', 'Sretni'],
    answer: 'Sretan',
    tip: 'Uskrs is masculine.',
  },
  {
    mode: 'sretan',
    q: 'Kako se čestita godišnjica?',
    en: 'For an anniversary:',
    opts: ['Sve najbolje!', 'Sretan godišnjica!', 'Sretno godišnjica!', 'Živjeli godišnjicu!'],
    answer: 'Sve najbolje!',
    tip: 'Sve najbolje! sidesteps the agreement entirely — and is always safe.',
  },

  // ── kalendar ──────────────────────────────────────────────────────────────
  {
    mode: 'kalendar',
    q: 'Kada je Božić?',
    en: 'When is Christmas?',
    opts: ['25. prosinca', '24. prosinca', '6. siječnja', '1. siječnja'],
    answer: '25. prosinca',
    tip: 'Badnjak, Christmas Eve, is the 24th.',
  },
  {
    mode: 'kalendar',
    q: 'Što je "Badnjak"?',
    en: 'What is Badnjak?',
    opts: ['Christmas Eve', 'Christmas Day', 'Boxing Day', 'Epiphany'],
    answer: 'Christmas Eve',
    tip: 'Badnjak — the 24th of December.',
  },
  {
    mode: 'kalendar',
    q: 'Kada je Dan državnosti?',
    en: 'When is Statehood Day?',
    opts: ['30. svibnja', '25. lipnja', '5. kolovoza', '8. listopada'],
    answer: '30. svibnja',
    tip: 'The 30th of May.',
  },
  {
    mode: 'kalendar',
    q: 'Što je "Velika Gospa"?',
    en: 'What is Velika Gospa?',
    opts: [
      'blagdan 15. kolovoza',
      'blagdan 1. studenoga',
      'blagdan 6. siječnja',
      'blagdan 25. ožujka',
    ],
    answer: 'blagdan 15. kolovoza',
    tip: 'The Assumption, on the 15th of August — a major pilgrimage day.',
  },
  {
    mode: 'kalendar',
    q: 'Kada su "Svi sveti"?',
    en: 'When is All Saints?',
    opts: ['1. studenoga', '2. studenoga', '31. listopada', '11. studenoga'],
    answer: '1. studenoga',
    tip: 'Families visit the graves, and the cemeteries are full of candles.',
  },
  {
    mode: 'kalendar',
    q: 'U kojem je mjesecu Uskrs?',
    en: 'Which season is Easter in?',
    opts: ['u proljeće', 'u jesen', 'zimi', 'ljeti'],
    answer: 'u proljeće',
    tip: 'Spring — the date moves each year.',
  },
  {
    mode: 'kalendar',
    q: 'Kako se kaže "bank holiday"?',
    en: 'a public holiday',
    opts: ['blagdan', 'praznik rada', 'odmor', 'slobodan dan'],
    answer: 'blagdan',
    tip: 'Blagdan covers the religious and national holidays alike.',
  },
  {
    mode: 'kalendar',
    q: 'Nova godina je ____. (1 January)',
    en: 'New Year is on 1 January.',
    opts: ['prvoga siječnja', 'prvi siječanj', 'prvom siječnju', 'prvi siječnja'],
    answer: 'prvoga siječnja',
    tip: 'A date takes the GENITIVE: prvoga siječnja.',
  },

  // ── obicaji ───────────────────────────────────────────────────────────────
  {
    mode: 'obicaji',
    q: 'Što je "imendan"?',
    en: 'What is an imendan?',
    opts: ['dan sveca čije ime nosite', 'drugi rođendan', 'dan vjenčanja', 'dan krštenja'],
    answer: 'dan sveca čije ime nosite',
    tip: 'Your name saint’s day — celebrated alongside the birthday, not instead of it.',
  },
  {
    mode: 'obicaji',
    q: 'Što se kaže uz zdravicu?',
    en: 'What do you say for a toast?',
    opts: ['Živjeli!', 'Sretno!', 'Dobar tek!', 'Hvala!'],
    answer: 'Živjeli!',
    tip: 'Živjeli! or U zdravlje! — and look people in the eye.',
  },
  {
    mode: 'obicaji',
    q: 'Što znači "Čestitam!"?',
    en: 'What does Čestitam mean?',
    opts: ['Congratulations!', 'Cheers!', 'Good luck!', 'Enjoy your meal!'],
    answer: 'Congratulations!',
    tip: 'It covers a wedding, a graduation, a new job — congratulation of every kind.',
  },
  {
    mode: 'obicaji',
    q: 'Pozvani ste nekome doma. Što nosite?',
    en: 'Invited to someone’s home:',
    opts: ['nešto malo', 'ništa', 'novac', 'vlastito jelo'],
    answer: 'nešto malo',
    tip: 'Wine, cake or flowers. Turning up empty-handed is noticed.',
  },
  {
    mode: 'obicaji',
    q: 'Što je "zdravica"?',
    en: 'What is a zdravica?',
    opts: ['a toast', 'a health check', 'a greeting card', 'a blessing'],
    answer: 'a toast',
    tip: 'From zdravlje, health.',
  },
  {
    mode: 'obicaji',
    q: 'Što se kaže prije jela?',
    en: 'What do you say before eating?',
    opts: ['Dobar tek!', 'Živjeli!', 'Čestitam!', 'Sretno!'],
    answer: 'Dobar tek!',
    tip: 'Dobar tek! — and it is said at every table, not only a special one.',
  },
  {
    mode: 'obicaji',
    q: 'Čestitam ti na ____! (posao)',
    en: 'Congratulations on the job!',
    opts: ['poslu', 'posao', 'posla', 'poslom'],
    answer: 'poslu',
    tip: 'Čestitati NA plus the LOCATIVE — the same government as hvala na.',
  },
  {
    mode: 'obicaji',
    q: 'Što se kaže nekome tko ide na ispit?',
    en: 'To someone sitting an exam:',
    opts: ['Sretno!', 'Čestitam!', 'Živjeli!', 'Sve najbolje!'],
    answer: 'Sretno!',
    tip: 'Sretno! is good luck BEFORE; čestitam comes after.',
  },
];
