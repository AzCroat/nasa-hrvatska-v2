// src/components/practice/drills/A1AccusativeAnimateDrill.tsx
//
// Engine-backed drill for the A1 lesson `accusative-animate` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/accusativeAnimateDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ACCUSATIVE_ANIMATE_DRILL_DATA,
  ACCUSATIVE_ANIMATE_MODE_LABELS,
} from '../../../data/drills/a1/accusativeAnimateDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1AccusativeAnimateDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1accusativeanimate"
      title="Alive or Not: Masculine Objects"
      subtitle="Practise what the lesson taught"
      modeLabels={ACCUSATIVE_ANIMATE_MODE_LABELS}
      data={ACCUSATIVE_ANIMATE_DRILL_DATA}
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
