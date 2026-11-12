// src/components/practice/drills/A2AgreeingDisagreeingDrill.tsx
//
// Engine-backed drill for the A2 lesson `agreeing-disagreeing` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/agreeingDisagreeingDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  AGREEING_DISAGREEING_DRILL_DATA,
  AGREEING_DISAGREEING_MODE_LABELS,
} from '../../../data/drills/a2/agreeingDisagreeingDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2AgreeingDisagreeingDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2agreeingdisagreeing"
      title="I Agree, I Disagree"
      subtitle="Practise what the lesson taught"
      modeLabels={AGREEING_DISAGREEING_MODE_LABELS}
      data={AGREEING_DISAGREEING_DRILL_DATA}
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
