// src/components/practice/drills/A2OfficialFormsDrill.tsx
//
// Engine-backed drill for the A2 lesson `official-forms` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/officialFormsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  OFFICIAL_FORMS_DRILL_DATA,
  OFFICIAL_FORMS_MODE_LABELS,
} from '../../../data/drills/a2/officialFormsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2OfficialFormsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2officialforms"
      title="Filling In a Form"
      subtitle="Practise what the lesson taught"
      modeLabels={OFFICIAL_FORMS_MODE_LABELS}
      data={OFFICIAL_FORMS_DRILL_DATA}
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
