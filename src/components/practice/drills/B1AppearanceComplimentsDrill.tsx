// src/components/practice/drills/B1AppearanceComplimentsDrill.tsx
//
// Engine-backed drill for the B1 lesson `appearance-compliments` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/appearanceComplimentsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  APPEARANCE_COMPLIMENTS_DRILL_DATA,
  APPEARANCE_COMPLIMENTS_MODE_LABELS,
} from '../../../data/drills/b1/appearanceComplimentsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1AppearanceComplimentsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1appearancecompliments"
      title="You Look Great!"
      subtitle="Practise what the lesson taught"
      modeLabels={APPEARANCE_COMPLIMENTS_MODE_LABELS}
      data={APPEARANCE_COMPLIMENTS_DRILL_DATA}
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
