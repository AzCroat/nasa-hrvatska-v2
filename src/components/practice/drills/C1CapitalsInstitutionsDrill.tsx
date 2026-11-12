// src/components/practice/drills/C1CapitalsInstitutionsDrill.tsx
//
// Engine-backed drill for the C1 lesson `capitals-institutions` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/capitalsInstitutionsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CAPITALS_INSTITUTIONS_DRILL_DATA,
  CAPITALS_INSTITUTIONS_MODE_LABELS,
} from '../../../data/drills/c1/capitalsInstitutionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1CapitalsInstitutionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1capitalsinstitutions"
      title="Capitals in Names of Places and Institutions"
      subtitle="Practise what the lesson taught"
      modeLabels={CAPITALS_INSTITUTIONS_MODE_LABELS}
      data={CAPITALS_INSTITUTIONS_DRILL_DATA}
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
