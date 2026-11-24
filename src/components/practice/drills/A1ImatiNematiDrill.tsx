// src/components/practice/drills/A1ImatiNematiDrill.tsx
//
// Engine-backed drill for the A1 lesson `imati-nemati`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/imatiNematiDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  IMATI_NEMATI_DRILL_DATA,
  IMATI_NEMATI_MODE_LABELS,
} from '../../../data/drills/a1/imatiNematiDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1ImatiNematiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1imatinemati"
      title={'\ud83e\udd32 Imati i nemati'}
      subtitle="Practice what the lesson taught"
      modeLabels={IMATI_NEMATI_MODE_LABELS}
      data={IMATI_NEMATI_DRILL_DATA}
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
