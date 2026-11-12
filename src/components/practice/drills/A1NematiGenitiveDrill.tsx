// src/components/practice/drills/A1NematiGenitiveDrill.tsx
//
// Engine-backed drill for the A1 lesson `nemati-genitive` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/nematiGenitiveDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  NEMATI_GENITIVE_DRILL_DATA,
  NEMATI_GENITIVE_MODE_LABELS,
} from '../../../data/drills/a1/nematiGenitiveDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1NematiGenitiveDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1nematigenitive"
      title="There Is No Milk"
      subtitle="Practise what the lesson taught"
      modeLabels={NEMATI_GENITIVE_MODE_LABELS}
      data={NEMATI_GENITIVE_DRILL_DATA}
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
