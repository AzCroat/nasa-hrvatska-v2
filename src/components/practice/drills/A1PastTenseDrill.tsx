// src/components/practice/drills/A1PastTenseDrill.tsx
//
// Engine-backed drill for the A1 lesson `past-tense`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/pastTenseDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PAST_TENSE_DRILL_DATA,
  PAST_TENSE_MODE_LABELS,
} from '../../../data/drills/a1/pastTenseDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1PastTenseDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1pasttense"
      title="Croatian Past Tense"
      subtitle="Practice what the lesson taught"
      modeLabels={PAST_TENSE_MODE_LABELS}
      data={PAST_TENSE_DRILL_DATA}
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
