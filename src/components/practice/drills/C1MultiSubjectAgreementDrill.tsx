// src/components/practice/drills/C1MultiSubjectAgreementDrill.tsx
//
// Engine-backed drill for the C1 lesson `multi-subject-agreement` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/multiSubjectAgreementDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  MULTI_SUBJECT_AGREEMENT_DRILL_DATA,
  MULTI_SUBJECT_AGREEMENT_MODE_LABELS,
} from '../../../data/drills/c1/multiSubjectAgreementDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1MultiSubjectAgreementDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1multisubjectagreement"
      title="Two Subjects, One Verb"
      subtitle="Practise what the lesson taught"
      modeLabels={MULTI_SUBJECT_AGREEMENT_MODE_LABELS}
      data={MULTI_SUBJECT_AGREEMENT_DRILL_DATA}
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
