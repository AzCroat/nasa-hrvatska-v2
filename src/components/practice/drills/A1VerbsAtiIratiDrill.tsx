// src/components/practice/drills/A1VerbsAtiIratiDrill.tsx
//
// Engine-backed drill for the A1 lesson `verbs-ati-irati` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/verbsAtiIratiDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VERBS_ATI_IRATI_DRILL_DATA,
  VERBS_ATI_IRATI_MODE_LABELS,
} from '../../../data/drills/a1/verbsAtiIratiDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1VerbsAtiIratiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1verbsatiirati"
      title="Verbs in -ati and -irati"
      subtitle="Practise what the lesson taught"
      modeLabels={VERBS_ATI_IRATI_MODE_LABELS}
      data={VERBS_ATI_IRATI_DRILL_DATA}
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
