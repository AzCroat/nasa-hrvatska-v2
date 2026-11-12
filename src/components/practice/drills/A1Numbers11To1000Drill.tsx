// src/components/practice/drills/A1Numbers11To1000Drill.tsx
//
// Engine-backed drill for the A1 lesson `numbers-11-1000` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/numbers11To1000Drill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  NUMBERS_11_1000_DRILL_DATA,
  NUMBERS_11_1000_MODE_LABELS,
} from '../../../data/drills/a1/numbers11To1000Drill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1Numbers11To1000Drill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1numbers11to1000"
      title="From Eleven to a Thousand"
      subtitle="Practise what the lesson taught"
      modeLabels={NUMBERS_11_1000_MODE_LABELS}
      data={NUMBERS_11_1000_DRILL_DATA}
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
