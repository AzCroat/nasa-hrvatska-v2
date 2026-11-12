// src/components/practice/drills/C1TemporalLocativeIdiomsDrill.tsx
//
// Engine-backed drill for the C1 lesson `temporal-locative-idioms` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/temporalLocativeIdiomsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TEMPORAL_LOCATIVE_IDIOMS_DRILL_DATA,
  TEMPORAL_LOCATIVE_IDIOMS_MODE_LABELS,
} from '../../../data/drills/c1/temporalLocativeIdiomsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1TemporalLocativeIdiomsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1temporallocativeidioms"
      title="Time and Fixed Phrases in the Locative"
      subtitle="Practise what the lesson taught"
      modeLabels={TEMPORAL_LOCATIVE_IDIOMS_MODE_LABELS}
      data={TEMPORAL_LOCATIVE_IDIOMS_DRILL_DATA}
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
