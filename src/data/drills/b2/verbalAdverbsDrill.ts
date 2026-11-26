// src/data/drills/b2/verbalAdverbsDrill.ts
//
// B2 VERBAL ADVERBS — the drill for the `verbal-adverbs` lesson (B2 position 53).
//
// Three modes, nine items each:
//   oblik   — reading the forms: which verb a -ći or -vši form comes from, and which
//             form is which
//   par     — the pairing: imperfective gives -ći (at the same time), perfective gives
//             -vši (first one action, then the other)
//   subjekt — one subject for both actions; with two subjects, dok and a full clause
//
// Book pages (printed numbers):
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — 102–103 (GLAGOLSKI PRILOZI: the
//   two model sentences, -ći added to the 3rd person plural of an imperfective verb,
//   -vši / -avši added to the infinitive stem of a perfective verb, "obje radnje vrši
//   ista osoba", the note that the past adverb is literary), 104–105 (the past adverb
//   of verbs in -ći: došavši, izašavši, stigavši, rekavši, ušavši…).
//   Razgovarajte s nama! B2 textbook — thin: it has no section on verbal adverbs. They
//   only occur inside its texts and tasks: 64 (provodite čitajući), 152 (pritom se
//   služeći), 204 (ukupno gledajući), 228 (upozorivši).
//
// Where the books and the lesson differ:
//   - The grammar book splits the past ending: -vši after a vowel stem (posluša-vši),
//     -avši after a consonant stem (rek-avši, dig-avši, stig-avši). The lesson gives
//     only -vši and one -ći verb (došavši). The drill uses the book's forms.
//   - The grammar book drills rewriting dok / nakon što clauses into adverbs; the
//     lesson's main point is the opposite direction (two subjects need dok). The drill
//     has both directions, with its own sentences.
//   - Wrong options are real words (a finite form, the participle, the other aspect's
//     adverb), never invented forms such as the lesson's "pročitajući".
//   - A -vši form from an imperfective verb is called "rare and bookish" by the lesson,
//     so no item offers one, as right or as wrong.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VERBAL_ADVERBS_MODE_LABELS: Record<string, string> = {
  oblik: '🔎 Čitanje oblika',
  par: '⏱️ -ći ili -vši',
  subjekt: '👤 Isti subjekt',
};

export const VERBAL_ADVERBS_DRILL_DATA: ModeDrillItem[] = [
  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Od kojeg je glagola nastao oblik „pišući“?',
    opts: ['pisati', 'napisati', 'pitati', 'piti'],
    answer: 'pisati',
    tip: 'The present adverb is the 3rd person plural plus -ći: oni pišu → pišući. Napisati is perfective and gives napisavši. Pitati gives pitajući and piti gives pijući.',
  },
  {
    mode: 'oblik',
    q: 'Od kojeg je glagola nastao oblik „došavši“?',
    opts: ['doći', 'dolaziti', 'dati', 'dosaditi'],
    answer: 'doći',
    tip: 'Verbs in -ći built on ići have a past adverb in -šavši: doći → došavši. Dolaziti is imperfective and gives dolazeći. Dati gives davši and dosaditi gives dosadivši.',
  },
  {
    mode: 'oblik',
    lead: 'Jedući ekološku hranu, ljudi čine nešto dobro za svoje zdravlje.',
    q: 'Što u ovoj rečenici znači „jedući“?',
    opts: ['by eating, while they eat', 'having eaten', 'in order to eat', 'before eating'],
    answer: 'by eating, while they eat',
    tip: 'Jedući is the -ći form of jesti (oni jedu), so the eating runs at the same time as the main verb. "Having eaten" would be the past adverb pojevši. A -ći form never expresses purpose or an action that comes later.',
  },
  {
    mode: 'oblik',
    q: '____ na otok, odmah smo otišli na plažu.',
    en: 'Having arrived on the island, we went straight to the beach.',
    opts: ['Stigavši', 'Stižući', 'Stigli', 'Stignu'],
    answer: 'Stigavši',
    tip: 'Stići has the stem stig-, which ends in a consonant, so the past adverb takes -avši: stigavši. Stižući (from stizati) would mean "while arriving". Stigli is a participle and needs smo; stignu is a present tense form.',
  },
  {
    mode: 'oblik',
    q: 'Koji je od ovih oblika glagolski prilog sadašnji?',
    opts: ['noseći', 'donijevši', 'nosili', 'nošen'],
    answer: 'noseći',
    tip: 'Oni nose + -ći gives noseći, the present adverb. Donijevši is a past adverb (from perfective donijeti). Nosili is the participle used in the past tense, and nošen is the passive adjective.',
  },
  {
    mode: 'oblik',
    q: 'Koji je od ovih oblika glagolski prilog prošli?',
    opts: ['rekavši', 'govoreći', 'rekao', 'rečeno'],
    answer: 'rekavši',
    tip: 'Reći has the stem rek-, a consonant stem, so it takes -avši: rekavši. Govoreći is a present adverb (oni govore). Rekao is the past tense participle and rečeno is the passive form.',
  },
  {
    mode: 'oblik',
    q: '____ glazbu, djed je popravljao bicikl.',
    en: 'Listening to music, grandpa was fixing the bike.',
    opts: ['Slušajući', 'Poslušavši', 'Slušao', 'Slušaju'],
    answer: 'Slušajući',
    tip: 'Oni slušaju + -ći gives slušajući: the listening goes on while he works. Poslušavši means "having listened", one action finished first. Slušao and slušaju are finite forms and would need a conjunction.',
  },
  {
    mode: 'oblik',
    q: 'Ne ____ put, pitali smo prolaznika.',
    en: 'Not knowing the way, we asked a passerby.',
    opts: ['znajući', 'znali', 'znaju', 'znati'],
    answer: 'znajući',
    tip: 'The negative simply puts ne in front of the adverb: ne znajući (oni znaju + -ći). Znali and znaju are finite forms and cannot open the sentence this way. The infinitive znati does not make a clause here.',
  },
  {
    mode: 'oblik',
    q: 'Koji par točno povezuje glagol i njegov glagolski prilog?',
    opts: ['ući → ušavši', 'ući → ulazeći', 'ulaziti → ušavši', 'ući → ušao'],
    answer: 'ući → ušavši',
    tip: 'Perfective ući gives the past adverb ušavši. Ulazeći belongs to imperfective ulaziti (oni ulaze), so both mixed pairs are wrong. Ušao is the past tense participle, not an adverb.',
  },

  // ── par ───────────────────────────────────────────────────────────────────
  {
    mode: 'par',
    q: '____ vrata, sjetila se da su ključevi ostali unutra.',
    en: 'Having locked the door, she remembered that the keys were still inside.',
    opts: ['Zaključavši', 'Zaključavajući', 'Zaključala', 'Zaključati'],
    answer: 'Zaključavši',
    tip: 'The locking was finished first, so the perfective verb zaključati gives the -vši form. Zaključavajući (from zaključavati) would mean she remembered while still locking. Zaključala needs je, and the infinitive cannot stand here.',
  },
  {
    mode: 'par',
    q: '____ košulje, uvijek slušam radio.',
    en: 'While ironing shirts, I always listen to the radio.',
    opts: ['Glačajući', 'Izglačavši', 'Glačao', 'Glačam'],
    answer: 'Glačajući',
    tip: 'Two actions at the same time: imperfective glačati gives glačajući. Izglačavši means the ironing is already done. Glačao and glačam are finite forms and would need dok.',
  },
  {
    mode: 'par',
    q: 'Koja rečenica kaže da je prva radnja završila prije druge?',
    opts: [
      'Pročitavši poruku, nazvala je majku.',
      'Čitajući poruku, nazvala je majku.',
      'Dok je čitala poruku, nazvala je majku.',
      'Čitala je poruku i zvala majku.',
    ],
    answer: 'Pročitavši poruku, nazvala je majku.',
    tip: 'The -vši form of perfective pročitati puts the reading before the call. Čitajući and dok je čitala both say the two actions overlapped. The last sentence only lists two ongoing actions.',
  },
  {
    mode: 'par',
    q: 'Koja rečenica kaže da se obje radnje događaju u isto vrijeme?',
    opts: [
      'Vraćajući se s posla, kupila je kruh.',
      'Vrativši se s posla, kupila je kruh.',
      'Nakon što se vratila s posla, kupila je kruh.',
      'Kad se vratila s posla, kupila je kruh.',
    ],
    answer: 'Vraćajući se s posla, kupila je kruh.',
    tip: 'Vraćajući se (imperfective vraćati se) means she bought the bread on the way back. Vrativši se, nakon što se vratila and kad se vratila all say she was already back when she bought it.',
  },
  {
    mode: 'par',
    lead: 'Nakon što je potpisao ugovor, nazvao je obitelj.',
    q: 'Koja rečenica znači isto?',
    opts: [
      'Potpisavši ugovor, nazvao je obitelj.',
      'Potpisujući ugovor, nazvao je obitelj.',
      'Dok je potpisivao ugovor, nazvao je obitelj.',
      'Potpisavši ugovor, nazvat će obitelj.',
    ],
    answer: 'Potpisavši ugovor, nazvao je obitelj.',
    tip: 'Nakon što + a finished action is exactly what the -vši form says. Potpisujući and dok je potpisivao make the two actions overlap. The last option keeps the adverb but moves the call into the future.',
  },
  {
    mode: 'par',
    lead: 'Dok je čekala autobus, čitala je roman.',
    q: 'Kako se ista misao može reći kraće?',
    opts: [
      'Čekajući autobus, čitala je roman.',
      'Dočekavši autobus, čitala je roman.',
      'Čekajući autobus, pročitat će roman.',
      'Nakon što je dočekala autobus, čitala je roman.',
    ],
    answer: 'Čekajući autobus, čitala je roman.',
    tip: 'Dok + an ongoing action with the same subject becomes the -ći form: čekajući. Dočekavši and nakon što je dočekala say the bus had already come. The third option changes the tense of the main verb.',
  },
  {
    mode: 'par',
    q: 'Koji se glagolski prilog tvori od svršenog glagola „kupiti“?',
    opts: ['kupivši', 'kupujući', 'kupljen', 'kupio'],
    answer: 'kupivši',
    tip: 'A perfective verb gives the past adverb: kupi- + -vši. Kupujući belongs to the imperfective partner kupovati. Kupljen is the passive adjective and kupio is the past tense participle.',
  },
  {
    mode: 'par',
    q: 'Koji se glagolski prilog tvori od nesvršenog glagola „dolaziti“?',
    opts: ['dolazeći', 'došavši', 'došao', 'dolazak'],
    answer: 'dolazeći',
    tip: 'An imperfective verb gives the present adverb: oni dolaze + -ći. Došavši and došao belong to perfective doći. Dolazak is a noun.',
  },
  {
    mode: 'par',
    q: '____ svjetlo, legla je u krevet.',
    en: 'Having turned off the light, she got into bed.',
    opts: ['Ugasivši', 'Gaseći', 'Ugasila', 'Ugasiti'],
    answer: 'Ugasivši',
    tip: 'First the light, then the bed: perfective ugasiti gives ugasivši. Gaseći (from gasiti) would mean she lay down while turning it off. Ugasila needs je and a conjunction; the infinitive does not fit.',
  },

  // ── subjekt ───────────────────────────────────────────────────────────────
  {
    mode: 'subjekt',
    q: 'U kojoj rečenici glagolski prilog ima pravi subjekt?',
    opts: [
      'Čitajući novine, popio sam kavu.',
      'Čitajući novine, kava se ohladila.',
      'Čitajući novine, zazvonio je mobitel.',
      'Čitajući novine, počela je kiša.',
    ],
    answer: 'Čitajući novine, popio sam kavu.',
    tip: 'The adverb and the main verb must have the same subject: I read and I drank. In the other three the coffee, the phone and the rain would be reading the paper. With two subjects Croatian uses dok: Dok sam čitao novine, …',
  },
  {
    mode: 'subjekt',
    lead: 'Dok je Ivana kuhala, Luka je postavljao stol.',
    q: 'Može li se ova rečenica skratiti glagolskim prilogom?',
    opts: [
      'Ne, jer rečenica ima dva subjekta.',
      'Da: Kuhajući, Luka je postavljao stol.',
      'Da: Skuhavši, Luka je postavljao stol.',
      'Da, ali samo u pisanom jeziku.',
    ],
    answer: 'Ne, jer rečenica ima dva subjekta.',
    tip: 'Ivana cooks and Luka sets the table: two subjects, so the dok clause has to stay. Kuhajući, Luka… and Skuhavši, Luka… would both make Luka the cook. The rule is the same in writing and in speech.',
  },
  {
    mode: 'subjekt',
    lead: 'Pjevajući, vraćali smo se iz škole.',
    q: 'Tko pjeva?',
    opts: ['mi koji se vraćamo', 'učiteljica', 'netko treći', 'ne može se znati'],
    answer: 'mi koji se vraćamo',
    tip: 'A verbal adverb always shares the subject of the main verb. The main verb is vraćali smo se, so the singers are "we", the people coming back. No teacher or third person is the subject of this sentence, and the grammar leaves no doubt about it.',
  },
  {
    mode: 'subjekt',
    q: 'Kako se kaže „While I was showering, someone rang the doorbell“?',
    opts: [
      'Dok sam se tuširao, netko je pozvonio na vrata.',
      'Tuširajući se, netko je pozvonio na vrata.',
      'Istuširavši se, netko je pozvonio na vrata.',
      'Tuširajući se, pozvonio sam na vrata.',
    ],
    answer: 'Dok sam se tuširao, netko je pozvonio na vrata.',
    tip: 'I shower, someone else rings: two subjects need dok and a full clause. Tuširajući se, netko… and Istuširavši se, netko… make the visitor the one in the shower. The last option is grammatical but says that I rang the bell.',
  },
  {
    mode: 'subjekt',
    lead: 'Vozeći se prema moru, …',
    q: 'Kojim se nastavkom rečenica može točno završiti?',
    opts: [
      'pjevali smo stare pjesme.',
      'počela je padati kiša.',
      'radio je svirao stare pjesme.',
      'sunce je već zalazilo.',
    ],
    answer: 'pjevali smo stare pjesme.',
    tip: 'Vozeći se needs the travelers as the subject of the main verb too: we drove and we sang. The rain, the radio and the sun were not driving toward the sea, so those endings need Dok smo se vozili…',
  },
  {
    mode: 'subjekt',
    lead: 'Izašavši iz kuće, …',
    q: 'Koji je nastavak rečenice točan?',
    opts: [
      'Marko je shvatio da nema novčanik.',
      'vrata su se zalupila.',
      'počeo je puhati vjetar.',
      'susjedov je pas zalajao.',
    ],
    answer: 'Marko je shvatio da nema novčanik.',
    tip: 'Marko left the house and Marko realized: one subject for both. The door, the wind and the dog did not leave the house, so with them you need Kad je Marko izašao iz kuće, …',
  },
  {
    mode: 'subjekt',
    lead: 'Gledajući film, nestala je struja.',
    q: 'Zašto ova rečenica nije dobra?',
    opts: [
      'Struja nije gledala film: subjekti su različiti.',
      'Glagol gledati je svršen.',
      'Prilog mora stajati na kraju rečenice.',
      'Uz prilog glavni glagol mora biti u prezentu.',
    ],
    answer: 'Struja nije gledala film: subjekti su različiti.',
    tip: 'The adverb borrows the subject of the main verb, and here that is struja. Gledati is imperfective, so gledajući is a correct form. An adverb can open or close the sentence, and the main verb can be in any tense.',
  },
  {
    mode: 'subjekt',
    lead: 'Gledajući film, nestala je struja.',
    q: 'Kako popraviti ovu rečenicu?',
    opts: [
      'Dok smo gledali film, nestala je struja.',
      'Pogledavši film, nestala je struja.',
      'Gledajući film, struja je nestala.',
      'Gledajući film, nestalo je struje.',
    ],
    answer: 'Dok smo gledali film, nestala je struja.',
    tip: 'Two subjects (we and the power) need dok and a full clause. Pogledavši only changes the timing and still makes the power the viewer. Moving struja or putting it in the genitive does not give the adverb a subject either.',
  },
  {
    mode: 'subjekt',
    q: 'Koja se rečenica smije skratiti glagolskim prilogom?',
    opts: [
      'Dok je hodala, razmišljala je o poslu.',
      'Dok je hodala, telefon joj je zvonio.',
      'Dok je ona hodala, on je trčao.',
      'Dok je hodala, padao je snijeg.',
    ],
    answer: 'Dok je hodala, razmišljala je o poslu.',
    tip: 'Only the first sentence has one subject for both verbs, so it can become Hodajući, razmišljala je o poslu. In the others the phone, another person and the snow are the second subject, and dok has to stay.',
  },
];
