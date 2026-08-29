// src/components/practice/drills/AspectVerbsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/aspectVerbsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ASPECT_VERBS_DRILL_DATA,
  ASPECT_VERBS_MODE_LABELS,
} from '../../../data/drills/aspectVerbsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AspectVerbsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="vidglagoli"
      title="🎚️ Vid uz glagole"
      subtitle="počeo sam čitati, uspio sam pročitati — aspect forced from outside"
      modeLabels={ASPECT_VERBS_MODE_LABELS}
      data={ASPECT_VERBS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — vid je vaš! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Vid uz glagole traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
