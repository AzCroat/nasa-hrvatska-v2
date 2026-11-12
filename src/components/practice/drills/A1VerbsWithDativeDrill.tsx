// src/components/practice/drills/A1VerbsWithDativeDrill.tsx
//
// Engine-backed drill for the A1 lesson `verbs-with-dative` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/verbsWithDativeDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VERBS_WITH_DATIVE_DRILL_DATA,
  VERBS_WITH_DATIVE_MODE_LABELS,
} from '../../../data/drills/a1/verbsWithDativeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1VerbsWithDativeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1verbswithdative"
      title="Verbs That Take the Dative"
      subtitle="Practise what the lesson taught"
      modeLabels={VERBS_WITH_DATIVE_MODE_LABELS}
      data={VERBS_WITH_DATIVE_DRILL_DATA}
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
