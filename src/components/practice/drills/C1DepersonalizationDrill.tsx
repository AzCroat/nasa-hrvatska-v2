// src/components/practice/drills/C1DepersonalizationDrill.tsx
//
// Engine-backed drill for the C1 lesson `depersonalization` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/depersonalizationDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DEPERSONALIZATION_DRILL_DATA,
  DEPERSONALIZATION_MODE_LABELS,
} from '../../../data/drills/c1/depersonalizationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1DepersonalizationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1depersonalization"
      title="Saying It Without a Subject"
      subtitle="Practise what the lesson taught"
      modeLabels={DEPERSONALIZATION_MODE_LABELS}
      data={DEPERSONALIZATION_DRILL_DATA}
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
