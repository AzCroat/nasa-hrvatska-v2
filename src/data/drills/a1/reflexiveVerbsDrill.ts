// src/data/drills/a1/reflexiveVerbsDrill.ts
//
// A1 VERBS WITH SE — the drill for the `reflexive-verbs` lesson.
//
// Follows Hrvatski za početnike 1, pages 93–94: the text about the graduation dinner
// (djevojke se oblače, šminkaju se…), PREZENT POVRATNIH GLAGOLA with pripremati se in its
// three columns (ja se pripremam · ja se ne pripremam · pripremam li se ja?), the same
// verb "u inverziji" (pripremam se · ne pripremam se · pripremam li se?) and the rows
// "Mi ____ svečano. (oblačiti se)". Present tense only: the book's past and future of
// these verbs (page 94 on) have their own later lesson.
//
// Three modes:
//   oblici — the verb changes for the person, se never does
//   red    — se in second place: statements, negatives, questions
//   se     — se is the same for everyone, and se meaning "one"

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const REFLEXIVE_VERBS_MODE_LABELS: Record<string, string> = {
  oblici: '🔤 Oblici',
  red: '↔️ Red riječi',
  se: '🪞 Se',
};

export const REFLEXIVE_VERBS_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Maja se ____. (češljati se)',
    en: 'Maja is combing her hair.',
    opts: ['češlja', 'češljam', 'češljaš', 'češljaju'],
    answer: 'češlja',
    tip: 'Only the verb changes: Maja is "she", so češlja. češljam is ja, češljaš is ti, and češljaju is oni. se stays the same for all of them.',
  },
  {
    mode: 'oblici',
    q: 'Večeras se ____ elegantno. (oblačiti se, mi)',
    en: 'Tonight we are dressing elegantly.',
    opts: ['oblačimo', 'oblačite', 'oblače', 'oblačim'],
    answer: 'oblačimo',
    tip: 'oblačiti is an -im verb: mi oblačimo. oblačite is vi, oblače is oni, and oblačim is ja.',
  },
  {
    mode: 'oblici',
    q: 'Dječaci se ____ u nove košulje. (oblačiti se)',
    en: 'The boys are putting on new shirts.',
    opts: ['oblače', 'oblači', 'oblačiju', 'oblačimo'],
    answer: 'oblače',
    tip: 'dječaci are "they", and an -im verb takes -e: oblače. oblači is one person, "oblačiju" copies the -aju pattern, and oblačimo is "we".',
  },
  {
    mode: 'oblici',
    q: 'Ja se ____ u moru. (kupati se)',
    en: 'I am swimming in the sea.',
    opts: ['kupam', 'kupaš', 'kupa', 'kupaju'],
    answer: 'kupam',
    tip: 'kupati is an -am verb: ja kupam. kupaš is ti, kupa is on or ona, and kupaju is oni.',
  },
  {
    mode: 'oblici',
    q: 'Vi se ____ svaki dan. (šminkati se)',
    en: 'You put on makeup every day. (to several people)',
    opts: ['šminkate', 'šminkamo', 'šminkaju', 'šminkaš'],
    answer: 'šminkate',
    tip: 'vi → -ate: šminkate. šminkamo is mi, šminkaju is oni, and šminkaš is ti.',
  },
  {
    mode: 'oblici',
    q: 'Studenti se ____ za ispit. (pripremati se)',
    en: 'The students are getting ready for the exam.',
    opts: ['pripremaju', 'priprema', 'pripremamo', 'pripreme'],
    answer: 'pripremaju',
    tip: 'pripremati is an -am verb, so oni takes -aju: pripremaju. priprema is one person, pripremamo is "we", and "pripreme" uses the -im ending.',
  },
  {
    mode: 'oblici',
    q: 'Svaki dan se ____ u šest. (buditi se, ja)',
    en: 'I wake up at six every day.',
    opts: ['budim', 'budiš', 'budi', 'bude'],
    answer: 'budim',
    tip: 'buditi is an -im verb: ja budim. budiš is ti, budi is on or ona, and bude is oni.',
  },
  {
    mode: 'oblici',
    q: 'Kada se ____ kući? (vraćati se, ti)',
    en: 'When do you come back home?',
    opts: ['vraćaš', 'vraćam', 'vraća', 'vraćaju'],
    answer: 'vraćaš',
    tip: 'ti → -aš: vraćaš. vraćam is ja, vraća is on or ona, and vraćaju is oni.',
  },
  {
    mode: 'oblici',
    q: 'Sestre se ____ za koncert. (uređivati se)',
    en: 'The sisters are getting dressed up for the concert.',
    opts: ['uređuju', 'uređivaju', 'uređuje', 'uređujemo'],
    answer: 'uređuju',
    tip: 'A verb in -ivati swaps -iva- for -uj- in the present: uređujem, uređuju. "uređivaju" treats it like a plain -ati verb; uređuje is one person.',
  },

  // ── red ───────────────────────────────────────────────────────────────────
  {
    mode: 'red',
    q: 'Which sentence is correct for "I am getting ready"?',
    opts: ['Pripremam se.', 'Se pripremam.', 'Pripremam me.', 'Ja pripremam.'],
    answer: 'Pripremam se.',
    tip: 'se can never open a sentence, so the verb goes first and se follows. se is never replaced by me, and it cannot be left out.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct for "I am getting ready", starting with Ja?',
    opts: ['Ja se pripremam.', 'Ja pripremam se.', 'Se ja pripremam.', 'Ja me pripremam.'],
    answer: 'Ja se pripremam.',
    tip: 'With Ja first, se moves to second place, in front of the verb. It does not stay glued behind the verb, it cannot come first, and it never becomes me.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct for "I do not feel well"?',
    opts: [
      'Ne osjećam se dobro.',
      'Ne se osjećam dobro.',
      'Se ne osjećam dobro.',
      'Osjećam ne se dobro.',
    ],
    answer: 'Ne osjećam se dobro.',
    tip: 'ne and its verb count as one unit, and se comes right after it: Ne osjećam se. se cannot split ne from the verb or open the sentence.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct for "I do not wear makeup", starting with Ja?',
    opts: ['Ja se ne šminkam.', 'Ja ne se šminkam.', 'Ja ne šminkam se.', 'Se ja ne šminkam.'],
    answer: 'Ja se ne šminkam.',
    tip: 'se takes second place, right after Ja, and ne stays in front of its verb: Ja se ne šminkam. se cannot push in between ne and the verb or trail at the end.',
  },
  {
    mode: 'red',
    q: 'Which question is correct for "Are you getting ready for the exam?"',
    opts: [
      'Pripremaš li se za ispit?',
      'Pripremaš se li za ispit?',
      'Se pripremaš li za ispit?',
      'Li se pripremaš za ispit?',
    ],
    answer: 'Pripremaš li se za ispit?',
    tip: 'In a yes/no question the order is verb, li, se. se cannot come before li, and neither se nor li can open the question.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct for "Today we are resting"?',
    opts: ['Danas se odmaramo.', 'Danas odmaramo se.', 'Se danas odmaramo.', 'Danas nas odmaramo.'],
    answer: 'Danas se odmaramo.',
    tip: 'Danas takes first place, so se comes second, before the verb. It does not stay behind the verb, it cannot come first, and it does not turn into nas.',
  },
  {
    mode: 'red',
    q: 'Which question is correct for "How do you feel?"',
    opts: ['Kako se osjećaš?', 'Kako osjećaš se?', 'Se kako osjećaš?', 'Kako te osjećaš?'],
    answer: 'Kako se osjećaš?',
    tip: 'se follows the question word directly: Kako se osjećaš? It is the same pattern as Kako se zoveš? se is never swapped for te.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct for "The girls are putting on makeup"?',
    opts: [
      'Djevojke se šminkaju.',
      'Djevojke šminkaju se.',
      'Se djevojke šminkaju.',
      'Djevojke su šminkaju.',
    ],
    answer: 'Djevojke se šminkaju.',
    tip: 'se comes second, after the subject Djevojke. It does not follow the verb when something else stands first, it cannot open the sentence, and su is a form of biti.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct for "In the evening I come back home"?',
    opts: [
      'Navečer se vraćam kući.',
      'Navečer vraćam kući se.',
      'Se navečer vraćam kući.',
      'Navečer me vraćam kući.',
    ],
    answer: 'Navečer se vraćam kući.',
    tip: 'After the time word Navečer, se takes second place. It cannot wait until the end or open the sentence, and it never becomes me.',
  },

  // ── se ────────────────────────────────────────────────────────────────────
  {
    mode: 'se',
    q: 'Ja ____ zovem Tom.',
    en: 'My name is Tom.',
    opts: ['se', 'me', 'sebe', 'sam'],
    answer: 'se',
    tip: 'se never changes for the person: ja se zovem, ti se zoveš. "me" copies English "myself", and sam is a form of biti.',
  },
  {
    mode: 'se',
    q: 'Zašto ____ ti smiješ?',
    en: 'Why are you laughing?',
    opts: ['se', 'te', 'si', 'ti'],
    answer: 'se',
    tip: 'smijati se carries se for every person: ti se smiješ. "te" copies English "yourself", and si is a form of biti.',
  },
  {
    mode: 'se',
    q: 'Mi ____ veselimo vikendu.',
    en: 'We are looking forward to the weekend.',
    opts: ['se', 'nas', 'smo', 'nam'],
    answer: 'se',
    tip: 'veseliti se keeps se for "we" as well: mi se veselimo. It does not become nas or nam, and smo is a form of biti.',
  },
  {
    mode: 'se',
    q: 'Vidimo ____ navečer!',
    en: 'See you tonight!',
    opts: ['se', 'nas', 'smo', 'vas'],
    answer: 'se',
    tip: 'Vidimo se is literally "we see each other": se again, unchanged. nas and vas are ordinary objects, and smo is a form of biti.',
  },
  {
    mode: 'se',
    q: 'Which sentence means that Ana is combing her OWN hair?',
    opts: ['Ana se češlja.', 'Ana češlja Mariju.', 'Ana je češlja.', 'Ana češlja sestru.'],
    answer: 'Ana se češlja.',
    tip: 'se sends the action back to the doer: Ana se češlja. With Mariju, sestru or je ("her"), Ana is combing someone else.',
  },
  {
    mode: 'se',
    q: 'Kako ____ to kaže na hrvatskom?',
    en: 'How do you say that in Croatian?',
    opts: ['se', 'je', 'ti', 'si'],
    answer: 'se',
    tip: 'Here se means "one" or "people in general": Kako se kaže…? Nobody in particular is speaking, so no personal form such as ti fits.',
  },
  {
    mode: 'se',
    q: 'Gdje ____ kupuju karte?',
    en: 'Where does one buy tickets?',
    opts: ['se', 'su', 'si', 'ih'],
    answer: 'se',
    tip: 'Impersonal se: Gdje se kupuju karte? — "where are tickets bought". su and si are forms of biti, and ih means "them".',
  },
  {
    mode: 'se',
    q: 'A sign says "Ovdje se ne puši." What does it mean?',
    opts: [
      'No smoking here.',
      'He does not smoke here.',
      'I do not smoke here.',
      'Do not smoke by yourself.',
    ],
    answer: 'No smoking here.',
    tip: 'se makes the sentence general: "one does not smoke here". puši is not about a particular "he", and se here has nothing to do with "yourself".',
  },
  {
    mode: 'se',
    q: 'Which sentence is correct for "They are afraid"?',
    opts: ['Boje se.', 'Boje ih.', 'Se boje.', 'Boje su.'],
    answer: 'Boje se.',
    tip: 'se is the same in every person, singular and plural: bojim se, boje se. It does not become ih ("them"), it cannot come first, and su is a form of biti.',
  },
];
