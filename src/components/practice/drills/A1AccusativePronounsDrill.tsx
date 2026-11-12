// src/components/practice/drills/A1AccusativePronounsDrill.tsx
//
// Engine-backed drill for the A1 lesson `accusative-pronouns` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/accusativePronounsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ACCUSATIVE_PRONOUNS_DRILL_DATA,
  ACCUSATIVE_PRONOUNS_MODE_LABELS,
} from '../../../data/drills/a1/accusativePronounsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1AccusativePronounsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1accusativepronouns"
      title="Me, You, Him, Her"
      subtitle="Practise what the lesson taught"
      modeLabels={ACCUSATIVE_PRONOUNS_MODE_LABELS}
      data={ACCUSATIVE_PRONOUNS_DRILL_DATA}
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
