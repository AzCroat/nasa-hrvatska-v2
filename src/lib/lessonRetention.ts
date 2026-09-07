// src/lib/lessonRetention.ts
//
// LESSON RETENTION — what makes a passed lesson STAY passed (owner directive,
// 2026-09-07: "make sure the progress made is being retained on the path to
// fluency").
//
// The gap this closes: the mastery check (lessonCheck.ts) is one-shot. Once a
// lesson is passed nothing ever re-tests it, a missed check item is thrown
// away the moment the summary renders, and the spaced-repetition engine
// (srs.ts) holds VOCABULARY only. A learner could pass all 180 lessons and
// never be asked a grammar question twice.
//
// Three mechanisms, one store:
//   1. RE-CHECKS — a passed lesson is re-checked after 3, 10, 30 and then
//      every 90 days (RETENTION_INTERVALS) with a DIFFERENT sample of its
//      check items. A pass advances the stage; a fail (below the shared 75%
//      threshold) resets it to the start of the ladder, brings the lesson
//      back TOMORROW, and re-queues its coupled drill through the existing
//      teach→practice queue — the app already knows which drill teaches it.
//   2. ITEM CARDS — every check item the learner misses, on any surface,
//      becomes a card scheduled by the SAME FSRS the vocabulary deck uses
//      (srs.ts `sm2`), so a grammar slip decays and resurfaces exactly like a
//      forgotten word. A card is only ever created by a miss; a correct answer
//      on a card advances it.
//   3. THE WEEKLY CUMULATIVE — once five lessons are passed, every seven days
//      a mixed check samples across EVERY passed lesson. Single-topic checks
//      cannot see interference errors (the accusative bleeding into the
//      genitive); a mix can. Two misses from one lesson in a cumulative pull
//      that lesson's re-check forward to tomorrow.
//
// All three are served by ONE screen ('lessonreview', RetentionCheckScreen)
// from ONE queue (`buildRetentionQueue`), so the session slot, the next-step
// engine and the Practice card have a single thing to point at.
//
// Storage: `nh_lesson_retention`, localStorage, synced ADDITIVELY through the
// progress snapshot (see mergeLessonRetention — later evidence wins, a lesson
// never un-passes, a card never disappears). Dates are local YYYY-MM-DD from
// dateUtils; card timestamps are ms because sm2 speaks ms.
//
// Nothing here reads lesson CONTENT — the queue builder takes the lessons as
// an argument, so this module stays importable from the session builder
// without dragging lesson data onto the first-paint path.

import { localDateStr } from './dateUtils';
import { sm2 } from './srs';
import { recordLessonTaught } from './teachPractice';
import { LESSON_PASS_THRESHOLD, MIN_CHECK_ITEMS, shuffledOrder } from './lessonCheck';
import type { LessonCheckItem } from './lessonCheck';

export const LESSON_RETENTION_KEY = 'nh_lesson_retention';

/** Days after a pass (stage 0), then after each successful re-check. The last
 *  interval repeats: a lesson retained at 90 days is asked again in 90. */
export const RETENTION_INTERVALS = [3, 10, 30, 90] as const;
/** Passed lessons needed before the weekly cumulative starts. */
export const CUMULATIVE_MIN_LESSONS = 5;
/** Days between cumulative checks. */
export const CUMULATIVE_EVERY_DAYS = 7;
/** Items in a cumulative check. */
export const CUMULATIVE_ITEMS = 10;
/** Most re-checks served in one sitting, most due cards, and the sitting cap.
 *  Twelve items is three to five minutes — a session activity, not an exam. */
export const MAX_RECHECKS_PER_QUEUE = 2;
export const MAX_CARDS_PER_QUEUE = 4;
export const MAX_QUEUE = 12;

export type RetentionKind = 'mastery' | 'retention' | 'cumulative';

/**
 * One scheduled item card. The FIELDS ARE srs.ts's FSRS card (`sm2` returns
 * this shape) — declared here rather than imported because that interface is
 * internal to srs.ts and these cards live in a DIFFERENT store: widening the
 * vocabulary module's API to share a type would invite someone to merge the
 * two maps, and a grammar item is not a word. `due` is ms, like every FSRS
 * field; `last` is when this card was last answered. */
export interface RetentionCard {
  s: number;
  d: number;
  r: number;
  w: number;
  l: number;
  b: number;
  due: number;
  nextDue: number;
  last: number;
  [key: string]: number | undefined;
}

export interface LessonRetentionRecord {
  /** Date of the FIRST mastery pass (never rewritten). */
  passedAt: string;
  /** Position on the interval ladder. 0 = passed, awaiting the 3-day check. */
  stage: number;
  /** Next re-check date (YYYY-MM-DD). */
  due: string;
  /** How many checks of any kind this lesson has been through. Drives the
   *  rotating sample so successive re-checks ask different items. */
  checks: number;
  last: { at: string; score: number; total: number; kind: RetentionKind };
  /** The "use it now" production step, when it was graded. */
  produced?: { at: string; score: number };
}

export interface RetentionStore {
  v: 1;
  lessons: Record<string, LessonRetentionRecord>;
  /** Missed check items, keyed `${lessonId}#${itemIndex}`; FSRS-scheduled. */
  items: Record<string, RetentionCard>;
  cumulative: { lastAt: string | null; count: number };
}

export function emptyRetention(): RetentionStore {
  return { v: 1, lessons: {}, items: {}, cumulative: { lastAt: null, count: 0 } };
}

export function itemKey(lessonId: string, idx: number): string {
  return `${lessonId}#${idx}`;
}

// ── Dates ───────────────────────────────────────────────────────────────────

function parseDay(d: string): number {
  const [y, m, day] = d.split('-').map(Number);
  return Date.UTC(y || 1970, (m || 1) - 1, day || 1);
}

export function addDays(d: string, n: number): string {
  const t = new Date(parseDay(d) + n * 86400000);
  return `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, '0')}-${String(
    t.getUTCDate(),
  ).padStart(2, '0')}`;
}

export function daysBetween(from: string, to: string): number {
  return Math.round((parseDay(to) - parseDay(from)) / 86400000);
}

function intervalFor(stage: number): number {
  return RETENTION_INTERVALS[Math.min(Math.max(stage, 0), RETENTION_INTERVALS.length - 1)]!;
}

// ── Storage ─────────────────────────────────────────────────────────────────

export function readRetention(): RetentionStore {
  try {
    const raw = localStorage.getItem(LESSON_RETENTION_KEY);
    if (!raw) return emptyRetention();
    const v = JSON.parse(raw) as Partial<RetentionStore>;
    return sanitizeRetention(v);
  } catch {
    return emptyRetention();
  }
}

export function writeRetention(store: RetentionStore): void {
  try {
    localStorage.setItem(LESSON_RETENTION_KEY, JSON.stringify(store));
  } catch {
    /* a full quota must never break a check */
  }
}

/** A store from the wire or disk, with anything malformed dropped rather than
 *  trusted — a record without a due date cannot be scheduled. */
export function sanitizeRetention(v: unknown): RetentionStore {
  const out = emptyRetention();
  if (!v || typeof v !== 'object') return out;
  const s = v as Partial<RetentionStore>;
  if (s.lessons && typeof s.lessons === 'object') {
    for (const [id, r] of Object.entries(s.lessons)) {
      if (
        r &&
        typeof r === 'object' &&
        typeof r.passedAt === 'string' &&
        typeof r.due === 'string' &&
        typeof r.stage === 'number' &&
        r.last &&
        typeof r.last.at === 'string'
      ) {
        out.lessons[id] = {
          passedAt: r.passedAt,
          stage: Math.max(0, Math.floor(r.stage)),
          due: r.due,
          checks: typeof r.checks === 'number' ? r.checks : 1,
          last: {
            at: r.last.at,
            score: Number(r.last.score) || 0,
            total: Number(r.last.total) || 0,
            kind:
              r.last.kind === 'retention' || r.last.kind === 'cumulative' ? r.last.kind : 'mastery',
          },
          ...(r.produced && typeof r.produced.at === 'string'
            ? { produced: { at: r.produced.at, score: Number(r.produced.score) || 0 } }
            : {}),
        };
      }
    }
  }
  if (s.items && typeof s.items === 'object') {
    for (const [k, c] of Object.entries(s.items)) {
      if (c && typeof c === 'object' && typeof c.due === 'number' && k.includes('#')) {
        out.items[k] = { ...c, last: typeof c.last === 'number' ? c.last : c.due };
      }
    }
  }
  if (s.cumulative && typeof s.cumulative === 'object') {
    out.cumulative = {
      lastAt: typeof s.cumulative.lastAt === 'string' ? s.cumulative.lastAt : null,
      count: Number(s.cumulative.count) || 0,
    };
  }
  return out;
}

/** The store, or undefined when it holds nothing — for the progress snapshot,
 *  so a fresh device never clobbers server history with its empty state. */
export function retentionOrUndef(): RetentionStore | undefined {
  const s = readRetention();
  return Object.keys(s.lessons).length > 0 || Object.keys(s.items).length > 0 ? s : undefined;
}

// ── Recording ───────────────────────────────────────────────────────────────

export interface ItemResult {
  idx: number;
  correct: boolean;
}

/** What produced these results. 'card' touches the cards only: a due card is
 *  one loose item, not a verdict on the lesson, so it must not advance a
 *  ladder or trip the cumulative's pull-forward rule. */
export type ResultKind = 'retention' | 'cumulative' | 'card';

function touchItems(store: RetentionStore, lessonId: string, results: ItemResult[], now: number) {
  for (const r of results) {
    const key = itemKey(lessonId, r.idx);
    const existing = store.items[key];
    if (r.correct && !existing) continue; // only a miss creates a card
    const next = sm2(existing ?? null, r.correct ? 4 : 1);
    store.items[key] = { ...next, last: now } as RetentionCard;
  }
}

/**
 * The mastery check was PASSED (AnimatedLesson calls this beside
 * markLessonComplete). Creates the lesson's retention record — first pass
 * only; a re-pass from the Learn path keeps the existing ladder — and cards
 * for whatever was missed on the way to the pass.
 */
export function recordMasteryPass(
  lessonId: string,
  args: { score: number; total: number; results: ItemResult[]; at?: string; now?: number },
): void {
  if (!lessonId) return;
  const at = args.at ?? localDateStr();
  const now = args.now ?? Date.now();
  const store = readRetention();
  const existing = store.lessons[lessonId];
  if (!existing) {
    store.lessons[lessonId] = {
      passedAt: at,
      stage: 0,
      due: addDays(at, intervalFor(0)),
      checks: 1,
      last: { at, score: args.score, total: args.total, kind: 'mastery' },
    };
  } else {
    existing.checks += 1;
    existing.last = { at, score: args.score, total: args.total, kind: 'mastery' };
  }
  touchItems(store, lessonId, args.results, now);
  writeRetention(store);
}

/**
 * A re-check or a cumulative check finished for ONE lesson's items.
 *  - retention: pass → next rung of the ladder; fail → back to the start, due
 *    tomorrow, coupled drill re-queued (the app already knows which drill
 *    teaches this lesson — recordLessonTaught is the existing queue write).
 *  - cumulative: the ladder is untouched unless two or more items from this
 *    lesson were missed, which pulls its re-check forward to tomorrow.
 * Every item result updates the cards either way.
 */
export function recordRetentionResult(
  lessonId: string,
  args: { kind: ResultKind; results: ItemResult[]; at?: string; now?: number },
): { passed: boolean } {
  const at = args.at ?? localDateStr();
  const now = args.now ?? Date.now();
  const store = readRetention();
  const rec = store.lessons[lessonId];
  const correct = args.results.filter((r) => r.correct).length;
  const total = args.results.length;
  const passed = total > 0 && correct / total >= LESSON_PASS_THRESHOLD;
  touchItems(store, lessonId, args.results, now);
  if (rec && args.kind !== 'card') {
    rec.checks += 1;
    if (args.kind === 'retention') {
      rec.last = { at, score: correct, total, kind: 'retention' };
      if (passed) {
        rec.stage += 1;
        rec.due = addDays(at, intervalFor(rec.stage));
      } else {
        rec.stage = 0;
        rec.due = addDays(at, 1);
        recordLessonTaught(lessonId);
      }
    } else if (total - correct >= 2) {
      const tomorrow = addDays(at, 1);
      if (rec.due > tomorrow) rec.due = tomorrow;
    }
  }
  writeRetention(store);
  return { passed };
}

/** A cumulative check was served today. */
export function recordCumulativeServed(at: string = localDateStr()): void {
  const store = readRetention();
  store.cumulative = { lastAt: at, count: store.cumulative.count + 1 };
  writeRetention(store);
}

/** The "use it now" production step was graded. */
export function markLessonProduced(lessonId: string, score: number, at: string = localDateStr()) {
  const store = readRetention();
  const rec = store.lessons[lessonId];
  if (!rec) return;
  rec.produced = { at, score };
  writeRetention(store);
}

// ── What is due ─────────────────────────────────────────────────────────────

export interface RetentionStatus {
  /** Lessons whose re-check is due, soonest-overdue first. */
  rechecks: Array<{ lessonId: string; due: string; daysSincePass: number; stage: number }>;
  /** Missed items due for another try. */
  cardsDue: number;
  cumulativeDue: boolean;
  passedCount: number;
  any: boolean;
}

export function isCumulativeDue(store: RetentionStore, today: string): boolean {
  if (Object.keys(store.lessons).length < CUMULATIVE_MIN_LESSONS) return false;
  const last = store.cumulative.lastAt;
  return !last || daysBetween(last, today) >= CUMULATIVE_EVERY_DAYS;
}

export function retentionStatus(
  store: RetentionStore = readRetention(),
  today: string = localDateStr(),
  now: number = Date.now(),
): RetentionStatus {
  const rechecks = Object.entries(store.lessons)
    .filter(([, r]) => r.due <= today)
    .map(([lessonId, r]) => ({
      lessonId,
      due: r.due,
      daysSincePass: daysBetween(r.passedAt, today),
      stage: r.stage,
    }))
    .sort((a, b) => (a.due < b.due ? -1 : a.due > b.due ? 1 : 0));
  const cardsDue = Object.values(store.items).filter((c) => c.due <= now).length;
  const cumulativeDue = isCumulativeDue(store, today);
  return {
    rechecks,
    cardsDue,
    cumulativeDue,
    passedCount: Object.keys(store.lessons).length,
    any: rechecks.length > 0 || cardsDue > 0 || cumulativeDue,
  };
}

// ── The queue ───────────────────────────────────────────────────────────────

export interface LessonWithCheck {
  id: string;
  title?: string;
  slides?: Array<{ type?: string; items?: unknown }>;
}

export type RetentionPart = 'recheck' | 'card' | 'cumulative';

export interface RetentionQueueItem {
  lessonId: string;
  lessonTitle: string;
  idx: number;
  item: LessonCheckItem;
  part: RetentionPart;
}

function checkItemsOf(lesson: LessonWithCheck): LessonCheckItem[] {
  const slide = (lesson.slides ?? []).find((s) => s && s.type === 'check');
  const raw = slide && Array.isArray(slide.items) ? (slide.items as unknown[]) : [];
  return raw.filter(
    (it): it is LessonCheckItem =>
      !!it &&
      typeof it === 'object' &&
      typeof (it as LessonCheckItem).q === 'string' &&
      Array.isArray((it as LessonCheckItem).options) &&
      Number.isInteger((it as LessonCheckItem).correct),
  );
}

function seedFromDay(today: string): number {
  let h = 0;
  for (const ch of today) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

/**
 * Compose one sitting. Deterministic for a given day, so a re-render or a
 * resumed screen serves the same queue.
 *
 * ORDER OF CLAIM ON THE 12-ITEM SITTING, and the reason for it — the first
 * draft ran re-checks first and the test caught what that costs: two due
 * re-checks fill the sitting on their own, so on a day when both are due the
 * WEEKLY CUMULATIVE never runs at all. A weekly signal that any busy week can
 * silently cancel is not a weekly signal.
 *   1. The cumulative, when due. It samples across every passed lesson, so it
 *      is the broadest signal available and it comes round once a week.
 *   2. Due cards — the learner's OWN recorded misses, and the cheapest items
 *      to serve.
 *   3. Due re-checks, and ONLY WHOLE ONES: a re-check's verdict advances or
 *      resets a ladder, so it must be a full MIN_CHECK_ITEMS sample. A
 *      truncated one would grade a lesson on whatever happened to fit. A
 *      crowded-out re-check is still due tomorrow, and if the cumulative that
 *      displaced it found two misses in that lesson it has already been
 *      pulled forward.
 */
export function buildRetentionQueue(
  lessons: LessonWithCheck[],
  store: RetentionStore = readRetention(),
  today: string = localDateStr(),
  now: number = Date.now(),
): RetentionQueueItem[] {
  const byId = new Map(lessons.map((l) => [l.id, l]));
  const status = retentionStatus(store, today, now);
  const queue: RetentionQueueItem[] = [];
  const queued = new Set<string>();
  const seed = seedFromDay(today);
  const push = (lessonId: string, idx: number, item: LessonCheckItem, part: RetentionPart) => {
    const key = itemKey(lessonId, idx);
    if (queued.has(key) || queue.length >= MAX_QUEUE) return;
    queued.add(key);
    queue.push({ lessonId, lessonTitle: byId.get(lessonId)?.title || lessonId, idx, item, part });
  };

  // 1. The cumulative mix: one item per passed lesson, round-robin over a
  //    day-seeded order, most recently passed first.
  if (status.cumulativeDue) {
    const passed = Object.entries(store.lessons)
      .filter(([id]) => byId.has(id))
      .sort((a, b) => (a[1].passedAt > b[1].passedAt ? -1 : a[1].passedAt < b[1].passedAt ? 1 : 0))
      .map(([id]) => id);
    const order = shuffledOrder(passed.length, seed, 0).map((i) => passed[i]!);
    let added = 0;
    let round = 0;
    while (added < CUMULATIVE_ITEMS && round < 4 && queue.length < MAX_QUEUE) {
      let any = false;
      for (const id of order) {
        if (added >= CUMULATIVE_ITEMS) break;
        const items = checkItemsOf(byId.get(id)!);
        if (items.length === 0) continue;
        const pick = shuffledOrder(items.length, seed, round + 1)[round % items.length]!;
        if (queued.has(itemKey(id, pick))) continue;
        push(id, pick, items[pick]!, 'cumulative');
        added++;
        any = true;
      }
      if (!any) break;
      round++;
    }
  }

  // 2. Due cards, most overdue first.
  const dueCards = Object.entries(store.items)
    .filter(([, c]) => c.due <= now)
    .sort((a, b) => a[1].due - b[1].due)
    .slice(0, MAX_CARDS_PER_QUEUE);
  for (const [key] of dueCards) {
    const [lessonId, idxStr] = key.split('#');
    const idx = Number(idxStr);
    const lesson = lessonId ? byId.get(lessonId) : undefined;
    const items = lesson ? checkItemsOf(lesson) : [];
    if (lessonId && items[idx]) push(lessonId, idx, items[idx]!, 'card');
  }

  // 3. Whole re-checks only, while a whole one still fits.
  let servedRechecks = 0;
  for (const rc of status.rechecks) {
    if (servedRechecks >= MAX_RECHECKS_PER_QUEUE) break;
    if (MAX_QUEUE - queue.length < MIN_CHECK_ITEMS) break;
    const lesson = byId.get(rc.lessonId);
    if (!lesson) continue;
    const items = checkItemsOf(lesson);
    if (items.length < MIN_CHECK_ITEMS) continue;
    const rec = store.lessons[rc.lessonId]!;
    const missed = items
      .map((_, i) => i)
      .filter((i) => store.items[itemKey(rc.lessonId, i)] !== undefined);
    const rest = items.map((_, i) => i).filter((i) => !missed.includes(i));
    const rotate = (rec.checks * MIN_CHECK_ITEMS) % Math.max(1, rest.length);
    const rotated = [...rest.slice(rotate), ...rest.slice(0, rotate)];
    for (const i of [...missed, ...rotated].slice(0, MIN_CHECK_ITEMS)) {
      push(rc.lessonId, i, items[i]!, 'recheck');
    }
    servedRechecks++;
  }
  return queue;
}

// ── Sync merge ──────────────────────────────────────────────────────────────

/**
 * ADDITIVE, like every merge in this app: a lesson known to either side stays
 * known (never un-pass); where both know a lesson the record with the LATER
 * last-check date wins the ladder (new evidence outranks old), the earlier
 * passedAt is kept, and check counts take the max. Cards: the later-reviewed
 * copy wins. The cumulative marker takes the later date.
 */
export function mergeLessonRetention(local: RetentionStore, remote: unknown): RetentionStore {
  const r = sanitizeRetention(remote);
  const out: RetentionStore = {
    v: 1,
    lessons: { ...local.lessons },
    items: { ...local.items },
    cumulative: { ...local.cumulative },
  };
  for (const [id, rr] of Object.entries(r.lessons)) {
    const lr = out.lessons[id];
    if (!lr) {
      out.lessons[id] = rr;
      continue;
    }
    const remoteNewer = rr.last.at > lr.last.at;
    const winner = remoteNewer ? rr : lr;
    const produced = [lr.produced, rr.produced]
      .filter((p): p is { at: string; score: number } => !!p)
      .sort((a, b) => (a.at > b.at ? -1 : 1))[0];
    out.lessons[id] = {
      ...winner,
      passedAt: lr.passedAt < rr.passedAt ? lr.passedAt : rr.passedAt,
      checks: Math.max(lr.checks, rr.checks),
      ...(produced ? { produced } : {}),
    };
  }
  for (const [k, rc] of Object.entries(r.items)) {
    const lc = out.items[k];
    if (!lc || rc.last > lc.last) out.items[k] = rc;
  }
  const la = out.cumulative.lastAt ?? '';
  const ra = r.cumulative.lastAt ?? '';
  out.cumulative = {
    lastAt: ra > la ? ra : la || null,
    count: Math.max(out.cumulative.count, r.cumulative.count),
  };
  return out;
}
