// src/components/practice/drills/B2LiteratureCanonDrill.tsx
//
// Engine-backed drill for the B2 lesson `literature-canon`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/literatureCanonDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  LITERATURE_CANON_DRILL_DATA,
  LITERATURE_CANON_MODE_LABELS,
} from '../../../data/drills/b2/literatureCanonDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2LiteratureCanonDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2literaturecanon"
      title={'📚 Književnost'}
      subtitle="Practice what the lesson taught"
      modeLabels={LITERATURE_CANON_MODE_LABELS}
      data={LITERATURE_CANON_DRILL_DATA}
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
