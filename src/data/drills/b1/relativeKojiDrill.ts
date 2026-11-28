// src/data/drills/b1/relativeKojiDrill.ts
//
// B1 THE WORD "KOJI" — the drill for the `relative-koji` lesson (B1 position 35).
//
// Three modes, nine items each:
//   rod       — gender and number come from the noun outside: koji, koja, koje; koji is
//               never left out; the commas
//   padez     — the case comes from the job inside the clause: koju, kojeg, kojoj, kojem
//   prijedlog — the preposition stands in front of koji and decides its case: u kojem, s
//               kojom, bez kojih, na kojeg
//
// Book pages (printed numbers):
//   Razgovarajte s nama! A2–B1 textbook — the book has no table of koji; the drill is
//   built from the relative clauses it prints: 16 ("studenti koji uče hrvatski jezik"),
//   39 ("Možemo računati na tog susjeda"), 52 ("Ljudi koji imaju mnogo novca…"), 56
//   ("piće koje često šteti zdravlju i kvari san", "s prijateljem iz škole kojeg niste
//   jako dugo vidjeli"), 67 ("glavnog slugu koji se zove George"), 80 ("organizacije u
//   kojima nekoliko ljudi ima jedan automobil"), 96 and 99 ("najzanimljivija djevojka
//   koju znam"), 106 (the street in Vrbnik: "ulica koja je tako uska…"), 113 ("Ljudi koji
//   imaju prijatelje na poslu"), 118 ("predmet koji predaje"), 119 ("gradom u kojem
//   živite"), 128 ("onaj Boris koji je sada novinar u Bruxellesu"), 133 ("pjesme, koje,
//   srećom, nikad nisam objavio"), 147 ("torta koju mladenci zajedno…"), 164 ("u zemlji u
//   kojoj se on govori").
//
// Where the book and the lesson differ:
//   - The book never states a rule for koji; it only uses it. The two questions (what
//     does it refer back to, what is its job inside the clause), "never left out",
//     "the preposition comes first" and the comma rule are the lesson's.
//   - Kojem and kojemu, kojeg and kojega, u kojem and u kojemu are all standard, so the
//     long and the short forms are never offered against each other.
//   - For a masculine thing as the object, the lesson and the book use koji (predmet
//     koji predaje). Kojeg is also heard there and is disputed, so it is never offered as
//     a wrong answer for a thing; it is tested only for a person (prijatelj kojeg…).
//   - Što can stand in for koji in some clauses and gdje for u kojem; neither is offered
//     as a wrong option.
//   - Grammar-order fence: čiji, gdje / kamo / odakle as relatives and ono što belong to
//     the next lesson (relative-deep) and are not used. The genitive after bojati se and
//     bez, and the instrumental after s, were taught earlier in B1.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const RELATIVE_KOJI_MODE_LABELS: Record<string, string> = {
  rod: '👥 Koji, koja, koje',
  padez: '🎯 Padež iznutra',
  prijedlog: '📌 Prijedlog + koji',
};

export const RELATIVE_KOJI_DRILL_DATA: ModeDrillItem[] = [
  // ── rod ───────────────────────────────────────────────────────────────────
  {
    mode: 'rod',
    q: 'Studenti ____ uče hrvatski dolaze iz cijelog svijeta.',
    en: 'The students who are learning Croatian come from all over the world.',
    opts: ['koji', 'koja', 'koje', 'kojeg'],
    answer: 'koji',
    tip: 'Studenti is masculine plural, and inside the clause they are the subject of uče: koji. Koja is feminine singular or neuter plural, koje is feminine plural or neuter singular, and kojeg is not a subject form.',
  },
  {
    mode: 'rod',
    q: 'U Vrbniku je ulica ____ je uža od svih drugih.',
    en: 'In Vrbnik there is a street that is narrower than all the others.',
    opts: ['koja', 'koji', 'koje', 'koju'],
    answer: 'koja',
    tip: 'Ulica is feminine singular, and it is the subject of je: koja. Koji is masculine and koje is neuter. Koju is the accusative, for an object, and here the street is the subject.',
  },
  {
    mode: 'rod',
    q: 'Kava je piće ____ često kvari san.',
    en: 'Coffee is a drink that often spoils your sleep.',
    opts: ['koje', 'koji', 'koja', 'kojeg'],
    answer: 'koje',
    tip: 'The word refers back to piće, which is neuter singular: koje. Koja would agree with kava, but the clause describes piće. Koji is masculine, and kojeg is not a subject form.',
  },
  {
    mode: 'rod',
    q: 'Sjećaš li se Borisa ____ je sada novinar u Bruxellesu?',
    en: 'Do you remember Boris, who is now a journalist in Brussels?',
    opts: ['koji', 'kojeg', 'kojem', 'koja'],
    answer: 'koji',
    tip: 'Borisa is a genitive, but that is the case OUTSIDE. Inside the clause Boris is the subject of je, so the nominative koji. Kojeg copies the outside case, kojem is the dative or locative, and koja is feminine.',
  },
  {
    mode: 'rod',
    q: 'Imam prijateljice ____ žive u Splitu.',
    en: 'I have friends who live in Split.',
    opts: ['koje', 'koji', 'koja', 'kojih'],
    answer: 'koje',
    tip: 'Prijateljice is feminine plural, and inside the clause they are the subject: koje. Koji is masculine and koja is feminine singular. Kojih is a genitive, not a subject form.',
  },
  {
    mode: 'rod',
    q: 'To su sela ____ nemaju ni trgovinu ni poštu.',
    en: 'Those are villages that have neither a store nor a post office.',
    opts: ['koja', 'koje', 'koji', 'kojih'],
    answer: 'koja',
    tip: 'Sela is neuter plural, and the neuter plural of koji is koja. Koje is the neuter singular (selo koje) or the feminine plural. Koji is masculine, and kojih is a genitive.',
  },
  {
    mode: 'rod',
    q: 'Koja je rečenica pravilna?',
    en: 'Which sentence is correct?',
    opts: [
      'Žena koja radi ovdje moja je teta.',
      'Žena koji radi ovdje moja je teta.',
      'Žena radi ovdje moja je teta.',
      'Žena koju radi ovdje moja je teta.',
    ],
    answer: 'Žena koja radi ovdje moja je teta.',
    tip: 'Žena is feminine singular and is the subject of radi: koja. Koji is masculine. Leaving the word out, as English can, is not possible in Croatian, and koju is the accusative, for an object.',
  },
  {
    mode: 'rod',
    q: 'Što određuje rod i broj riječi „koji“?',
    en: 'What decides the gender and number of koji?',
    opts: [
      'the noun it refers back to',
      'the verb in its own clause',
      'the preposition after it',
      'the first word of the sentence',
    ],
    answer: 'the noun it refers back to',
    tip: 'Gender and number come from outside, from the noun the clause describes: knjiga → koja, grad → koji. The verb and any preposition inside the clause decide the case, not the gender. The first word of the sentence plays no part.',
  },
  {
    mode: 'rod',
    q: 'U kojoj su rečenici zarezi pravilno napisani?',
    en: 'In which sentence are the commas correct?',
    opts: [
      'Moja sestra, koja studira u Zagrebu, dolazi u petak.',
      'Moja sestra koja, studira u Zagrebu dolazi u petak.',
      'Moja, sestra koja studira u Zagrebu, dolazi u petak.',
      'Moja sestra koja studira, u Zagrebu dolazi u petak.',
    ],
    answer: 'Moja sestra, koja studira u Zagrebu, dolazi u petak.',
    tip: 'The clause is extra information that could be removed, so commas go around the whole of it, before koja and after Zagrebu. The other three put a comma inside the clause or between moja and sestra.',
  },

  // ── padez ─────────────────────────────────────────────────────────────────
  {
    mode: 'padez',
    q: 'Ti si najzanimljivija djevojka ____ znam.',
    en: 'You are the most interesting girl I know.',
    opts: ['koju', 'koja', 'kojoj', 'kojom'],
    answer: 'koju',
    tip: 'Djevojka is feminine, and inside the clause she is the object of znam, so the accusative: koju. Koja is the subject form. Kojoj is the dative and kojom the instrumental.',
  },
  {
    mode: 'padez',
    q: 'Idem na kavu s prijateljem ____ nisam dugo vidio.',
    en: 'I am going for coffee with a friend I have not seen in a long time.',
    opts: ['kojeg', 'koji', 'kojem', 'kojim'],
    answer: 'kojeg',
    tip: 'Inside the clause the friend is the object of vidio, and for a person the masculine accusative is kojeg. Koji is the subject form. Kojim copies the instrumental of prijateljem from outside, and kojem is the dative.',
  },
  {
    mode: 'padez',
    q: 'Film ____ smo sinoć gledali bio je odličan.',
    en: 'The movie we watched last night was excellent.',
    opts: ['koji', 'koja', 'kojem', 'kojim'],
    answer: 'koji',
    tip: 'Film is the object of gledali, and for a masculine thing the accusative looks like the nominative: koji. Koja is feminine. Kojem is the dative or locative and kojim the instrumental; gledati takes neither.',
  },
  {
    mode: 'padez',
    q: 'To je prijateljica ____ sam poslala razglednicu.',
    en: 'That is the friend I sent a postcard to.',
    opts: ['kojoj', 'koju', 'koja', 'kojom'],
    answer: 'kojoj',
    tip: 'You send something TO someone, so inside the clause the friend is in the dative: kojoj. Koju is the accusative; the object here is razglednicu. Koja is the subject form, and kojom is the instrumental.',
  },
  {
    mode: 'padez',
    q: 'Pjesme ____ sam pisao u gimnaziji nikad nisam objavio.',
    en: 'I never published the poems I wrote in high school.',
    opts: ['koje', 'koji', 'kojih', 'kojima'],
    answer: 'koje',
    tip: 'Pjesme is feminine plural and is the object of pisao: the accusative plural koje. Koji is masculine. Kojih is the genitive and kojima the dative, locative or instrumental.',
  },
  {
    mode: 'padez',
    q: 'To je kolega ____ sam pomogao oko projekta.',
    en: 'That is the colleague I helped with the project.',
    opts: ['kojem', 'kojeg', 'koji', 'kojim'],
    answer: 'kojem',
    tip: 'Pomoći takes the dative (pomoći komu), so inside the clause the colleague is kojem. Kojeg is the accusative, which pomoći does not take. Koji is the subject form, and kojim is the instrumental.',
  },
  {
    mode: 'padez',
    q: 'To je profesorica ____ se svi studenti boje.',
    en: 'That is the professor all the students are afraid of.',
    opts: ['koje', 'koju', 'kojoj', 'koja'],
    answer: 'koje',
    tip: 'Bojati se takes the genitive, and the feminine genitive is koje. Koju is the accusative, the English-based slip. Kojoj is the dative, and koja is the subject form, but the subject here is svi studenti.',
  },
  {
    mode: 'padez',
    q: 'Što određuje padež riječi „koji“?',
    en: 'What decides the case of koji?',
    opts: [
      'its job inside its own clause',
      'the case of the noun before it',
      'the gender of the speaker',
      'the tense of the main verb',
    ],
    answer: 'its job inside its own clause',
    tip: 'The case comes from inside: subject, object, or whatever the verb or preposition of the clause asks for. The noun before it gives only gender and number. The speaker and the tense play no part.',
  },
  {
    mode: 'padez',
    q: 'Kako se kaže „the letter I am writing“?',
    opts: ['pismo koje pišem', 'pismo pišem', 'pismo koji pišem', 'pismo kojem pišem'],
    answer: 'pismo koje pišem',
    tip: 'English leaves the joining word out; Croatian never does. Pismo is neuter and is the object of pišem: koje. Pismo pišem has nothing joining the halves, koji is masculine, and kojem is the dative or locative.',
  },

  // ── prijedlog ─────────────────────────────────────────────────────────────
  {
    mode: 'prijedlog',
    q: 'Jeste li zadovoljni gradom u ____ živite?',
    en: 'Are you happy with the city you live in?',
    opts: ['kojem', 'koji', 'kojeg', 'kojim'],
    answer: 'kojem',
    tip: 'Inside the clause the city is where you live: u + the locative, u kojem. Koji is the subject form. Kojeg is the genitive, and kojim copies the instrumental of gradom from outside.',
  },
  {
    mode: 'prijedlog',
    q: 'Učimo strani jezik u zemlji u ____ se on govori.',
    en: 'We learn a foreign language in the country where it is spoken.',
    opts: ['kojoj', 'koju', 'koja', 'kojom'],
    answer: 'kojoj',
    tip: 'Zemlja is feminine, and u for a place takes the locative: u kojoj. U koju would be the accusative, for movement into the country. Koja is the subject form, and kojom is the instrumental.',
  },
  {
    mode: 'prijedlog',
    q: 'To je kolegica s ____ radim na projektu.',
    en: 'That is the colleague I am working with on the project.',
    opts: ['kojom', 'kojoj', 'koju', 'koja'],
    answer: 'kojom',
    tip: 'S ("with") takes the instrumental, and kolegica is feminine: s kojom. Kojoj is the dative or locative and koju the accusative. Koja is the subject form and cannot follow a preposition.',
  },
  {
    mode: 'prijedlog',
    q: 'Postoje organizacije u ____ nekoliko ljudi ima jedan automobil.',
    en: 'There are organizations in which several people share one car.',
    opts: ['kojima', 'koje', 'kojih', 'koji'],
    answer: 'kojima',
    tip: 'Organizacije is plural, and u for a place takes the locative: u kojima. U koje would be the accusative, for movement into them. Kojih is the genitive, and koji is a masculine subject form.',
  },
  {
    mode: 'prijedlog',
    q: 'Kupila sam stvari bez ____ ne mogu na put.',
    en: 'I bought the things I cannot travel without.',
    opts: ['kojih', 'koje', 'kojima', 'koji'],
    answer: 'kojih',
    tip: 'Bez takes the genitive, and stvari is plural: bez kojih. Koje is the nominative or accusative. Kojima is the dative, locative or instrumental, and koji is masculine.',
  },
  {
    mode: 'prijedlog',
    q: 'Kako se kaže „the friend I travel with“?',
    opts: [
      'prijatelj s kojim putujem',
      'prijatelj koji putujem s',
      'prijatelj kojim putujem s',
      'prijatelj s koji putujem',
    ],
    answer: 'prijatelj s kojim putujem',
    tip: 'The preposition goes in front of koji and decides its case: s + the instrumental, s kojim. Croatian never leaves a preposition at the end of the clause, as English can. S koji keeps the nominative after s.',
  },
  {
    mode: 'prijedlog',
    q: 'Ovo je kuća ____ sam se rodio.',
    en: 'This is the house I was born in.',
    opts: ['u kojoj', 'koju', 'koja', 'kojoj u'],
    answer: 'u kojoj',
    tip: 'Being born IN a house needs the preposition, and it stands first: u kojoj. Koju and koja have no preposition at all. Kojoj u puts the preposition after the word, which Croatian never does.',
  },
  {
    mode: 'prijedlog',
    q: 'To je prijatelj na ____ uvijek mogu računati.',
    en: 'That is a friend I can always count on.',
    opts: ['kojeg', 'kojem', 'koji', 'kojim'],
    answer: 'kojeg',
    tip: 'Računati na takes the accusative, and for a person the masculine accusative is kojeg: na kojeg. Na kojem is the locative, for a place. Koji is the subject form, and kojim is the instrumental.',
  },
  {
    mode: 'prijedlog',
    q: 'Gdje stoji prijedlog u rečenici s „koji“?',
    en: 'Where does the preposition go in a clause with koji?',
    opts: [
      'right before koji',
      'at the end of the clause',
      'right after the verb',
      'it is left out',
    ],
    answer: 'right before koji',
    tip: 'The preposition comes first and decides the case: grad u kojem živim. English can leave it at the end ("the city I live in"); Croatian cannot. It never follows the verb, and it cannot be dropped.',
  },
];
