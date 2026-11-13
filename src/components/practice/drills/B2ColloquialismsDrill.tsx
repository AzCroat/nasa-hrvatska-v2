// src/components/practice/drills/B2ColloquialismsDrill.tsx
//
// Engine-backed drill for the B2 lesson `colloquialisms` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/colloquialismsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  COLLOQUIALISMS_DRILL_DATA,
  COLLOQUIALISMS_MODE_LABELS,
} from '../../../data/drills/b2/colloquialismsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2ColloquialismsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2colloquialisms"
      title="Lova, Faca, Klopa"
      subtitle="Practise what the lesson taught"
      modeLabels={COLLOQUIALISMS_MODE_LABELS}
      data={COLLOQUIALISMS_DRILL_DATA}
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
