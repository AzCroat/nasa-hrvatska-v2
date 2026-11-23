// src/data/drills/a2/prepositionsActionDrill.ts
//
// A2 PREPOSITIONS IN ACTION — the drill for the `prepositions-action` lesson.
//
// Follows Razgovarajte s nama! A2–B1, pages 31, 54–55 and 82: the accusative for a goal
// ("Idu za vikend na selo" — VRIJEME, CILJ), the weekend in Opatija and the locative for a
// place ("Oni provode vikend u Istri" — MJESTO), and the people in the
// street dialogue (bez auta, k jednom partneru, iz Amerike). The book gives no single
// preposition table at this level, so the set of prepositions is the lesson's own.
//
// Three modes:
//   kamoGdje — u / na: the accusative for where to, the locative for where
//   genitiv  — iz, od, do, bez, kod + genitive
//   sKim     — s / sa + instrumental, k / ka + dative

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PREPOSITIONS_ACTION_MODE_LABELS: Record<string, string> = {
  kamoGdje: '🧭 Kamo? Gdje?',
  genitiv: '📦 iz, od, do, bez, kod',
  sKim: '🤝 s / sa, k / ka',
};

export const PREPOSITIONS_ACTION_DRILL_DATA: ModeDrillItem[] = [
  // ── kamoGdje ──────────────────────────────────────────────────────────────
  {
    mode: 'kamoGdje',
    q: 'Ovaj vikend smo ____.',
    en: 'This weekend we are in Istria.',
    opts: ['u Istri', 'u Istru', 'na Istri', 'iz Istre'],
    answer: 'u Istri',
    tip: 'Being somewhere is u + locative: u Istri. u Istru is the accusative and means going there, a region takes u and not na, and iz Istre means from Istria.',
  },
  {
    mode: 'kamoGdje',
    q: 'Sutra putujemo ____.',
    en: 'Tomorrow we are traveling to Opatija.',
    opts: ['u Opatiju', 'u Opatiji', 'na Opatiju', 'kod Opatije'],
    answer: 'u Opatiju',
    tip: 'Traveling to a town is movement, so u + accusative: u Opatiju. u Opatiji says you are already there, a town takes u and not na, and kod Opatije means near Opatija.',
  },
  {
    mode: 'kamoGdje',
    q: 'Sjedimo na ____ i pijemo kavu.',
    en: 'We are sitting on the balcony drinking coffee.',
    opts: ['balkonu', 'balkon', 'balkona', 'balkonom'],
    answer: 'balkonu',
    tip: 'Sitting is a position, so na takes the locative: na balkonu. balkon is the accusative for going out onto it, balkona is the genitive, balkonom the instrumental.',
  },
  {
    mode: 'kamoGdje',
    q: 'Konobar nosi kavu na ____.',
    en: 'The waiter is carrying the coffee out to the beach.',
    opts: ['plažu', 'plaži', 'plaže', 'plaža'],
    answer: 'plažu',
    tip: 'He is carrying it there, so this is movement: na + accusative, plažu. plaži would mean he is carrying it around on the beach, plaže is the genitive, plaža the dictionary form.',
  },
  {
    mode: 'kamoGdje',
    q: 'Za vikend idemo ____.',
    en: 'For the weekend we are going to the countryside.',
    opts: ['na selo', 'na selu', 'u selu', 'iz sela'],
    answer: 'na selo',
    tip: 'idemo is movement, so the accusative: na selo. na selu and u selu are locatives and say where you already are, and iz sela means out of the village.',
  },
  {
    mode: 'kamoGdje',
    q: 'Baka živi ____.',
    en: 'Grandma lives in the countryside.',
    opts: ['na selu', 'na selo', 'u selo', 'kod sela'],
    answer: 'na selu',
    tip: 'Living somewhere is a position, so the locative: na selu. na selo and u selo are accusatives for going there, and kod sela only means near a village.',
  },
  {
    mode: 'kamoGdje',
    q: 'Tanja je cijeli dan na ____.',
    en: 'Tanja is at the university all day.',
    opts: ['fakultetu', 'fakultet', 'fakulteta', 'fakultetom'],
    answer: 'fakultetu',
    tip: 'She is there, not on her way, so na + locative: na fakultetu. fakultet is the accusative you use with ići, fakulteta is the genitive, fakultetom the instrumental.',
  },
  {
    mode: 'kamoGdje',
    q: 'Poslije posla idem ____.',
    en: 'After work I am going to the market.',
    opts: ['na tržnicu', 'na tržnici', 'u tržnici', 'kod tržnice'],
    answer: 'na tržnicu',
    tip: 'Going there is na + accusative: na tržnicu. na tržnici is the locative for being there, a market takes na and not u, and kod tržnice means near it.',
  },
  {
    mode: 'kamoGdje',
    q: 'Stavi knjige u ____.',
    en: 'Put the books in the bag.',
    opts: ['torbu', 'torbi', 'torbe', 'torbom'],
    answer: 'torbu',
    tip: 'Putting something in is movement into a place, so the accusative: u torbu. u torbi says where the books already are, torbe is the genitive, torbom the instrumental.',
  },
  {
    mode: 'kamoGdje',
    q: 'Tvoj mobitel je na ____ u kuhinji.',
    en: 'Your cell phone is on the table in the kitchen.',
    opts: ['stolu', 'stol', 'stola', 'stolom'],
    answer: 'stolu',
    tip: 'The phone is lying there, a position: na + locative, stolu. na stol is where you put it (movement), stola is the genitive, stolom the instrumental.',
  },

  // ── genitiv ───────────────────────────────────────────────────────────────
  {
    mode: 'genitiv',
    q: 'Tom je Amerikanac. Dolazi ____.',
    en: 'Tom is American. He comes from America.',
    opts: ['iz Amerike', 'od Amerike', 'iz Ameriku', 's Amerikom'],
    answer: 'iz Amerike',
    tip: 'A country is a place you come out of, so iz + genitive: iz Amerike. od is for people and times, iz never takes the accusative Ameriku, and s Amerikom would mean together with America.',
  },
  {
    mode: 'genitiv',
    q: 'Ovo pismo je ____.',
    en: 'This letter is from Grandma.',
    opts: ['od bake', 'iz bake', 'od baka', 'od baku'],
    answer: 'od bake',
    tip: 'From a person is od + genitive: od bake. iz is for places you come out of, baka is the dictionary form, and baku is the accusative, which od never takes.',
  },
  {
    mode: 'genitiv',
    q: 'Večeras smo ____ na večeri.',
    en: "Tonight we are at our friends' place for dinner.",
    opts: ['kod prijatelja', 'kod prijatelji', 'u prijateljima', 'na prijatelje'],
    answer: 'kod prijatelja',
    tip: "At someone's place is kod + genitive: kod prijatelja. prijatelji is the subject form, and u and na are for places, not for people.",
  },
  {
    mode: 'genitiv',
    q: 'Idemo na izlet bez ____.',
    en: 'We are going on the trip without a car.',
    opts: ['auta', 'auto', 'autu', 'autom'],
    answer: 'auta',
    tip: 'bez always takes the genitive: bez auta. auto is the dictionary form, autu the dative or locative, and autom ("by car") is the instrumental — the opposite of what the sentence says.',
  },
  {
    mode: 'genitiv',
    q: 'Radim od ponedjeljka do ____.',
    en: 'I work from Monday to Friday.',
    opts: ['petka', 'petak', 'petku', 'petkom'],
    answer: 'petka',
    tip: 'do takes the genitive, just like od before it, and petak drops its a: petka. petak is the dictionary form, petku the dative or locative, and petkom means "on Fridays".',
  },
  {
    mode: 'genitiv',
    q: 'Vlak vozi od Zagreba do ____.',
    en: 'The train runs from Zagreb to Rijeka.',
    opts: ['Rijeke', 'Rijeku', 'Rijeci', 'Rijeka'],
    answer: 'Rijeke',
    tip: 'do takes the genitive: do Rijeke, matching od Zagreba. Rijeku is the accusative that u would take, Rijeci is the locative, and Rijeka is the dictionary form.',
  },
  {
    mode: 'genitiv',
    q: 'Ove rajčice su ____.',
    en: 'These tomatoes are from the garden.',
    opts: ['iz vrta', 'od vrta', 'iz vrtu', 'u vrt'],
    answer: 'iz vrta',
    tip: 'Out of a place is iz + genitive: iz vrta. od is for people and times, vrtu is a locative that iz cannot take, and u vrt means into the garden.',
  },
  {
    mode: 'genitiv',
    q: 'Dobio sam poklon ____.',
    en: 'I got a present from a friend.',
    opts: ['od prijatelja', 'iz prijatelja', 'od prijatelju', 's prijateljem'],
    answer: 'od prijatelja',
    tip: 'A present comes from a person, so od + genitive: od prijatelja. iz is for places, prijatelju is the dative, and s prijateljem means together with a friend.',
  },
  {
    mode: 'genitiv',
    q: 'Za vikend smo kod ____.',
    en: "For the weekend we are at Grandpa's.",
    opts: ['djeda', 'djed', 'djedu', 'djedom'],
    answer: 'djeda',
    tip: 'kod takes the genitive: kod djeda. djed is the dictionary form, djedu the dative or locative, and djedom the instrumental you would use after s.',
  },

  // ── sKim ──────────────────────────────────────────────────────────────────
  {
    mode: 'sKim',
    q: 'Idem u kino ____.',
    en: 'I am going to the movies with my brother.',
    opts: ['s bratom', 'sa bratom', 's brat', 's brata'],
    answer: 's bratom',
    tip: 's takes the instrumental: s bratom. sa is kept for words that start with s, š, z, ž or a hard group, "s brat" leaves the noun in its dictionary form, and s brata is the genitive.',
  },
  {
    mode: 'sKim',
    q: 'Marin putuje ____.',
    en: 'Marin is traveling with his wife.',
    opts: ['sa ženom', 's ženom', 'sa žena', 'sa ženu'],
    answer: 'sa ženom',
    tip: 'Before ž the preposition becomes sa, and it takes the instrumental: sa ženom. "s ženom" is hard to say, žena is the dictionary form, and ženu is the accusative.',
  },
  {
    mode: 'sKim',
    q: 'Hoćeš li ići ____ na kavu?',
    en: 'Do you want to go for coffee with me?',
    opts: ['sa mnom', 's mnom', 'sa ja', 's mene'],
    answer: 'sa mnom',
    tip: 'The instrumental of ja is mnom, and before the hard group mn the preposition is sa: sa mnom. "s mnom" has the short form, ja is the subject form, and mene is the genitive or accusative.',
  },
  {
    mode: 'sKim',
    q: 'Tanja šeta ____.',
    en: 'Tanja is walking with her dog.',
    opts: ['sa psom', 's psom', 'sa pas', 'sa psa'],
    answer: 'sa psom',
    tip: 'Before the hard group ps it is sa, and the noun goes into the instrumental: sa psom. "s psom" is the short form where the long one is needed, pas is the dictionary form, psa the accusative.',
  },
  {
    mode: 'sKim',
    q: 'Pijem kavu ____.',
    en: 'I drink coffee with milk.',
    opts: ['s mlijekom', 'sa mlijekom', 's mlijeka', 's mlijeko'],
    answer: 's mlijekom',
    tip: 'Before m plus a vowel plain s is enough, and it takes the instrumental: s mlijekom. sa is not needed here, mlijeka is the genitive (that goes with bez), and mlijeko is the dictionary form.',
  },
  {
    mode: 'sKim',
    q: 'Na more idem ____.',
    en: 'I am going to the seaside with Zoran.',
    opts: ['sa Zoranom', 's Zoranom', 'sa Zoran', 'sa Zorana'],
    answer: 'sa Zoranom',
    tip: 'Before z the preposition is sa, and a name takes the instrumental too: sa Zoranom. "s Zoranom" runs the two sounds together, Zoran is the dictionary form, Zorana the genitive.',
  },
  {
    mode: 'sKim',
    q: 'Sutra idem ____.',
    en: 'Tomorrow I am going to the doctor.',
    opts: ['k liječniku', 'ka liječniku', 'k liječnika', 'u liječnika'],
    answer: 'k liječniku',
    tip: 'Going to a person is k + dative: k liječniku. ka is only used before k and g, liječnika is the genitive, and u is for going into places, not to people.',
  },
  {
    mode: 'sKim',
    q: 'Autobus vozi ____.',
    en: 'The bus is heading toward the town.',
    opts: ['ka gradu', 'ka grad', 'ka grada', 'ka gradom'],
    answer: 'ka gradu',
    tip: 'k (ka before g) means toward and takes the dative: ka gradu. grad is the dictionary form, grada the genitive, and gradom the instrumental.',
  },
  {
    mode: 'sKim',
    q: 'Dođite ____ na večeru!',
    en: 'Come to our place for dinner!',
    opts: ['k nama', 'k nas', 'k mi', 'k nam'],
    answer: 'k nama',
    tip: 'k takes the dative, and after a preposition the long form is used: k nama. nas is the genitive or accusative, mi is the subject form, and the short nam cannot stand after a preposition.',
  },
];
