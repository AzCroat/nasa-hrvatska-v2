// src/data/drills/spontaneousDrill.ts
//
// C2 SPONTANI GOVOR — the drill for the `spontani-govor` lesson.
//
// The B2 fluency lesson taught hesitating in Croatian rather than in silence.
// This is the same skill under pressure, and it has three parts.
//
// THE FILLERS ARE CROATIAN, not translated. *Pa*, *ovaj*, *znači*, *mislim* —
// and a speaker who inserts "um" and "you know" has switched language mid-
// sentence, which is more noticeable than the pause would have been.
//
// REPAIR IN PLACE, DO NOT RESTART. *Odnosno* and *točnije rečeno* let a sentence
// be corrected while it is still running. Restarting announces that the first
// attempt failed; repairing sounds like precision.
//
// AND ANNOUNCE A STRUCTURE YOU CAN FINISH. *Rekao bih dvije stvari. Prvo…
// Drugo…* — two points, not three, because the promise has to be keepable. If a
// clause stalls, drop to a simpler structure: that is invisible, and stalling
// is not.
//
// Three modes:
//   postapalice — the real Croatian fillers
//   popravak    — repairing in place
//   struktura   — announcing a shape you can finish

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const SPONTANEOUS_MODE_LABELS: Record<string, string> = {
  postapalice: '💬 Poštapalice',
  popravak: '🔧 Popravak u hodu',
  struktura: '🗂️ Najava strukture',
};

export const SPONTANEOUS_DRILL_DATA: ModeDrillItem[] = [
  // ── postapalice ───────────────────────────────────────────────────────────
  {
    mode: 'postapalice',
    q: 'Koje su prave hrvatske poštapalice?',
    en: 'The real Croatian fillers:',
    opts: ['pa, ovaj, znači, mislim', 'um, you know', 'ovaj, well', 'ahm, dakle'],
    answer: 'pa, ovaj, znači, mislim',
    tip: 'Translated English fillers are more conspicuous than the pause would be.',
  },
  {
    mode: 'postapalice',
    q: 'Zašto je engleska poštapalica uočljivija od stanke?',
    en: 'Why is an English filler worse than a pause?',
    opts: [
      'jer je promjena jezika usred rečenice',
      'jer je dulja',
      'jer je glasnija',
      'nije uočljivija',
    ],
    answer: 'jer je promjena jezika usred rečenice',
    tip: 'The listener hears the switch, not the hesitation.',
  },
  {
    mode: 'postapalice',
    q: 'Što radi "znači" kao poštapalica?',
    en: 'What does znači do?',
    opts: ['kupuje trenutak', 'objašnjava', 'zaključuje', 'pita'],
    answer: 'kupuje trenutak',
    tip: 'Its literal meaning is gone; it is pure hesitation.',
  },
  {
    mode: 'postapalice',
    q: '"____, kako da kažem…"',
    en: 'Well, how shall I put it…',
    opts: ['Pa', 'Ovaj', 'Znači', 'Mislim'],
    answer: 'Pa',
    tip: 'The classic opener, and it buys a full second.',
  },
  {
    mode: 'postapalice',
    q: 'Što radi "Da budem iskren…"?',
    en: 'What does that do?',
    opts: ['uokviruje odgovor dok ga tražite', 'najavljuje istinu', 'ublažava', 'pita'],
    answer: 'uokviruje odgovor dok ga tražite',
    tip: 'It frames the answer while you find it, which is its real function.',
  },
  {
    mode: 'postapalice',
    q: 'Zašto "To je dobro pitanje." djeluje?',
    en: 'Why does that work?',
    opts: ['univerzalno je i kupuje vrijeme', 'laska sugovorniku', 'mijenja temu', 'ne djeluje'],
    answer: 'univerzalno je i kupuje vrijeme',
    tip: 'Universally recognised as a delaying move, and universally tolerated.',
  },
  {
    mode: 'postapalice',
    q: '"Ovisi o tome kako ____."',
    en: 'It depends how you look at it.',
    opts: ['gledate', 'gledati', 'gledam', 'gledano'],
    answer: 'gledate',
    tip: 'True often enough to be useful, and it buys a whole clause.',
  },
  {
    mode: 'postapalice',
    q: 'Kako se odgađa pitanje bez ostavljanja?',
    en: 'Deferring a question cleanly:',
    opts: ['Vratit ću se na to.', 'Ne znam.', 'Kasnije.', 'Preskočimo.'],
    answer: 'Vratit ću se na to.',
    tip: 'It defers without dropping it — and you must actually come back.',
  },

  // ── popravak ──────────────────────────────────────────────────────────────
  {
    mode: 'popravak',
    q: 'Kako se ispravlja rečenica u hodu?',
    en: 'Correcting mid-sentence:',
    opts: ['odnosno', 'dakle', 'zapravo ne', 'oprostite'],
    answer: 'odnosno',
    tip: 'Odnosno and točnije rečeno repair in place, without a restart.',
  },
  {
    mode: 'popravak',
    q: 'Zašto ne krenuti ispočetka?',
    en: 'Why not restart?',
    opts: ['restart odaje neuspjeh', 'dulje traje', 'gubi se misao', 'nema razlike'],
    answer: 'restart odaje neuspjeh',
    tip: 'Repairing sounds like precision; restarting sounds like failure.',
  },
  {
    mode: 'popravak',
    q: 'Što znači "točnije rečeno"?',
    en: 'What does točnije rečeno mean?',
    opts: ['preciznije', 'suprotno', 'ukratko', 'naime'],
    answer: 'preciznije',
    tip: 'More precisely — and it upgrades the sentence rather than replacing it.',
  },
  {
    mode: 'popravak',
    q: 'Što se radi kad rečenica zapne na sredini?',
    en: 'When a clause stalls:',
    opts: [
      'prijeći na jednostavniju strukturu',
      'stati i početi ponovno',
      'ušutjeti',
      'prijeći na engleski',
    ],
    answer: 'prijeći na jednostavniju strukturu',
    tip: 'Dropping to two short sentences is invisible; stalling is not.',
  },
  {
    mode: 'popravak',
    q: 'Je li pojednostavljenje pod pritiskom vidljivo?',
    en: 'Is simplifying visible?',
    opts: ['ne', 'da, odmah', 'samo stručnjaku', 'samo u pisanju'],
    answer: 'ne',
    tip: 'Nobody counts your subordinate clauses. They do notice the silence.',
  },
  {
    mode: 'popravak',
    q: 'Što je gore od pogreške u spontanom govoru?',
    en: 'What is worse than an error?',
    opts: ['zastoj', 'ponavljanje', 'poštapalica', 'jednostavna rečenica'],
    answer: 'zastoj',
    tip: 'An error passes; a stall stops the conversation.',
  },
  {
    mode: 'popravak',
    q: 'Kako se popravlja izbor riječi?',
    en: 'Repairing a word choice:',
    opts: ['ili bolje rečeno', 'ne, nego', 'oprostite', 'kako se kaže'],
    answer: 'ili bolje rečeno',
    tip: 'It offers an upgrade rather than retracting what came before.',
  },
  {
    mode: 'popravak',
    q: 'Što se postiže popravkom naglas?',
    en: 'What does repairing aloud achieve?',
    opts: ['zvuči kao preciznost', 'kupuje vrijeme', 'skriva pogrešku', 'ništa'],
    answer: 'zvuči kao preciznost',
    tip: 'Which is why practised speakers repair rather than restart.',
  },

  // ── struktura ─────────────────────────────────────────────────────────────
  {
    mode: 'struktura',
    q: 'Kako se najavljuje odgovor?',
    en: 'Announcing your answer:',
    opts: [
      'Rekao bih dvije stvari. Prvo… Drugo…',
      'Imam mnogo toga reći.',
      'Pa, ne znam odakle početi.',
      'Odgovorit ću.',
    ],
    answer: 'Rekao bih dvije stvari. Prvo… Drugo…',
    tip: 'Announce the shape and the rest of the answer builds itself.',
  },
  {
    mode: 'struktura',
    q: 'Zašto dvije točke, a ne tri?',
    en: 'Why two points and not three?',
    opts: ['obećanje koje se može ispuniti', 'dvije su dovoljne', 'tri je predugo', 'nema razloga'],
    answer: 'obećanje koje se može ispuniti',
    tip: 'Announce three and the third one has to exist.',
  },
  {
    mode: 'struktura',
    q: 'Što se dogodi ako se najavi tri, a ima dvije?',
    en: 'If you promise three and have two?',
    opts: ['slušatelj čeka treću', 'nitko ne primijeti', 'zvuči skromno', 'ništa'],
    answer: 'slušatelj čeka treću',
    tip: 'And the pause while you invent one is the stall you were avoiding.',
  },
  {
    mode: 'struktura',
    q: 'Čemu služi najava strukture?',
    en: 'What does announcing do for you?',
    opts: ['ne možete se izgubiti', 'zvuči učenije', 'kupuje vrijeme jedino', 'skraćuje odgovor'],
    answer: 'ne možete se izgubiti',
    tip: 'You have given yourself the outline you would otherwise have to hold.',
  },
  {
    mode: 'struktura',
    q: '"Ako sam dobro razumio ____…" (pitanje)',
    en: 'If I have understood the question…',
    opts: ['pitanje', 'pitanja', 'pitanju', 'pitanjem'],
    answer: 'pitanje',
    tip: 'Accusative — and it buys time while checking comprehension.',
  },
  {
    mode: 'struktura',
    q: 'Koja dva posla obavlja ta rečenica odjednom?',
    en: 'What two jobs does it do?',
    opts: [
      'kupuje vrijeme i provjerava razumijevanje',
      'ublažava i skraćuje',
      'pita i odgovara',
      'samo kupuje vrijeme',
    ],
    answer: 'kupuje vrijeme i provjerava razumijevanje',
    tip: 'Which is why it is the most efficient move in the set.',
  },
  {
    mode: 'struktura',
    q: 'Kako se zatvara odgovor koji je krenuo predaleko?',
    en: 'Closing an answer that overran:',
    opts: ['Ukratko, …', 'To je sve.', 'Ne znam više.', 'Oprostite.'],
    answer: 'Ukratko, …',
    tip: 'It signals a summary and lets you land the point you actually had.',
  },
  {
    mode: 'struktura',
    q: 'Što je krajnji cilj ovih tehnika?',
    en: 'What are these techniques for?',
    opts: [
      'razgovor se nastavlja na hrvatskom',
      'zvučati izvorno',
      'izbjeći pogreške',
      'govoriti brže',
    ],
    answer: 'razgovor se nastavlja na hrvatskom',
    tip: 'Everything else follows from not dropping out of the conversation.',
  },
];
