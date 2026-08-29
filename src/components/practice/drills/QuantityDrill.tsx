// src/components/practice/drills/QuantityDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/quantityDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { QUANTITY_DRILL_DATA, QUANTITY_MODE_LABELS } from '../../../data/drills/quantityDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function QuantityDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="kolicinaa2"
      title="⚖️ Količina"
      subtitle="puno vremena, mnogo ljudi dolazi — quantity always takes the genitive"
      modeLabels={QUANTITY_MODE_LABELS}
      data={QUANTITY_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — količina je vaša! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Količina traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
