// src/lib/sessionServed.ts
//
// Wave 1: map of screen key → last date it appeared in a built daily session.
// Written on every session build (useDailySession.recordServedScreens); read by
// the Priority-3 discovery slot (least-recently-served ordering), the Croatia
// rotation, and the P2.8 comprehension slot (which kind — listening or reading
// — was served less recently). Never pruned — a few hundred screen keys with
// date strings is negligible storage. Extracted from useDailySession.ts for
// max-lines when the comprehension slot needed it from a second module.

export const SERVED_KEY = 'nh_session_served';

export function readServedMap(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(SERVED_KEY) || '{}') as Record<string, string>;
  } catch {
    return {};
  }
}
