// src/components/practice/drills/RentingDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/rentingDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { RENTING_DRILL_DATA, RENTING_MODE_LABELS } from '../../../data/drills/rentingDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function RentingDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="najam"
      title="🔑 Najam stana"
      subtitle="dvosoban ≠ dvije spavaće, i jesu li režije uključene"
      modeLabels={RENTING_MODE_LABELS}
      data={RENTING_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — useljivo odmah! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Najam traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
