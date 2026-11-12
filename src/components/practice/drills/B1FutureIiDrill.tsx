// src/components/practice/drills/B1FutureIiDrill.tsx
//
// Engine-backed drill for the B1 lesson `future-ii` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/futureIiDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { FUTURE_II_DRILL_DATA, FUTURE_II_MODE_LABELS } from '../../../data/drills/b1/futureIiDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1FutureIiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1futureii"
      title="When I Have Time — Future II"
      subtitle="Practise what the lesson taught"
      modeLabels={FUTURE_II_MODE_LABELS}
      data={FUTURE_II_DRILL_DATA}
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
