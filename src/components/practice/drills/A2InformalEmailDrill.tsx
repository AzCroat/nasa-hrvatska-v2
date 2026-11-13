// src/components/practice/drills/A2InformalEmailDrill.tsx
//
// Engine-backed drill for the A2 lesson `informal-email` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/informalEmailDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INFORMAL_EMAIL_DRILL_DATA,
  INFORMAL_EMAIL_MODE_LABELS,
} from '../../../data/drills/a2/informalEmailDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2InformalEmailDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2informalemail"
      title="Writing to a Friend"
      subtitle="Practise what the lesson taught"
      modeLabels={INFORMAL_EMAIL_MODE_LABELS}
      data={INFORMAL_EMAIL_DRILL_DATA}
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
