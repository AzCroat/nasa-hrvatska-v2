// src/data/drills/a2/dativeLocativeDrill.ts
//
// A2 DATIVE AND LOCATIVE — the drill for the `dative-locative` lesson.
//
// Follows Razgovarajte s nama! A2–B1 in the book's order: the locative first — page 55
// (LOKATIV: "Nećemo razgovarati o tome" TEMA · "Oni provode vikend u Istri" MJESTO · "u 19.
// stoljeću" VRIJEME) and page 60 (LOKATIV LIČNIH ZAMJENICA: o meni, o tebi, o njoj) — then
// the dative — pages 82–83 (INDIREKTNI OBJEKT, "prema Novom Zagrebu" CILJ, "Tom kuha ručak
// svojoj mami" PRIMATELJ), page 87 (DATIV LIČNIH ZAMJENICA: mi, ti, mu, joj, nam, vam, im)
// and page 93 (the verbs + DATIV: radovati se, vjerovati, pomagati, zahvaljivati, pokloniti).
// The basic endings are the A1 drills' job; this one is about choosing the case.
//
// Three modes:
//   lokativ — o, po, u, na + locative: the topic, the place, the time
//   komu    — the receiver in the dative, the short pronouns, k and prema
//   glagoli — the verbs that demand the dative: radovati se, vjerovati, pomoći, zahvaliti

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const DATIVE_LOCATIVE_MODE_LABELS: Record<string, string> = {
  lokativ: '📍 O čemu? Gdje?',
  komu: '🎁 Komu?',
  glagoli: '🙏 Glagoli s dativom',
};

export const DATIVE_LOCATIVE_DRILL_DATA: ModeDrillItem[] = [
  // ── lokativ ───────────────────────────────────────────────────────────────
  {
    mode: 'lokativ',
    q: 'Sandra i Tom razgovaraju o ____.',
    en: 'Sandra and Tom are talking about Opatija.',
    opts: ['Opatiji', 'Opatiju', 'Opatija', 'Opatijom'],
    answer: 'Opatiji',
    tip: 'The topic after o is always in the locative: o Opatiji. Opatiju is the accusative you use for going there, Opatija is the dictionary form, and Opatijom the instrumental.',
  },
  {
    mode: 'lokativ',
    q: 'Kupila sam knjigu o ____.',
    en: 'I bought a book about Croatia.',
    opts: ['Hrvatskoj', 'Hrvatsku', 'Hrvatske', 'Hrvatski'],
    answer: 'Hrvatskoj',
    tip: 'o (about) takes the locative, and country names in -ska take -oj, like an adjective: o Hrvatskoj. Hrvatsku is the accusative, Hrvatske the genitive, and "Hrvatski" puts the noun ending -i on a word that does not take it.',
  },
  {
    mode: 'lokativ',
    q: 'Djeca trče po ____.',
    en: 'The children are running around the garden.',
    opts: ['vrtu', 'vrt', 'vrta', 'vrtom'],
    answer: 'vrtu',
    tip: 'po means around, all over a place, and takes the locative: po vrtu. vrt is the dictionary form (u vrt — into the garden), vrta is the genitive, vrtom the instrumental.',
  },
  {
    mode: 'lokativ',
    q: 'Ljeti putujemo po ____.',
    en: 'In summer we travel around Dalmatia.',
    opts: ['Dalmaciji', 'Dalmaciju', 'Dalmacije', 'Dalmacijom'],
    answer: 'Dalmaciji',
    tip: 'Traveling around inside a region is po + locative: po Dalmaciji. Dalmaciju is the accusative that u takes for going there, Dalmacije is the genitive, Dalmacijom the instrumental.',
  },
  {
    mode: 'lokativ',
    q: 'Čitala sam to u ____.',
    en: 'I read that in a book.',
    opts: ['knjizi', 'knjigi', 'knjigu', 'knjiga'],
    answer: 'knjizi',
    tip: 'Where you read it is u + locative, and g turns into z before -i: u knjizi. "knjigi" skips that change, knjigu is the accusative, and knjiga the dictionary form.',
  },
  {
    mode: 'lokativ',
    q: 'Ne govorimo o njemu, govorimo o ____.',
    en: 'We are not talking about him, we are talking about you.',
    opts: ['tebi', 'ti', 'te', 'tobom'],
    answer: 'tebi',
    tip: 'After a preposition only the long form can stand, and o takes the locative: o tebi. ti and te are short forms that never follow a preposition, and tobom is the instrumental (s tobom).',
  },
  {
    mode: 'lokativ',
    q: 'Ovo je moja sestra. Često govorim o ____.',
    en: 'This is my sister. I often talk about her.',
    opts: ['njoj', 'joj', 'nju', 'ona'],
    answer: 'njoj',
    tip: 'The locative of ona after o is the long form njoj. The short joj cannot follow a preposition, nju is the accusative, and ona is the subject form.',
  },
  {
    mode: 'lokativ',
    q: 'Rođendan mi je u ____.',
    cue: 'svibanj',
    en: 'My birthday is in May.',
    opts: ['svibnju', 'svibanj', 'svibnja', 'svibnjem'],
    answer: 'svibnju',
    tip: 'The locative also says when: u + the month, and svibanj drops its a: u svibnju. svibanj is the dictionary form, svibnja is the genitive used in dates (prvog svibnja), svibnjem the instrumental.',
  },
  {
    mode: 'lokativ',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct? (I live in Zagreb.)',
    opts: ['Živim u Zagrebu.', 'Živim Zagrebu.', 'Živim u Zagreb.', 'Živim o Zagrebu.'],
    answer: 'Živim u Zagrebu.',
    tip: 'The locative never stands alone: it needs its preposition, and a place you are in takes u. Without u the sentence falls apart, u Zagreb is the accusative for going there, and o Zagrebu means about Zagreb.',
  },

  // ── komu ──────────────────────────────────────────────────────────────────
  {
    mode: 'komu',
    q: 'Poslala sam poruku ____.',
    cue: 'teta',
    en: 'I sent a message to my aunt.',
    opts: ['teti', 'tetu', 'teta', 'tete'],
    answer: 'teti',
    tip: 'The aunt receives the message, so she is in the dative (komu?): teti. tetu is the accusative and would make her the thing sent, teta is the dictionary form, tete the genitive.',
  },
  {
    mode: 'komu',
    q: 'Tom kuha ručak ____.',
    cue: 'mama',
    en: 'Tom is cooking lunch for his mom.',
    opts: ['mami', 'mamu', 'mama', 'mame'],
    answer: 'mami',
    tip: 'The person something is done for is in the dative with no preposition: mami. mamu is the accusative — that would put Mom in the pot — mama is the dictionary form, and mame the genitive.',
  },
  {
    mode: 'komu',
    q: 'Marin je poklonio cvijeće ____.',
    cue: 'djevojka',
    en: 'Marin gave flowers to his girlfriend.',
    opts: ['djevojci', 'djevojki', 'djevojku', 'djevojka'],
    answer: 'djevojci',
    tip: 'The receiver is in the dative, and k turns into c before -i: djevojci. "djevojki" skips that change, djevojku is the accusative, and djevojka the dictionary form.',
  },
  {
    mode: 'komu',
    q: 'Dao sam ključ ____.',
    cue: 'susjed',
    en: 'I gave the key to the neighbor.',
    opts: ['susjedu', 'susjeda', 'susjed', 'susjedom'],
    answer: 'susjedu',
    tip: 'The key is the thing given (accusative); the neighbor receives it, so dative -u: susjedu. susjeda is the accusative and would make him the thing given, susjed is the dictionary form, susjedom the instrumental.',
  },
  {
    mode: 'komu',
    q: 'Ana ima rođendan. Kupio sam ____ knjigu.',
    en: "It is Ana's birthday. I bought her a book.",
    opts: ['joj', 'je', 'nju', 'ona'],
    answer: 'joj',
    tip: 'Ana receives the book, so the short dative of ona: joj. je and nju are accusative forms (I bought HER), and ona is the subject form.',
  },
  {
    mode: 'komu',
    q: 'Marko je daleko. Pišem ____ svaki tjedan.',
    en: 'Marko is far away. I write to him every week.',
    opts: ['mu', 'ga', 'on', 'njega'],
    answer: 'mu',
    tip: 'You write TO him, so the short dative of on: mu. ga and njega are accusative forms, and on is the subject form.',
  },
  {
    mode: 'komu',
    q: 'Djeca su gladna. Mama ____ daje kruh.',
    en: 'The children are hungry. Mom is giving them bread.',
    opts: ['im', 'ih', 'oni', 'njih'],
    answer: 'im',
    tip: 'The children receive the bread, so the short dative for "them": im. ih and njih are accusative or genitive forms, and oni is the subject form.',
  },
  {
    mode: 'komu',
    q: 'Možeš li ____ reći koliko je sati?',
    en: 'Can you tell me what time it is?',
    opts: ['mi', 'me', 'ja', 'mene'],
    answer: 'mi',
    tip: 'reći takes the person in the dative, and the short dative of ja is mi. me and mene are accusative forms, and ja is the subject form.',
  },
  {
    mode: 'komu',
    q: 'Ovaj tramvaj vozi prema ____.',
    cue: 'kolodvor',
    en: 'This tram goes toward the station.',
    opts: ['kolodvoru', 'kolodvor', 'kolodvora', 'kolodvorom'],
    answer: 'kolodvoru',
    tip: 'prema (toward) is one of the few prepositions that take the dative: prema kolodvoru. kolodvor is what na takes for going onto it, kolodvora is the genitive (do kolodvora), kolodvorom the instrumental.',
  },
  {
    mode: 'komu',
    q: 'Navečer idemo k ____.',
    cue: 'baka',
    en: "In the evening we are going to Grandma's.",
    opts: ['baki', 'baku', 'bake', 'bakom'],
    answer: 'baki',
    tip: "Going to a person is k + dative, and family words like baka keep their k: baki. baku is the accusative, bake the genitive (kod bake — at Grandma's), and bakom the instrumental.",
  },

  // ── glagoli ───────────────────────────────────────────────────────────────
  {
    mode: 'glagoli',
    q: 'Radujem se ____.',
    cue: 'vikend',
    en: 'I am looking forward to the weekend.',
    opts: ['vikendu', 'vikend', 'vikenda', 'vikendom'],
    answer: 'vikendu',
    tip: 'radovati se takes the dative with no preposition: vikendu. vikend is the accusative, the case English makes you expect; vikenda is the genitive, and vikendom means "on weekends".',
  },
  {
    mode: 'glagoli',
    q: 'Djeca se raduju ____.',
    cue: 'zima',
    en: 'The children are looking forward to winter.',
    opts: ['zimi', 'zimu', 'zima', 'zime'],
    answer: 'zimi',
    tip: 'What you look forward to is in the dative after radovati se: zimi. zimu is the accusative, zima the dictionary form, and zime the genitive.',
  },
  {
    mode: 'glagoli',
    q: 'Vjerujem ____.',
    cue: 'brat',
    en: 'I believe my brother.',
    opts: ['bratu', 'brata', 'brat', 'bratom'],
    answer: 'bratu',
    tip: 'vjerovati takes the person in the dative: bratu. brata is the accusative that English "believe him" suggests, brat is the dictionary form, and bratom the instrumental.',
  },
  {
    mode: 'glagoli',
    q: 'Zahvalio sam ____ na pomoći.',
    cue: 'profesor',
    en: 'I thanked the professor for the help.',
    opts: ['profesoru', 'profesora', 'profesor', 'profesorom'],
    answer: 'profesoru',
    tip: 'Croatian thanks TO someone: zahvaliti + dative, profesoru. profesora is the accusative, profesor the dictionary form, and profesorom the instrumental.',
  },
  {
    mode: 'glagoli',
    q: 'Subotom pomažem ____ u vrtu.',
    cue: 'djed',
    en: 'On Saturdays I help Grandpa in the garden.',
    opts: ['djedu', 'djeda', 'djed', 'djedom'],
    answer: 'djedu',
    tip: 'pomagati takes the dative: djedu. djeda is the accusative, the most common slip here; djed is the dictionary form, and djedom the instrumental. (u vrtu is a locative: same -u, but it needs its preposition.)',
  },
  {
    mode: 'glagoli',
    q: 'Kako se kaže „Help her!“?',
    en: 'Choose the correct sentence.',
    opts: ['Pomozi joj!', 'Pomozi je!', 'Pomozi nju!', 'Pomozi ona!'],
    answer: 'Pomozi joj!',
    tip: 'pomoći takes the dative, and the short dative of ona is joj. je and nju are accusative forms, and ona is the subject form.',
  },
  {
    mode: 'glagoli',
    q: 'Ana uvijek govori istinu. Vjerujem ____.',
    en: 'Ana always tells the truth. I believe her.',
    opts: ['joj', 'je', 'nju', 'ona'],
    answer: 'joj',
    tip: 'vjerovati takes the dative, so "her" is joj. je and nju are accusative forms that the English sentence tempts you into, and ona is the subject form.',
  },
  {
    mode: 'glagoli',
    q: 'Prijatelji su nam pomogli. Zahvalili smo ____.',
    en: 'Our friends helped us. We thanked them.',
    opts: ['im', 'ih', 'oni', 'njih'],
    answer: 'im',
    tip: 'zahvaliti takes the dative, and the short dative for "them" is im. ih and njih are accusative or genitive forms, and oni is the subject form.',
  },
  {
    mode: 'glagoli',
    q: '____ se raduješ? — Moru!',
    en: 'What are you looking forward to? — The sea!',
    opts: ['Čemu', 'Što', 'Čega', 'Čime'],
    answer: 'Čemu',
    tip: 'radovati se takes the dative, and the dative of što is čemu — the same case as the answer, moru. Što is the subject or object form, Čega the genitive, and Čime the instrumental.',
  },
];
