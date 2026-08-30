// src/components/practice/drills/PositionDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/positionDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { POSITION_DRILL_DATA, POSITION_MODE_LABELS } from '../../../data/drills/positionDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PositionDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="polozaj"
      title="🪑 Sjediti i sjesti"
      subtitle="Promjena ili stanje, akuzativ ili lokativ"
      modeLabels={POSITION_MODE_LABELS}
      data={POSITION_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — to je razina B1! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
