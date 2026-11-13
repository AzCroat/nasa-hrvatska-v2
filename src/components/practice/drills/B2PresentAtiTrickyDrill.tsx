// src/components/practice/drills/B2PresentAtiTrickyDrill.tsx
//
// Engine-backed drill for the B2 lesson `present-ati-tricky` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/presentAtiTrickyDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PRESENT_ATI_TRICKY_DRILL_DATA,
  PRESENT_ATI_TRICKY_MODE_LABELS,
} from '../../../data/drills/b2/presentAtiTrickyDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2PresentAtiTrickyDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2presentatitricky"
      title="Pišem, Šaljem, Zovem"
      subtitle="Practise what the lesson taught"
      modeLabels={PRESENT_ATI_TRICKY_MODE_LABELS}
      data={PRESENT_ATI_TRICKY_DRILL_DATA}
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
