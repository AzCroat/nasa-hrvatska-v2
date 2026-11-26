// src/data/drills/b2/argumentStructureDrill.ts
//
// B2 BUILDING AN ARGUMENT — the drill for the `argument-structure` lesson
// (B2 position 60).
//
// Three modes, nine items each:
//   otvaranje — opening on a topic: Što se tiče + genitive, Kad je riječ o + locative
//   utome     — for and against: prednost, nedostatak, the fixed shape u tome što,
//               s jedne strane… s druge strane
//   zakljucak — closing and joining: sve u svemu, ukratko, zaključno, na kraju
//               krajeva, and the connectors dakle, prema tome, međutim, naprotiv
//
// Book pages (printed numbers):
//   Razgovarajte s nama! B2 textbook — the "prednosti i nedostaci" debates that end
//   in a joint conclusion: 17 (s jedne strane… s druge strane), 33 (the Prednosti /
//   Nedostaci table for social networks), 54 and 56 (the globalization text built on
//   S jedne strane… S druge strane…), 71–72 (advantages of e-readers), 87, 137.
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — 36–37 (ZAKLJUČNI KONEKTORI: prema
//   tome, dakle, sve u svemu, jednom riječju), 62–63 (SUPROTNI KONEKTORI: a, no, ali,
//   međutim, naprotiv, nasuprot tome, za razliku od toga), 100–101 (name the advantages
//   and drawbacks of a diet).
//
// Where the books and the lesson differ:
//   - Neither book teaches Što se tiče, Kad je riječ o or the shape u tome što; they
//     come from the lesson. The textbook supplies the frame (prednosti, nedostaci,
//     s jedne strane, s druge strane) and the grammar book the connectors.
//   - The grammar book's closing connectors are prema tome, dakle, sve u svemu and
//     jednom riječju. The lesson has zaključno, sve u svemu, ukratko and na kraju
//     krajeva. Only sve u svemu is in both; the drill uses both sets.
//   - "Prednost je u tome da…" is common in real use, so da is never offered against
//     što. The plural of nedostatak is written nedostaci or nedostatci; only the
//     textbook's spelling nedostaci is used, and only as a nominative.
//   - After ima the lesson allows both prednosti i nedostatke and nedostataka, so the
//     two are never offered against each other.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ARGUMENT_STRUCTURE_MODE_LABELS: Record<string, string> = {
  otvaranje: '🚪 Što se tiče…',
  utome: '⚖️ Prednost je u tome što…',
  zakljucak: '🏁 Sve u svemu…',
};

export const ARGUMENT_STRUCTURE_DRILL_DATA: ModeDrillItem[] = [
  // ── otvaranje ─────────────────────────────────────────────────────────────
  {
    mode: 'otvaranje',
    q: 'Što se tiče ____, slažem se s vama.',
    en: 'As for the salary, I agree with you.',
    cue: 'plaća',
    opts: ['plaće', 'plaću', 'plaći', 'plaćom'],
    answer: 'plaće',
    tip: 'Što se tiče takes the genitive: što se tiče plaće. Plaću is the accusative, the slip the lesson names. Plaći is the dative or locative and plaćom the instrumental.',
  },
  {
    mode: 'otvaranje',
    q: 'Kad je riječ o ____, mišljenja su podijeljena.',
    en: 'When it comes to social networks, opinions are divided.',
    cue: 'društvene mreže',
    opts: ['društvenim mrežama', 'društvene mreže', 'društvenih mreža', 'društvenu mrežu'],
    answer: 'društvenim mrežama',
    tip: 'Kad je riječ o takes the locative: o društvenim mrežama. Društvene mreže is the nominative or accusative plural. Društvenih mreža is the genitive, which belongs after što se tiče, and društvenu mrežu is the accusative singular.',
  },
  {
    mode: 'otvaranje',
    q: 'Što se tiče ____, nemamo izbora.',
    en: 'As for the costs, we have no choice.',
    cue: 'troškovi',
    opts: ['troškova', 'troškove', 'troškovima', 'troškovi'],
    answer: 'troškova',
    tip: 'Što se tiče + genitive plural: troškova. Troškove is the accusative. Troškovima is the dative, locative or instrumental, and troškovi is the nominative.',
  },
  {
    mode: 'otvaranje',
    q: '____ o životu na selu, najveća je prednost mir.',
    en: 'When it comes to life in the country, the biggest advantage is the quiet.',
    opts: ['Kad je riječ', 'Što se tiče', 'S druge strane', 'Sve u svemu'],
    answer: 'Kad je riječ',
    tip: 'The preposition o and the locative životu show which opener this is: kad je riječ o. Što se tiče takes a bare genitive, with no o. S druge strane and sve u svemu are not followed by o + a topic.',
  },
  {
    mode: 'otvaranje',
    q: '____ rada vikendom, nisam za.',
    en: 'As for working on weekends, I am not in favor.',
    opts: ['Što se tiče', 'Kad je riječ', 'U tome što', 'Zaključno'],
    answer: 'Što se tiče',
    tip: 'Rada is a bare genitive, so the opener is što se tiče. Kad je riječ would need o and the locative (o radu). U tome što needs a clause after it, and zaključno closes an argument instead of opening one.',
  },
  {
    mode: 'otvaranje',
    q: 'Čemu služi „Što se tiče…“ na početku rečenice?',
    opts: [
      'It names the one aspect you are about to discuss.',
      'It gives the final conclusion.',
      'It introduces the opposite view.',
      'It apologizes for interrupting.',
    ],
    answer: 'It names the one aspect you are about to discuss.',
    tip: 'Što se tiče raises a topic and shows you are addressing one aspect on purpose. A conclusion opens with sve u svemu or zaključno. The opposite view opens with s druge strane, and an interruption with oprostite što prekidam.',
  },
  {
    mode: 'otvaranje',
    q: 'Kad je riječ o ____, najvažnije je zdravlje.',
    en: 'When it comes to children, health matters most.',
    cue: 'djeca',
    opts: ['djeci', 'djecu', 'djece', 'djecom'],
    answer: 'djeci',
    tip: 'O + locative: o djeci. Djecu is the accusative. Djece is the genitive, which would follow što se tiče, and djecom is the instrumental.',
  },
  {
    mode: 'otvaranje',
    q: 'Što se tiče ____, mislim da je prijedlog dobar.',
    en: 'As far as I am concerned, I think the proposal is good.',
    cue: 'ja',
    opts: ['mene', 'meni', 'mnom', 'moj'],
    answer: 'mene',
    tip: 'Što se tiče + genitive, and the genitive of ja is mene. Meni is the dative or locative and mnom the instrumental. Moj is the possessive "my", not the pronoun.',
  },
  {
    mode: 'otvaranje',
    q: 'U kojoj je rečenici padež iza „kad je riječ o“ točan?',
    opts: [
      'Kad je riječ o novom zakonu, svi imaju mišljenje.',
      'Kad je riječ o novog zakona, svi imaju mišljenje.',
      'Kad je riječ o novi zakon, svi imaju mišljenje.',
      'Kad je riječ o novim zakonom, svi imaju mišljenje.',
    ],
    answer: 'Kad je riječ o novom zakonu, svi imaju mišljenje.',
    tip: 'O takes the locative: o novom zakonu. Novog zakona is the genitive, the case of što se tiče. Novi zakon is the nominative or accusative, and novim zakonom is the instrumental.',
  },

  // ── utome ─────────────────────────────────────────────────────────────────
  {
    mode: 'utome',
    q: 'Nedostatak je ____ što put traje šest sati.',
    en: 'The drawback is that the trip takes six hours.',
    opts: ['u tome', 'u to', 'o tome', 'na tome'],
    answer: 'u tome',
    tip: 'The fixed shape is u tome što: "in that, that". U to has the accusative instead of the locative. O tome and na tome belong to other verbs (govoriti o tome, raditi na tome).',
  },
  {
    mode: 'utome',
    q: 'Prednost je u tome ____ možeš raditi od kuće.',
    en: 'The advantage is that you can work from home.',
    opts: ['što', 'koji', 'jer', 'ako'],
    answer: 'što',
    tip: 'After u tome the clause opens with što. Koji is a relative pronoun and needs a noun to refer to. Jer would give a reason and ako a condition, and neither can hang on tome.',
  },
  {
    mode: 'utome',
    q: 'Stvar je u ____ što nitko nije pročitao ugovor.',
    en: 'The thing is that nobody read the contract.',
    opts: ['tome', 'to', 'toga', 'tim'],
    answer: 'tome',
    tip: 'U + locative of to: u tome. To is the nominative or accusative and toga the genitive. Tim is the instrumental, which u never takes.',
  },
  {
    mode: 'utome',
    q: 'E-čitač ima jednu veliku ____: lagan je i stane u svaki džep.',
    opts: ['prednost', 'manu', 'štetu', 'pogrešku'],
    answer: 'prednost',
    tip: 'Being light and pocket-sized is a point in favor: prednost. Mana is a flaw, šteta is damage and pogreška is a mistake, and none of them fits a good quality.',
  },
  {
    mode: 'utome',
    q: 'Društvene mreže povezuju ljude. Njihov je ____ što ne čuvaju privatnost.',
    opts: ['nedostatak', 'dobitak', 'napredak', 'dodatak'],
    answer: 'nedostatak',
    tip: 'Not protecting privacy is a point against: nedostatak, a drawback. Dobitak is a gain and napredak is progress, both positive. Dodatak is an addition or a supplement.',
  },
  {
    mode: 'utome',
    q: 'Rad od kuće ima i prednosti i ____.',
    en: 'Working from home has both advantages and drawbacks.',
    opts: ['nedostatke', 'nedostaci', 'nedostacima', 'nedostatku'],
    answer: 'nedostatke',
    tip: 'Rad od kuće is the subject, so what it "has" is an object in the accusative plural: nedostatke. Nedostaci is the nominative, the slip the lesson names. Nedostacima is the dative, locative or instrumental, and nedostatku is a singular form.',
  },
  {
    mode: 'utome',
    q: 'S jedne strane, grad nudi više posla. ____, život je u njemu skuplji.',
    opts: ['S druge strane', 'Sve u svemu', 'Što se tiče', 'Prema tome'],
    answer: 'S druge strane',
    tip: 'S jedne strane is always answered by s druge strane, which brings in the other side. Sve u svemu would already conclude. Što se tiče needs a genitive after it, and prema tome draws a consequence instead of a contrast.',
  },
  {
    mode: 'utome',
    q: 'U kojoj je rečenici izraz pravilno složen?',
    opts: [
      'Razlika je u tome što vlak ne kasni.',
      'Razlika je u to što vlak ne kasni.',
      'Razlika je o tome što vlak ne kasni.',
      'Razlika je u tome koji vlak ne kasni.',
    ],
    answer: 'Razlika je u tome što vlak ne kasni.',
    tip: 'Any noun can be attached to the workhorse: razlika je u tome što… U to has the wrong case, and o tome is the wrong preposition. Koji cannot replace što, because the clause explains tome and does not describe a noun.',
  },
  {
    mode: 'utome',
    q: 'Prednosti ____ nedostatke, pa sam za selidbu.',
    en: 'The advantages outweigh the drawbacks, so I am in favor of moving.',
    opts: ['nadmašuju', 'nadmašuje', 'nadmašiti', 'nadmašio'],
    answer: 'nadmašuju',
    tip: 'Prednosti is plural, so the verb is plural: nadmašuju. Nadmašuje is singular. Nadmašiti is an infinitive, and nadmašio is a masculine singular participle with no auxiliary.',
  },

  // ── zakljucak ─────────────────────────────────────────────────────────────
  {
    mode: 'zakljucak',
    q: 'Film je bio predug, a gluma slaba. ____, nije mi se svidio.',
    opts: ['Sve u svemu', 'S jedne strane', 'Što se tiče', 'Naprotiv'],
    answer: 'Sve u svemu',
    tip: 'Sve u svemu (all in all) weighs what came before and gives the verdict. S jedne strane would start a new comparison. Što se tiče needs a genitive, and naprotiv would contradict the first sentence.',
  },
  {
    mode: 'zakljucak',
    q: 'Koji izraz najavljuje da ćete sve reći u nekoliko riječi?',
    opts: ['Ukratko', 'Međutim', 'Naprotiv', 'Doduše'],
    answer: 'Ukratko',
    tip: 'Ukratko (in short) compresses the argument. Međutim (however) and naprotiv (on the contrary) introduce a contrast. Doduše (admittedly) concedes a point.',
  },
  {
    mode: 'zakljucak',
    q: 'Koji je zaključni izraz najformalniji i tipičan za pisani tekst?',
    opts: ['Zaključno', 'Na kraju krajeva', 'Ukratko', 'Sve u svemu'],
    answer: 'Zaključno',
    tip: 'Zaključno (in conclusion) is the formal, written closer. Na kraju krajeva gives the bottom line in a spoken tone. Ukratko compresses and sve u svemu weighs up; both are at home in speech as well.',
  },
  {
    mode: 'zakljucak',
    q: 'Možemo raspravljati satima, ali ____ odluku donosi direktor.',
    en: 'We can argue for hours, but at the end of the day the director makes the decision.',
    opts: ['na kraju krajeva', 's jedne strane', 'što se tiče', 'kad je riječ'],
    answer: 'na kraju krajeva',
    tip: 'Na kraju krajeva gives the bottom line: when all is said and done. S jedne strane needs a second side after it. Što se tiče takes a genitive and kad je riječ takes o, and neither fits before odluku donosi.',
  },
  {
    mode: 'zakljucak',
    q: 'Svjetla su ugašena i auta nema. ____ nisu kod kuće.',
    opts: ['Dakle', 'Međutim', 'Naprotiv', 'Doduše'],
    answer: 'Dakle',
    tip: 'Dakle (so, therefore) draws a conclusion from what was just said. Međutim and naprotiv would contradict it. Doduše would concede something, and there is nothing to concede here.',
  },
  {
    mode: 'zakljucak',
    q: 'Ideja nije loša. ____, vrlo je dobra.',
    opts: ['Naprotiv', 'Dakle', 'Ukratko', 'Prema tome'],
    answer: 'Naprotiv',
    tip: 'After a denial, naprotiv (on the contrary) brings the opposite claim. Dakle and prema tome would present "very good" as a consequence of "not bad". Ukratko would announce a summary.',
  },
  {
    mode: 'zakljucak',
    q: 'Stan je svijetao i blizu centra. ____, najamnina je previsoka.',
    opts: ['Međutim', 'Dakle', 'Prema tome', 'Ukratko'],
    answer: 'Međutim',
    tip: 'Two points in favor are followed by one against, and međutim (however) marks that turn. Dakle and prema tome would make the high rent a result of the good location. Ukratko would summarize, not contrast.',
  },
  {
    mode: 'zakljucak',
    q: 'Vlak je brži i jeftiniji od auta. ____ idemo vlakom.',
    opts: ['Prema tome', 'Međutim', 'S druge strane', 'Naprotiv'],
    answer: 'Prema tome',
    tip: 'Prema tome (accordingly) introduces the decision that follows from the reasons. Međutim, s druge strane and naprotiv all announce a contrast, but going by train agrees with what was just said.',
  },
  {
    mode: 'zakljucak',
    q: 'Što najavljuje izraz „jednom riječju“ na početku zadnje rečenice?',
    opts: [
      'a summary of everything said so far',
      'the opposite point of view',
      'an example',
      'the first of several points',
    ],
    answer: 'a summary of everything said so far',
    tip: 'Jednom riječju (in a word) is a closing connector, like sve u svemu and dakle. The opposite view comes with međutim or naprotiv. An example comes with na primjer, and a first point with prvo.',
  },
];
