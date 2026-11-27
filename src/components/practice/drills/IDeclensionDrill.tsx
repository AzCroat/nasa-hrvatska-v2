// src/components/practice/drills/IDeclensionDrill.tsx
//
// Engine-backed drill for the B2 lesson `i-declension`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/iDeclensionDrill. The screen keeps its id.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  I_DECLENSION_B2_DRILL_DATA,
  I_DECLENSION_B2_MODE_LABELS,
} from '../../../data/drills/b2/iDeclensionDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function IDeclensionDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="isklonidbab2"
      title="🚺 I-sklonidba"
      subtitle="stvar, noć, ljubav — feminine nouns that end in a consonant"
      modeLabels={I_DECLENSION_B2_MODE_LABELS}
      data={I_DECLENSION_B2_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — i-sklonidba je vaša! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'I-sklonidba traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
