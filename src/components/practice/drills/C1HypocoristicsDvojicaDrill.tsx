// src/components/practice/drills/C1HypocoristicsDvojicaDrill.tsx
//
// Engine-backed drill for the C1 lesson `hypocoristics-dvojica` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/hypocoristicsDvojicaDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  HYPOCORISTICS_DVOJICA_DRILL_DATA,
  HYPOCORISTICS_DVOJICA_MODE_LABELS,
} from '../../../data/drills/c1/hypocoristicsDvojicaDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1HypocoristicsDvojicaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1hypocoristicsdvojica"
      title="Ivo, Ante, Luka — and Dvojica"
      subtitle="Practise what the lesson taught"
      modeLabels={HYPOCORISTICS_DVOJICA_MODE_LABELS}
      data={HYPOCORISTICS_DVOJICA_DRILL_DATA}
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
