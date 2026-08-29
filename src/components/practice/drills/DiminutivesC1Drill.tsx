// src/components/practice/drills/DiminutivesC1Drill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/diminutivesC1Drill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DIMINUTIVES_C1_DRILL_DATA,
  DIMINUTIVES_C1_MODE_LABELS,
} from '../../../data/drills/diminutivesC1Drill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DiminutivesC1Drill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="deminutivi"
      title="🐣 Umanjenice i uvećanice"
      subtitle="kavica is not a small coffee — size, warmth and judgement"
      modeLabels={DIMINUTIVES_C1_MODE_LABELS}
      data={DIMINUTIVES_C1_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — nijanse su vaše! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Umanjenice traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
