// src/components/practice/drills/PluralDrill.tsx
//
// A1 plural formation — the drill for the `plural-nouns` lesson.
//
// This is the whole component. Everything mechanical lives in ModeDrill and
// everything editorial lives in the bank, so a new drill costs a data file and
// these dozen lines instead of the ~400 the hand-written drills each carry.
//
// WHY THE WRAPPER EXISTS AT ALL, rather than passing the bank straight into
// ModeDrill from AppRouter: `firstPaintGraph.test.ts` forbids any src/data
// module on the first-paint path, and a static bank import in the router put
// one there. At 180 drills that would ship every bank to every learner on the
// very first load. The wrapper is lazy-loaded like any other screen, so the
// bank travels with it and arrives only when the drill is opened.

import React from 'react';
import ModeDrill from '../ModeDrill';
import { PLURAL_DRILL_DATA, PLURAL_MODE_LABELS } from '../../../data/drills/pluralDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PluralDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="pluraldrill"
      title="🔢 Množina"
      subtitle="stol → stolovi, knjiga → knjige — building the plural"
      modeLabels={PLURAL_MODE_LABELS}
      data={PLURAL_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — množina je vaša! 🏆',
        good: 'Vrlo dobro vladanje množinom! 💪',
        more: 'Množina traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
