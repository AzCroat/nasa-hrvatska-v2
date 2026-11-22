// src/data/drills/a1/vocativeIntroDrill.ts
//
// A1 THE VOCATIVE — the drill for the `vocative-intro` lesson.
//
// Follows Hrvatski za početnike 1, page 138: VOKATIV IMENICA in the book's order —
// masculine -e (Ivane) and -u after a soft consonant (mužu), the changes k → č, g → ž,
// h → š (čovječe) and otac → oče; then feminine -o (ženo) and -ica → -ice; then the notes
// "Ženska se prezimena ne dekliniraju", "Vokativ množine jednak je nominativu množine"
// and "Vokativ srednjeg roda jednak je nominativu". The rows "____, … (doktor)" give the
// item shape; the sentences are new.
//
// Three modes:
//   muski  — masculine nouns: -e, -u, and the softened k, g, h, c
//   zenski — feminine nouns: -o, and -ice
//   imena  — names, surnames with gospodine / gospođo, plural and neuter

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VOCATIVE_INTRO_MODE_LABELS: Record<string, string> = {
  muski: '🙋‍♂️ Ivane!',
  zenski: '🙋‍♀️ Gospođo!',
  imena: '📣 Imena',
};

export const VOCATIVE_INTRO_DRILL_DATA: ModeDrillItem[] = [
  // ── muski ─────────────────────────────────────────────────────────────────
  {
    mode: 'muski',
    q: 'Dobar dan, ____! Imate li vremena? (doktor)',
    en: 'Hello, Doctor! Do you have a moment?',
    opts: ['doktore', 'doktoru', 'doktoro', 'doktora'],
    answer: 'doktore',
    tip: 'A masculine noun ending in a hard consonant adds -e when you speak TO the person: doktore. -u is for soft consonants, and -o is the feminine ending.',
  },
  {
    mode: 'muski',
    q: 'Bog, ____! Kako si? (brat)',
    en: 'Hi, brother! How are you?',
    opts: ['brate', 'bratu', 'brato', 'brata'],
    answer: 'brate',
    tip: 'brat + -e: brate. bratu is the dative ("to my brother"), not a way of calling him, and -o belongs to feminine nouns.',
  },
  {
    mode: 'muski',
    q: '____, čitaj polako! (Ivan)',
    en: 'Ivan, read slowly!',
    opts: ['Ivane', 'Ivanu', 'Ivano', 'Ivana'],
    answer: 'Ivane',
    tip: "A man's name in a hard consonant adds -e: Ivane. Ivanu belongs to other cases, and Ivano gives him the feminine -o.",
  },
  {
    mode: 'muski',
    q: '____, gdje su ključevi? (Petar)',
    en: 'Petar, where are the keys?',
    opts: ['Petre', 'Petare', 'Petru', 'Petro'],
    answer: 'Petre',
    tip: 'Petar loses its a when an ending is added: Petr- + -e = Petre. "Petare" keeps the a, and Petru is the dative.',
  },
  {
    mode: 'muski',
    q: 'Sretan rođendan, ____! (prijatelj)',
    en: 'Happy birthday, my friend!',
    opts: ['prijatelju', 'prijatelje', 'prijatelja', 'prijateljo'],
    answer: 'prijatelju',
    tip: 'After a soft consonant (here lj) the ending is -u, not -e: prijatelju. "prijatelje" uses the hard-consonant ending.',
  },
  {
    mode: 'muski',
    q: 'Hvala ti, ____! (muž)',
    en: 'Thank you, husband!',
    opts: ['mužu', 'muže', 'muža', 'mužo'],
    answer: 'mužu',
    tip: 'ž is a soft consonant, so -u: mužu. "muže" would follow the hard-consonant rule.',
  },
  {
    mode: 'muski',
    q: 'Dobro jutro, ____! (učitelj)',
    en: 'Good morning, teacher!',
    opts: ['učitelju', 'učitelje', 'učitelja', 'učiteljo'],
    answer: 'učitelju',
    tip: 'učitelj ends in the soft lj, so -u: učitelju. učitelje is wrong here, and -o is for feminine nouns in -a.',
  },
  {
    mode: 'muski',
    q: '____, što radiš? (čovjek)',
    en: 'Man, what are you doing?',
    opts: ['Čovječe', 'Čovjeke', 'Čovjeku', 'Čovjece'],
    answer: 'Čovječe',
    tip: 'Before the -e, k softens to č: čovjek → čovječe. "Čovjeke" skips the change, and "čovjece" uses the c of the plural instead of č.',
  },
  {
    mode: 'muski',
    q: '____, gdje je tvoja mama? (dječak)',
    en: 'Boy, where is your mom?',
    opts: ['Dječače', 'Dječake', 'Dječaku', 'Dječace'],
    answer: 'Dječače',
    tip: 'k → č before -e: dječak → dječače. Without the change it is "dječake", which is a different form (an accusative plural).',
  },
  {
    mode: 'muski',
    q: '____, trebaš li pomoć? (otac)',
    en: 'Father, do you need help?',
    opts: ['Oče', 'Otace', 'Otče', 'Ocu'],
    answer: 'Oče',
    tip: 'otac drops its a, and c softens to č before -e: oče. "Otace" and "Otče" each skip one of the two steps, and ocu is the dative.',
  },

  // ── zenski ────────────────────────────────────────────────────────────────
  {
    mode: 'zenski',
    q: 'Draga ____, sretan ti rođendan! (žena)',
    en: 'Dear wife, happy birthday!',
    opts: ['ženo', 'žene', 'ženu', 'žena'],
    answer: 'ženo',
    tip: 'A feminine noun in -a takes -o when you address the person: ženo. žene and ženu are other cases.',
  },
  {
    mode: 'zenski',
    q: 'Hvala ti, ____! (majka)',
    en: 'Thank you, Mother!',
    opts: ['majko', 'majke', 'majku', 'majci'],
    answer: 'majko',
    tip: 'majka → majko. majci is the dative ("to Mother"), and majku is the accusative.',
  },
  {
    mode: 'zenski',
    q: '____, gdje si? (sestra)',
    en: 'Sister, where are you?',
    opts: ['Sestro', 'Sestre', 'Sestru', 'Sestri'],
    answer: 'Sestro',
    tip: 'sestra → sestro. The -o is the calling form; sestre, sestru and sestri belong to other cases.',
  },
  {
    mode: 'zenski',
    q: 'Dobro jutro, ____! (baka)',
    en: 'Good morning, Grandma!',
    opts: ['bako', 'bake', 'baku', 'baki'],
    answer: 'bako',
    tip: 'baka → bako. baki is the dative you use when giving her something, not when greeting her.',
  },
  {
    mode: 'zenski',
    q: 'Izvolite, ____! (gospođa)',
    en: "Here you are, ma'am!",
    opts: ['gospođo', 'gospođe', 'gospođu', 'gospođi'],
    answer: 'gospođo',
    tip: 'gospođa → gospođo: the polite way to address a woman. gospođe, gospođu and gospođi are other cases.',
  },
  {
    mode: 'zenski',
    q: 'Oprostite, ____, je li ovo Vaša torba? (gospođica)',
    en: 'Excuse me, miss, is this your bag?',
    opts: ['gospođice', 'gospođico', 'gospođicu', 'gospođici'],
    answer: 'gospođice',
    tip: 'A noun in -ica takes -e, not -o: gospođice. "gospođico" follows the general feminine rule, which does not apply to -ica.',
  },
  {
    mode: 'zenski',
    q: 'Doviđenja, ____! (učiteljica)',
    en: 'Goodbye, teacher! (to a woman)',
    opts: ['učiteljice', 'učiteljico', 'učiteljicu', 'učiteljici'],
    answer: 'učiteljice',
    tip: '-ica → -ice: učiteljice. The -o ending is for other feminine nouns, such as gospođo and majko.',
  },
  {
    mode: 'zenski',
    q: 'Laku noć, ____ moja! (duša)',
    en: 'Good night, my dear! (literally "my soul")',
    opts: ['dušo', 'duše', 'dušu', 'duši'],
    answer: 'dušo',
    tip: 'duša → dušo, a common pet name. Feminine -a becomes -o when you speak to someone.',
  },
  {
    mode: 'zenski',
    q: 'Draga ____, hvala na pismu! (prijateljica)',
    en: 'Dear friend, thank you for the letter! (to a woman)',
    opts: ['prijateljice', 'prijateljico', 'prijateljicu', 'prijateljici'],
    answer: 'prijateljice',
    tip: 'prijateljica ends in -ica, so -e: prijateljice. This is how a letter to a woman friend opens.',
  },

  // ── imena ─────────────────────────────────────────────────────────────────
  {
    mode: 'imena',
    q: 'Dobro došli, gospodine ____! (Kovačić)',
    en: 'Welcome, Mr. Kovačić!',
    opts: ['Kovačiću', 'Kovačiće', 'Kovačića', 'Kovačićo'],
    answer: 'Kovačiću',
    tip: "A man's surname changes with gospodine, and ć is a soft consonant, so -u: gospodine Kovačiću. -e is for hard consonants, and -o is feminine.",
  },
  {
    mode: 'imena',
    q: 'Which greeting is correct for "Hello, Mrs. Kovačić"?',
    opts: [
      'Dobar dan, gospođo Kovačić!',
      'Dobar dan, gospođo Kovačiću!',
      'Dobar dan, gospođa Kovačić!',
      'Dobar dan, gospođo Kovačićo!',
    ],
    answer: 'Dobar dan, gospođo Kovačić!',
    tip: "gospođa takes the vocative -o, but a woman's surname never changes: gospođo Kovačić. The -u ending is only for a man (gospodine Kovačiću), gospođa is the subject form, and a surname never takes -o.",
  },
  {
    mode: 'imena',
    q: '____, izvolite sjesti! (gospodin)',
    en: 'Sir, please have a seat!',
    opts: ['Gospodine', 'Gospodinu', 'Gospodino', 'Gospodina'],
    answer: 'Gospodine',
    tip: 'gospodin + -e: gospodine, the polite way to address a man you do not know. Gospodinu is the dative.',
  },
  {
    mode: 'imena',
    q: 'Bog, ____! Što ima novo? (Josip)',
    en: 'Hi, Josip! What is new?',
    opts: ['Josipe', 'Josipu', 'Josipo', 'Josipa'],
    answer: 'Josipe',
    tip: 'Josip ends in a hard consonant: Josipe. "Josipo" gives a man the feminine -o, and Josipu is another case.',
  },
  {
    mode: 'imena',
    q: '____, dođi na ručak! (Tom)',
    en: 'Tom, come to lunch!',
    opts: ['Tome', 'Tomu', 'Tomo', 'Toma'],
    answer: 'Tome',
    tip: 'A foreign name ending in a consonant behaves like a Croatian one: Tom → Tome. Tomu and Toma are other cases.',
  },
  {
    mode: 'imena',
    q: "Which man's name stays the same when you call him?",
    opts: ['Marko', 'Ivan', 'Josip', 'Petar'],
    answer: 'Marko',
    tip: "A man's name that already ends in -o or -e does not change: Marko! The others end in a consonant and add -e: Ivane, Josipe, Petre.",
  },
  {
    mode: 'imena',
    q: 'Which of these stays the same when you call the person?',
    opts: ['Marija', 'gospođa', 'majka', 'sestra'],
    answer: 'Marija',
    tip: "Many women's first names stay as they are: Marija! Ordinary nouns in -a take -o: gospođo, majko, sestro.",
  },
  {
    mode: 'imena',
    q: 'Dragi ____, dobro došli u Zagreb! (prijatelj, plural)',
    en: 'Dear friends, welcome to Zagreb!',
    opts: ['prijatelji', 'prijatelju', 'prijatelje', 'prijateljima'],
    answer: 'prijatelji',
    tip: 'In the plural the vocative is the same as the nominative: prijatelji. prijatelju is the singular form, for one friend.',
  },
  {
    mode: 'imena',
    q: 'How do you address a neuter noun, as in "sunce moje"?',
    en: '"my sunshine", said to someone you love',
    opts: [
      'With the same form as the nominative',
      'With the ending -e added',
      'With the ending -u',
      'With the ending -o in place of -e',
    ],
    answer: 'With the same form as the nominative',
    tip: 'Neuter nouns do not change when you address someone: sunce moje, zlato moje, dijete moje. The -e, -u and -o rules are for masculine and feminine nouns.',
  },
];
