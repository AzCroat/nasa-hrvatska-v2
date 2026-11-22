// src/components/practice/drills/A1AccusativeIntroDrill.tsx
//
// Engine-backed drill for the A1 lesson `accusative-intro`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/accusativeIntroDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ACCUSATIVE_INTRO_DRILL_DATA,
  ACCUSATIVE_INTRO_MODE_LABELS,
} from '../../../data/drills/a1/accusativeIntroDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1AccusativeIntroDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1accusativeintro"
      title="The Accusative"
      subtitle="Practice what the lesson taught"
      modeLabels={ACCUSATIVE_INTRO_MODE_LABELS}
      data={ACCUSATIVE_INTRO_DRILL_DATA}
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
