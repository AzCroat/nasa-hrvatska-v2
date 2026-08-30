// src/data/drills/hobbiesDrill.ts
//
// A2 FREE TIME & HOBBIES — the drill for the `hobbies-free-time` lesson.
//
// English "play" splits three ways in Croatian and the split is not optional.
// *Igrati* is games and sport — *igram nogomet*, *igram šah*. *Svirati* is a
// musical instrument, and only that — *sviram gitaru*; **igrati gitaru* is not
// a stylistic slip, it is not Croatian. *Igrati se* with the reflexive is what
// children do with toys. One English verb, three Croatian ones, chosen by what
// follows.
//
// Two more structures sit alongside. *Baviti se* takes the INSTRUMENTAL for a
// regular pursuit — *bavim se sportom* — and the instrumental again does duty
// as a time expression: *subotom* means "on Saturdays", *vikendom* "at
// weekends", with no preposition at all.
//
// Three modes:
//   igrati   — igrati, svirati, igrati se
//   bavitise — baviti se + instrumental, and voljeti + infinitive
//   kada     — the instrumental of time, and how often

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const HOBBIES_MODE_LABELS: Record<string, string> = {
  igrati: '⚽ Igrati ili svirati',
  bavitise: '🏃 Baviti se',
  kada: '📅 Kada i koliko često',
};

export const HOBBIES_DRILL_DATA: ModeDrillItem[] = [
  // ── igrati ────────────────────────────────────────────────────────────────
  {
    mode: 'igrati',
    q: '____ nogomet.',
    en: 'I play football.',
    opts: ['Igram', 'Sviram', 'Igram se', 'Radim'],
    answer: 'Igram',
    tip: 'Igrati is for games and sport.',
  },
  {
    mode: 'igrati',
    q: '____ gitaru.',
    en: 'I play the guitar.',
    opts: ['Sviram', 'Igram', 'Igram se', 'Sviram se'],
    answer: 'Sviram',
    tip: 'An instrument is ALWAYS svirati. Igrati gitaru is not Croatian.',
  },
  {
    mode: 'igrati',
    q: 'Djeca se ____ u vrtu.',
    en: 'The children are playing in the garden.',
    opts: ['igraju', 'sviraju', 'igra', 'igraju se'],
    answer: 'igraju',
    tip: 'The se is already in the sentence: djeca se igraju.',
  },
  {
    mode: 'igrati',
    q: 'Što odlučuje između igrati i svirati?',
    en: 'What decides between them?',
    opts: ['je li riječ o instrumentu', 'tko govori', 'vrijeme', 'je li unutra ili vani'],
    answer: 'je li riječ o instrumentu',
    tip: 'Instrument → svirati. Game or sport → igrati.',
  },
  {
    mode: 'igrati',
    q: '____ klavir već deset godina.',
    en: 'I have played the piano for ten years.',
    opts: ['Sviram', 'Igram', 'Igram se', 'Sviraju'],
    answer: 'Sviram',
    tip: 'sviram klavir.',
  },
  {
    mode: 'igrati',
    q: '____ šah svake subote.',
    en: 'I play chess every Saturday.',
    opts: ['Igram', 'Sviram', 'Igram se', 'Sviraš'],
    answer: 'Igram',
    tip: 'Chess is a game → igrati.',
  },
  {
    mode: 'igrati',
    q: 'Igram ____. (košarka)',
    en: 'I play basketball.',
    opts: ['košarku', 'košarka', 'košarke', 'košarkom'],
    answer: 'košarku',
    tip: 'The sport is a direct object → accusative.',
  },
  {
    mode: 'igrati',
    q: 'Što znači "igrati se" s povratnom zamjenicom?',
    en: 'What does the reflexive add?',
    opts: ['igra bez pravila, kao dijete', 'igra u momčadi', 'igra na instrumentu', 'ništa'],
    answer: 'igra bez pravila, kao dijete',
    tip: 'Playing about, rather than playing a game with rules.',
  },

  // ── bavitise ──────────────────────────────────────────────────────────────
  {
    mode: 'bavitise',
    q: 'Bavim se ____. (sport)',
    en: 'I do sport.',
    opts: ['sportom', 'sport', 'sporta', 'sportu'],
    answer: 'sportom',
    tip: 'Baviti se takes the INSTRUMENTAL.',
  },
  {
    mode: 'bavitise',
    q: 'Bavim se ____. (fotografija)',
    en: 'I do photography.',
    opts: ['fotografijom', 'fotografiju', 'fotografije', 'fotografija'],
    answer: 'fotografijom',
    tip: 'fotografijom.',
  },
  {
    mode: 'bavitise',
    q: 'Što "baviti se" govori o aktivnosti?',
    en: 'What does baviti se imply?',
    opts: ['da je redovita', 'da je nova', 'da je plaćena', 'da je teška'],
    answer: 'da je redovita',
    tip: 'An ongoing pursuit, not a one-off.',
  },
  {
    mode: 'bavitise',
    q: '____ kuhati.',
    en: 'I like cooking.',
    opts: ['Volim', 'Volim se', 'Sviđam', 'Bavim se'],
    answer: 'Volim',
    tip: 'Voljeti plus the INFINITIVE: volim kuhati, volim čitati.',
  },
  {
    mode: 'bavitise',
    q: 'Volim ____. (putovati)',
    en: 'I like travelling.',
    opts: ['putovati', 'putujem', 'putovanje', 'putujući'],
    answer: 'putovati',
    tip: 'The infinitive follows voljeti directly.',
  },
  {
    mode: 'bavitise',
    q: 'Bavim se ____. (glazba)',
    en: 'I am into music.',
    opts: ['glazbom', 'glazbu', 'glazbe', 'glazbi'],
    answer: 'glazbom',
    tip: 'glazbom.',
  },
  {
    mode: 'bavitise',
    q: 'Što znači "planinariti"?',
    en: 'What does planinariti mean?',
    opts: ['to go hiking', 'to ski', 'to climb rocks', 'to camp'],
    answer: 'to go hiking',
    tip: 'From planina, mountain.',
  },
  {
    mode: 'bavitise',
    q: 'Kako se kaže "in my free time"?',
    en: 'in my free time',
    opts: [
      'u slobodno vrijeme',
      'na slobodno vrijeme',
      'u slobodnom vremenu',
      'za slobodno vrijeme',
    ],
    answer: 'u slobodno vrijeme',
    tip: 'Fixed phrase — u plus the accusative, and it opens the whole topic.',
  },

  // ── kada ──────────────────────────────────────────────────────────────────
  {
    mode: 'kada',
    q: 'Kako se kaže "on Saturdays"?',
    en: 'on Saturdays (habitually)',
    opts: ['subotom', 'u subotu', 'na subotu', 'subote'],
    answer: 'subotom',
    tip: 'The INSTRUMENTAL of time — one word, no preposition, and it means every Saturday.',
  },
  {
    mode: 'kada',
    q: 'Kako se kaže "this Saturday"?',
    en: 'this coming Saturday',
    opts: ['u subotu', 'subotom', 'na subotu', 'subote'],
    answer: 'u subotu',
    tip: 'u plus the accusative for ONE particular Saturday. The pair is the point.',
  },
  {
    mode: 'kada',
    q: 'Kako se kaže "at weekends"?',
    en: 'at weekends',
    opts: ['vikendom', 'u vikend', 'na vikend', 'vikende'],
    answer: 'vikendom',
    tip: 'vikendom — same instrumental.',
  },
  {
    mode: 'kada',
    q: 'Koji padež nosi "subotom" i "vikendom"?',
    en: 'Which case is that?',
    opts: ['instrumental', 'lokativ', 'genitiv', 'akuzativ'],
    answer: 'instrumental',
    tip: 'The instrumental does double duty: means, company AND habitual time.',
  },
  {
    mode: 'kada',
    q: 'Kako se kaže "in summer"?',
    en: 'in summer',
    opts: ['ljeti', 'u ljeto', 'ljetom', 'na ljeto'],
    answer: 'ljeti',
    tip: 'ljeti and zimi are bare adverbs — the same idea, an older form.',
  },
  {
    mode: 'kada',
    q: '____ idem u teretanu. (three times a week)',
    en: 'Three times a week I go to the gym.',
    opts: ['Tri puta tjedno', 'Tri put tjedan', 'Tri puta tjedan', 'Trip put tjedno'],
    answer: 'Tri puta tjedno',
    tip: 'tri puta tjedno / mjesečno / godišnje.',
  },
  {
    mode: 'kada',
    q: 'Koji prilog znači "rarely"?',
    en: 'rarely',
    opts: ['rijetko', 'često', 'ponekad', 'uvijek'],
    answer: 'rijetko',
    tip: 'uvijek, često, ponekad, rijetko, nikad.',
  },
  {
    mode: 'kada',
    q: '____ ne idem u kino.',
    en: 'I never go to the cinema.',
    opts: ['Nikad', 'Uvijek', 'Često', 'Ponekad'],
    answer: 'Nikad',
    tip: 'Nikad keeps the negated verb: nikad NE idem. Croatian doubles the negative.',
  },
];
