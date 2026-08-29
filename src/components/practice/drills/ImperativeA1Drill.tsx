// src/components/practice/drills/ImperativeA1Drill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/imperativeDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  IMPERATIVE_DRILL_DATA,
  IMPERATIVE_MODE_LABELS,
} from '../../../data/drills/imperativeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ImperativeA1Drill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="imperativ"
      title="📢 Imperativ"
      subtitle="piši, pišite, nemoj pisati — giving instructions"
      modeLabels={IMPERATIVE_MODE_LABELS}
      data={IMPERATIVE_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — imperativ je vaš! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Imperativ traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
