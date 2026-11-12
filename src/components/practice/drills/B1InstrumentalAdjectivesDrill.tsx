// src/components/practice/drills/B1InstrumentalAdjectivesDrill.tsx
//
// Engine-backed drill for the B1 lesson `instrumental-adjectives` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/instrumentalAdjectivesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INSTRUMENTAL_ADJECTIVES_DRILL_DATA,
  INSTRUMENTAL_ADJECTIVES_MODE_LABELS,
} from '../../../data/drills/b1/instrumentalAdjectivesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1InstrumentalAdjectivesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1instrumentaladjectives"
      title="S mojim starim prijateljem — Adjectives in the Instrumental"
      subtitle="Practise what the lesson taught"
      modeLabels={INSTRUMENTAL_ADJECTIVES_MODE_LABELS}
      data={INSTRUMENTAL_ADJECTIVES_DRILL_DATA}
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
