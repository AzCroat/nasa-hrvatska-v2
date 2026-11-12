// src/components/practice/drills/B1VerbsWithGenitiveDrill.tsx
//
// Engine-backed drill for the B1 lesson `verbs-with-genitive` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/verbsWithGenitiveDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VERBS_WITH_GENITIVE_DRILL_DATA,
  VERBS_WITH_GENITIVE_MODE_LABELS,
} from '../../../data/drills/b1/verbsWithGenitiveDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1VerbsWithGenitiveDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1verbswithgenitive"
      title="Bojim se mraka — Verbs That Take the Genitive"
      subtitle="Practise what the lesson taught"
      modeLabels={VERBS_WITH_GENITIVE_MODE_LABELS}
      data={VERBS_WITH_GENITIVE_DRILL_DATA}
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
