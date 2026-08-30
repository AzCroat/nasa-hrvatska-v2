// src/data/drills/meetingsDrill.ts
//
// B2 MEETINGS & NEGOTIATION — the drill for the `meetings-negotiation` lesson.
//
// The structural point is *Predlažem da* plus the PRESENT TENSE: *Predlažem da
// odgodimo odluku*. Not the infinitive, which is what a learner reaches for
// after a modal — and the reason is that the subject CHANGES. I propose; WE
// postpone. Croatian marks a change of subject with a full da-clause, and a
// proposal is the clearest everyday case of it.
//
// Beside it, *nadovezati se NA* plus the accusative — to build on what somebody
// just said — which is the phrase that turns an interruption into a
// contribution.
//
// The social half is the same concede-first move the opinions lesson taught,
// under more pressure: *Slažem se u načelu, ali…*. A meeting is where a bare
// *ne slažem se* does the most damage, and where the hedged version costs
// nothing.
//
// Three modes:
//   rijec      — taking a turn without being rude
//   predlazem  — proposing, and the da-clause it needs
//   neslaganje — disagreeing, and closing the loop

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const MEETINGS_MODE_LABELS: Record<string, string> = {
  rijec: '🙋 Uzeti riječ',
  predlazem: '💡 Predlažem da',
  neslaganje: '🤝 Neslaganje',
};

export const MEETINGS_DRILL_DATA: ModeDrillItem[] = [
  // ── rijec ─────────────────────────────────────────────────────────────────
  {
    mode: 'rijec',
    q: '____ li nešto dodati?',
    en: 'May I add something?',
    opts: ['Mogu', 'Možeš', 'Može', 'Mogli'],
    answer: 'Mogu',
    tip: 'Mogu li nešto dodati? — asks rather than takes.',
  },
  {
    mode: 'rijec',
    q: 'Htio bih se ____ na to.',
    en: 'I would like to build on that.',
    opts: ['nadovezati', 'nadovezivati se', 'nadovezan', 'nadovežem'],
    answer: 'nadovezati',
    tip: 'The se is already in the sentence, so the infinitive is bare.',
  },
  {
    mode: 'rijec',
    q: 'Koji padež traži "nadovezati se na"?',
    en: 'Which case?',
    opts: ['akuzativ', 'lokativ', 'genitiv', 'dativ'],
    answer: 'akuzativ',
    tip: 'nadovezati se NA plus the accusative.',
  },
  {
    mode: 'rijec',
    q: 'Oprostite što ____, ali imam pitanje.',
    en: 'Sorry to interrupt, but…',
    opts: ['prekidam', 'prekinem', 'prekinuo', 'prekidati'],
    answer: 'prekidam',
    tip: 'The present, because you are doing it right now.',
  },
  {
    mode: 'rijec',
    q: 'Što znači "Ako smijem…"?',
    en: 'What does it mean?',
    opts: ['If I may…', 'If I can…', 'If I must…', 'If I dare…'],
    answer: 'If I may…',
    tip: 'Smjeti is PERMISSION; moći is ability. The distinction matters here.',
  },
  {
    mode: 'rijec',
    q: 'Samo ____, jedna napomena.',
    en: 'Just briefly, one remark.',
    opts: ['kratko', 'kratak', 'kratka', 'kratkom'],
    answer: 'kratko',
    tip: 'An adverb — samo kratko — and it buys a turn without a fight.',
  },
  {
    mode: 'rijec',
    q: 'Zašto se traži riječ, a ne samo počne govoriti?',
    en: 'Why ask for the floor?',
    opts: [
      'upad bez najave čita se kao grubost',
      'tako traži pravilnik',
      'zvuči učenije',
      'nije potrebno',
    ],
    answer: 'upad bez najave čita se kao grubost',
    tip: 'Four words of preamble turn an interruption into a contribution.',
  },
  {
    mode: 'rijec',
    q: 'Vratimo se ____ prethodnu točku.',
    en: 'Let us go back to the previous point.',
    opts: ['na', 'u', 'za', 'k'],
    answer: 'na',
    tip: 'vratiti se NA plus the accusative.',
  },

  // ── predlazem ─────────────────────────────────────────────────────────────
  {
    mode: 'predlazem',
    q: 'Predlažem da ____ odluku. (odgoditi, mi)',
    en: 'I propose that we postpone the decision.',
    opts: ['odgodimo', 'odgoditi', 'odgađamo', 'odgodili'],
    answer: 'odgodimo',
    tip: 'Predlažem da plus the PRESENT — not the infinitive.',
  },
  {
    mode: 'predlazem',
    q: 'Zašto ne infinitiv nakon "predlažem"?',
    en: 'Why not the infinitive?',
    opts: [
      'subjekt se mijenja',
      'infinitiv je neformalan',
      'predlagati ga ne prima',
      'nema razloga',
    ],
    answer: 'subjekt se mijenja',
    tip: 'I propose; WE postpone. A change of subject needs a full clause.',
  },
  {
    mode: 'predlazem',
    q: 'Predlažem da se ____ o tome. (glasati)',
    en: 'I propose that we vote on it.',
    opts: ['glasa', 'glasati', 'glasamo se', 'glasano'],
    answer: 'glasa',
    tip: 'The impersonal se plus the present: da se glasa.',
  },
  {
    mode: 'predlazem',
    q: 'Što ____ o tome da odgodimo?',
    en: 'What do you think about postponing?',
    opts: ['mislite', 'mislim', 'misle', 'misliti'],
    answer: 'mislite',
    tip: 'A meeting is Vi even among colleagues who use ti one at a time.',
  },
  {
    mode: 'predlazem',
    q: '____ bismo pokušati drukčije.',
    en: 'We could try a different way.',
    opts: ['Mogli', 'Možemo', 'Moći', 'Mogao'],
    answer: 'Mogli',
    tip: 'Mogli bismo — the conditional proposes without pressing.',
  },
  {
    mode: 'predlazem',
    q: 'Koja je razlika između "predlažem" i "moramo"?',
    en: 'The difference?',
    opts: ['prijedlog ostavlja izbor', 'nema razlike', 'jedno je formalno', 'jedno je prošlo'],
    answer: 'prijedlog ostavlja izbor',
    tip: 'Moramo closes the question; predlažem opens it.',
  },
  {
    mode: 'predlazem',
    q: 'Možemo li naći ____? (kompromis)',
    en: 'Can we find a compromise?',
    opts: ['kompromis', 'kompromisa', 'kompromisu', 'kompromisom'],
    answer: 'kompromis',
    tip: 'Accusative after naći.',
  },
  {
    mode: 'predlazem',
    q: 'Predlažem da ____ sljedeći tjedan. (nastaviti, mi)',
    en: 'I propose we continue next week.',
    opts: ['nastavimo', 'nastaviti', 'nastavljamo', 'nastavili'],
    answer: 'nastavimo',
    tip: 'Perfective present — one completed continuation, not an ongoing one.',
  },

  // ── neslaganje ────────────────────────────────────────────────────────────
  {
    mode: 'neslaganje',
    q: 'Slažem se ____ načelu, ali imam primjedbu.',
    en: 'I agree in principle, but…',
    opts: ['u', 'na', 'po', 'za'],
    answer: 'u',
    tip: 'u načelu — and it always announces a but.',
  },
  {
    mode: 'neslaganje',
    q: 'Zašto se prvo popušta?',
    en: 'Why concede first?',
    opts: [
      'golo neslaganje na sastanku najviše šteti',
      'kraće je',
      'zvuči učenije',
      'nema razloga',
    ],
    answer: 'golo neslaganje na sastanku najviše šteti',
    tip: 'And the hedged version costs one clause.',
  },
  {
    mode: 'neslaganje',
    q: 'Nisam siguran da je to ____ rješenje. (najbolji)',
    en: 'I am not sure that is the best solution.',
    opts: ['najbolje', 'najbolji', 'najbolja', 'najboljim'],
    answer: 'najbolje',
    tip: 'Rješenje is neuter.',
  },
  {
    mode: 'neslaganje',
    q: 'Kako se zatvara točka?',
    en: 'Closing a point:',
    opts: ['Dogovoreno.', 'To je sve.', 'Dobro.', 'Idemo dalje.'],
    answer: 'Dogovoreno.',
    tip: 'It records the agreement out loud, which is the point of saying it.',
  },
  {
    mode: 'neslaganje',
    q: 'Tko ____ to? (preuzeti)',
    en: 'Who is taking that on?',
    opts: ['preuzima', 'preuzme', 'preuzeti', 'preuzeo'],
    answer: 'preuzima',
    tip: 'Tko preuzima to? — the question that stops a decision evaporating.',
  },
  {
    mode: 'neslaganje',
    q: 'Što znači "primjedba"?',
    en: 'What is a primjedba?',
    opts: ['objection, remark', 'example', 'note taken', 'reminder'],
    answer: 'objection, remark',
    tip: 'Imam primjedbu — I have an objection.',
  },
  {
    mode: 'neslaganje',
    q: 'Vratit ____ se na to na sljedećem sastanku.',
    en: 'We will come back to it at the next meeting.',
    opts: ['ćemo', 'ću', 'će', 'biste'],
    answer: 'ćemo',
    tip: 'And the clitic ćemo takes second position.',
  },
  {
    mode: 'neslaganje',
    q: 'Što znači "u načelu"?',
    en: 'What does u načelu mean?',
    opts: ['in principle', 'at first', 'in practice', 'in the plan'],
    answer: 'in principle',
    tip: 'It grants the idea while reserving the detail.',
  },
];
