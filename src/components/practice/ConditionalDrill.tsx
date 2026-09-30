import React from 'react';
import ModeDrill from './ModeDrill';

// B2 — conditional mood: kondicional I (bih/bi/bismo/biste + radni pridjev),
// kondicional II (bio bih + radni pridjev = would have), and irrealis 'da'/'kad'
// conditional sentences. Aux clitics: 1sg bih, 2sg bi, 3sg bi, 1pl bismo,
// 2pl biste, 3pl bi.
const DATA = [
  {
    q: 'Da imam vremena, pomogao ___ ti. (I would help)',
    opts: ['bih', 'bi', 'bismo', 'biste'],
    answer: 'bih',
    en: 'If I had time, I would help you.',
    tip: 'Kondicional I, 1sg aux: bih + radni pridjev. The clitic cannot open the main clause after a comma: pomogao bih ti.',
  },
  {
    q: 'Mi ___ došli da nije kiše. (we would come)',
    opts: ['bismo', 'bi', 'bih', 'biste'],
    answer: 'bismo',
    en: "We would come if it weren't raining.",
    tip: '1pl conditional aux = bismo.',
  },
  {
    q: '___ došao da si me pozvao. (I would have come)',
    opts: ['Bio bih', 'Bih bio', 'Budem', 'Bih'],
    answer: 'Bio bih',
    en: 'I would have come if you had invited me.',
    tip: 'Kondicional II (past): bio + bih + radni pridjev → "Bio bih došao".',
  },
  {
    q: 'Kad ___ bogat, putovao bih svijetom. (if I were)',
    opts: ['bih bio', 'bih', 'da sam', 'budem'],
    answer: 'bih bio',
    en: 'If I were rich, I would travel the world.',
    tip: 'Unreal present in a kad-clause: "Kad bih bio bogat" (aux + bio).',
  },
  {
    q: 'Oni ___ kupili kuću da imaju novca. (they would buy)',
    opts: ['bi', 'bih', 'bismo', 'biste'],
    answer: 'bi',
    en: 'They would buy a house if they had money.',
    tip: '3pl conditional aux = bi.',
  },
  {
    q: 'Volio ___ otići u Hrvatsku. (I would like)',
    opts: ['bih', 'bi', 'bismo', 'sam'],
    answer: 'bih',
    en: 'I would like to go to Croatia.',
    tip: '"Volio bih" = I would like (1sg). "sam" is past tense, not conditional.',
  },
  {
    q: 'Što ___ ti učinio na mom mjestu? (would you do)',
    opts: ['bi', 'bih', 'biste', 'bismo'],
    answer: 'bi',
    en: 'What would you do in my place?',
    tip: '2sg conditional aux = bi.',
  },
  {
    q: 'Da ste rezervirali, dobili ___ stol. (you would have gotten)',
    opts: ['biste', 'bi', 'bih', 'bismo'],
    answer: 'biste',
    en: 'If you had booked, you would have gotten a table.',
    tip: '2pl/formal conditional aux = biste.',
  },
  {
    q: 'Pomogao ___ ti, ali nemam vremena. (I would help)',
    opts: ['bih', 'bi', 'sam', 'ću'],
    answer: 'bih',
    en: 'I would help you, but I have no time.',
    tip: 'Clitic "bih" sits in second position: "Pomogao bih ti".',
  },
  {
    q: 'Da je učila, ___ položila ispit. (she would have passed)',
    opts: ['bila bi', 'bi bila', 'bila bih', 'bude'],
    answer: 'bila bi',
    en: 'If she had studied, she would have passed the exam.',
    tip: 'Kondicional II, fem 3sg: bila + bi + radni pridjev → "bila bi položila".',
  },
  {
    q: 'Kupili ___ auto da je jeftiniji. (we would buy)',
    opts: ['bismo', 'bi', 'biste', 'bih'],
    answer: 'bismo',
    en: 'We would buy the car if it were cheaper.',
    tip: '1pl conditional aux = bismo.',
  },
  {
    q: 'Da sam znao, ___ to učinio. (I would not have done)',
    opts: ['ne bih', 'ne bi', 'nisam', 'neću'],
    answer: 'ne bih',
    en: "Had I known, I wouldn't have done that.",
    tip: 'Negated conditional, 1sg: "ne bih" + radni pridjev (učinio).',
  },
];

// One question type, so the engine's run is 12 from the whole bank (DRILL_RUN_LENGTH).
const MODE_LABEL: Record<string, string> = { fill: 'Choose the correct conditional form' };
const BANK = DATA.map((item) => ({ ...item, mode: 'fill' }));

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ConditionalDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="conditionaldrill"
      title={'🤔 Conditional'}
      subtitle={'Kondicional I & II — "would" and "would have"'}
      modeLabels={MODE_LABEL}
      data={BANK}
      praise={{
        perfect: 'Perfect! Conditional mastered! 🏆',
        good: 'Great work! 💪',
        more: 'Keep practising — the conditional takes time!',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
