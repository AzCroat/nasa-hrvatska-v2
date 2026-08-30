// src/components/practice/drills/ScienceDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/scienceDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { SCIENCE_DRILL_DATA, SCIENCE_MODE_LABELS } from '../../../data/drills/scienceDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ScienceDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="znanost"
      title="🔬 Znanstveni jezik"
      subtitle="toplomjer, zemljopis — rastavi pojam prije rječnika"
      modeLabels={SCIENCE_MODE_LABELS}
      data={SCIENCE_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — utvrđeno! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Znanstveni jezik traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
