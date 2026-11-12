// src/components/practice/drills/A1BoljetiDrill.tsx
//
// Engine-backed drill for the A1 lesson `boljeti` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/boljetiDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { BOLJETI_DRILL_DATA, BOLJETI_MODE_LABELS } from '../../../data/drills/a1/boljetiDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1BoljetiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1boljeti"
      title="What Hurts? — boljeti"
      subtitle="Practise what the lesson taught"
      modeLabels={BOLJETI_MODE_LABELS}
      data={BOLJETI_DRILL_DATA}
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
