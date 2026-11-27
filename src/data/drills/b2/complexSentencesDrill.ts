// src/data/drills/b2/complexSentencesDrill.ts
//
// B2 COMPLEX SENTENCES — the drill for the `complex-sentences` lesson
// (B2 position 42).
//
// Three modes, nine items each:
//   vrijeme — time clauses: kad, dok, čim, prije nego što, nakon što, otkad, and the
//             verb form after kad and prije nego što for something still to come
//   veznik  — reason and concession (jer, budući da, iako, premda), the comma, and
//             da (not što) for "that"
//   odnosna — relative clauses: koji, koja, koje in gender, number and case, and čiji
//
// Book pages (printed numbers):
//   Razgovarajte s nama! B2 textbook — 59–60 (VEZNICI I GLAGOLSKI VID: čim, nakon što
//   and prije nego što with perfective verbs: "Nakon što su se sreli, otišli su u
//   kafić", "Htjela bih vidjeti katedralu prije nego što otputujem"; "Kada saznam,
//   javit ću ti"), 175 (ZAVISNO SLOŽENE REČENICE: main and dependent clause; no comma
//   when the main clause is first, a comma when the dependent clause is first: "Nakon
//   što je postigla prvi kazališni uspjeh u Hrvatskoj, Maja se odselila u Ameriku"),
//   176 (the kinds of dependent clause: "Vesna nosi dugu kosu otkad je došla u Zagreb",
//   "Iako je bolestan, doći će na sastanak"), 178 (UZROČNE REČENICE: "Pospana je jer je
//   malo spavala noćas", "Budući da je pala kiša, prekinuli smo igru"; a sentence
//   cannot begin with jer).
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — 115–116 (ATRIBUTNE REČENICE:
//   "Hrvatska je zemlja koja ima dobar potencijal za ekopoljoprivredu", "Živim u zgradi
//   u kojoj nema lifta", "Poznajem ljude čiji sin…"), 135–136 (UZROČNE REČENICE: jer
//   cannot open the whole sentence and is replaced there by budući da), 212–213
//   (VREMENSKE REČENICE: "Kad napišeš zadaću, možeš ići van", kad, prije nego, nakon
//   što, dok, čim, otkad).
//
// Where the books and the lesson differ:
//   - The lesson lists jer and budući da side by side. Both books add a rule the
//     lesson does not state: jer cannot open the sentence, budući da does. The drill
//     follows the books.
//   - The comma rule (none when the main clause comes first, one when the dependent
//     clause comes first) is on textbook page 175; the lesson only touches it in a
//     note. Two items follow the book.
//   - The books also print tek što, samo što, otkako and poslije nego što. They are
//     synonyms of čim, otkad and nakon što, so they are not offered against them.
//     Iako and premda are synonyms too and never appear in one item; the same holds
//     for jer and zato što, and for kad and čim.
//   - The textbook has "Dok sam pogledao na sat…" beside "Dok sam gledao televiziju…",
//     so no item sets the two aspects against each other after dok.
//   - Neither book has a rule for da against što; that pair and the reported question
//     with li come from the lesson.
//   - Grammar-order fence: no kako bi or other purpose clauses, no unreal conditions,
//     no unatoč or other concession beyond iako and premda, no verbal adverbs, no
//     shifting of tenses in reported speech.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const COMPLEX_SENTENCES_MODE_LABELS: Record<string, string> = {
  vrijeme: '⏳ Kad, dok, čim',
  veznik: '🧩 Jer, iako, da',
  odnosna: '🔗 Koji, koja, koje',
};

export const COMPLEX_SENTENCES_DRILL_DATA: ModeDrillItem[] = [
  // ── vrijeme ───────────────────────────────────────────────────────────────
  {
    mode: 'vrijeme',
    q: '____ napišeš zadaću, možeš ići van.',
    en: 'When you finish your homework, you can go out.',
    opts: ['Kad', 'Iako', 'Jer', 'Otkad'],
    answer: 'Kad',
    tip: 'Kad + a perfective present sets the moment that opens the way: once the homework is done. Iako means "although" and makes no sense here. Jer cannot open a sentence. Otkad means "ever since" and looks back at the past.',
  },
  {
    mode: 'vrijeme',
    q: '____ sam učio, slušao sam glazbu.',
    en: 'While I was studying, I was listening to music.',
    opts: ['Dok', 'Čim', 'Otkad', 'Prije nego što'],
    answer: 'Dok',
    tip: 'Two actions going on at the same time are joined by dok. Čim means "as soon as" and needs a finished act. Otkad means "ever since". Prije nego što would put the music before the studying, not during it.',
  },
  {
    mode: 'vrijeme',
    q: 'Javi mi se ____ stigneš kući.',
    en: 'Call me as soon as you get home.',
    opts: ['čim', 'dok', 'otkad', 'iako'],
    answer: 'čim',
    tip: 'Čim means "as soon as": one act right after another. Dok stigneš would mean "while you are arriving", which a perfective verb cannot say. Otkad looks back at the past, and iako means "although".',
  },
  {
    mode: 'vrijeme',
    q: 'Htjela bih vidjeti katedralu prije nego što ____.',
    en: 'I would like to see the cathedral before I leave.',
    opts: ['otputujem', 'otputovati', 'ću otputovati', 'otputovala'],
    answer: 'otputujem',
    tip: 'After prije nego što a single act still to come is a perfective present: prije nego što otputujem. The infinitive otputovati cannot follow što. The future ću otputovati is what English speakers expect, but Croatian does not use it here. Otputovala has no auxiliary.',
  },
  {
    mode: 'vrijeme',
    q: 'Kad ____, nazovi me.',
    en: 'When you arrive, call me.',
    opts: ['dođeš', 'ćeš doći', 'doći', 'došao'],
    answer: 'dođeš',
    tip: 'After kad one finished act in the future is a perfective present: kad dođeš. The future ćeš doći is the English-based slip; Croatian does not use it in a time clause. Doći is an infinitive, and došao has no auxiliary.',
  },
  {
    mode: 'vrijeme',
    q: '____ što su se sreli, otišli su u kafić.',
    en: 'After they met, they went to a café.',
    opts: ['Nakon', 'Prije', 'Dok', 'Čim'],
    answer: 'Nakon',
    tip: 'One act after another: nakon što. Prije needs nego (prije nego što) and would turn the order around. Dok and čim are complete on their own and never take što.',
  },
  {
    mode: 'vrijeme',
    q: 'Vesna nosi dugu kosu ____ je došla u Zagreb.',
    en: 'Vesna has worn her hair long ever since she came to Zagreb.',
    opts: ['otkad', 'dok', 'čim', 'prije nego što'],
    answer: 'otkad',
    tip: 'Otkad marks the point in the past from which something has lasted until now. Dok would need two actions running side by side. Čim is "as soon as", one act straight after another. Prije nego što means "before".',
  },
  {
    mode: 'vrijeme',
    q: 'Operi ruke ____ sjedneš za stol.',
    en: 'Wash your hands before you sit down at the table.',
    opts: ['prije nego što', 'nakon što', 'otkad', 'budući da'],
    answer: 'prije nego što',
    tip: 'The washing comes first, so the clause opens with prije nego što. Nakon što would put the washing after sitting down. Otkad looks back at the past. Budući da gives a reason, not a time.',
  },
  {
    mode: 'vrijeme',
    q: 'Kad ____ vremena, dođi nam u goste.',
    en: 'When you have time, come and visit us. (to a man)',
    opts: ['budeš imao', 'ćeš imati', 'imati', 'imao'],
    answer: 'budeš imao',
    tip: 'A lasting state in the future after kad takes the future II: kad budeš imao vremena. The future I (ćeš imati) is not used in a time clause. Imati is an infinitive, and imao has no auxiliary.',
  },

  // ── veznik ────────────────────────────────────────────────────────────────
  {
    mode: 'veznik',
    q: '____ je pala kiša, prekinuli smo igru.',
    en: 'Since it had started to rain, we stopped the game.',
    opts: ['Budući da', 'Jer', 'Iako', 'Da'],
    answer: 'Budući da',
    tip: 'A reason that opens the sentence takes budući da. Jer cannot stand at the start of a sentence. Iako means "although", which is the opposite relation. Da alone does not give a reason.',
  },
  {
    mode: 'veznik',
    q: 'Pospana je ____ je noćas malo spavala.',
    en: 'She is sleepy because she slept little last night.',
    opts: ['jer', 'iako', 'čim', 'dok'],
    answer: 'jer',
    tip: 'A reason after the main clause is introduced by jer. Iako means "although": she would be sleepy in spite of it. Čim and dok are about time, not about the cause.',
  },
  {
    mode: 'veznik',
    q: 'Koja rečenica pravilno izriče uzrok?',
    opts: [
      'Budući da je kasno, idemo kući.',
      'Jer je kasno, idemo kući.',
      'Idemo kući budući je kasno.',
      'Jer da je kasno, idemo kući.',
    ],
    answer: 'Budući da je kasno, idemo kući.',
    tip: 'When the reason comes first, the conjunction is budući da. Jer cannot open the whole sentence. Budući without da is not a conjunction, and jer da is not one either.',
  },
  {
    mode: 'veznik',
    q: '____ je bolestan, doći će na sastanak.',
    en: 'Although he is sick, he will come to the meeting.',
    opts: ['Iako', 'Jer', 'Čim', 'Budući da'],
    answer: 'Iako',
    tip: 'Iako introduces something that does not stop the main action: he is sick and still comes. Jer cannot open a sentence. Čim is "as soon as". Budući da would make the illness the reason for coming.',
  },
  {
    mode: 'veznik',
    q: 'U kojoj je rečenici zarez na pravom mjestu?',
    opts: [
      'Nakon što je postigla prvi uspjeh, Maja se odselila u Ameriku.',
      'Maja se odselila u Ameriku, nakon što je postigla prvi uspjeh.',
      'Nakon što je postigla prvi uspjeh Maja se odselila, u Ameriku.',
      'Nakon što je postigla, prvi uspjeh Maja se odselila u Ameriku.',
    ],
    answer: 'Nakon što je postigla prvi uspjeh, Maja se odselila u Ameriku.',
    tip: 'When the dependent clause comes first, a comma separates it from the main clause. When the main clause comes first, there is no comma, so the second sentence is wrong. In the other two the comma cuts a clause in half.',
  },
  {
    mode: 'veznik',
    q: 'Koja je rečenica pravilno napisana?',
    opts: [
      'Ostali smo kod kuće jer je padala kiša.',
      'Ostali smo kod kuće, jer je padala kiša.',
      'Ostali smo, kod kuće jer je padala kiša.',
      'Ostali smo kod kuće jer, je padala kiša.',
    ],
    answer: 'Ostali smo kod kuće jer je padala kiša.',
    tip: 'The main clause comes first, so no comma is written before jer. The comma before jer copies other languages. The other two commas cut a clause in half.',
  },
  {
    mode: 'veznik',
    q: 'Mislim ____ je to dobra ideja.',
    en: 'I think that it is a good idea.',
    opts: ['da', 'što', 'koji', 'jer'],
    answer: 'da',
    tip: 'After verbs of thinking and saying, "that" is da: mislim da. Što in this slot means "what" and gives a different sentence. Koji needs a noun to refer to. Jer would give a reason, not the content of the thought.',
  },
  {
    mode: 'veznik',
    q: 'Pitao me ____ već bila u Dubrovniku.',
    en: 'He asked me whether I had ever been to Dubrovnik. (a woman speaking)',
    opts: ['jesam li', 'da sam', 'što sam', 'jer sam'],
    answer: 'jesam li',
    tip: 'A reported yes/no question keeps the li form: pitao me jesam li bila. Da sam would report a statement, not a question. Što sam means "what I". Jer sam gives a reason.',
  },
  {
    mode: 'veznik',
    q: 'Nije odustala ____ je bilo teško.',
    en: 'She did not give up even though it was hard.',
    opts: ['premda', 'jer', 'čim', 'da'],
    answer: 'premda',
    tip: 'Premda introduces something that did not stop her: it was hard, and she still went on. Jer would say she kept going because it was hard. Čim is "as soon as". Da does not express a contrast.',
  },

  // ── odnosna ───────────────────────────────────────────────────────────────
  {
    mode: 'odnosna',
    q: 'Hrvatska je zemlja ____ ima dobar potencijal za ekopoljoprivredu.',
    en: 'Croatia is a country that has good potential for organic farming.',
    opts: ['koja', 'koji', 'koje', 'koju'],
    answer: 'koja',
    tip: 'Zemlja is feminine, and the pronoun is the subject of ima: koja. Koji is masculine and koje neuter. Koju is the accusative, but here the pronoun is the subject, not the object.',
  },
  {
    mode: 'odnosna',
    q: 'Živim u zgradi u ____ nema lifta.',
    en: 'I live in a building that has no elevator.',
    opts: ['kojoj', 'koju', 'koja', 'kojem'],
    answer: 'kojoj',
    tip: 'Zgrada is feminine, and u for a place takes the locative: u kojoj. U koju is the accusative and would mean movement into it. Koja is the nominative. Kojem is masculine or neuter.',
  },
  {
    mode: 'odnosna',
    q: 'Čovjek ____ sam jučer upoznao radi u banci.',
    en: 'The man I met yesterday works at a bank.',
    opts: ['kojeg', 'koji', 'kojem', 'koja'],
    answer: 'kojeg',
    tip: 'The pronoun takes the case of its role in its own clause. Here it is the object of upoznao, and čovjek is a masculine person: kojeg. Koji is the nominative, the slip the lesson names. Kojem is the dative or locative. Koja is feminine.',
  },
  {
    mode: 'odnosna',
    q: 'Knjiga ____ čitam ima petsto stranica.',
    en: 'The book I am reading has five hundred pages.',
    opts: ['koju', 'koja', 'kojoj', 'koje'],
    answer: 'koju',
    tip: 'Knjiga is feminine, and the pronoun is the object of čitam: koju. Koja is the nominative; it would make the book the reader. Kojoj is the dative or locative, and koje is the genitive.',
  },
  {
    mode: 'odnosna',
    q: 'Dijete ____ plače traži mamu.',
    en: 'The child who is crying is looking for his mom.',
    opts: ['koje', 'koji', 'koja', 'kojeg'],
    answer: 'koje',
    tip: 'Dijete is neuter, and the pronoun is the subject of plače: koje. Koji is masculine and koja feminine. Kojeg is the genitive or the masculine accusative, not a subject form.',
  },
  {
    mode: 'odnosna',
    q: 'Poznajem ljude ____ sin živi u Kanadi.',
    en: 'I know people whose son lives in Canada.',
    opts: ['čiji', 'koji', 'čije', 'čijeg'],
    answer: 'čiji',
    tip: '"Whose" is čiji, and it agrees with the thing owned, not with the owners: sin is masculine and the subject, so čiji sin. Koji would mean "who". Čije does not agree with sin. Čijeg is the genitive or accusative, but sin is the subject of živi.',
  },
  {
    mode: 'odnosna',
    q: 'Susjedi s ____ smo išli na more prodaju kuću.',
    en: 'The neighbors we went to the seaside with are selling their house.',
    opts: ['kojima', 'kojih', 'koje', 'kojim'],
    answer: 'kojima',
    tip: 'S (together with) takes the instrumental, and susjedi is plural: s kojima. Kojih is the genitive and koje the accusative. Kojim is the instrumental singular, for one neighbor.',
  },
  {
    mode: 'odnosna',
    q: 'To je grad u ____ sam se rodila.',
    en: 'That is the town I was born in.',
    opts: ['kojem', 'koji', 'kojoj', 'kojeg'],
    answer: 'kojem',
    tip: 'Grad is masculine, and u for a place takes the locative: u kojem. U koji is the accusative and would mean movement into the town. Kojoj is feminine. Kojeg is the genitive.',
  },
  {
    mode: 'odnosna',
    q: 'Hlače ____ sam kupio bile su najpovoljnije od svih.',
    en: 'The pants I bought were the cheapest of all.',
    opts: ['koje', 'koji', 'koja', 'kojih'],
    answer: 'koje',
    tip: 'Hlače is a feminine plural, and the pronoun is the object of kupio: the feminine accusative plural koje. Koji is masculine. Koja is the feminine singular. Kojih is the genitive plural.',
  },
];
