// src/components/practice/drills/A1InstrumentalPlaceDrill.tsx
//
// Engine-backed drill for the A1 lesson `instrumental-place` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/instrumentalPlaceDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INSTRUMENTAL_PLACE_DRILL_DATA,
  INSTRUMENTAL_PLACE_MODE_LABELS,
} from '../../../data/drills/a1/instrumentalPlaceDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1InstrumentalPlaceDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1instrumentalplace"
      title="Under, Over, In Front, Behind"
      subtitle="Practise what the lesson taught"
      modeLabels={INSTRUMENTAL_PLACE_MODE_LABELS}
      data={INSTRUMENTAL_PLACE_DRILL_DATA}
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
