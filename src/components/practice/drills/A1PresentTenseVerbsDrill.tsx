// src/components/practice/drills/A1PresentTenseVerbsDrill.tsx
//
// Engine-backed drill for the A1 lesson `present-tense-verbs`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/presentTenseVerbsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PRESENT_TENSE_VERBS_DRILL_DATA,
  PRESENT_TENSE_VERBS_MODE_LABELS,
} from '../../../data/drills/a1/presentTenseVerbsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1PresentTenseVerbsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1presenttenseverbs"
      title="Present Tense Verbs"
      subtitle="Practice what the lesson taught"
      modeLabels={PRESENT_TENSE_VERBS_MODE_LABELS}
      data={PRESENT_TENSE_VERBS_DRILL_DATA}
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
