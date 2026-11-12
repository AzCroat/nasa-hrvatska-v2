// src/components/practice/drills/A1PastIrregularDrill.tsx
//
// Engine-backed drill for the A1 lesson `past-irregular` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/pastIrregularDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PAST_IRREGULAR_DRILL_DATA,
  PAST_IRREGULAR_MODE_LABELS,
} from '../../../data/drills/a1/pastIrregularDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1PastIrregularDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1pastirregular"
      title="The Irregular Past"
      subtitle="Practise what the lesson taught"
      modeLabels={PAST_IRREGULAR_MODE_LABELS}
      data={PAST_IRREGULAR_DRILL_DATA}
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
