// src/data/drills/phraseologyDrill.ts
//
// C2 FRAZEOLOGIJA — DUBINSKA — the drill for the `frazeologija-dubinska`
// lesson.
//
// HALF A PROVERB IS THE WHOLE PROVERB. Nobody says *Tko rano rani, dvije sreće
// grabi* — they say *Tko rano rani…* and stop, because the rest is assumed.
// A learner listening for a complete sentence hears an unfinished one and
// misses the point entirely. So the skill being drilled is recognition from the
// OPENING.
//
// The CLASSICAL AND BIBLICAL LAYER is assumed and unexplained in serious
// writing: *gordijski čvor*, *sizifov posao*, *prijeći Rubikon*, *izgubljeni
// sin*. The good news is that the references are largely shared with English —
// only the wording differs, so this is a translation problem rather than a
// cultural one.
//
// A smaller local set carries Croatian history and varies by region, which is
// worth asking about rather than assuming.
//
// And the production rule: RECOGNISE EVERYTHING, USE ONE AT A TIME. Three
// proverbs in a paragraph reads as a performance.
//
// Three modes:
//   poslovice — recognising from the opening
//   aluzije   — the classical and biblical layer
//   uporaba   — how sparingly to deploy them

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const PHRASEOLOGY_MODE_LABELS: Record<string, string> = {
  poslovice: '🗝️ Poslovice',
  aluzije: '🏛️ Aluzije',
  uporaba: '⚖️ Uporaba',
};

export const PHRASEOLOGY_DRILL_DATA: ModeDrillItem[] = [
  // ── poslovice ─────────────────────────────────────────────────────────────
  {
    mode: 'poslovice',
    q: 'Kako se poslovice obično izgovaraju?',
    en: 'How are proverbs usually delivered?',
    opts: ['dopola', 'u cijelosti', 'obrnuto', 'uz objašnjenje'],
    answer: 'dopola',
    tip: 'The opening is the whole thing. The rest is assumed.',
  },
  {
    mode: 'poslovice',
    q: 'Dovršite: "Tko rano rani, ____"',
    en: 'The early riser…',
    opts: ['dvije sreće grabi', 'dobro spava', 'više radi', 'prvi stiže'],
    answer: 'dvije sreće grabi',
    tip: 'Catches two strokes of luck. And nobody ever says the second half.',
  },
  {
    mode: 'poslovice',
    q: 'Što znači "Bolje vrabac u ruci nego golub na grani"?',
    en: 'What does it mean?',
    opts: ['uzmi sigurno', 'strpi se', 'ne vjeruj nikome', 'radi polako'],
    answer: 'uzmi sigurno',
    tip: 'Take the certain option — the sparrow you are holding.',
  },
  {
    mode: 'poslovice',
    q: 'Što znači "Sto ljudi, sto ćudi"?',
    en: 'What does it mean?',
    opts: ['ljudi su različiti', 'mnogo je ljudi', 'svi su isti', 'teško je odlučiti'],
    answer: 'ljudi su različiti',
    tip: 'A hundred people, a hundred temperaments — accepting difference.',
  },
  {
    mode: 'poslovice',
    q: 'Što znači "Bez muke nema nauke"?',
    en: 'What does it mean?',
    opts: ['učenje traži trud', 'učenje je bolno', 'nauka je teška', 'ne treba se mučiti'],
    answer: 'učenje traži trud',
    tip: 'Consolation during difficulty, and said to learners constantly.',
  },
  {
    mode: 'poslovice',
    q: 'Što znači "Tiha voda brijege dere"?',
    en: 'What does it mean?',
    opts: [
      'tihi su najustrajniji',
      'voda je opasna',
      'strpljenje se isplati',
      'polako se ide daleko',
    ],
    answer: 'tihi su najustrajniji',
    tip: 'The quiet one to watch — usually said about a person.',
  },
  {
    mode: 'poslovice',
    q: 'Zašto je prepoznavanje po početku ključno?',
    en: 'Why recognise from the opening?',
    opts: ['drugi dio se ne izgovara', 'početak je kraći', 'kraj se mijenja', 'nije ključno'],
    answer: 'drugi dio se ne izgovara',
    tip: 'You will never hear the completion, so you have to supply it.',
  },
  {
    mode: 'poslovice',
    q: 'Dovršite: "Iz malih potoka ____"',
    en: 'From small streams…',
    opts: ['nastaju velike rijeke', 'teče bistra voda', 'nastaju jezera', 'malo se dobiva'],
    answer: 'nastaju velike rijeke',
    tip: 'Small beginnings, large results.',
  },

  // ── aluzije ───────────────────────────────────────────────────────────────
  {
    mode: 'aluzije',
    q: 'Što je "gordijski čvor"?',
    en: 'What is a gordijski čvor?',
    opts: ['nerješiv problem', 'složen ugovor', 'zamršena rečenica', 'stara svađa'],
    answer: 'nerješiv problem',
    tip: 'Classical — Alexander, and the reference is shared with English.',
  },
  {
    mode: 'aluzije',
    q: 'Što je "sizifov posao"?',
    en: 'What is a sizifov posao?',
    opts: ['beskrajan uzaludan trud', 'težak fizički rad', 'dosadan posao', 'posao bez plaće'],
    answer: 'beskrajan uzaludan trud',
    tip: 'Sisyphus — endless and futile.',
  },
  {
    mode: 'aluzije',
    q: 'Što znači "prijeći Rubikon"?',
    en: 'What does it mean?',
    opts: ['prijeći točku bez povratka', 'napustiti zemlju', 'promijeniti stranu', 'riskirati'],
    answer: 'prijeći točku bez povratka',
    tip: 'Caesar, and the decision that cannot be undone.',
  },
  {
    mode: 'aluzije',
    q: 'Što je "glas vapijućega u pustinji"?',
    en: 'What is that?',
    opts: ['neuslišano upozorenje', 'usamljen čovjek', 'prazna prijetnja', 'daleki zvuk'],
    answer: 'neuslišano upozorenje',
    tip: 'Biblical — a warning nobody heeded.',
  },
  {
    mode: 'aluzije',
    q: 'Tko je "izgubljeni sin"?',
    en: 'Who is the izgubljeni sin?',
    opts: ['onaj koji se vratio', 'nestala osoba', 'nezahvalno dijete', 'siroče'],
    answer: 'onaj koji se vratio',
    tip: 'The prodigal son — and the point of the story is the return.',
  },
  {
    mode: 'aluzije',
    q: 'Što je "trojanski konj"?',
    en: 'What is a trojanski konj?',
    opts: ['skrivena prijetnja', 'velik dar', 'lažna vijest', 'stari plan'],
    answer: 'skrivena prijetnja',
    tip: 'Shared with English down to the metaphor.',
  },
  {
    mode: 'aluzije',
    q: 'Objašnjavaju li se te aluzije u ozbiljnom tekstu?',
    en: 'Are they explained in serious writing?',
    opts: ['ne, pretpostavljaju se', 'da, uvijek', 'u fusnoti', 'ovisi o listu'],
    answer: 'ne, pretpostavljaju se',
    tip: 'Assumed and unexplained — which is why they have to be recognised.',
  },
  {
    mode: 'aluzije',
    q: 'Zašto je taj sloj lakši nego što se čini?',
    en: 'Why is that layer easier than it looks?',
    opts: [
      'reference su iste kao u engleskom',
      'rijetke su',
      'uvijek se objašnjavaju',
      'nije lakši',
    ],
    answer: 'reference su iste kao u engleskom',
    tip: 'Only the wording differs — a translation problem, not a cultural one.',
  },

  // ── uporaba ───────────────────────────────────────────────────────────────
  {
    mode: 'uporaba',
    q: 'Koliko poslovica po odlomku?',
    en: 'How many proverbs per paragraph?',
    opts: ['jedna', 'tri', 'koliko odgovara', 'nijedna'],
    answer: 'jedna',
    tip: 'Recognise all of them; produce one at a time.',
  },
  {
    mode: 'uporaba',
    q: 'Kako zvuče tri poslovice u nizu?',
    en: 'How do three in a row read?',
    opts: ['kao izvedba', 'kao izvornost', 'kao učenost', 'neutralno'],
    answer: 'kao izvedba',
    tip: 'It reads as performing fluency rather than having it.',
  },
  {
    mode: 'uporaba',
    q: 'Što je pametno pitati o lokalnim izrazima?',
    en: 'What is worth asking about local ones?',
    opts: ['rabe li se u tom kraju', 'jesu li stari', 'tko ih je izmislio', 'ništa'],
    answer: 'rabe li se u tom kraju',
    tip: 'The local set varies by region, and using the wrong one is conspicuous.',
  },
  {
    mode: 'uporaba',
    q: 'Koja je razlika između prepoznavanja i uporabe?',
    en: 'Recognition against production?',
    opts: [
      'prepoznavati sve, rabiti malo',
      'rabiti sve što se zna',
      'prepoznavati samo česte',
      'nema razlike',
    ],
    answer: 'prepoznavati sve, rabiti malo',
    tip: 'The asymmetry is the lesson.',
  },
  {
    mode: 'uporaba',
    q: 'Što je "frazem"?',
    en: 'What is a frazem?',
    opts: ['ustaljena sveza s prenesenim značenjem', 'poslovica', 'izreka mudraca', 'strana riječ'],
    answer: 'ustaljena sveza s prenesenim značenjem',
    tip: 'A fixed expression whose meaning is not the sum of its words.',
  },
  {
    mode: 'uporaba',
    q: 'Smije li se frazem mijenjati?',
    en: 'May a fixed expression be altered?',
    opts: ['ne, prepoznaje se po obliku', 'da, slobodno', 'samo u govoru', 'samo u šali'],
    answer: 'ne, prepoznaje se po obliku',
    tip: 'Change a word and the listener hears a mistake, not a variation.',
  },
  {
    mode: 'uporaba',
    q: 'Kad je uporaba poslovice najuspješnija?',
    en: 'When does a proverb land best?',
    opts: [
      'kad zaključuje već izrečeno',
      'kad otvara temu',
      'kad se ponavlja',
      'kad se objašnjava',
    ],
    answer: 'kad zaključuje već izrečeno',
    tip: 'It closes an argument the listener has already followed.',
  },
  {
    mode: 'uporaba',
    q: 'Što odaje učenika koji pretjera?',
    en: 'What gives away overuse?',
    opts: ['izrazi ne prate temu nego prilika', 'pogrešan oblik', 'krivi naglasak', 'ništa'],
    answer: 'izrazi ne prate temu nego prilika',
    tip: 'They arrive because they were learned, not because the moment called for them.',
  },
];
