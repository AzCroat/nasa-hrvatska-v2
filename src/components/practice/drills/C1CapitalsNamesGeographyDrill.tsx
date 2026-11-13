// src/components/practice/drills/C1CapitalsNamesGeographyDrill.tsx
//
// Engine-backed drill for the C1 lesson `capitals-names-geography` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/capitalsNamesGeographyDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CAPITALS_NAMES_GEOGRAPHY_DRILL_DATA,
  CAPITALS_NAMES_GEOGRAPHY_MODE_LABELS,
} from '../../../data/drills/c1/capitalsNamesGeographyDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1CapitalsNamesGeographyDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1capitalsnamesgeography"
      title="Capital Letters in Names and on the Map"
      subtitle="Practise what the lesson taught"
      modeLabels={CAPITALS_NAMES_GEOGRAPHY_MODE_LABELS}
      data={CAPITALS_NAMES_GEOGRAPHY_DRILL_DATA}
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
