// src/components/practice/drills/C1ObjectiveGenitiveDrill.tsx
//
// Engine-backed drill for the C1 lesson `objective-genitive` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/objectiveGenitiveDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  OBJECTIVE_GENITIVE_DRILL_DATA,
  OBJECTIVE_GENITIVE_MODE_LABELS,
} from '../../../data/drills/c1/objectiveGenitiveDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1ObjectiveGenitiveDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1objectivegenitive"
      title="Whose Reading? The Genitive After a Noun"
      subtitle="Practise what the lesson taught"
      modeLabels={OBJECTIVE_GENITIVE_MODE_LABELS}
      data={OBJECTIVE_GENITIVE_DRILL_DATA}
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
