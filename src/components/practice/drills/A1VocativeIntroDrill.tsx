// src/components/practice/drills/A1VocativeIntroDrill.tsx
//
// Engine-backed drill for the A1 lesson `vocative-intro`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/vocativeIntroDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VOCATIVE_INTRO_DRILL_DATA,
  VOCATIVE_INTRO_MODE_LABELS,
} from '../../../data/drills/a1/vocativeIntroDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1VocativeIntroDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1vocativeintro"
      title="The Vocative"
      subtitle="Practice what the lesson taught"
      modeLabels={VOCATIVE_INTRO_MODE_LABELS}
      data={VOCATIVE_INTRO_DRILL_DATA}
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
