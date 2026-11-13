// src/components/practice/drills/C1TemporalAccusativeDrill.tsx
//
// Engine-backed drill for the C1 lesson `temporal-accusative` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/temporalAccusativeDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TEMPORAL_ACCUSATIVE_DRILL_DATA,
  TEMPORAL_ACCUSATIVE_MODE_LABELS,
} from '../../../data/drills/c1/temporalAccusativeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1TemporalAccusativeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1temporalaccusative"
      title="Time in the Accusative"
      subtitle="Practise what the lesson taught"
      modeLabels={TEMPORAL_ACCUSATIVE_MODE_LABELS}
      data={TEMPORAL_ACCUSATIVE_DRILL_DATA}
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
