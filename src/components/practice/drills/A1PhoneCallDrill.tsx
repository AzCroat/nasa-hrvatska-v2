// src/components/practice/drills/A1PhoneCallDrill.tsx
//
// Engine-backed drill for the A1 lesson `phone-call` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/phoneCallDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PHONE_CALL_DRILL_DATA,
  PHONE_CALL_MODE_LABELS,
} from '../../../data/drills/a1/phoneCallDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1PhoneCallDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1phonecall"
      title="On the Phone"
      subtitle="Practise what the lesson taught"
      modeLabels={PHONE_CALL_MODE_LABELS}
      data={PHONE_CALL_DRILL_DATA}
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
