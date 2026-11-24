// src/components/practice/drills/A2PluralCasesDrill.tsx
//
// Engine-backed drill for the A2 lesson `plural-cases`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/pluralCasesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PLURAL_CASES_DRILL_DATA,
  PLURAL_CASES_MODE_LABELS,
} from '../../../data/drills/a2/pluralCasesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2PluralCasesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2pluralcases"
      title={'📚 Množina u padežima'}
      subtitle="Practice what the lesson taught"
      modeLabels={PLURAL_CASES_MODE_LABELS}
      data={PLURAL_CASES_DRILL_DATA}
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
