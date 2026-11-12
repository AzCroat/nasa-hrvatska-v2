// src/components/practice/drills/A1DativePrepositionsDrill.tsx
//
// Engine-backed drill for the A1 lesson `dative-prepositions` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/dativePrepositionsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DATIVE_PREPOSITIONS_DRILL_DATA,
  DATIVE_PREPOSITIONS_MODE_LABELS,
} from '../../../data/drills/a1/dativePrepositionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1DativePrepositionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1dativeprepositions"
      title="Dative After Prepositions"
      subtitle="Practise what the lesson taught"
      modeLabels={DATIVE_PREPOSITIONS_MODE_LABELS}
      data={DATIVE_PREPOSITIONS_DRILL_DATA}
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
