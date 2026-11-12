// src/components/practice/drills/A1ImperativeNegativeDrill.tsx
//
// Engine-backed drill for the A1 lesson `imperative-negative` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/imperativeNegativeDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  IMPERATIVE_NEGATIVE_DRILL_DATA,
  IMPERATIVE_NEGATIVE_MODE_LABELS,
} from '../../../data/drills/a1/imperativeNegativeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1ImperativeNegativeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1imperativenegative"
      title="Don't! Negative Commands"
      subtitle="Practise what the lesson taught"
      modeLabels={IMPERATIVE_NEGATIVE_MODE_LABELS}
      data={IMPERATIVE_NEGATIVE_DRILL_DATA}
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
