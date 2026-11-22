// src/components/practice/drills/A1PronounsBitiDrill.tsx
//
// Engine-backed drill for the A1 lesson `pronouns-biti`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/pronounsBitiDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PRONOUNS_BITI_DRILL_DATA,
  PRONOUNS_BITI_MODE_LABELS,
} from '../../../data/drills/a1/pronounsBitiDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1PronounsBitiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1pronounsbiti"
      title="Pronouns & Biti"
      subtitle="Practice what the lesson taught"
      modeLabels={PRONOUNS_BITI_MODE_LABELS}
      data={PRONOUNS_BITI_DRILL_DATA}
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
