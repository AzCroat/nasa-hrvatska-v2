// src/components/practice/drills/PluralCasesDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/pluralCasesDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PLURAL_CASES_DRILL_DATA,
  PLURAL_CASES_MODE_LABELS,
} from '../../../data/drills/pluralCasesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PluralCasesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="mnozinapadezi"
      title="📚 Množina u padežima"
      subtitle="pet studenata, u gradovima — the plural once it has work to do"
      modeLabels={PLURAL_CASES_MODE_LABELS}
      data={PLURAL_CASES_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — množina je vaša! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Množina traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
