// src/components/practice/drills/A2GroceryShoppingDrill.tsx
//
// Engine-backed drill for the A2 lesson `grocery-shopping` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/groceryShoppingDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  GROCERY_SHOPPING_DRILL_DATA,
  GROCERY_SHOPPING_MODE_LABELS,
} from '../../../data/drills/a2/groceryShoppingDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2GroceryShoppingDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2groceryshopping"
      title="U trgovini i na tržnici"
      subtitle="Practise what the lesson taught"
      modeLabels={GROCERY_SHOPPING_MODE_LABELS}
      data={GROCERY_SHOPPING_DRILL_DATA}
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
