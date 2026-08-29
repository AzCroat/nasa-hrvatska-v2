// src/data/drills/objectPronounsDrill.ts
//
// A2 OBJECT PRONOUNS — the drill for the `object-pronouns` lesson.
//
// CLAUDE.md records this lesson by name as the one worth explaining: clitics DO
// have a drill, but `clitic` is B2, so mapping the A2 lesson to it would queue a
// category an A2 learner cannot open. That was the honest call. This is the
// missing A2 drill, wired as `CATEGORY_EASIER_SCREEN.clitics` — which also
// rescues the clitics category itself for every learner below B2, who until now
// could be measured weak on clitics and served nothing.
//
// Three modes:
//   oblici  — the short forms, accusative and dative
//   mjesto  — second position, and what "second" counts as
//   redanje — dative before accusative, and the ju/je rule

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const OBJECT_PRONOUNS_MODE_LABELS: Record<string, string> = {
  oblici: '🔤 Kratki oblici',
  mjesto: '📍 Drugo mjesto',
  redanje: '🔗 Redoslijed',
};

export const OBJECT_PRONOUNS_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Vidim ____. (njega)',
    en: 'I see him.',
    opts: ['ga', 'mu', 'je', 'ih'],
    answer: 'ga',
    tip: 'Accusative short form for him/it: ga.',
  },
  {
    mode: 'oblici',
    q: 'Vidim ____. (nju)',
    en: 'I see her.',
    opts: ['je', 'joj', 'ga', 'ih'],
    answer: 'je',
    tip: 'Accusative: je (or ju — see the redanje mode).',
  },
  {
    mode: 'oblici',
    q: 'Reci ____. (njemu)',
    en: 'Tell him.',
    opts: ['mu', 'ga', 'joj', 'im'],
    answer: 'mu',
    tip: 'DATIVE short form: mu. Ga is the accusative — a different case, a different job.',
  },
  {
    mode: 'oblici',
    q: 'Piši ____. (njoj)',
    en: 'Write to her.',
    opts: ['joj', 'je', 'mu', 'im'],
    answer: 'joj',
    tip: 'Dative: joj.',
  },
  {
    mode: 'oblici',
    q: 'Vide ____. (nas)',
    en: 'They see us.',
    opts: ['nas', 'nam', 'vas', 'ih'],
    answer: 'nas',
    tip: 'Accusative: nas. Dative would be nam.',
  },
  {
    mode: 'oblici',
    q: 'Hvala ____. (vama)',
    en: 'Thank you.',
    opts: ['vam', 'vas', 'nam', 'im'],
    answer: 'vam',
    tip: 'Hvala takes the dative: hvala vam.',
  },
  {
    mode: 'oblici',
    q: 'Javi ____. (njima)',
    en: 'Let them know.',
    opts: ['im', 'ih', 'mu', 'joj'],
    answer: 'im',
    tip: 'Dative plural: im. Accusative plural is ih.',
  },
  {
    mode: 'oblici',
    q: 'Koja je razlika: "ga" i "mu"?',
    en: 'What is the difference?',
    opts: ['akuzativ / dativ', 'jednina / množina', 'muški / ženski', 'nema razlike'],
    answer: 'akuzativ / dativ',
    tip: 'Vidim ga (I see him) vs Dajem mu (I give to him).',
  },

  // ── mjesto ────────────────────────────────────────────────────────────────
  {
    mode: 'mjesto',
    q: 'Koji je red riječi točan?',
    en: 'Which word order is correct?',
    opts: ['Ja te vidim.', 'Ja vidim te.', 'Te ja vidim.', 'Vidim ja te.'],
    answer: 'Ja te vidim.',
    tip: 'The short form takes SECOND position in the sentence.',
  },
  {
    mode: 'mjesto',
    q: 'Bez subjekta: ____',
    en: 'Without the subject pronoun:',
    opts: ['Vidim te.', 'Te vidim.', 'Vidim ti.', 'Ti vidim.'],
    answer: 'Vidim te.',
    tip: 'Second position, so after the verb when the verb comes first.',
  },
  {
    mode: 'mjesto',
    q: 'Može li kratki oblik biti prva riječ?',
    en: 'Can a short form start a sentence?',
    opts: ['ne, nikada', 'da, uvijek', 'samo u pitanju', 'samo u prošlom vremenu'],
    answer: 'ne, nikada',
    tip: 'Never first and never stressed — that is what makes it a clitic.',
  },
  {
    mode: 'mjesto',
    q: 'Sutra ____ nazvati. (te)',
    en: 'I will call you tomorrow.',
    opts: ['ću te', 'te ću', 'ću ti', 'te ćeš'],
    answer: 'ću te',
    tip: 'The whole clitic cluster sits in second position, in a fixed internal order.',
  },
  {
    mode: 'mjesto',
    q: 'Koji je oblik naglašen?',
    en: 'Which form is the stressed one?',
    opts: ['mene', 'me', 'mi', 'nam'],
    answer: 'mene',
    tip: 'Long forms carry stress: Mene ne pitaj! Short forms never do.',
  },
  {
    mode: 'mjesto',
    q: 'Poslije prijedloga dolazi:',
    en: 'After a preposition you use:',
    opts: ['dugi oblik', 'kratki oblik', 'oba', 'nijedan'],
    answer: 'dugi oblik',
    tip: 'Za mene, s njim, o njoj — never za me.',
  },
  {
    mode: 'mjesto',
    q: 'Koji je red riječi točan?',
    en: 'Which is correct?',
    opts: ['Ne poznajem ga.', 'Ne ga poznajem.', 'Ga ne poznajem.', 'Poznajem ne ga.'],
    answer: 'Ne poznajem ga.',
    tip: 'Ne binds to its verb, so ne poznajem counts as one unit and the clitic follows it.',
  },
  {
    mode: 'mjesto',
    q: 'Zašto se kaže "klitika"?',
    en: 'Why "clitic"?',
    opts: ['naslanja se na prethodnu riječ', 'kratka je', 'nema značenje', 'stoji na kraju'],
    answer: 'naslanja se na prethodnu riječ',
    tip: 'It leans on the word before it — which is why it can never be first.',
  },

  // ── redanje ───────────────────────────────────────────────────────────────
  {
    mode: 'redanje',
    q: 'Dao ____ je knjigu. (meni + nju)',
    en: 'He gave it to me.',
    opts: ['mi ju', 'ju mi', 'mi je', 'je mi'],
    answer: 'mi ju',
    tip: 'Dative before accusative, and ju because je is already in the sentence.',
  },
  {
    mode: 'redanje',
    q: 'Koji dolazi prvi?',
    en: 'Which comes first?',
    opts: ['dativ', 'akuzativ', 'svejedno', 'ovisi o rodu'],
    answer: 'dativ',
    tip: 'Dative before accusative: Dao mi ga je.',
  },
  {
    mode: 'redanje',
    q: 'Vidio ____ je jučer. (nju)',
    en: 'He saw her yesterday.',
    opts: ['ju', 'je', 'joj', 'ih'],
    answer: 'ju',
    tip: 'Je je would be two identical clitics in a row, so the accusative becomes ju.',
  },
  {
    mode: 'redanje',
    q: 'Kada "je" postaje "ju"?',
    en: 'When does je become ju?',
    opts: [
      'kad je pomoćni glagol "je" u rečenici',
      'u množini',
      'u pitanjima',
      'poslije prijedloga',
    ],
    answer: 'kad je pomoćni glagol "je" u rečenici',
    tip: 'Vidio ju je — the language avoids je je.',
  },
  {
    mode: 'redanje',
    q: 'Poslao ____ pismo. (njemu + njega)',
    en: 'He sent it to him.',
    opts: ['mu ga je', 'ga mu je', 'je mu ga', 'mu je ga'],
    answer: 'mu ga je',
    tip: 'Dative, accusative, then the auxiliary je last — the one place je breaks the order.',
  },
  {
    mode: 'redanje',
    q: 'Kupit ____ sutra. (tebi + njega)',
    en: 'I will buy it for you tomorrow.',
    opts: ['ću ti ga', 'ću ga ti', 'ti ću ga', 'ga ću ti'],
    answer: 'ću ti ga',
    tip: 'Auxiliary, dative, accusative — the standard cluster order.',
  },
  {
    mode: 'redanje',
    q: 'Objasnila ____ je sve. (nama)',
    en: 'She explained everything to us.',
    opts: ['nam', 'nas', 'im', 'vam'],
    answer: 'nam',
    tip: 'To us = dative = nam.',
  },
  {
    mode: 'redanje',
    q: 'Gdje stoji pomoćno "je" u nizu klitika?',
    en: 'Where does the auxiliary je sit in the cluster?',
    opts: ['na kraju', 'na početku', 'iza dativa', 'ne dolazi u niz'],
    answer: 'na kraju',
    tip: 'Every other auxiliary comes first; je alone goes last. Dao mi ga je.',
  },
];
