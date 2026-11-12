// src/components/practice/drills/B2GenitiveOfNegationDrill.tsx
//
// Engine-backed drill for the B2 lesson `genitive-of-negation` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/genitiveOfNegationDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  GENITIVE_OF_NEGATION_DRILL_DATA,
  GENITIVE_OF_NEGATION_MODE_LABELS,
} from '../../../data/drills/b2/genitiveOfNegationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2GenitiveOfNegationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2genitiveofnegation"
      title="Nema Vode: The Genitive of Negation"
      subtitle="Practise what the lesson taught"
      modeLabels={GENITIVE_OF_NEGATION_MODE_LABELS}
      data={GENITIVE_OF_NEGATION_DRILL_DATA}
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
