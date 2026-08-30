// src/components/practice/drills/DurationDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/durationDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { DURATION_DRILL_DATA, DURATION_MODE_LABELS } from '../../../data/drills/durationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DurationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="trajanje"
      title="⏳ Vrijeme i trajanje"
      subtitle="Prije, za, koliko dugo — i koje vrijeme"
      modeLabels={DURATION_MODE_LABELS}
      data={DURATION_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — to je razina B1! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
