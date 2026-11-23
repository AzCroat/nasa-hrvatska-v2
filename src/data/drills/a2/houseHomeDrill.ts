// src/data/drills/a2/houseHomeDrill.ts
//
// A2 HOUSE AND HOME — the drill for the `house-home` lesson.
//
// Follows Razgovarajte s nama! A2–B1, pages 32 and 68–69: the description of the weekend
// house ("Dnevna soba ima velik kamin, spavaće sobe imaju malene balkone"), the students'
// dream houses ("S pet soba i kupaonicom…"), the culture text „Moja kućica – moja
// slobodica" (young people live with their parents; apartments rather than houses), the
// expressions with kuća ("Kod kuće je najljepše") and the debate "Je li bolje imati kuću ili
// stan?" (vrt, susjedi). The book does not teach floors or furniture placement at this
// level; those two modes follow the lesson, with the book's vocabulary.
//
// Three modes:
//   prostorije — the rooms and what is in them
//   kat        — kuća or stan, kući and kod kuće, and the floor: na trećem katu
//   gdjeJe     — placing things: u / na + locative; pored, ispod, iznad, iza + genitive

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const HOUSE_HOME_MODE_LABELS: Record<string, string> = {
  prostorije: '🚪 Prostorije',
  kat: '🏢 Kuća, stan, kat',
  gdjeJe: '🛋️ Gdje je što?',
};

export const HOUSE_HOME_DRILL_DATA: ModeDrillItem[] = [
  // ── prostorije ────────────────────────────────────────────────────────────
  {
    mode: 'prostorije',
    q: 'Kuhamo u ____.',
    en: 'We cook in the kitchen.',
    opts: ['kuhinji', 'kuhinja', 'kuhinju', 'kuhinje'],
    answer: 'kuhinji',
    tip: 'Where you cook is a position, so u + locative: u kuhinji. kuhinja is the dictionary form, kuhinju the accusative for going in, kuhinje the genitive.',
  },
  {
    mode: 'prostorije',
    q: 'Spavam u ____ sobi.',
    en: 'I sleep in the bedroom.',
    opts: ['spavaćoj', 'spavaća', 'spavaću', 'spavaćem'],
    answer: 'spavaćoj',
    tip: 'sobi is a feminine locative, so the adjective takes -oj: u spavaćoj sobi. spavaća is the subject form, spavaću the accusative, and spavaćem a masculine ending.',
  },
  {
    mode: 'prostorije',
    q: 'Navečer sjedimo u dnevnom ____.',
    en: 'In the evening we sit in the living room.',
    opts: ['boravku', 'boravak', 'boravka', 'boravkom'],
    answer: 'boravku',
    tip: 'u + locative, and boravak drops its second a: u dnevnom boravku. boravak is the dictionary form, boravka the genitive, boravkom the instrumental.',
  },
  {
    mode: 'prostorije',
    q: 'Tuširam se u ____.',
    en: 'I take a shower in the bathroom.',
    opts: ['kupaonici', 'kupaonica', 'kupaonicu', 'kupaonice'],
    answer: 'kupaonici',
    tip: 'A place where something happens is u + locative: u kupaonici. kupaonica is the dictionary form, kupaonicu means into the bathroom, kupaonice is the genitive.',
  },
  {
    mode: 'prostorije',
    q: 'Auto je u ____.',
    en: 'The car is in the garage.',
    opts: ['garaži', 'garaža', 'garažu', 'garažom'],
    answer: 'garaži',
    tip: 'The car is standing there, so u + locative: u garaži. garaža is the dictionary form, u garažu is for driving in, and garažom is the instrumental.',
  },
  {
    mode: 'prostorije',
    q: 'Stan ima dvije sobe, kuhinju i ____.',
    en: 'The apartment has two rooms, a kitchen and a dining room.',
    opts: ['blagovaonicu', 'blagovaonica', 'blagovaonici', 'blagovaonicom'],
    answer: 'blagovaonicu',
    tip: 'Everything the apartment has is an object of ima, so the accusative, like kuhinju: blagovaonicu. blagovaonica is the dictionary form, blagovaonici the locative, blagovaonicom the instrumental.',
  },
  {
    mode: 'prostorije',
    q: 'Želim kuću s pet ____.',
    en: 'I want a house with five rooms.',
    opts: ['soba', 'sobe', 'sobi', 'sobama'],
    answer: 'soba',
    tip: 'After pet and higher numbers the noun is in the genitive plural: pet soba. sobe is what follows dvije, tri and četiri; sobi is the locative and sobama a plural case form the number does not allow.',
  },
  {
    mode: 'prostorije',
    q: 'Ovdje su krevet i ormar. To je ____.',
    en: 'There is a bed and a closet here. Which room is it?',
    opts: ['spavaća soba', 'kuhinja', 'kupaonica', 'hodnik'],
    answer: 'spavaća soba',
    tip: 'A bed and a closet belong in the spavaća soba, the bedroom. A kuhinja is for cooking, a kupaonica for washing, and a hodnik is the hallway you walk through.',
  },
  {
    mode: 'prostorije',
    q: 'Ovdje sjedimo na kauču i gledamo televiziju. To je ____.',
    en: 'This is where we sit on the sofa and watch TV. Which room is it?',
    opts: ['dnevni boravak', 'kupaonica', 'garaža', 'balkon'],
    answer: 'dnevni boravak',
    tip: 'The sofa and the TV are in the dnevni boravak, the living room. A kupaonica is the bathroom, a garaža is for the car, and a balkon is outside.',
  },

  // ── kat ───────────────────────────────────────────────────────────────────
  {
    mode: 'kat',
    q: 'Mnogi mladi ljudi žive u ____ s roditeljima.',
    en: 'Many young people live in an apartment with their parents.',
    opts: ['stanu', 'stan', 'stana', 'stanom'],
    answer: 'stanu',
    tip: 'Where you live is u + locative, and a masculine noun takes -u: u stanu. u stan would mean moving into it, stana is the genitive, stanom the instrumental.',
  },
  {
    mode: 'kat',
    q: 'Stanujemo na ____ katu.',
    en: 'We live on the fifth floor.',
    opts: ['petom', 'peti', 'petog', 'petoj'],
    answer: 'petom',
    tip: 'The floor is an ordinal in the locative, matching katu: na petom katu. peti is the dictionary form (and the accusative for going up), petog is the genitive, petoj is feminine.',
  },
  {
    mode: 'kat',
    q: 'Baka ne voli stepenice, zato živi u ____.',
    en: 'Grandma does not like stairs, so she lives on the ground floor.',
    opts: ['prizemlju', 'prizemlje', 'prizemlja', 'prizemljem'],
    answer: 'prizemlju',
    tip: 'The ground floor is prizemlje, and living there is u + locative: u prizemlju. prizemlje is the dictionary form, prizemlja the genitive, prizemljem the instrumental.',
  },
  {
    mode: 'kat',
    q: 'Lift ide na ____ kat.',
    en: 'The elevator is going up to the third floor.',
    opts: ['treći', 'trećem', 'trećeg', 'treća'],
    answer: 'treći',
    tip: 'Going up is movement, so na + accusative, and kat is unchanged: na treći kat. trećem (with katu) is for where you live, trećeg is the genitive, treća is feminine.',
  },
  {
    mode: 'kat',
    q: 'Na kojem katu stanuješ? — Na ____.',
    en: 'Which floor do you live on? — On the second.',
    opts: ['drugom', 'drugi', 'druga', 'drugog'],
    answer: 'drugom',
    tip: 'The short answer keeps the case of the question: na kojem katu → na drugom. drugi is the dictionary form, druga is feminine, drugog is the genitive.',
  },
  {
    mode: 'kat',
    q: 'Imamo vrt i garažu, a susjedi su daleko. Živimo u ____.',
    en: 'We have a garden and a garage, and the neighbors are far away. Where do we live?',
    opts: ['kući', 'kuću', 'stanu', 'hodniku'],
    answer: 'kući',
    tip: 'A garden, a garage and no neighbors close by describe a house, and living there is u + locative: u kući. u kuću is for going in, a stan is an apartment in a building, and a hodnik is only a hallway.',
  },
  {
    mode: 'kat',
    q: 'Zgrada ima deset katova. Naš ____ je na osmom katu.',
    en: 'The building has ten floors. Our apartment is on the eighth floor.',
    opts: ['stan', 'kuća', 'vrt', 'kat'],
    answer: 'stan',
    tip: 'A home inside a building with many floors is a stan. A kuća is a whole building of your own, a vrt is a garden, and kat is the floor itself.',
  },
  {
    mode: 'kat',
    q: 'Poslije posla idem ____.',
    en: 'After work I am going home.',
    opts: ['kući', 'kuća', 'u kući', 'kod kuće'],
    answer: 'kući',
    tip: 'Going home is the single word kući. kuća is the dictionary form, u kući means inside the house, and kod kuće is where you are once you get there.',
  },
  {
    mode: 'kat',
    q: 'Gdje si? — ____ sam, gledam film.',
    en: 'Where are you? — I am at home, watching a movie.',
    opts: ['Kod kuće', 'Kući', 'U kuću', 'Na kući'],
    answer: 'Kod kuće',
    tip: 'Being at home is kod kuće (kod + genitive). Kući answers kamo? — where you are going; U kuću is movement into the house, and Na kući would put you on the roof.',
  },

  // ── gdjeJe ────────────────────────────────────────────────────────────────
  {
    mode: 'gdjeJe',
    q: 'Sat je na ____.',
    en: 'The clock is on the wall.',
    opts: ['zidu', 'zid', 'zida', 'zidom'],
    answer: 'zidu',
    tip: 'na for a position takes the locative: na zidu. na zid is for hanging it up (movement), zida is the genitive, zidom the instrumental.',
  },
  {
    mode: 'gdjeJe',
    q: 'Krevet je pored ____.',
    en: 'The bed is next to the closet.',
    opts: ['ormara', 'ormaru', 'ormar', 'ormarom'],
    answer: 'ormara',
    tip: 'pored takes the genitive: pored ormara. ormaru is the locative, which belongs after u and na; ormar is the dictionary form and ormarom the instrumental.',
  },
  {
    mode: 'gdjeJe',
    q: 'Mačka spava ispod ____.',
    en: 'The cat is sleeping under the table.',
    opts: ['stola', 'stolu', 'stol', 'stolom'],
    answer: 'stola',
    tip: 'ispod takes the genitive: ispod stola. stolu is the locative that goes with na, stol is the dictionary form, and stolom is the instrumental.',
  },
  {
    mode: 'gdjeJe',
    q: 'Polica je iznad ____.',
    en: 'The shelf is above the bed.',
    opts: ['kreveta', 'krevetu', 'krevet', 'krevetom'],
    answer: 'kreveta',
    tip: 'iznad takes the genitive: iznad kreveta. krevetu is the locative you use after u and na, krevet is the dictionary form, krevetom the instrumental.',
  },
  {
    mode: 'gdjeJe',
    q: 'Cipele su iza ____.',
    en: 'The shoes are behind the door.',
    opts: ['vrata', 'vratima', 'vrate', 'vratu'],
    answer: 'vrata',
    tip: 'iza takes the genitive, and vrata is a plural-only word whose genitive looks the same: iza vrata. vratima is the locative (na vratima), vrate is not a form of the word, and vratu means "neck".',
  },
  {
    mode: 'gdjeJe',
    q: 'Mlijeko je u ____.',
    en: 'The milk is in the fridge.',
    opts: ['hladnjaku', 'hladnjak', 'hladnjaka', 'hladnjakom'],
    answer: 'hladnjaku',
    tip: 'The milk is sitting there, so u + locative: u hladnjaku. u hladnjak is where you put it (movement), hladnjaka is the genitive, hladnjakom the instrumental.',
  },
  {
    mode: 'gdjeJe',
    q: 'Knjige su na ____.',
    en: 'The books are on the shelf.',
    opts: ['polici', 'polica', 'policu', 'police'],
    answer: 'polici',
    tip: 'A position after na is the locative, and a feminine noun takes -i: na polici. polica is the dictionary form, na policu is for putting them there, police is the genitive.',
  },
  {
    mode: 'gdjeJe',
    q: 'Stavi knjige na ____.',
    en: 'Put the books on the shelf.',
    opts: ['policu', 'polici', 'polica', 'police'],
    answer: 'policu',
    tip: 'Putting is movement toward a place, so na + accusative: na policu. na polici says where the books already are, polica is the dictionary form, police the genitive.',
  },
  {
    mode: 'gdjeJe',
    q: 'Stolica je ____ stola.',
    en: 'The chair is next to the table.',
    opts: ['pored', 'na', 'u', 'k'],
    answer: 'pored',
    tip: 'stola is a genitive, and "next to" is pored + genitive. na and u would need the locative stolu (and put the chair on or in the table), and k takes the dative.',
  },
  {
    mode: 'gdjeJe',
    q: 'Slika je ____ kauča.',
    en: 'The picture is above the sofa.',
    opts: ['iznad', 'ispod', 'iza', 'pored'],
    answer: 'iznad',
    tip: 'Above is iznad. All four take the genitive kauča, but ispod means under, iza means behind and pored means next to.',
  },
];
