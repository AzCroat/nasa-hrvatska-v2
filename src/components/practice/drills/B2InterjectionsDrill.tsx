// src/components/practice/drills/B2InterjectionsDrill.tsx
//
// Engine-backed drill for the B2 lesson `interjections` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/interjectionsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INTERJECTIONS_DRILL_DATA,
  INTERJECTIONS_MODE_LABELS,
} from '../../../data/drills/b2/interjectionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2InterjectionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2interjections"
      title="Joj, Uf, Bravo! Interjections"
      subtitle="Practise what the lesson taught"
      modeLabels={INTERJECTIONS_MODE_LABELS}
      data={INTERJECTIONS_DRILL_DATA}
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
