// src/data/drills/b1/positionPlacementDrill.ts
//
// B1 SITTING, STANDING, PUTTING — the drill for the `position-placement` lesson
// (B1 position 20).
//
// Three modes (nine, ten and nine items):
//   glagol — the verb of state or the verb of change: sjediti / sjesti, ležati / leći,
//            stajati / stati, visjeti / objesiti, and staviti against stajati
//   padez  — the case that follows: kamo + accusative after a change, gdje + locative
//            after a state, and the instrumental after za and pod
//   oblik  — the forms of these verbs: sjednem, sjednite, lezi, legao, stojite, visjeli,
//            stao, stavljam
//
// Book pages (printed numbers):
//   Razgovarajte s nama! A2–B1 textbook — 30 (AKUZATIV: "Kamo idete?", "Idu za vikend na
//   selo. CILJ (SMJER)"), 53 ("Prvo su se zaustavili u Opatiji. Sjede na terasi jednog
//   restorana."), 54–55 (LOKATIV: "Gdje provode vikend?", "Oni provode vikend u Istri.
//   MJESTO", "Oni su na sunčanom šetalištu"), 85 (the car vocabulary: "stati; zaustaviti
//   automobil", "staviti/vezati pojas"), 90 ("Na sjedalu pokraj mojega sjedala bio je
//   jedan kofer"), 128 ("Ovdje sam, u svojoj sobi!", "Stol mi je uvijek pun papira i
//   knjiga"), 138 ("Tada leži na podu…").
//
// Where the book and the lesson differ:
//   - The book never sets the pairs out. It teaches the rule underneath them (kamo +
//     accusative for the goal, gdje + locative for the place) and prints single verbs in
//     its texts: sjede, leži, stati, staviti. The pairs sjesti / sjediti, leći / ležati,
//     stati / stajati and objesiti / visjeti, and the warning about staviti and stajati,
//     come from the lesson. The cases follow the book's kamo / gdje rule.
//   - Sakriti se / skrivati se is in the lesson's table, but both verbs are heard with
//     either case, so the pair is not drilled.
//   - After objesiti the case is not tested (na zid and na zidu are both in use); the
//     pair objesiti / visjeti is tested by the verb only.
//   - Sjedi and sjedni, stoj and stani, lezi and legni are all standard orders, so no
//     item offers one of them against the other.
//   - Grammar-order fence: the instrumental after za and pod was taught earlier in B1
//     and is used. No genitive prepositions (the genitive lessons come next), no
//     duration phrases, no relative clauses.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const POSITION_PLACEMENT_MODE_LABELS: Record<string, string> = {
  glagol: '🪑 Stanje ili promjena',
  padez: '📍 Kamo ili gdje',
  oblik: '🧩 Oblici glagola',
};

export const POSITION_PLACEMENT_DRILL_DATA: ModeDrillItem[] = [
  // ── glagol ────────────────────────────────────────────────────────────────
  {
    mode: 'glagol',
    q: 'Sandra i Tom ____ na terasi jednog restorana i piju kavu.',
    en: 'Sandra and Tom are sitting on the terrace of a restaurant, drinking coffee.',
    opts: ['sjede', 'sjednu', 'sjesti', 'sjeli'],
    answer: 'sjede',
    tip: 'They are already seated, a state, and na terasi is a locative: sjediti, sjede. Sjednu is the present of sjesti, the act of sitting down, which cannot describe what is going on now. Sjesti is an infinitive, and sjeli has no helping verb.',
  },
  {
    mode: 'glagol',
    q: 'Umorna sam. Idem ____ na krevet.',
    en: 'I am tired. I am going to lie down on the bed.',
    opts: ['leći', 'ležati', 'ležim', 'legla'],
    answer: 'leći',
    tip: 'Na krevet is an accusative, a goal, so the verb of change: leći. Ležati is the state and would take the locative na krevetu. Ležim and legla are not infinitives and cannot follow idem.',
  },
  {
    mode: 'glagol',
    q: 'Tvoja bilježnica ____ na stolu u mojoj sobi.',
    en: 'Your notebook is on the desk in my room.',
    opts: ['stoji', 'stavi', 'stane', 'stavlja'],
    answer: 'stoji',
    tip: 'A thing that is somewhere stoji: stajati, the state, with the locative na stolu. Stavi and stavlja are forms of putting and need somebody who puts and an object. Stane means "comes to a stop".',
  },
  {
    mode: 'glagol',
    q: '____ kaput u ormar, molim te.',
    en: 'Hang the coat up in the closet, please.',
    opts: ['Objesi', 'Visi', 'Visjeti', 'Objesio'],
    answer: 'Objesi',
    tip: 'Kaput is an object and the coat is on its way to the closet: the verb of change, objesiti, as an order. Visi is the state (the coat is hanging) and takes no object. Visjeti is an infinitive, and objesio is a participle.',
  },
  {
    mode: 'glagol',
    q: 'Kaput ____ u ormaru.',
    en: 'The coat is hanging in the closet.',
    opts: ['visi', 'objesi', 'vješa', 'objesiti'],
    answer: 'visi',
    tip: 'Nothing is moving and u ormaru is a locative: the verb of state, visjeti, visi. Objesi and vješa are forms of hanging something up and need an object. Objesiti is an infinitive.',
  },
  {
    mode: 'glagol',
    q: 'Mama je ____ ručak na stol.',
    en: 'Mom put lunch on the table.',
    opts: ['stavila', 'stajala', 'stala', 'stojila'],
    answer: 'stavila',
    tip: 'If you can ask "put WHAT?", the verb is staviti: stavila ručak na stol. Stajala is "was standing" and takes no object. Stala is "stopped", and stojila is not a form at all.',
  },
  {
    mode: 'glagol',
    q: 'Vozač je vidio crveno svjetlo i odmah ____.',
    en: 'The driver saw the red light and stopped at once.',
    opts: ['stao', 'stajao', 'stavio', 'stoji'],
    answer: 'stao',
    tip: 'Odmah marks the moment of change: stati, stao. Stajao is the state, "was standing". Stavio means "put" and needs an object, and stoji is a present that does not fit after vidio je.',
  },
  {
    mode: 'glagol',
    q: 'Djeca su ušla u razred i ____ na svoja mjesta.',
    en: 'The children came into the classroom and sat down in their seats.',
    opts: ['sjela', 'sjedila', 'sjedi', 'sjediti'],
    answer: 'sjela',
    tip: 'Na svoja mjesta is an accusative, and the sitting down is one act after coming in: sjesti, sjela. Sjedila is the state and would take the locative na svojim mjestima. Sjedi is a present, and sjediti is an infinitive.',
  },
  {
    mode: 'glagol',
    q: 'Zašto je „Stajao sam knjigu na stol“ pogrešno?',
    en: 'Why is this sentence wrong?',
    opts: [
      'Stajati has no object; putting something is staviti.',
      'Knjigu should be in the locative.',
      'The past of stajati does not exist.',
      'Na never takes the accusative.',
    ],
    answer: 'Stajati has no object; putting something is staviti.',
    tip: 'Stajati means to stand or to be placed, and takes no object. Putting something somewhere is staviti: Stavio sam knjigu na stol. Knjigu is a correct object form, stajao is a real past form, and na takes the accusative after a change.',
  },

  // ── padez ─────────────────────────────────────────────────────────────────
  {
    mode: 'padez',
    q: 'Sjednite na ____, gospodine.',
    en: 'Have a seat on the couch, sir.',
    opts: ['kauč', 'kauču', 'kauča', 'kaučem'],
    answer: 'kauč',
    tip: 'Sjesti is a change, and a change takes the accusative, like any movement to a place: na kauč. Na kauču is the locative, for sjediti. Kauča is the genitive and kaučem the instrumental; na takes neither here.',
  },
  {
    mode: 'padez',
    q: 'Cijelu večer sjedimo na ____.',
    en: 'We have been sitting on the balcony all evening.',
    opts: ['balkonu', 'balkon', 'balkona', 'balkonom'],
    answer: 'balkonu',
    tip: 'Sjediti is a state, and nothing is moving, so the locative: na balkonu. Na balkon is the accusative, for going there or sitting down. Balkona is the genitive and balkonom the instrumental.',
  },
  {
    mode: 'padez',
    q: 'Pas leži pod ____.',
    en: 'The dog is lying under the bench.',
    opts: ['klupom', 'klupu', 'klupi', 'klupe'],
    answer: 'klupom',
    tip: 'With pod the state takes the instrumental, not the locative: leži pod klupom. Pod klupu is the accusative, for the movement there. Klupi is a dative or locative and klupe a genitive; pod takes neither.',
  },
  {
    mode: 'padez',
    q: 'Pas je legao pod ____.',
    en: 'The dog lay down under the bench.',
    opts: ['klupu', 'klupom', 'klupi', 'klupe'],
    answer: 'klupu',
    tip: 'Leći is a change, so pod takes the accusative: legao je pod klupu. Pod klupom is the instrumental, for the state (leži pod klupom). Klupi and klupe are not used after pod.',
  },
  {
    mode: 'padez',
    q: 'Stavi mlijeko u ____.',
    en: 'Put the milk in the fridge.',
    opts: ['hladnjak', 'hladnjaku', 'hladnjaka', 'hladnjakom'],
    answer: 'hladnjak',
    tip: 'Staviti moves something to a place, so the accusative: u hladnjak. U hladnjaku is the locative, for where the milk is afterward. Hladnjaka is the genitive and hladnjakom the instrumental.',
  },
  {
    mode: 'padez',
    q: 'Ključevi stoje u ____ kraj vrata.',
    en: 'The keys are kept in the drawer by the door.',
    opts: ['ladici', 'ladicu', 'ladica', 'ladicom'],
    answer: 'ladici',
    tip: 'Stajati is a state: the keys are there, so the locative u ladici. U ladicu is the accusative and goes with staviti. Ladica is the nominative and ladicom the instrumental.',
  },
  {
    mode: 'padez',
    q: 'Gosti su sjeli za ____ i počeli jesti.',
    en: 'The guests sat down at the table and started to eat.',
    opts: ['stol', 'stolom', 'stolu', 'stola'],
    answer: 'stol',
    tip: 'Sjesti is a change, and with za the change takes the accusative: sjeli su za stol. Za stolom is the instrumental, for the state (sjede za stolom). Stolu and stola are not used after za in this meaning.',
  },
  {
    mode: 'padez',
    q: 'Cijela obitelj sjedi za ____ i večera.',
    en: 'The whole family is sitting at the table having dinner.',
    opts: ['stolom', 'stol', 'stola', 'stolove'],
    answer: 'stolom',
    tip: 'With za the state takes the instrumental: sjedi za stolom. Za stol is the accusative, for the act of sitting down. Stola is a genitive, and stolove is an accusative plural.',
  },
  {
    mode: 'padez',
    q: 'Baka leži na ____ i čita novine.',
    en: 'Grandma is lying on the bed reading the paper.',
    opts: ['krevetu', 'krevet', 'kreveta', 'krevetom'],
    answer: 'krevetu',
    tip: 'Ležati is a state, so the locative: na krevetu. Na krevet is the accusative and goes with leći, the act of lying down. Kreveta is the genitive and krevetom the instrumental.',
  },
  {
    mode: 'padez',
    q: 'Na koje pitanje odgovara „na stolicu“ u rečenici „Sjela je na stolicu“?',
    en: 'Which question does the phrase "na stolicu" answer in this sentence?',
    opts: ['Kamo?', 'Gdje?', 'Odakle?', 'Kada?'],
    answer: 'Kamo?',
    tip: 'A change has a goal, and the goal answers kamo? with the accusative. Gdje? asks about the place of a state and is answered with the locative (sjedi na stolici). Odakle? asks where from, and kada? asks when.',
  },

  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: '____, molim vas. Liječnik odmah dolazi.',
    en: 'Take a seat, please. The doctor will be right with you.',
    opts: ['Sjednite', 'Sjesti', 'Sjednete', 'Sjeli'],
    answer: 'Sjednite',
    tip: 'The order of sjesti is sjedni, sjednite. Sjesti is the infinitive, sjednete is the present (you sit down), and sjeli is a participle; none of them is an order.',
  },
  {
    mode: 'oblik',
    q: 'Umoran si. ____ na kauč i odmori se.',
    en: 'You are tired. Lie down on the couch and rest.',
    opts: ['Lezi', 'Leći', 'Legao', 'Ležiš'],
    answer: 'Lezi',
    tip: 'The order of leći is lezi. Leći is the infinitive and legao a participle. Ležiš is the present of ležati, the state, and it would need the locative na kauču.',
  },
  {
    mode: 'oblik',
    q: 'Svaki dan u podne ____ na klupu u parku i pojedem sendvič.',
    en: 'Every day at noon I sit down on a bench in the park and eat a sandwich.',
    opts: ['sjednem', 'sjedim', 'sjesti', 'sjeo'],
    answer: 'sjednem',
    tip: 'Na klupu is an accusative, so the verb is sjesti, and its present is sjednem. Sjedim is the present of sjediti, the state, and would take na klupi. Sjesti is an infinitive, and sjeo has no helping verb.',
  },
  {
    mode: 'oblik',
    q: 'Sinoć sam ____ u krevet već u devet.',
    en: 'Last night I got into bed as early as nine.',
    opts: ['legao', 'ležao', 'leći', 'legnem'],
    answer: 'legao',
    tip: 'U krevet is an accusative, so the verb of change, and its participle is legao (legla). Ležao is from ležati, the state, which takes u krevetu. Leći is an infinitive, and legnem is a present that cannot follow sam.',
  },
  {
    mode: 'oblik',
    q: 'Zašto ____ pred vratima? Uđite!',
    en: 'Why are you standing at the door? Come in!',
    opts: ['stojite', 'stajite', 'stanite', 'stavite'],
    answer: 'stojite',
    tip: 'The present of stajati is stojim, stojiš, stojite. Stajite is not a form. Stanite is the order of stati ("stop!"), and stavite is a form of staviti ("put").',
  },
  {
    mode: 'oblik',
    q: 'Kaputi su ____ u hodniku cijelu zimu.',
    en: 'The coats hung in the hallway all winter.',
    opts: ['visjeli', 'objesili', 'visjeti', 'vise'],
    answer: 'visjeli',
    tip: 'The participle of visjeti is visio, visjela, and in the plural visjeli. Objesili means "hung something up" and needs an object. Visjeti is an infinitive, and vise is a present that cannot follow su.',
  },
  {
    mode: 'oblik',
    q: 'Sat je ____ u ponoć i više ne radi.',
    en: 'The clock stopped at midnight and does not work anymore.',
    opts: ['stao', 'stojio', 'stanuo', 'stavio'],
    answer: 'stao',
    tip: 'The participle of stati is stao, stala. Stojio and stanuo are not forms: stajati has stajao, and stati has stao. Stavio is from staviti and needs an object.',
  },
  {
    mode: 'oblik',
    q: 'Kamo ____ ove knjige? — Na policu.',
    en: 'Where shall I put these books? — On the shelf.',
    opts: ['da stavim', 'da stojim', 'da stanem', 'da sjednem'],
    answer: 'da stavim',
    tip: 'Ove knjige is an object, so the verb is staviti, with the present stavim. Stojim is "I am standing" and stanem "I stop"; neither takes an object. Sjednem is "I sit down".',
  },
  {
    mode: 'oblik',
    q: 'Svako jutro ____ mobitel u torbu.',
    en: 'Every morning I put my phone in my bag.',
    opts: ['stavljam', 'stojim', 'stajem', 'sjedam'],
    answer: 'stavljam',
    tip: 'A habit of putting something somewhere: stavljati, stavljam, with an object and the accusative u torbu. Stojim is "I am standing", stajem is "I keep stopping", and sjedam is "I sit down"; none of them takes an object.',
  },
];
