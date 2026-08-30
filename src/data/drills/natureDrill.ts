// src/data/drills/natureDrill.ts
//
// B1 NATURE & THE ENVIRONMENT — the drill for the `environment-nature` lesson.
//
// The structural content here is smaller than the cultural content, and that is
// the honest description of the lesson: the winds have NAMES, and knowing which
// is which has practical consequences. *Bura* is cold, dry and comes down off
// the mountains from the north-east — it closes bridges and cancels ferries.
// *Jugo* is warm and damp from the south, and is blamed locally for headaches
// and bad tempers. *Maestral* is the pleasant summer sea breeze. *Puše bura* is
// not a remark about the weather; it is information about your day.
//
// The grammar the drill can hold to account is the landscape vocabulary in its
// cases — *na otoku*, *na moru*, *u šumi* — where the choice between *u* and
// *na* is lexical and has to be learned per word, and the environment
// vocabulary a B1 learner needs to follow a news item: *okoliš*, *onečišćenje*,
// *otpad*, *zaštititi*.
//
// Three modes:
//   krajolik — the landscape, and u against na
//   vjetrovi — the named winds
//   okolis   — the environment

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const NATURE_MODE_LABELS: Record<string, string> = {
  krajolik: '🏔️ Krajolik',
  vjetrovi: '🌬️ Vjetrovi',
  okolis: '♻️ Okoliš',
};

export const NATURE_DRILL_DATA: ModeDrillItem[] = [
  // ── krajolik ──────────────────────────────────────────────────────────────
  {
    mode: 'krajolik',
    q: 'Ljetujem ____ otoku.',
    en: 'I spend the summer on an island.',
    opts: ['na', 'u', 'kod', 'po'],
    answer: 'na',
    tip: 'na otoku, na moru — but u šumi. It is lexical; learn each one.',
  },
  {
    mode: 'krajolik',
    q: 'Šetamo ____ šumi.',
    en: 'We are walking in the forest.',
    opts: ['u', 'na', 'po', 'kod'],
    answer: 'u',
    tip: 'u šumi. No rule predicts it against na otoku.',
  },
  {
    mode: 'krajolik',
    q: 'Što je "uvala"?',
    en: 'What is an uvala?',
    opts: ['cove, bay', 'cliff', 'harbour', 'peninsula'],
    answer: 'cove, bay',
    tip: 'The small sheltered bay every island is full of.',
  },
  {
    mode: 'krajolik',
    q: 'Što je "slap"?',
    en: 'What is a slap?',
    opts: ['waterfall', 'rapids', 'stream', 'spring'],
    answer: 'waterfall',
    tip: 'Plitvička jezera are famous for them.',
  },
  {
    mode: 'krajolik',
    q: 'Što je "špilja"?',
    en: 'What is a špilja?',
    opts: ['cave', 'gorge', 'well', 'tunnel'],
    answer: 'cave',
    tip: 'The karst is full of them.',
  },
  {
    mode: 'krajolik',
    q: 'Koja hrvatska riječ je dala geološki pojam "karst"?',
    en: 'Which Croatian word gave the world "karst"?',
    opts: ['kras', 'krš', 'kamen', 'stijena'],
    answer: 'kras',
    tip: 'The Kras landscape named the whole geological type.',
  },
  {
    mode: 'krajolik',
    q: 'Idem ____ more.',
    en: 'I am going to the seaside.',
    opts: ['na', 'u', 'do', 'k'],
    answer: 'na',
    tip: 'Going there → na plus the ACCUSATIVE: idem na more, and I am there na moru.',
  },
  {
    mode: 'krajolik',
    q: 'Razlika između "brdo" i "planina" je ____.',
    en: 'hill against mountain',
    opts: ['visina', 'položaj', 'ništa', 'rod'],
    answer: 'visina',
    tip: 'brdo is a hill, planina a mountain.',
  },

  // ── vjetrovi ──────────────────────────────────────────────────────────────
  {
    mode: 'vjetrovi',
    q: 'Kakva je "bura"?',
    en: 'What is the bura like?',
    opts: [
      'hladna i suha, sa sjeveroistoka',
      'topla i vlažna, s juga',
      'blagi ljetni povjetarac',
      'vlažna, sa zapada',
    ],
    answer: 'hladna i suha, sa sjeveroistoka',
    tip: 'Cold, dry, off the mountains — and it closes bridges.',
  },
  {
    mode: 'vjetrovi',
    q: 'Kakav je "jugo"?',
    en: 'What is the jugo like?',
    opts: ['topao i vlažan, s juga', 'hladan i suh', 'ljetni povjetarac', 'vjetar s kopna'],
    answer: 'topao i vlažan, s juga',
    tip: 'Warm and damp — and locally blamed for headaches and short tempers.',
  },
  {
    mode: 'vjetrovi',
    q: 'Što je "maestral"?',
    en: 'What is the maestral?',
    opts: ['ugodan ljetni povjetarac s mora', 'zimska oluja', 'suhi vjetar', 'jaki vjetar s kopna'],
    answer: 'ugodan ljetni povjetarac s mora',
    tip: 'The afternoon sea breeze sailors plan around.',
  },
  {
    mode: 'vjetrovi',
    q: '____ bura.',
    en: 'The bura is blowing.',
    opts: ['Puše', 'Pada', 'Ide', 'Teče'],
    answer: 'Puše',
    tip: 'Puše bura — wind blows, rain falls.',
  },
  {
    mode: 'vjetrovi',
    q: 'Zašto "Puše bura" nije samo primjedba o vremenu?',
    en: 'Why is it more than small talk?',
    opts: [
      'zatvaraju se mostovi i trajekti',
      'najavljuje kišu',
      'znači da je ljeto',
      'nije ništa posebno',
    ],
    answer: 'zatvaraju se mostovi i trajekti',
    tip: 'On the coast it decides whether you travel at all.',
  },
  {
    mode: 'vjetrovi',
    q: 'Odakle puše bura?',
    en: 'Where does the bura come from?',
    opts: ['sa sjeveroistoka', 's juga', 'sa zapada', 's mora'],
    answer: 'sa sjeveroistoka',
    tip: 'sa is used before s — sa sjeveroistoka.',
  },
  {
    mode: 'vjetrovi',
    q: 'Što je "oluja"?',
    en: 'What is an oluja?',
    opts: ['storm', 'drought', 'flood', 'fog'],
    answer: 'storm',
    tip: 'suša is drought, poplava a flood.',
  },
  {
    mode: 'vjetrovi',
    q: 'Što je "suša"?',
    en: 'What is suša?',
    opts: ['drought', 'dryer', 'heatwave', 'dry season'],
    answer: 'drought',
    tip: 'From suh, dry.',
  },

  // ── okolis ────────────────────────────────────────────────────────────────
  {
    mode: 'okolis',
    q: 'Što je "okoliš"?',
    en: 'What is okoliš?',
    opts: ['the environment', 'the surroundings of a house', 'a district', 'a habitat'],
    answer: 'the environment',
    tip: 'zaštita okoliša — environmental protection.',
  },
  {
    mode: 'okolis',
    q: 'Što je "onečišćenje"?',
    en: 'What is onečišćenje?',
    opts: ['pollution', 'contamination of food', 'litter', 'emission'],
    answer: 'pollution',
    tip: 'From nečist, unclean.',
  },
  {
    mode: 'okolis',
    q: 'Što je "otpad"?',
    en: 'What is otpad?',
    opts: ['waste', 'scrap yard', 'landfill', 'drain'],
    answer: 'waste',
    tip: 'And to sort it is razvrstavati otpad.',
  },
  {
    mode: 'okolis',
    q: 'Trebamo ____ prirodu.',
    en: 'We need to protect nature.',
    opts: ['zaštititi', 'zaštitimo', 'zaštita', 'štititi se'],
    answer: 'zaštititi',
    tip: 'The infinitive after trebati.',
  },
  {
    mode: 'okolis',
    q: 'Koliko Hrvatska ima nacionalnih parkova?',
    en: 'How many national parks?',
    opts: ['osam', 'pet', 'deset', 'dvanaest'],
    answer: 'osam',
    tip: 'Eight — plus eleven nature parks.',
  },
  {
    mode: 'okolis',
    q: 'Što znači "reciklirati"?',
    en: 'What does reciklirati mean?',
    opts: ['to recycle', 'to reuse', 'to compost', 'to dispose of'],
    answer: 'to recycle',
    tip: 'And recikliranje is the noun.',
  },
  {
    mode: 'okolis',
    q: 'Zaštita ____ . (okoliš)',
    en: 'protection of the environment',
    opts: ['okoliša', 'okoliš', 'okolišu', 'okolišem'],
    answer: 'okoliša',
    tip: 'Genitive after a noun of the "X of Y" kind.',
  },
  {
    mode: 'okolis',
    q: 'Što su "klimatske promjene"?',
    en: 'What are klimatske promjene?',
    opts: ['climate change', 'seasonal changes', 'weather patterns', 'a forecast'],
    answer: 'climate change',
    tip: 'Plural in Croatian, as in English.',
  },
];
