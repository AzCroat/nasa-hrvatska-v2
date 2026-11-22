// src/components/practice/drills/A1LocativeIntroDrill.tsx
//
// Engine-backed drill for the A1 lesson `locative-intro`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/locativeIntroDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  LOCATIVE_INTRO_DRILL_DATA,
  LOCATIVE_INTRO_MODE_LABELS,
} from '../../../data/drills/a1/locativeIntroDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1LocativeIntroDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1locativeintro"
      title="The Locative"
      subtitle="Practice what the lesson taught"
      modeLabels={LOCATIVE_INTRO_MODE_LABELS}
      data={LOCATIVE_INTRO_DRILL_DATA}
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
