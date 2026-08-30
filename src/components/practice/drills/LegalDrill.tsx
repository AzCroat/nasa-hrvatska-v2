// src/components/practice/drills/LegalDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/legalDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { LEGAL_DRILL_DATA, LEGAL_MODE_LABELS } from '../../../data/drills/legalDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function LegalDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="pravo"
      title="⚖️ Pravni jezik"
      subtitle="temeljem + genitiv, sukladno + dativ, i rok koji se traži prvi"
      modeLabels={LEGAL_MODE_LABELS}
      data={LEGAL_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — pravomoćno! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Pravni jezik traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
