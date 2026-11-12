// src/components/practice/drills/A1MoneyExchangeDrill.tsx
//
// Engine-backed drill for the A1 lesson `money-exchange` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/moneyExchangeDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  MONEY_EXCHANGE_DRILL_DATA,
  MONEY_EXCHANGE_MODE_LABELS,
} from '../../../data/drills/a1/moneyExchangeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1MoneyExchangeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1moneyexchange"
      title="Money and Exchange"
      subtitle="Practise what the lesson taught"
      modeLabels={MONEY_EXCHANGE_MODE_LABELS}
      data={MONEY_EXCHANGE_DRILL_DATA}
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
