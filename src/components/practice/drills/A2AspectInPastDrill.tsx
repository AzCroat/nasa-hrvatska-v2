// src/components/practice/drills/A2AspectInPastDrill.tsx
//
// Engine-backed drill for the A2 lesson `aspect-in-past` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/aspectInPastDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ASPECT_IN_PAST_DRILL_DATA,
  ASPECT_IN_PAST_MODE_LABELS,
} from '../../../data/drills/a2/aspectInPastDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2AspectInPastDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2aspectinpast"
      title="Aspect in the Past"
      subtitle="Practise what the lesson taught"
      modeLabels={ASPECT_IN_PAST_MODE_LABELS}
      data={ASPECT_IN_PAST_DRILL_DATA}
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
