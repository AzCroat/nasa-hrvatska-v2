// src/data/drills/modalNuanceDrill.ts
//
// B2 SHADES OF MODALITY — the drill for the `modal-nuance` lesson.
//
// Worth recording, because it is the same finding a third time and I created
// the blocker myself: the pool's `naciniobveze` IS a modality drill, authored in
// the C2 block for `glagolski-nacini`. It is C2-gated and carries `modality`,
// which routes to it. A B2 lesson cannot reach it and cannot claim its tag —
// so this is a new bank, exactly as `svojmoj` and `clitic` forced new A2 banks.
// The two are also not the same subject: C2 drills obligation against
// permission against prohibition, this one drills HOW HARD each one lands.
//
// THE CONDITIONAL IS THE VOLUME KNOB, and that is the whole lesson:
//
//   Moraš ići.      you must go            — strongest
//   Trebaš ići.     you need to go         — strong
//   Morao bi ići.   you really ought to go — firm advice
//   Trebao bi ići.  you should go          — ordinary advice
//
// Same verbs, and moving to the conditional lowers the volume without changing
// the meaning. Plain forms state rules and facts; the conditional advises a
// person. A learner who only has the plain forms sounds like a sign.
//
// Two things learners get wrong in ways that matter socially:
//
//   SMJETI IS PERMISSION, NOT ABILITY. *Ne smiješ* forbids; *ne možeš* means
//   unable. Telling somebody *ne možeš* when you mean *ne smiješ* is merely
//   odd; the other way round is an accusation.
//
//   THE SAME VERBS EXPRESS PROBABILITY. *Mora da je kod kuće* is not an
//   obligation at all — it is "he must be home", a deduction. *Moglo bi
//   padati* is "it might rain".
//
// And the impersonal softens furthest of all: *Trebalo bi to riješiti* names
// nobody, which is why it is what people reach for in meetings.
//
// Three modes:
//   glasnoca — the volume scale
//   vjerojatnost — modality as deduction rather than obligation
//   smjeti — permission against ability, and the impersonal

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const MODAL_NUANCE_MODE_LABELS: Record<string, string> = {
  glasnoca: '🔊 Glasnoća',
  vjerojatnost: '🎲 Vjerojatnost',
  smjeti: '🚦 Smjeti i bezlično',
};

export const MODAL_NUANCE_DRILL_DATA: ModeDrillItem[] = [
  // ── glasnoca ──────────────────────────────────────────────────────────────
  {
    mode: 'glasnoca',
    q: 'Koji je oblik najjači?',
    en: 'Which is strongest?',
    opts: ['Moraš ići.', 'Trebaš ići.', 'Morao bi ići.', 'Trebao bi ići.'],
    answer: 'Moraš ići.',
    tip: 'The plain morati is the top of the scale.',
  },
  {
    mode: 'glasnoca',
    q: 'Koji je oblik najblaži?',
    en: 'Which is softest?',
    opts: ['Trebao bi ići.', 'Moraš ići.', 'Trebaš ići.', 'Morao bi ići.'],
    answer: 'Trebao bi ići.',
    tip: 'Ordinary advice — and the one to reach for with a person you respect.',
  },
  {
    mode: 'glasnoca',
    q: 'Što kondicional radi modalnom glagolu?',
    en: 'What does the conditional do?',
    opts: ['stišava ga', 'pojačava ga', 'mijenja značenje', 'ništa'],
    answer: 'stišava ga',
    tip: 'THE CONDITIONAL IS THE VOLUME KNOB. The meaning stays; the force drops.',
  },
  {
    mode: 'glasnoca',
    q: 'Savjetujete prijatelju. Što birate?',
    en: 'Advising a friend:',
    opts: ['Trebao bi se odmoriti.', 'Moraš se odmoriti.', 'Trebaš se odmoriti.', 'Odmori se.'],
    answer: 'Trebao bi se odmoriti.',
    tip: 'Advice takes the conditional. The plain form would be an instruction.',
  },
  {
    mode: 'glasnoca',
    q: 'Pišete pravilo u priručniku. Što birate?',
    en: 'Writing a rule in a manual:',
    opts: [
      'Korisnik mora potvrditi.',
      'Korisnik bi trebao potvrditi.',
      'Korisnik bi morao.',
      'Korisnik treba potvrditi možda.',
    ],
    answer: 'Korisnik mora potvrditi.',
    tip: 'Rules and facts take the plain form. Softening a rule makes it unclear.',
  },
  {
    mode: 'glasnoca',
    q: 'Kako zvuči govornik koji rabi samo obične oblike?',
    en: 'Someone who only uses plain forms sounds:',
    opts: ['kao natpis', 'uljudno', 'nesigurno', 'prirodno'],
    answer: 'kao natpis',
    tip: 'Like a sign. Correct, and consistently more forceful than intended.',
  },
  {
    mode: 'glasnoca',
    q: 'Morao ____ to riješiti danas. (ti, firm advice)',
    en: 'You really ought to sort that out today.',
    opts: ['bi', 'si', 'ćeš', 'je'],
    answer: 'bi',
    tip: 'Firm, but still advice rather than an order.',
  },
  {
    mode: 'glasnoca',
    q: 'Poredajte po jačini: gdje stoji "morao bi"?',
    en: 'Where does morao bi sit?',
    opts: ['ispod "trebaš", iznad "trebao bi"', 'na vrhu', 'na dnu', 'izvan ljestvice'],
    answer: 'ispod "trebaš", iznad "trebao bi"',
    tip: 'moraš > trebaš > morao bi > trebao bi.',
  },

  // ── vjerojatnost ──────────────────────────────────────────────────────────
  {
    mode: 'vjerojatnost',
    q: 'Što znači "Mora da je kod kuće"?',
    en: 'Mora da je kod kuće.',
    opts: ['He must be home.', 'He must go home.', 'He has to be at home.', 'He should go home.'],
    answer: 'He must be home.',
    tip: 'A DEDUCTION, not an obligation. The same verb, a different job.',
  },
  {
    mode: 'vjerojatnost',
    q: 'Kako se prepoznaje to značenje?',
    en: 'How is it marked?',
    opts: ['po "da" iza modala', 'po naglasku', 'po redu riječi', 'nije obilježeno'],
    answer: 'po "da" iza modala',
    tip: 'Mora DA je — obligation would be mora biti or mora ići.',
  },
  {
    mode: 'vjerojatnost',
    q: 'Što znači "Moglo bi padati"?',
    en: 'Moglo bi padati.',
    opts: ['It might rain.', 'It could have rained.', 'It must rain.', 'It is raining.'],
    answer: 'It might rain.',
    tip: 'The conditional of moći for a live possibility.',
  },
  {
    mode: 'vjerojatnost',
    q: '____ da je zaboravio. (he must have)',
    en: 'He must have forgotten.',
    opts: ['Mora', 'Može', 'Smije', 'Treba'],
    answer: 'Mora',
    tip: 'The strongest deduction available.',
  },
  {
    mode: 'vjerojatnost',
    q: 'Koji izraz izriče slabiju pretpostavku?',
    en: 'Which is the weaker guess?',
    opts: ['Moglo bi biti.', 'Mora da je.', 'Sigurno je.', 'Nedvojbeno je.'],
    answer: 'Moglo bi biti.',
    tip: 'It might be — and nothing is being claimed.',
  },
  {
    mode: 'vjerojatnost',
    q: 'Je li "Mora da je gladan" obveza?',
    en: 'Is that an obligation?',
    opts: ['ne, zaključak', 'da', 'zapovijed', 'savjet'],
    answer: 'ne, zaključak',
    tip: 'He must be hungry — you are reading the evidence, not issuing an order.',
  },
  {
    mode: 'vjerojatnost',
    q: 'Kako se kaže "She should be here by now"?',
    en: 'She should be here by now.',
    opts: [
      'Trebala bi već biti ovdje.',
      'Treba biti ovdje.',
      'Mora biti ovdje.',
      'Morala je biti ovdje.',
    ],
    answer: 'Trebala bi već biti ovdje.',
    tip: 'Expectation rather than obligation — and the conditional carries it.',
  },
  {
    mode: 'vjerojatnost',
    q: 'Koliko poslova obavljaju ti modali?',
    en: 'How many jobs do these verbs do?',
    opts: ['dva: obvezu i vjerojatnost', 'jedan', 'tri', 'ovisi o osobi'],
    answer: 'dva: obvezu i vjerojatnost',
    tip: 'Exactly as English "must" does — and for once that helps.',
  },

  // ── smjeti ────────────────────────────────────────────────────────────────
  {
    mode: 'smjeti',
    q: 'Što znači "Ne smiješ"?',
    en: 'Ne smiješ.',
    opts: ['You are not allowed to.', 'You are unable to.', 'You do not have to.', 'You will not.'],
    answer: 'You are not allowed to.',
    tip: 'SMJETI IS PERMISSION. This forbids.',
  },
  {
    mode: 'smjeti',
    q: 'Što znači "Ne možeš"?',
    en: 'Ne možeš.',
    opts: ['You are unable to.', 'You are not allowed to.', 'You need not.', 'You must not.'],
    answer: 'You are unable to.',
    tip: 'Ability, not permission — and swapping them changes what you are saying about someone.',
  },
  {
    mode: 'smjeti',
    q: 'Ovdje se ____ pušiti. (it is forbidden)',
    en: 'Smoking is not allowed here.',
    opts: ['ne smije', 'ne može', 'ne treba', 'ne mora'],
    answer: 'ne smije',
    tip: 'A rule forbids it. Ne može would say the cigarettes refuse to light.',
  },
  {
    mode: 'smjeti',
    q: '____ li ući? (may I)',
    en: 'May I come in?',
    opts: ['Smijem', 'Mogu', 'Moram', 'Trebam'],
    answer: 'Smijem',
    tip: 'Asking permission properly — though mogu li is very common in speech.',
  },
  {
    mode: 'smjeti',
    q: 'Što znači "Ne moraš"?',
    en: 'Ne moraš.',
    opts: ['You do not have to.', 'You must not.', 'You cannot.', 'You are not allowed.'],
    answer: 'You do not have to.',
    tip: 'The negated obligation RELEASES you. Ne smiješ forbids. Do not mix these two.',
  },
  {
    mode: 'smjeti',
    q: 'Trebalo bi to riješiti. Koga se time proziva?',
    en: 'Who does that point at?',
    opts: ['nikoga', 'sugovornika', 'govornika', 'sve prisutne'],
    answer: 'nikoga',
    tip: 'The impersonal names nobody, which is exactly why meetings run on it.',
  },
  {
    mode: 'smjeti',
    q: 'Kada se bira bezlični oblik?',
    en: 'When would you choose the impersonal?',
    opts: ['kad se ne želi nikoga prozvati', 'u pismu', 'kad je rečenica duga', 'nikad'],
    answer: 'kad se ne želi nikoga prozvati',
    tip: 'It is the softest thing on the whole scale.',
  },
  {
    mode: 'smjeti',
    q: 'Koja je rečenica najoštrija?',
    en: 'Which lands hardest?',
    opts: [
      'Moraš to riješiti.',
      'Trebalo bi to riješiti.',
      'Trebao bi to riješiti.',
      'Moglo bi se riješiti.',
    ],
    answer: 'Moraš to riješiti.',
    tip: 'Plain, personal and obligatory — all three at once.',
  },
];
