// src/components/practice/drills/A1FormalAddressDrill.tsx
//
// Engine-backed drill for the A1 lesson `formal-address` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/formalAddressDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  FORMAL_ADDRESS_DRILL_DATA,
  FORMAL_ADDRESS_MODE_LABELS,
} from '../../../data/drills/a1/formalAddressDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1FormalAddressDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1formaladdress"
      title="Ti or Vi?"
      subtitle="Practise what the lesson taught"
      modeLabels={FORMAL_ADDRESS_MODE_LABELS}
      data={FORMAL_ADDRESS_DRILL_DATA}
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
