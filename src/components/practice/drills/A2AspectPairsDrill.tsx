// src/components/practice/drills/A2AspectPairsDrill.tsx
//
// Engine-backed drill for the A2 lesson `aspect-pairs` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/aspectPairsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ASPECT_PAIRS_DRILL_DATA,
  ASPECT_PAIRS_MODE_LABELS,
} from '../../../data/drills/a2/aspectPairsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2AspectPairsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2aspectpairs"
      title="Aspect Pairs"
      subtitle="Practise what the lesson taught"
      modeLabels={ASPECT_PAIRS_MODE_LABELS}
      data={ASPECT_PAIRS_DRILL_DATA}
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
