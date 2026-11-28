// src/components/practice/drills/B1TimeClausesDrill.tsx
//
// Engine-backed drill for the B1 lesson `time-clauses`, built from Razgovarajte s nama A2-B1. The content is in
// ../../../data/drills/b1/timeClausesDrill. Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TIME_CLAUSES_DRILL_DATA,
  TIME_CLAUSES_MODE_LABELS,
} from '../../../data/drills/b1/timeClausesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1TimeClausesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1timeclauses"
      title={'⏱️ Vremenske rečenice'}
      subtitle="Practice what the lesson taught"
      modeLabels={TIME_CLAUSES_MODE_LABELS}
      data={TIME_CLAUSES_DRILL_DATA}
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
