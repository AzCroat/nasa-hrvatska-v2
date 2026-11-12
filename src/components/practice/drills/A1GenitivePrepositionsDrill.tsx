// src/components/practice/drills/A1GenitivePrepositionsDrill.tsx
//
// Engine-backed drill for the A1 lesson `genitive-prepositions` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/genitivePrepositionsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  GENITIVE_PREPOSITIONS_DRILL_DATA,
  GENITIVE_PREPOSITIONS_MODE_LABELS,
} from '../../../data/drills/a1/genitivePrepositionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1GenitivePrepositionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1genitiveprepositions"
      title="From, To, At, Without"
      subtitle="Practise what the lesson taught"
      modeLabels={GENITIVE_PREPOSITIONS_MODE_LABELS}
      data={GENITIVE_PREPOSITIONS_DRILL_DATA}
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
