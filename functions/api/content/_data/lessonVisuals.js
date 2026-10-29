// functions/api/content/_data/lessonVisuals.js
//
// PICTURE SLIDES (visual-learning pilot, 2026-10-29). Authored here, keyed by
// lesson id, and placed by `withVisuals` so the 180 lesson bodies are untouched
// (the lessonPractice.js shape, for the same reason: one place owns placement).
//
// A visual slide is PASSIVE: it sits in the explanation zone, after the slide it
// illustrates and before the worked examples, and it gates, scores and credits
// nothing. The renderer is `src/components/learn/LessonVisualSlide.tsx`; `kind`
// picks the picture, and an unknown kind degrades to the slide's `body` text.
//
// The first design was an illustrated drawing; the owner rejected it and supplied
// the chart he wanted ("Padezi Graphs", Dropbox): a case x gender table with the
// endings marked. `caseCharts.js` is that chart.

import { singularChartSlide, pluralChartSlide } from './caseCharts.js';

export const LESSON_VISUALS = {
  // The overview lesson: the whole chart, no row singled out.
  cases: [
    {
      after: 'The 7 Cases — Overview',
      slide: singularChartSlide({
        title: 'The 7 Cases — The Endings Chart',
        caption:
          'Read across a row to see how one case treats a feminine, a neuter and a masculine noun. The marked letters are the ending that changed.',
      }),
    },
  ],
  // The plural chart (adjectives + nouns), where the plural cases are taught.
  'plural-cases': [
    {
      after: 'The Other Three Share One Ending',
      slide: pluralChartSlide({
        title: 'The Plural Cases — The Endings Chart',
        caption:
          'The same seven cases in the plural, with an adjective in front of each noun: both endings are marked. Notice how few endings there are: the dative, locative and instrumental plural share one ending — -ima on masculine and neuter nouns, -ama on feminine ones, and -im on the adjective.',
      }),
    },
  ],
  // The same chart with the lesson's own case picked out.
  'locative-intro': [
    {
      after: 'Feminine Takes -i',
      slide: singularChartSlide({
        title: 'The Locative in the Chart',
        highlight: 'Lsg',
        caption:
          'The Lokativ row is the one this lesson is about. Compare it with the Akuzativ row: moving INTO a place takes the accusative, being IN it takes the locative.',
      }),
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
