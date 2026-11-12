// src/components/practice/drills/C1EthnonymsDrill.tsx
//
// Engine-backed drill for the C1 lesson `ethnonyms` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/ethnonymsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ETHNONYMS_DRILL_DATA,
  ETHNONYMS_MODE_LABELS,
} from '../../../data/drills/c1/ethnonymsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1EthnonymsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1ethnonyms"
      title="Zagrepčanin, Splićanka, Riječani"
      subtitle="Practise what the lesson taught"
      modeLabels={ETHNONYMS_MODE_LABELS}
      data={ETHNONYMS_DRILL_DATA}
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
