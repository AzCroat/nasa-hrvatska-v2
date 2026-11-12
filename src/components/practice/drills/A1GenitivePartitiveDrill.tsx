// src/components/practice/drills/A1GenitivePartitiveDrill.tsx
//
// Engine-backed drill for the A1 lesson `genitive-partitive` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/genitivePartitiveDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  GENITIVE_PARTITIVE_DRILL_DATA,
  GENITIVE_PARTITIVE_MODE_LABELS,
} from '../../../data/drills/a1/genitivePartitiveDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1GenitivePartitiveDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1genitivepartitive"
      title="Some Water, a Little Bread"
      subtitle="Practise what the lesson taught"
      modeLabels={GENITIVE_PARTITIVE_MODE_LABELS}
      data={GENITIVE_PARTITIVE_DRILL_DATA}
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
