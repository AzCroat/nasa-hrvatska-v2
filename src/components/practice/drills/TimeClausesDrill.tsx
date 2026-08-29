// src/components/practice/drills/TimeClausesDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/timeClausesDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TIME_CLAUSES_DRILL_DATA,
  TIME_CLAUSES_MODE_LABELS,
} from '../../../data/drills/timeClausesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function TimeClausesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="vrijemeklauze"
      title="⏳ Vremenske rečenice"
      subtitle="kad dođem, javit ću ti — the present for a future when"
      modeLabels={TIME_CLAUSES_MODE_LABELS}
      data={TIME_CLAUSES_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — slijed radnji je vaš! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Vremenske rečenice traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
