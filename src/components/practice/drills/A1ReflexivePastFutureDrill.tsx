// src/components/practice/drills/A1ReflexivePastFutureDrill.tsx
//
// Engine-backed drill for the A1 lesson `reflexive-past-future` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/reflexivePastFutureDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  REFLEXIVE_PAST_FUTURE_DRILL_DATA,
  REFLEXIVE_PAST_FUTURE_MODE_LABELS,
} from '../../../data/drills/a1/reflexivePastFutureDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1ReflexivePastFutureDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1reflexivepastfuture"
      title="Se in the Past and the Future"
      subtitle="Practise what the lesson taught"
      modeLabels={REFLEXIVE_PAST_FUTURE_MODE_LABELS}
      data={REFLEXIVE_PAST_FUTURE_DRILL_DATA}
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
