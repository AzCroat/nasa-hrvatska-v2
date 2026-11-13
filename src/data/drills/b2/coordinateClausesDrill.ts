// src/data/drills/b2/coordinateClausesDrill.ts
//
// B2 COMPOUND SENTENCES — the drill for the `coordinate-clauses` lesson
// (B2 position 41).
//
// Three modes, eight items each:
//   suprotne  — a, ali, nego / već: side by side, against expectation, correction
//   vrste     — i, pa, te, ili, samo, jedino, zato, stoga: what each conjunction does
//   enklitike — clitics after a conjunction, and the comma
//
// nego and već are synonyms, as are samo and jedino, and zato, stoga and dakle:
// an item never offers two of a synonym set. After i and a a clitic waits for the
// next word; after ali, pa, te, nego and već it may follow straight away.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const COORDINATE_CLAUSES_MODE_LABELS: Record<string, string> = {
  suprotne: '⚖️ A, ali, nego',
  vrste: '🔗 Vrste veznika',
  enklitike: '📌 Enklitike i zarez',
};

export const COORDINATE_CLAUSES_DRILL_DATA: ModeDrillItem[] = [
  // ── suprotne ──────────────────────────────────────────────────────────────
  {
    mode: 'suprotne',
    q: 'Ja plaćam karticom, ____ moj brat plaća gotovinom.',
    en: 'I pay by card, and my brother pays in cash.',
    opts: ['a', 'nego', 'već', 'ili'],
    answer: 'a',
    tip: 'Two people side by side, nothing denied: a.',
  },
  {
    mode: 'suprotne',
    q: 'Htio sam kupiti jaknu, ____ bila je preskupa.',
    en: 'I wanted to buy a jacket, but it was too expensive.',
    opts: ['nego', 'ali', 'ili', 'te'],
    answer: 'ali',
    tip: 'The second clause goes against what you expected.',
  },
  {
    mode: 'suprotne',
    q: 'Ne kupujem na internetu, ____ u malim dućanima.',
    en: 'I do not shop online but in small shops.',
    opts: ['ali', 'a', 'nego', 'pa'],
    answer: 'nego',
    tip: 'A correction after a negation.',
  },
  {
    mode: 'suprotne',
    q: 'Nisam ništa kupila, ____ sam samo razgledavala.',
    en: 'I did not buy anything; I was only browsing.',
    opts: ['već', 'a', 'ili', 'te'],
    answer: 'već',
    tip: 'već corrects a negation, like nego.',
  },
  {
    mode: 'suprotne',
    q: 'Sestra voli ljeto, ____ ja volim zimu.',
    en: 'My sister likes summer, and I like winter.',
    opts: ['nego', 'već', 'a', 'pa'],
    answer: 'a',
    tip: 'Comparison without conflict: a.',
  },
  {
    mode: 'suprotne',
    q: 'Cijena je bila visoka, ____ smo ga ipak kupili.',
    en: 'The price was high, but we bought it anyway.',
    opts: ['nego', 'ali', 'već', 'ili'],
    answer: 'ali',
    tip: 'Against expectation — and ali can carry the clitics.',
  },
  {
    mode: 'suprotne',
    q: 'To nije popust, ____ obična cijena.',
    en: 'That is not a discount but the regular price.',
    opts: ['a', 'pa', 'nego', 'te'],
    answer: 'nego',
    tip: 'A correction after nije.',
  },
  {
    mode: 'suprotne',
    q: 'Which conjunction means the same as ali but belongs to bookish written style?',
    opts: ['no', 'pa', 'te', 'ili'],
    answer: 'no',
    tip: 'no = ali, in written style.',
  },

  // ── vrste ─────────────────────────────────────────────────────────────────
  {
    mode: 'vrste',
    q: 'Prvo smo ručali ____ smo otišli u kupovinu.',
    en: 'First we had lunch and then we went shopping.',
    opts: ['pa', 'a', 'i', 'ili'],
    answer: 'pa',
    tip: 'What came next — and pa can carry smo; i and a cannot.',
  },
  {
    mode: 'vrste',
    q: 'Možeš platiti odmah ____ možeš platiti na rate.',
    en: 'You can pay now or you can pay in instalments.',
    opts: ['nego', 'ili', 'zato', 'samo'],
    answer: 'ili',
    tip: 'A choice: ili.',
  },
  {
    mode: 'vrste',
    q: 'Cipele su lijepe, ____ su malo uske.',
    en: 'The shoes are nice, only they are a bit tight.',
    opts: ['samo', 'nego', 'ili', 'te'],
    answer: 'samo',
    tip: 'One exception to an otherwise good thing.',
  },
  {
    mode: 'vrste',
    q: 'Popust traje do petka, ____ ću kupiti televizor ovaj tjedan.',
    en: 'The discount lasts until Friday, so I will buy the TV this week.',
    opts: ['zato', 'nego', 'ili', 'a'],
    answer: 'zato',
    tip: 'A conclusion drawn from the first clause.',
  },
  {
    mode: 'vrste',
    q: 'Ugovor je potpisan ____ je projekt odmah počeo.',
    en: 'The contract was signed and the project began straight away.',
    opts: ['te', 'nego', 'ili', 'samo'],
    answer: 'te',
    tip: 'te — "and" in formal writing.',
  },
  {
    mode: 'vrste',
    q: 'Sve je spremno, ____ nemamo kruha.',
    en: 'Everything is ready, only we have no bread.',
    opts: ['nego', 'jedino', 'ili', 'te'],
    answer: 'jedino',
    tip: 'jedino names the one exception, like samo.',
  },
  {
    mode: 'vrste',
    q: 'Trgovina je zatvorena, ____ dođite sutra.',
    en: 'The shop is closed, so come tomorrow.',
    opts: ['stoga', 'nego', 'ili', 'a'],
    answer: 'stoga',
    tip: 'A conclusion: stoga.',
  },
  {
    mode: 'vrste',
    q: '____ ćeš platiti gotovinom ____ ćeš platiti karticom.',
    en: 'Either you will pay in cash or you will pay by card.',
    opts: ['Ili … ili', 'Ni … ni', 'Nego … nego', 'Te … te'],
    answer: 'Ili … ili',
    tip: 'A choice between two: ili … ili.',
  },

  // ── enklitike ─────────────────────────────────────────────────────────────
  {
    mode: 'enklitike',
    q: 'Pitao sam prodavača, a ____.',
    en: 'I asked the shop assistant, and he told me.',
    opts: ['mi je on rekao', 'on mi je rekao', 'je mi on rekao', 'on je mi rekao'],
    answer: 'on mi je rekao',
    tip: 'After a the clitics wait for the next word; dative before je.',
  },
  {
    mode: 'enklitike',
    q: 'Došao je Ivan i ____ ključ.',
    en: 'Ivan came and I gave him the key.',
    opts: ['sam mu dao', 'dao sam mu', 'mu sam dao', 'dao mu sam'],
    answer: 'dao sam mu',
    tip: 'i cannot carry clitics; auxiliary before the dative.',
  },
  {
    mode: 'enklitike',
    q: 'Htjela sam doći, ali ____ razboljela.',
    en: 'I wanted to come, but I fell ill.',
    opts: ['se sam', 'sam se', 'si se', 'smo se'],
    answer: 'sam se',
    tip: 'After ali the clitics may follow at once: auxiliary, then se.',
  },
  {
    mode: 'enklitike',
    q: 'Bili smo umorni pa ____ otišli kući.',
    en: 'We were tired, so we went home.',
    opts: ['smo', 'su', 'sam', 'ste'],
    answer: 'smo',
    tip: 'pa can carry the auxiliary; the subject is mi.',
  },
  {
    mode: 'enklitike',
    q: 'Which sentence is punctuated correctly?',
    opts: [
      'Kupio sam kruh, i platio sam karticom.',
      'Kupio sam kruh i platio sam karticom.',
      'Kupio sam kruh i, platio sam karticom.',
      'Kupio sam, kruh i platio sam karticom.',
    ],
    answer: 'Kupio sam kruh i platio sam karticom.',
    tip: 'No comma before i.',
  },
  {
    mode: 'enklitike',
    q: 'Which sentence is punctuated correctly?',
    opts: [
      'Htio sam doći ali nisam stigao.',
      'Htio sam doći ali, nisam stigao.',
      'Htio sam doći, ali nisam stigao.',
      'Htio sam, doći ali nisam stigao.',
    ],
    answer: 'Htio sam doći, ali nisam stigao.',
    tip: 'A comma goes before ali.',
  },
  {
    mode: 'enklitike',
    q: 'Nazvala sam Marka, a ____ odgovorio.',
    en: 'I phoned Marko, and he did not answer me.',
    opts: ['mi on nije', 'on mi nije', 'mi nije on', 'on nije mi'],
    answer: 'on mi nije',
    tip: 'After a, the first word is on; mi follows it, nije after.',
  },
  {
    mode: 'enklitike',
    q: 'Which conjunction takes NO comma before it?',
    opts: ['ali', 'nego', 'ili', 'zato'],
    answer: 'ili',
    tip: 'No comma before i, pa, te and ili.',
  },
];
