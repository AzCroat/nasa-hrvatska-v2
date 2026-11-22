// src/data/drills/a1/locativeIntroDrill.ts
//
// A1 THE LOCATIVE — the drill for the `locative-intro` lesson.
//
// Follows Hrvatski za početnike 1, pages 64–66 (unit "Gdje živimo?"): the dorm dialogue
// ("Moja obitelj živi u Pekingu… u Osijeku"), "Danijelina soba" and "Marinina soba" ("Na
// stolu su knjige. U ormaru je odjeća. Na podu je tepih."), the LOKATIV IMENICA table
// (na stolu · u sobi · na računalu) and the row "Rječnik je na ____. (stol)". Singular
// only, as in the lesson; the plural -ima / -ama the book adds comes later in the app.
//
// Three modes:
//   muski    — masculine and neuter nouns take -u
//   zenski   — feminine nouns take -i
//   gdjekamo — Gdje? + locative against Kamo? + accusative, and o + locative

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const LOCATIVE_INTRO_MODE_LABELS: Record<string, string> = {
  muski: '🅿️ -u',
  zenski: '🏫 -i',
  gdjekamo: '🧭 Gdje? Kamo?',
};

export const LOCATIVE_INTRO_DRILL_DATA: ModeDrillItem[] = [
  // ── muski ─────────────────────────────────────────────────────────────────
  {
    mode: 'muski',
    q: 'Kefeng studira u ____. (Peking)',
    en: 'Kefeng goes to college in Beijing.',
    opts: ['Pekingu', 'Peking', 'Pekinga', 'Pekingi'],
    answer: 'Pekingu',
    tip: 'Where someone studies is a place, so u + locative, and a masculine noun takes -u: u Pekingu. Peking is the plain form, and -i is the feminine ending.',
  },
  {
    mode: 'muski',
    q: 'Rječnik je na ____. (stol)',
    en: 'The dictionary is on the table.',
    opts: ['stolu', 'stol', 'stola', 'stoli'],
    answer: 'stolu',
    tip: 'Nothing is moving, so na + locative: masculine stol → na stolu. "na stol" is where you PUT something; -i belongs to feminine nouns.',
  },
  {
    mode: 'muski',
    q: 'Tata je danas u ____. (grad)',
    en: 'Dad is in town today.',
    opts: ['gradu', 'grad', 'grada', 'gradi'],
    answer: 'gradu',
    tip: 'Being somewhere takes the locative: grad → u gradu. "u grad" means going into town, and -i is the feminine ending.',
  },
  {
    mode: 'muski',
    q: 'Baka i djed su na ____. (more)',
    en: 'Grandma and Grandpa are at the seaside.',
    opts: ['moru', 'mora', 'mori', 'morom'],
    answer: 'moru',
    tip: 'Neuter nouns take -u as well: more → na moru. One ending covers masculine and neuter; -i is only for feminine nouns in -a.',
  },
  {
    mode: 'muski',
    q: 'Kaput je u ____. (ormar)',
    en: 'The coat is in the closet.',
    opts: ['ormaru', 'ormar', 'ormara', 'ormari'],
    answer: 'ormaru',
    tip: 'Gdje je kaput? — u ormaru. Masculine nouns take -u for a place. ormari would be the plural "closets".',
  },
  {
    mode: 'muski',
    q: 'Torba je na ____. (pod)',
    en: 'The bag is on the floor.',
    opts: ['podu', 'pod', 'poda', 'podi'],
    answer: 'podu',
    tip: 'na + locative for where something lies: pod → na podu. The plain form pod cannot follow na when nothing is moving.',
  },
  {
    mode: 'muski',
    q: 'Živimo u ____. (selo)',
    en: 'We live in a village.',
    opts: ['selu', 'sela', 'seli', 'selom'],
    answer: 'selu',
    tip: 'selo is neuter, and neuter nouns take -u: u selu. sela is another form of the word, and -i is the feminine ending.',
  },
  {
    mode: 'muski',
    q: 'Ivana studira u ____. (Zagreb)',
    en: 'Ivana goes to college in Zagreb.',
    opts: ['Zagrebu', 'Zagreb', 'Zagreba', 'Zagrebi'],
    answer: 'Zagrebu',
    tip: 'A town name changes like any masculine noun: u Zagrebu. "Studiram u Zagreb" keeps the plain form, and Zagreba is the form after iz (iz Zagreba).',
  },
  {
    mode: 'muski',
    q: 'Petra nije doma. Ona je na ____. (posao)',
    en: 'Petra is not at home. She is at work.',
    opts: ['poslu', 'posau', 'posaou', 'posla'],
    answer: 'poslu',
    tip: 'posao loses its a and the o turns back into l when an ending is added: na poslu. "posau" and "posaou" just add -u to the dictionary form.',
  },

  // ── zenski ────────────────────────────────────────────────────────────────
  {
    mode: 'zenski',
    q: 'Studentice su u ____. (soba)',
    en: 'The students are in the room.',
    opts: ['sobi', 'sobu', 'soba', 'sobe'],
    answer: 'sobi',
    tip: 'A feminine noun in -a takes -i for a place: u sobi. "u sobu" is the accusative, for going into the room.',
  },
  {
    mode: 'zenski',
    q: 'Vaza je na ____. (polica)',
    en: 'The vase is on the shelf.',
    opts: ['polici', 'policu', 'polica', 'police'],
    answer: 'polici',
    tip: 'Gdje je vaza? — na polici. Feminine -a → -i. "na policu" is where you put the vase, not where it is.',
  },
  {
    mode: 'zenski',
    q: 'Mačka je u ____. (kuća)',
    en: 'The cat is in the house.',
    opts: ['kući', 'kuću', 'kuća', 'kuće'],
    answer: 'kući',
    tip: 'Being inside takes the locative: kuća → u kući. "u kuću" means going into the house.',
  },
  {
    mode: 'zenski',
    q: 'Djeca su u ____. (škola)',
    en: 'The children are at school.',
    opts: ['školi', 'školu', 'škola', 'škole'],
    answer: 'školi',
    tip: 'u školi is being AT school; u školu is going TO school. The verb su shows nobody is moving, so -i.',
  },
  {
    mode: 'zenski',
    q: 'Sjedim u ____ i pijem kavu. (kavana)',
    en: 'I am sitting in a café and drinking coffee.',
    opts: ['kavani', 'kavanu', 'kavana', 'kavane'],
    answer: 'kavani',
    tip: 'Sitting is not moving, so the locative: u kavani. kavanu would follow a verb of going, such as Idem u kavanu.',
  },
  {
    mode: 'zenski',
    q: 'Poklon je u ____. (kutija)',
    en: 'The present is in the box.',
    opts: ['kutiji', 'kutiju', 'kutija', 'kutije'],
    answer: 'kutiji',
    tip: 'kutija → u kutiji: the -a becomes -i and the j stays. kutiju is the accusative form.',
  },
  {
    mode: 'zenski',
    q: 'Ona radi u ____. (banka)',
    en: 'She works at a bank.',
    opts: ['banci', 'banki', 'banku', 'banka'],
    answer: 'banci',
    tip: 'Before the locative -i, k changes to c: banka → u banci. "u banki" forgets the change, and banku is the accusative.',
  },
  {
    mode: 'zenski',
    q: 'Živim u ____. (Hrvatska)',
    en: 'I live in Croatia.',
    opts: ['Hrvatskoj', 'Hrvatski', 'Hrvatsku', 'Hrvatske'],
    answer: 'Hrvatskoj',
    tip: 'Hrvatska is shaped like an adjective, so its locative ends in -oj: u Hrvatskoj. Learn it as a phrase. u Hrvatsku is going there, and iz Hrvatske is "from Croatia".',
  },
  {
    mode: 'zenski',
    q: 'Čaj je u ____. (šalica)',
    en: 'The tea is in the cup.',
    opts: ['šalici', 'šalicu', 'šalica', 'šalice'],
    answer: 'šalici',
    tip: 'šalica → u šalici. Feminine -a becomes -i for a place. šalicu is the object form, as in Trebam šalicu.',
  },

  // ── gdjekamo ──────────────────────────────────────────────────────────────
  {
    mode: 'gdjekamo',
    q: '____ si? — U gradu sam.',
    en: '… are you? — I am in town.',
    opts: ['Gdje', 'Kamo', 'Tko', 'Što'],
    answer: 'Gdje',
    tip: 'u gradu is a locative, a place where someone IS, so the question is Gdje? Kamo? asks where someone is going and expects u grad.',
  },
  {
    mode: 'gdjekamo',
    q: '____ ideš? — U grad.',
    en: '… are you going? — Into town.',
    opts: ['Kamo', 'Gdje', 'Što', 'Kako'],
    answer: 'Kamo',
    tip: 'u grad is an accusative, a destination, so the question is Kamo? Gdje? asks where someone is and expects u gradu.',
  },
  {
    mode: 'gdjekamo',
    q: 'Idem u ____. (škola)',
    en: 'I am going to school.',
    opts: ['školu', 'školi', 'škola', 'škole'],
    answer: 'školu',
    tip: 'Idem is movement toward a place, so u + accusative: u školu. u školi is for being there already.',
  },
  {
    mode: 'gdjekamo',
    q: 'Čitam knjigu u ____. (park)',
    en: 'I am reading a book in the park.',
    opts: ['parku', 'park', 'parka', 'parki'],
    answer: 'parku',
    tip: 'Reading happens in one place, so the locative: u parku. "u park" would need a verb of going.',
  },
  {
    mode: 'gdjekamo',
    q: 'U subotu idemo na ____.',
    en: 'On Saturday we are going to the seaside.',
    opts: ['more', 'moru', 'mora', 'morom'],
    answer: 'more',
    tip: 'idemo is movement, so na + accusative, and a neuter noun does not change in the accusative: na more. na moru is being there.',
  },
  {
    mode: 'gdjekamo',
    q: 'Mama i tata su sada na ____. (otok)',
    en: 'Mom and Dad are on an island now.',
    opts: ['otoku', 'otok', 'otoka', 'otoke'],
    answer: 'otoku',
    tip: 'su says where they ARE, so the locative: na otoku. na otok is the trip there.',
  },
  {
    mode: 'gdjekamo',
    q: '— Kamo ideš? — Na ____.',
    en: 'Where are you going? — To work.',
    opts: ['posao', 'poslu', 'posla', 'poslom'],
    answer: 'posao',
    tip: 'Kamo? expects the accusative, and a masculine thing does not change in the accusative: na posao. na poslu answers Gdje?',
  },
  {
    mode: 'gdjekamo',
    q: 'Govorimo o ____. (film)',
    en: 'We are talking about the movie.',
    opts: ['filmu', 'film', 'filma', 'filmom'],
    answer: 'filmu',
    tip: 'o ("about") takes the locative too: o filmu. It is the same -u as in u gradu, doing a different job.',
  },
  {
    mode: 'gdjekamo',
    q: 'What always stands in front of a noun in the locative?',
    opts: [
      'A preposition such as u, na or o',
      'A verb of motion such as ići',
      'The word je',
      'Nothing: it can stand alone',
    ],
    answer: 'A preposition such as u, na or o',
    tip: 'The locative never appears without a preposition. A verb of motion calls for the accusative instead, and je has nothing to do with the case.',
  },
];
