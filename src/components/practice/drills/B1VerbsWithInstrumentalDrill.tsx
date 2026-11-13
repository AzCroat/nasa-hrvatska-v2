// src/components/practice/drills/B1VerbsWithInstrumentalDrill.tsx
//
// Engine-backed drill for the B1 lesson `verbs-with-instrumental` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/verbsWithInstrumentalDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VERBS_WITH_INSTRUMENTAL_DRILL_DATA,
  VERBS_WITH_INSTRUMENTAL_MODE_LABELS,
} from '../../../data/drills/b1/verbsWithInstrumentalDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1VerbsWithInstrumentalDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1verbswithinstrumental"
      title="Čime se baviš? — Verbs That Take the Instrumental"
      subtitle="Practise what the lesson taught"
      modeLabels={VERBS_WITH_INSTRUMENTAL_MODE_LABELS}
      data={VERBS_WITH_INSTRUMENTAL_DRILL_DATA}
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
