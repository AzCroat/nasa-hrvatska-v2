// src/components/practice/drills/A1ColoursDrill.tsx
//
// Engine-backed drill for the A1 lesson `colours` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/coloursDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { COLOURS_DRILL_DATA, COLOURS_MODE_LABELS } from '../../../data/drills/a1/coloursDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1ColoursDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1colours"
      title="Colours"
      subtitle="Practise what the lesson taught"
      modeLabels={COLOURS_MODE_LABELS}
      data={COLOURS_DRILL_DATA}
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
