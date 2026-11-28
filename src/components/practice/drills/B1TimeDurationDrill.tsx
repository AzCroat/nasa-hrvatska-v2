// src/components/practice/drills/B1TimeDurationDrill.tsx
//
// Engine-backed drill for the B1 lesson `time-duration`, built from Razgovarajte s nama A2-B1. The content is in
// ../../../data/drills/b1/timeDurationDrill. Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TIME_DURATION_DRILL_DATA,
  TIME_DURATION_MODE_LABELS,
} from '../../../data/drills/b1/timeDurationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1TimeDurationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1timeduration"
      title={'⏳ Trajanje'}
      subtitle="Practice what the lesson taught"
      modeLabels={TIME_DURATION_MODE_LABELS}
      data={TIME_DURATION_DRILL_DATA}
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
