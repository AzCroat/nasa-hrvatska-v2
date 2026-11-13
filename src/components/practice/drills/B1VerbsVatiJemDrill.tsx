// src/components/practice/drills/B1VerbsVatiJemDrill.tsx
//
// Engine-backed drill for the B1 lesson `verbs-vati-jem` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/verbsVatiJemDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VERBS_VATI_JEM_DRILL_DATA,
  VERBS_VATI_JEM_MODE_LABELS,
} from '../../../data/drills/b1/verbsVatiJemDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1VerbsVatiJemDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1verbsvatijem"
      title="davati → dajem, stati → stanem"
      subtitle="Practise what the lesson taught"
      modeLabels={VERBS_VATI_JEM_MODE_LABELS}
      data={VERBS_VATI_JEM_DRILL_DATA}
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
