// src/components/practice/drills/A2SchoolStudiesDrill.tsx
//
// Engine-backed drill for the A2 lesson `school-studies`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/schoolStudiesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  SCHOOL_STUDIES_DRILL_DATA,
  SCHOOL_STUDIES_MODE_LABELS,
} from '../../../data/drills/a2/schoolStudiesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2SchoolStudiesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2schoolstudies"
      title={'🎒 Škola i studij'}
      subtitle="Practice what the lesson taught"
      modeLabels={SCHOOL_STUDIES_MODE_LABELS}
      data={SCHOOL_STUDIES_DRILL_DATA}
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
