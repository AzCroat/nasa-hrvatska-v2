/**
 * retentionWholeRecheck — a re-check's verdict moves a ladder, so it must be a
 * WHOLE sample (2026-09-23)
 *
 * `buildRetentionQueue`'s own ordering comment already said this:
 *
 *   "3. Due re-checks, and ONLY WHOLE ONES: a re-check's verdict advances or
 *    resets a ladder, so it must be a full MIN_CHECK_ITEMS sample. A truncated
 *    one would grade a lesson on whatever happened to fit."
 *
 * It was not true. `push()` silently drops an item already queued, and the
 * cumulative (step 1) and the due cards (step 2) both claim items BEFORE the
 * re-check does — including items of the very lesson being re-checked. So the
 * re-check came out at 5 or 4 of 6 and `recordRetentionResult` graded the
 * ladder on that.
 *
 * THE BIAS RAN ONE WAY, which is what makes it worth fixing rather than
 * tolerating. The re-check's sample leads with `missed` — and an item is in
 * `missed` exactly when it has a card. So the items a card stole were the
 * learner's KNOWN-WEAK ones, and the lesson's ladder advanced on the questions
 * they already get right, at the moment they were weakest.
 *
 * Measured before the fix, 20 lessons x 400 days of a learner who answers
 * everything served: 120 re-checks, 7 truncated, every one of them 5/6 with
 * the weak item taken by a card.
 *
 * THE FIX IS A RESERVATION, NOT A SKIP, and the difference is a livelock.
 * "Serve the re-check only if nothing took its items" defers the ladder for as
 * long as a card stays due — and a card the learner keeps failing is due again
 * every single day, so that lesson's ladder would freeze permanently for the
 * learner who most needs it to move. Reserving the lesson's items from the
 * earlier steps instead costs nothing: the learner still answers those items
 * today, because they are the first thing the re-check asks.
 *
 * Measured after: truncated 7 -> 0, re-checks served 120 -> 120 (none lost),
 * cumulative items 580 -> 580 and card items 500 -> 500, both unchanged. The
 * fix costs the sitting nothing at all.
 *
 * THE CUMULATIVE IS DELIBERATELY NOT RESERVED. A first version reserved there
 * too, on the assumption it was the same hazard. Measured over 4,000 generated
 * stores: a queue holding cumulative items served ZERO re-checks, because
 * CUMULATIVE_ITEMS (10) of MAX_QUEUE (12) leaves less than MIN_CHECK_ITEMS and
 * step 3 breaks out first. So reserving there could not prevent a truncation —
 * all it did was shrink the cumulative on days a re-check was due, which is the
 * crowding-out the documented order exists to prevent. Removing it also made
 * this suite STRONGER: with it in place, deleting the card reservation failed 2
 * tests; without it, 4. Dead code had been masking the guard.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  buildRetentionQueue,
  recordMasteryPass,
  recordRetentionResult,
  recordCumulativeServed,
  readRetention,
  itemKey,
  MAX_RECHECKS_PER_QUEUE,
} from '../lib/lessonRetention';
import { MIN_CHECK_ITEMS } from '../lib/lessonCheck';

function mk(id: string, n = MIN_CHECK_ITEMS) {
  return {
    id,
    title: id,
    slides: [
      {
        type: 'check',
        items: Array.from({ length: n }, (_, i) => ({
          q: `${id} q${i}`,
          options: ['a', 'b', 'c', 'd'],
          correct: 0,
        })),
      },
    ],
  };
}
const day = (base: string, n: number) =>
  new Date(Date.parse(base + 'T12:00:00Z') + n * 86400000).toISOString().slice(0, 10);
const at = (d: string) => Date.parse(d + 'T12:00:00Z');

beforeEach(() => localStorage.clear());

/** A store where `lesson` has a re-check due today AND cards due for `cardIdx`. */
function storeWithDueRecheckAndCards(lessonId: string, today: string, cardIdx: number[]) {
  const now = at(today);
  return {
    lessons: {
      [lessonId]: {
        passedAt: '2026-08-01',
        stage: 0,
        due: today,
        checks: 2,
        last: { at: day(today, -1), score: 3, total: 6, kind: 'retention' as const },
      },
    },
    items: Object.fromEntries(
      cardIdx.map((i) => [
        itemKey(lessonId, i),
        { due: now - 86400000, ease: 2.5, interval: 1, reps: 1, lapses: 1 },
      ]),
    ),
    cumulative: { lastAt: today, count: 1 },
  };
}

describe('a due re-check is served whole or not at all', () => {
  it('a due CARD of the same lesson cannot truncate its re-check', () => {
    const today = '2026-09-23';
    const L = mk('cases');
    const q = buildRetentionQueue(
      [L] as never,
      storeWithDueRecheckAndCards('cases', today, [1, 4]) as never,
      today,
      at(today),
    );
    const recheck = q.filter((i) => i.part === 'recheck');
    expect(recheck).toHaveLength(MIN_CHECK_ITEMS);
    // and the items the cards would have taken are IN it, not missing from it
    expect(recheck.map((i) => i.idx).sort()).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it('the re-check still leads with the missed items', () => {
    // The reservation must not change WHICH items a re-check asks, only who
    // gets to claim them first.
    const today = '2026-09-23';
    const q = buildRetentionQueue(
      [mk('cases')] as never,
      storeWithDueRecheckAndCards('cases', today, [4, 5]) as never,
      today,
      at(today),
    );
    const recheck = q.filter((i) => i.part === 'recheck').map((i) => i.idx);
    expect(recheck.slice(0, 2).sort()).toEqual([4, 5]);
  });

  it('PROPERTY — across many store shapes, no re-check is ever served partial', () => {
    // Hand-built scenarios kept encoding MY assumptions rather than the
    // scheduler's behaviour: two of them asserted a re-check would be crowded
    // out on a cumulative day, and it was not. The invariant is simple and
    // worth asserting directly — a served re-check has exactly
    // MIN_CHECK_ITEMS items, whatever else is competing for the sitting.
    let rng = 12345;
    const rand = (n: number) => ((rng = (rng * 1103515245 + 12345) & 0x7fffffff), rng % n);
    const today = '2026-09-23';
    const now = at(today);
    let served = 0;
    for (let trial = 0; trial < 400; trial++) {
      const n = 1 + rand(8);
      const lessons = Array.from({ length: n }, (_, i) => mk(`L${i}`));
      const store = {
        lessons: Object.fromEntries(
          lessons.map((L, i) => [
            L.id,
            {
              passedAt: day(today, -60 - rand(30)),
              stage: rand(4),
              due: day(today, rand(5) - 3), // some due, some not
              checks: rand(4),
              last: { at: day(today, -5), score: 4, total: 6, kind: 'retention' as const },
            },
          ]),
        ),
        items: Object.fromEntries(
          lessons.flatMap((L) =>
            Array.from({ length: rand(4) }, () => rand(MIN_CHECK_ITEMS)).map((idx) => [
              itemKey(L.id, idx),
              { due: now + (rand(3) - 2) * 86400000, ease: 2.5, interval: 1, reps: 1, lapses: 1 },
            ]),
          ),
        ),
        cumulative: { lastAt: day(today, -rand(14)), count: rand(5) },
      };
      const q = buildRetentionQueue(lessons as never, store as never, today, now);
      const byLesson = new Map<string, number>();
      for (const it of q)
        if (it.part === 'recheck') byLesson.set(it.lessonId, (byLesson.get(it.lessonId) ?? 0) + 1);
      for (const [lid, count] of byLesson) {
        served++;
        expect(count, `trial ${trial} lesson ${lid}`).toBe(MIN_CHECK_ITEMS);
      }
      // ...and the cap still holds, so the reservation cannot smuggle in an
      // extra re-check by freeing room the card step would have used.
      expect(byLesson.size, `trial ${trial}`).toBeLessThanOrEqual(MAX_RECHECKS_PER_QUEUE);
    }
    // Non-vacuity: re-checks were genuinely served across those trials.
    expect(served).toBeGreaterThan(100);
  });

  it('reserves only the lessons that can actually be re-checked today', () => {
    // More due re-checks than MAX_RECHECKS_PER_QUEUE: the ones beyond the cap
    // are NOT reserved, so their due cards still serve.
    const today = '2026-09-23';
    const ids = ['a', 'b', 'c'];
    const store = {
      lessons: Object.fromEntries(
        ids.map((id, i) => [
          id,
          {
            passedAt: '2026-08-01',
            stage: 0,
            // rechecks sort ASCENDING by due, so the EARLIEST serve first:
            // 'a' (-2) and 'b' (-1) are reserved, 'c' (today) is not.
            due: day(today, i - 2),
            checks: 1,
            last: { at: '2026-09-01', score: 5, total: 6, kind: 'retention' as const },
          },
        ]),
      ),
      items: {
        [itemKey('c', 0)]: { due: at(today) - 1000, ease: 2.5, interval: 1, reps: 1, lapses: 1 },
      },
      cumulative: { lastAt: today, count: 1 },
    };
    const q = buildRetentionQueue(ids.map((i) => mk(i)) as never, store as never, today, at(today));
    // 'c' was not reserved, so its due card is served...
    expect(q.some((i) => i.part === 'card' && i.lessonId === 'c')).toBe(true);
    // ...and every re-check that DID fit is whole. (Only one fits here: the
    // card takes a slot, leaving 11, and two whole re-checks need 12.)
    const byLesson = new Map<string, number>();
    for (const it of q)
      if (it.part === 'recheck') byLesson.set(it.lessonId, (byLesson.get(it.lessonId) ?? 0) + 1);
    expect(byLesson.size).toBeGreaterThan(0);
    for (const count of byLesson.values()) expect(count).toBe(MIN_CHECK_ITEMS);
    expect(byLesson.has('c')).toBe(false);
  });

  it('no re-check is LOST to the reservation — a long trajectory serves as many', () => {
    // The fix must not trade truncation for starvation. Walk a learner and
    // assert every re-check that comes due is eventually served whole.
    const base = '2026-01-01';
    const lessons = Array.from({ length: 20 }, (_, i) => mk(`L${i}`));
    lessons.forEach((L, i) =>
      recordMasteryPass(L.id, {
        score: 5,
        total: 6,
        at: day(base, i),
        results: [0, 1, 2, 3, 4, 5].map((idx) => ({ idx, correct: idx !== i % 6 })),
      } as never),
    );
    let whole = 0;
    let truncated = 0;
    for (let n = 1; n <= 400; n++) {
      const today = day(base, n);
      const now = at(today);
      const q = buildRetentionQueue(lessons as never, readRetention(), today, now);
      if (!q.length) continue;
      const byLesson = new Map<string, number[]>();
      const other = new Map<string, { part: string; idx: number }[]>();
      for (const it of q) {
        if (it.part === 'recheck') {
          if (!byLesson.has(it.lessonId)) byLesson.set(it.lessonId, []);
          byLesson.get(it.lessonId)!.push(it.idx);
        } else {
          if (!other.has(it.lessonId)) other.set(it.lessonId, []);
          other.get(it.lessonId)!.push({ part: it.part, idx: it.idx });
        }
      }
      for (const idxs of byLesson.values()) idxs.length === MIN_CHECK_ITEMS ? whole++ : truncated++;
      if (q.some((i) => i.part === 'cumulative')) recordCumulativeServed(today);
      const weakOf = (lid: string) => Number(lid.slice(1)) % 6;
      for (const [lid, idxs] of byLesson)
        recordRetentionResult(lid, {
          kind: 'retention',
          results: idxs.map((idx) => ({ idx, correct: idx !== weakOf(lid) })),
          at: today,
          now,
        });
      for (const [lid, entries] of other)
        recordRetentionResult(lid, {
          kind: entries[0]!.part === 'card' ? 'card' : 'cumulative',
          results: entries.map((e) => ({ idx: e.idx, correct: e.idx !== weakOf(lid) })),
          at: today,
          now,
        });
    }
    expect(truncated).toBe(0);
    // Non-vacuity: re-checks genuinely happened. Measured at 120 on this
    // trajectory both before and after the fix — the floor is well under it so
    // a scheduling change does not make this a coin flip.
    expect(whole).toBeGreaterThanOrEqual(90);
  });
});
