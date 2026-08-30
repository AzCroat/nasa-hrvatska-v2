// src/components/practice/drills/OpinionsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/opinionsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { OPINIONS_DRILL_DATA, OPINIONS_MODE_LABELS } from '../../../data/drills/opinionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function OpinionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="misljenje"
      title="💭 Mišljenje i slaganje"
      subtitle="mislim DA — i zašto se prvo popušta"
      modeLabels={OPINIONS_MODE_LABELS}
      data={OPINIONS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — uvjerljivo! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Mišljenja traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
