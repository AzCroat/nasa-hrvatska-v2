// src/components/practice/drills/A2VerbsWithDativeA2Drill.tsx
//
// Engine-backed drill for the A2 lesson `verbs-with-dative-a2` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/verbsWithDativeA2Drill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VERBS_WITH_DATIVE_A2_DRILL_DATA,
  VERBS_WITH_DATIVE_A2_MODE_LABELS,
} from '../../../data/drills/a2/verbsWithDativeA2Drill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2VerbsWithDativeA2Drill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2verbswithdativea2"
      title="I Miss You: More Verbs with the Dative"
      subtitle="Practise what the lesson taught"
      modeLabels={VERBS_WITH_DATIVE_A2_MODE_LABELS}
      data={VERBS_WITH_DATIVE_A2_DRILL_DATA}
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
