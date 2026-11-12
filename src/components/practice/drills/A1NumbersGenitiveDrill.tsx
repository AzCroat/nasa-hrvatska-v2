// src/components/practice/drills/A1NumbersGenitiveDrill.tsx
//
// Engine-backed drill for the A1 lesson `numbers-genitive` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/numbersGenitiveDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  NUMBERS_GENITIVE_DRILL_DATA,
  NUMBERS_GENITIVE_MODE_LABELS,
} from '../../../data/drills/a1/numbersGenitiveDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1NumbersGenitiveDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1numbersgenitive"
      title="Counting Things"
      subtitle="Practise what the lesson taught"
      modeLabels={NUMBERS_GENITIVE_MODE_LABELS}
      data={NUMBERS_GENITIVE_DRILL_DATA}
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
