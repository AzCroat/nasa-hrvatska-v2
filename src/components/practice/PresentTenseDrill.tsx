import React from 'react';
import ModeDrill from './ModeDrill';
import A1ConceptIntro from './A1ConceptIntro';
import { PRESENT_DRILL_DATA, PRESENT_MODE_LABELS } from '../../data/drills/a2/presentDrill';

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

// 2026-11-24: the question bank is now the A2 book drill (src/data/drills/a2/presentDrill.ts),
// built from Razgovarajte s nama A2-B1 for the A2 `present` lesson. A learner below A2 is sent to
// the A1 book drill (CATEGORY_EASIER_SCREEN['present-tense']).

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
      modeLabels={PRESENT_MODE_LABELS}
      data={PRESENT_DRILL_DATA}
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
