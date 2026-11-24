// src/data/drills/a2/accusativeDeepDrill.ts
//
// A2 ACCUSATIVE: MOTION AND DIRECT OBJECTS — the drill for the `accusative-deep` lesson.
//
// Follows Razgovarajte s nama! A2–B1, lesson 2 "Kad će taj vikend", pages 30–33, 39 and 40:
// the text about Tanja and Marin's weekend house and the AKUZATIV box on page 30 ("Koga
// čekate? Što čekate? Kamo idete?" — "Vikendica ima vrt": izravni objekt; "Idu za vikend na
// selo": vrijeme, cilj), the phone call "Idemo svi u našu vikendicu!" on page 31 (velik
// kamin, zelenu dolinu, našeg prvog susjeda, bilježnicu), the AKUZATIV PRIDJEVA table on
// page 32 with its note that the masculine singular separates živo from neživo (dobrog
// susjeda, zelen vrt, u maleno selo), Marin's e-mail on page 33 (vatru za roštilj), "Idemo u
// trgovinu" on page 39 and the possessive table on page 40 (našeg / naš, njezinog / njezin).
//
// Where the book and the lesson differ: the book asks Koga? Što? Kamo? and names the uses
// (izravni objekt, vrijeme, cilj), and shows animacy only in the adjective table; the lesson
// explains it with noun endings (brat → brata, pas → psa, grad → grad) and sets u/na +
// accusative against the locative, which the book treats as known from A1. The drill uses
// the book's people and words for the lesson's three points. The book's plural examples
// (drage prijatelje, velike sobe), "u svoju vikendicu" and "po stvari" are left out: the
// plural cases and svoj come later in the course, and the lesson does not teach po.
//
// Three modes:
//   objekt — the direct object: -u for feminine, no change for neuter and masculine things
//   kamo   — motion toward a place (u, na + accusative) against where something is; za, kroz
//   zivo   — masculine people and animals take -a (and -og on the adjective); things do not

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ACCUSATIVE_DEEP_MODE_LABELS: Record<string, string> = {
  objekt: '🎯 Koga? Što?',
  kamo: '🧭 Kamo idete?',
  zivo: '🐕 Živo i neživo',
};

export const ACCUSATIVE_DEEP_DRILL_DATA: ModeDrillItem[] = [
  // ── objekt ────────────────────────────────────────────────────────────────
  {
    mode: 'objekt',
    q: 'Tanja i Marin imaju lijepu ____ blizu Delnica.',
    en: 'Tanja and Marin have a beautiful weekend house near Delnice.',
    opts: ['vikendicu', 'vikendica', 'vikendice', 'vikendici'],
    answer: 'vikendicu',
    tip: 'The weekend house is what they have, the direct object, and a feminine noun changes -a to -u: vikendicu (lijepu shows it too). vikendica is the dictionary form, vikendice the genitive, vikendici the dative or locative.',
  },
  {
    mode: 'objekt',
    q: 'Vikendica ima malen ____.',
    en: 'The weekend house has a small garden.',
    opts: ['vrt', 'vrta', 'vrtu', 'vrtom'],
    answer: 'vrt',
    tip: 'A garden is a masculine thing, not a living being, so as a direct object it does not change: ima vrt. vrta would be the ending for a person or an animal (and is the genitive), vrtu is the dative or locative, vrtom the instrumental.',
  },
  {
    mode: 'objekt',
    q: 'S balkona vidimo predivnu zelenu ____.',
    en: 'From the balcony we see a gorgeous green valley.',
    opts: ['dolinu', 'dolina', 'doline', 'dolini'],
    answer: 'dolinu',
    tip: 'What we see is the direct object, and the feminine dolina takes -u, just like its adjectives predivnu and zelenu: dolinu. dolina is the dictionary form, doline the genitive, dolini the dative or locative.',
  },
  {
    mode: 'objekt',
    q: 'Iz auta već vidimo maleno ____.',
    en: 'From the car we can already see the small village.',
    opts: ['selo', 'sela', 'selu', 'selom'],
    answer: 'selo',
    tip: 'A neuter noun looks the same as a direct object as it does in the dictionary: vidimo selo, with maleno unchanged too. sela is the genitive, selu the dative or locative, selom the instrumental.',
  },
  {
    mode: 'objekt',
    q: '____ čekate? — Čekamo susjeda Ivana.',
    en: 'Whom are you waiting for? — We are waiting for our neighbor Ivan.',
    opts: ['Koga', 'Što', 'Tko', 'Kamo'],
    answer: 'Koga',
    tip: 'The answer is a person as a direct object, so the question word is the accusative Koga. Što asks about a thing, Tko asks who is doing the waiting, and Kamo asks where someone is going.',
  },
  {
    mode: 'objekt',
    q: 'Tanju zove Martina.',
    opts: [
      'Martina is calling Tanja.',
      'Tanja is calling Martina.',
      'Tanja and Martina are calling.',
      'Martina is called Tanja.',
    ],
    answer: 'Martina is calling Tanja.',
    tip: 'The ending decides, not the word order: Tanju has the accusative -u, so Tanja is the one being called, and Martina, in the dictionary form, is the caller. For Tanja to be the caller the sentence would be "Tanja zove Martinu"; the other two ignore the -u.',
  },
  {
    mode: 'objekt',
    lead: 'Ovo je naša kuća.',
    q: 'Vidiš li ____ kuću?',
    en: 'This is our house. — Do you see our house?',
    opts: ['našu', 'naša', 'naše', 'našoj'],
    answer: 'našu',
    tip: 'kuću is now the direct object, and the word in front of it follows it into the accusative: našu kuću. naša is the subject form from the first sentence, naše is the genitive, našoj the dative or locative.',
  },
  {
    mode: 'objekt',
    q: 'Za salatu trebamo još jednu ____.',
    en: 'For the salad we need one more tomato.',
    opts: ['rajčicu', 'rajčica', 'rajčice', 'rajčici'],
    answer: 'rajčicu',
    tip: 'The tomato is what we need, the direct object, and jednu already shows the feminine accusative: jednu rajčicu. rajčica is the dictionary form, rajčice the genitive, rajčici the dative or locative.',
  },
  {
    mode: 'objekt',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct? (Tanja is bringing Martina a notebook.)',
    opts: [
      'Tanja nosi Martini bilježnicu.',
      'Tanja nosi Martini bilježnica.',
      'Tanja nosi Martinu bilježnici.',
      'Tanja nosi Martini bilježnicom.',
    ],
    answer: 'Tanja nosi Martini bilježnicu.',
    tip: 'The thing being brought is the direct object in the accusative (bilježnicu), and the person who gets it is in the dative (Martini). bilježnica is the dictionary form, "Martinu bilježnici" swaps the two cases, and bilježnicom is the instrumental.',
  },

  // ── kamo ──────────────────────────────────────────────────────────────────
  {
    mode: 'kamo',
    q: 'Za vikend idemo na ____.',
    en: 'For the weekend we are going to the countryside.',
    opts: ['selo', 'selu', 'sela', 'selom'],
    answer: 'selo',
    tip: 'idemo is movement toward a place, so na takes the accusative, and a neuter noun does not change: na selo. na selu is the locative, for being there already; sela is the genitive and selom the instrumental.',
  },
  {
    mode: 'kamo',
    q: 'Tanja i Marin su sada na ____.',
    en: 'Tanja and Marin are in the countryside now.',
    opts: ['selu', 'selo', 'sela', 'selom'],
    answer: 'selu',
    tip: 'They are already there, a position and not movement, so na takes the locative: na selu. na selo is the accusative, used with a verb of going; sela is the genitive and selom the instrumental.',
  },
  {
    mode: 'kamo',
    q: 'Idemo sada u ____. Trebamo kruh i meso.',
    en: 'Let us go to the store now. We need bread and meat.',
    opts: ['trgovinu', 'trgovini', 'trgovina', 'trgovine'],
    answer: 'trgovinu',
    tip: 'Going into a place is u + accusative, and a feminine noun takes -u: u trgovinu. u trgovini is the locative, for when you are inside; trgovina is the dictionary form and trgovine the genitive.',
  },
  {
    mode: 'kamo',
    q: '____ idete za vikend? — U Gorski kotar.',
    en: 'Where are you going for the weekend? — To Gorski kotar.',
    opts: ['Kamo', 'Gdje', 'Odakle', 'Kako'],
    answer: 'Kamo',
    tip: 'Kamo asks where to, and its answer is in the accusative: u Gorski kotar. Gdje asks where something is and would be answered with the locative (u Gorskom kotaru), Odakle asks where from, and Kako asks how.',
  },
  {
    mode: 'kamo',
    q: 'Gdje je Marin? — U ____.',
    cue: 'vikendica',
    en: 'Where is Marin? — In the weekend house.',
    opts: ['vikendici', 'vikendicu', 'vikendica', 'vikendice'],
    answer: 'vikendici',
    tip: 'Gdje asks where someone is, so u takes the locative: u vikendici. vikendicu is the accusative you use for going there (Marin ide u vikendicu), vikendica is the dictionary form, and vikendice is the genitive.',
  },
  {
    mode: 'kamo',
    q: 'Imamo malen vrt, pravi raj za vašu ____.',
    en: 'We have a small garden, a real paradise for your little girl.',
    opts: ['djevojčicu', 'djevojčica', 'djevojčice', 'djevojčici'],
    answer: 'djevojčicu',
    tip: 'za takes the accusative, and vašu already shows it: za vašu djevojčicu. djevojčica is the dictionary form, djevojčice the genitive, and djevojčici the dative, which za never takes.',
  },
  {
    mode: 'kamo',
    q: 'Do vikendice se vozimo kroz ____.',
    en: 'To get to the weekend house we drive through the forest.',
    opts: ['šumu', 'šuma', 'šume', 'šumi'],
    answer: 'šumu',
    tip: 'kroz always takes the accusative, because it is movement through something: kroz šumu. šuma is the dictionary form, šume the genitive, and šumi the locative you would use after u for being in the forest.',
  },
  {
    mode: 'kamo',
    q: 'Marin ide u vikendicu.',
    opts: [
      'Marin is going to the weekend house.',
      'Marin is in the weekend house.',
      'Marin is coming from the weekend house.',
      'Marin has a weekend house.',
    ],
    answer: 'Marin is going to the weekend house.',
    tip: 'u + the accusative -u means movement into a place: he is on his way there. Being inside would be "Marin je u vikendici", coming from it would be "iz vikendice", and having one would be "Marin ima vikendicu", with no u.',
  },
  {
    mode: 'kamo',
    q: 'Koja rečenica odgovara na pitanje „Kamo ideš?“',
    en: 'Which sentence answers the question "Where are you going?"',
    opts: [
      'Idem na predavanje.',
      'Na predavanju sam.',
      'Dolazim s predavanja.',
      'Imam predavanje.',
    ],
    answer: 'Idem na predavanje.',
    tip: 'Kamo asks where to, so the answer needs movement and na + accusative: Idem na predavanje. "Na predavanju sam" says where you are (locative), "Dolazim s predavanja" says where you are coming from, and "Imam predavanje" names no place at all.',
  },
  {
    mode: 'kamo',
    q: 'U ____ idemo na izlet u Gorski kotar.',
    en: 'On Saturday we are going on a trip to Gorski kotar.',
    opts: ['subotu', 'subota', 'suboti', 'subote'],
    answer: 'subotu',
    tip: 'The accusative also says when: u + a day of the week takes the accusative, so u subotu. subota is the dictionary form, suboti the dative or locative, and subote the genitive.',
  },

  // ── zivo ──────────────────────────────────────────────────────────────────
  {
    mode: 'zivo',
    q: 'Marin večeras zove našeg prvog ____.',
    en: 'Tonight Marin is calling our next-door neighbor.',
    opts: ['susjeda', 'susjed', 'susjedu', 'susjedom'],
    answer: 'susjeda',
    tip: 'A neighbor is a living masculine noun, so as a direct object it takes -a, and našeg prvog already has the matching ending: susjeda. susjed is the dictionary form, which only things keep; susjedu is the dative and susjedom the instrumental.',
  },
  {
    mode: 'zivo',
    lead: 'To je naš dobri susjed.',
    q: 'Imamo ____ susjeda.',
    en: 'That is our good neighbor. — We have a good neighbor.',
    opts: ['dobrog', 'dobri', 'dobar', 'dobru'],
    answer: 'dobrog',
    tip: 'The adjective follows a living masculine noun into the accusative with -og: dobrog susjeda. dobri and dobar are the forms for the subject, or for a thing as an object (dobar vrt), and dobru is feminine.',
  },
  {
    mode: 'zivo',
    q: 'Izaberi točnu rečenicu.',
    en: 'Which sentence is correct? (The living room has a big fireplace.)',
    opts: [
      'Dnevna soba ima velik kamin.',
      'Dnevna soba ima velikog kamina.',
      'Dnevna soba ima veliku kaminu.',
      'Dnevna soba ima velikom kaminu.',
    ],
    answer: 'Dnevna soba ima velik kamin.',
    tip: 'A fireplace is a masculine thing, so neither the noun nor the adjective changes: velik kamin. "velikog kamina" is the pattern for people and animals, "veliku" is a feminine ending on a masculine noun, and "velikom kaminu" is the locative.',
  },
  {
    mode: 'zivo',
    q: 'Tanja čeka ____ ispred fakulteta.',
    en: 'Tanja is waiting for her brother in front of the university.',
    cue: 'brat',
    opts: ['brata', 'brat', 'bratu', 'bratom'],
    answer: 'brata',
    tip: 'A brother is a person, so the masculine noun takes -a as a direct object: čeka brata. brat is the subject form and would stay that way only for a thing, bratu is the dative (to her brother), and bratom the instrumental.',
  },
  {
    mode: 'zivo',
    q: 'Susjed Ivan ima velikog ____.',
    en: 'Our neighbor Ivan has a big dog.',
    opts: ['psa', 'pas', 'psu', 'psom'],
    answer: 'psa',
    tip: 'An animal counts as living too, and velikog already shows it: velikog psa. Note that pas loses its a before the ending. pas is the dictionary form, psu the dative or locative, and psom the instrumental.',
  },
  {
    mode: 'zivo',
    q: 'Koji je par točan?',
    en: 'Which pair is correct? (I see the neighbor and I see the garden.)',
    opts: [
      'Vidim susjeda i vidim vrt.',
      'Vidim susjed i vidim vrt.',
      'Vidim susjeda i vidim vrta.',
      'Vidim susjed i vidim vrta.',
    ],
    answer: 'Vidim susjeda i vidim vrt.',
    tip: 'Both nouns are masculine, but only the neighbor is alive: susjed takes -a (susjeda) and vrt stays as it is. "Vidim susjed" treats a person like a thing, and "vidim vrta" treats a garden like a living being.',
  },
  {
    mode: 'zivo',
    q: 'Koga zovete na roštilj? — ____.',
    en: 'Whom are you inviting to the barbecue? — Josip.',
    opts: ['Josipa', 'Josip', 'Josipu', 'Josipom'],
    answer: 'Josipa',
    tip: 'Koga asks for a person in the accusative, and a man’s name takes -a like any living masculine noun: Josipa. Josip is the subject form and would answer Tko?, Josipu is the dative, and Josipom the instrumental.',
  },
  {
    mode: 'zivo',
    q: 'Marin večeras gleda ____ film.',
    en: 'Tonight Marin is watching a new movie.',
    opts: ['novi', 'novog', 'novu', 'novom'],
    answer: 'novi',
    tip: 'A movie is a masculine thing, so the adjective keeps its subject form as an object: novi film. novog is only for people and animals (novog susjeda), novu is feminine, and novom is the locative or instrumental.',
  },
  {
    mode: 'zivo',
    q: 'Tanja dobro poznaje Martinu i ____ muža.',
    en: 'Tanja knows Martina and her husband well.',
    opts: ['njezinog', 'njezin', 'njezinu', 'njezinom'],
    answer: 'njezinog',
    tip: 'muža is a living masculine noun in the accusative, so the possessive takes -og with it: njezinog muža. njezin is the form for the subject or for a thing (njezin vrt), njezinu is feminine (njezinu sestru), and njezinom is the locative or instrumental.',
  },
];
