// src/data/drills/imperativeDrill.ts
//
// A1 IMPERATIVE — the drill for the `imperative-basic` lesson.
//
// An A2 `imperative` drill already exists, but it is CEFR-gated above this
// lesson, so an A1 learner finishing `imperative-basic` could never be sent to
// it. This bank drills what the A1 lesson actually teaches: building the form
// off the ONI stem, the -ite polite form, nemoj for the negative, and the words
// that turn an order into a request.
//
// Three modes:
//   tvorba   — building it from the oni-form
//   uljudno  — the -ite form and the softeners (molim, molim vas, hajde)
//   zabrana  — the negative, where the aspect rule inverts

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const IMPERATIVE_MODE_LABELS: Record<string, string> = {
  tvorba: '🔨 Tvorba',
  uljudno: '🙏 Uljudni oblik',
  zabrana: '🚫 Zabrana',
};

export const IMPERATIVE_DRILL_DATA: ModeDrillItem[] = [
  // ── tvorba ────────────────────────────────────────────────────────────────
  {
    mode: 'tvorba',
    q: 'pisati (oni pišu) → ____! (ti)',
    en: 'write!',
    opts: ['piši', 'pišaj', 'piši te', 'pisaj'],
    answer: 'piši',
    tip: 'Take the oni-form pišu, drop -u, add -i: piši.',
  },
  {
    mode: 'tvorba',
    q: 'raditi (oni rade) → ____! (ti)',
    en: 'work!',
    opts: ['radi', 'radij', 'rad', 'radite'],
    answer: 'radi',
    tip: 'rade → drop -e → radi.',
  },
  {
    mode: 'tvorba',
    q: 'čitati (oni čitaju) → ____! (ti)',
    en: 'read!',
    opts: ['čitaj', 'čiti', 'čitai', 'čita'],
    answer: 'čitaj',
    tip: 'Verbs whose oni-form ends in -aju take -j: čitaju → čitaj.',
  },
  {
    mode: 'tvorba',
    q: 'gledati (oni gledaju) → ____! (ti)',
    en: 'look!',
    opts: ['gledaj', 'gledi', 'gled', 'gledajte'],
    answer: 'gledaj',
    tip: 'Same -aju → -aj pattern: gledaj.',
  },
  {
    mode: 'tvorba',
    q: 'doći (oni dođu) → ____! (ti)',
    en: 'come!',
    opts: ['dođi', 'dođaj', 'doći', 'dojdi'],
    answer: 'dođi',
    tip: 'dođu → dođi. The stem change comes with you from the present.',
  },
  {
    mode: 'tvorba',
    q: 'jesti (oni jedu) → ____! (ti)',
    en: 'eat!',
    opts: ['jedi', 'jej', 'jedaj', 'jesti'],
    answer: 'jedi',
    tip: 'jedu → jedi.',
  },
  {
    mode: 'tvorba',
    q: 'biti → ____! (ti)',
    en: 'be!',
    opts: ['budi', 'bij', 'biti', 'bila'],
    answer: 'budi',
    tip: 'Biti is irregular here: budi, budite. Budi dobar!',
  },
  {
    mode: 'tvorba',
    q: 'Koji oblik je polazište za imperativ?',
    en: 'Which form do you build the imperative from?',
    opts: ['oni-oblik prezenta', 'infinitiv', 'ja-oblik', 'particip'],
    answer: 'oni-oblik prezenta',
    tip: 'Always the third person plural of the present. That one rule covers most verbs.',
  },

  // ── uljudno ───────────────────────────────────────────────────────────────
  {
    mode: 'uljudno',
    q: '____, gospodine! (sjesti, uljudno)',
    en: 'Sit down, sir!',
    opts: ['Sjednite', 'Sjedni', 'Sjedati', 'Sjedneš'],
    answer: 'Sjednite',
    tip: 'The -ite form is both the plural and the polite singular.',
  },
  {
    mode: 'uljudno',
    q: '____ mi, molim vas. (pomoći)',
    en: 'Help me, please.',
    opts: ['Pomozite', 'Pomozi', 'Pomoći', 'Pomognite'],
    answer: 'Pomozite',
    tip: 'pomognu → pomozi / pomozite.',
  },
  {
    mode: 'uljudno',
    q: 'Koja je razlika: "dođi" i "dođite"?',
    en: 'What is the difference?',
    opts: ['ti / vi ili uljudno', 'sadašnjost / prošlost', 'muški / ženski rod', 'nema razlike'],
    answer: 'ti / vi ili uljudno',
    tip: 'Dođi to a friend, dođite to a stranger or a group.',
  },
  {
    mode: 'uljudno',
    q: '____ vas, zatvorite prozor.',
    en: 'Please close the window.',
    opts: ['Molim', 'Molite', 'Moli', 'Molimo'],
    answer: 'Molim',
    tip: 'Molim vas is the standard softener before or after an imperative.',
  },
  {
    mode: 'uljudno',
    q: '____, idemo!',
    en: 'Come on, let us go!',
    opts: ['Hajde', 'Hajdete', 'Hajdemo', 'Hajd'],
    answer: 'Hajde',
    tip: 'Hajde is the all-purpose encouragement; hajdemo means let us.',
  },
  {
    mode: 'uljudno',
    q: 'Najuljudniji način da nešto zatražite:',
    en: 'The most polite way to ask:',
    opts: ['Biste li mi pomogli?', 'Pomozi mi!', 'Pomozite mi!', 'Trebam pomoć.'],
    answer: 'Biste li mi pomogli?',
    tip: 'The conditional question is softer than any imperative — the C1 register lesson builds on this.',
  },
  {
    mode: 'uljudno',
    q: '____ pozorni! (biti, vi)',
    en: 'Be careful! (plural)',
    opts: ['Budite', 'Budi', 'Bijte', 'Biste'],
    answer: 'Budite',
    tip: 'budi → budite.',
  },
  {
    mode: 'uljudno',
    q: '____ mi reći gdje je kolodvor?',
    en: 'Could you tell me where the station is?',
    opts: ['Možete li', 'Recite', 'Reci', 'Kažite'],
    answer: 'Možete li',
    tip: 'A question with možete li is gentler than a bare imperative for a stranger.',
  },

  // ── zabrana ───────────────────────────────────────────────────────────────
  {
    mode: 'zabrana',
    q: '____ zatvarati vrata!',
    en: 'Do not close the door!',
    opts: ['Nemoj', 'Ne', 'Nemam', 'Nije'],
    answer: 'Nemoj',
    tip: 'Nemoj + INFINITIVE is the friendliest negative imperative.',
  },
  {
    mode: 'zabrana',
    q: 'Ne ____ prozor! (zatvoriti)',
    en: 'Do not close the window!',
    opts: ['zatvaraj', 'zatvori', 'zatvoriti', 'zatvorite'],
    answer: 'zatvaraj',
    tip: 'A negated imperative takes the IMPERFECTIVE: zatvoriti → zatvaraj.',
  },
  {
    mode: 'zabrana',
    q: '____ zaboraviti ključeve!',
    en: 'Do not forget the keys!',
    opts: ['Nemoj', 'Ne zaboravljaj', 'Ne', 'Nemaš'],
    answer: 'Nemoj',
    tip: 'A one-off risk keeps the perfective under nemoj: nemoj zaboraviti.',
  },
  {
    mode: 'zabrana',
    q: 'Ne ____ mu ništa. (reći)',
    en: 'Do not tell him anything.',
    opts: ['govori', 'reci', 'reći', 'kaži'],
    answer: 'govori',
    tip: 'reći is perfective; its imperfective partner govoriti is what negation takes.',
  },
  {
    mode: 'zabrana',
    q: '____ se! (bojati, ti)',
    en: 'Do not be afraid!',
    opts: ['Ne boj', 'Nemoj', 'Ne bojati', 'Ne bojiš'],
    answer: 'Ne boj',
    tip: 'Ne boj se is the fixed form — one of the phrases you simply learn whole.',
  },
  {
    mode: 'zabrana',
    q: 'Koji je aspekt u "Ne kupuj to!"?',
    en: 'Which aspect is used?',
    opts: ['nesvršeni', 'svršeni', 'oba', 'nijedan'],
    answer: 'nesvršeni',
    tip: 'kupovati (imperfective), because the imperative is negated. Kupiti would be wrong.',
  },
  {
    mode: 'zabrana',
    q: '____ kasniti, molim te.',
    en: 'Do not be late, please.',
    opts: ['Nemoj', 'Ne', 'Nisi', 'Nemaš'],
    answer: 'Nemoj',
    tip: 'Nemoj + infinitive, softened further with molim te.',
  },
  {
    mode: 'zabrana',
    q: 'Za "vi" oblik zabrane koristimo:',
    en: 'For the plural/polite prohibition:',
    opts: ['nemojte', 'nemoj', 'nemamo', 'nemate'],
    answer: 'nemojte',
    tip: 'nemoj → nemojte, matching the -ite polite form.',
  },
];
