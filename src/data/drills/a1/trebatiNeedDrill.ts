// src/data/drills/a1/trebatiNeedDrill.ts
//
// A1 TREBATI — the drill for the `trebati-need` lesson.
//
// Two patterns and one set phrase. Trebam + a thing in the object form (Trebam kartu,
// Trebamo liječnika); trebam + a verb in its dictionary form (Trebam ići); and Treba
// mi + the thing UNCHANGED (Treba mi kava). Mixing the last two is the error the lesson
// exists to prevent, so the distractors here are mostly the other pattern's form.
//
// Three modes:
//   stvar     — trebam + a thing
//   glagol    — trebam + a verb, and the person forms
//   izraz     — Treba mi …, treba alone, Ne treba, hvala

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const TREBATI_NEED_MODE_LABELS: Record<string, string> = {
  stvar: '🎫 Trebam + stvar',
  glagol: '🏃 Trebam + glagol',
  izraz: '💬 Treba mi',
};

export const TREBATI_NEED_DRILL_DATA: ModeDrillItem[] = [
  // ── stvar ────────────────────────────────────────────────────────────────
  {
    mode: 'stvar',
    q: 'Trebam ____.',
    en: 'I need a ticket.',
    opts: ['karta', 'kartu', 'karte', 'karti'],
    answer: 'kartu',
    tip: 'After trebam the thing is an object: kartu.',
  },
  {
    mode: 'stvar',
    q: 'Trebamo ____, brzo!',
    en: 'We need a doctor, quickly!',
    opts: ['liječnik', 'liječniku', 'liječnika', 'liječnici'],
    answer: 'liječnika',
    tip: 'A doctor is alive: liječnika.',
  },
  {
    mode: 'stvar',
    q: 'Trebaš li ____?',
    en: 'Do you need help?',
    opts: ['pomoći', 'pomoć', 'pomoća', 'pomoću'],
    answer: 'pomoć',
    tip: 'pomoć ends in a consonant and does not change as an object.',
  },
  {
    mode: 'stvar',
    q: 'Sestra treba novi ____.',
    en: 'My sister needs a new phone.',
    opts: ['mobitela', 'mobitelu', 'mobitel', 'mobitelom'],
    answer: 'mobitel',
    tip: 'A phone is a masculine thing: no change.',
  },
  {
    mode: 'stvar',
    q: 'Trebam ____ sobu. (jednokrevetan)',
    en: 'I need a single room.',
    opts: ['jednokrevetnu', 'jednokrevetna', 'jednokrevetne', 'jednokrevetnoj'],
    answer: 'jednokrevetnu',
    tip: 'Feminine object: the adjective takes -u too.',
  },
  {
    mode: 'stvar',
    q: 'Trebamo ____. (konobar)',
    en: 'We need the waiter.',
    opts: ['konobar', 'konobara', 'konobaru', 'konobari'],
    answer: 'konobara',
    tip: 'A waiter is alive: konobara.',
  },
  {
    mode: 'stvar',
    q: 'Trebam ____. (kava — with trebam)',
    en: 'I need a coffee.',
    opts: ['kava', 'kave', 'kavu', 'kavi'],
    answer: 'kavu',
    tip: 'With trebam the coffee is an object: kavu.',
  },
  {
    mode: 'stvar',
    q: 'Što ____? — Trebamo taksi.',
    en: 'What do you need? — We need a taxi.',
    opts: ['trebaš', 'trebate', 'trebaju', 'treba'],
    answer: 'trebate',
    tip: 'The answer is "we", so the question was to vi: trebate.',
  },

  // ── glagol ───────────────────────────────────────────────────────────────
  {
    mode: 'glagol',
    q: 'Trebam ____ u grad.',
    en: 'I need to go into town.',
    opts: ['idem', 'ići', 'ide', 'idu'],
    answer: 'ići',
    tip: 'The second verb stays in its dictionary form.',
  },
  {
    mode: 'glagol',
    q: 'Trebaš ____.',
    en: 'You need to study.',
    opts: ['učiš', 'učim', 'učiti', 'uči'],
    answer: 'učiti',
    tip: 'Only trebati changes for the person.',
  },
  {
    mode: 'glagol',
    q: 'Djeca ____ spavati.',
    en: 'The children need to sleep.',
    opts: ['treba', 'trebaju', 'trebamo', 'trebaš'],
    answer: 'trebaju',
    tip: 'djeca takes the "they" form.',
  },
  {
    mode: 'glagol',
    q: 'Ne ____ čekati.',
    en: 'You do not need to wait.',
    opts: ['trebaš', 'trebam', 'trebaju', 'trebamo'],
    answer: 'trebaš',
    tip: 'ti → trebaš.',
  },
  {
    mode: 'glagol',
    q: 'Trebamo ____ stol.',
    en: 'We need to book a table.',
    opts: ['rezerviramo', 'rezervirati', 'rezervira', 'rezerviraju'],
    answer: 'rezervirati',
    tip: 'trebamo + the dictionary form.',
  },
  {
    mode: 'glagol',
    q: 'Which sentence is correct?',
    en: 'I need to go.',
    opts: ['Trebam idem.', 'Trebam ići.', 'Treba idem.', 'Trebam ide.'],
    answer: 'Trebam ići.',
    tip: 'trebam + ići.',
  },
  {
    mode: 'glagol',
    q: 'Vi ____ pričekati.',
    en: 'You need to wait a moment.',
    opts: ['trebamo', 'trebaju', 'trebate', 'trebaš'],
    answer: 'trebate',
    tip: 'vi → trebate.',
  },
  {
    mode: 'glagol',
    q: 'Ana ____ kupiti kartu.',
    en: 'Ana needs to buy a ticket.',
    opts: ['trebam', 'treba', 'trebaju', 'trebaš'],
    answer: 'treba',
    tip: 'ona → treba.',
  },

  // ── izraz ────────────────────────────────────────────────────────────────
  {
    mode: 'izraz',
    q: 'Treba mi ____.',
    en: 'I need a coffee.',
    opts: ['kavu', 'kave', 'kava', 'kavi'],
    answer: 'kava',
    tip: 'In the set phrase the thing keeps its dictionary form.',
  },
  {
    mode: 'izraz',
    q: 'Treba mi ____.',
    en: 'I need a rest.',
    opts: ['odmora', 'odmor', 'odmoru', 'odmorom'],
    answer: 'odmor',
    tip: 'Treba mi + the thing unchanged.',
  },
  {
    mode: 'izraz',
    q: 'A waiter offers more bread you do not want.',
    en: 'No need, thanks.',
    opts: ['Ne treba, hvala.', 'Trebam, hvala.', 'Treba mi, hvala.', 'Ne trebaju, hvala.'],
    answer: 'Ne treba, hvala.',
    tip: 'The fixed polite refusal: treba with no person.',
  },
  {
    mode: 'izraz',
    q: '____ kupiti kruh i mlijeko.',
    en: 'We need to buy bread and milk.',
    opts: ['Treba', 'Trebam', 'Trebaju', 'Treba mi'],
    answer: 'Treba',
    tip: 'treba alone means "it is necessary".',
  },
  {
    mode: 'izraz',
    q: 'Which sentence is wrong?',
    en: 'One of these mixes the two patterns.',
    opts: ['Trebam kavu.', 'Treba mi kava.', 'Treba mi kavu.', 'Trebam pomoć.'],
    answer: 'Treba mi kavu.',
    tip: 'After Treba mi the thing stays: kava.',
  },
  {
    mode: 'izraz',
    q: 'Treba mi ____.',
    en: 'I need a taxi.',
    opts: ['taksija', 'taksi', 'taksiju', 'taksijem'],
    answer: 'taksi',
    tip: 'The thing is unchanged after Treba mi.',
  },
  {
    mode: 'izraz',
    q: 'Hvala, ne trebam ____.',
    en: 'Thanks, I do not need anything.',
    opts: ['nešto', 'ništa', 'nitko', 'nigdje'],
    answer: 'ništa',
    tip: 'Croatian doubles the no: ne trebam ništa.',
  },
  {
    mode: 'izraz',
    q: 'Treba mi ____. (help)',
    en: 'I need help.',
    opts: ['pomoći', 'pomoć', 'pomoća', 'pomoću'],
    answer: 'pomoć',
    tip: 'Treba mi + the thing in its dictionary form.',
  },
];
