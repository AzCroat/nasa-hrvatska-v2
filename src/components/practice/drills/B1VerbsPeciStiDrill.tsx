// src/components/practice/drills/B1VerbsPeciStiDrill.tsx
//
// Engine-backed drill for the B1 lesson `verbs-peci-sti` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/verbsPeciStiDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VERBS_PECI_STI_DRILL_DATA,
  VERBS_PECI_STI_MODE_LABELS,
} from '../../../data/drills/b1/verbsPeciStiDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1VerbsPeciStiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1verbspecisti"
      title="Peći, pečem; krasti, kradem — Verbs With a Hidden Consonant"
      subtitle="Practise what the lesson taught"
      modeLabels={VERBS_PECI_STI_MODE_LABELS}
      data={VERBS_PECI_STI_DRILL_DATA}
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
