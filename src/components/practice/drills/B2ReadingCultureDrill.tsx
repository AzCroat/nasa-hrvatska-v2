// src/components/practice/drills/B2ReadingCultureDrill.tsx
//
// Engine-backed drill for the B2 lesson `reading-culture` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/readingCultureDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  READING_CULTURE_DRILL_DATA,
  READING_CULTURE_MODE_LABELS,
} from '../../../data/drills/b2/readingCultureDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2ReadingCultureDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2readingculture"
      title="Tko čita, ne skita"
      subtitle="Practise what the lesson taught"
      modeLabels={READING_CULTURE_MODE_LABELS}
      data={READING_CULTURE_DRILL_DATA}
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
