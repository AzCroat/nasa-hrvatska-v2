// src/data/drills/c1/commaDependentClausesDrill.ts
//
// C1 THE COMMA IN DEPENDENT COMPOUND SENTENCES — the drill for the
// `comma-dependent-clauses` lesson (C1 position 18), by Hrvatski pravopis (IHJJ).
//
// Three modes:
//   red       — normal order (no comma) against inverted order (comma after the clause)
//   umetnuta  — an inserted clause, closed by commas on both sides
//   odnosna   — non-restrictive relative clauses take commas; a restrictive clause
//               picks out which one
//
// Older practice put a comma before every koji. Because guides differ there, no item
// marks a comma before a RESTRICTIVE clause as the error to spot; restrictive items
// ask what the sentence means instead. Concessive iako after its main clause is
// punctuated both ways in practice and is not drilled.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const COMMA_DEPENDENT_CLAUSES_MODE_LABELS: Record<string, string> = {
  red: '↔️ Red rečenica',
  umetnuta: '🪟 Umetnuta rečenica',
  odnosna: '🔗 Odnosna rečenica',
};

export const COMMA_DEPENDENT_CLAUSES_DRILL_DATA: ModeDrillItem[] = [
  // ── red ───────────────────────────────────────────────────────────────────
  {
    mode: 'red',
    q: 'Which sentence is punctuated correctly?',
    en: 'I think that the shop is closed today.',
    opts: [
      'Mislim, da je trgovina danas zatvorena.',
      'Mislim da je trgovina danas zatvorena.',
      'Mislim da je, trgovina danas zatvorena.',
      'Mislim da, je trgovina danas zatvorena.',
    ],
    answer: 'Mislim da je trgovina danas zatvorena.',
    tip: 'Main clause first: no comma before da.',
  },
  {
    mode: 'red',
    q: 'Which sentence is punctuated correctly?',
    en: 'When you get to the hotel, send me a message.',
    opts: [
      'Kad stigneš u hotel pošalji mi poruku.',
      'Kad, stigneš u hotel pošalji mi poruku.',
      'Kad stigneš u hotel, pošalji mi poruku.',
      'Kad stigneš, u hotel pošalji mi poruku.',
    ],
    answer: 'Kad stigneš u hotel, pošalji mi poruku.',
    tip: 'The dependent clause comes first: a comma where it ends.',
  },
  {
    mode: 'red',
    q: 'Which sentence is punctuated correctly?',
    en: 'Send me a message when you get to the hotel.',
    opts: [
      'Pošalji mi poruku kad stigneš u hotel.',
      'Pošalji mi poruku, kad stigneš u hotel.',
      'Pošalji mi, poruku kad stigneš u hotel.',
      'Pošalji mi poruku kad, stigneš u hotel.',
    ],
    answer: 'Pošalji mi poruku kad stigneš u hotel.',
    tip: 'Main clause first: no comma.',
  },
  {
    mode: 'red',
    q: 'Which sentence is punctuated correctly?',
    en: 'If you need help, call me.',
    opts: [
      'Ako trebaš pomoć nazovi me.',
      'Ako, trebaš pomoć nazovi me.',
      'Ako trebaš, pomoć nazovi me.',
      'Ako trebaš pomoć, nazovi me.',
    ],
    answer: 'Ako trebaš pomoć, nazovi me.',
    tip: 'Inverted order: a comma closes the ako clause.',
  },
  {
    mode: 'red',
    q: 'Which sentence is punctuated correctly?',
    en: 'I do not know whether he will come.',
    opts: [
      'Ne znam hoće li doći.',
      'Ne znam, hoće li doći.',
      'Ne znam hoće, li doći.',
      'Ne, znam hoće li doći.',
    ],
    answer: 'Ne znam hoće li doći.',
    tip: 'An indirect question after its main clause: no comma.',
  },
  {
    mode: 'red',
    q: 'Which sentence is punctuated correctly?',
    en: 'Whoever finishes first may leave.',
    opts: [
      'Tko završi prvi može ići.',
      'Tko završi prvi, može ići.',
      'Tko, završi prvi može ići.',
      'Tko završi, prvi može ići.',
    ],
    answer: 'Tko završi prvi, može ići.',
    tip: 'The tko clause comes first, so a comma closes it.',
  },
  {
    mode: 'red',
    q: 'Which sentence is punctuated correctly?',
    en: 'She asked me where I had learned to cook.',
    opts: [
      'Pitala me, gdje sam naučio kuhati.',
      'Pitala me gdje, sam naučio kuhati.',
      'Pitala me gdje sam naučio kuhati.',
      'Pitala, me gdje sam naučio kuhati.',
    ],
    answer: 'Pitala me gdje sam naučio kuhati.',
    tip: 'Normal order: no comma before gdje.',
  },
  {
    mode: 'red',
    q: 'Which sentence is punctuated correctly?',
    en: 'As soon as the rain stops, we will set off.',
    opts: [
      'Čim kiša prestane krenut ćemo.',
      'Čim kiša prestane, krenut ćemo.',
      'Čim, kiša prestane krenut ćemo.',
      'Čim kiša, prestane krenut ćemo.',
    ],
    answer: 'Čim kiša prestane, krenut ćemo.',
    tip: 'Inverted order: a comma after the čim clause.',
  },
  {
    mode: 'red',
    q: 'Which sentence is punctuated correctly?',
    en: 'What you promised, you must do.',
    opts: [
      'Što si obećao, to moraš i napraviti.',
      'Što si obećao to moraš i napraviti.',
      'Što si, obećao to moraš i napraviti.',
      'Što, si obećao to moraš i napraviti.',
    ],
    answer: 'Što si obećao, to moraš i napraviti.',
    tip: 'The što clause comes first: a comma closes it.',
  },

  // ── umetnuta ──────────────────────────────────────────────────────────────
  {
    mode: 'umetnuta',
    q: 'Which sentence is punctuated correctly?',
    en: 'When he heard the news, my brother called our parents at once.',
    opts: [
      'Brat je, kad je čuo vijest, odmah nazvao roditelje.',
      'Brat je kad je čuo vijest, odmah nazvao roditelje.',
      'Brat je, kad je čuo vijest odmah nazvao roditelje.',
      'Brat je kad je čuo vijest odmah, nazvao roditelje.',
    ],
    answer: 'Brat je, kad je čuo vijest, odmah nazvao roditelje.',
    tip: 'An inserted clause takes a comma on both sides.',
  },
  {
    mode: 'umetnuta',
    q: 'Which sentence is punctuated correctly?',
    en: 'If the weather is nice, we will have lunch outside.',
    opts: [
      'Mi ćemo ako bude lijepo vrijeme, ručati vani.',
      'Mi ćemo, ako bude lijepo vrijeme ručati vani.',
      'Mi ćemo, ako bude lijepo vrijeme, ručati vani.',
      'Mi ćemo ako bude, lijepo vrijeme ručati vani.',
    ],
    answer: 'Mi ćemo, ako bude lijepo vrijeme, ručati vani.',
    tip: 'Close the inserted ako clause on both sides.',
  },
  {
    mode: 'umetnuta',
    q: 'Which sentence is punctuated correctly?',
    en: 'When we met, she told me that she was moving to Osijek.',
    opts: [
      'Rekla mi je kad smo se sreli, da se seli u Osijek.',
      'Rekla mi je, kad smo se sreli, da se seli u Osijek.',
      'Rekla mi je, kad smo se sreli da se seli u Osijek.',
      'Rekla mi je kad smo se sreli da, se seli u Osijek.',
    ],
    answer: 'Rekla mi je, kad smo se sreli, da se seli u Osijek.',
    tip: 'The kad clause is inserted inside the main clause: two commas.',
  },
  {
    mode: 'umetnuta',
    q: 'Which sentence is punctuated correctly?',
    en: 'As soon as she came in, the teacher opened the windows.',
    opts: [
      'Učiteljica je, čim je ušla, otvorila prozore.',
      'Učiteljica je čim je ušla, otvorila prozore.',
      'Učiteljica, je čim je ušla otvorila prozore.',
      'Učiteljica je, čim je ušla otvorila prozore.',
    ],
    answer: 'Učiteljica je, čim je ušla, otvorila prozore.',
    tip: 'Two commas round the inserted čim clause.',
  },
  {
    mode: 'umetnuta',
    q: 'Which sentence is punctuated correctly?',
    en: 'While we were waiting, the director signed all the contracts.',
    opts: [
      'Direktor je dok smo čekali, potpisao sve ugovore.',
      'Direktor je, dok smo čekali potpisao sve ugovore.',
      'Direktor je dok smo, čekali potpisao sve ugovore.',
      'Direktor je, dok smo čekali, potpisao sve ugovore.',
    ],
    answer: 'Direktor je, dok smo čekali, potpisao sve ugovore.',
    tip: 'The inserted dok clause is closed on both sides.',
  },
  {
    mode: 'umetnuta',
    q: 'Where is the missing comma? "Marko je, kad je vidio cijenu odustao od kupnje."',
    en: 'When he saw the price, Marko gave up the purchase.',
    opts: ['after Marko', 'after cijenu', 'after odustao', 'after kupnje'],
    answer: 'after cijenu',
    tip: 'The inserted clause ends at cijenu; close it there.',
  },
  {
    mode: 'umetnuta',
    q: 'Where is the missing comma? "Baka je ako se dobro sjećam, rođena u Imotskom."',
    en: 'If I remember correctly, Grandma was born in Imotski.',
    opts: ['after rođena', 'after sjećam', 'after Baka je', 'after dobro'],
    answer: 'after Baka je',
    tip: 'The inserted ako clause needs a comma at its start as well as its end.',
  },

  // ── odnosna ───────────────────────────────────────────────────────────────
  {
    mode: 'odnosna',
    q: 'Which sentence is punctuated correctly? (I have one mother.)',
    en: 'My mother, who is a nurse, works nights.',
    opts: [
      'Moja majka koja je medicinska sestra radi noću.',
      'Moja majka, koja je medicinska sestra radi noću.',
      'Moja majka koja je medicinska sestra, radi noću.',
      'Moja majka, koja je medicinska sestra, radi noću.',
    ],
    answer: 'Moja majka, koja je medicinska sestra, radi noću.',
    tip: 'Non-restrictive: the clause adds information, so it is enclosed in commas.',
  },
  {
    mode: 'odnosna',
    q: 'Which sentence is punctuated correctly? (Zagreb has one cathedral.)',
    en: 'The Zagreb cathedral, which was built over centuries, is being restored.',
    opts: [
      'Zagrebačka katedrala, koja se gradila stoljećima, obnavlja se.',
      'Zagrebačka katedrala koja se gradila stoljećima, obnavlja se.',
      'Zagrebačka katedrala, koja se gradila stoljećima obnavlja se.',
      'Zagrebačka, katedrala koja se gradila stoljećima obnavlja se.',
    ],
    answer: 'Zagrebačka katedrala, koja se gradila stoljećima, obnavlja se.',
    tip: 'There is only one such cathedral: non-restrictive, two commas.',
  },
  {
    mode: 'odnosna',
    q: 'Which sentence is punctuated correctly? (Sanja has one husband.)',
    en: 'Sanja’s husband, who lives in Vienna, is coming to see us tomorrow.',
    opts: [
      'Sutra nam dolazi Sanjin muž koji, živi u Beču.',
      'Sutra nam dolazi Sanjin muž, koji živi u Beču.',
      'Sutra nam dolazi, Sanjin muž koji živi u Beču.',
      'Sutra nam, dolazi Sanjin muž koji živi u Beču.',
    ],
    answer: 'Sutra nam dolazi Sanjin muž, koji živi u Beču.',
    tip: 'A non-restrictive clause at the end still takes its comma.',
  },
  {
    mode: 'odnosna',
    q: 'What does "Studenti koji su predali rad dobit će ocjenu." say?',
    en: 'The students who handed in the paper will get a mark.',
    opts: [
      'Every student handed in the paper.',
      'Only the students who handed in the paper will get a mark.',
      'No student will get a mark.',
      'The students must hand in the paper again.',
    ],
    answer: 'Only the students who handed in the paper will get a mark.',
    tip: 'No commas: the clause is restrictive and picks out those students.',
  },
  {
    mode: 'odnosna',
    q: 'What does "Studenti, koji su predali rad, dobit će ocjenu." say?',
    en: 'The students, who handed in the paper, will get a mark.',
    opts: [
      'Only some students handed in the paper.',
      'Nobody handed in the paper.',
      'All the students handed in the paper and will get a mark.',
      'The students will hand in the paper later.',
    ],
    answer: 'All the students handed in the paper and will get a mark.',
    tip: 'With commas the clause is non-restrictive: it describes all of them.',
  },
  {
    mode: 'odnosna',
    q: 'Which sentence is punctuated correctly? (Split has one Diocletian’s Palace.)',
    en: 'Diocletian’s Palace, which is over 1,700 years old, is still lived in.',
    opts: [
      'Dioklecijanova palača koja je stara više od 1700 godina još je nastanjena.',
      'Dioklecijanova palača, koja je stara više od 1700 godina još je nastanjena.',
      'Dioklecijanova palača, koja je stara više od 1700 godina, još je nastanjena.',
      'Dioklecijanova, palača koja je stara više od 1700 godina još je nastanjena.',
    ],
    answer: 'Dioklecijanova palača, koja je stara više od 1700 godina, još je nastanjena.',
    tip: 'Non-restrictive: commas on both sides.',
  },
  {
    mode: 'odnosna',
    q: 'What does "Putnici koji nemaju kartu moraju izaći." say?',
    en: 'The passengers who have no ticket must get off.',
    opts: [
      'Only the passengers without a ticket must get off.',
      'All the passengers have no ticket.',
      'Nobody needs a ticket.',
      'The passengers must buy a ticket outside.',
    ],
    answer: 'Only the passengers without a ticket must get off.',
    tip: 'Without commas the clause is restrictive.',
  },
  {
    mode: 'odnosna',
    q: 'Which sentence is punctuated correctly? (Ivan has one grandfather.)',
    en: 'Ivan’s grandfather, whose house is by the sea, rents out rooms in summer.',
    opts: [
      'Ivanov djed, čija je kuća uz more, ljeti iznajmljuje sobe.',
      'Ivanov djed čija je kuća uz more, ljeti iznajmljuje sobe.',
      'Ivanov djed, čija je kuća uz more ljeti iznajmljuje sobe.',
      'Ivanov, djed čija je kuća uz more ljeti iznajmljuje sobe.',
    ],
    answer: 'Ivanov djed, čija je kuća uz more, ljeti iznajmljuje sobe.',
    tip: 'A non-restrictive čiji clause is enclosed in commas.',
  },
];
