// src/components/practice/drills/FoodDrinkDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/foodDrinkDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { FOOD_DRINK_DRILL_DATA, FOOD_DRINK_MODE_LABELS } from '../../../data/drills/foodDrinkDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function FoodDrinkDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="hrana"
      title="🍽️ Hrana i piće"
      subtitle="pijem kavu but šalica kave — ordering, and the case it takes"
      modeLabels={FOOD_DRINK_MODE_LABELS}
      data={FOOD_DRINK_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — naručivanje je vaše! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Hrana i piće traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
