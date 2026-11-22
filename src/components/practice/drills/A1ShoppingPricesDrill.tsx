// src/components/practice/drills/A1ShoppingPricesDrill.tsx
//
// Engine-backed drill for the A1 lesson `shopping-prices`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/shoppingPricesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  SHOPPING_PRICES_DRILL_DATA,
  SHOPPING_PRICES_MODE_LABELS,
} from '../../../data/drills/a1/shoppingPricesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1ShoppingPricesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1shoppingprices"
      title="Shopping and Prices"
      subtitle="Practice what the lesson taught"
      modeLabels={SHOPPING_PRICES_MODE_LABELS}
      data={SHOPPING_PRICES_DRILL_DATA}
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
