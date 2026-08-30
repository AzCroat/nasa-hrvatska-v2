// src/components/practice/drills/RegionalDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/regionalDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { REGIONAL_DRILL_DATA, REGIONAL_MODE_LABELS } from '../../../data/drills/regionalDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function RegionalDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="regionalizmi"
      title="🗺️ Regionalni govori"
      subtitle="kaj, ča, di — razumjeti ih, ne izvoditi ih"
      modeLabels={REGIONAL_MODE_LABELS}
      data={REGIONAL_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sve ste prepoznali! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Regionalni govori traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
