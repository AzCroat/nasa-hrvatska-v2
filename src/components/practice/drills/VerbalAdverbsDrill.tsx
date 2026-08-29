// src/components/practice/drills/VerbalAdverbsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/verbalAdverbsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VERBAL_ADVERBS_DRILL_DATA,
  VERBAL_ADVERBS_MODE_LABELS,
} from '../../../data/drills/verbalAdverbsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function VerbalAdverbsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="prilozib2"
      title="🔗 Glagolski prilozi"
      subtitle="čitajući, došavši — and the subject they must share"
      modeLabels={VERBAL_ADVERBS_MODE_LABELS}
      data={VERBAL_ADVERBS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — prilozi su vaši! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Glagolski prilozi traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
