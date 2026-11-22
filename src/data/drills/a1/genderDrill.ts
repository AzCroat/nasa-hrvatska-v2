// src/data/drills/a1/genderDrill.ts
//
// A1 NOUN GENDER — the drill for the `gender` lesson.
//
// Follows Hrvatski za početnike 1, pages 13–14: "rodovi" with the picture nouns
// (telefon, olovka, autobus, poklon), the sorting exercise into muški / ženski / srednji
// rod, the endings table (poklon · knjiga · pismo / sunce) and the note that auto, taksi,
// intervju, metro and euro are masculine. Only the dictionary form is used: no adjective
// agreement, no plural, no case endings.
//
// Three modes:
//   rod       — telling the gender from the ending
//   zamjenica — on / ona / ono standing for a noun
//   iznimke   — the endings that mislead: auto, tata, Luka, noć

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const GENDER_MODE_LABELS: Record<string, string> = {
  rod: '🏷️ Rod',
  zamjenica: '👉 On, ona, ono',
  iznimke: '⚠️ Iznimke',
};

export const GENDER_DRILL_DATA: ModeDrillItem[] = [
  // ── rod ───────────────────────────────────────────────────────────────────
  {
    mode: 'rod',
    q: 'Which noun is feminine?',
    opts: ['knjiga', 'poklon', 'pismo', 'telefon'],
    answer: 'knjiga',
    tip: 'knjiga ends in -a, the feminine ending. poklon and telefon end in a consonant (masculine), and pismo ends in -o (neuter).',
  },
  {
    mode: 'rod',
    q: 'Which noun is masculine?',
    opts: ['autobus', 'olovka', 'sunce', 'kuća'],
    answer: 'autobus',
    tip: 'autobus ends in a consonant, so it is masculine. olovka and kuća end in -a (feminine), and sunce ends in -e (neuter).',
  },
  {
    mode: 'rod',
    q: 'Which noun is neuter?',
    opts: ['selo', 'soba', 'papir', 'fotografija'],
    answer: 'selo',
    tip: 'selo ends in -o, a neuter ending. soba and fotografija end in -a (feminine), and papir ends in a consonant (masculine).',
  },
  {
    mode: 'rod',
    q: 'Which of these four nouns is the neuter one?',
    opts: ['more', 'grad', 'žena', 'hotel'],
    answer: 'more',
    tip: 'more ends in -e, the other neuter ending. grad and hotel end in a consonant (masculine), and žena ends in -a (feminine).',
  },
  {
    mode: 'rod',
    q: 'Which of these four nouns is the feminine one?',
    opts: ['olovka', 'fakultet', 'polje', 'stol'],
    answer: 'olovka',
    tip: 'olovka ends in -a, so it is feminine. fakultet and stol end in a consonant (masculine), and polje ends in -e (neuter).',
  },
  {
    mode: 'rod',
    q: 'Which of these four nouns is the masculine one?',
    opts: ['kompjutor', 'stablo', 'kopija', 'pismo'],
    answer: 'kompjutor',
    tip: 'kompjutor ends in a consonant, so it is masculine. stablo and pismo end in -o (neuter), and kopija ends in -a (feminine).',
  },
  {
    mode: 'rod',
    q: 'A noun that ends in a consonant, like "poklon", is usually ____.',
    opts: ['masculine', 'feminine', 'neuter', 'either feminine or neuter'],
    answer: 'masculine',
    tip: 'A consonant at the end is the masculine sign: poklon, grad, stol. Feminine nouns usually end in -a, and neuter nouns in -o or -e.',
  },
  {
    mode: 'rod',
    q: 'Nouns that end in -o or -e, like "pismo" and "sunce", are usually ____.',
    opts: ['neuter', 'masculine', 'feminine', 'either masculine or feminine'],
    answer: 'neuter',
    tip: '-o and -e are the neuter endings: pismo, sunce, selo, more. Masculine nouns usually end in a consonant, and feminine nouns in -a.',
  },
  {
    mode: 'rod',
    q: 'In which pair are BOTH nouns neuter?',
    opts: ['selo, polje', 'selo, soba', 'stol, polje', 'kuća, more'],
    answer: 'selo, polje',
    tip: 'selo (-o) and polje (-e) are both neuter. soba and kuća end in -a and are feminine; stol ends in a consonant and is masculine.',
  },

  // ── zamjenica ─────────────────────────────────────────────────────────────
  {
    mode: 'zamjenica',
    q: 'Gdje je knjiga? — ____ je ovdje.',
    en: 'Where is the book? — It is here.',
    opts: ['Ona', 'On', 'Ono', 'Oni'],
    answer: 'Ona',
    tip: 'knjiga ends in -a and is feminine, so "it" is ona. On stands for a masculine noun, ono for a neuter one, and oni for several.',
  },
  {
    mode: 'zamjenica',
    q: 'Gdje je poklon? — ____ je ovdje.',
    en: 'Where is the present? — It is here.',
    opts: ['On', 'Ona', 'Ono', 'Oni'],
    answer: 'On',
    tip: 'poklon ends in a consonant and is masculine, so "it" is on. English "it" is not always ono: ono is only for neuter nouns.',
  },
  {
    mode: 'zamjenica',
    q: 'Gdje je pismo? — ____ je tamo.',
    en: 'Where is the letter? — It is over there.',
    opts: ['Ono', 'On', 'Ona', 'One'],
    answer: 'Ono',
    tip: 'pismo ends in -o and is neuter, so ono. On is for masculine nouns, ona for feminine ones, and one is for several feminine things.',
  },
  {
    mode: 'zamjenica',
    q: 'Gdje je more? — ____ je tamo.',
    en: 'Where is the sea? — It is over there.',
    opts: ['Ono', 'On', 'Ona', 'Oni'],
    answer: 'Ono',
    tip: 'more ends in -e and is neuter, so ono. On would need a noun ending in a consonant, and ona one ending in -a.',
  },
  {
    mode: 'zamjenica',
    q: 'Je li autobus ovdje? — Nije, ____ je tamo.',
    en: 'Is the bus here? — No, it is over there.',
    opts: ['on', 'ona', 'ono', 'oni'],
    answer: 'on',
    tip: 'autobus ends in a consonant and is masculine, so on. A thing is not automatically ono: the pronoun follows the gender of the noun.',
  },
  {
    mode: 'zamjenica',
    q: 'Gdje je olovka? — ____ je ovdje.',
    en: 'Where is the pencil? — It is here.',
    opts: ['Ona', 'On', 'Ono', 'One'],
    answer: 'Ona',
    tip: 'olovka ends in -a and is feminine, so ona. On is for masculine nouns, ono for neuter ones, and one is for several feminine things.',
  },
  {
    mode: 'zamjenica',
    q: 'Je li selo ovdje? — Jest, ____ je ovdje.',
    en: 'Is the village here? — Yes, it is here.',
    opts: ['ono', 'on', 'ona', 'oni'],
    answer: 'ono',
    tip: 'selo ends in -o and is neuter, so ono. On and ona stand for masculine and feminine nouns.',
  },
  {
    mode: 'zamjenica',
    q: 'Gdje je telefon? — ____ je tamo.',
    en: 'Where is the phone? — It is over there.',
    opts: ['On', 'Ono', 'Ona', 'Oni'],
    answer: 'On',
    tip: 'telefon ends in a consonant and is masculine, so on. Ono would need a noun in -o or -e, and ona a noun in -a.',
  },
  {
    mode: 'zamjenica',
    q: 'Je li fotografija tamo? — Nije, ____ je ovdje.',
    en: 'Is the photo over there? — No, it is here.',
    opts: ['ona', 'on', 'ono', 'one'],
    answer: 'ona',
    tip: 'fotografija ends in -a and is feminine, so ona. On is for masculine nouns, ono for neuter ones, and one is for several.',
  },

  // ── iznimke ───────────────────────────────────────────────────────────────
  {
    mode: 'iznimke',
    q: 'Gdje je auto? — ____ je ovdje.',
    en: 'Where is the car? — It is here.',
    opts: ['On', 'Ono', 'Ona', 'Oni'],
    answer: 'On',
    tip: 'auto ends in -o but is a borrowed word, and those are masculine: on. Ono is the trap here; it fits native words like selo and pismo.',
  },
  {
    mode: 'iznimke',
    q: 'Gdje je taksi? — ____ je tamo.',
    en: 'Where is the taxi? — It is over there.',
    opts: ['On', 'Ono', 'Ona', 'One'],
    answer: 'On',
    tip: 'Borrowed words like taksi, auto, metro and euro are masculine, whatever vowel they end in: on. Ono and ona follow the usual endings, which do not apply here.',
  },
  {
    mode: 'iznimke',
    q: 'Gdje je Luka? — ____ je ovdje.',
    en: 'Where is Luka? — He is here.',
    opts: ['On', 'Ona', 'Ono', 'One'],
    answer: 'On',
    tip: "Luka is a man's name, so on, although it ends in -a. For people, the person decides, not the ending; ona would make Luka a woman.",
  },
  {
    mode: 'iznimke',
    q: 'Gdje je tata? — ____ je tamo.',
    en: 'Where is Dad? — He is over there.',
    opts: ['On', 'Ona', 'Ono', 'Oni'],
    answer: 'On',
    tip: 'tata ends in -a, but Dad is a man, so the word is masculine: on. Ona follows the ending and gets it wrong here.',
  },
  {
    mode: 'iznimke',
    q: 'Which noun ending in -o is masculine, not neuter?',
    opts: ['auto', 'selo', 'pismo', 'stablo'],
    answer: 'auto',
    tip: 'auto is a borrowed word, and borrowed words in -o are masculine. selo, pismo and stablo are native words and regular neuters.',
  },
  {
    mode: 'iznimke',
    q: 'Which noun ending in -a is masculine?',
    opts: ['kolega', 'knjiga', 'soba', 'olovka'],
    answer: 'kolega',
    tip: 'kolega means a male co-worker, so it is masculine in spite of its -a. knjiga, soba and olovka are things in -a and regular feminines.',
  },
  {
    mode: 'iznimke',
    q: 'Which noun ending in a consonant is feminine?',
    opts: ['noć', 'stol', 'grad', 'papir'],
    answer: 'noć',
    tip: 'noć (night) belongs to a small group of feminine nouns that end in a consonant; you learn them one by one. stol, grad and papir are regular masculines.',
  },
  {
    mode: 'iznimke',
    q: 'Which of these is feminine although it does not end in -a?',
    opts: ['ljubav', 'poklon', 'hotel', 'autobus'],
    answer: 'ljubav',
    tip: 'ljubav (love) is one of the feminine nouns that end in a consonant, like noć and stvar. poklon, hotel and autobus are regular masculines.',
  },
  {
    mode: 'iznimke',
    q: 'Which of these is masculine although it ends in -o?',
    opts: ['metro', 'selo', 'stablo', 'pismo'],
    answer: 'metro',
    tip: 'metro is a borrowed word, like auto and taksi, so it is masculine. selo, stablo and pismo are native words and neuter.',
  },
];
