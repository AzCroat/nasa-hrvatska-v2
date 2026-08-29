// src/components/practice/drills/ImpersonalB1Drill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/impersonalDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  IMPERSONAL_DRILL_DATA,
  IMPERSONAL_MODE_LABELS,
} from '../../../data/drills/impersonalDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ImpersonalB1Drill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="bezlicnob1"
      title="🚭 Bezlične rečenice"
      subtitle="treba pričekati, ovdje se ne puši, hladno mi je"
      modeLabels={IMPERSONAL_MODE_LABELS}
      data={IMPERSONAL_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — bezlične su vaše! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Bezlične rečenice traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
