// ─── lessonSlideTypes.ts ──────────────────────────────────────────────────────
// Shared slide/lesson shapes for AnimatedLesson's slide components. In its own
// module so LessonCheckSlide and LessonSummarySlide (split out of LessonSlides
// at the 800-line cap) can import them without importing LessonSlides — which
// re-exports them, and the cycle failed check:circular (2026-09-07).

export interface LessonMeta {
  color: string;
  bg: string;
  icon?: string;
  title?: string;
  [key: string]: unknown;
}

export interface SlideItem {
  hr: string;
  en?: string;
  note?: string;
  [key: string]: unknown;
}

export interface BaseSlide {
  type?: string;
  title?: string;
  body?: string;
  icon?: string;
  highlight?: string;
  items?: SlideItem[];
  headers?: string[];
  rows?: string[][];
  q?: string;
  options?: string[];
  correct?: number;
  explanation?: string;
  points?: string[];
  [key: string]: unknown;
}
