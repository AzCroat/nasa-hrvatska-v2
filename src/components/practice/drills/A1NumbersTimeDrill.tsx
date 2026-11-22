// src/components/practice/drills/A1NumbersTimeDrill.tsx
//
// Engine-backed drill for the A1 lesson `numbers-time`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/numbersTimeDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  NUMBERS_TIME_DRILL_DATA,
  NUMBERS_TIME_MODE_LABELS,
} from '../../../data/drills/a1/numbersTimeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1NumbersTimeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1numberstime"
      title="Numbers 0–10, Phone Numbers and Addresses"
      subtitle="Practice what the lesson taught"
      modeLabels={NUMBERS_TIME_MODE_LABELS}
      data={NUMBERS_TIME_DRILL_DATA}
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
