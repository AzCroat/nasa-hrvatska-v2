// src/data/drills/wishesDrill.ts
//
// B2 WISHES AND REGRETS — the drill for the `wishes-regrets` lesson.
//
// Same category collision as its B1 neighbour: every conditional drill in the
// pool — `conditional` (B1), `conditionaldrill` (B2), `pogodbene` (C1),
// `zelje` (C1) — carries `conditional`, which routes to `cloze` and belongs to
// the C2 `kondicional-drugi` lesson. `zelje` is the closest of them by name and
// is still C1-gated and claimed. Its own bank, its own pool-only category.
//
// The distinction the whole lesson turns on is ONE VOWEL:
//
//   *Trebao BIH učiti* — I ought to study. Now, advice, nothing lost yet.
//   *Trebao SAM učiti* — I should have studied. Past, and the chance is gone.
//
// Same participle, same word order, and the auxiliary is the entire difference
// between advice and regret. *Mogao bih* / *mogao sam* behave identically.
// English marks this with a whole extra verb ("have"), so a learner hears no
// warning that the two Croatian sentences are far apart.
//
// The rest is a set of openers worth having by heart:
//
//   *DA BAREM…* is the everyday wish and needs NO main clause — *Da barem imam
//   više vremena!* is a complete utterance. Learners keep trying to finish it.
//
//   *VOLIO BIH DA* takes a CLAUSE when the wish is about someone else
//   (*Volio bih da dođeš*), and a bare infinitive when it is about yourself
//   (*Volio bih doći*).
//
//   *ŠTETA ŠTO* and *ŽAO MI JE ŠTO* take *što*, not *da*, because the thing
//   being regretted actually happened.
//
// Three modes:
//   bihsam  — the one-vowel difference between advice and regret
//   zelje   — da barem, volio bih, kamo sreće
//   zaljenje — šteta, žao, and što against da

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const WISHES_MODE_LABELS: Record<string, string> = {
  bihsam: '⚖️ Bih ili sam',
  zelje: '🌠 Želje',
  zaljenje: '💭 Žaljenje',
};

export const WISHES_DRILL_DATA: ModeDrillItem[] = [
  // ── bihsam ────────────────────────────────────────────────────────────────
  {
    mode: 'bihsam',
    q: 'Trebao ____ učiti. (I ought to — now)',
    en: 'I ought to study.',
    opts: ['bih', 'sam', 'ću', 'bi'],
    answer: 'bih',
    tip: 'The conditional gives advice about now.',
  },
  {
    mode: 'bihsam',
    q: 'Trebao ____ učiti. (I should have — and did not)',
    en: 'I should have studied.',
    opts: ['sam', 'bih', 'ću', 'bi'],
    answer: 'sam',
    tip: 'The perfect turns it into regret. ONE VOWEL, and the chance is gone.',
  },
  {
    mode: 'bihsam',
    q: 'Što razlikuje "trebao bih" od "trebao sam"?',
    en: 'What separates them?',
    opts: ['savjet od žaljenja', 'uljudnost', 'registar', 'ništa'],
    answer: 'savjet od žaljenja',
    tip: 'Advice against regret — and nothing but the auxiliary marks it.',
  },
  {
    mode: 'bihsam',
    q: 'Mogao ____ doći. (I could have — but did not)',
    en: 'I could have come.',
    opts: ['sam', 'bih', 'ću', 'bi'],
    answer: 'sam',
    tip: 'A missed possibility.',
  },
  {
    mode: 'bihsam',
    q: 'Mogao ____ doći. (I could come — it is open)',
    en: 'I could come.',
    opts: ['bih', 'sam', 'ću', 'je'],
    answer: 'bih',
    tip: 'Still possible. Same pair, same rule as trebati.',
  },
  {
    mode: 'bihsam',
    q: 'Zašto engleski ne upozorava na razliku?',
    en: 'Why does English give no warning?',
    opts: [
      'dodaje cijeli glagol "have"',
      'nema kondicional',
      'red riječi je drukčiji',
      'upozorava',
    ],
    answer: 'dodaje cijeli glagol "have"',
    tip: '"should" against "should have" — a whole word apart. Croatian moves one vowel.',
  },
  {
    mode: 'bihsam',
    q: 'Trebala ____ to reći. (she should have)',
    en: 'She should have said that.',
    opts: ['je', 'bi', 'će', 'se'],
    answer: 'je',
    tip: 'Third person perfect — trebala je. Trebala bi would be advice.',
  },
  {
    mode: 'bihsam',
    q: 'Koji oblik izriče propuštenu priliku?',
    en: 'Which expresses a missed chance?',
    opts: ['mogao sam', 'mogao bih', 'mogu', 'moći ću'],
    answer: 'mogao sam',
    tip: 'And it is usually said with a sigh.',
  },

  // ── zelje ─────────────────────────────────────────────────────────────────
  {
    mode: 'zelje',
    q: 'Da barem ____ više vremena!',
    en: 'If only I had more time!',
    opts: ['imam', 'imao bih', 'bih imao', 'budem imao'],
    answer: 'imam',
    tip: 'Da barem takes the present, and the wish is complete as it stands.',
  },
  {
    mode: 'zelje',
    q: 'Treba li "Da barem…" glavnu rečenicu?',
    en: 'Does Da barem need a main clause?',
    opts: ['ne', 'da', 'samo u pismu', 'samo u prošlosti'],
    answer: 'ne',
    tip: 'It is a complete utterance. Learners keep trying to finish it.',
  },
  {
    mode: 'zelje',
    q: 'Što znači "Kamo sreće da…"?',
    en: 'Kamo sreće da…',
    opts: ['If only, would that…', 'Where is the luck', 'What luck!', 'Luckily'],
    answer: 'If only, would that…',
    tip: 'A warmer, slightly more literary Da barem.',
  },
  {
    mode: 'zelje',
    q: 'Volio bih ____ dođeš.',
    en: 'I would like you to come.',
    opts: ['da', 'što', 'ako', 'kad'],
    answer: 'da',
    tip: 'VOLIO BIH DA takes a clause when the wish is about SOMEONE ELSE.',
  },
  {
    mode: 'zelje',
    q: 'Volio bih ____. (to come, myself)',
    en: 'I would like to come.',
    opts: ['doći', 'da dođem', 'došao', 'dolazim'],
    answer: 'doći',
    tip: 'Your own wish takes the bare infinitive — no da needed.',
  },
  {
    mode: 'zelje',
    q: 'Kada "voljeti" traži "da", a kada infinitiv?',
    en: 'When da, when infinitive?',
    opts: ['da za drugoga, infinitiv za sebe', 'da u pismu', 'infinitiv je formalniji', 'svejedno'],
    answer: 'da za drugoga, infinitiv za sebe',
    tip: 'The subject changes, so the clause has to.',
  },
  {
    mode: 'zelje',
    q: 'Da barem ____ kiša! (prestati)',
    en: 'If only the rain would stop!',
    opts: ['prestane', 'prestala bi', 'prestat će', 'prestala'],
    answer: 'prestane',
    tip: 'Present after da barem, perfective for a completed change.',
  },
  {
    mode: 'zelje',
    q: 'Koji je oblik najobičniji u svakodnevnom govoru?',
    en: 'Which is the everyday one?',
    opts: ['Da barem…', 'Kamo sreće da…', 'Volio bih da…', 'Šteta što…'],
    answer: 'Da barem…',
    tip: 'The plainest and by far the commonest.',
  },

  // ── zaljenje ──────────────────────────────────────────────────────────────
  {
    mode: 'zaljenje',
    q: 'Šteta ____ nisi došao.',
    en: 'It is a shame you did not come.',
    opts: ['što', 'da', 'ako', 'kad'],
    answer: 'što',
    tip: 'ŠTO, because it really happened. Da would make it hypothetical.',
  },
  {
    mode: 'zaljenje',
    q: 'Žao mi je ____ to čujem.',
    en: 'I am sorry to hear that.',
    opts: ['što', 'da', 'ako', 'jer'],
    answer: 'što',
    tip: 'The same rule — the thing being regretted is real.',
  },
  {
    mode: 'zaljenje',
    q: 'Zašto "što", a ne "da"?',
    en: 'Why što?',
    opts: ['jer se doista dogodilo', 'jer je kraće', 'jer je formalnije', 'nema razloga'],
    answer: 'jer se doista dogodilo',
    tip: 'što reports a fact; da opens something unreal.',
  },
  {
    mode: 'zaljenje',
    q: 'Kako se kaže "What a shame!"?',
    en: 'What a shame!',
    opts: ['Šteta!', 'Žao!', 'Kamo sreće!', 'Da barem!'],
    answer: 'Šteta!',
    tip: 'One word, and it stands alone perfectly well.',
  },
  {
    mode: 'zaljenje',
    q: 'Koji padež traži "žao mi je"?',
    en: 'Which case does žao take for the person?',
    opts: ['dativ', 'genitiv', 'akuzativ', 'nominativ'],
    answer: 'dativ',
    tip: 'žao MI je, žao MU je — the person affected is in the dative.',
  },
  {
    mode: 'zaljenje',
    q: 'Žao ____ je što nije uspio. (njemu)',
    en: 'He is sorry he did not succeed.',
    opts: ['mu', 'ga', 'njega', 'se'],
    answer: 'mu',
    tip: 'Dative clitic.',
  },
  {
    mode: 'zaljenje',
    q: 'Trebao sam to reći. Što se time izriče?',
    en: 'What does that express?',
    opts: ['žaljenje', 'savjet', 'obvezu', 'namjeru'],
    answer: 'žaljenje',
    tip: 'And the whole sentence turns on sam rather than bih.',
  },
  {
    mode: 'zaljenje',
    q: 'Koja rečenica NE izriče žaljenje?',
    en: 'Which is not a regret?',
    opts: ['Trebao bih učiti.', 'Trebao sam učiti.', 'Šteta što nisam učio.', 'Mogao sam učiti.'],
    answer: 'Trebao bih učiti.',
    tip: 'That one is advice about now — nothing has been lost yet.',
  },
];
