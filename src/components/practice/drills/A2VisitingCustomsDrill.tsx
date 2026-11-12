// src/components/practice/drills/A2VisitingCustomsDrill.tsx
//
// Engine-backed drill for the A2 lesson `visiting-customs` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/visitingCustomsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VISITING_CUSTOMS_DRILL_DATA,
  VISITING_CUSTOMS_MODE_LABELS,
} from '../../../data/drills/a2/visitingCustomsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2VisitingCustomsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2visitingcustoms"
      title="U gostima"
      subtitle="Practise what the lesson taught"
      modeLabels={VISITING_CUSTOMS_MODE_LABELS}
      data={VISITING_CUSTOMS_DRILL_DATA}
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
