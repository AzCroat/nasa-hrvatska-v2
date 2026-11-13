// src/components/practice/drills/A2VerbsNutiDrill.tsx
//
// Engine-backed drill for the A2 lesson `verbs-nuti` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/verbsNutiDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VERBS_NUTI_DRILL_DATA,
  VERBS_NUTI_MODE_LABELS,
} from '../../../data/drills/a2/verbsNutiDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2VerbsNutiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2verbsnuti"
      title="Krenuti, Ostati, Doći — Verbs With a Hidden Stem"
      subtitle="Practise what the lesson taught"
      modeLabels={VERBS_NUTI_MODE_LABELS}
      data={VERBS_NUTI_DRILL_DATA}
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
