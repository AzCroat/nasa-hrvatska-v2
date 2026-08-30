// src/components/practice/drills/ClothingDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/clothingDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { CLOTHING_DRILL_DATA, CLOTHING_MODE_LABELS } from '../../../data/drills/clothingDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ClothingDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="odjeca"
      title="👗 Odjeća"
      subtitle="nosim crvenu majicu, nove hlače — the verb, the case and the agreement"
      modeLabels={CLOTHING_MODE_LABELS}
      data={CLOTHING_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — odlično odjeveni! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Odjeća traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
