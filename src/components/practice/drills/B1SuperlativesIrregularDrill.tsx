// src/components/practice/drills/B1SuperlativesIrregularDrill.tsx
//
// Engine-backed drill for the B1 lesson `superlatives-irregular` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/superlativesIrregularDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  SUPERLATIVES_IRREGULAR_DRILL_DATA,
  SUPERLATIVES_IRREGULAR_MODE_LABELS,
} from '../../../data/drills/b1/superlativesIrregularDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1SuperlativesIrregularDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1superlativesirregular"
      title="Better, Worse, the Biggest"
      subtitle="Practise what the lesson taught"
      modeLabels={SUPERLATIVES_IRREGULAR_MODE_LABELS}
      data={SUPERLATIVES_IRREGULAR_DRILL_DATA}
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
