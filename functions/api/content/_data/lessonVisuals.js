// functions/api/content/_data/lessonVisuals.js
//
// PICTURE SLIDES (visual-learning pilot, 2026-10-29). Authored here, keyed by
// lesson id, and placed by `withVisuals` so the 180 lesson bodies are untouched
// (the lessonPractice.js shape, for the same reason: one place owns placement).
//
// A visual slide is PASSIVE: it sits in the explanation zone, after the rule it
// illustrates and before the worked examples, and it gates, scores and credits
// nothing. The renderer is `src/components/learn/LessonVisualSlide.tsx`; `kind`
// picks the diagram, and an unknown kind degrades to the slide's `body` text.
//
// Pilot, PR 1: motion-versus-rest in the A1 locative lesson. Every Croatian form
// below is asserted against the app's own declension engine by
// src/tests/lessonVisuals.test.tsx — a wrong ending in a picture is worse than
// no picture.

export const LESSON_VISUALS = {
  'locative-intro': [
    {
      // The slide this picture illustrates. Matched by title; a missing title
      // is a test failure, never a silent skip.
      after: 'Kamo? and Gdje?',
      slide: {
        type: 'visual',
        kind: 'motion-rest',
        title: 'See the Difference',
        alt: 'Two pictures side by side. On the left a person walks toward a building: movement into a place, so the noun is accusative (u školu). On the right the person is already inside: no movement, so the noun is locative (u školi).',
        caption:
          'The little word u stays the same. The ending tells the story: moving INTO the place takes the accusative (školu), being there takes the locative (školi). Na works the same way: Idem na tržnicu. / Ja sam na tržnici.',
        panels: [
          {
            q: 'Kamo?',
            qEn: 'Where to?',
            caseName: 'accusative',
            motion: 'movement',
            hr: 'Idem u školu.',
            focus: 'školu',
            en: 'I am going into the school.',
          },
          {
            q: 'Gdje?',
            qEn: 'Where?',
            caseName: 'locative',
            motion: 'no movement',
            hr: 'Ja sam u školi.',
            focus: 'školi',
            en: 'I am in the school.',
          },
        ],
      },
    },
  ],
};

export function withVisuals(lessons) {
  return lessons.map((lesson) => {
    const extras = LESSON_VISUALS[lesson.id];
    if (!extras) return lesson;
    const slides = [...lesson.slides];
    for (const { after, slide } of extras) {
      const at = slides.findIndex((s) => s.title === after && s.type !== 'visual');
      if (at < 0) continue; // pinned by lessonVisuals.test.tsx: a missing anchor fails the build
      slides.splice(at + 1, 0, slide);
    }
    return { ...lesson, slides };
  });
}
