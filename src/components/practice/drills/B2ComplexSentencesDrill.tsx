// src/components/practice/drills/B2ComplexSentencesDrill.tsx
//
// Engine-backed drill for the B2 lesson `complex-sentences`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/complexSentencesDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  COMPLEX_SENTENCES_DRILL_DATA,
  COMPLEX_SENTENCES_MODE_LABELS,
} from '../../../data/drills/b2/complexSentencesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2ComplexSentencesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2complexsentences"
      title={'🧱 Složene rečenice'}
      subtitle="Practice what the lesson taught"
      modeLabels={COMPLEX_SENTENCES_MODE_LABELS}
      data={COMPLEX_SENTENCES_DRILL_DATA}
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
