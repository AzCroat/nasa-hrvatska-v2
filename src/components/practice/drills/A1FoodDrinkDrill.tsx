// src/components/practice/drills/A1FoodDrinkDrill.tsx
//
// Engine-backed drill for the A1 lesson `food-drink`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/foodDrinkDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  FOOD_DRINK_DRILL_DATA,
  FOOD_DRINK_MODE_LABELS,
} from '../../../data/drills/a1/foodDrinkDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1FoodDrinkDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1fooddrink"
      title={'Food, Drink and Ordering'}
      subtitle="Practice what the lesson taught"
      modeLabels={FOOD_DRINK_MODE_LABELS}
      data={FOOD_DRINK_DRILL_DATA}
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
