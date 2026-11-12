// src/components/practice/drills/A1UNaMotionDrill.tsx
//
// Engine-backed drill for the A1 lesson `u-na-motion` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/uNaMotionDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  U_NA_MOTION_DRILL_DATA,
  U_NA_MOTION_MODE_LABELS,
} from '../../../data/drills/a1/uNaMotionDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1UNaMotionDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1unamotion"
      title="U or Na? Going Places"
      subtitle="Practise what the lesson taught"
      modeLabels={U_NA_MOTION_MODE_LABELS}
      data={U_NA_MOTION_DRILL_DATA}
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
