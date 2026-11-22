// src/components/practice/drills/A1ImperativeBasicDrill.tsx
//
// Engine-backed drill for the A1 lesson `imperative-basic`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/imperativeBasicDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  IMPERATIVE_BASIC_DRILL_DATA,
  IMPERATIVE_BASIC_MODE_LABELS,
} from '../../../data/drills/a1/imperativeBasicDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1ImperativeBasicDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1imperativebasic"
      title={'Giving Instructions'}
      subtitle="Practice what the lesson taught"
      modeLabels={IMPERATIVE_BASIC_MODE_LABELS}
      data={IMPERATIVE_BASIC_DRILL_DATA}
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
