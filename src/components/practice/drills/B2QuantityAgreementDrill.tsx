// src/components/practice/drills/B2QuantityAgreementDrill.tsx
//
// Engine-backed drill for the B2 lesson `quantity-agreement` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/quantityAgreementDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  QUANTITY_AGREEMENT_DRILL_DATA,
  QUANTITY_AGREEMENT_MODE_LABELS,
} from '../../../data/drills/b2/quantityAgreementDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2QuantityAgreementDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2quantityagreement"
      title="Dva su došla, pet je došlo"
      subtitle="Practise what the lesson taught"
      modeLabels={QUANTITY_AGREEMENT_MODE_LABELS}
      data={QUANTITY_AGREEMENT_DRILL_DATA}
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
