// src/components/practice/drills/A1GenitivePronounsDrill.tsx
//
// Engine-backed drill for the A1 lesson `genitive-pronouns` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/genitivePronounsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  GENITIVE_PRONOUNS_DRILL_DATA,
  GENITIVE_PRONOUNS_MODE_LABELS,
} from '../../../data/drills/a1/genitivePronounsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1GenitivePronounsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1genitivepronouns"
      title="At My Place, Without You"
      subtitle="Practise what the lesson taught"
      modeLabels={GENITIVE_PRONOUNS_MODE_LABELS}
      data={GENITIVE_PRONOUNS_DRILL_DATA}
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
