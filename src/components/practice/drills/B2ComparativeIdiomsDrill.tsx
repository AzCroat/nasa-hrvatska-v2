// src/components/practice/drills/B2ComparativeIdiomsDrill.tsx
//
// Engine-backed drill for the B2 lesson `comparative-idioms` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/comparativeIdiomsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  COMPARATIVE_IDIOMS_DRILL_DATA,
  COMPARATIVE_IDIOMS_MODE_LABELS,
} from '../../../data/drills/b2/comparativeIdiomsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2ComparativeIdiomsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2comparativeidioms"
      title="Zdrav kao dren"
      subtitle="Practise what the lesson taught"
      modeLabels={COMPARATIVE_IDIOMS_MODE_LABELS}
      data={COMPARATIVE_IDIOMS_DRILL_DATA}
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
