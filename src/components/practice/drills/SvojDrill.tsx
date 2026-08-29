// src/components/practice/drills/SvojDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/svojDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { SVOJ_DRILL_DATA, SVOJ_MODE_LABELS } from '../../../data/drills/svojDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function SvojDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="svojdrill"
      title="🪞 Svoj"
      subtitle="svoj auto or njegov auto — the sentence English cannot say"
      modeLabels={SVOJ_MODE_LABELS}
      data={SVOJ_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — svoj je vaš! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Svoj traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
