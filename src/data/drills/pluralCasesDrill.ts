// src/data/drills/pluralCasesDrill.ts
//
// A2 PLURAL CASES — the drill for the `plural-cases` lesson.
//
// A1's `pluraldrill` teaches plural FORMATION — how one book becomes two. This
// is the next step and a genuinely different skill: what the plural does once it
// has to be an object, or follow a number, or take a preposition. It is also
// where two facts arrive that a learner will use every day and can only get by
// drilling — the genitive plural in -a (the form every number from five up
// demands), and the single -ima/-ama ending that collapses three cases into one.
//
// Three modes:
//   akuzativ — the plural object, where only masculine changes
//   genitiv  — the long -a, and the helping a that breaks clusters
//   ima      — dative, locative and instrumental sharing one ending

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const PLURAL_CASES_MODE_LABELS: Record<string, string> = {
  akuzativ: '🎯 Akuzativ množine',
  genitiv: '5️⃣ Genitiv množine',
  ima: '🔗 Nastavak -ima / -ama',
};

export const PLURAL_CASES_DRILL_DATA: ModeDrillItem[] = [
  // ── akuzativ ──────────────────────────────────────────────────────────────
  {
    mode: 'akuzativ',
    q: 'Vidim ____. (studenti)',
    en: 'I see the students.',
    opts: ['studente', 'studenti', 'studenata', 'studentima'],
    answer: 'studente',
    tip: 'Masculine plural object takes -e: studente.',
  },
  {
    mode: 'akuzativ',
    q: 'Volim ____. (gradovi)',
    en: 'I love cities.',
    opts: ['gradove', 'gradovi', 'gradova', 'gradovima'],
    answer: 'gradove',
    tip: 'gradovi → gradove.',
  },
  {
    mode: 'akuzativ',
    q: 'Čitam ____. (knjige)',
    en: 'I am reading books.',
    opts: ['knjige', 'knjiga', 'knjigama', 'knjigu'],
    answer: 'knjige',
    tip: 'Feminine plural looks the SAME as subject and object: knjige.',
  },
  {
    mode: 'akuzativ',
    q: 'Vidim ____. (sela)',
    en: 'I see villages.',
    opts: ['sela', 'sele', 'selima', 'selo'],
    answer: 'sela',
    tip: 'Neuter plural also does not change: sela.',
  },
  {
    mode: 'akuzativ',
    q: 'Koji rod mijenja oblik u akuzativu množine?',
    en: 'Which gender changes?',
    opts: ['samo muški', 'samo ženski', 'samo srednji', 'sva tri'],
    answer: 'samo muški',
    tip: 'Only masculine. Two thirds of the work is already done.',
  },
  {
    mode: 'akuzativ',
    q: 'Poznajem ____. (prijatelji)',
    en: 'I know the friends.',
    opts: ['prijatelje', 'prijatelji', 'prijatelja', 'prijateljima'],
    answer: 'prijatelje',
    tip: 'prijatelji → prijatelje.',
  },
  {
    mode: 'akuzativ',
    q: 'Kupujem ____. (jabuke)',
    en: 'I am buying apples.',
    opts: ['jabuke', 'jabuka', 'jabukama', 'jabuku'],
    answer: 'jabuke',
    tip: 'Feminine plural: jabuke, subject or object alike.',
  },
  {
    mode: 'akuzativ',
    q: 'Slušam ____. (profesori)',
    en: 'I am listening to the professors.',
    opts: ['profesore', 'profesori', 'profesora', 'profesorima'],
    answer: 'profesore',
    tip: 'Masculine plural accusative: profesore.',
  },

  // ── genitiv ───────────────────────────────────────────────────────────────
  {
    mode: 'genitiv',
    q: 'Pet ____. (student)',
    en: 'five students',
    opts: ['studenata', 'studenti', 'studente', 'studentima'],
    answer: 'studenata',
    tip: 'From five up, the genitive plural: pet studenata.',
  },
  {
    mode: 'genitiv',
    q: 'Deset ____. (knjiga)',
    en: 'ten books',
    opts: ['knjiga', 'knjige', 'knjigama', 'knjigu'],
    answer: 'knjiga',
    tip: 'Feminine nouns in -a take a bare genitive plural: deset knjiga.',
  },
  {
    mode: 'genitiv',
    q: 'Mnogo ____. (grad)',
    en: 'many cities',
    opts: ['gradova', 'gradovi', 'gradove', 'gradovima'],
    answer: 'gradova',
    tip: 'Nouns with the long plural keep it: gradovi → gradova.',
  },
  {
    mode: 'genitiv',
    q: 'Nemam ____. (sestra)',
    en: 'I have no sisters.',
    opts: ['sestara', 'sestre', 'sestrama', 'sestru'],
    answer: 'sestara',
    tip: 'A helping a breaks the str-cluster: sestra → sestara.',
  },
  {
    mode: 'genitiv',
    q: 'Nekoliko ____. (pismo)',
    en: 'a few letters',
    opts: ['pisama', 'pisma', 'pismima', 'pismo'],
    answer: 'pisama',
    tip: 'Same helping a in the neuter: pismo → pisama.',
  },
  {
    mode: 'genitiv',
    q: 'Zašto "sestara", a ne "sestra"?',
    en: 'Why the extra syllable?',
    opts: [
      'razbija skup suglasnika',
      'jer je riječ ženskog roda',
      'jer je množina',
      'nema razloga',
    ],
    answer: 'razbija skup suglasnika',
    tip: 'Croatian avoids -str at the end of a word, so an a is inserted.',
  },
  {
    mode: 'genitiv',
    q: 'Puno ____. (selo)',
    en: 'a lot of villages',
    opts: ['sela', 'sele', 'selima', 'selo'],
    answer: 'sela',
    tip: 'Neuter genitive plural: puno sela.',
  },
  {
    mode: 'genitiv',
    q: 'Od kojega broja ide genitiv množine?',
    en: 'From which number?',
    opts: ['od pet', 'od dva', 'od deset', 'od jedan'],
    answer: 'od pet',
    tip: 'One takes the singular, two to four take a special form, five and up the genitive plural.',
  },

  // ── ima ───────────────────────────────────────────────────────────────────
  {
    mode: 'ima',
    q: 'Govorim o ____. (studenti)',
    en: 'I am talking about the students.',
    opts: ['studentima', 'studente', 'studenata', 'studenti'],
    answer: 'studentima',
    tip: 'Locative plural: -ima for masculine and neuter.',
  },
  {
    mode: 'ima',
    q: 'Pišem ____. (prijatelji)',
    en: 'I am writing to my friends.',
    opts: ['prijateljima', 'prijatelje', 'prijatelja', 'prijatelji'],
    answer: 'prijateljima',
    tip: 'Dative plural — the same -ima.',
  },
  {
    mode: 'ima',
    q: 'Idem sa ____. (sestre)',
    en: 'I am going with my sisters.',
    opts: ['sestrama', 'sestre', 'sestara', 'sestri'],
    answer: 'sestrama',
    tip: 'Feminine plural takes -ama: sa sestrama.',
  },
  {
    mode: 'ima',
    q: 'Koliko padeža dijeli nastavak -ima?',
    en: 'How many cases share -ima?',
    opts: ['tri', 'dva', 'četiri', 'jedan'],
    answer: 'tri',
    tip: 'Dative, locative and instrumental. One ending covers all three in the plural.',
  },
  {
    mode: 'ima',
    q: 'Živim u ____. (gradovi)',
    en: 'I live among cities. / in cities',
    opts: ['gradovima', 'gradove', 'gradova', 'gradovi'],
    answer: 'gradovima',
    tip: 'Locative plural: u gradovima.',
  },
  {
    mode: 'ima',
    q: 'Igra se s ____. (djeca)',
    en: 'He plays with the children.',
    opts: ['djecom', 'djecama', 'djeci', 'djece'],
    answer: 'djecom',
    tip: 'Djeca is a collective and behaves as a feminine singular: s djecom.',
  },
  {
    mode: 'ima',
    q: 'Koji nastavak ide uz ženski rod?',
    en: 'Which ending for feminine?',
    opts: ['-ama', '-ima', '-ova', '-e'],
    answer: '-ama',
    tip: '-ama for feminine, -ima for masculine and neuter. That is the only split.',
  },
  {
    mode: 'ima',
    q: 'Zahvaljujem ____. (kolege)',
    en: 'I thank my colleagues.',
    opts: ['kolegama', 'kolege', 'kolega', 'kolegima'],
    answer: 'kolegama',
    tip: 'Kolega ends in -a and declines like a feminine noun: kolegama.',
  },
];
