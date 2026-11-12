// src/components/practice/drills/B2AgreementSpecialNounsDrill.tsx
//
// Engine-backed drill for the B2 lesson `agreement-special-nouns` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/agreementSpecialNounsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  AGREEMENT_SPECIAL_NOUNS_DRILL_DATA,
  AGREEMENT_SPECIAL_NOUNS_MODE_LABELS,
} from '../../../data/drills/b2/agreementSpecialNounsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2AgreementSpecialNounsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2agreementspecialnouns"
      title="Naš tata, ta varalica, moja braća"
      subtitle="Practise what the lesson taught"
      modeLabels={AGREEMENT_SPECIAL_NOUNS_MODE_LABELS}
      data={AGREEMENT_SPECIAL_NOUNS_DRILL_DATA}
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
