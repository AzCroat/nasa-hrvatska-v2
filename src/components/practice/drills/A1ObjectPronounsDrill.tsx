// src/components/practice/drills/A1ObjectPronounsDrill.tsx
//
// Engine-backed drill for the A1 lesson `object-pronouns`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/objectPronounsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  OBJECT_PRONOUNS_DRILL_DATA,
  OBJECT_PRONOUNS_MODE_LABELS,
} from '../../../data/drills/a1/objectPronounsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1ObjectPronounsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1objectpronouns"
      title="👥 Objektne zamjenice"
      subtitle="Practice what the lesson taught"
      modeLabels={OBJECT_PRONOUNS_MODE_LABELS}
      data={OBJECT_PRONOUNS_DRILL_DATA}
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
