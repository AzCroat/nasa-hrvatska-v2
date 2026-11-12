// src/components/practice/drills/A1GivingAndSendingDrill.tsx
//
// Engine-backed drill for the A1 lesson `giving-and-sending` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/givingAndSendingDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  GIVING_AND_SENDING_DRILL_DATA,
  GIVING_AND_SENDING_MODE_LABELS,
} from '../../../data/drills/a1/givingAndSendingDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1GivingAndSendingDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1givingandsending"
      title="Giving, Sending, Telling"
      subtitle="Practise what the lesson taught"
      modeLabels={GIVING_AND_SENDING_MODE_LABELS}
      data={GIVING_AND_SENDING_DRILL_DATA}
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
