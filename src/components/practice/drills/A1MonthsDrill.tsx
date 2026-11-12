// src/components/practice/drills/A1MonthsDrill.tsx
//
// Engine-backed drill for the A1 lesson `months` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/monthsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { MONTHS_DRILL_DATA, MONTHS_MODE_LABELS } from '../../../data/drills/a1/monthsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1MonthsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1months"
      title="The Months"
      subtitle="Practise what the lesson taught"
      modeLabels={MONTHS_MODE_LABELS}
      data={MONTHS_DRILL_DATA}
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
