// src/data/drills/modalityDrill.ts
//
// C2 GLAGOLSKI NAČINI — the drill for the `glagolski-nacini` lesson.
//
// Obligation comes in two shapes and they say different things about who is
// bound. PERSONAL: *Moraš doći*, *Trebao bi doći*. IMPERSONAL: *Treba to
// riješiti*, *Valja doći na vrijeme*, *Potrebno je priložiti* — a rule with
// nobody in it, which is why every sign and regulation in the country is
// written that way.
//
// THE FUTURE USED AS AN INSTRUCTION IS STRONGER THAN AN IMPERATIVE, not softer.
// *Doći ćeš u devet* does not ask; it reports a settled fact about your
// evening. A learner who hears a polite prediction has misread the room.
//
// And *trebati* is really two verbs: *Trebaju mi papiri* (I need — the thing is
// the subject) against *Trebao bih ići* (I should — I am). Same infinitive,
// different syntax.
//
// Three modes:
//   obveza    — personal against impersonal obligation
//   buducnost — the future as an instruction
//   trebati   — the two verbs, and the certainty particles

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const MODALITY_MODE_LABELS: Record<string, string> = {
  obveza: '📌 Obveza',
  buducnost: '⏭️ Buduće kao nalog',
  trebati: '🔀 Trebati i sigurnost',
};

export const MODALITY_DRILL_DATA: ModeDrillItem[] = [
  // ── obveza ────────────────────────────────────────────────────────────────
  {
    mode: 'obveza',
    q: 'Koji oblik izriče bezličnu obvezu?',
    en: 'Which is impersonal obligation?',
    opts: ['Treba to riješiti.', 'Moraš to riješiti.', 'Riješi to.', 'Trebao bi to riješiti.'],
    answer: 'Treba to riješiti.',
    tip: 'A rule with nobody in it — and every official notice uses it.',
  },
  {
    mode: 'obveza',
    q: 'Što izriče "Valja doći na vrijeme"?',
    en: 'What does valja express?',
    opts: ['bezličnu normu', 'osobnu zapovijed', 'savjet', 'pretpostavku'],
    answer: 'bezličnu normu',
    tip: 'It states how things are done, without addressing anyone.',
  },
  {
    mode: 'obveza',
    q: 'Koji je oblik najizravniji?',
    en: 'Which is most direct?',
    opts: ['Moraš doći.', 'Trebao bi doći.', 'Valja doći.', 'Treba doći.'],
    answer: 'Moraš doći.',
    tip: 'morati names the person and states the obligation flatly.',
  },
  {
    mode: 'obveza',
    q: 'Koji je najmekši?',
    en: 'Which is softest?',
    opts: ['Trebao bi doći.', 'Moraš doći.', 'Dođi.', 'Doći ćeš.'],
    answer: 'Trebao bi doći.',
    tip: 'The conditional turns obligation into advice.',
  },
  {
    mode: 'obveza',
    q: 'Zašto propisi rabe bezlični oblik?',
    en: 'Why do regulations use it?',
    opts: ['pravilo vrijedi za svakoga', 'kraće je', 'uljudnije je', 'iz navike'],
    answer: 'pravilo vrijedi za svakoga',
    tip: 'Naming nobody is how it binds everybody.',
  },
  {
    mode: 'obveza',
    q: 'Potrebno ____ priložiti presliku.',
    en: 'It is necessary to attach a copy.',
    opts: ['je', 'su', 'bi', 'će'],
    answer: 'je',
    tip: 'Neuter singular, because there is no subject for it to agree with.',
  },
  {
    mode: 'obveza',
    q: 'Kako se bezlična obveza raspakira?',
    en: 'Unpacked, Treba to riješiti means:',
    opts: [
      'netko to mora riješiti',
      'ja to moram riješiti',
      'to će se riješiti samo',
      'to je riješeno',
    ],
    answer: 'netko to mora riješiti',
    tip: 'Somebody must — and the sentence declines to say who.',
  },
  {
    mode: 'obveza',
    q: 'Što je jače: "Dođi" ili "Moraš doći"?',
    en: 'Which is stronger?',
    opts: ['Moraš doći', 'Dođi', 'jednako su', 'ovisi o tonu'],
    answer: 'Moraš doći',
    tip: 'An imperative asks; morati states that there is no choice.',
  },

  // ── buducnost ─────────────────────────────────────────────────────────────
  {
    mode: 'buducnost',
    q: '"Doći ćeš u devet." Što je to?',
    en: 'What is that?',
    opts: ['nalog', 'predviđanje', 'molba', 'pitanje'],
    answer: 'nalog',
    tip: 'An instruction. It reports your evening as already settled.',
  },
  {
    mode: 'buducnost',
    q: 'Je li to blaže od imperativa?',
    en: 'Is it softer than an imperative?',
    opts: ['ne, jače je', 'da, blaže je', 'jednako je', 'ovisi o osobi'],
    answer: 'ne, jače je',
    tip: 'An imperative can be refused. A statement of fact leaves less room.',
  },
  {
    mode: 'buducnost',
    q: 'Kako se prepoznaje da je riječ o nalogu?',
    en: 'How do you tell?',
    opts: ['govornik ima ovlast', 'po vremenu', 'po redu riječi', 'po intonaciji jedino'],
    answer: 'govornik ima ovlast',
    tip: 'Position does the work; the grammar is an ordinary future.',
  },
  {
    mode: 'buducnost',
    q: 'Sutra ____ predati izvještaj.',
    en: 'You will submit the report tomorrow.',
    opts: ['ćete', 'biste', 'možete', 'trebate'],
    answer: 'ćete',
    tip: 'And the clitic sits in second position.',
  },
  {
    mode: 'buducnost',
    q: 'Kako se isti sadržaj izriče kao molba?',
    en: 'The same content as a request:',
    opts: ['Možete li doći u devet?', 'Doći ćete u devet.', 'Dođite u devet.', 'Morate u devet.'],
    answer: 'Možete li doći u devet?',
    tip: 'A question gives the other person somewhere to stand.',
  },
  {
    mode: 'buducnost',
    q: 'Što se gubi ako se nalog čuje kao predviđanje?',
    en: 'What is lost if you mishear it?',
    opts: ['ne prepoznaje se obveza', 'ništa', 'vrijeme radnje', 'registar'],
    answer: 'ne prepoznaje se obveza',
    tip: 'You have been told, and you think you have been informed.',
  },
  {
    mode: 'buducnost',
    q: 'Koji oblik izriče čistu prognozu?',
    en: 'Which is a genuine prediction?',
    opts: [
      'Sutra će padati kiša.',
      'Doći ćeš u devet.',
      'Predat ćete izvještaj.',
      'Bit ćeš ondje.',
    ],
    answer: 'Sutra će padati kiša.',
    tip: 'Nobody is being instructed; the weather is not taking orders.',
  },
  {
    mode: 'buducnost',
    q: 'Što razlikuje prognozu od naloga?',
    en: 'What separates them?',
    opts: ['ima li govornik ovlast nad subjektom', 'vrijeme', 'vid', 'red riječi'],
    answer: 'ima li govornik ovlast nad subjektom',
    tip: 'The grammar is identical; the relationship is not.',
  },

  // ── trebati ───────────────────────────────────────────────────────────────
  {
    mode: 'trebati',
    q: '____ mi papiri.',
    en: 'I need the papers.',
    opts: ['Trebaju', 'Trebam', 'Treba', 'Trebali'],
    answer: 'Trebaju',
    tip: 'Here the THING is the subject: papiri trebaju meni.',
  },
  {
    mode: 'trebati',
    q: '____ bih ići.',
    en: 'I should go.',
    opts: ['Trebao', 'Trebali', 'Trebam', 'Treba'],
    answer: 'Trebao',
    tip: 'Here I am the subject. Same verb, different syntax entirely.',
  },
  {
    mode: 'trebati',
    q: 'Koliko je "trebati" glagola?',
    en: 'How many verbs is trebati?',
    opts: ['dva', 'jedan', 'tri', 'ovisi o vremenu'],
    answer: 'dva',
    tip: 'To need, with the thing as subject; and should, with the person as subject.',
  },
  {
    mode: 'trebati',
    q: '____ mi tvoja pomoć.',
    en: 'I need your help.',
    opts: ['Treba', 'Trebam', 'Trebaju', 'Trebala'],
    answer: 'Treba',
    tip: 'Pomoć is singular, so treba.',
  },
  {
    mode: 'trebati',
    q: 'Što izriče "navodno"?',
    en: 'What does navodno express?',
    opts: ['prenosi tvrdnju bez jamstva', 'sigurnost', 'sumnju govornika', 'zapovijed'],
    answer: 'prenosi tvrdnju bez jamstva',
    tip: 'Reported and not endorsed — it distances the speaker entirely.',
  },
  {
    mode: 'trebati',
    q: 'Poredaj po sigurnosti: koji je najjači?',
    en: 'Which is strongest?',
    opts: ['sigurno', 'vjerojatno', 'valjda', 'možda'],
    answer: 'sigurno',
    tip: 'sigurno > vjerojatno > valjda ≈ možda > navodno, which claims nothing.',
  },
  {
    mode: 'trebati',
    q: 'Koja čestica ne izriče vjerojatnost nego izvor?',
    en: 'Which marks a source rather than a probability?',
    opts: ['navodno', 'valjda', 'vjerojatno', 'možda'],
    answer: 'navodno',
    tip: 'It says where the claim came from, not how likely it is.',
  },
  {
    mode: 'trebati',
    q: 'Trebalo ____ to učiniti ranije.',
    en: 'That should have been done earlier.',
    opts: ['je', 'su', 'bi', 'će'],
    answer: 'je',
    tip: 'The impersonal past: trebalo je — and it names nobody who failed to.',
  },
];
