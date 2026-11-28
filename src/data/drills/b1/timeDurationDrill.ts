// src/data/drills/b1/timeDurationDrill.ts
//
// B1 TIME AND DURATION — the drill for the `time-duration` lesson (B1 position 26).
//
// Three modes, nine items each:
//   prijeza — placing an event: prije (ago), za (in), nakon, tijekom, od… do
//   koliko  — how long: the bare accusative, the present for something still going on,
//             and već + a duration
//   jos     — još, već, tek, uskoro, više ne, još ne
//
// Book pages (printed numbers):
//   Razgovarajte s nama! A2–B1 textbook — 18 ("Došla sam u veljači, a bit ću ovdje do…"),
//   31 ("Nisam već sto godina nigdje bila!", "Danijela je još mala"), 47 and 130 ("Zar je
//   već toliko sati?!"), 79 ("tijekom vožnje"), 96 ("Zvao si me prije pola sata…, a prije
//   dva sata…", "Alen joj se sviđa već dugo"), 114 ("Zaista već dugo nismo bili sami",
//   "Naručila sam jelo iz restorana"), 116 ("Prije petnaestak godina…", "od ponedjeljka
//   do petka", "od 9 do 17 sati", "Godišnji odmor traje 6 tjedana"), 118 ("Već deset
//   godina radim kao zubar"), 127 ("bili su razdvojeni 60 godina", "tri dana nakon
//   vjenčanja", "Cijeli život te čekam!"), 130 (the page "Vrijeme leti": "za tri (četiri,
//   pet…) dana", "prije tri (četiri, pet…) dana", "cijeli dan", "Još samo malo"), 133
//   ("svirao sam violinu, četiri godine"), 19 ("Akiko nikada više ne želi raditi").
//
// Where the book and the lesson differ:
//   - The book has no rule box for any of this. It lists prije / za on its vocabulary
//     page 130 and uses the rest in its texts. The rules (prije + ago, za + in, the bare
//     accusative for duration, the present for English "have been") are the lesson's.
//   - Tek and uskoro are in the lesson but not in the book's texts; one item each.
//   - Prije godinu dana and prije godine dana are both standard, so the case after
//     prije with a measure phrase is not tested.
//   - Za + a duration is correct with a svršeni verb (Pročitao sam knjigu za dva dana,
//     the time something took). The lesson does not teach it, so za is offered as a wrong
//     answer only after a nesvršeni verb (čekati, svirati), where it cannot stand.
//   - Several wrong options are real phrases with another meaning (prije četiri godine,
//     "four years ago"); the English line fixes the meaning asked for, and the tip says
//     what the other phrase would mean.
//   - Grammar-order fence: the genitive after od, do, nakon and tijekom was taught just
//     before and is used. No relative clauses, no reported speech.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const TIME_DURATION_MODE_LABELS: Record<string, string> = {
  prijeza: '⏪ Prije, za, od–do',
  koliko: '⏱️ Koliko dugo',
  jos: '🔁 Još, već, više ne',
};

export const TIME_DURATION_DRILL_DATA: ModeDrillItem[] = [
  // ── prijeza ───────────────────────────────────────────────────────────────
  {
    mode: 'prijeza',
    q: 'Zvao si me ____ pola sata.',
    en: 'You called me half an hour ago.',
    opts: ['prije', 'za', 'od', 'tijekom'],
    answer: 'prije',
    tip: 'Prije + a measure of time means "ago": prije pola sata. Za looks forward ("in half an hour") and does not go with the past zvao si. Od means "since" a point in time, and tijekom means "during".',
  },
  {
    mode: 'prijeza',
    q: 'Vlak polazi ____ deset minuta. Požurimo!',
    en: 'The train leaves in ten minutes. Let us hurry!',
    opts: ['za', 'prije', 'od', 'već'],
    answer: 'za',
    tip: 'Za + the accusative looks forward: za deset minuta, in ten minutes. Prije would mean "ten minutes ago". Od means "since", and već means "already".',
  },
  {
    mode: 'prijeza',
    q: 'Radno vrijeme je ____ 9 ____ 17 sati.',
    en: 'Working hours are from 9 to 5.',
    opts: ['od … do', 'za … prije', 'prije … za', 'do … od'],
    answer: 'od … do',
    tip: 'A span has a start and an end: od (from) … do (until), both with the genitive. Do … od turns the pair around. Za and prije place one event before or after now; they do not mark a span.',
  },
  {
    mode: 'prijeza',
    q: 'Posljednji put vidjeli su se tri dana ____ vjenčanja.',
    en: 'They last saw each other three days after the wedding.',
    opts: ['nakon', 'za', 'već', 'još'],
    answer: 'nakon',
    tip: 'Nakon + the genitive means "after": nakon vjenčanja. Za takes the accusative and means "in" a length of time. Već ("already") and još ("still") are not prepositions and cannot take a noun.',
  },
  {
    mode: 'prijeza',
    q: 'Ne smijemo razgovarati mobitelom ____ vožnje.',
    en: 'We must not talk on the phone while driving.',
    opts: ['tijekom', 'dok', 'kad', 'već'],
    answer: 'tijekom',
    tip: 'Tijekom + the genitive means "during": tijekom vožnje. Dok and kad are conjunctions and need a clause with a verb (dok vozimo). Već means "already".',
  },
  {
    mode: 'prijeza',
    q: 'Bit ću u Zagrebu ____ petka.',
    en: 'I will be in Zagreb until Friday.',
    opts: ['do', 'za', 'već', 'tijekom'],
    answer: 'do',
    tip: 'Do + the genitive marks the end point: do petka. Za takes the accusative and counts a length of time (za tri dana). Već means "already", and tijekom petka would be "during Friday".',
  },
  {
    mode: 'prijeza',
    q: 'Što znači „za tri dana“?',
    opts: ['in three days from now', 'three days ago', 'for three days', 'every three days'],
    answer: 'in three days from now',
    tip: 'Za + the accusative looks forward from now. "Three days ago" is prije tri dana, "for three days" is the bare accusative tri dana, and "every three days" is svaka tri dana.',
  },
  {
    mode: 'prijeza',
    q: 'Koja rečenica gleda u budućnost?',
    en: 'Which sentence looks into the future?',
    opts: [
      'Vraćam se za tjedan dana.',
      'Vratio sam se prije tjedan dana.',
      'Bio sam ondje tjedan dana.',
      'Već sam tjedan dana ovdje.',
    ],
    answer: 'Vraćam se za tjedan dana.',
    tip: 'Za tjedan dana is "in a week", ahead of now. Prije tjedan dana is "a week ago". Tjedan dana with no preposition is a duration, and with već and the present it is a week that has lasted up to now.',
  },
  {
    mode: 'prijeza',
    q: 'Od ____ učim hrvatski na Croaticumu.',
    en: 'I have been studying Croatian at Croaticum since February.',
    opts: ['veljače', 'veljača', 'veljaču', 'veljači'],
    answer: 'veljače',
    tip: 'Od ("since") takes the genitive: od veljače. Veljača is the nominative and veljaču the accusative. Veljači is the locative, which goes with u (u veljači, in February).',
  },

  // ── koliko ────────────────────────────────────────────────────────────────
  {
    mode: 'koliko',
    q: 'Boris i Anna bili su razdvojeni ____.',
    en: 'Boris and Anna were apart for 60 years.',
    opts: ['60 godina', 'za 60 godina', 'prije 60 godina', 'u 60 godina'],
    answer: '60 godina',
    tip: 'Duration is the bare measure, with no preposition: 60 godina. English needs "for"; Croatian needs nothing. Za 60 godina would mean "in 60 years", prije 60 godina "60 years ago", and u does not mark a duration.',
  },
  {
    mode: 'koliko',
    q: 'Već deset godina ____ kao zubar i jako sam zadovoljan ovim poslom.',
    en: 'I have been working as a dentist for ten years and I am very happy with this job.',
    opts: ['radim', 'radio sam', 'radit ću', 'raditi'],
    answer: 'radim',
    tip: 'Something that started in the past and is still going on takes the present: Već deset godina radim. Radio sam would say the job is over. Radit ću is the future, and raditi is an infinitive.',
  },
  {
    mode: 'koliko',
    q: 'Svirao sam violinu ____.',
    en: 'I played the violin for four years.',
    opts: ['četiri godine', 'za četiri godine', 'prije četiri godine', 'od četiri godine'],
    answer: 'četiri godine',
    tip: 'How long something lasted is the bare accusative: četiri godine. Za četiri godine means "in four years" and does not go with the nesvršeni svirao. Prije četiri godine is "four years ago", and od needs a starting point, not a length.',
  },
  {
    mode: 'koliko',
    q: 'Čekala sam te ____ pred kinom!',
    en: 'I waited for you a whole hour outside the movie theater!',
    opts: ['cijeli sat', 'za cijeli sat', 'prije cijeli sat', 'od cijeli sat'],
    answer: 'cijeli sat',
    tip: 'Duration takes no preposition: cijeli sat. Za would turn it into "in an hour". Prije is for "ago" and od for a starting point, and neither goes with cijeli sat.',
  },
  {
    mode: 'koliko',
    q: 'Koliko dugo ____ u Zagrebu? — Dvije godine, i ne želim otići.',
    en: 'How long have you lived in Zagreb? — Two years, and I do not want to leave.',
    opts: ['živiš', 'si živio', 'ćeš živjeti', 'živjeti'],
    answer: 'živiš',
    tip: 'The person still lives there, so Croatian uses the present where English has "have lived": Koliko dugo živiš? Si živio would mean the stay is over. Ćeš živjeti asks about the future, and živjeti is an infinitive.',
  },
  {
    mode: 'koliko',
    lead: 'Živio sam u Splitu pet godina.',
    q: 'Živi li govornik još u Splitu?',
    opts: [
      'No, that period is over.',
      'Yes, he still lives there.',
      'He will move there in five years.',
      'He moved there five years ago.',
    ],
    answer: 'No, that period is over.',
    tip: 'The past with a duration closes the period: he lived there for five years and no longer does. "Still lives there" would be the present, Živim u Splitu pet godina. "In five years" is za pet godina, and "five years ago" is prije pet godina.',
  },
  {
    mode: 'koliko',
    q: 'Kako se kaže „I have been waiting for two hours“?',
    opts: [
      'Čekam već dva sata.',
      'Čekao sam za dva sata.',
      'Čekam za dva sata.',
      'Čekam prije dva sata.',
    ],
    answer: 'Čekam već dva sata.',
    tip: 'Still waiting, so the present, and the duration is the bare accusative; već adds "up to now". Za dva sata means "in two hours", which is not a duration, and prije dva sata means "two hours ago".',
  },
  {
    mode: 'koliko',
    q: 'Nisam ____ sto godina nigdje bila!',
    en: 'I have not been anywhere for a hundred years!',
    opts: ['već', 'tek', 'uskoro', 'do'],
    answer: 'već',
    tip: 'Već + a duration means "for… up to now": već sto godina. Tek means "only just", and uskoro means "soon". Do marks an end point and takes the genitive of a moment, not a length of time.',
  },
  {
    mode: 'koliko',
    q: 'Zašto je „Čekao sam za dva sata“ pogrešno?',
    en: 'Why is this wrong for "I waited for two hours"?',
    opts: [
      'Duration is the bare accusative; za would mean "in two hours".',
      'Dva sata should be in the locative.',
      'Čekati cannot be used in the past.',
      'Za always takes the genitive.',
    ],
    answer: 'Duration is the bare accusative; za would mean "in two hours".',
    tip: 'English "for" is not translated: Čekao sam dva sata. Za + the accusative places an event ahead of now. Dva sata is already the right form, čekati has a normal past, and za takes the accusative here.',
  },

  // ── jos ───────────────────────────────────────────────────────────────────
  {
    mode: 'jos',
    q: '— Jesi li gotova? — ____, trebam pet minuta.',
    en: 'Are you ready? — Not yet, I need five minutes.',
    opts: ['Još nisam', 'Već jesam', 'Više nisam', 'Tek jesam'],
    answer: 'Još nisam',
    tip: 'Još + a negated verb means "not yet". Već jesam would mean she is ready. Više nisam means "not anymore", as if she had been ready before, and tek jesam is not a phrase.',
  },
  {
    mode: 'jos',
    q: 'Prije sam pušio, ali ____ pušim.',
    en: 'I used to smoke, but I do not smoke anymore.',
    opts: ['više ne', 'još ne', 'već ne', 'tek ne'],
    answer: 'više ne',
    tip: 'Više ne means "not anymore": something stopped. Još ne means "not yet", which would say he never started. Već ne and tek ne are not phrases.',
  },
  {
    mode: 'jos',
    q: '— Hoćeš li kavu? — Ne, hvala, ____ sam popila dvije.',
    en: 'Would you like a coffee? — No, thanks, I have already had two.',
    opts: ['već', 'tek', 'uskoro', 'više ne'],
    answer: 'već',
    tip: 'Već means "already": the two coffees are behind her. Tek would mean "only two so far", which is no reason to refuse. Uskoro means "soon", and više ne is "not anymore".',
  },
  {
    mode: 'jos',
    q: '____ sam stigao, nisam se ni raspakirao.',
    en: 'I have only just arrived; I have not even unpacked.',
    opts: ['Tek', 'Uskoro', 'Više', 'Do'],
    answer: 'Tek',
    tip: 'Tek means "only just": the arrival was a moment ago. Uskoro means "soon" and does not go with the past stigao sam. Više needs ne to mean "anymore", and do is a preposition.',
  },
  {
    mode: 'jos',
    q: 'Autobus ____ dolazi, još samo malo.',
    en: 'The bus is coming soon, just a little longer.',
    opts: ['uskoro', 'prije', 'jučer', 'više ne'],
    answer: 'uskoro',
    tip: 'Uskoro means "soon". Prije means "earlier" or "ago" and jučer "yesterday"; both look back, and the bus is still to come. Više ne dolazi would say the bus no longer runs.',
  },
  {
    mode: 'jos',
    q: 'Danijela je ____ mala, ne može sama u školu.',
    en: 'Danijela is still little; she cannot go to school on her own.',
    opts: ['još', 'već', 'tek', 'uskoro'],
    answer: 'još',
    tip: 'Još means "still": the state goes on. Već ("already") does not fit a state one grows out of. Tek means "only just", and uskoro means "soon".',
  },
  {
    mode: 'jos',
    q: 'Što znači „Više ne radim u banci“?',
    opts: [
      'I no longer work at the bank.',
      'I do not work at the bank yet.',
      'I still work at the bank.',
      'I work more at the bank.',
    ],
    answer: 'I no longer work at the bank.',
    tip: 'Više ne + a verb means "not anymore". "Not yet" is još ne, and "still" is još. Više means "more" only without the negation.',
  },
  {
    mode: 'jos',
    q: 'Zar je ____ toliko sati?! Moramo ići.',
    en: 'Is it that late already?! We have to go.',
    opts: ['već', 'uskoro', 'više ne', 'prije'],
    answer: 'već',
    tip: 'Već means "already", here with surprise at how late it is. Uskoro means "soon", više ne "not anymore" and prije "earlier"; none of them fits a question about the time right now.',
  },
  {
    mode: 'jos',
    q: 'Film ____ nije počeo; imamo vremena za kavu.',
    en: 'The movie has not started yet; we have time for a coffee.',
    opts: ['još', 'više', 'tek', 'uskoro'],
    answer: 'još',
    tip: 'Još + a negated verb means "not yet": još nije počeo. Više nije would mean "not anymore", which a start cannot be. Tek and uskoro do not combine with nije počeo.',
  },
];
