// src/components/practice/drills/A1ReflexiveVerbsDrill.tsx
//
// Engine-backed drill for the A1 lesson `reflexive-verbs`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/reflexiveVerbsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  REFLEXIVE_VERBS_DRILL_DATA,
  REFLEXIVE_VERBS_MODE_LABELS,
} from '../../../data/drills/a1/reflexiveVerbsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1ReflexiveVerbsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1reflexiveverbs"
      title={'Verbs With "Se"'}
      subtitle="Practice what the lesson taught"
      modeLabels={REFLEXIVE_VERBS_MODE_LABELS}
      data={REFLEXIVE_VERBS_DRILL_DATA}
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
