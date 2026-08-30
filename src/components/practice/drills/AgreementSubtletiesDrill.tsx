// src/components/practice/drills/AgreementSubtletiesDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/agreementSubtletiesDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  AGREEMENT_SUBTLETIES_DRILL_DATA,
  AGREEMENT_SUBTLETIES_MODE_LABELS,
} from '../../../data/drills/agreementSubtletiesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AgreementSubtletiesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="slaganjec2"
      title="🪢 Suptilnosti slaganja"
      subtitle="Kad se subjekt i predikat ne slažu očito"
      modeLabels={AGREEMENT_SUBTLETIES_MODE_LABELS}
      data={AGREEMENT_SUBTLETIES_DRILL_DATA}
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
