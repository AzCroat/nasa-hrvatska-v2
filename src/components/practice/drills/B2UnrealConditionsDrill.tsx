// src/components/practice/drills/B2UnrealConditionsDrill.tsx
//
// Engine-backed drill for the B2 lesson `unreal-conditions` (B2 book comparison, 2026-11-13).
// The content is in ../../../data/drills/b2/unrealConditionsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  UNREAL_CONDITIONS_DRILL_DATA,
  UNREAL_CONDITIONS_MODE_LABELS,
} from '../../../data/drills/b2/unrealConditionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2UnrealConditionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2unrealconditions"
      title="Da Sam Znao… If Things Were Different"
      subtitle="Practise what the lesson taught"
      modeLabels={UNREAL_CONDITIONS_MODE_LABELS}
      data={UNREAL_CONDITIONS_DRILL_DATA}
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
