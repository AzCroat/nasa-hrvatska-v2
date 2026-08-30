// src/components/practice/drills/CelebrationsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/celebrationsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CELEBRATIONS_DRILL_DATA,
  CELEBRATIONS_MODE_LABELS,
} from '../../../data/drills/celebrationsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function CelebrationsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="blagdani"
      title="🎄 Blagdani i slavlja"
      subtitle="Sretan Božić, Sretna Nova godina — slaganje s onim što slijedi"
      modeLabels={CELEBRATIONS_MODE_LABELS}
      data={CELEBRATIONS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sve najbolje! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Blagdani traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
