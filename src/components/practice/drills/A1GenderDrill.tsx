// src/components/practice/drills/A1GenderDrill.tsx
//
// Engine-backed drill for the A1 lesson `gender`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/genderDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { GENDER_DRILL_DATA, GENDER_MODE_LABELS } from '../../../data/drills/a1/genderDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1GenderDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1gender"
      title="Noun Gender"
      subtitle="Practice what the lesson taught"
      modeLabels={GENDER_MODE_LABELS}
      data={GENDER_DRILL_DATA}
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
