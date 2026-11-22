// src/components/practice/drills/A1ModalsBasicDrill.tsx
//
// Engine-backed drill for the A1 lesson `modals-basic`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/modalsBasicDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  MODALS_BASIC_DRILL_DATA,
  MODALS_BASIC_MODE_LABELS,
} from '../../../data/drills/a1/modalsBasicDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1ModalsBasicDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1modalsbasic"
      title="Can, Must, Want"
      subtitle="Practice what the lesson taught"
      modeLabels={MODALS_BASIC_MODE_LABELS}
      data={MODALS_BASIC_DRILL_DATA}
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
