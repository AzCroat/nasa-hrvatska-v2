// src/data/drills/b1/indefinitesDrill.ts
//
// B1 SOMEONE, NO ONE, EVERYONE — the drill for the `indefinites` lesson
// (B1 position 37).
//
// Three modes, nine items each:
//   mreza     — the grid: ne- (some), ni- (no), sv- (every) and bilo, on tko, što, gdje,
//               kad and kako
//   nijekanje — the ni- words need a negated verb: Nitko ne zna
//   padez     — the forms: nekoga, nekome, nikoga, nikome, ničega; neki and svaki agree
//               with their noun
//
// Book pages (printed numbers):
//   Razgovarajte s nama! A2–B1 textbook — the book has no grid of these words; the drill
//   is built from the sentences it prints: 31 ("Marin i ja smo te htjeli nešto pitati",
//   "Nisam već sto godina nigdje bila!"), 47 ("niste trebali ništa donijeti"), 53 ("Neki
//   kip", "Vidio sam sličan kip u još nekim gradovima", "utopio se neki grof"), 56
//   ("Nitko ne sumnja da je čovjek društveno biće", "na poslu, u školi, na ulici…
//   Svugdje."), 64–65 ("raditi nešto korisno", "uvijek naučim nešto novo"), 80 ("koristi
//   ga netko drugi"), 89 ("Ništa mi se ne radi.", "Ne želim ništa raditi."), 96 ("nikad
//   joj nije rekao da je…"), 130 ("svaki dan", "Nikad ne reci nikad."), 135 ("Svatko
//   ponekad pročita neki članak"), 148 ("Jeste li nedavno upoznali nekoga tko vam se jako
//   svidio?"), 152 ("ne zna ništa o povijesti i kulturi"), 166–167 ("Svašta!").
//
// Where the book and the lesson differ:
//   - The book never sets the system out; the three prefixes, the grid and bilo are the
//     lesson's. Bilo is in the lesson only; one item.
//   - In questions the book also uses the i- words (page 127: "Jeste li ikada…?", "Je li
//     vas itko pronašao…?"). The lesson does not teach them and they belong to B2, so no
//     item needs one and none is offered as a wrong answer; after a question or a negated
//     verb, išta and itko can be as correct as nešto and netko.
//   - Nekoga and nekog, nikome and nikomu, svugdje and svuda, nekad and nekada are all
//     standard, so no pair of them is offered in one item.
//   - A ni- word after a preposition splits (ni o čemu, ni s kim). That is B2 material,
//     so no item puts a ni- word after a preposition.
//   - Grammar-order fence: the genitive after sjećati se and the dative after javiti were
//     taught earlier. No čiji, no reported speech, no cases of the indefinites beyond the
//     ones the lesson lists.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const INDEFINITES_MODE_LABELS: Record<string, string> = {
  mreza: '🧩 Ne-, ni-, sv-',
  nijekanje: '🚫 Nitko ne…',
  padez: '🔤 Nekoga, nikome, svaki',
};

export const INDEFINITES_DRILL_DATA: ModeDrillItem[] = [
  // ── mreza ─────────────────────────────────────────────────────────────────
  {
    mode: 'mreza',
    q: 'Marin i ja smo te htjeli ____ pitati.',
    en: 'Marin and I wanted to ask you something.',
    opts: ['nešto', 'ništa', 'nitko', 'negdje'],
    answer: 'nešto',
    tip: 'Ne- + što: nešto, something. Ništa is "nothing" and would need a negated verb. Nitko is "nobody", a person and a subject form, and negdje is "somewhere".',
  },
  {
    mode: 'mreza',
    q: 'Kad ti auto nije potreban, koristi ga ____ drugi.',
    en: 'When you do not need the car, someone else uses it.',
    opts: ['netko', 'nešto', 'negdje', 'nekad'],
    answer: 'netko',
    tip: 'Ne- + tko: netko, someone, here the subject of koristi. Nešto is a thing, not a person. Negdje is "somewhere" and nekad "at some time"; neither can use a car.',
  },
  {
    mode: 'mreza',
    q: '„Idemo li na kavu?“ Tu rečenicu čujemo na poslu, u školi, na ulici… ____.',
    en: '"Shall we go for coffee?" We hear that sentence at work, at school, on the street… Everywhere.',
    opts: ['Svugdje', 'Nigdje', 'Svatko', 'Svašta'],
    answer: 'Svugdje',
    tip: 'Sv- + gdje: svugdje, everywhere; it sums up the list of places. Nigdje is "nowhere" and would deny the list. Svatko is "everyone" and svašta "all sorts of things"; neither is a place.',
  },
  {
    mode: 'mreza',
    q: '____ ponekad pročita članak o poznatim osobama.',
    en: 'Everyone sometimes reads an article about celebrities.',
    opts: ['Svatko', 'Svaki', 'Svašta', 'Nitko'],
    answer: 'Svatko',
    tip: 'On its own, "everyone" is svatko. Svaki is an adjective and needs a noun (svaki čovjek). Svašta is "all sorts of things", and nitko would need a negated verb.',
  },
  {
    mode: 'mreza',
    q: 'Ključevi su ____ u stanu, ali ne znam gdje.',
    en: 'The keys are somewhere in the apartment, but I do not know where.',
    opts: ['negdje', 'nigdje', 'svugdje', 'nekad'],
    answer: 'negdje',
    tip: 'Ne- + gdje: negdje, somewhere. Nigdje is "nowhere" and needs a negated verb. Svugdje is "everywhere", which does not fit "I do not know where", and nekad is about time.',
  },
  {
    mode: 'mreza',
    q: 'Na tržnici u Splitu možeš kupiti ____: voće, ribu, cvijeće, suvenire.',
    en: 'At the market in Split you can buy all sorts of things: fruit, fish, flowers, souvenirs.',
    opts: ['svašta', 'ništa', 'netko', 'nigdje'],
    answer: 'svašta',
    tip: 'Sv- + što: svašta, all sorts of things. Ništa is "nothing" and would need a negated verb. Netko is a person and a subject form, and nigdje is "nowhere".',
  },
  {
    mode: 'mreza',
    q: 'Koji prefiks znači „no-“ (nobody, nothing, nowhere)?',
    en: 'Which prefix means "no-"?',
    opts: ['ni-', 'ne-', 'sv-', 'bilo'],
    answer: 'ni-',
    tip: 'Ni- means "no": nitko, ništa, nigdje, nikad. Ne- means "some" (netko, nešto), sv- means "every" (svatko, svugdje), and bilo means "any at all" (bilo tko).',
  },
  {
    mode: 'mreza',
    q: 'Ne znam kako, ali ____ ćemo stići na vrijeme.',
    en: 'I do not know how, but somehow we will get there on time.',
    opts: ['nekako', 'nikako', 'nekad', 'netko'],
    answer: 'nekako',
    tip: 'Ne- + kako: nekako, somehow. Nikako is "in no way" and would need a negated verb. Nekad is "at some time", and netko is "someone".',
  },
  {
    mode: 'mreza',
    q: 'Možeš doći ____, uvijek sam kod kuće.',
    en: 'You can come any time at all; I am always home.',
    opts: ['bilo kada', 'nikada', 'nekada', 'bilo tko'],
    answer: 'bilo kada',
    tip: 'Bilo + a question word is the open "any at all": bilo kada, any time. Nikada is "never" and would need a negated verb. Nekada is "once, at some time", and bilo tko is "anyone", a person.',
  },

  // ── nijekanje ─────────────────────────────────────────────────────────────
  {
    mode: 'nijekanje',
    q: 'Nitko ____ sumnja da je čovjek društveno biće.',
    en: 'Nobody doubts that man is a social being.',
    opts: ['ne', 'ni', 'nije', 'nema'],
    answer: 'ne',
    tip: 'A ni- word needs the verb negated as well: Nitko ne sumnja. Ni is for listing ("neither… nor"). Nije and nema are verbs of their own and cannot stand before sumnja.',
  },
  {
    mode: 'nijekanje',
    q: '____ mi se ne radi.',
    en: 'I do not feel like doing anything.',
    opts: ['Ništa', 'Netko', 'Svatko', 'Svaki'],
    answer: 'Ništa',
    tip: 'The verb is negated and the thing is "nothing": Ništa mi se ne radi. Netko and svatko are people, not things one does. Svaki is an adjective and needs a noun.',
  },
  {
    mode: 'nijekanje',
    q: 'Nikad joj ____ rekao da je lijepa.',
    en: 'He never told her that she was pretty.',
    opts: ['nije', 'je', 'ne', 'ni'],
    answer: 'nije',
    tip: 'Nikad needs a negated verb, and in the past the negation is on the helping verb: nikad nije rekao. Je drops the second negative, the English-based slip. Ne and ni cannot stand with the participle rekao.',
  },
  {
    mode: 'nijekanje',
    q: 'Niste trebali ____ donijeti!',
    en: 'You did not have to bring anything!',
    opts: ['ništa', 'nešto', 'svašta', 'netko'],
    answer: 'ništa',
    tip: 'English switches to "anything" after a negative; Croatian uses the ni- word together with the negated verb: niste trebali ništa donijeti. Nešto and svašta do not go with the denial, and netko is a person and a subject form.',
  },
  {
    mode: 'nijekanje',
    q: 'Koja je rečenica pravilna?',
    en: 'Which sentence is correct?',
    opts: [
      'Nikad ne kasnim na posao.',
      'Nikad kasnim na posao.',
      'Nikad nisam kasnim na posao.',
      'Ne nikad kasnim na posao.',
    ],
    answer: 'Nikad ne kasnim na posao.',
    tip: 'Nikad + ne + the verb. Without ne the sentence is ungrammatical. Nisam is the past helping verb and does not go with the present kasnim, and ne stands right before the verb, not before nikad.',
  },
  {
    mode: 'nijekanje',
    q: 'Nisam već sto godina ____ bila!',
    en: 'I have not been anywhere for a hundred years!',
    opts: ['nigdje', 'negdje', 'nekad', 'nitko'],
    answer: 'nigdje',
    tip: 'After a negated verb "anywhere" is the ni- word: nisam nigdje bila. Negdje is "somewhere" and does not go with the denial. Nekad is about time, and nitko is a person.',
  },
  {
    mode: 'nijekanje',
    q: 'U sobi ____ nikoga.',
    en: 'There is nobody in the room.',
    opts: ['nema', 'ima', 'je', 'su'],
    answer: 'nema',
    tip: 'Nikoga needs a negated verb, and "there is no…" is nema + the genitive: nema nikoga. Ima drops the negation. Je and su are not negated either, and they would need a nominative.',
  },
  {
    mode: 'nijekanje',
    lead: 'Nitko ništa ne zna.',
    q: 'Što je točno o ovoj rečenici?',
    opts: [
      'It has three negative words, and it is correct.',
      'It has three negative words, so it means "everyone knows".',
      'It is wrong: only one negative word is allowed.',
      'It is wrong: ne must stand first.',
    ],
    answer: 'It has three negative words, and it is correct.',
    tip: 'Croatian negatives do not cancel each other out. Every ni- word in the sentence stays, and the verb is negated too: Nitko ništa ne zna, "nobody knows anything". Ne stands right before the verb.',
  },
  {
    mode: 'nijekanje',
    q: '____ ne zna gdje je Tanja.',
    en: 'Nobody knows where Tanja is.',
    opts: ['Nitko', 'Nikoga', 'Ništa', 'Nigdje'],
    answer: 'Nitko',
    tip: '"Nobody" as the subject is nitko, with the verb negated: Nitko ne zna. Nikoga is the accusative, for an object. Ništa is a thing, and nigdje is a place.',
  },

  // ── padez ─────────────────────────────────────────────────────────────────
  {
    mode: 'padez',
    q: 'Jeste li nedavno upoznali ____ tko vam se jako svidio?',
    en: 'Have you recently met someone you really liked?',
    opts: ['nekoga', 'netko', 'nekome', 'nečega'],
    answer: 'nekoga',
    tip: 'These words decline like tko and što. The object of upoznati is in the accusative: nekoga. Netko is the subject form. Nekome is the dative, and nečega is the genitive of nešto, a thing.',
  },
  {
    mode: 'padez',
    q: 'Ne poznajem ____ u ovom gradu.',
    en: 'I do not know anybody in this town.',
    opts: ['nikoga', 'nitko', 'nikome', 'ničega'],
    answer: 'nikoga',
    tip: 'The object of poznavati is in the accusative: nikoga. Nitko is the subject form and cannot be an object. Nikome is the dative, and ničega is the genitive of ništa, a thing.',
  },
  {
    mode: 'padez',
    q: '____ nisam rekla tajnu.',
    en: 'I did not tell the secret to anyone.',
    opts: ['Nikome', 'Nikoga', 'Nitko', 'Ničemu'],
    answer: 'Nikome',
    tip: 'You tell something TO someone, so the dative: nikome. Nikoga is the accusative, and the object here is tajnu. Nitko is the subject form, and ničemu is the dative of ništa, a thing.',
  },
  {
    mode: 'padez',
    q: 'Ne sjećam se ____ iz tog filma.',
    en: 'I do not remember anything from that movie.',
    opts: ['ničega', 'ništa', 'ničemu', 'nikome'],
    answer: 'ničega',
    tip: 'Sjećati se takes the genitive, and the genitive of ništa is ničega. Ništa is the nominative and accusative. Ničemu is the dative, and nikome is the dative of nitko, a person.',
  },
  {
    mode: 'padez',
    q: 'Moram ____ javiti da kasnim.',
    en: 'I have to let someone know that I am running late.',
    opts: ['nekome', 'nekoga', 'netko', 'nečemu'],
    answer: 'nekome',
    tip: 'Javiti takes the dative of the person who gets the news: nekome. Nekoga is the accusative, netko is the subject form, and nečemu is the dative of nešto, a thing.',
  },
  {
    mode: 'padez',
    q: 'Vidio sam sličan kip u još ____ gradovima.',
    en: 'I have seen a similar statue in a few other towns.',
    opts: ['nekim', 'neki', 'neke', 'nekih'],
    answer: 'nekim',
    tip: 'Neki is an adjective and agrees with its noun. Gradovima is a locative plural after u, so nekim. Neki is the nominative, neke is an accusative, and nekih is the genitive.',
  },
  {
    mode: 'padez',
    q: '____ jutro pijem kavu s kolegama.',
    en: 'Every morning I have coffee with my colleagues.',
    opts: ['Svako', 'Svaki', 'Svaka', 'Svatko'],
    answer: 'Svako',
    tip: 'Svaki agrees with its noun, and jutro is neuter: svako jutro. Svaki is masculine (svaki dan) and svaka is feminine (svaka godina). Svatko means "everyone" and stands on its own, never before a noun.',
  },
  {
    mode: 'padez',
    q: 'U blizini se utopio ____ grof.',
    en: 'Some count drowned nearby.',
    opts: ['neki', 'neka', 'neko', 'netko'],
    answer: 'neki',
    tip: 'Before a noun the word is the adjective neki, and grof is masculine: neki grof. Neka is feminine and neko is neuter. Netko means "someone" and stands on its own, without a noun.',
  },
  {
    mode: 'padez',
    q: 'Tražila te je ____ žena dok si bio vani.',
    en: 'Some woman was looking for you while you were out.',
    opts: ['neka', 'neki', 'neko', 'netko'],
    answer: 'neka',
    tip: 'Neki agrees with its noun, and žena is feminine: neka žena. Neki is masculine and neko is neuter. Netko stands on its own and cannot go before a noun.',
  },
];
