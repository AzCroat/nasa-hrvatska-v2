// src/components/practice/drills/C1EthicalDativeDrill.tsx
//
// Engine-backed drill for the C1 lesson `ethical-dative` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/ethicalDativeDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ETHICAL_DATIVE_DRILL_DATA,
  ETHICAL_DATIVE_MODE_LABELS,
} from '../../../data/drills/c1/ethicalDativeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1EthicalDativeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1ethicaldative"
      title="The Ethical Dative"
      subtitle="Practise what the lesson taught"
      modeLabels={ETHICAL_DATIVE_MODE_LABELS}
      data={ETHICAL_DATIVE_DRILL_DATA}
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
