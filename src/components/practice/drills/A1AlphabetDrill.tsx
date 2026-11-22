// src/components/practice/drills/A1AlphabetDrill.tsx
//
// Engine-backed drill for the A1 lesson `alphabet`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/alphabetDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { ALPHABET_DRILL_DATA, ALPHABET_MODE_LABELS } from '../../../data/drills/a1/alphabetDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1AlphabetDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1alphabet"
      title="Croatian Alphabet & Pronunciation"
      subtitle="Practice what the lesson taught"
      modeLabels={ALPHABET_MODE_LABELS}
      data={ALPHABET_DRILL_DATA}
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
