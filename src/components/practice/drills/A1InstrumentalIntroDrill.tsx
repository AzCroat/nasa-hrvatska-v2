// src/components/practice/drills/A1InstrumentalIntroDrill.tsx
//
// Engine-backed drill for the A1 lesson `instrumental-intro`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/instrumentalIntroDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INSTRUMENTAL_INTRO_DRILL_DATA,
  INSTRUMENTAL_INTRO_MODE_LABELS,
} from '../../../data/drills/a1/instrumentalIntroDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1InstrumentalIntroDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1instrumentalintro"
      title={'The Instrumental'}
      subtitle="Practice what the lesson taught"
      modeLabels={INSTRUMENTAL_INTRO_MODE_LABELS}
      data={INSTRUMENTAL_INTRO_DRILL_DATA}
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
