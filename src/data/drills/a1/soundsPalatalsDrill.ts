// src/data/drills/a1/soundsPalatalsDrill.ts
//
// A1 SOUNDS — the drill for the `sounds-palatals` lesson (č ć dž đ lj nj).
//
// Three modes:
//   parovi   — which letter is which: the hard pair č/dž, the soft pair ć/đ
//   pravopis — pick the correctly spelled word; every distractor swaps or drops a hook
//   ljnj     — lj and nj are ONE letter each
//
// A distractor is always a misspelling, never a real word with a different meaning
// offered as "wrong" without saying so.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const SOUNDS_PALATALS_MODE_LABELS: Record<string, string> = {
  parovi: '👄 Parovi',
  pravopis: '✍️ Pravopis',
  ljnj: '🔤 Lj i Nj',
};

export const SOUNDS_PALATALS_DRILL_DATA: ModeDrillItem[] = [
  // ── parovi ──────────────────────────────────────────────────────────────
  {
    mode: 'parovi',
    q: 'Which letter is the "church" sound?',
    en: 'The hard one, tongue raised.',
    opts: ['č', 'ć', 'đ', 'ž'],
    answer: 'č',
    tip: 'č is the hard pair; ć is softer, with the tongue low.',
  },
  {
    mode: 'parovi',
    q: 'Which letter is the "jam" sound?',
    en: 'The voiced partner of the church sound.',
    opts: ['đ', 'dž', 'ž', 'ć'],
    answer: 'dž',
    tip: 'č and dž are the hard pair: voice off, voice on.',
  },
  {
    mode: 'parovi',
    q: 'Which letter is the voiced partner of ć?',
    en: 'The soft pair.',
    opts: ['dž', 'ž', 'đ', 'č'],
    answer: 'đ',
    tip: 'ć and đ are the soft pair: kuća, đak.',
  },
  {
    mode: 'parovi',
    q: 'Family names like Babić and Perić end in which letter?',
    en: 'A very common surname ending.',
    opts: ['č', 'ć', 'c', 'dž'],
    answer: 'ć',
    tip: 'The -ić surnames end in the soft ć.',
  },
  {
    mode: 'parovi',
    q: 'ku__a (house)',
    en: 'The soft sound is missing.',
    opts: ['ć', 'č', 'c', 'dž'],
    answer: 'ć',
    tip: 'kuća. Without the hook, kuca means "he knocks".',
  },
  {
    mode: 'parovi',
    q: '__aj (tea)',
    en: 'The hard sound is missing.',
    opts: ['ć', 'č', 'đ', 'c'],
    answer: 'č',
    tip: 'čaj starts with the hard č.',
  },
  {
    mode: 'parovi',
    q: '__ak (pupil)',
    en: 'The voiced soft sound is missing.',
    opts: ['dž', 'đ', 'ž', 'dj'],
    answer: 'đ',
    tip: 'đak. Typing dj for this letter is a keyboard habit, not spelling.',
  },
  {
    mode: 'parovi',
    q: '__ep (pocket)',
    en: 'The voiced hard sound is missing.',
    opts: ['đ', 'ž', 'dž', 'č'],
    answer: 'dž',
    tip: 'džep starts with dž, one letter written with two.',
  },
  {
    mode: 'parovi',
    q: 'Ko-va-__ić (a family name)',
    en: 'The hard sound comes before the -ić.',
    opts: ['č', 'ć', 'c', 'đ'],
    answer: 'č',
    tip: 'Kovačić has the hard č and then the soft ć.',
  },
  // ── pravopis ────────────────────────────────────────────────────────────
  {
    mode: 'pravopis',
    q: 'Which spelling is right?',
    en: 'night',
    opts: ['noč', 'noć', 'noc', 'nođ'],
    answer: 'noć',
    tip: 'noć ends in the soft ć.',
  },
  {
    mode: 'pravopis',
    q: 'Which spelling is right?',
    en: 'birthday',
    opts: ['rodjendan', 'roćendan', 'rođendan', 'rodžendan'],
    answer: 'rođendan',
    tip: 'rođendan has đ.',
  },
  {
    mode: 'pravopis',
    q: 'Which spelling is right?',
    en: 'luck',
    opts: ['sreča', 'sreća', 'sreca', 'sređa'],
    answer: 'sreća',
    tip: 'sreća has the soft ć.',
  },
  {
    mode: 'pravopis',
    q: 'Which spelling is right?',
    en: 'glass (for drinking)',
    opts: ['ćaša', 'časa', 'čaša', 'caša'],
    answer: 'čaša',
    tip: 'čaša: the hard č and then š.',
  },
  {
    mode: 'pravopis',
    q: 'Which spelling is right?',
    en: 'key',
    opts: ['ključ', 'kljuć', 'kljuc', 'klyuč'],
    answer: 'ključ',
    tip: 'ključ: lj, then the hard č at the end.',
  },
  {
    mode: 'pravopis',
    q: 'Which spelling is right?',
    en: 'jam (the food)',
    opts: ['đem', 'žem', 'djem', 'džem'],
    answer: 'džem',
    tip: 'džem starts with dž.',
  },
  {
    mode: 'pravopis',
    q: 'Someone says something like "grat". How is "city" written?',
    en: 'A final consonant can sound quieter than it is spelled.',
    opts: ['grat', 'grad', 'grač', 'građ'],
    answer: 'grad',
    tip: 'grad keeps its d in writing.',
  },
  {
    mode: 'pravopis',
    q: 'Someone says something like "muš". How is "husband" written?',
    en: 'A final consonant can sound quieter than it is spelled.',
    opts: ['mus', 'muš', 'muž', 'muć'],
    answer: 'muž',
    tip: 'muž keeps its ž in writing.',
  },
  {
    mode: 'pravopis',
    q: 'Which spelling is right?',
    en: 'angel',
    opts: ['anđeo', 'andjeo', 'anćeo', 'andžeo'],
    answer: 'anđeo',
    tip: 'anđeo has đ.',
  },
  // ── ljnj ────────────────────────────────────────────────────────────────
  {
    mode: 'ljnj',
    q: 'How many letters are in "ljeto"?',
    en: 'summer',
    opts: ['five', 'four', 'three', 'six'],
    answer: 'four',
    tip: 'lj is one letter: lj-e-t-o.',
  },
  {
    mode: 'ljnj',
    q: 'How many letters are in "konj"?',
    en: 'horse',
    opts: ['four', 'two', 'three', 'five'],
    answer: 'three',
    tip: 'nj is one letter: k-o-nj.',
  },
  {
    mode: 'ljnj',
    q: 'Which spelling is right?',
    en: 'book',
    opts: ['kniga', 'knyiga', 'knija', 'knjiga'],
    answer: 'knjiga',
    tip: 'The "ny" sound is written nj.',
  },
  {
    mode: 'ljnj',
    q: 'Which spelling is right?',
    en: 'love',
    opts: ['lyubav', 'ljubav', 'lubav', 'ljuvab'],
    answer: 'ljubav',
    tip: 'The "lli" sound of million is written lj.',
  },
  {
    mode: 'ljnj',
    q: 'Which spelling is right?',
    en: 'kitchen',
    opts: ['kuhinja', 'kuhinya', 'kuhina', 'kuhinia'],
    answer: 'kuhinja',
    tip: 'kuhinja ends in nj + a.',
  },
  {
    mode: 'ljnj',
    q: 'Which spelling is right?',
    en: 'friend (a man)',
    opts: ['prijately', 'prijatel', 'prijatelj', 'priyatelj'],
    answer: 'prijatelj',
    tip: 'prijatelj ends in lj; and j alone is the y sound.',
  },
  {
    mode: 'ljnj',
    q: 'How is "lj" said?',
    en: 'Think of the middle of "million".',
    opts: ['l, then a separate y', 'one sound', 'like English j in jam', 'it is silent'],
    answer: 'one sound',
    tip: 'The tongue makes l and y at the same time: one sound.',
  },
  {
    mode: 'ljnj',
    q: 'Which spelling is right?',
    en: 'Sunday',
    opts: ['nedjeja', 'nedjelia', 'nedjelja', 'nedjelya'],
    answer: 'nedjelja',
    tip: 'nedjelja: -dje- and then lj.',
  },
];
