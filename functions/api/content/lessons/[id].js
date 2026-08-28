// functions/api/content/lessons/[id].js
//
// ONE LESSON'S BODY (Wave 1, 2026-08-28).
//
// The other half of the payload split described in curriculum.js: the spine says
// what to teach, this returns the slides for the one lesson the learner opened.
// Per-lesson ETag, so a client caches a lesson until that lesson itself changes —
// not until any of the other 179 do.
//
// Mirrors functions/api/content/stories/[id].js exactly, including the 404 shape.

import { authedRead } from '../_authedRead.js';
import { ETAGS } from '../_data/_etags.js';
import { LESSONS } from '../_data/lessons.js';

const LESSON_BY_ID = new Map(LESSONS.map((l) => [l.id, l]));

export async function onRequestGet(context) {
  const { id } = context.params;
  const lesson = LESSON_BY_ID.get(id);
  const etag = ETAGS.curriculumLessons?.[id];

  if (!lesson || !etag) {
    return new Response(JSON.stringify({ error: 'not_found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return authedRead({
    request: context.request,
    env: context.env,
    etag,
    buildBody: () => ({ data: lesson }),
  });
}

export const onRequestOptions = onRequestGet;
