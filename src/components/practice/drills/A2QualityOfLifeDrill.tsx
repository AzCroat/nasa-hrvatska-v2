// src/components/practice/drills/A2QualityOfLifeDrill.tsx
//
// Engine-backed drill for the A2 lesson `quality-of-life` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/qualityOfLifeDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  QUALITY_OF_LIFE_DRILL_DATA,
  QUALITY_OF_LIFE_MODE_LABELS,
} from '../../../data/drills/a2/qualityOfLifeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2QualityOfLifeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2qualityoflife"
      title="Kvaliteta života"
      subtitle="Practise what the lesson taught"
      modeLabels={QUALITY_OF_LIFE_MODE_LABELS}
      data={QUALITY_OF_LIFE_DRILL_DATA}
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
