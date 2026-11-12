// src/components/practice/drills/A2PhoneCallsA2Drill.tsx
//
// Engine-backed drill for the A2 lesson `phone-calls-a2` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/phoneCallsA2Drill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PHONE_CALLS_A2_DRILL_DATA,
  PHONE_CALLS_A2_MODE_LABELS,
} from '../../../data/drills/a2/phoneCallsA2Drill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2PhoneCallsA2Drill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2phonecallsa2"
      title="Can I Speak to Mrs Novak? Phone Calls"
      subtitle="Practise what the lesson taught"
      modeLabels={PHONE_CALLS_A2_MODE_LABELS}
      data={PHONE_CALLS_A2_DRILL_DATA}
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
