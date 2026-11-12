// src/components/practice/drills/C1INounsMatiKciDrill.tsx
//
// Engine-backed drill for the C1 lesson `i-nouns-mati-kci` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/iNounsMatiKciDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  I_NOUNS_MATI_KCI_DRILL_DATA,
  I_NOUNS_MATI_KCI_MODE_LABELS,
} from '../../../data/drills/c1/iNounsMatiKciDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1INounsMatiKciDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1inounsmatikci"
      title="With Joy, at Night, to My Daughter"
      subtitle="Practise what the lesson taught"
      modeLabels={I_NOUNS_MATI_KCI_MODE_LABELS}
      data={I_NOUNS_MATI_KCI_DRILL_DATA}
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
