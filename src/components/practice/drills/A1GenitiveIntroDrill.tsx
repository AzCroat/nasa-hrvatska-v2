// src/components/practice/drills/A1GenitiveIntroDrill.tsx
//
// Engine-backed drill for the A1 lesson `genitive-intro`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/genitiveIntroDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  GENITIVE_INTRO_DRILL_DATA,
  GENITIVE_INTRO_MODE_LABELS,
} from '../../../data/drills/a1/genitiveIntroDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1GenitiveIntroDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1genitiveintro"
      title="The Genitive"
      subtitle="Practice what the lesson taught"
      modeLabels={GENITIVE_INTRO_MODE_LABELS}
      data={GENITIVE_INTRO_DRILL_DATA}
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
