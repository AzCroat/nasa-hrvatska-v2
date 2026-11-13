// src/components/practice/drills/B1MotionVerbsDrill.tsx
//
// Engine-backed drill for the B1 lesson `motion-verbs` (B1-19). The content is in
// ../../../data/drills/b1/motionVerbsDrill. Lazy-loaded so the bank stays off the
// first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  MOTION_VERBS_DRILL_DATA,
  MOTION_VERBS_MODE_LABELS,
} from '../../../data/drills/b1/motionVerbsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1MotionVerbsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1motionverbs"
      title="Ući, izaći, otići — Motion Verbs"
      subtitle="Practise what the lesson taught"
      modeLabels={MOTION_VERBS_MODE_LABELS}
      data={MOTION_VERBS_DRILL_DATA}
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
