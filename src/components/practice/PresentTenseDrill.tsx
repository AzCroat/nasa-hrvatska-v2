import React from 'react';
import ModeDrill from './ModeDrill';
import A1ConceptIntro from './A1ConceptIntro';

// src/components/practice/PresentTenseDrill.tsx
//
// A1 present-tense practice — the drill the 2026-08-20 recommender audit found
// missing. A1 TEACHES verbs (`present-tense-verbs` and `pronouns-biti` are both
// A1 lessons) but the lowest verb drill in CEFR_EXERCISE_POOL was A2, and A1 is
// the one level that cannot inherit downward. So the learner met "govorim" in a
// lesson and was never once asked to produce it.
//
// DISTRACTOR DESIGN: every wrong option is another PERSON of the SAME verb
// (govorim / govoriš / govori / govore). That is the mistake learners actually
// make — reaching for the wrong ending, not the wrong verb — so a wrong tap is
// diagnostic. Options are never scrambled across verbs, which would make the
// item answerable by recognising the stem instead of the ending.

export interface VerbItem {
  q: string;
  opts: string[];
  answer: string;
  en: string;
  tip: string;
}

export const DATA: VerbItem[] = [
  {
    q: 'Ja ___ iz Hrvatske.',
    opts: ['sam', 'si', 'je', 'smo'],
    answer: 'sam',
    en: 'I am from Croatia.',
    tip: '"biti" (to be) is irregular — you memorise it: sam, si, je, smo, ste, su. For "I" it is sam.',
  },
  {
    q: 'Ti ___ moj prijatelj.',
    opts: ['sam', 'si', 'je', 'ste'],
    answer: 'si',
    en: 'You are my friend.',
    tip: 'For "you" (one person, informal) the word is si. Use ste for a group or for politeness.',
  },
  {
    q: 'Vi ___ iz Amerike.',
    opts: ['sam', 'si', 'smo', 'ste'],
    answer: 'ste',
    en: 'You are from America.',
    tip: '"Vi" takes ste — both for several people and when being polite to one person.',
  },
  {
    q: 'Ona ___ u Splitu.',
    opts: ['živim', 'živiš', 'živi', 'žive'],
    answer: 'živi',
    en: 'She lives in Split.',
    tip: 'he/she/it takes the bare ending — živi. It is the shortest form of the six.',
  },
  {
    q: 'Mi ___ kavu svako jutro.',
    opts: ['pijem', 'piješ', 'pije', 'pijemo'],
    answer: 'pijemo',
    en: 'We drink coffee every morning.',
    tip: '"We" ends in -mo: pijemo, idemo, jedemo. Hear the -mo and you hear "we".',
  },
  {
    q: 'Vi ___ hrvatski vrlo dobro.',
    opts: ['govorim', 'govoriš', 'govorite', 'govore'],
    answer: 'govorite',
    en: 'You speak Croatian very well.',
    tip: '"Vi" ends in -te: govorite, radite, znate.',
  },
  {
    q: 'Oni ___ u bolnici.',
    opts: ['radim', 'radiš', 'radi', 'rade'],
    answer: 'rade',
    en: 'They work in a hospital.',
    tip: '"They" ends in -e or -ju: rade, govore, but čitaju, imaju. Both mean "they".',
  },
  {
    q: 'Ja ___ knjigu svaku večer.',
    opts: ['čitam', 'čitaš', 'čita', 'čitamo'],
    answer: 'čitam',
    en: 'I read a book every evening.',
    tip: '"I" ends in -m. Almost without exception: čitam, imam, radim, govorim.',
  },
  {
    q: '___ li brata?',
    opts: ['Imam', 'Imaš', 'Ima', 'Imate'],
    answer: 'Imaš',
    en: 'Do you have a brother?',
    tip: 'The question is aimed at "you", so the verb takes the -š ending: imaš.',
  },
  {
    q: 'On ___ u trgovinu.',
    opts: ['idem', 'ideš', 'ide', 'idu'],
    answer: 'ide',
    en: 'He is going to the shop.',
    tip: '"ići" (to go) changes a lot — idem, ideš, ide — but the endings are the normal ones.',
  },
  {
    q: 'Mi ___ film.',
    opts: ['gledam', 'gledaš', 'gleda', 'gledamo'],
    answer: 'gledamo',
    en: 'We are watching a film.',
    tip: 'Croatian has one present tense — gledamo covers both "we watch" and "we are watching".',
  },
  {
    q: 'Ja ___ hrvatski svaki dan.',
    opts: ['učim', 'učiš', 'uči', 'uče'],
    answer: 'učim',
    en: 'I study Croatian every day.',
    tip: 'The -m ending already says "I", so "ja" is optional: Učim hrvatski is a full sentence.',
  },
  {
    q: 'Moja mama ___ ručak.',
    opts: ['kuham', 'kuhaš', 'kuha', 'kuhaju'],
    answer: 'kuha',
    en: 'My mum is cooking lunch.',
    tip: '"Moja mama" is one person — she — so the verb takes the he/she form: kuha.',
  },
  {
    q: 'Ona ___ pismo baki.',
    opts: ['pišem', 'pišeš', 'piše', 'pišu'],
    answer: 'piše',
    en: 'She is writing a letter to grandma.',
    tip: '"pisati" shifts its stem to piš- but the endings do not change: pišem, pišeš, piše.',
  },
  {
    q: 'Djeca ___ glazbu.',
    opts: ['slušam', 'slušaš', 'sluša', 'slušaju'],
    answer: 'slušaju',
    en: 'The children are listening to music.',
    tip: '"Djeca" is more than one, so the verb is the they-form: slušaju.',
  },
  {
    q: 'Mi ___ kruh i sir.',
    opts: ['jedem', 'jedeš', 'jede', 'jedemo'],
    answer: 'jedemo',
    en: 'We are eating bread and cheese.',
    tip: 'Again the -mo that means "we": jedemo.',
  },
  {
    q: 'Ja te ___.',
    opts: ['volim', 'voliš', 'voli', 'vole'],
    answer: 'volim',
    en: 'I love you.',
    tip: 'The most useful -m form there is: volim.',
  },
  {
    q: '___ li gdje je kolodvor?',
    opts: ['Znam', 'Znaš', 'Zna', 'Znaju'],
    answer: 'Znaš',
    en: 'Do you know where the station is?',
    tip: 'Asking one person you know well — the -š form: znaš. To a stranger you would say Znate li...?',
  },
  {
    q: 'Moj brat ___ do deset sati.',
    opts: ['spavam', 'spavaš', 'spava', 'spavaju'],
    answer: 'spava',
    en: 'My brother sleeps until ten.',
    tip: 'One brother — he — so the bare he/she form: spava.',
  },
  {
    q: 'Ja ne ___ dobro.',
    opts: ['razumijem', 'razumiješ', 'razumije', 'razumiju'],
    answer: 'razumijem',
    en: "I don't understand well.",
    tip: 'A phrase worth memorising whole: Ne razumijem. Note "ne" sits right in front of the verb.',
  },
];

// One question type, so the engine's run is 12 from the whole bank (DRILL_RUN_LENGTH).
const MODE_LABEL: Record<string, string> = { fill: 'Choose the right ending' };
const BANK = DATA.map((item) => ({ ...item, mode: 'fill' }));

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PresentTenseDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="present-tense"
      title={'🗣️ Present Tense'}
      subtitle={'Who is doing it — and the ending that says so'}
      modeLabels={MODE_LABEL}
      data={BANK}
      praise={{
        perfect: 'Perfect! You can hear who is doing it. 🏆',
        good: 'Strong work — the endings are becoming automatic.',
        more: 'Keep going — listen for the ending: -m is "I", -š is "you", -mo is "we".',
      }}
      goBack={goBack}
      award={award}
      intro={(start) => <A1ConceptIntro conceptId="present-tense" onStart={start} />}
      explainType="case_drill"
    />
  );
}
