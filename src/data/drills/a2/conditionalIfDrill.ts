// src/data/drills/a2/conditionalIfDrill.ts
//
// A2 CONDITIONS — the drill for the `conditional-if` lesson.
//
// Three modes:
//   pomocni  — the auxiliary in the kad half and the result half: bih, bi, bismo, biste
//   particip — the participle after the auxiliary, agreeing with the person
//   da       — da + the present for a condition that is not true now
//
// Every item names its subject (ja, Ana, mi, vi…) so a different person of the auxiliary is
// genuinely wrong, never a correct sentence about someone else. Distractors are a wrong
// person, a present or an infinitive after bih, or a conditional after da.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CONDITIONAL_IF_MODE_LABELS: Record<string, string> = {
  pomocni: '🔧 bih · bi · bismo · biste',
  particip: '✍️ Particip',
  da: '💭 Da + prezent',
};

export const CONDITIONAL_IF_DRILL_DATA: ModeDrillItem[] = [
  // ── pomocni ────────────────────────────────────────────────────────────
  {
    mode: 'pomocni',
    q: 'Kad ____ ja imao vremena, putovao bih.',
    en: 'If I had time, I would travel.',
    opts: ['bih', 'bi', 'bismo', 'biste'],
    answer: 'bih',
    tip: 'For ja the auxiliary is bih, in both halves.',
  },
  {
    mode: 'pomocni',
    q: 'Kad ____ Ana i ja imali auto, išli bismo na more.',
    en: 'If Ana and I had a car, we would go to the seaside.',
    opts: ['bismo', 'biste', 'bih', 'bi'],
    answer: 'bismo',
    tip: 'Ana and I make mi, so the auxiliary is bismo.',
  },
  {
    mode: 'pomocni',
    q: 'Kad ____ vi imali vremena, biste li došli?',
    en: 'If you had time, would you come?',
    opts: ['biste', 'bismo', 'bih', 'bi'],
    answer: 'biste',
    tip: 'For vi (and polite Vi) the auxiliary is biste.',
  },
  {
    mode: 'pomocni',
    q: 'Kad ____ Marko znao odgovor, rekao bi nam.',
    en: 'If Marko knew the answer, he would tell us.',
    opts: ['bi', 'bih', 'bismo', 'biste'],
    answer: 'bi',
    tip: 'For on (Marko) the auxiliary is bi.',
  },
  {
    mode: 'pomocni',
    q: 'Kad ____ oni živjeli na moru, plivali bi svaki dan.',
    en: 'If they lived by the sea, they would swim every day.',
    opts: ['bi', 'bismo', 'biste', 'bih'],
    answer: 'bi',
    tip: 'For oni the auxiliary is bi, the same form as for on and ona.',
  },
  {
    mode: 'pomocni',
    q: 'Kad ____ ja imala novca, kupila bih stan.',
    en: 'If I had money, I would buy a flat.',
    opts: ['bih', 'bi', 'bila', 'bismo'],
    answer: 'bih',
    tip: 'A woman speaking still uses bih; only the participle changes: imala.',
  },
  {
    mode: 'pomocni',
    q: 'Kad bih ja imao vremena, ja ____ putovao.',
    en: 'If I had time, I would travel.',
    opts: ['bih', 'bi', 'bismo', 'biste'],
    answer: 'bih',
    tip: 'The result has the same person as the condition: ja bih putovao.',
  },
  {
    mode: 'pomocni',
    q: 'Kad bismo imali novca, mi ____ kupili kuću.',
    en: 'If we had money, we would buy a house.',
    opts: ['bismo', 'biste', 'bih', 'bi'],
    answer: 'bismo',
    tip: 'mi takes bismo in both halves.',
  },

  // ── particip ───────────────────────────────────────────────────────────
  {
    mode: 'particip',
    q: 'Kad bih ____ vremena, učio bih talijanski.',
    en: 'If I had time, I would learn Italian. (a man speaking)',
    opts: ['imao', 'imala', 'imam', 'imati'],
    answer: 'imao',
    tip: 'After bih comes the participle; a man says imao, to match učio.',
  },
  {
    mode: 'particip',
    q: 'Kad bih imala vremena, ____ bih više.',
    en: 'If I had time, I would read more. (a woman speaking)',
    opts: ['čitala', 'čitao', 'čitam', 'čitati'],
    answer: 'čitala',
    tip: 'A woman speaking: both participles end in -la.',
  },
  {
    mode: 'particip',
    q: 'Kad bi Ivan imao auto, ____ bi nas na more.',
    en: 'If Ivan had a car, he would drive us to the seaside.',
    opts: ['vozio', 'vozi', 'voziti', 'vozila'],
    answer: 'vozio',
    tip: 'Ivan is a man: the participle of voziti is vozio.',
  },
  {
    mode: 'particip',
    q: 'Kad bismo imali vremena, ____ bismo u kino.',
    en: 'If we had time, we would go to the cinema.',
    opts: ['išli', 'idemo', 'ići', 'išao'],
    answer: 'išli',
    tip: 'The plural participle of ići is išli.',
  },
  {
    mode: 'particip',
    q: 'Kad biste mogli birati, gdje biste ____?',
    en: 'If you could choose, where would you live?',
    opts: ['živjeli', 'živite', 'živjeti', 'živio'],
    answer: 'živjeli',
    tip: 'biste takes the plural participle: živjeli.',
  },
  {
    mode: 'particip',
    q: 'Kad bi mi ____, brzo bismo završili.',
    en: 'If you helped me, we would finish quickly. (to a man)',
    opts: ['pomogao', 'pomoći', 'pomogneš', 'pomozi'],
    answer: 'pomogao',
    tip: 'After bi mi comes the participle: pomogao.',
  },
  {
    mode: 'particip',
    q: 'Kad bi Ana ____ više vremena, volontirala bi.',
    en: 'If Ana had more time, she would volunteer.',
    opts: ['imala', 'imao', 'ima', 'imati'],
    answer: 'imala',
    tip: 'Ana is a woman: imala, to match volontirala.',
  },
  {
    mode: 'particip',
    q: 'Kad bi tvoji roditelji to ____, bili bi ponosni.',
    en: 'If your parents knew that, they would be proud.',
    opts: ['znali', 'znale', 'znaju', 'znati'],
    answer: 'znali',
    tip: 'roditelji is masculine plural: znali.',
  },

  // ── da ─────────────────────────────────────────────────────────────────
  {
    mode: 'da',
    q: '____ novca, kupio bih auto.',
    en: 'If I had money (but I do not), I would buy a car.',
    opts: ['Da imam', 'Da imao', 'Da bih imam', 'Da imati'],
    answer: 'Da imam',
    tip: 'For a condition that is not true, da takes the ordinary present.',
  },
  {
    mode: 'da',
    q: 'Da ____ odgovor, rekao bih ti.',
    en: 'If I knew the answer, I would tell you.',
    opts: ['znam', 'znao', 'znati', 'znao bih'],
    answer: 'znam',
    tip: 'After da: the present of znati, ja form.',
  },
  {
    mode: 'da',
    q: 'Da ____ na tvom mjestu, ne bih išao.',
    en: 'If I were you, I would not go.',
    opts: ['sam', 'bih', 'budem', 'bio'],
    answer: 'sam',
    tip: 'Da sam na tvom mjestu is the fixed way to say "if I were you".',
  },
  {
    mode: 'da',
    q: 'Da ne ____ kiša, išli bismo na izlet.',
    en: 'If it were not raining, we would go on a trip.',
    opts: ['pada', 'padala', 'padati', 'pala'],
    answer: 'pada',
    tip: 'After da the present: ne pada.',
  },
  {
    mode: 'da',
    q: 'Da ____ umorna, išla bih s vama.',
    en: 'If I were not tired, I would go with you. (a woman speaking)',
    opts: ['nisam', 'ne bih', 'ne bila', 'ne sam'],
    answer: 'nisam',
    tip: 'The present of biti, negated, ja form. "ne sam" does not exist.',
  },
  {
    mode: 'da',
    q: 'Da ____ njezin broj, nazvao bih je.',
    en: 'If I knew her number, I would call her.',
    opts: ['znam', 'znao', 'znati', 'znao bih'],
    answer: 'znam',
    tip: 'da + the present, then the conditional result.',
  },
  {
    mode: 'da',
    q: 'Da imam vremena, ____ ti.',
    en: 'If I had time, I would help you. (a man speaking)',
    opts: ['pomogao bih', 'pomogao sam', 'pomažem bih', 'pomoći bih'],
    answer: 'pomogao bih',
    tip: 'The result is the conditional: the participle, then bih.',
  },
  {
    mode: 'da',
    q: 'Da živim u Splitu, ____ svaki dan.',
    en: 'If I lived in Split, I would swim every day. (a man speaking)',
    opts: ['plivao bih', 'plivam', 'plivao sam', 'plivati bih'],
    answer: 'plivao bih',
    tip: 'Only the condition is in the present; the result is the conditional.',
  },
];
