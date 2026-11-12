// src/components/practice/drills/B2InternationalismsDrill.tsx
//
// Engine-backed drill for the B2 lesson `internationalisms` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/internationalismsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INTERNATIONALISMS_DRILL_DATA,
  INTERNATIONALISMS_MODE_LABELS,
} from '../../../data/drills/b2/internationalismsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2InternationalismsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2internationalisms"
      title="Organizacija, Turizam, Organizirati"
      subtitle="Practise what the lesson taught"
      modeLabels={INTERNATIONALISMS_MODE_LABELS}
      data={INTERNATIONALISMS_DRILL_DATA}
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
