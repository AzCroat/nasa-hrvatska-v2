// src/components/practice/drills/A1PastQuestionsNegationDrill.tsx
//
// Engine-backed drill for the A1 lesson `past-questions-negation`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/pastQuestionsNegationDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PAST_QUESTIONS_NEGATION_DRILL_DATA,
  PAST_QUESTIONS_NEGATION_MODE_LABELS,
} from '../../../data/drills/a1/pastQuestionsNegationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1PastQuestionsNegationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1pastquestionsnegation"
      title="Questions and Negation in the Past"
      subtitle="Practice what the lesson taught"
      modeLabels={PAST_QUESTIONS_NEGATION_MODE_LABELS}
      data={PAST_QUESTIONS_NEGATION_DRILL_DATA}
      praise={{
        perfect: 'Savršeno! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
