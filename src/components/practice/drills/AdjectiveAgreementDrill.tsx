// src/components/practice/drills/AdjectiveAgreementDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/adjectiveAgreementDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ADJECTIVE_AGREEMENT_DRILL_DATA,
  ADJECTIVE_AGREEMENT_MODE_LABELS,
} from '../../../data/drills/adjectiveAgreementDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AdjectiveAgreementDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="slaganjea2"
      title="🎨 Slaganje pridjeva"
      subtitle="Rod, broj i padež — pridjev prepisuje sve tri"
      modeLabels={ADJECTIVE_AGREEMENT_MODE_LABELS}
      data={ADJECTIVE_AGREEMENT_DRILL_DATA}
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
