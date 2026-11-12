// src/components/practice/drills/A1INounsIntroDrill.tsx
//
// Engine-backed drill for the A1 lesson `i-nouns-intro` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/iNounsIntroDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  I_NOUNS_INTRO_DRILL_DATA,
  I_NOUNS_INTRO_MODE_LABELS,
} from '../../../data/drills/a1/iNounsIntroDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1INounsIntroDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1inounsintro"
      title="Feminine Nouns Without -a"
      subtitle="Practise what the lesson taught"
      modeLabels={I_NOUNS_INTRO_MODE_LABELS}
      data={I_NOUNS_INTRO_DRILL_DATA}
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
