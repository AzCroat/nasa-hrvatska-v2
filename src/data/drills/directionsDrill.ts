// src/data/drills/directionsDrill.ts
//
// A1 DIRECTIONS & TOWN — the drill for the `directions-town` lesson.
//
// Asking directions is easy; UNDERSTANDING the answer is the hard half, and it
// is the half the structure lives in. What comes back is a string of polite
// imperatives — *idite*, *skrenite*, *prijeđite* — and a learner who has only
// met the ti-form will not recognise them. Position words then take the
// genitive (*pored banke*, *ispred crkve*) and means of travel takes the
// instrumental (*tramvajem*, *autobusom*, and the odd one out *pješice*).
//
// Three modes:
//   pitanje — asking, and the town vocabulary
//   upute   — the polite imperatives that come back
//   padezi  — genitive for position, instrumental for how you travel

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const DIRECTIONS_MODE_LABELS: Record<string, string> = {
  pitanje: '🙋 Pitanje',
  upute: '🧭 Upute',
  padezi: '📐 Padeži',
};

export const DIRECTIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── pitanje ───────────────────────────────────────────────────────────────
  {
    mode: 'pitanje',
    q: '____, gdje je kolodvor?',
    en: 'Excuse me, where is the station?',
    opts: ['Oprostite', 'Molim', 'Hvala', 'Izvolite'],
    answer: 'Oprostite',
    tip: 'Oprostite opens any question to a stranger.',
  },
  {
    mode: 'pitanje',
    q: 'Gdje se ____ ljekarna?',
    en: 'Where is the pharmacy located?',
    opts: ['nalazi', 'nalaze', 'nalazim', 'nalaziti'],
    answer: 'nalazi',
    tip: 'Gdje se nalazi…? — slightly more formal than gdje je.',
  },
  {
    mode: 'pitanje',
    q: 'Što je "kolodvor"?',
    en: 'What is kolodvor?',
    opts: ['station', 'square', 'church', 'bank'],
    answer: 'station',
    tip: 'Kolodvor — the railway or bus station.',
  },
  {
    mode: 'pitanje',
    q: 'Što je "trg"?',
    en: 'What is trg?',
    opts: ['square', 'street', 'shop', 'bridge'],
    answer: 'square',
    tip: 'Trg — every Croatian town has one at its centre.',
  },
  {
    mode: 'pitanje',
    q: 'Što je "ljekarna"?',
    en: 'What is ljekarna?',
    opts: ['pharmacy', 'library', 'hospital', 'doctor'],
    answer: 'pharmacy',
    tip: 'Ljekarna — from lijek, medicine. Not to be confused with knjižnica.',
  },
  {
    mode: 'pitanje',
    q: 'Je li ____? (far)',
    en: 'Is it far?',
    opts: ['daleko', 'dugo', 'veliko', 'blizu'],
    answer: 'daleko',
    tip: 'Je li daleko? — the follow-up question that saves you a walk.',
  },
  {
    mode: 'pitanje',
    q: 'Što je "bolnica"?',
    en: 'What is bolnica?',
    opts: ['hospital', 'pharmacy', 'clinic', 'hotel'],
    answer: 'hospital',
    tip: 'Bolnica — from bol, pain.',
  },
  {
    mode: 'pitanje',
    q: 'Što je "pošta"?',
    en: 'What is pošta?',
    opts: ['post office', 'police', 'port', 'park'],
    answer: 'post office',
    tip: 'Pošta — the post office, and also the post itself.',
  },

  // ── upute ─────────────────────────────────────────────────────────────────
  {
    mode: 'upute',
    q: '____ ravno. (ići, uljudno)',
    en: 'Go straight ahead.',
    opts: ['Idite', 'Idi', 'Ići', 'Idemo'],
    answer: 'Idite',
    tip: 'Directions come back in the POLITE imperative: idite, not idi.',
  },
  {
    mode: 'upute',
    q: '____ lijevo. (skrenuti, uljudno)',
    en: 'Turn left.',
    opts: ['Skrenite', 'Skreni', 'Skrenuti', 'Skrećemo'],
    answer: 'Skrenite',
    tip: 'Skrenite lijevo / desno.',
  },
  {
    mode: 'upute',
    q: 'Koje tri riječi otključavaju većinu odgovora?',
    en: 'Which three words decode most answers?',
    opts: ['ravno, lijevo, desno', 'gdje, kada, kako', 'blizu, daleko, tamo', 'da, ne, možda'],
    answer: 'ravno, lijevo, desno',
    tip: 'Straight, left, right. Catch those three and you can follow almost anything.',
  },
  {
    mode: 'upute',
    q: 'Zašto "idite", a ne "idi"?',
    en: 'Why the -ite form?',
    opts: ['stranac se oslovljava s Vi', 'zvuči brže', 'množina je', 'nema razloga'],
    answer: 'stranac se oslovljava s Vi',
    tip: 'A stranger gets Vi, so every instruction arrives in the -ite form.',
  },
  {
    mode: 'upute',
    q: '____ ulicu. (prijeći, uljudno)',
    en: 'Cross the street.',
    opts: ['Prijeđite', 'Prijeđi', 'Prijeći', 'Prelazimo'],
    answer: 'Prijeđite',
    tip: 'Prijeđite ulicu.',
  },
  {
    mode: 'upute',
    q: 'Što znači "preko puta"?',
    en: 'What does preko puta mean?',
    opts: ['opposite', 'next to', 'behind', 'inside'],
    answer: 'opposite',
    tip: 'Preko puta banke — across the road from the bank.',
  },
  {
    mode: 'upute',
    q: '____ na prvom uglu. (skrenuti)',
    en: 'Turn at the first corner.',
    opts: ['Skrenite', 'Skreni', 'Skrenuo', 'Skretati'],
    answer: 'Skrenite',
    tip: 'Same polite imperative throughout the answer.',
  },
  {
    mode: 'upute',
    q: 'Što znači "nastavite ravno"?',
    en: 'What does it mean?',
    opts: ['carry straight on', 'turn around', 'stop here', 'go back'],
    answer: 'carry straight on',
    tip: 'Nastavite ravno — keep going.',
  },

  // ── padezi ────────────────────────────────────────────────────────────────
  {
    mode: 'padezi',
    q: 'Pored ____. (banka)',
    en: 'next to the bank',
    opts: ['banke', 'banku', 'banka', 'bankom'],
    answer: 'banke',
    tip: 'Position words take the GENITIVE: pored banke.',
  },
  {
    mode: 'padezi',
    q: 'Ispred ____. (crkva)',
    en: 'in front of the church',
    opts: ['crkve', 'crkvu', 'crkva', 'crkvom'],
    answer: 'crkve',
    tip: 'ispred crkve.',
  },
  {
    mode: 'padezi',
    q: 'Blizu ____. (kolodvor)',
    en: 'near the station',
    opts: ['kolodvora', 'kolodvor', 'kolodvoru', 'kolodvorom'],
    answer: 'kolodvora',
    tip: 'blizu kolodvora.',
  },
  {
    mode: 'padezi',
    q: 'Idem ____. (tramvaj)',
    en: 'I am going by tram.',
    opts: ['tramvajem', 'tramvaj', 'tramvaja', 'tramvaju'],
    answer: 'tramvajem',
    tip: 'Means of travel takes the INSTRUMENTAL: tramvajem, autobusom, vlakom.',
  },
  {
    mode: 'padezi',
    q: 'Idem ____. (autobus)',
    en: 'I am going by bus.',
    opts: ['autobusom', 'autobus', 'autobusa', 'autobusu'],
    answer: 'autobusom',
    tip: 'autobusom.',
  },
  {
    mode: 'padezi',
    q: 'Kako se kaže "on foot"?',
    en: 'How do you say on foot?',
    opts: ['pješice', 'nogom', 'nogama', 'pješak'],
    answer: 'pješice',
    tip: 'Pješice is an adverb — the one means of travel that is NOT instrumental.',
  },
  {
    mode: 'padezi',
    q: 'Koji padež traže pored, blizu i ispred?',
    en: 'Which case do those take?',
    opts: ['genitiv', 'lokativ', 'akuzativ', 'instrumental'],
    answer: 'genitiv',
    tip: 'All of them, genitive. One rule covers the whole group.',
  },
  {
    mode: 'padezi',
    q: 'Iza ____. (bolnica)',
    en: 'behind the hospital',
    opts: ['bolnice', 'bolnicu', 'bolnica', 'bolnicom'],
    answer: 'bolnice',
    tip: 'iza bolnice.',
  },
];
