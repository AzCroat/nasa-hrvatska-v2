// src/components/practice/drills/ObjectPronounsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/objectPronounsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  OBJECT_PRONOUNS_DRILL_DATA,
  OBJECT_PRONOUNS_MODE_LABELS,
} from '../../../data/drills/objectPronounsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ObjectPronounsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="objekt"
      title="👥 Objektne zamjenice"
      subtitle="me, te, ga, joj — the little words that never come first"
      modeLabels={OBJECT_PRONOUNS_MODE_LABELS}
      data={OBJECT_PRONOUNS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — klitike su vaše! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Zamjenice traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
