// src/components/practice/drills/B1VerbPrefixesDrill.tsx
//
// Engine-backed drill for the B1 lesson `verb-prefixes` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/verbPrefixesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VERB_PREFIXES_DRILL_DATA,
  VERB_PREFIXES_MODE_LABELS,
} from '../../../data/drills/b1/verbPrefixesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1VerbPrefixesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1verbprefixes"
      title="ući, izaći, potpisati — Verb Prefixes"
      subtitle="Practise what the lesson taught"
      modeLabels={VERB_PREFIXES_MODE_LABELS}
      data={VERB_PREFIXES_DRILL_DATA}
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
