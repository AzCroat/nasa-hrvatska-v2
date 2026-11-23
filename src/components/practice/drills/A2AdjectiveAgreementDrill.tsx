// src/components/practice/drills/A2AdjectiveAgreementDrill.tsx
//
// Engine-backed drill for the A2 lesson `adjective-agreement`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/adjectiveAgreementDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ADJECTIVE_AGREEMENT_DRILL_DATA,
  ADJECTIVE_AGREEMENT_MODE_LABELS,
} from '../../../data/drills/a2/adjectiveAgreementDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2AdjectiveAgreementDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2adjectiveagreement"
      title={'Adjective Agreement'}
      subtitle="Practice what the lesson taught"
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
