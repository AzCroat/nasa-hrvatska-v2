// src/components/practice/drills/A1FutureTenseDrill.tsx
//
// Engine-backed drill for the A1 lesson `future-tense`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/futureTenseDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  FUTURE_TENSE_DRILL_DATA,
  FUTURE_TENSE_MODE_LABELS,
} from '../../../data/drills/a1/futureTenseDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1FutureTenseDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1futuretense"
      title="Croatian Future Tense"
      subtitle="Practice what the lesson taught"
      modeLabels={FUTURE_TENSE_MODE_LABELS}
      data={FUTURE_TENSE_DRILL_DATA}
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
