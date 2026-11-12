// src/components/practice/drills/B2VerbalNounsIntroDrill.tsx
//
// Engine-backed drill for the B2 lesson `verbal-nouns-intro` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/verbalNounsIntroDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VERBAL_NOUNS_INTRO_DRILL_DATA,
  VERBAL_NOUNS_INTRO_MODE_LABELS,
} from '../../../data/drills/b2/verbalNounsIntroDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2VerbalNounsIntroDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2verbalnounsintro"
      title="Reading, Learning, Writing: Nouns from Verbs"
      subtitle="Practise what the lesson taught"
      modeLabels={VERBAL_NOUNS_INTRO_MODE_LABELS}
      data={VERBAL_NOUNS_INTRO_DRILL_DATA}
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
