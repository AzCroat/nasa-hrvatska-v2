// src/data/drills/b2/businessEconomyDrill.ts
//
// B2 WORK AND THE ECONOMY — the drill for the `business-economy` lesson
// (B2 position 40).
//
// Three modes, nine items each:
//   rijeci     — the native words (dobit, gubitak, gospodarstvo, proračun, poduzetnik)
//                and the paronyms ekonomski / ekonomičan, kućni / kućanski
//   kolokacije — the prepositions and cases of the business pages: porasti za,
//                pasti na, potražnja za, porez na, dobit od, dio + genitive
//   vijesti    — reading a short piece of business news and saying what it means,
//                including the weight of the tourist season
//
// Book pages (printed numbers):
//   Razgovarajte s nama! B2 textbook — unit 8 "Novac (p)okreće svijet": 135 (unit
//   goals), 137 (PARONIMI: efektivan / efikasan, ekonomski / ekonomičan, kućni /
//   kućanski), 139–140 (the text on the economic crisis: gospodarska kriza, potrošnja,
//   careful spending), 144–145 (the text "Stari i novi poslovi": tržište rada,
//   tehnološki višak, potražnja za radnicima), 151 (Svjetski dan štednje), 153 (the
//   brojiti family: prebrojiti, nabrojiti, odbrojiti, ubrojiti).
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — thin: it has no economy unit.
//   The vocabulary turns up only in example sentences and texts: 118–119 (tržište
//   rada), 254–255 (the text on zeleno gospodarstvo and new jobs).
//
// Where the books and the lesson differ:
//   - The textbook's unit is about poverty, the crisis, saving and the labor market;
//     it does not teach dobit / gubitak, izvoz / uvoz or proračun, and it says nothing
//     about tourism. Those come from the lesson. The textbook supplies the paronyms,
//     the brojiti family and the labor-market vocabulary.
//   - The lesson calls "profit" jargon and "ekonomija" the discipline. Both words are
//     in real use, so no item offers profit against dobit or ekonomija against
//     gospodarstvo. Ekonomija appears once, as the right answer for the field of study.
//   - The textbook's news texts carry survey percentages; none of them is repeated
//     here. Numbers appear only in sentences about an unnamed company, and the lesson's
//     "around a fifth of output" for tourism is not restated as a figure.
//   - Grammar-order fence: nothing from position 41 onward (no concessive clauses, no
//     unreal conditions, no verbal adverbs, no reported speech).

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const BUSINESS_ECONOMY_MODE_LABELS: Record<string, string> = {
  rijeci: '💼 Prava riječ',
  kolokacije: '🔗 Kolokacije',
  vijesti: '📰 Poslovne vijesti',
};

export const BUSINESS_ECONOMY_DRILL_DATA: ModeDrillItem[] = [
  // ── rijeci ────────────────────────────────────────────────────────────────
  {
    mode: 'rijeci',
    q: 'Nakon tri teške godine tvrtka je napokon ostvarila ____.',
    en: 'After three hard years the company finally ended up in the black.',
    opts: ['dobit', 'gubitak', 'dug', 'trošak'],
    answer: 'dobit',
    tip: 'Dobit is the native word for what a company earns above its costs; it comes from dobiti, to get. Gubitak is the opposite, from gubiti. Dug is a debt and trošak is a cost, and neither is good news after three hard years.',
  },
  {
    mode: 'rijeci',
    q: 'Tvrtka troši više nego što zarađuje, pa će godinu završiti s ____.',
    en: 'The company spends more than it earns, so it will end the year in the red.',
    opts: ['gubitkom', 'dobiti', 'potražnjom', 'porezom'],
    answer: 'gubitkom',
    tip: 'Spending more than you earn gives a gubitak (here in the instrumental after s). Dobit is the opposite result. Potražnja is demand and porez is tax; a year does not "end with" either of them.',
  },
  {
    mode: 'rijeci',
    q: 'Turizam, industrija i poljoprivreda zajedno čine hrvatsko ____.',
    opts: ['gospodarstvo', 'kućanstvo', 'poduzetnik', 'potražnja'],
    answer: 'gospodarstvo',
    tip: 'Gospodarstvo is the word a newspaper uses for the economy of a country, the sum of all its sectors. Kućanstvo is a household. Poduzetnik (an entrepreneur) and potražnja (demand) are not neuter, so they do not even agree with hrvatsko.',
  },
  {
    mode: 'rijeci',
    q: 'Ana na fakultetu studira ____.',
    en: 'Ana is studying economics at the university.',
    opts: ['ekonomiju', 'gospodarstvo', 'dobit', 'tržište'],
    answer: 'ekonomiju',
    tip: 'Ekonomija tends to mean the discipline you study, which is the sense here. Gospodarstvo is the economy itself, the thing a minister talks about. Dobit and tržište are not fields of study.',
  },
  {
    mode: 'rijeci',
    q: 'Ovaj automobil troši vrlo malo goriva: jako je ____.',
    opts: ['ekonomičan', 'ekonomski', 'gospodarski', 'kućanski'],
    answer: 'ekonomičan',
    tip: 'Ekonomičan means economical, thrifty. Ekonomski and gospodarski mean "to do with the economy" (ekonomska kriza, gospodarski rast). Kućanski means "of the household".',
  },
  {
    mode: 'rijeci',
    q: '____ kriza pogodila je mnoge zemlje.',
    en: 'The economic crisis hit many countries.',
    opts: ['Gospodarska', 'Ekonomična', 'Kućanska', 'Kućna'],
    answer: 'Gospodarska',
    tip: 'A crisis of the economy is gospodarska kriza. Ekonomična would mean a thrifty crisis: it is the paronym for things that save money. Kućanska and kućna are about the household and the house.',
  },
  {
    mode: 'rijeci',
    q: 'Perilica i hladnjak su ____ aparati.',
    opts: ['kućanski', 'kućni', 'gospodarski', 'ekonomski'],
    answer: 'kućanski',
    tip: 'Kućanski means "of the household": kućanski aparati, kućanski poslovi. Kućni means "of the house": kućni broj, kućni ljubimac. Gospodarski and ekonomski are about the economy.',
  },
  {
    mode: 'rijeci',
    q: 'Kako se zove osoba koja pokreće i vodi vlastiti posao?',
    opts: ['poduzetnik', 'poduzeće', 'potrošač', 'dobavljač'],
    answer: 'poduzetnik',
    tip: 'Poduzetnik is an entrepreneur. Poduzeće is the company, not the person. Potrošač is a consumer and dobavljač is a supplier.',
  },
  {
    mode: 'rijeci',
    q: 'Država svake godine planira koliko će novca prikupiti i potrošiti. Taj se plan zove ____.',
    opts: ['proračun', 'račun', 'porez', 'izvoz'],
    answer: 'proračun',
    tip: 'Proračun is the budget. Račun is a bill or an account. Porez is tax, one source of the money in the budget, and izvoz is exports.',
  },

  // ── kolokacije ────────────────────────────────────────────────────────────
  {
    mode: 'kolokacije',
    q: 'Prodaja naše tvrtke porasla je ____ deset posto.',
    en: 'Our company’s sales rose by ten percent.',
    opts: ['za', 'na', 'od', 'u'],
    answer: 'za',
    tip: 'The amount of a change takes za + accusative: porasla je za deset posto. Na deset posto would mean it rose to ten percent, the level reached. Od and u do not go with porasti in this sense.',
  },
  {
    mode: 'kolokacije',
    q: 'Broj narudžbi pao je ____ najnižu razinu ove godine.',
    en: 'The number of orders fell to its lowest level this year.',
    opts: ['na', 'za', 'u', 'kod'],
    answer: 'na',
    tip: 'The level reached takes na + accusative: pao je na najnižu razinu. Za gives the size of the change (pao je za pet posto). U and kod do not combine with razina after pasti.',
  },
  {
    mode: 'kolokacije',
    q: 'Raste potražnja ____ radnicima u zdravstvu.',
    en: 'Demand for workers in health care is growing.',
    opts: ['za', 'na', 'o', 'od'],
    answer: 'za',
    tip: 'Potražnja za + instrumental: za radnicima. English "for" does not help with the case here. Na, o and od do not follow potražnja.',
  },
  {
    mode: 'kolokacije',
    q: 'Svi zaposleni plaćaju porez ____ dohodak.',
    en: 'All employees pay income tax.',
    opts: ['na', 'za', 'od', 'o'],
    answer: 'na',
    tip: 'A tax is always "on" something: porez na + accusative (porez na dohodak, porez na plaće). Za, od and o are not used after porez.',
  },
  {
    mode: 'kolokacije',
    q: 'Tvrtka je ostvarila dobit ____ dva milijuna eura.',
    en: 'The company made a profit of two million euros.',
    opts: ['od', 'za', 'na', 'o'],
    answer: 'od',
    tip: 'The size of a sum is given with od + genitive: dobit od dva milijuna eura. Za would give the amount of a change (veća za dva milijuna). Na and o do not fit after dobit.',
  },
  {
    mode: 'kolokacije',
    q: 'Turizam čini velik dio ____.',
    en: 'Tourism makes up a large part of the Croatian economy.',
    cue: 'hrvatsko gospodarstvo',
    opts: [
      'hrvatskog gospodarstva',
      'hrvatsko gospodarstvo',
      'hrvatskom gospodarstvu',
      'hrvatskim gospodarstvom',
    ],
    answer: 'hrvatskog gospodarstva',
    tip: 'Dio (a part of) takes the genitive: dio hrvatskog gospodarstva. The second option is the nominative, the third the dative or locative and the fourth the instrumental.',
  },
  {
    mode: 'kolokacije',
    q: 'Potpisali smo ugovor ____ tri godine.',
    en: 'We signed a three-year contract.',
    opts: ['na', 'kroz', 'o', 'pri'],
    answer: 'na',
    tip: 'The length a contract runs for is na + accusative: ugovor na tri godine. Kroz tri godine means "over the next three years" and does not name the length of a contract. O and pri take the locative and do not fit tri godine.',
  },
  {
    mode: 'kolokacije',
    q: 'Naša tvrtka izvozi namještaj u Austriju, a drvo ____ iz Slovenije.',
    en: 'Our company exports furniture to Austria and imports wood from Slovenia.',
    opts: ['uvozi', 'izvozi', 'ulaže', 'uvoz'],
    answer: 'uvozi',
    tip: 'Goods that come in from abroad (iz Slovenije) are imported: uvoziti, with u- for "in". Izvoziti is to export, with iz- for "out". Ulagati is to invest, and uvoz is the noun, not a verb.',
  },
  {
    mode: 'kolokacije',
    q: 'Kad je ponuda mala, a ____ velika, cijene rastu.',
    opts: ['potražnja', 'potraga', 'dobit', 'plaća'],
    answer: 'potražnja',
    tip: 'The fixed pair is ponuda i potražnja, supply and demand. Potraga is a search (for a missing person, for example). Dobit and plaća are a profit and a salary, not the partner of ponuda.',
  },

  // ── vijesti ───────────────────────────────────────────────────────────────
  {
    mode: 'vijesti',
    lead: 'Hoteli na obali bili su puni do listopada.',
    q: 'Što ova vijest govori o sezoni?',
    opts: [
      'Sezona je bila duga i uspješna.',
      'Sezona je bila kratka i slaba.',
      'Sezone ove godine nije bilo.',
      'Sezona tek počinje.',
    ],
    answer: 'Sezona je bila duga i uspješna.',
    tip: 'Sezona on its own means the tourist season. Full hotels until October mean it ran long and went well. The other three say the opposite or put it in the future.',
  },
  {
    mode: 'vijesti',
    lead: 'Izvoz raste, dok uvoz pada.',
    q: 'Što se događa?',
    opts: [
      'Zemlja prodaje više robe u inozemstvo, a kupuje manje.',
      'Zemlja kupuje više robe iz inozemstva, a prodaje manje.',
      'I prodaja i kupnja u inozemstvu rastu.',
      'Trgovina s inozemstvom se ne mijenja.',
    ],
    answer: 'Zemlja prodaje više robe u inozemstvo, a kupuje manje.',
    tip: 'Izvoz is what goes out (exports) and uvoz is what comes in (imports); dok sets the two against each other. The second option swaps them, and the last two ignore that one is rising and the other falling.',
  },
  {
    mode: 'vijesti',
    lead: 'Inflacija je usporila gospodarski rast.',
    q: 'Što se dogodilo?',
    opts: [
      'Cijene su rasle, pa gospodarstvo raste sporije.',
      'Cijene su pale, pa gospodarstvo raste brže.',
      'Plaće su porasle, pa je nestala nezaposlenost.',
      'Gospodarstvo se prestalo mijenjati.',
    ],
    answer: 'Cijene su rasle, pa gospodarstvo raste sporije.',
    tip: 'Inflacija is rising prices, and usporiti rast means the economy still grows, only more slowly. The second option reverses both halves. The news says nothing about salaries or unemployment, and slower growth is still change.',
  },
  {
    mode: 'vijesti',
    q: 'Zašto je ljeto toliko važno za hrvatsko gospodarstvo?',
    opts: [
      'Jer je turizam velik dio gospodarstva, a traje nekoliko ljetnih tjedana.',
      'Jer su ljeti porezi niži nego zimi.',
      'Jer ljeti tvrtke ne plaćaju račune.',
      'Jer se ljeti ništa ne izvozi.',
    ],
    answer: 'Jer je turizam velik dio gospodarstva, a traje nekoliko ljetnih tjedana.',
    tip: 'Tourism is a far larger part of the Croatian economy than in most European countries, and it is packed into a few summer weeks on the coast. That is why Kako je bila sezona? is a serious question. Taxes, bills and exports do not change with the summer.',
  },
  {
    mode: 'vijesti',
    q: 'Sve više ljudi ostaje bez posla. Što raste?',
    opts: ['nezaposlenost', 'dobit', 'izvoz', 'potražnja'],
    answer: 'nezaposlenost',
    tip: 'Nezaposlenost is unemployment: ne + zaposlenost. Dobit is profit, izvoz is exports and potražnja is demand; none of them describes people losing their jobs.',
  },
  {
    mode: 'vijesti',
    lead: 'Analitičari kažu da će rasti potražnja za radnicima u zdravstvu, znanosti i tehnologiji.',
    q: 'Što analitičari očekuju?',
    opts: [
      'U tim će područjima trebati više radnika.',
      'U tim će područjima biti manje posla.',
      'Plaće će u tim područjima pasti.',
      'Ta će zanimanja nestati.',
    ],
    answer: 'U tim će područjima trebati više radnika.',
    tip: 'Potražnja za radnicima is demand for workers, and rasti means it will go up: more people will be needed. Less work and disappearing jobs are the opposite, and the sentence says nothing about salaries.',
  },
  {
    mode: 'vijesti',
    q: 'Njezin posao sada obavlja stroj i tvrtki više nije potrebna. Postala je tehnološki ____.',
    opts: ['višak', 'manjak', 'gubitak', 'trošak'],
    answer: 'višak',
    tip: 'Tehnološki višak is the fixed phrase for a worker made redundant by new technology: višak means surplus. Manjak is a shortage, the opposite. Gubitak is a loss on the books and trošak is a cost.',
  },
  {
    mode: 'vijesti',
    lead: 'Mnogi su kupci postali vrlo pažljivi s novcem i kupuju samo najosnovnije.',
    q: 'Što ti kupci rade?',
    opts: ['Štede.', 'Rasipaju novac.', 'Ulažu u dionice.', 'Uzimaju kredite.'],
    answer: 'Štede.',
    tip: 'Being careful with money and buying only the basics is štedjeti, to save. Rasipati novac is to waste it. Investing in shares and taking out loans are not mentioned in the news at all.',
  },
  {
    mode: 'vijesti',
    q: 'Blagajnica je na kraju dana ____ sav novac u blagajni.',
    en: 'At the end of the day the cashier counted all the money in the register.',
    opts: ['prebrojila', 'nabrojila', 'odbrojila', 'ubrojila'],
    answer: 'prebrojila',
    tip: 'Prebrojiti is to count all of something to get the exact amount. Nabrojiti is to list things one after another. Odbrojiti is to count off a set amount, and ubrojiti is to include in a count.',
  },
];
