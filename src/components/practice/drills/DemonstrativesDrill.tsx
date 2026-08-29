// src/components/practice/drills/DemonstrativesDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/demonstrativesDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DEMONSTRATIVES_DRILL_DATA,
  DEMONSTRATIVES_MODE_LABELS,
} from '../../../data/drills/demonstrativesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DemonstrativesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="pokazne"
      title="📍 Pokazne zamjenice"
      subtitle="ovaj, taj, onaj — the three-way distance system"
      modeLabels={DEMONSTRATIVES_MODE_LABELS}
      data={DEMONSTRATIVES_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — ovaj, taj i onaj su vaši! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Pokazne zamjenice traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
