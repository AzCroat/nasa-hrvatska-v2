// src/components/practice/drills/B2HigherEducationDrill.tsx
//
// Engine-backed drill for the B2 lesson `higher-education` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/higherEducationDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  HIGHER_EDUCATION_DRILL_DATA,
  HIGHER_EDUCATION_MODE_LABELS,
} from '../../../data/drills/b2/higherEducationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2HigherEducationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2highereducation"
      title="Studying in Croatia"
      subtitle="Practise what the lesson taught"
      modeLabels={HIGHER_EDUCATION_MODE_LABELS}
      data={HIGHER_EDUCATION_DRILL_DATA}
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
