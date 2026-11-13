// src/components/practice/drills/B1SatisfactionDisappointmentDrill.tsx
//
// Engine-backed drill for the B1 lesson `satisfaction-disappointment` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/satisfactionDisappointmentDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  SATISFACTION_DISAPPOINTMENT_DRILL_DATA,
  SATISFACTION_DISAPPOINTMENT_MODE_LABELS,
} from '../../../data/drills/b1/satisfactionDisappointmentDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1SatisfactionDisappointmentDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1satisfactiondisappointment"
      title="Zadovoljan, oduševljen, razočaran — How Did It Go?"
      subtitle="Practise what the lesson taught"
      modeLabels={SATISFACTION_DISAPPOINTMENT_MODE_LABELS}
      data={SATISFACTION_DISAPPOINTMENT_DRILL_DATA}
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
