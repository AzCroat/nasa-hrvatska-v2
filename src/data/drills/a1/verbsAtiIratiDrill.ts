// src/data/drills/a1/verbsAtiIratiDrill.ts
//
// A1 -ATI AND -IRATI VERBS — the drill for the `verbs-ati-irati` lesson.
//
// Remove -ti, keep the -a-, add -m, -š, —, -mo, -te, -ju. The international -irati
// verbs (studirati, telefonirati, organizirati) are all regular and keep the -ir- in
// every form. Objects are only masculine things and neuter nouns, because the cases
// arrive in the next lesson.
//
// Three modes:
//   osobe    — the six person endings
//   irati    — the -irati family, meaning and form
//   uciti    — studirati against učiti, and the stem kept whole

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VERBS_ATI_IRATI_MODE_LABELS: Record<string, string> = {
  osobe: '👥 Osobe',
  irati: '🌍 -irati',
  uciti: '📚 Studirati ili učiti',
};

export const VERBS_ATI_IRATI_DRILL_DATA: ModeDrillItem[] = [
  // ── osobe ────────────────────────────────────────────────────────────────
  {
    mode: 'osobe',
    q: 'Ja ____ film. (gledati)',
    en: 'I am watching a film.',
    opts: ['gledam', 'gledaš', 'gledaju', 'gleda'],
    answer: 'gledam',
    tip: 'ja → -m.',
  },
  {
    mode: 'osobe',
    q: 'Ti ____ radio. (slušati)',
    en: 'You are listening to the radio.',
    opts: ['slušam', 'slušaš', 'slušamo', 'slušate'],
    answer: 'slušaš',
    tip: 'ti → -š.',
  },
  {
    mode: 'osobe',
    q: 'Mama ____ ručak. (kuhati)',
    en: 'Mum is cooking lunch.',
    opts: ['kuham', 'kuhaju', 'kuha', 'kuhaš'],
    answer: 'kuha',
    tip: 'on / ona / ono: no ending after the -a-.',
  },
  {
    mode: 'osobe',
    q: 'Mi ____ autobus. (čekati)',
    en: 'We are waiting for the bus.',
    opts: ['čekate', 'čekamo', 'čekaju', 'čekam'],
    answer: 'čekamo',
    tip: 'mi → -mo.',
  },
  {
    mode: 'osobe',
    q: 'Vi ____ pismo. (čitati — polite you)',
    en: 'You are reading a letter.',
    opts: ['čitaju', 'čitamo', 'čitate', 'čita'],
    answer: 'čitate',
    tip: 'vi → -te, for several people or one person politely.',
  },
  {
    mode: 'osobe',
    q: 'Djeca ____ nogomet. (igrati)',
    en: 'The children are playing football.',
    opts: ['igra', 'igramo', 'igraš', 'igraju'],
    answer: 'igraju',
    tip: 'djeca takes the "they" form: -ju.',
  },
  {
    mode: 'osobe',
    q: '____ li često? (plivati — you, to a friend)',
    en: 'Do you swim often?',
    opts: ['Plivaš', 'Plivam', 'Plivaju', 'Pliva'],
    answer: 'Plivaš',
    tip: 'The verb first, then li; ti → -š.',
  },
  {
    mode: 'osobe',
    q: 'Oni ne ____ ništa. (znati)',
    en: 'They do not know anything.',
    opts: ['zna', 'znaju', 'znamo', 'znaš'],
    answer: 'znaju',
    tip: 'oni → -ju, and ne goes straight in front of the verb.',
  },

  // ── irati ────────────────────────────────────────────────────────────────
  {
    mode: 'irati',
    q: 'Ivan ____ izlet. (organizirati)',
    en: 'Ivan is organising a trip.',
    opts: ['organizira', 'organiziraju', 'organiziram', 'organiziraš'],
    answer: 'organizira',
    tip: 'Every -irati verb is regular: organizira.',
  },
  {
    mode: 'irati',
    q: 'Mi ____ stol za večeras. (rezervirati)',
    en: 'We are booking a table for tonight.',
    opts: ['rezerviraju', 'rezerviramo', 'rezervirate', 'rezerviram'],
    answer: 'rezerviramo',
    tip: 'mi → -mo; stol is a thing and does not change.',
  },
  {
    mode: 'irati',
    q: 'Gdje ____ auto? (parkirati — you, to a friend)',
    en: 'Where do you park the car?',
    opts: ['parkiram', 'parkira', 'parkiraš', 'parkirate'],
    answer: 'parkiraš',
    tip: 'ti → -š.',
  },
  {
    mode: 'irati',
    q: 'Turisti ____ more. (fotografirati)',
    en: 'The tourists are taking photos of the sea.',
    opts: ['fotografira', 'fotografiramo', 'fotografiraš', 'fotografiraju'],
    answer: 'fotografiraju',
    tip: 'turisti are "they": -ju.',
  },
  {
    mode: 'irati',
    q: 'Ana ____ svaki dan. (trenirati)',
    en: 'Ana trains every day.',
    opts: ['trenira', 'treniram', 'treniraju', 'treniraš'],
    answer: 'trenira',
    tip: 'ona: no ending after the -a-.',
  },
  {
    mode: 'irati',
    q: 'Which verb means "to phone"?',
    en: 'Choose the verb for making a phone call.',
    opts: ['telefonirati', 'trenirati', 'parkirati', 'kontrolirati'],
    answer: 'telefonirati',
    tip: 'telefonirati — Mama telefonira svaki dan.',
  },
  {
    mode: 'irati',
    q: 'Which verb means "to book"?',
    en: 'Choose the verb for making a reservation.',
    opts: ['organizirati', 'rezervirati', 'fotografirati', 'studirati'],
    answer: 'rezervirati',
    tip: 'rezervirati — Rezerviram stol.',
  },
  {
    mode: 'irati',
    q: 'Vi ____ koncert? (organizirati — polite you)',
    en: 'Are you organising a concert?',
    opts: ['organiziramo', 'organiziraju', 'organizirate', 'organizira'],
    answer: 'organizirate',
    tip: 'vi → -te.',
  },

  // ── uciti ────────────────────────────────────────────────────────────────
  {
    mode: 'uciti',
    q: 'Moj brat ____ pravo. (studirati)',
    en: 'My brother studies law.',
    opts: ['studira', 'studam', 'studiraju', 'studiraš'],
    answer: 'studira',
    tip: 'The -ir- stays: studira.',
  },
  {
    mode: 'uciti',
    q: 'You learn Croatian from an app. ____ hrvatski.',
    en: 'I am learning Croatian.',
    opts: ['Studiram', 'Učim', 'Studiraju', 'Učiš'],
    answer: 'Učim',
    tip: 'Learning in general is učiti; studirati is for university.',
  },
  {
    mode: 'uciti',
    q: 'Which verb means "to study at university"?',
    en: 'Choose the verb for university study.',
    opts: ['učiti', 'čitati', 'studirati', 'pitati'],
    answer: 'studirati',
    tip: 'studirati is a subject at university.',
  },
  {
    mode: 'uciti',
    q: 'Which form is correct for "they study"?',
    en: 'They study.',
    opts: ['studiru', 'studiraju', 'studiraje', 'studiju'],
    answer: 'studiraju',
    tip: 'Keep the whole stem studira-, then -ju.',
  },
  {
    mode: 'uciti',
    q: 'Which form is correct for "I study"?',
    en: 'I study.',
    opts: ['studam', 'studiram', 'studirem', 'studiriram'],
    answer: 'studiram',
    tip: 'studira- + -m. The -irati verbs never change their stem.',
  },
  {
    mode: 'uciti',
    q: 'Which -ati verb does NOT follow the pattern?',
    en: 'One of these changes its stem in the present.',
    opts: ['gledati', 'čitati', 'pisati', 'slušati'],
    answer: 'pisati',
    tip: 'pisati → pišem. The others are gledam, čitam, slušam.',
  },
  {
    mode: 'uciti',
    q: 'Što ____? (studirati — you, to a friend)',
    en: 'What do you study?',
    opts: ['studiraš', 'studira', 'studiramo', 'studiraju'],
    answer: 'studiraš',
    tip: 'ti → -š.',
  },
  {
    mode: 'uciti',
    q: 'Oni ne ____, oni rade. (studirati)',
    en: 'They do not study, they work.',
    opts: ['studira', 'studiramo', 'studiraju', 'studirate'],
    answer: 'studiraju',
    tip: 'oni → -ju.',
  },
];
