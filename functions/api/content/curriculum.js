// functions/api/content/curriculum.js
//
// THE SPINE ENDPOINT (Wave 1, 2026-08-28).
//
// Returns the curriculum's SHAPE — order, dependencies, objectives and display
// metadata — without a single slide.
//
// WHY THIS EXISTS: /api/content/lessons returns the entire LESSONS array in one
// response. That is 289 KB at 45 lessons and 1.13 MB at the 180 this curriculum
// is heading for, shipped in full to render a list. The client needs the spine to
// decide WHAT to teach; it needs one lesson's slides only once the learner opens
// it.
//
// The split is not a new invention — /api/content/catalog already does exactly
// this for stories and grammar units, projecting display metadata and leaving the
// body behind a per-id route with its own ETag. Lessons were the outlier.
//
// Each entry carries its lesson's `etag`, so the client can cache a lesson body
// indefinitely and re-fetch precisely when that one lesson changes.

import { authedRead } from './_authedRead.js';
import { ETAGS } from './_data/_etags.js';
import { CURRICULUM } from './_data/curriculum.js';
import { LESSONS } from './_data/lessons.js';

const LESSON_BY_ID = new Map(LESSONS.map((l) => [l.id, l]));

function buildSpine() {
  const data = [];
  for (const e of CURRICULUM) {
    const lesson = LESSON_BY_ID.get(e.id);
    // A spine entry with no lesson is a data defect the structural test fails on.
    // At runtime it is skipped rather than served as a broken row: a learner must
    // never be pointed at a lesson that cannot load.
    if (!lesson) continue;
    data.push({
      id: e.id,
      level: e.level,
      order: e.order,
      prerequisites: e.prerequisites,
      objectives: e.objectives,
      // Display metadata, from the lesson itself so it cannot disagree.
      title: lesson.title,
      subtitle: lesson.subtitle,
      icon: lesson.icon,
      duration: lesson.duration,
      color: lesson.color,
      bg: lesson.bg,
      // Per-lesson body etag, for caching /api/content/lessons/{id}.
      etag: ETAGS.curriculumLessons?.[e.id],
    });
  }
  return { data };
}

export async function onRequestGet(context) {
  return authedRead({
    request: context.request,
    env: context.env,
    etag: ETAGS.curriculum,
    buildBody: buildSpine,
  });
}

export const onRequestOptions = onRequestGet;
