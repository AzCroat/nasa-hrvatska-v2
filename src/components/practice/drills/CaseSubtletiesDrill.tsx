// src/components/practice/drills/CaseSubtletiesDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/caseSubtletiesDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CASE_SUBTLETIES_DRILL_DATA,
  CASE_SUBTLETIES_MODE_LABELS,
} from '../../../data/drills/caseSubtletiesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function CaseSubtletiesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="padezisupt"
      title="🎚️ Padežne suptilnosti"
      subtitle="Dva padeža, oba točna, različito značenje"
      modeLabels={CASE_SUBTLETIES_MODE_LABELS}
      data={CASE_SUBTLETIES_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — to je razina C2! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
