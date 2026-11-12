// src/data/drills/a1/smjetiPermissionDrill.ts
//
// A1 SMJETI — the drill for the `smjeti-permission` lesson.
//
// smijem, smiješ, smije, smijemo, smijete, smiju — ije in every present form, the
// infinitive after it, and the one trap: ne smiješ (must not) against ne moraš (do not
// have to). moći is ability, smjeti is permission.
//
// Three modes:
//   oblici    — the person forms and their spelling
//   pitanje   — asking permission and refusing it
//   zabrana   — a ban against no obligation, ability against permission

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const SMJETI_PERMISSION_MODE_LABELS: Record<string, string> = {
  oblici: '✍️ Oblici',
  pitanje: '🙋 Smijem li?',
  zabrana: '🚫 Zabrana',
};

export const SMJETI_PERMISSION_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ───────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Ja ne ____ kasniti.',
    en: 'I must not be late.',
    opts: ['smjem', 'smijem', 'smiju', 'smije'],
    answer: 'smijem',
    tip: 'ja → smijem, spelled with ije.',
  },
  {
    mode: 'oblici',
    q: 'Ti ne ____ voziti brzo.',
    en: 'You must not drive fast.',
    opts: ['smiješ', 'smijete', 'smiju', 'smijem'],
    answer: 'smiješ',
    tip: 'ti → smiješ.',
  },
  {
    mode: 'oblici',
    q: 'Pas ne ____ ući.',
    en: 'The dog is not allowed in.',
    opts: ['smiju', 'smijem', 'smije', 'smijete'],
    answer: 'smije',
    tip: 'The dog is "it": smije.',
  },
  {
    mode: 'oblici',
    q: '____ li parkirati ovdje? (we)',
    en: 'Are we allowed to park here?',
    opts: ['Smijete', 'Smijemo', 'Smiju', 'Smjemo'],
    answer: 'Smijemo',
    tip: 'mi → smijemo.',
  },
  {
    mode: 'oblici',
    q: 'Ovdje ne ____ pušiti. (polite you)',
    en: 'You are not allowed to smoke here.',
    opts: ['smijemo', 'smije', 'smiju', 'smijete'],
    answer: 'smijete',
    tip: 'Polite vi → smijete.',
  },
  {
    mode: 'oblici',
    q: 'Djeca ne ____ voziti auto.',
    en: 'Children are not allowed to drive a car.',
    opts: ['smiju', 'smije', 'smijemo', 'smiješ'],
    answer: 'smiju',
    tip: 'djeca takes the "they" form: smiju.',
  },
  {
    mode: 'oblici',
    q: 'Which form is spelled correctly?',
    en: 'We are allowed.',
    opts: ['smjemo', 'smijmo', 'smijemo', 'smiemo'],
    answer: 'smijemo',
    tip: 'Every present form has ije.',
  },
  {
    mode: 'oblici',
    q: '____ li gledati film večeras? (you, to a friend)',
    en: 'Are you allowed to watch a film tonight?',
    opts: ['Smijem', 'Smiješ', 'Smije', 'Smiju'],
    answer: 'Smiješ',
    tip: 'ti → smiješ.',
  },

  // ── pitanje ──────────────────────────────────────────────────────────────
  {
    mode: 'pitanje',
    q: 'Smijem li ____?',
    en: 'May I come in?',
    opts: ['uđem', 'ući', 'uđe', 'uđu'],
    answer: 'ući',
    tip: 'After smijem li: the dictionary form.',
  },
  {
    mode: 'pitanje',
    q: 'Smijem li ____ ovdje?',
    en: 'May I sit here?',
    opts: ['sjednem', 'sjedne', 'sjesti', 'sjednu'],
    answer: 'sjesti',
    tip: 'The second verb stays in the dictionary form.',
  },
  {
    mode: 'pitanje',
    q: 'Smijem li ____ prozor?',
    en: 'May I open the window?',
    opts: ['otvorim', 'otvoriti', 'otvori', 'otvore'],
    answer: 'otvoriti',
    tip: 'smijem li + otvoriti; prozor does not change.',
  },
  {
    mode: 'pitanje',
    q: 'Smijem li fotografirati? — Ne, ne ____.',
    en: 'May I take photos? — No, you may not.',
    opts: ['smijem', 'smijete', 'morate', 'smiju'],
    answer: 'smijete',
    tip: 'Answering polite vi: ne smijete.',
  },
  {
    mode: 'pitanje',
    q: 'Smijem li ući? — Naravno, ____.',
    en: 'May I come in? — Of course, please do.',
    opts: ['izvolite', 'hvala', 'oprostite', 'laku noć'],
    answer: 'izvolite',
    tip: 'izvolite — please, go ahead.',
  },
  {
    mode: 'pitanje',
    q: 'Which question asks permission?',
    en: 'May I ask something?',
    opts: [
      'Moram li pitati nešto?',
      'Smijem li pitati nešto?',
      'Znam li pitati nešto?',
      'Smijem li pitam nešto?',
    ],
    answer: 'Smijem li pitati nešto?',
    tip: 'Permission is smjeti, then the dictionary form.',
  },
  {
    mode: 'pitanje',
    q: 'Which verb is about permission?',
    en: 'Allowed, not able.',
    opts: ['moći', 'smjeti', 'morati', 'znati'],
    answer: 'smjeti',
    tip: 'smjeti — to be allowed.',
  },
  {
    mode: 'pitanje',
    q: 'Smijemo li ____ ovdje?',
    en: 'Are we allowed to park here?',
    opts: ['parkiramo', 'parkirati', 'parkira', 'parkiraju'],
    answer: 'parkirati',
    tip: 'The dictionary form after smijemo li.',
  },

  // ── zabrana ──────────────────────────────────────────────────────────────
  {
    mode: 'zabrana',
    q: 'Which sentence is a ban?',
    en: 'You must not smoke.',
    opts: ['Ne moraš pušiti.', 'Ne smiješ pušiti.', 'Ne trebaš pušiti.', 'Ne želiš pušiti.'],
    answer: 'Ne smiješ pušiti.',
    tip: 'A ban is ne smjeti.',
  },
  {
    mode: 'zabrana',
    q: 'Ne ____ doći, ali smiješ.',
    en: 'You do not have to come, but you may.',
    opts: ['smiješ', 'moraš', 'možeš', 'znaš'],
    answer: 'moraš',
    tip: 'No obligation: ne moraš.',
  },
  {
    mode: 'zabrana',
    q: 'What does "Ne moraš doći." mean?',
    en: 'Choose the meaning.',
    opts: [
      'You must not come.',
      'You do not have to come.',
      'You cannot come.',
      'You do not know how to come.',
    ],
    answer: 'You do not have to come.',
    tip: 'ne morati = no obligation.',
  },
  {
    mode: 'zabrana',
    q: 'What does "Ne smiješ doći." mean?',
    en: 'Choose the meaning.',
    opts: ['You do not have to come.', 'You cannot come.', 'You must not come.', 'You may come.'],
    answer: 'You must not come.',
    tip: 'ne smjeti = a ban.',
  },
  {
    mode: 'zabrana',
    q: '____ plivati, ali ovdje ne smijem.',
    en: 'I can swim, but I am not allowed to here.',
    opts: ['Smijem', 'Moram', 'Mogu', 'Trebam'],
    answer: 'Mogu',
    tip: 'Ability is moći.',
  },
  {
    mode: 'zabrana',
    q: 'Mogu plivati, ali ovdje ne ____.',
    en: 'I can swim, but I am not allowed to here.',
    opts: ['mogu', 'moram', 'smijem', 'trebam'],
    answer: 'smijem',
    tip: 'Permission is smjeti.',
  },
  {
    mode: 'zabrana',
    q: 'Ne smiješ ____ brzo.',
    en: 'You must not drive fast.',
    opts: ['voziš', 'voziti', 'vozi', 'vozim'],
    answer: 'voziti',
    tip: 'The second verb stays in the dictionary form.',
  },
  {
    mode: 'zabrana',
    q: 'A sign says you may not park here. Which sentence matches it?',
    en: 'You are not allowed to park here.',
    opts: [
      'Ovdje ne morate parkirati.',
      'Ovdje ne smijete parkirati.',
      'Ovdje ne trebate parkirati.',
      'Ovdje ne smijete parkirate.',
    ],
    answer: 'Ovdje ne smijete parkirati.',
    tip: 'A ban: ne smijete, then the infinitive.',
  },
];
