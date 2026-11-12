// src/components/practice/drills/A1ZaAccusativeDrill.tsx
//
// Engine-backed drill for the A1 lesson `za-accusative` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/zaAccusativeDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ZA_ACCUSATIVE_DRILL_DATA,
  ZA_ACCUSATIVE_MODE_LABELS,
} from '../../../data/drills/a1/zaAccusativeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1ZaAccusativeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1zaaccusative"
      title="Za — For"
      subtitle="Practise what the lesson taught"
      modeLabels={ZA_ACCUSATIVE_MODE_LABELS}
      data={ZA_ACCUSATIVE_DRILL_DATA}
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
