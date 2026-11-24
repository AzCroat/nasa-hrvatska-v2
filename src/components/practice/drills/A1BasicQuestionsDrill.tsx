// src/components/practice/drills/A1BasicQuestionsDrill.tsx
//
// Engine-backed drill for the A1 lesson `basic-questions`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/basicQuestionsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  BASIC_QUESTIONS_DRILL_DATA,
  BASIC_QUESTIONS_MODE_LABELS,
} from '../../../data/drills/a1/basicQuestionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1BasicQuestionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1basicquestions"
      title={'\u2753 Pitanja'}
      subtitle="Practice what the lesson taught"
      modeLabels={BASIC_QUESTIONS_MODE_LABELS}
      data={BASIC_QUESTIONS_DRILL_DATA}
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
