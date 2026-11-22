// src/data/drills/a1/dativeIntroDrill.ts
//
// A1 THE DATIVE — the drill for the `dative-intro` lesson.
//
// Follows Hrvatski za početnike 1, page 81 (DATIV IMENICA, komu? čemu?: studentu ·
// studentici · vremenu, with the note "Dativ je po nastavcima jednak lokativu") and pages
// 90–91: GLAGOL pisati ("… piše mami razglednicu"), the "dativne uloge" box (neizravni
// objekt) and its list "glagoli s dativom: dati, reći, pisati, slati, pokloniti…". The
// book's dative of direction (prema, k) belongs to the next lesson and is left out.
// Singular only, as in the lesson.
//
// Three modes:
//   komu       — the dative ending: -u, -i
//   dvaobjekta — the thing in the accusative, the person in the dative
//   glagoli    — verbs that demand the dative, and telling it from the locative

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const DATIVE_INTRO_MODE_LABELS: Record<string, string> = {
  komu: '🎁 Komu?',
  dvaobjekta: '🧩 Što i komu',
  glagoli: '🤝 Glagoli',
};

export const DATIVE_INTRO_DRILL_DATA: ModeDrillItem[] = [
  // ── komu ──────────────────────────────────────────────────────────────────
  {
    mode: 'komu',
    q: 'Pišem ____ poruku. (mama)',
    en: 'I am writing Mom a message.',
    opts: ['mami', 'mamu', 'mama', 'mame'],
    answer: 'mami',
    tip: 'Mom receives the message, so she is in the dative: feminine -a → -i. mamu is the accusative, which would make Mom the thing being written.',
  },
  {
    mode: 'komu',
    q: 'Dajem ____ knjigu. (brat)',
    en: 'I am giving my brother a book.',
    opts: ['bratu', 'brata', 'brat', 'bratom'],
    answer: 'bratu',
    tip: 'The receiver takes the dative, and a masculine noun takes -u: bratu. brata is the accusative (Vidim brata), and brat is the subject form.',
  },
  {
    mode: 'komu',
    q: 'Šaljem ____ poruku. (Ana)',
    en: 'I am sending Ana a message.',
    opts: ['Ani', 'Anu', 'Ane', 'Anom'],
    answer: 'Ani',
    tip: 'A name changes like any noun in -a: Ana → Ani. Anu is the accusative, as in Vidim Anu.',
  },
  {
    mode: 'komu',
    q: 'Tata piše ____ pismo. (baka)',
    en: 'Dad is writing Grandma a letter.',
    opts: ['baki', 'baku', 'bake', 'baka'],
    answer: 'baki',
    tip: 'Komu piše? — baki. Feminine -a → -i. baku is the accusative, and baka is the subject form.',
  },
  {
    mode: 'komu',
    q: 'Kupila sam ____ cvijeće. (sestra)',
    en: 'I bought my sister flowers.',
    opts: ['sestri', 'sestru', 'sestre', 'sestra'],
    answer: 'sestri',
    tip: 'The person the flowers are for is in the dative: sestri. sestru would make the sister the thing that was bought.',
  },
  {
    mode: 'komu',
    q: 'Poslat ću ____ poruku. (stric)',
    en: 'I will send my uncle a message.',
    opts: ['stricu', 'strica', 'stric', 'stricom'],
    answer: 'stricu',
    tip: 'Masculine nouns take -u: stricu. strica is the accusative, and stric the subject form.',
  },
  {
    mode: 'komu',
    q: 'Pišem ____. (prijatelj)',
    en: 'I am writing to a friend.',
    opts: ['prijatelju', 'prijatelja', 'prijatelj', 'prijateljem'],
    answer: 'prijatelju',
    tip: 'English needs "to"; Croatian puts it in the ending: prijatelju. prijatelja is the accusative, and prijateljem belongs to another case.',
  },
  {
    mode: 'komu',
    q: 'Javio sam ____. (tata)',
    en: 'I let Dad know.',
    opts: ['tati', 'tatu', 'tata', 'tate'],
    answer: 'tati',
    tip: 'tata is a man, but the word ends in -a and changes like mama: tati. tatu is the accusative.',
  },
  {
    mode: 'komu',
    q: 'Mama čita ____ priču. (dijete)',
    en: 'Mom is reading the child a story.',
    opts: ['djetetu', 'dijetu', 'dijete', 'djeteta'],
    answer: 'djetetu',
    tip: 'dijete grows before an ending: djetet- + -u = djetetu. "dijetu" adds -u to the short form, and dijete is the subject form.',
  },

  // ── dvaobjekta ────────────────────────────────────────────────────────────
  {
    mode: 'dvaobjekta',
    q: 'Which sentence is correct for "I am sending Mom a postcard"?',
    opts: [
      'Šaljem mami razglednicu.',
      'Šaljem mamu razglednici.',
      'Šaljem mama razglednicu.',
      'Šaljem mami razglednica.',
    ],
    answer: 'Šaljem mami razglednicu.',
    tip: 'The person gets the dative (mami) and the thing the accusative (razglednicu). Swapping the endings sends Mom to a postcard, and neither noun can stay in its dictionary form.',
  },
  {
    mode: 'dvaobjekta',
    q: 'Dajem sestri ____. (knjiga)',
    en: 'I am giving my sister a book.',
    opts: ['knjigu', 'knjizi', 'knjiga', 'knjige'],
    answer: 'knjigu',
    tip: 'The thing given answers Što? and stays in the accusative: knjigu. The dative is already used up by the receiver, sestri.',
  },
  {
    mode: 'dvaobjekta',
    q: 'Kupit ćemo teti ____. (ogrlica)',
    en: 'We will buy our aunt a necklace.',
    opts: ['ogrlicu', 'ogrlici', 'ogrlica', 'ogrlice'],
    answer: 'ogrlicu',
    tip: 'teti is the receiver (dative), so the necklace is the thing bought: accusative ogrlicu. Two -i endings in a row would give the sentence two receivers.',
  },
  {
    mode: 'dvaobjekta',
    q: 'Marko je dao ____ ključ. (susjed)',
    en: 'Marko gave the neighbor a key.',
    opts: ['susjedu', 'susjeda', 'susjed', 'susjedom'],
    answer: 'susjedu',
    tip: 'ključ is the thing (accusative), and the neighbor receives it: dative susjedu. susjeda is the accusative and would make him the thing given.',
  },
  {
    mode: 'dvaobjekta',
    q: 'Rekla sam ____ istinu. (prijateljica)',
    en: 'I told my friend the truth.',
    opts: ['prijateljici', 'prijateljicu', 'prijateljica', 'prijateljice'],
    answer: 'prijateljici',
    tip: 'The person you tell is in the dative: prijateljici. The thing told, istinu, is in the accusative; prijateljicu would be a second accusative.',
  },
  {
    mode: 'dvaobjekta',
    q: '____ pišeš pismo? — Baki.',
    en: '… are you writing a letter? — To Grandma.',
    opts: ['Komu', 'Koga', 'Tko', 'Što'],
    answer: 'Komu',
    tip: 'The answer is a dative, baki, so the question is Komu? ("to whom?"). Koga asks for an accusative, Tko for the subject, and Što for a thing.',
  },
  {
    mode: 'dvaobjekta',
    q: '____ šalješ baki? — Razglednicu.',
    en: '… are you sending Grandma? — A postcard.',
    opts: ['Što', 'Komu', 'Tko', 'Gdje'],
    answer: 'Što',
    tip: 'The answer is the thing, razglednicu, so the question is Što? Komu? would ask for the receiver, who is already named: baki.',
  },
  {
    mode: 'dvaobjekta',
    q: 'Luka sutra daje baki knjigu. — Which word is the receiver?',
    en: 'Luka is giving Grandma a book tomorrow.',
    opts: ['baki', 'knjigu', 'Luka', 'sutra'],
    answer: 'baki',
    tip: 'Ask Komu daje? — baki: the -i marks the receiver. knjigu (-u) is the thing given, Luka is the giver, and sutra says when.',
  },
  {
    mode: 'dvaobjekta',
    q: 'Which sentence is correct for "Dad is writing Grandpa a letter"?',
    opts: [
      'Tata piše djedu pismo.',
      'Tata piše djeda pismo.',
      'Tata piše djedu pismu.',
      'Tata piše za djedu pismo.',
    ],
    answer: 'Tata piše djedu pismo.',
    tip: 'Receiver in the dative (djedu), thing in the accusative (pismo, unchanged). djeda is the accusative, pismu puts the thing in the dative too, and the dative needs no preposition.',
  },

  // ── glagoli ───────────────────────────────────────────────────────────────
  {
    mode: 'glagoli',
    q: 'Pomažem ____. (sestra)',
    en: 'I am helping my sister.',
    opts: ['sestri', 'sestru', 'sestre', 'sestrom'],
    answer: 'sestri',
    tip: 'pomoći takes the dative where English has a plain object: you give help TO someone. "Pomažem sestru" is the classic mistake.',
  },
  {
    mode: 'glagoli',
    q: 'Vjerujem ____. (brat)',
    en: 'I believe my brother.',
    opts: ['bratu', 'brata', 'brat', 'bratom'],
    answer: 'bratu',
    tip: 'vjerovati takes the dative: Vjerujem bratu. brata is the accusative, which this verb does not use for a person.',
  },
  {
    mode: 'glagoli',
    q: 'Zahvalio sam ____. (profesor)',
    en: 'I thanked the professor.',
    opts: ['profesoru', 'profesora', 'profesor', 'profesorom'],
    answer: 'profesoru',
    tip: 'zahvaliti takes the dative: you give thanks TO someone. profesora is the accusative that English leads you to expect.',
  },
  {
    mode: 'glagoli',
    q: 'Tko će pomoći ____? Ona kuha ručak. (mama)',
    en: 'Who will help Mom? She is cooking lunch.',
    opts: ['mami', 'mamu', 'mame', 'mamom'],
    answer: 'mami',
    tip: 'pomoći + dative, in any tense: pomoći mami. mamu is the accusative.',
  },
  {
    mode: 'glagoli',
    q: 'Učiteljica objašnjava ____ zadaću. (učenik)',
    en: 'The teacher is explaining the homework to the student.',
    opts: ['učeniku', 'učenika', 'učenik', 'učenikom'],
    answer: 'učeniku',
    tip: 'You explain something (accusative: zadaću) TO someone (dative: učeniku). učenika is the accusative.',
  },
  {
    mode: 'glagoli',
    q: 'Which of these verbs takes the DATIVE for the person?',
    opts: ['vjerovati', 'vidjeti', 'čekati', 'voljeti'],
    answer: 'vjerovati',
    tip: 'vjerovati belongs to the dative set, with dati, reći, pisati and pomoći: Vjerujem bratu. vidjeti, čekati and voljeti take a plain accusative: Vidim brata.',
  },
  {
    mode: 'glagoli',
    q: 'Which sentence contains a DATIVE, not a locative?',
    opts: ['Pišem sestri.', 'Sjedim u sobi.', 'Knjiga je na polici.', 'Živim u kući.'],
    answer: 'Pišem sestri.',
    tip: 'The endings are the same, but the dative comes without a preposition and names a receiver. After u or na, the same -i marks a place: the locative.',
  },
  {
    mode: 'glagoli',
    q: 'How do you tell the dative from the locative, when the endings are the same?',
    opts: [
      'The dative usually has no preposition',
      'The dative always follows u or na',
      'The dative is always the first word',
      'The dative is only for things',
    ],
    answer: 'The dative usually has no preposition',
    tip: 'The locative never appears without a preposition (u školi); the dative almost always does (Dajem sestri). Position in the sentence does not decide it, and the dative is mostly for people.',
  },
  {
    mode: 'glagoli',
    q: 'Which sentence is correct for "I am helping Grandpa"?',
    opts: ['Pomažem djedu.', 'Pomažem djeda.', 'Pomažem za djeda.', 'Pomažem djed.'],
    answer: 'Pomažem djedu.',
    tip: 'pomoći needs the dative with no preposition: djedu. djeda is the accusative, "za" is not used with this verb, and djed is the subject form.',
  },
];
