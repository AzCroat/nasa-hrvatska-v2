// src/components/practice/drills/RhythmDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/rhythmDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { RHYTHM_DRILL_DATA, RHYTHM_MODE_LABELS } from '../../../data/drills/rhythmDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function RhythmDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="ritam"
      title="🎵 Ritam rečenice"
      subtitle="Zašto točna rečenica može loše zvučati"
      modeLabels={RHYTHM_MODE_LABELS}
      data={RHYTHM_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — to je razina C2! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
