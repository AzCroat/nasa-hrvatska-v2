// src/tests/stretchSession.test.ts
//
// THE STRETCH (Daily Session redesign, increment 6 — owner decision 6, 2026-09-28).
//
// The bar is the app's: the core session plus every Stretch the evidence
// justifies, floored at one and capped at three; a Stretch is a second guided
// session in the same plan; ties resolve toward speaking and listening. These
// tests drive the REAL module against the real stores and the real session hook.
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import {
  STRETCH_LENGTH,
  STRETCH_MAX,
  STRETCH_MIN,
  buildStretch,
  extendWithStretch,
  gatherStretchCandidates,
  stretchState,
  stretchTargetFor,
  type StretchDeps,
} from '../lib/stretchSession';
import {
  useDailySession,
  buildSessionActivities,
  selectProductionExercise,
  selectGuaranteedGrammar,
} from '../hooks/useDailySession';
import { newSession, type DailySession, type SessionActivity } from '../lib/dailySessionStore';
import { recordMasteryPass, recordRetentionResult, readRetention } from '../lib/lessonRetention';
import { recordMasteryEvent, MIN_SAMPLES } from '../lib/masteryLedger';
import { writeCurriculumSpine } from '../lib/curriculumProgress';
import { LESSON_TAUGHT_CATEGORY } from '../lib/teachPractice';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN, SCREEN_CEFR } from '../lib/categoryRoutes';
import { isUnlocked } from '../lib/cefr';
import { localDateStr } from '../lib/dateUtils';
import type { CurriculumEntry } from '../lib/curriculum';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';

const SPINE = CURRICULUM as unknown as CurriculumEntry[];
const TODAY = localDateStr();

const deps = (): StretchDeps => ({
  dueReviews: 0,
  micBlocked: false,
  recentScreens: [],
  selectProduction: (o) =>
    selectProductionExercise({ ...o, micState: 'available', recentScreens: [] }),
  selectGrammar: selectGuaranteedGrammar,
});

const act_ = (id: string, screen: string, stretch?: number): SessionActivity => ({
  id,
  label: id,
  screen,
  category: 'general',
  ...(stretch ? { stretch } : {}),
});

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

describe('the bar (decision 6a)', () => {
  it('is floored at one Stretch and capped at three, one per STRETCH_LENGTH of evidence', () => {
    expect(stretchTargetFor(0)).toBe(STRETCH_MIN);
    expect(stretchTargetFor(1)).toBe(1);
    expect(stretchTargetFor(STRETCH_LENGTH)).toBe(1);
    expect(stretchTargetFor(STRETCH_LENGTH + 1)).toBe(2);
    expect(stretchTargetFor(2 * STRETCH_LENGTH + 1)).toBe(3);
    expect(stretchTargetFor(100)).toBe(STRETCH_MAX);
    expect(STRETCH_MIN).toBe(1);
    expect(STRETCH_MAX).toBe(3);
  });
});

describe('gatherStretchCandidates', () => {
  it('a learner with nothing measured still gets a full path-ahead Stretch, and none of it claims a measurement', () => {
    const cands = gatherStretchCandidates('A1', new Set(), deps());
    expect(cands.length).toBeGreaterThanOrEqual(STRETCH_LENGTH);
    expect(cands.every((c) => c.evidence === 'path')).toBe(true);
    // No reason states a result the learner never produced.
    for (const c of cands) {
      expect(c.activity.reason ?? '').not.toMatch(/\d+%|\d+ of \d+/);
    }
  });

  it('never builds a lesson (the course gate is untouched) and never a browse entry', () => {
    writeCurriculumSpine(SPINE);
    const cands = gatherStretchCandidates('A1', new Set(), deps());
    expect(
      cands.some(
        (c) =>
          c.activity.id.startsWith('curriculum_') &&
          !c.activity.id.startsWith('curriculum_practice_'),
      ),
    ).toBe(false);
    expect(cands.some((c) => c.activity.screen === 'animlesson')).toBe(false);
    // …and never a drill locked above the level (a promise the learner cannot open).
    for (const c of cands) {
      const gate = SCREEN_CEFR[c.activity.screen];
      if (gate) expect(isUnlocked(gate, 'A1'), `${c.activity.screen} is gated ${gate}`).toBe(true);
    }
  });

  it('every screen appears once, and never a screen already in the plan (markDone matches by screen)', () => {
    const used = new Set(['review', 'dialogue']);
    const cands = gatherStretchCandidates('B1', used, { ...deps(), dueReviews: 7 });
    const screens = cands.map((c) => c.activity.screen);
    expect(new Set(screens).size).toBe(screens.length);
    expect(screens).not.toContain('review');
    expect(screens).not.toContain('dialogue');
  });

  it('word reviews due are measured evidence, first, with the count in the reason', () => {
    const cands = gatherStretchCandidates('A2', new Set(), { ...deps(), dueReviews: 9 });
    expect(cands[0]!.activity.screen).toBe('review');
    expect(cands[0]!.evidence).toBe('measured');
    expect(cands[0]!.activity.reason).toMatch(/9/);
  });

  it('a shaky concept is measured evidence, routed to its coupled drill, with the check score in the reason', () => {
    writeCurriculumSpine(SPINE);
    // A lesson whose taught category has a route at A1.
    const lesson = SPINE.find((l) => {
      const c = LESSON_TAUGHT_CATEGORY[l.id];
      return l.level === 'A1' && c && CATEGORY_SCREEN_MAP[c];
    })!;
    recordMasteryPass(lesson.id, { score: 6, total: 6, results: [], at: '2026-09-01' });
    // A failed re-check: last score below the pass mark → `shaky`.
    recordRetentionResult(lesson.id, {
      results: [0, 1, 2, 3, 4, 5].map((i) => ({ idx: i, correct: i < 2 })),
      at: TODAY,
      kind: 'retention',
    });
    expect(readRetention().lessons[lesson.id]!.last.score).toBe(2);
    const cands = gatherStretchCandidates('A1', new Set(), deps());
    const hit = cands.find((c) => c.activity.id === `concept_${lesson.id}`);
    expect(hit, 'the shaky lesson is a candidate').toBeTruthy();
    expect(hit!.evidence).toBe('measured');
    expect(hit!.rank).toBe(0);
    expect(hit!.activity.reason).toMatch(/2 of 6/);
    expect(hit!.activity.category).toBe(LESSON_TAUGHT_CATEGORY[lesson.id]);
  });

  it("the ledger's weakest production skill is measured evidence carrying the ledger's own sentence", () => {
    for (let i = 0; i < MIN_SAMPLES + 1; i++) {
      recordMasteryEvent({ level: 'B1', skill: 'speaking', score: 0.3, weight: 1 });
      recordMasteryEvent({ level: 'B1', skill: 'writing', score: 0.95, weight: 1 });
    }
    const cands = gatherStretchCandidates('B1', new Set(), deps());
    const measured = cands.filter((c) => c.evidence === 'measured');
    const speak = measured.find((c) => c.spoken && c.activity.reason?.includes('Speaking'));
    expect(speak, 'a speaking activity with the ledger sentence').toBeTruthy();
    expect(speak!.activity.reason).toMatch(/needs the most work/);
  });

  it('ties resolve toward speaking and listening (decision 6c): with no verdict the path production is spoken', () => {
    const cands = gatherStretchCandidates('B1', new Set(), deps());
    const path = cands.filter((c) => c.evidence === 'path');
    expect(path.length).toBeGreaterThan(0);
    // Within the path rank, spoken candidates sort first.
    const firstSpokenIdx = path.findIndex((c) => c.spoken);
    const firstUnspokenIdx = path.findIndex((c) => !c.spoken);
    expect(firstSpokenIdx).toBe(0);
    if (firstUnspokenIdx >= 0) expect(firstUnspokenIdx).toBeGreaterThan(firstSpokenIdx);
  });

  it('among EQUAL measured evidence, listening outranks writing (6c) — the tie, not the verdict, decides', () => {
    // Writing AND listening are both measured weak at B1; the production candidate
    // (write, unspoken) is gathered before the receptive one (listening, spoken).
    // Without the tie-break the writing drill would lead the Stretch.
    for (let i = 0; i < MIN_SAMPLES + 1; i++) {
      recordMasteryEvent({ level: 'B1', skill: 'writing', score: 0.3, weight: 1 });
      recordMasteryEvent({ level: 'B1', skill: 'speaking', score: 0.95, weight: 1 });
      recordMasteryEvent({ level: 'B1', skill: 'listening', score: 0.3, weight: 1 });
      recordMasteryEvent({ level: 'B1', skill: 'reading', score: 0.95, weight: 1 });
    }
    const cands = gatherStretchCandidates('B1', new Set(), deps());
    const rank1 = cands.filter((c) => c.rank === 1);
    expect(rank1.some((c) => !c.spoken && c.activity.reason?.includes('Writing'))).toBe(true);
    expect(rank1.some((c) => c.spoken && c.activity.reason?.includes('Listening'))).toBe(true);
    expect(rank1[0]!.spoken).toBe(true);
  });

  it('a shaky concept whose drill is gated above the level is routed to the EASIER drill, never the locked one', () => {
    writeCurriculumSpine(SPINE);
    // A lesson whose taught category's primary route is locked at the lesson's own
    // level and whose easier route is open there (the clitics → clitic (B2) /
    // objekt (A2) shape). Found in the spine, not hand-named, so a retag cannot
    // leave this test asserting a pair that no longer exists.
    const lesson = SPINE.find((l) => {
      const c = LESSON_TAUGHT_CATEGORY[l.id];
      if (!c) return false;
      const primary = CATEGORY_SCREEN_MAP[c];
      const easier = CATEGORY_EASIER_SCREEN[c];
      return (
        !!primary &&
        !!easier &&
        !!SCREEN_CEFR[primary] &&
        !isUnlocked(SCREEN_CEFR[primary]!, l.level) &&
        (!SCREEN_CEFR[easier] || isUnlocked(SCREEN_CEFR[easier]!, l.level))
      );
    });
    expect(lesson, 'the spine holds such a lesson').toBeTruthy();
    const c = LESSON_TAUGHT_CATEGORY[lesson!.id]!;
    recordMasteryPass(lesson!.id, { score: 6, total: 6, results: [], at: '2026-09-01' });
    recordRetentionResult(lesson!.id, {
      kind: 'retention',
      results: [0, 1, 2, 3, 4, 5].map((i) => ({ idx: i, correct: i < 2 })),
      at: TODAY,
    });
    const hit = gatherStretchCandidates(lesson!.level, new Set(), deps()).find(
      (x) => x.activity.id === `concept_${lesson!.id}`,
    );
    expect(hit).toBeTruthy();
    expect(hit!.activity.screen).toBe(CATEGORY_EASIER_SCREEN[c]);
    expect(hit!.activity.screen).not.toBe(CATEGORY_SCREEN_MAP[c]);
  });

  it('measured candidates outrank path candidates whatever the modality', () => {
    const cands = gatherStretchCandidates('A2', new Set(), { ...deps(), dueReviews: 3 });
    const lastMeasured = cands.map((c) => c.evidence).lastIndexOf('measured');
    const firstPath = cands.map((c) => c.evidence).indexOf('path');
    expect(lastMeasured).toBeLessThan(firstPath);
  });
});

describe('extendWithStretch and stretchState', () => {
  const core = [act_('c1', 'alphabet'), act_('c2', 'genitive'), act_('c3', 'cityofday')];
  const plan = (completed: string[], extra: Partial<DailySession> = {}): DailySession => ({
    ...newSession('A1', core, completed),
    ...extra,
  });

  it('does nothing while the core is unfinished, and returns the same object', () => {
    const s = plan(['c1']);
    expect(extendWithStretch(s, 'A1', deps())).toBe(s);
    expect(stretchState(s)).toMatchObject({ coreComplete: false, index: 0, complete: false });
  });

  it('an EMPTY plan is not a finished core (0 >= 0 is how a credit for nothing happens)', () => {
    const s = { ...newSession('A1', [], []) };
    expect(stretchState(s).coreComplete).toBe(false);
    expect(extendWithStretch(s, 'A1', deps())).toBe(s);
  });

  it('appends Stretch 1 when the core completes, records the target, and the day is not complete', () => {
    const s = extendWithStretch(plan(['c1', 'c2', 'c3']), 'A1', deps());
    const st = stretchState(s);
    expect(st).toMatchObject({ coreComplete: true, index: 1, target: 1, complete: false });
    const added = s.activities.filter((a) => a.stretch === 1);
    expect(added.length).toBe(STRETCH_LENGTH);
    expect(s.estimatedMinutes).toBe(s.activities.length * 5);
    // No Stretch screen repeats a core screen.
    for (const a of added) expect(core.map((c) => c.screen)).not.toContain(a.screen);
  });

  it('with more measured evidence than one Stretch holds, the target is 2 and the second is built only when the first is done', () => {
    // Five measured items: reviews due plus four weak, taught categories would do it;
    // the ledger's two skills and reviews are the cheapest to seed here, so use a
    // concept spine with several shaky lessons.
    writeCurriculumSpine(SPINE);
    const routed = SPINE.filter((l) => {
      const c = LESSON_TAUGHT_CATEGORY[l.id];
      return l.level === 'A1' && c && CATEGORY_SCREEN_MAP[c];
    });
    const distinctScreens = new Set<string>();
    const picked: CurriculumEntry[] = [];
    for (const l of routed) {
      const screen = CATEGORY_SCREEN_MAP[LESSON_TAUGHT_CATEGORY[l.id]!]!;
      if (distinctScreens.has(screen)) continue;
      distinctScreens.add(screen);
      picked.push(l);
      if (picked.length === STRETCH_LENGTH + 1) break;
    }
    expect(picked.length).toBe(STRETCH_LENGTH + 1);
    for (const l of picked) {
      recordMasteryPass(l.id, { score: 6, total: 6, results: [], at: '2026-09-01' });
      recordRetentionResult(l.id, {
        results: [0, 1, 2, 3, 4, 5].map((i) => ({ idx: i, correct: i < 1 })),
        at: TODAY,
        kind: 'retention',
      });
    }
    const s1 = extendWithStretch(plan(['c1', 'c2', 'c3']), 'A1', deps());
    expect(s1.stretchTarget).toBe(2);
    expect(stretchState(s1).index).toBe(1);
    // Stretch 1 unfinished → nothing more is appended.
    expect(extendWithStretch(s1, 'A1', deps())).toBe(s1);
    // Finish Stretch 1 → Stretch 2 arrives, target unchanged.
    const done1 = {
      ...s1,
      completedIds: [
        ...s1.completedIds,
        ...s1.activities.filter((a) => a.stretch === 1).map((a) => a.id),
      ],
    };
    const s2 = extendWithStretch(done1, 'A1', deps());
    expect(stretchState(s2)).toMatchObject({ index: 2, target: 2, complete: false });
    // Finish Stretch 2 → the bar is met, nothing more is appended.
    const done2 = {
      ...s2,
      completedIds: [
        ...s2.completedIds,
        ...s2.activities.filter((a) => a.stretch === 2).map((a) => a.id),
      ],
    };
    expect(extendWithStretch(done2, 'A1', deps())).toBe(done2);
    expect(stretchState(done2).complete).toBe(true);
  });

  it('the target is decided ONCE — evidence arriving later does not raise it', () => {
    const s1 = extendWithStretch(plan(['c1', 'c2', 'c3']), 'A1', deps());
    expect(s1.stretchTarget).toBe(1);
    const done1 = {
      ...s1,
      completedIds: [
        ...s1.completedIds,
        ...s1.activities.filter((a) => a.stretch === 1).map((a) => a.id),
      ],
    };
    // Now nine word reviews fall due; the day's bar was already set.
    const after = extendWithStretch(done1, 'A1', { ...deps(), dueReviews: 9 });
    expect(after).toBe(done1);
    expect(stretchState(after).complete).toBe(true);
  });

  it('when nothing servable is left the bar is lowered to what was built — never an empty Stretch, never a strand', () => {
    const empty: StretchDeps = {
      dueReviews: 0,
      micBlocked: false,
      recentScreens: [],
      selectProduction: () => null,
      selectGrammar: () => null,
    };
    // Every pool screen already used → no candidate can be built.
    const everything = new Set(buildSessionActivities('A1').map((a) => a.screen));
    const cands = gatherStretchCandidates('A1', everything, empty);
    const s = extendWithStretch(plan(['c1', 'c2', 'c3']), 'A1', empty);
    if (cands.length === 0) {
      expect(s.stretchTarget).toBe(0);
      expect(stretchState(s).complete).toBe(true);
    } else {
      expect(buildStretch(1, cands).length).toBeGreaterThan(0);
    }
  });

  it('a plan persisted before the Stretch existed (no stretchTarget) is extended on load, not read as complete', () => {
    const legacy = plan(['c1', 'c2', 'c3']);
    delete (legacy as { stretchTarget?: number }).stretchTarget;
    expect(stretchState(legacy).complete).toBe(false);
    const s = extendWithStretch(legacy, 'A1', deps());
    expect(stretchState(s).index).toBe(1);
  });
});

describe('the hook (the real plan, the real completion path)', () => {
  it('finishing the core grows the plan by one Stretch; the card is not complete; history records the core', () => {
    const { result } = renderHook(() => useDailySession('A2'));
    const coreIds = result.current.session.activities.map((a) => a.id);
    act(() => coreIds.forEach((id) => result.current.markDone(id)));
    const { session, stretch, isComplete } = result.current;
    expect(stretch.coreComplete).toBe(true);
    expect(stretch.index).toBe(1);
    expect(isComplete).toBe(false);
    expect(session.activities.filter((a) => a.stretch === 1).length).toBeGreaterThan(0);
    expect(session.stretchTarget).toBeGreaterThanOrEqual(1);
    // Persisted, so a reload meets the Stretch rather than the finished core.
    const persisted = JSON.parse(localStorage.getItem('nh_daily_session')!) as DailySession;
    expect(persisted.activities.some((a) => a.stretch === 1)).toBe(true);
    // The day's history records the CORE session.
    const history = JSON.parse(localStorage.getItem('nh_session_history') || '{}') as Record<
      string,
      boolean
    >;
    expect(history[TODAY]).toBe(true);
    // nextActivity is the Stretch's first item.
    expect(result.current.nextActivity?.stretch).toBe(1);
  });

  it('a screen appears at most once in the whole day, so markDone by screen can never miss', () => {
    const { result } = renderHook(() => useDailySession('B1'));
    for (let guard = 0; guard < 5 && !result.current.isComplete; guard++) {
      const open = result.current.session.activities
        .filter((a) => !result.current.session.completedIds.includes(a.id))
        .map((a) => a.id);
      act(() => open.forEach((id) => result.current.markDone(id)));
    }
    const screens = result.current.session.activities.map((a) => a.screen);
    expect(new Set(screens).size).toBe(screens.length);
    expect(result.current.isComplete).toBe(true);
    expect(result.current.stretch.index).toBeGreaterThanOrEqual(STRETCH_MIN);
    expect(result.current.stretch.index).toBeLessThanOrEqual(STRETCH_MAX);
  });
});

// ── THE PROBE (the design's "measured before and after") ─────────────────────
//
// Four seeded learners, the real module. Prints the target and the measured share
// with --reporter=verbose; asserts the ratchets a change to the evidence sources
// must not break. "No evidence" is the floor: one Stretch, none of it claiming a
// measurement. "Everything due" is the cap.
describe('the probe: stretch count and evidence share by seeded learner', () => {
  const measuredShare = (level: string, d: StretchDeps) => {
    const cands = gatherStretchCandidates(level, new Set(), d);
    const target = stretchTargetFor(cands.filter((c) => c.evidence === 'measured').length);
    const first = buildStretch(1, cands);
    const share =
      first.filter((a) => cands.find((c) => c.activity.id === a.id)?.evidence === 'measured')
        .length / first.length;
    return { target, share, first };
  };

  it('no evidence → one Stretch, every activity from the path ahead', () => {
    const r = measuredShare('A2', deps());
    console.log(
      '[stretch probe] no evidence:',
      r.target,
      r.share,
      r.first.map((a) => a.screen),
    );
    expect(r.target).toBe(1);
    expect(r.share).toBe(0);
    expect(r.first.length).toBe(STRETCH_LENGTH);
  });

  it('one measured weak skill → still one Stretch, and the weak skill leads it', () => {
    for (let i = 0; i < MIN_SAMPLES + 1; i++) {
      recordMasteryEvent({ level: 'A2', skill: 'listening', score: 0.3, weight: 1 });
      recordMasteryEvent({ level: 'A2', skill: 'reading', score: 0.9, weight: 1 });
    }
    const r = measuredShare('A2', deps());
    console.log(
      '[stretch probe] one weak skill:',
      r.target,
      r.share,
      r.first.map((a) => a.screen),
    );
    expect(r.target).toBe(1);
    expect(r.first[0]!.reason).toMatch(/Listening/);
  });

  it('several shaky lessons plus reviews due → two Stretches, the first all measured', () => {
    writeCurriculumSpine(SPINE);
    const routed = SPINE.filter((l) => {
      const c = LESSON_TAUGHT_CATEGORY[l.id];
      return l.level === 'A1' && c && CATEGORY_SCREEN_MAP[c];
    });
    const seen = new Set<string>();
    let n = 0;
    for (const l of routed) {
      const screen = CATEGORY_SCREEN_MAP[LESSON_TAUGHT_CATEGORY[l.id]!]!;
      if (seen.has(screen)) continue;
      seen.add(screen);
      recordMasteryPass(l.id, { score: 6, total: 6, results: [], at: '2026-09-01' });
      recordRetentionResult(l.id, {
        kind: 'retention',
        results: [0, 1, 2, 3, 4, 5].map((i) => ({ idx: i, correct: i < 2 })),
        at: TODAY,
      });
      if (++n === STRETCH_LENGTH) break;
    }
    const r = measuredShare('A1', { ...deps(), dueReviews: 12 });
    console.log(
      '[stretch probe] shaky + reviews:',
      r.target,
      r.share,
      r.first.map((a) => a.screen),
    );
    expect(r.target).toBe(2);
    expect(r.share).toBe(1);
  });
});
