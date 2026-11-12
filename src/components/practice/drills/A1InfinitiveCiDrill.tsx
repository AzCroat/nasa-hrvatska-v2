// src/components/practice/drills/A1InfinitiveCiDrill.tsx
//
// Engine-backed drill for the A1 lesson `infinitive-ci` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/infinitiveCiDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INFINITIVE_CI_DRILL_DATA,
  INFINITIVE_CI_MODE_LABELS,
} from '../../../data/drills/a1/infinitiveCiDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1InfinitiveCiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1infinitiveci"
      title="Verbs Ending in -ći"
      subtitle="Practise what the lesson taught"
      modeLabels={INFINITIVE_CI_MODE_LABELS}
      data={INFINITIVE_CI_DRILL_DATA}
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
