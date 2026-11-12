// src/components/practice/drills/B2PresentIvatiNutiDrill.tsx
//
// Engine-backed drill for the B2 lesson `present-ivati-nuti` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/presentIvatiNutiDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PRESENT_IVATI_NUTI_DRILL_DATA,
  PRESENT_IVATI_NUTI_MODE_LABELS,
} from '../../../data/drills/b2/presentIvatiNutiDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2PresentIvatiNutiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2presentivatinuti"
      title="Kupujem, Potpisujem, Stanem"
      subtitle="Practise what the lesson taught"
      modeLabels={PRESENT_IVATI_NUTI_MODE_LABELS}
      data={PRESENT_IVATI_NUTI_DRILL_DATA}
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
