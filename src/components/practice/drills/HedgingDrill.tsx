// src/components/practice/drills/HedgingDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/hedgingDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { HEDGING_DRILL_DATA, HEDGING_MODE_LABELS } from '../../../data/drills/hedgingDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function HedgingDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="ograde"
      title="🎚️ Ograde i preciznost"
      subtitle="koliko ste sigurni, i koliko zapravo tvrdite"
      modeLabels={HEDGING_MODE_LABELS}
      data={HEDGING_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — precizno! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Ograđivanje traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
