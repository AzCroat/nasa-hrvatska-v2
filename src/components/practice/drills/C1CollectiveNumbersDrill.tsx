// src/components/practice/drills/C1CollectiveNumbersDrill.tsx
//
// Engine-backed drill for the C1 lesson `collective-numbers` (book-vs-app fix, 2026-11-13).
// The content is in ../../../data/drills/c1/collectiveNumbersDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  COLLECTIVE_NUMBERS_DRILL_DATA,
  COLLECTIVE_NUMBERS_MODE_LABELS,
} from '../../../data/drills/c1/collectiveNumbersDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1CollectiveNumbersDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1collectivenumbers"
      title="Dvoje, Desetak, Dvoja Vrata"
      subtitle="Practise what the lesson taught"
      modeLabels={COLLECTIVE_NUMBERS_MODE_LABELS}
      data={COLLECTIVE_NUMBERS_DRILL_DATA}
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
