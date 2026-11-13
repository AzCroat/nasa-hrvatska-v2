// src/data/drills/b2/unrealConditionsDrill.ts
//
// B2 IF THINGS WERE DIFFERENT — the drill for the `unreal-conditions` lesson (B2
// position 47).
//
// The lesson used to be routed to the cloze bank, which has no conditional in it at
// all (B2 book comparison, 2026-11-13). This bank drills what the lesson teaches:
//   ako for a condition that may happen, da for one that is untrue;
//   da + present for now, da + perfect for the past, the conditional in the main clause;
//   kad bih as the same thing as da; da bih means "in order to", not "if";
//   the auxiliary in second position (stigli bismo, never "bismo stigli" after a comma).
//
// Where a bare form could belong to two persons, the subject is written in, so exactly
// one option is right.
//
// Three modes, eight items each:
//   akoda    — ako (may happen) against da (untrue)
//   proslost — da + perfect: the unreal past
//   oblik    — word order, the da bih trap, wishes and the softening conditional

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const UNREAL_CONDITIONS_MODE_LABELS: Record<string, string> = {
  akoda: '⚖️ Ako ili da?',
  proslost: '⏪ Da sam znao…',
  oblik: '🧩 Red riječi',
};

export const UNREAL_CONDITIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── akoda ─────────────────────────────────────────────────────────────────
  {
    mode: 'akoda',
    q: '____ imam vremena, doći ću.',
    en: 'If I have time, I will come (I may have).',
    opts: ['Ako', 'Da', 'Da bih', 'Kad bih'],
    answer: 'Ako',
    tip: 'Something that may happen: ako + present, then the future.',
  },
  {
    mode: 'akoda',
    q: '____ imam vremena, došao bih.',
    en: 'If I had time, I would come (but I do not).',
    opts: ['Da', 'Ako', 'Da bih', 'Čim'],
    answer: 'Da',
    tip: 'Contrary to fact: da + present, then the conditional.',
  },
  {
    mode: 'akoda',
    q: '____ ne pada kiša, izašli bismo.',
    en: 'If it were not raining, we would go out (but it is).',
    opts: ['Da', 'Ako', 'Da bi', 'Čim'],
    answer: 'Da',
    tip: 'It is raining, so the condition is untrue: da.',
  },
  {
    mode: 'akoda',
    q: 'Ako bude kiše, ____.',
    en: 'If it rains, we are staying.',
    opts: ['ostajemo', 'ostali bismo', 'ostajali', 'ostati'],
    answer: 'ostajemo',
    tip: 'A real condition keeps a real tense in the main clause.',
  },
  {
    mode: 'akoda',
    q: 'Da imamo više vremena, ____ bismo.',
    en: 'If we had more time, we would stay.',
    opts: ['ostali', 'ostajemo', 'ostati', 'ostat ćemo'],
    answer: 'ostali',
    tip: 'After da the main clause is conditional: ostali bismo.',
  },
  {
    mode: 'akoda',
    q: 'Što kaže rečenica "Da imam vremena, došao bih"?',
    en: 'What does the sentence tell you?',
    opts: ['Nemam vremena.', 'Možda imam vremena.', 'Imat ću vremena.', 'Imao sam vremena.'],
    answer: 'Nemam vremena.',
    tip: 'da marks the condition as untrue.',
  },
  {
    mode: 'akoda',
    q: 'Koja rečenica kaže da nešto NIJE tako?',
    en: 'Which sentence says something is not the case?',
    opts: [
      'Da sam bogat, kupio bih kuću.',
      'Ako sam bogat, kupit ću kuću.',
      'Kad budem bogat, kupit ću kuću.',
      'Ako budem bogat, kupit ću kuću.',
    ],
    answer: 'Da sam bogat, kupio bih kuću.',
    tip: 'Only da presents the condition as false.',
  },
  {
    mode: 'akoda',
    q: '____ bih imao vremena, došao bih.',
    en: 'If I had time (but I do not), I would come.',
    opts: ['Kad', 'Da', 'Jer', 'Čim'],
    answer: 'Kad',
    tip: 'Kad bih … means the same as da + present. Da bih means "in order to".',
  },

  // ── proslost ──────────────────────────────────────────────────────────────
  {
    mode: 'proslost',
    q: 'Da sam ____, rekao bih ti.',
    en: 'If I had known, I would have told you.',
    opts: ['znao', 'znam', 'znati', 'zna'],
    answer: 'znao',
    tip: 'The unreal past: da + perfect (sam znao).',
  },
  {
    mode: 'proslost',
    q: 'Da si me nazvao, ____ bih ti gdje je ključ.',
    en: 'If you had called me, I (a woman) would have told you where the key is.',
    opts: ['rekla', 'rekao', 'reći', 'rekle'],
    answer: 'rekla',
    tip: 'The main clause is conditional, and the participle agrees with the speaker.',
  },
  {
    mode: 'proslost',
    q: 'Da smo krenuli ranije, ne ____ zapeli u gužvi.',
    en: 'If we had set off earlier, we would not have got stuck in the traffic.',
    opts: ['bismo', 'smo', 'ćemo', 'biste'],
    answer: 'bismo',
    tip: 'mi → bismo. The same conditional covers "would" and "would have".',
  },
  {
    mode: 'proslost',
    q: 'Da nisi zakasnio, ____ na vrijeme.',
    en: 'If you had not been late, we would have arrived on time.',
    opts: ['stigli bismo', 'bismo stigli', 'stigli smo', 'stići ćemo'],
    answer: 'stigli bismo',
    tip: 'The auxiliary is a clitic: it cannot open the main clause after the comma.',
  },
  {
    mode: 'proslost',
    q: 'Da ____ bilo tako hladno, otišli bismo na Sljeme.',
    en: 'If it had not been so cold, we would have gone to Sljeme.',
    opts: ['nije', 'ne bi', 'nisu', 'ne'],
    answer: 'nije',
    tip: 'da + the negated perfect: da nije bilo.',
  },
  {
    mode: 'proslost',
    q: 'Da sam imao vremena, ____.',
    en: 'If I had had time, I would have come.',
    opts: ['došao bih', 'došao sam', 'doći ću', 'dolazim'],
    answer: 'došao bih',
    tip: 'English tense logic gives došao sam; Croatian needs the conditional.',
  },
  {
    mode: 'proslost',
    q: 'Da si učio, ____ ispit.',
    en: 'If you had studied, you would have passed the exam.',
    opts: ['položio bi', 'položio si', 'položit ćeš', 'položiš'],
    answer: 'položio bi',
    tip: 'ti → bi in the main clause.',
  },
  {
    mode: 'proslost',
    q: 'Da je Ana ____ ranije, uhvatila bi vlak.',
    en: 'If Ana had got up earlier, she would have caught the train.',
    opts: ['ustala', 'ustao', 'ustati', 'ustaje'],
    answer: 'ustala',
    tip: 'da + perfect, with the participle agreeing with Ana.',
  },

  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Koja je rečenica ispravna?',
    en: 'If I had time, I would come.',
    opts: [
      'Da imam vremena, došao bih.',
      'Da bih imao vremena, došao bih.',
      'Da imam vremena, bih došao.',
      'Da imam vremena, došao sam.',
    ],
    answer: 'Da imam vremena, došao bih.',
    tip: 'da + present; the auxiliary second in its clause; the main clause conditional.',
  },
  {
    mode: 'oblik',
    q: 'Što znači "da bih"?',
    en: 'What does this conjunction mean?',
    opts: ['in order to', 'if', 'although', 'because'],
    answer: 'in order to',
    tip: 'Da bih imao vremena… is a purpose clause, never an unreal "if".',
  },
  {
    mode: 'oblik',
    q: 'Da ____ imam više vremena!',
    en: 'If only I had more time!',
    opts: ['barem', 'bih', 'bi', 'ako'],
    answer: 'barem',
    tip: 'Da barem … ! is a wish about something that is not so.',
  },
  {
    mode: 'oblik',
    q: 'Na tvom mjestu, ja ____ pričekao.',
    en: 'In your place, I would have waited.',
    opts: ['bih', 'sam', 'bismo', 'ću'],
    answer: 'bih',
    tip: 'Na tvom mjestu is an unreal condition in a phrase: the conditional follows.',
  },
  {
    mode: 'oblik',
    q: 'Kad bih ____ kuhati kao baka, otvorila bih restoran.',
    en: 'If I (a woman) could cook like grandma, I would open a restaurant.',
    opts: ['znala', 'znam', 'znati', 'znao'],
    answer: 'znala',
    tip: 'Both participles agree with the speaker: znala, otvorila.',
  },
  {
    mode: 'oblik',
    q: 'Da nema turista, mnoga ____ mjesta ostala bez posla.',
    en: 'If there were no tourists, many places would be left without work.',
    opts: ['bi', 'bih', 'bismo', 'su'],
    answer: 'bi',
    tip: 'mjesta (they) → bi, sitting second after mnoga.',
  },
  {
    mode: 'oblik',
    q: 'Ja bih to ____ riješio.',
    en: 'I would solve it differently.',
    opts: ['drugačije', 'drugačiji', 'drugačija', 'drugačijeg'],
    answer: 'drugačije',
    tip: 'The adverb, not an adjective: drugačije. The conditional softens the opinion.',
  },
  {
    mode: 'oblik',
    q: 'Da ti ____ zakasnio, stigli bismo.',
    en: 'If you had not been late, we would have made it.',
    opts: ['nisi', 'ne bi', 'ne', 'nisu'],
    answer: 'nisi',
    tip: 'da + the negated perfect: da ti nisi zakasnio.',
  },
];
