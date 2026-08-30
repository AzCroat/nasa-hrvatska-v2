// src/components/practice/drills/NewsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/newsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { NEWS_DRILL_DATA, NEWS_MODE_LABELS } from '../../../data/drills/newsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function NewsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="mediji"
      title="📰 Vijesti i mediji"
      subtitle="naslov bez glagola, i prenošenje bez pomaka vremena"
      modeLabels={NEWS_MODE_LABELS}
      data={NEWS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sve pročitano! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Vijesti traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
