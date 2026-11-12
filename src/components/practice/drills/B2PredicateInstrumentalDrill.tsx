// src/components/practice/drills/B2PredicateInstrumentalDrill.tsx
//
// Engine-backed drill for the B2 lesson `predicate-instrumental` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/predicateInstrumentalDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PREDICATE_INSTRUMENTAL_DRILL_DATA,
  PREDICATE_INSTRUMENTAL_MODE_LABELS,
} from '../../../data/drills/b2/predicateInstrumentalDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2PredicateInstrumentalDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2predicateinstrumental"
      title="Bio je učitelj, postao je ravnateljem"
      subtitle="Practise what the lesson taught"
      modeLabels={PREDICATE_INSTRUMENTAL_MODE_LABELS}
      data={PREDICATE_INSTRUMENTAL_DRILL_DATA}
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
