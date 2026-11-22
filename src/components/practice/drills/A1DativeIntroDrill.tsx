// src/components/practice/drills/A1DativeIntroDrill.tsx
//
// Engine-backed drill for the A1 lesson `dative-intro`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/dativeIntroDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DATIVE_INTRO_DRILL_DATA,
  DATIVE_INTRO_MODE_LABELS,
} from '../../../data/drills/a1/dativeIntroDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1DativeIntroDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1dativeintro"
      title="The Dative"
      subtitle="Practice what the lesson taught"
      modeLabels={DATIVE_INTRO_MODE_LABELS}
      data={DATIVE_INTRO_DRILL_DATA}
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
