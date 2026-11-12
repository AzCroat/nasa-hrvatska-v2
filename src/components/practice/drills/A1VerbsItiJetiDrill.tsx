// src/components/practice/drills/A1VerbsItiJetiDrill.tsx
//
// Engine-backed drill for the A1 lesson `verbs-iti-jeti` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/verbsItiJetiDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VERBS_ITI_JETI_DRILL_DATA,
  VERBS_ITI_JETI_MODE_LABELS,
} from '../../../data/drills/a1/verbsItiJetiDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1VerbsItiJetiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1verbsitijeti"
      title="Verbs in -iti and -jeti"
      subtitle="Practise what the lesson taught"
      modeLabels={VERBS_ITI_JETI_MODE_LABELS}
      data={VERBS_ITI_JETI_DRILL_DATA}
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
