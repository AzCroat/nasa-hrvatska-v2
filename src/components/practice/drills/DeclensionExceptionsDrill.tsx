// src/components/practice/drills/DeclensionExceptionsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/declensionExceptionsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DECLENSION_EXCEPTIONS_DRILL_DATA,
  DECLENSION_EXCEPTIONS_MODE_LABELS,
} from '../../../data/drills/declensionExceptionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DeclensionExceptionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="sklonidbaizn"
      title="🧩 Sklonidbene iznimke"
      subtitle="Imenice koje se ne ponašaju kao ostale"
      modeLabels={DECLENSION_EXCEPTIONS_MODE_LABELS}
      data={DECLENSION_EXCEPTIONS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — to je razina C2! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
