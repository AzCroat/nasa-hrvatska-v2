// src/data/drills/a2/celebrationsHolidaysDrill.ts
//
// A2 CELEBRATIONS AND HOLIDAYS — the drill for the `celebrations-holidays` lesson.
//
// Follows Razgovarajte s nama! A2–B1, pages 18, 35, 46–47, 102, 132 and 147: the word map
// for praznik, blagdan and vikend (školski and ljetni praznici, produljeni vikend), the
// customs for visiting and the phrases for giving and receiving a present ("Izvolite!",
// "Hvala Vam! Zaista niste trebali ništa donijeti."), dressing "za proslave (za krštenje,
// svadbu…)", "Koliko ćete gostiju zvati na rođendan?", the wedding text "U dobru i zlu"
// (mladenci, matičar, kum, zdravica, the torta the couple cuts together) and "do Nove
// godine".
//
// Where the book and the lesson differ: the book has no lesson on the holidays of the
// year. It teaches celebrating through customs: going visiting, presents, weddings and
// what to wear. The calendar (Badnjak, Božić, Uskrs, Velika Gospa, Svi sveti), the
// greetings with sretan, Čestitam and the imendan come from the lesson. The drill takes
// its greetings and dates from the lesson and its party vocabulary from the book.
//
// Three modes:
//   cestitke — Sretan / Sretna…, Čestitam, and the right words for the moment
//   kalendar — the holidays of the year and the words praznik and blagdan
//   proslava — weddings, birthdays, the name day and presents

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CELEBRATIONS_HOLIDAYS_MODE_LABELS: Record<string, string> = {
  cestitke: '🎉 Čestitam!',
  kalendar: '📅 Blagdani u godini',
  proslava: '💒 Svadba i rođendan',
};

export const CELEBRATIONS_HOLIDAYS_DRILL_DATA: ModeDrillItem[] = [
  // ── cestitke ──────────────────────────────────────────────────────────────
  {
    mode: 'cestitke',
    q: 'Sretna ____!',
    en: 'Which holiday fits this greeting?',
    opts: ['Nova godina', 'Božić', 'Uskrs', 'rođendan'],
    answer: 'Nova godina',
    tip: 'Sretna is the feminine form, and of these only Nova godina is feminine. Božić, Uskrs and rođendan are masculine and take Sretan.',
  },
  {
    mode: 'cestitke',
    q: '— Sretan Božić! — Hvala, ____!',
    en: 'Merry Christmas! — Thanks, you too!',
    opts: ['i tebi', 'i ti', 'i tebe', 'i tobom'],
    answer: 'i tebi',
    tip: 'You wish something TO a person, so the reply is in the dative: i tebi. ti is the subject form, tebe the accusative or genitive, and tobom the instrumental.',
  },
  {
    mode: 'cestitke',
    q: 'Želim ti ____ Novu godinu!',
    en: 'I wish you a happy New Year!',
    opts: ['sretnu', 'sretna', 'sretan', 'sretno'],
    answer: 'sretnu',
    tip: 'After želim the wish is an object, so sretan agrees with the accusative Novu godinu: sretnu. sretna is the form of the greeting on its own, sretan is masculine, and sretno is neuter.',
  },
  {
    mode: 'cestitke',
    q: 'Baki i djedu želimo ____ Uskrs.',
    en: 'We wish Grandma and Grandpa a happy Easter.',
    opts: ['sretan', 'sretna', 'sretnu', 'sretni'],
    answer: 'sretan',
    tip: 'Uskrs is masculine and a thing, so as an object it looks like the subject form: sretan Uskrs. sretna and sretnu are feminine forms, and sretni is plural, as in Sretni blagdani.',
  },
  {
    mode: 'cestitke',
    q: 'Mladenci, čestitam vam na ____!',
    en: 'Newlyweds, congratulations on your wedding!',
    opts: ['vjenčanju', 'vjenčanje', 'vjenčanja', 'vjenčanjem'],
    answer: 'vjenčanju',
    tip: 'You congratulate someone "na" + locative: čestitam na vjenčanju. vjenčanje is the dictionary form, vjenčanja the genitive, and vjenčanjem the instrumental.',
  },
  {
    mode: 'cestitke',
    q: 'Prijatelj danas ima rođendan. Što mu kažeš?',
    en: 'It is your friend’s birthday today. What do you say to him?',
    opts: ['Sretan rođendan! Sve najbolje!', 'Živjeli! Dobar tek!', 'Sretan put!', 'Moja sućut.'],
    answer: 'Sretan rođendan! Sve najbolje!',
    tip: 'The birthday greeting is "Sretan rođendan!", and "Sve najbolje!" goes with it. "Živjeli!" is a toast and "Dobar tek!" is said before a meal, "Sretan put!" is for someone leaving on a trip, and "Moja sućut" is for a death in the family.',
  },
  {
    mode: 'cestitke',
    q: 'Kum diže čašu: „Živjeli!“ Gosti odgovaraju: „____!“',
    en: 'The best man raises his glass: "Cheers!" The guests answer…',
    opts: ['U zdravlje', 'Nema na čemu', 'Oprostite', 'Doviđenja'],
    answer: 'U zdravlje',
    tip: 'The other common toast is "U zdravlje!", to health. "Nema na čemu" answers a thank-you, "Oprostite" is an apology, and "Doviđenja" is goodbye.',
  },
  {
    mode: 'cestitke',
    q: 'Danas je mamin rođendan. Moram joj ____.',
    en: 'Today is Mom’s birthday. I have to wish her a happy birthday.',
    opts: ['čestitati', 'čestitam', 'čestitaj', 'čestitala'],
    answer: 'čestitati',
    tip: 'After moram the next verb is an infinitive: moram joj čestitati. čestitam is the present tense, čestitaj a command, and čestitala a past form.',
  },
  {
    mode: 'cestitke',
    q: 'Čestitam ____ rođendan.',
    en: 'I am wishing Grandma a happy birthday.',
    cue: 'baka',
    opts: ['baki', 'baka', 'baku', 'bakom'],
    answer: 'baki',
    tip: 'čestitati takes the person in the dative and the occasion in the accusative: čestitam baki rođendan. baka is the subject form, baku the accusative, and bakom the instrumental.',
  },

  // ── kalendar ──────────────────────────────────────────────────────────────
  {
    mode: 'kalendar',
    q: 'Badnjak je dan prije ____.',
    en: 'Christmas Eve is the day before Christmas.',
    opts: ['Božića', 'Božić', 'Božiću', 'Božićem'],
    answer: 'Božića',
    tip: 'prije takes the genitive: prije Božića. Božić is the dictionary form, Božiću the dative or locative, and Božićem the instrumental.',
  },
  {
    mode: 'kalendar',
    q: 'Bit ću u Hrvatskoj do Nove ____.',
    en: 'I will be in Croatia until New Year.',
    opts: ['godine', 'godina', 'godinu', 'godini'],
    answer: 'godine',
    tip: 'do takes the genitive, and Nove already shows it: do Nove godine. godina is the dictionary form, godinu the accusative, and godini the dative or locative.',
  },
  {
    mode: 'kalendar',
    q: 'Za Uskrs idemo k baki, a za Božić smo kod ____.',
    en: 'For Easter we go to Grandma’s, and for Christmas we are at Grandpa’s.',
    cue: 'djed',
    opts: ['djeda', 'djed', 'djedu', 'djedom'],
    answer: 'djeda',
    tip: 'kod means at someone’s place and takes the genitive: kod djeda. djed is the dictionary form, djedu is the dative (the form k would take), and djedom is the instrumental.',
  },
  {
    mode: 'kalendar',
    q: 'Na Uskrs djeca boje ____.',
    en: 'At Easter the children paint Easter eggs.',
    opts: ['pisanice', 'zdravice', 'čestitke', 'godišnjice'],
    answer: 'pisanice',
    tip: 'Decorated Easter eggs are pisanice. zdravice are toasts, čestitke are greeting cards, and godišnjice are anniversaries.',
  },
  {
    mode: 'kalendar',
    q: 'Dvadeset četvrtog prosinca je ____.',
    en: 'Which day is December 24?',
    opts: ['Badnjak', 'Božić', 'Uskrs', 'Svi sveti'],
    answer: 'Badnjak',
    tip: 'December 24 is Badnjak, Christmas Eve. Božić is the next day, December 25; Uskrs is in the spring; and Svi sveti is on November 1.',
  },
  {
    mode: 'kalendar',
    q: 'Prvog studenog je ____: ljudi nose cvijeće i svijeće na groblje.',
    en: 'Which holiday is on November 1, when people take flowers and candles to the cemetery?',
    opts: ['Svi sveti', 'Velika Gospa', 'Uskrs', 'Nova godina'],
    answer: 'Svi sveti',
    tip: 'November 1 is Svi sveti, All Saints, the day for visiting graves. Velika Gospa is on August 15, Uskrs is in the spring, and Nova godina is on January 1.',
  },
  {
    mode: 'kalendar',
    q: 'Velika Gospa je petnaestog ____.',
    en: 'In which month is the Assumption, on the 15th?',
    opts: ['kolovoza', 'prosinca', 'siječnja', 'studenog'],
    answer: 'kolovoza',
    tip: 'Velika Gospa is on August 15, and August is kolovoz: petnaestog kolovoza. prosinac is December, siječanj January, and studeni November.',
  },
  {
    mode: 'kalendar',
    q: 'U ponedjeljak je državni praznik, pa imamo produljeni ____.',
    en: 'Monday is a public holiday, so we have a long weekend.',
    opts: ['vikend', 'tjedan', 'imendan', 'Badnjak'],
    answer: 'vikend',
    tip: 'A weekend with a holiday next to it is a produljeni vikend. tjedan is a week, imendan a name day, and Badnjak is Christmas Eve.',
  },
  {
    mode: 'kalendar',
    q: 'Ljeti učenici ne idu u školu: imaju ljetne ____.',
    en: 'In the summer students do not go to school: they have summer vacation.',
    opts: ['praznike', 'praznici', 'praznika', 'praznicima'],
    answer: 'praznike',
    tip: 'What they have is the object, and the masculine plural object ends in -e: ljetne praznike. praznici is the subject form, praznika the genitive, and praznicima the dative, locative or instrumental.',
  },

  // ── proslava ──────────────────────────────────────────────────────────────
  {
    mode: 'proslava',
    q: 'Mladić i djevojka danas imaju vjenčanje. Oni su ____.',
    en: 'A young man and a young woman are getting married today. What are they called?',
    opts: ['mladenci', 'kumovi', 'matičari', 'domaćini'],
    answer: 'mladenci',
    tip: 'The couple getting married are the mladenci. kumovi are their witnesses, a matičar is the registrar who marries them, and domaćini are hosts.',
  },
  {
    mode: 'proslava',
    q: 'Na svadbi kum drži ____.',
    en: 'At the wedding the best man gives a toast.',
    opts: ['zdravicu', 'zdravica', 'zdravice', 'zdravicom'],
    answer: 'zdravicu',
    tip: 'The set phrase is držati zdravicu, and the object takes the accusative -u. zdravica is the dictionary form, zdravice the genitive or the plural, and zdravicom the instrumental.',
  },
  {
    mode: 'proslava',
    q: 'Na svadbi mladenci zajedno režu ____.',
    en: 'At the wedding the newlyweds cut the cake together.',
    opts: ['tortu', 'zdravicu', 'pisanicu', 'čestitku'],
    answer: 'tortu',
    tip: 'What the couple cuts is the torta, the wedding cake. A zdravica is a toast, a pisanica is an Easter egg, and a čestitka is a greeting card.',
  },
  {
    mode: 'proslava',
    q: 'Vjenčanje je u crkvi ili kod ____.',
    en: 'The wedding is in a church or at the registrar’s.',
    opts: ['matičara', 'matičar', 'matičaru', 'matičarom'],
    answer: 'matičara',
    tip: 'kod takes the genitive: kod matičara. matičar is the dictionary form, matičaru the dative or locative, and matičarom the instrumental.',
  },
  {
    mode: 'proslava',
    q: 'Hrvatske svadbe obično su velike, s puno ____.',
    en: 'Croatian weddings are usually big, with a lot of guests.',
    opts: ['gostiju', 'gosti', 'goste', 'gostima'],
    answer: 'gostiju',
    tip: 'puno takes the genitive plural, and gost is one of the few nouns that form it with -iju: puno gostiju. gosti is the subject form, goste the object form, and gostima the dative, locative or instrumental.',
  },
  {
    mode: 'proslava',
    q: 'Za krštenje i svadbu ljudi se oblače vrlo lijepo i ____.',
    en: 'For a christening and a wedding people dress very nicely and formally.',
    opts: ['svečano', 'svečan', 'svečana', 'svečani'],
    answer: 'svečano',
    tip: 'How people dress is an adverb, the neuter form of the adjective: svečano, just like lijepo before it. svečan, svečana and svečani are adjective forms that need a noun.',
  },
  {
    mode: 'proslava',
    q: 'Ivan slavi rođendan u ožujku, a 24. lipnja, na dan svetog Ivana, slavi ____.',
    en: 'Ivan celebrates his birthday in March, and on June 24, the day of Saint John, he celebrates…',
    opts: ['imendan', 'Badnjak', 'godišnjicu', 'krštenje'],
    answer: 'imendan',
    tip: 'The day of the saint you are named after is your imendan, your name day. Badnjak is Christmas Eve, a godišnjica is an anniversary, and a krštenje is a christening.',
  },
  {
    mode: 'proslava',
    q: 'Dolazite na rođendansku večeru. Dajete cvijeće gospođi Kovač i kažete: „____!“',
    en: 'You arrive at a birthday dinner. You hand Mrs. Kovač flowers and say…',
    opts: ['Izvolite', 'Nema na čemu', 'Oprostite', 'Doviđenja'],
    answer: 'Izvolite',
    tip: 'When you hand someone a present you say Izvolite, here you are. "Nema na čemu" comes only after she thanks you, "Oprostite" is an apology, and "Doviđenja" is goodbye.',
  },
  {
    mode: 'proslava',
    q: '— Izvolite, ovo je za Vas. — Hvala Vam! Zaista niste ____ ništa donijeti.',
    en: 'Here you are, this is for you. — Thank you! You really did not have to bring anything.',
    opts: ['trebali', 'treba', 'trebaju', 'trebati'],
    answer: 'trebali',
    tip: 'niste needs the past form to complete it, and with Vi that form is plural: niste trebali. treba and trebaju are present-tense forms, and trebati is the infinitive.',
  },
];
