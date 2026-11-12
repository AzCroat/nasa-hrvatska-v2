// src/components/practice/drills/A1FeelingsDrill.tsx
//
// Engine-backed drill for the A1 lesson `feelings` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/feelingsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { FEELINGS_DRILL_DATA, FEELINGS_MODE_LABELS } from '../../../data/drills/a1/feelingsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1FeelingsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1feelings"
      title="How Do You Feel?"
      subtitle="Practise what the lesson taught"
      modeLabels={FEELINGS_MODE_LABELS}
      data={FEELINGS_DRILL_DATA}
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
