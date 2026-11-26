// src/data/drills/b2/politicsSocietyDrill.ts
//
// B2 POLITICS AND SOCIETY — the drill for the `politics-society` lesson
// (B2 position 15).
//
// Three modes, nine items each:
//   institucije — who is who: Sabor, Vlada, zastupnici, Ustavni sud, gradonačelnik
//   izbori      — izbori is plural only: plural verb, plural adjective, plural cases
//   vijesti     — the sentences of political reporting: who proposes and who passes,
//                 raspravljati o, u skladu s, oporba, odaziv
//
// Book pages (printed numbers):
//   Razgovarajte s nama! B2 textbook — 152–153 (the text "Hrvatski sabor": what the
//   word sabor means, the Sabor as the representative body of the citizens and the
//   holder of legislative power, 100 to 160 members, a four-year term, and the
//   questions on zakonodavna and izvršna vlast).
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — thin: there is no politics unit.
//   The vocabulary only appears in example sentences and one gap text: 84–85
//   (pobijediti na izborima), 112–113 (oporba, vladajuća stranka), 152–153 (sjednica Hrvatskog
//   sabora, sjednica Vlade), 156–157 (the text "Za i protiv pristupanja EU-u":
//   referendum, glasovati za, birači).
//
// Where the books and the lesson differ:
//   - The textbook says the Sabor is "predstavničko tijelo građana i nositelj
//     zakonodavne vlasti (parlament)", so it uses parlament as a description. The
//     lesson says the institution is always named Sabor. No item marks parlament
//     wrong for Croatia; it is the answer only for the European one.
//   - The textbook covers the history of the Sabor and its size; the lesson covers
//     the present-day institutions, elections and the EU. The izbori agreement rule
//     comes from the lesson only (the textbook just uses the word in the plural).
//   - The lesson accepts both glasati and glasovati, so they are never offered
//     against each other.
//   - Only institutions and offices are named: no politicians, no parties, nothing
//     about current events.
//   - Grammar-order fence: no passive (so no "izbori su održani" and no se-passive
//     beyond the lesson's own vocabulary), no participial adjectives, no verbal nouns
//     other than the lesson's own word pristupanje, no conditional, no reported speech.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const POLITICS_SOCIETY_MODE_LABELS: Record<string, string> = {
  institucije: '🏛️ Institucije',
  izbori: '🗳️ Izbori',
  vijesti: '📰 U vijestima',
};

export const POLITICS_SOCIETY_DRILL_DATA: ModeDrillItem[] = [
  // ── institucije ───────────────────────────────────────────────────────────
  {
    mode: 'institucije',
    q: 'Što znači stara riječ „sabor“?',
    opts: [
      'skup narodnih predstavnika',
      'zgrada u kojoj radi sud',
      'politička stranka',
      'glavni grad države',
    ],
    answer: 'skup narodnih predstavnika',
    tip: 'Sabor comes from sabrati, to gather: an assembly of the representatives of the people. It is not a court building, a party or a capital city; the word is centuries older than the modern state.',
  },
  {
    mode: 'institucije',
    q: 'Koliko traje mandat zastupnika u Hrvatskom saboru?',
    opts: ['četiri godine', 'dvije godine', 'šest godina', 'deset godina'],
    answer: 'četiri godine',
    tip: 'Members of the Sabor are elected for a period of four years. Two, six and ten years are terms found in other countries or for other offices, not for the Sabor.',
  },
  {
    mode: 'institucije',
    q: 'Kako se zovu članovi Sabora?',
    opts: ['zastupnici', 'ministri', 'župani', 'birači'],
    answer: 'zastupnici',
    tip: 'A zastupnik represents (zastupa) the citizens in the Sabor. Ministri sit in the Government. Župani lead counties, and birači are the voters who elect all of them.',
  },
  {
    mode: 'institucije',
    q: 'Tko odlučuje je li neki zakon u skladu s Ustavom?',
    opts: ['Ustavni sud', 'Vlada', 'gradonačelnik', 'premijer'],
    answer: 'Ustavni sud',
    tip: 'Ustavni sud is the Constitutional Court; its name comes from Ustav, the Constitution. The Government proposes laws, a mayor runs a city and the Prime Minister leads the Government; none of them rules on the Constitution.',
  },
  {
    mode: 'institucije',
    q: 'Tko je na čelu grada?',
    opts: ['gradonačelnik', 'župan', 'ministar', 'zastupnik'],
    answer: 'gradonačelnik',
    tip: 'Gradonačelnik is literally the head (načelnik) of the city (grad). A župan leads a county, a ministar leads a ministry and a zastupnik sits in the Sabor.',
  },
  {
    mode: 'institucije',
    q: 'Drugi naziv za premijera je predsjednik ____.',
    opts: ['Vlade', 'Sabora', 'države', 'stranke'],
    answer: 'Vlade',
    tip: 'The Prime Minister is predsjednik Vlade, the president of the Government. Predsjednik Sabora chairs the parliament, predsjednik države is the head of state, and predsjednik stranke leads a party.',
  },
  {
    mode: 'institucije',
    q: 'Sjednica Hrvatskog ____ počinje u devet.',
    en: 'The session of the Croatian Parliament begins at nine.',
    cue: 'sabor',
    opts: ['sabora', 'sabor', 'saboru', 'saborom'],
    answer: 'sabora',
    tip: 'A session "of" something takes the genitive: sjednica Hrvatskog sabora. Sabor is the nominative, saboru the dative or locative and saborom the instrumental, and none of them matches Hrvatskog.',
  },
  {
    mode: 'institucije',
    q: 'Europski ____ zasjeda u Strasbourgu i Bruxellesu.',
    opts: ['parlament', 'sabor', 'župan', 'birač'],
    answer: 'parlament',
    tip: 'Parlament is the general word, used for the European one and for other countries. Sabor is the name of the Croatian parliament only. Župan and birač are people, not institutions.',
  },
  {
    mode: 'institucije',
    q: 'Zemlja koja pripada Europskoj uniji njezina je ____.',
    opts: ['članica', 'stranka', 'zastupnica', 'županija'],
    answer: 'članica',
    tip: 'A member state is a članica: Hrvatska je članica Europske unije. Stranka is a political party, zastupnica is a woman member of parliament and županija is a county inside Croatia.',
  },

  // ── izbori ────────────────────────────────────────────────────────────────
  {
    mode: 'izbori',
    q: 'Izbori ____ u nedjelju.',
    en: 'The elections were on Sunday.',
    opts: ['su bili', 'je bio', 'su bile', 'je bilo'],
    answer: 'su bili',
    tip: 'Izbori is a masculine plural noun with no singular in this sense, so the verb is plural and masculine: su bili. Je bio is singular. Su bile is feminine plural, and je bilo is the neuter singular.',
  },
  {
    mode: 'izbori',
    q: '____ izbori bit će na proljeće.',
    en: 'The local elections will be in the spring.',
    opts: ['Lokalni', 'Lokalne', 'Lokalna', 'Lokalno'],
    answer: 'Lokalni',
    tip: 'The adjective agrees with the masculine plural izbori: lokalni izbori. Lokalne is feminine plural, lokalna is feminine singular or neuter plural, and lokalno is neuter singular.',
  },
  {
    mode: 'izbori',
    q: 'Stranka se priprema za ____.',
    en: 'The party is preparing for the parliamentary elections.',
    cue: 'parlamentarni izbori',
    opts: [
      'parlamentarne izbore',
      'parlamentarni izbori',
      'parlamentarnih izbora',
      'parlamentarnim izborima',
    ],
    answer: 'parlamentarne izbore',
    tip: 'Za takes the accusative, and the accusative plural of izbori is izbore: za parlamentarne izbore. The second option is the nominative, the third the genitive and the fourth the dative, locative or instrumental.',
  },
  {
    mode: 'izbori',
    q: 'Pobijedili su na ____.',
    en: 'They won the elections.',
    cue: 'izbori',
    opts: ['izborima', 'izbore', 'izbora', 'izboru'],
    answer: 'izborima',
    tip: 'Winning "at" the elections is na + locative plural: na izborima. Izbore is the accusative and izbora the genitive. Izboru is singular, and the singular izbor means a choice, not an election.',
  },
  {
    mode: 'izbori',
    q: 'Što znači imenica „izbor“ u jednini?',
    opts: ['a choice or a selection', 'one election day', 'a voter', 'a ballot paper'],
    answer: 'a choice or a selection',
    tip: 'The singular izbor exists but means a choice: Imate velik izbor. The political event is always the plural izbori. A voter is birač, and a ballot paper is glasački listić.',
  },
  {
    mode: 'izbori',
    q: 'U kojoj se rečenici sve riječi slažu s imenicom „izbori“?',
    opts: [
      'Izbori su bili mirni.',
      'Izbori je bio miran.',
      'Izbor su bili mirni.',
      'Izbori su bile mirne.',
    ],
    answer: 'Izbori su bili mirni.',
    tip: 'Plural verb and masculine plural adjective: izbori su bili mirni. The second option makes everything singular. The third puts a singular noun with a plural verb, and the fourth uses feminine endings.',
  },
  {
    mode: 'izbori',
    q: 'Nakon ____ nova Vlada počinje raditi.',
    en: 'After the elections the new Government starts work.',
    cue: 'izbori',
    opts: ['izbora', 'izbore', 'izborima', 'izbori'],
    answer: 'izbora',
    tip: 'Nakon takes the genitive, and the genitive plural of izbori is izbora. Izbore is the accusative, izborima the dative, locative or instrumental, and izbori the nominative.',
  },
  {
    mode: 'izbori',
    q: 'Osoba koja ima pravo glasa na izborima zove se ____.',
    opts: ['birač', 'zastupnik', 'ministar', 'župan'],
    answer: 'birač',
    tip: 'Birač comes from birati, to choose: the voter. A zastupnik is the person the voters elect to the Sabor. A ministar and a župan hold offices; they are not the people who cast the votes.',
  },
  {
    mode: 'izbori',
    q: 'Na referendumu su građani ____ za pristupanje Europskoj uniji.',
    en: 'In the referendum the citizens voted for accession to the European Union.',
    opts: ['glasovali', 'izglasali', 'izabrali', 'predložili'],
    answer: 'glasovali',
    tip: 'To vote for something is glasovati za + accusative. Izglasati means to pass a law by a vote and takes a direct object, not za. Izabrati is to elect a person, and predložiti is to propose.',
  },

  // ── vijesti ───────────────────────────────────────────────────────────────
  {
    mode: 'vijesti',
    q: 'Vlada je predložila zakon, a Sabor ____ je izglasao.',
    en: 'The Government proposed the law, and Parliament passed it.',
    opts: ['ga', 'mu', 'njega', 'on'],
    answer: 'ga',
    tip: 'Zakon is masculine, and "it" as a direct object is the short accusative ga, placed before je. Mu is the dative. Njega is the long form, used only for emphasis, and on is the nominative.',
  },
  {
    mode: 'vijesti',
    q: 'Zastupnici su do kasno u noć raspravljali ____ proračunu.',
    en: 'The members of parliament debated the budget late into the night.',
    opts: ['o', 'na', 'za', 'u'],
    answer: 'o',
    tip: 'Raspravljati o + locative: o proračunu. English "debated the budget" has no preposition, which is why it is easy to drop. Na, za and u do not go with raspravljati in this meaning.',
  },
  {
    mode: 'vijesti',
    q: 'Ustavni sud odlučio je da zakon nije u skladu ____ Ustavom.',
    en: 'The Constitutional Court ruled that the law is not in line with the Constitution.',
    opts: ['s', 'po', 'na', 'od'],
    answer: 's',
    tip: 'The fixed phrase is u skladu s + instrumental: u skladu s Ustavom. Po takes the locative (po Ustavu) and cannot stand before Ustavom. Na and od do not follow u skladu.',
  },
  {
    mode: 'vijesti',
    lead: 'Odaziv birača bio je nizak.',
    q: 'Što to znači?',
    opts: [
      'Malo je ljudi izašlo na izbore.',
      'Mnogo je ljudi izašlo na izbore.',
      'Izbora uopće nije bilo.',
      'Svi su glasovali za istu stranku.',
    ],
    answer: 'Malo je ljudi izašlo na izbore.',
    tip: 'Odaziv is turnout, the share of voters who came out to vote, so a low odaziv means few people voted. The second option is a high turnout. The news does not say the elections were missing or how people voted.',
  },
  {
    mode: 'vijesti',
    q: 'Gradonačelnik je ____ nove mjere za promet u centru.',
    en: 'The mayor announced new traffic measures for the center.',
    opts: ['najavio', 'javio', 'odjavio', 'prijavio'],
    answer: 'najavio',
    tip: 'Najaviti is to announce something that is coming: najavio je mjere. Javiti is to let someone know a piece of news. Odjaviti is to sign out or cancel a registration, and prijaviti is to report or register.',
  },
  {
    mode: 'vijesti',
    q: 'Koja rečenica točno kaže tko što radi sa zakonom?',
    opts: [
      'Vlada predlaže zakon, a Sabor ga izglasava.',
      'Sabor predlaže zakon, a Vlada ga izglasava.',
      'Birači predlažu zakon, a župan ga izglasava.',
      'Ustavni sud predlaže zakon, a gradonačelnik ga izglasava.',
    ],
    answer: 'Vlada predlaže zakon, a Sabor ga izglasava.',
    tip: 'In Croatian reporting the Government proposes (predlaže) and the Sabor passes (izglasava). Giving the Government the vote is the mistake the lesson names. Voters, prefects, the Constitutional Court and mayors do not pass national laws.',
  },
  {
    mode: 'vijesti',
    q: 'Sabor je predstavničko tijelo ____.',
    en: 'The Sabor is the representative body of the citizens.',
    cue: 'građani',
    opts: ['građana', 'građani', 'građanima', 'građane'],
    answer: 'građana',
    tip: 'A body "of" the citizens takes the genitive plural: tijelo građana. Građani is the nominative, građanima the dative, locative or instrumental, and građane the accusative.',
  },
  {
    mode: 'vijesti',
    q: 'U Saboru sjede zastupnici većine i ____, koja kritizira Vladu.',
    opts: ['oporba', 'odaziv', 'uprava', 'obrana'],
    answer: 'oporba',
    tip: 'Oporba is the opposition, the parties that are not in power. Odaziv is turnout. Uprava is an administration or a management board, and obrana is defense.',
  },
  {
    mode: 'vijesti',
    q: 'Koja rečenica točno opisuje podjelu vlasti u Hrvatskoj?',
    opts: [
      'Sabor ima zakonodavnu vlast, a Vlada izvršnu.',
      'Vlada ima zakonodavnu vlast, a Sabor izvršnu.',
      'Ustavni sud ima zakonodavnu vlast, a župani izvršnu.',
      'Birači imaju izvršnu vlast, a stranke zakonodavnu.',
    ],
    answer: 'Sabor ima zakonodavnu vlast, a Vlada izvršnu.',
    tip: 'The Sabor holds legislative power (zakonodavna vlast: it makes the laws) and the Government holds executive power (izvršna vlast: it carries them out). The second option swaps them. Courts, prefects, voters and parties hold neither of these two.',
  },
];
