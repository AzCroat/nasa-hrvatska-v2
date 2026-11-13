// src/components/practice/drills/B2InternetSocietyDrill.tsx
//
// Engine-backed drill for the B2 lesson `internet-society` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/internetSocietyDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INTERNET_SOCIETY_DRILL_DATA,
  INTERNET_SOCIETY_MODE_LABELS,
} from '../../../data/drills/b2/internetSocietyDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2InternetSocietyDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2internetsociety"
      title="Living Online"
      subtitle="Practise what the lesson taught"
      modeLabels={INTERNET_SOCIETY_MODE_LABELS}
      data={INTERNET_SOCIETY_DRILL_DATA}
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
