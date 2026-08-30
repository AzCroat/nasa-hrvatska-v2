// src/components/practice/drills/ProofreadingDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/proofreadingDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PROOFREADING_DRILL_DATA,
  PROOFREADING_MODE_LABELS,
} from '../../../data/drills/proofreadingDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ProofreadingDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="lektura"
      title="🔎 Lektura"
      subtitle="provjera u prolazima: sročnost, rekcija, pravopis, zarezi"
      modeLabels={PROOFREADING_MODE_LABELS}
      data={PROOFREADING_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — lektor bi potpisao! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Lektura traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
