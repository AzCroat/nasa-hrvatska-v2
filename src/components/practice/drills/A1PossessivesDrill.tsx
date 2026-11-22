// src/components/practice/drills/A1PossessivesDrill.tsx
//
// Engine-backed drill for the A1 lesson `possessives`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/possessivesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  POSSESSIVES_DRILL_DATA,
  POSSESSIVES_MODE_LABELS,
} from '../../../data/drills/a1/possessivesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1PossessivesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1possessives"
      title="My, Your, Our"
      subtitle="Practice what the lesson taught"
      modeLabels={POSSESSIVES_MODE_LABELS}
      data={POSSESSIVES_DRILL_DATA}
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
