// src/components/practice/drills/A2ImpersonalFeelingsDrill.tsx
//
// Engine-backed drill for the A2 lesson `impersonal-feelings` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/impersonalFeelingsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  IMPERSONAL_FEELINGS_DRILL_DATA,
  IMPERSONAL_FEELINGS_MODE_LABELS,
} from '../../../data/drills/a2/impersonalFeelingsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2ImpersonalFeelingsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2impersonalfeelings"
      title="Cold, Bored, Sorry: How You Feel with mi je"
      subtitle="Practise what the lesson taught"
      modeLabels={IMPERSONAL_FEELINGS_MODE_LABELS}
      data={IMPERSONAL_FEELINGS_DRILL_DATA}
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
