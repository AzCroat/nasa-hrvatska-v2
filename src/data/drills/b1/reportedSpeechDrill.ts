// src/data/drills/b1/reportedSpeechDrill.ts
//
// B1 REPORTED SPEECH — the drill for the `reported-speech` lesson (B1 position 45).
//
// Three modes, nine items each:
//   vrijeme — the tense does not shift: Rekao je da dolazi
//   osoba   — what does change: the person, the possessive, the short pronoun, and the
//             time word when the day is no longer the same
//   pitanje — reporting a question (li, or the question word) and a request (da + the
//             present)
//
// Book pages (printed numbers):
//   Razgovarajte s nama! A2–B1 textbook — the book has no rule for reported speech; the
//   drill is built from the reports it prints: 31 ("Samo ne znam hoće li Josip moći ići",
//   "Malo se bojim doći u hladnu kuću"), 33 (Josip's e-mail), 53 ("Čuli su da je Istra
//   vrlo zanimljiva"), 55 ("Pitali smo svoje studente što misle o tom problemu"), 90
//   ("pitao je možemo li zajedno popiti kavu", "Vozila sam se vlakom
//   iz Šibenika"), 96 ("Rekla sam ti da nemam vremena večeras", "nikad joj nije rekao da
//   je simpatična", "nije ni rekao zašto ne može doći", "Volio bih te bolje upoznati",
//   "Nazovi me sutra"), 104 ("Anita kaže da je to samo zato što više uči", "Kažu da
//   radi kvalitetnije"), 108 ("Zašto Davor misli da će lako naći nov posao?"), 114
//   ("Tvoja tajnica mi je rekla da si zauzeta"), 127 ("„Cijeli život te čekam!“ Rekao je
//   da se cijeli život sjećao Anne"), 128 and 132 ("Boris je rekao da ne može živjeti
//   bez nje"), 149 ("u rodilištu su joj rekli da je to dosadno ime", the doctor who names
//   the baby Chiara, "Sviđa mi se.").
//
// Where the book and the lesson differ:
//   - The book never states the rule; "the tense does not shift", the change of person,
//     the time words and the reported request are the lesson's. The book's own reports
//     agree with the lesson (Rekla sam ti da nemam vremena; rekao je da ne može živjeti
//     bez nje; pitao je možemo li…).
//   - The time words (sutra → sljedeći dan, danas → tog dana) are in the lesson only.
//     Sutradan and idući dan are standard too, and so is taj dan, so those are never
//     offered as wrong answers; and sutra stays sutra when the report is made on the same
//     day, so both items say that time has passed.
//   - A reported yes/no question takes li in the book and in the lesson. The form with
//     "da li" is not standard Croatian and is not offered, even as a wrong answer.
//   - A backshifted report (Rekao je da je radio) is a correct sentence that reports
//     different words ("Radio sam"). Where it is a wrong option, the lead or the question
//     gives the speaker's exact words, and the tip says what the other sentence reports.
//   - Je and ju are both accusatives of ona; only je is used, and ju is never offered.
//   - Grammar-order fence: this is the last grammar lesson of B1, so the whole B1 grammar
//     is open. No verbal adverbs and nothing from the B2 lesson on reported speech.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const REPORTED_SPEECH_MODE_LABELS: Record<string, string> = {
  vrijeme: '⏱️ Vrijeme ostaje',
  osoba: '👤 Osoba se mijenja',
  pitanje: '❓ Pitanje i molba',
};

export const REPORTED_SPEECH_DRILL_DATA: ModeDrillItem[] = [
  // ── vrijeme ───────────────────────────────────────────────────────────────
  {
    mode: 'vrijeme',
    lead: 'Boris: „Ne mogu živjeti bez nje.“',
    q: 'Boris je rekao da ____ živjeti bez nje.',
    opts: ['ne može', 'nije mogao', 'ne mogu', 'ne bi mogao'],
    answer: 'ne može',
    tip: 'Croatian keeps the tense the speaker used: the present stays the present, and only the person changes, mogu → može. Nije mogao is the English backshift and would report "Nisam mogao". Ne mogu keeps the first person, and ne bi mogao is the conditional.',
  },
  {
    mode: 'vrijeme',
    lead: 'Klara: „Nemam vremena večeras.“',
    q: 'Klara je rekla da ____ vremena večeras.',
    opts: ['nema', 'nije imala', 'nemam', 'neće imati'],
    answer: 'nema',
    tip: 'She used the present, so the report keeps the present: da nema. Nije imala shifts the tense the English way. Nemam would mean the person reporting has no time, and neće imati is a future she did not use.',
  },
  {
    mode: 'vrijeme',
    lead: 'Josip: „Doći ću u subotu.“',
    q: 'Josip je napisao da ____ u subotu.',
    opts: ['će doći', 'je došao', 'bi došao', 'dolaziti'],
    answer: 'će doći',
    tip: 'A future stays a future: da će doći. Je došao is the past. Bi došao copies English "would come"; Croatian does not shift. Dolaziti is an infinitive with no helping verb.',
  },
  {
    mode: 'vrijeme',
    lead: 'Katarina: „Vozila sam se vlakom iz Šibenika.“',
    q: 'Katarina je ispričala da ____ vlakom iz Šibenika.',
    opts: ['se vozila', 'se vozi', 'će se voziti', 'sam se vozila'],
    answer: 'se vozila',
    tip: 'She used the past, so the report keeps the past, now in the third person: da se vozila. Se vozi is the present and će se voziti the future, tenses she did not use. Sam se vozila keeps her first person.',
  },
  {
    mode: 'vrijeme',
    lead: 'Tajnica: „Šefica je na sastanku.“',
    q: 'Tajnica mi je rekla da ____ na sastanku.',
    opts: ['je šefica', 'je šefica bila', 'će šefica biti', 'šefica biti'],
    answer: 'je šefica',
    tip: 'The present stays: da je šefica na sastanku. Je šefica bila would report "Šefica je bila na sastanku". Će šefica biti is a future she did not use, and šefica biti has no verb in a person.',
  },
  {
    mode: 'vrijeme',
    q: 'Što se u hrvatskom NE mijenja kad prenosimo tuđe riječi?',
    en: 'What does NOT change in Croatian when we report what someone said?',
    opts: ['the tense', 'the person of the verb', 'the possessives', 'the pronouns'],
    answer: 'the tense',
    tip: 'English backshifts ("I am coming" → "he said he was coming"); Croatian keeps the tense: Rekao je da dolazi. The person, the possessives and the pronouns do move to the point of view of the one who reports.',
  },
  {
    mode: 'vrijeme',
    lead: 'Rekao je da je živio u Rijeci.',
    q: 'Što je on točno rekao?',
    opts: [
      '„Živio sam u Rijeci.“',
      '„Živim u Rijeci.“',
      '„Živjet ću u Rijeci.“',
      '„Živi u Rijeci!“',
    ],
    answer: '„Živio sam u Rijeci.“',
    tip: 'The tense in the report is the tense he used: da je živio reports a past, "Živio sam". If he had said "Živim u Rijeci", the report would be da živi. A future would be da će živjeti, and an order would be da živim.',
  },
  {
    mode: 'vrijeme',
    q: 'Kako se kaže „He said he was working“ (njegove riječi: „Radim.“)?',
    opts: ['Rekao je da radi.', 'Rekao je da je radio.', 'Rekao je da radim.', 'Rekao je radi.'],
    answer: 'Rekao je da radi.',
    tip: 'His word was the present radim, so the report is da radi. Da je radio copies the English "was" and would report "Radio sam". Da radim keeps the first person, and without da the two halves are not joined.',
  },
  {
    mode: 'vrijeme',
    lead: 'Davor: „Lako ću naći nov posao.“',
    q: 'Davor misli da ____ nov posao.',
    opts: ['će lako naći', 'je lako našao', 'bi lako našao', 'ću lako naći'],
    answer: 'će lako naći',
    tip: 'The future stays, and ću becomes će because Davor is now "he". Je lako našao is a past he did not use. Bi lako našao copies English "would find", and ću lako naći would mean the person reporting finds the job.',
  },

  // ── osoba ─────────────────────────────────────────────────────────────────
  {
    mode: 'osoba',
    lead: 'Marin: „Volim Klaru.“',
    q: 'Marin je rekao da ____ Klaru.',
    opts: ['voli', 'volim', 'voliš', 'vole'],
    answer: 'voli',
    tip: 'The speaker becomes "he" in the report, so the verb moves to the third person: da voli. Volim would mean the person reporting loves Klara. Voliš is the ti form, and vole is plural.',
  },
  {
    mode: 'osoba',
    lead: 'Tanja: „Moja soba je neuredna.“',
    q: 'Tanja kaže da je ____ soba neuredna.',
    opts: ['njezina', 'moja', 'tvoja', 'njegova'],
    answer: 'njezina',
    tip: 'Possessives move to the point of view of the one who reports: her "moja" becomes njezina. Moja would be the room of the person reporting, tvoja the room of the listener, and njegova belongs to a man.',
  },
  {
    mode: 'osoba',
    lead: 'Marin (Klari): „Volio bih te bolje upoznati.“',
    q: 'Marin kaže Klari da bi ____ volio bolje upoznati.',
    opts: ['je', 'te', 'me', 'ga'],
    answer: 'je',
    tip: 'Te was Klara, and in the report Klara is "her": je. Te would now mean the person you are telling this to. Me would be the person reporting, and ga is "him".',
  },
  {
    mode: 'osoba',
    lead: 'Alen (meni): „Nazvat ću te sutra.“',
    q: 'Alen mi je rekao da će ____ nazvati sutra.',
    opts: ['me', 'te', 'ga', 'se'],
    answer: 'me',
    tip: 'He was talking to me, so his te becomes me in my report. Te would point at the person I am talking to now. Ga is "him", and se would mean Alen calls himself.',
  },
  {
    mode: 'osoba',
    lead: 'Tom i Sandra: „Večeras smo sami.“',
    q: 'Tom i Sandra kažu da ____ večeras sami.',
    opts: ['su', 'smo', 'ste', 'je'],
    answer: 'su',
    tip: 'Their "we" becomes "they" in the report: smo → su. Smo would include the person reporting. Ste is the vi form, and je is singular.',
  },
  {
    mode: 'osoba',
    lead: 'Ana je rekla da dolazim.',
    q: 'Tko dolazi prema ovoj rečenici?',
    opts: ['I am, the one reporting.', 'Ana is.', 'You are.', 'Nobody is.'],
    answer: 'I am, the one reporting.',
    tip: 'Dolazim is the first person, so it points at the one who is speaking now. To report Ana talking about herself the verb moves to the third person: Ana je rekla da dolazi. "You" would be da dolaziš.',
  },
  {
    mode: 'osoba',
    lead: 'U ponedjeljak je rekao: „Dolazim sutra.“',
    q: 'Tjedan dana poslije prenosimo: Rekao je da dolazi ____.',
    opts: ['sljedeći dan', 'sutra', 'jučer', 'danas'],
    answer: 'sljedeći dan',
    tip: 'A week later his "sutra" is no longer tomorrow, so the time word moves: sljedeći dan. Sutra would now mean the day after the report. Jučer and danas point at days he did not mean.',
  },
  {
    mode: 'osoba',
    lead: 'Prije mjesec dana rekla je: „Danas nemam vremena.“',
    q: 'Sada prenosimo: Rekla je da ____ nema vremena.',
    opts: ['tog dana', 'danas', 'sutra', 'sada'],
    answer: 'tog dana',
    tip: 'A month later her "danas" is not today anymore: tog dana. Danas and sada would mean the day of the report, and sutra a day she did not mention. The tense stays the present: nema.',
  },
  {
    mode: 'osoba',
    lead: 'Florance: „Sviđa mi se moje ime.“',
    q: 'Florance kaže da ____ sviđa njezino ime.',
    opts: ['joj se', 'mi se', 'ti se', 'im se'],
    answer: 'joj se',
    tip: 'Her mi becomes joj, "to her", just as moje became njezino. Mi se would mean the person reporting likes the name. Ti se is "you like", and im se is "they like".',
  },

  // ── pitanje ───────────────────────────────────────────────────────────────
  {
    mode: 'pitanje',
    lead: 'Muškarac (meni): „Možete li popiti kavu sa mnom?“',
    q: 'Pitao me ____ popiti kavu s njim.',
    opts: ['mogu li', 'da mogu', 'mogu', 'ako mogu'],
    answer: 'mogu li',
    tip: 'A yes/no question keeps its li in the report, and the verb moves to the person of the one who was asked: Pitao me mogu li. Da mogu would report a statement, not a question. Mogu alone has nothing joining the halves, and ako mogu copies English "if"; ako is only for conditions.',
  },
  {
    mode: 'pitanje',
    lead: 'Profesori: „Što mislite o tom problemu?“',
    q: 'Profesori su pitali studente ____ o tom problemu.',
    opts: ['što misle', 'misle li što', 'da što misle', 'što li misle'],
    answer: 'što misle',
    tip: 'A question word simply stays where it is, followed by an ordinary clause, and the verb moves to the third person: što misle. Li is for questions with no question word, so misle li što and što li misle are both wrong, and da does not go before a question word.',
  },
  {
    mode: 'pitanje',
    lead: 'Mama: „Pospremi sobu!“',
    q: 'Mama mi je rekla ____ sobu.',
    opts: ['da pospremim', 'pospremi', 'da pospremi', 'da pospremiti'],
    answer: 'da pospremim',
    tip: 'An order becomes da + the present, in the person of the one who has to do it: da pospremim. The imperative pospremi cannot be kept. Da pospremi would mean somebody else tidies, and da is never followed by an infinitive.',
  },
  {
    mode: 'pitanje',
    lead: 'Liječnik: „Nemojte pušiti.“',
    q: 'Liječnik mi je rekao ____.',
    opts: ['da ne pušim', 'nemojte pušiti', 'da nemojte pušiti', 'da ne pušiti'],
    answer: 'da ne pušim',
    tip: 'A negative order becomes da + ne + the present: da ne pušim. Nemojte pušiti keeps the imperative, which a report cannot do. Da nemojte mixes the two, and da is never followed by an infinitive.',
  },
  {
    mode: 'pitanje',
    lead: 'Klara (Marinu): „Nazovi me sutra.“',
    q: 'Klara moli Marina da ____ nazove sutra.',
    opts: ['je', 'me', 'ga', 'te'],
    answer: 'je',
    tip: 'Me was Klara, and in the report Klara is "her": da je nazove. Me would be the person reporting. Ga is "him", and te is the person you are telling this to.',
  },
  {
    mode: 'pitanje',
    lead: 'Martina (Marinu i Tanji): „Jeste li zapalili vatru?“',
    q: 'Martina je pitala Marina i Tanju ____ zapalili vatru.',
    opts: ['jesu li', 'da su', 'ako su', 'li su'],
    answer: 'jesu li',
    tip: 'The question keeps its li, and jeste becomes jesu because Marin and Tanja are now "they": jesu li zapalili. Da su would report a statement. Ako su copies English "if" and is only for conditions, and in li su the word li stands first, but it has to follow the verb.',
  },
  {
    mode: 'pitanje',
    lead: 'Alen nije rekao zašto ne može doći.',
    q: 'Koje je pitanje ostalo bez odgovora?',
    opts: ['„Zašto ne možeš doći?“', '„Možeš li doći?“', '„Kada dolaziš?“', '„Tko dolazi?“'],
    answer: '„Zašto ne možeš doći?“',
    tip: 'The reported clause keeps the question word and the tense of the question: zašto ne može ← „Zašto ne možeš?“. A yes/no question would be reported with li (može li doći), "when" with kada and "who" with tko.',
  },
  {
    mode: 'pitanje',
    q: 'Kako se kaže „She asked me where I work“?',
    opts: [
      'Pitala me gdje radim.',
      'Pitala me gdje li radim.',
      'Pitala me da gdje radim.',
      'Pitala me gdje raditi.',
    ],
    answer: 'Pitala me gdje radim.',
    tip: 'The question word is followed by an ordinary clause in the tense of the question: gdje radim. Li is not added after a question word, da does not go before one, and raditi is an infinitive with no person.',
  },
  {
    mode: 'pitanje',
    lead: 'Liječnik (roditeljima): „Dajte joj ime Chiara!“',
    q: 'Liječnik je predložio roditeljima da joj ____ ime Chiara.',
    opts: ['daju', 'dajte', 'dati', 'dali'],
    answer: 'daju',
    tip: 'An order to several people becomes da + the present in the third person plural: da joj daju. Dajte is the imperative, which a report cannot keep. Dati is an infinitive, and dali is a participle with no helping verb.',
  },
];
