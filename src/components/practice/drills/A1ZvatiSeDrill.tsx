// src/components/practice/drills/A1ZvatiSeDrill.tsx
//
// Engine-backed drill for the A1 lesson `zvati-se` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/zvatiSeDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { ZVATI_SE_DRILL_DATA, ZVATI_SE_MODE_LABELS } from '../../../data/drills/a1/zvatiSeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1ZvatiSeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1zvatise"
      title="What Is Your Name?"
      subtitle="Practise what the lesson taught"
      modeLabels={ZVATI_SE_MODE_LABELS}
      data={ZVATI_SE_DRILL_DATA}
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
