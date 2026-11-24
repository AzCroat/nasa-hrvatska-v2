// src/components/practice/drills/A1QuantityDrill.tsx
//
// Engine-backed drill for the A1 lesson `quantity`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/quantityDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { QUANTITY_DRILL_DATA, QUANTITY_MODE_LABELS } from '../../../data/drills/a1/quantityDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1QuantityDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1quantity"
      title={'\u2696\ufe0f Koli\u010dina'}
      subtitle="Practice what the lesson taught"
      modeLabels={QUANTITY_MODE_LABELS}
      data={QUANTITY_DRILL_DATA}
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
