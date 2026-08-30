// src/components/practice/drills/CookingDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/cookingDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { COOKING_DRILL_DATA, COOKING_MODE_LABELS } from '../../../data/drills/cookingDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function CookingDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="kuhanje"
      title="🍲 Kuhanje"
      subtitle="recept je zapovjedni način plus genitiv"
      modeLabels={COOKING_MODE_LABELS}
      data={COOKING_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — dobar tek! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Kuhanje traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
