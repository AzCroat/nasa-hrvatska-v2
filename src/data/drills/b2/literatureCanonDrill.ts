// src/data/drills/b2/literatureCanonDrill.ts
//
// B2 READING CROATIAN LITERATURE — the drill for the `literature-canon` lesson
// (B2 position 20).
//
// Three modes, nine items each:
//   knjiga   — choosing a first Croatian book, and the names every Croatian knows:
//              Priče iz davnine first, Krleža later, Marulić as the beginning
//   razgovor — talking about a novel: radnja, lik, prijevod, pripovijetka
//   citanje  — reading a page before the dictionary, and the words around reading:
//              pročitati, začitati se, načitati se, knjižnica, nakladnik
//
// Book pages (printed numbers):
//   Razgovarajte s nama! B2 textbook — unit 4 "Tko čita, (ne) skita": 63–64 (unit
//   goals and the text on why reading matters), 73 (the text "Marko Marulić": father
//   of Croatian literature, born and worked in Split, wrote in Latin, Croatian and
//   Italian, the Latin epic Davidijada and the Croatian epic Judita), 74 (the word map
//   KNJIGA I ČITANJE: književnik, pisac, spisateljica, knjižnica, čitaonica, nakladnik
//   / izdavač, prijevod, knjiški moljac, roman, pripovijetka, kratka priča), 78–79
//   (the čitati family: pročitati, iščitati, načitati se, začitati se).
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — thin: no literature unit. Only
//   example sentences: 96–97 ("Pročitala sam samo prvi dio tog romana"), 198–199 ("Filip
//   Latinovicz glavni je lik Krležina romana", with the possessive adjective Krležin).
//
// Where the books and the lesson differ:
//   - The textbook's only canonical author is Marulić; the reading list (Priče iz
//     davnine first, Krleža later) and the advice to read a page before the dictionary
//     come from the lesson alone.
//   - The textbook gives Marulić's best-known works as the Latin epic Davidijada and
//     the Croatian epic Judita and gives no dates; the lesson adds 1501 and 1521 and
//     the word "psychology". No item asks for a date.
//   - The textbook's word map has prijevod, roman and pripovijetka but not radnja or
//     lik; those two come from the lesson, and lik is confirmed by the grammar book's
//     example sentence.
//   - The textbook lists both nakladnik and izdavač for a publisher, and the lesson
//     says knjižnica (biblioteka also exists), so those pairs are never offered
//     against each other.
//   - Authors are named only where the lesson and the textbook name them (Marulić,
//     Brlić-Mažuranić, Krleža, Nazor); no living writers appear.
//   - Grammar-order fence: no passive, no participial adjectives, no verbal nouns, no
//     conditional, no reported speech, no verbal adverbs.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const LITERATURE_CANON_MODE_LABELS: Record<string, string> = {
  knjiga: '📚 Prva knjiga',
  razgovor: '💬 Radnja, lik, prijevod',
  citanje: '📖 Kako čitati',
};

export const LITERATURE_CANON_DRILL_DATA: ModeDrillItem[] = [
  // ── knjiga ────────────────────────────────────────────────────────────────
  {
    mode: 'knjiga',
    q: 'Zašto su „Priče iz davnine“ dobra prva knjiga na hrvatskom?',
    opts: [
      'Priče su kratke, a jezik je bogat, ali jasan.',
      'To je najduži hrvatski roman.',
      'Autorica ih je napisala na latinskom.',
      'U Hrvatskoj ih gotovo nitko ne poznaje.',
    ],
    answer: 'Priče su kratke, a jezik je bogat, ali jasan.',
    tip: 'Each tale is short enough to finish in one sitting, and the prose is rich but clear. It is a collection of tales, not a long novel, and it is in Croatian. It is also very well known, so it gives you something to talk about.',
  },
  {
    mode: 'knjiga',
    q: 'Tko se smatra ocem hrvatske književnosti?',
    opts: ['Marko Marulić', 'Miroslav Krleža', 'Vladimir Nazor', 'Ivana Brlić-Mažuranić'],
    answer: 'Marko Marulić',
    tip: 'Marulić of Split, writing around 1500, is called the father of Croatian literature. Krleža, Nazor and Brlić-Mažuranić are all writers of the twentieth century, four hundred years later.',
  },
  {
    mode: 'knjiga',
    q: 'Što su „Priče iz davnine“?',
    opts: [
      'bajke koje se oslanjaju na slavensku mitologiju',
      'povijesni roman o Zagrebu',
      'zbirka ljubavnih pjesama',
      'drama u tri čina',
    ],
    answer: 'bajke koje se oslanjaju na slavensku mitologiju',
    tip: 'Priče iz davnine (Tales of Long Ago) are Croatian fairy tales that draw on Slavic mythology. They are prose tales: not a novel, not poems and not a play.',
  },
  {
    mode: 'knjiga',
    q: '____ rečenice su duge i složene.',
    en: 'Krleža’s sentences are long and complex.',
    cue: 'Krleža',
    opts: ['Krležine', 'Krležini', 'Krležina', 'Krležin'],
    answer: 'Krležine',
    tip: 'The possessive adjective from Krleža is Krležin, and it agrees with the feminine plural rečenice: Krležine rečenice. Krležini is masculine plural, Krležina is feminine singular, and Krležin is masculine singular.',
  },
  {
    mode: 'knjiga',
    q: 'Na kojem je jeziku Marulić napisao ep „Judita“?',
    opts: ['na hrvatskom', 'na latinskom', 'na talijanskom', 'na njemačkom'],
    answer: 'na hrvatskom',
    tip: 'Judita is his Croatian epic, and that is why it counts as the first great work of Croatian literature in the vernacular. His other famous epic, Davidijada, is in Latin. He also wrote in Italian, but Judita is not one of those works, and German is not one of his three languages.',
  },
  {
    mode: 'knjiga',
    q: 'U kojem je gradu Marulić živio i radio?',
    opts: ['u Splitu', 'u Zagrebu', 'u Dubrovniku', 'u Osijeku'],
    answer: 'u Splitu',
    tip: 'Marulić was born in Split, worked there as a lawyer and a judge, and his name is often written with the word Splićanin. Zagreb, Dubrovnik and Osijek have their own writers, but not this one.',
  },
  {
    mode: 'knjiga',
    q: 'Kojim je redom najbolje čitati?',
    opts: [
      'prvo „Priče iz davnine“, kasnije Krležu',
      'prvo Krležu, kasnije „Priče iz davnine“',
      'prvo „Juditu“, zatim Krležu',
      'samo Krležu, i to odmah',
    ],
    answer: 'prvo „Priče iz davnine“, kasnije Krležu',
    tip: 'Start with clear, short prose and leave Krleža for later: his long sentences and abstract vocabulary discourage a first-time reader. Judita is an epic from around 1500 that you will not read at this level at all.',
  },
  {
    mode: 'knjiga',
    q: 'Marulić je pisao na tri jezika: na latinskom, na hrvatskom i na ____.',
    opts: ['talijanskom', 'njemačkom', 'mađarskom', 'engleskom'],
    answer: 'talijanskom',
    tip: 'He wrote mostly in Latin, and also in Croatian and Italian, the languages of a humanist in Split around 1500. German, Hungarian and English are not among the three.',
  },
  {
    mode: 'knjiga',
    q: 'Što od ovoga NIJE književna vrsta?',
    opts: ['prijevod', 'roman', 'pripovijetka', 'drama'],
    answer: 'prijevod',
    tip: 'A prijevod is a translation: any book can exist in one. Roman (novel), pripovijetka (short story) and drama (play) are kinds of literary work.',
  },

  // ── razgovor ──────────────────────────────────────────────────────────────
  {
    mode: 'razgovor',
    q: '____ romana događa se u Zagrebu tridesetih godina.',
    en: 'The story of the novel takes place in Zagreb in the thirties.',
    opts: ['Radnja', 'Lik', 'Prijevod', 'Naslovnica'],
    answer: 'Radnja',
    tip: 'Radnja is the plot, the thing that "takes place" (događa se). Lik is a character and prijevod a translation. Naslovnica is the front cover.',
  },
  {
    mode: 'razgovor',
    q: 'Glavni ____ romana je mladi liječnik iz Rijeke.',
    en: 'The main character of the novel is a young doctor from Rijeka.',
    opts: ['lik', 'karakter', 'pisac', 'naslov'],
    answer: 'lik',
    tip: 'A person in a novel is a lik. Karakter means personality (Ima težak karakter), and using it for a character in a book is the slip the lesson names. Pisac is the author and naslov the title.',
  },
  {
    mode: 'razgovor',
    q: 'Sviđaju mi se ____ u tom romanu: zvuče kao pravi ljudi.',
    en: 'I like the characters in that novel: they sound like real people.',
    opts: ['likovi', 'karakteri', 'likove', 'likova'],
    answer: 'likovi',
    tip: 'With sviđati se the thing you like is the subject, so it is the nominative plural likovi. Karakteri would mean personalities, not people in a book. Likove is the accusative and likova the genitive.',
  },
  {
    mode: 'razgovor',
    q: 'Ne znam talijanski, pa taj roman čitam u ____.',
    en: 'I do not know Italian, so I am reading that novel in translation.',
    opts: ['prijevodu', 'originalu', 'rječniku', 'naslovu'],
    answer: 'prijevodu',
    tip: 'A book turned into another language is a prijevod, from prevesti. Original is the version in Italian, which is exactly what the speaker cannot read. Rječnik is a dictionary and naslov a title.',
  },
  {
    mode: 'razgovor',
    q: 'Likovi u originalu zvuče prirodnije ____ u prijevodu.',
    en: 'The characters sound more natural in the original than in the translation.',
    opts: ['nego', 'od', 'kao', 'što'],
    answer: 'nego',
    tip: 'After a comparative, "than" before a phrase with a preposition is nego: prirodnije nego u prijevodu. Od takes a bare genitive (bolji od prijevoda) and cannot stand before u. Kao means "as", and što cannot stand here alone.',
  },
  {
    mode: 'razgovor',
    q: 'Kratko prozno djelo, kraće od romana, zove se ____.',
    opts: ['pripovijetka', 'pjesma', 'drama', 'radnja'],
    answer: 'pripovijetka',
    tip: 'A pripovijetka is a short story. Pjesma is a poem, so it is not prose. Drama is a play, and radnja is the plot of any of them, not a kind of work.',
  },
  {
    mode: 'razgovor',
    q: 'Glavni lik ____ je jako zanimljiv.',
    en: 'I find the main character very interesting.',
    opts: ['mi', 'me', 'ja', 'mene'],
    answer: 'mi',
    tip: 'The character is the subject, and the person who has the opinion is in the dative: lik mi je zanimljiv. Me and mene are accusative or genitive forms. Ja is the nominative and would make "I" the subject.',
  },
  {
    mode: 'razgovor',
    q: 'O ____ govori ta knjiga?',
    en: 'What is that book about?',
    opts: ['čemu', 'što', 'čega', 'čime'],
    answer: 'čemu',
    tip: 'O takes the locative, and the locative of što is čemu: O čemu govori? Što is the nominative or accusative. Čega is the genitive and čime the instrumental.',
  },
  {
    mode: 'razgovor',
    q: 'Radnja pripovijetke ____ mladu učiteljicu na malom otoku.',
    en: 'The plot of the short story follows a young teacher on a small island.',
    opts: ['prati', 'prate', 'pratiti', 'pratim'],
    answer: 'prati',
    tip: 'Radnja is singular, so the verb is the 3rd person singular: prati. Prate is plural. Pratiti is an infinitive, and pratim is "I follow".',
  },

  // ── citanje ───────────────────────────────────────────────────────────────
  {
    mode: 'citanje',
    q: 'Usred stranice naišli ste na nepoznatu riječ. Što je najbolje učiniti?',
    opts: [
      'Čitati dalje do kraja stranice, pa se vratiti.',
      'Odmah otvoriti rječnik.',
      'Zatvoriti knjigu i uzeti lakšu.',
      'Prevesti cijelu stranicu na engleski.',
    ],
    answer: 'Čitati dalje do kraja stranice, pa se vratiti.',
    tip: 'Read the page without stopping, then go back for the few words that mattered. Reaching for the dictionary at every word turns reading into decoding. Giving up on the book or translating the page kills the pace just as surely.',
  },
  {
    mode: 'citanje',
    q: 'Koliko riječi vrijedi potražiti nakon jedne stranice?',
    opts: [
      'tri ili četiri koje su bile važne',
      'svaku nepoznatu riječ',
      'nijednu, nikada',
      'samo glagole',
    ],
    answer: 'tri ili četiri koje su bile važne',
    tip: 'Three or four words that mattered for the page are enough to keep the pace. Looking up everything is the dictionary reflex the lesson warns against. Looking up nothing leaves gaps, and the kind of word is not what counts.',
  },
  {
    mode: 'citanje',
    q: 'Toliko sam se ____ da nisam čula telefon.',
    en: 'I got so absorbed in my reading that I did not hear the phone.',
    opts: ['začitala', 'načitala', 'pročitala', 'iščitala'],
    answer: 'začitala',
    tip: 'Začitati se is to get lost in what you are reading. Načitati se is to read your fill. Pročitati and iščitati mean to read something to the end and are not used with se in this sense.',
  },
  {
    mode: 'citanje',
    q: 'Ovog sam se ljeta ____ krimića, sad želim nešto drugo.',
    en: 'I have read my fill of crime novels this summer; now I want something else.',
    opts: ['načitala', 'začitala', 'pročitala', 'čitala'],
    answer: 'načitala',
    tip: 'Načitati se + genitive is to read a lot of something, as much as you wanted: načitala sam se krimića. Začitati se is to get absorbed, with no genitive. Pročitati and čitati take a direct object and no se.',
  },
  {
    mode: 'citanje',
    q: 'Jučer sam ____ cijelu pripovijetku bez rječnika.',
    en: 'Yesterday I read the whole short story without a dictionary.',
    opts: ['pročitala', 'načitala', 'začitala', 'pročitati'],
    answer: 'pročitala',
    tip: 'Reading something to the end is perfective pročitati: pročitala sam cijelu pripovijetku. Načitati se and začitati se need se and do not take a direct object like this. Pročitati is an infinitive and cannot follow sam.',
  },
  {
    mode: 'citanje',
    q: 'Za osobu koja stalno čita kaže se da je knjiški ____.',
    opts: ['moljac', 'miš', 'leptir', 'pauk'],
    answer: 'moljac',
    tip: 'The Croatian phrase is knjiški moljac, literally a book moth, where English says bookworm. Miš (mouse), leptir (butterfly) and pauk (spider) are not part of any phrase about reading.',
  },
  {
    mode: 'citanje',
    q: 'Knjige posuđujem u ____, a kupujem u knjižari.',
    en: 'I borrow books at the library and buy them at the bookstore.',
    opts: ['knjižnici', 'čitaonici', 'tiskari', 'naslovnici'],
    answer: 'knjižnici',
    tip: 'A knjižnica lends books; a knjižara sells them. A čitaonica is a reading room, where you read on the spot. A tiskara prints books, and naslovnica is a front cover.',
  },
  {
    mode: 'citanje',
    q: 'Tko objavljuje knjige?',
    opts: ['nakladnik', 'knjižničar', 'čitatelj', 'lik'],
    answer: 'nakladnik',
    tip: 'A nakladnik is a publisher. A knjižničar is a librarian and a čitatelj is a reader. A lik is a character inside the book.',
  },
  {
    mode: 'citanje',
    q: 'Koja je knjiga najlakši početak ako želite čitati na hrvatskom?',
    opts: [
      'prijevod knjige koju već dobro poznajete',
      'najdeblji klasik koji možete naći',
      'ep iz šesnaestog stoljeća',
      'rječnik, od prve do zadnje stranice',
    ],
    answer: 'prijevod knjige koju već dobro poznajete',
    tip: 'A translated book you already know is the easiest start, because the plot carries you through the sentences you only half catch. A dense classic or a sixteenth-century epic is the summit, not the foothill, and a dictionary is not a book to read.',
  },
];
