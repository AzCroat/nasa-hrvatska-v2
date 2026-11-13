// src/components/practice/drills/C1PrefixedVerbsDrill.tsx
//
// Engine-backed drill for the C1 lesson `prefixed-verbs` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/prefixedVerbsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PREFIXED_VERBS_DRILL_DATA,
  PREFIXED_VERBS_MODE_LABELS,
} from '../../../data/drills/c1/prefixedVerbsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1PrefixedVerbsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1prefixedverbs"
      title="Prefixed Verbs"
      subtitle="Practise what the lesson taught"
      modeLabels={PREFIXED_VERBS_MODE_LABELS}
      data={PREFIXED_VERBS_DRILL_DATA}
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
