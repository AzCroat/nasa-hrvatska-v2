/**
 * class-screenshots.spec.js — screenshots of class-order lessons for the owner's review.
 *
 * Owner rule: show screenshots of any change to what a learner sees BEFORE it is merged.
 * A level rebuilt in class order (dialogue → questions → mixed practice) is reviewed from
 * one dialogue per unit. This takes them: the first lesson of every unit of one level, the
 * dialogue as read and its first question, plus the first unit again on a small phone.
 *
 * It only runs when asked (it writes files outside the repo):
 *   CLASS_SHOTS_LEVEL=A2 CLASS_SHOTS_DIR="/path/to/folder" \
 *     npx playwright test e2e/class-screenshots.spec.js --project="Mobile Chrome (Pixel 5)"
 */
import path from 'node:path';
import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent } from './fixtures/seed-auth.js';
import { CURRICULUM } from '../functions/api/content/_data/curriculum.js';

const LEVEL = process.env.CLASS_SHOTS_LEVEL;
const DIR = process.env.CLASS_SHOTS_DIR;
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const ids = (lv) =>
  CURRICULUM.filter((l) => l.level === lv)
    .sort((a, b) => a.order - b.order)
    .map((l) => l);

test.describe('class-order screenshots', () => {
  test.skip(!LEVEL || !DIR, 'set CLASS_SHOTS_LEVEL and CLASS_SHOTS_DIR to take screenshots');

  test('one dialogue per unit', async ({ page }) => {
    test.setTimeout(15 * 60_000);
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    // The map lists the lessons of the unit the learner stands on, so before each shot
    // the course is set to "everything before this unit is done and passed".
    const all = LEVELS.flatMap((lv) => {
      const list = ids(lv);
      const out = [];
      for (let i = 0; i < list.length; i += 5)
        out.push({ id: `${lv}-${i / 5 + 1}`, lessons: list.slice(i, i + 5).map((l) => l.id) });
      return out;
    });
    const standOn = async (unitId) => {
      const before = all.slice(
        0,
        all.findIndex((u) => u.id === unitId),
      );
      const levels = LEVELS.slice(0, LEVELS.indexOf(LEVEL));
      await page.evaluate(
        ([units, lvls]) => {
          const d = new Date();
          const iso = (x) =>
            `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`;
          const today = iso(d);
          const due = iso(new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7));
          const done = {};
          const u = {};
          for (const unit of units) {
            for (const id of unit.lessons) done[id] = today;
            u[unit.id] = {
              passedAt: today,
              bestCorrect: 15,
              bestTotal: 15,
              attempts: [{ at: today, correct: 15, total: 15, passed: true }],
              production: { wroteAt: today, writeScore: 78, spokeAt: today, speakScore: 0.7 },
              recheck: { stage: 0, dueAt: due },
            };
          }
          const reviews = {};
          for (const lv of lvls) reviews[lv] = { doneAt: today, firstTryCorrect: 18, total: 18 };
          localStorage.setItem('nh_curriculum_progress', JSON.stringify({ done }));
          localStorage.setItem(
            'nh_course_units',
            JSON.stringify({ structure: 2, units: u, reviews }),
          );
        },
        [before, levels],
      );
    };
    await page.goto('/');

    // CLASS_SHOTS_MAP="C1-13,C1-16": the course map only, standing on each named unit
    // (for a change to the course's shape rather than to a lesson).
    if (process.env.CLASS_SHOTS_MAP) {
      for (const unitId of process.env.CLASS_SHOTS_MAP.split(',')) {
        await standOn(unitId);
        await page.goto('/coursemap');
        await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 30_000 });
        await page.getByTestId(`course-unit-${unitId}`).scrollIntoViewIfNeeded();
        await page.waitForTimeout(800);
        await page.screenshot({ path: path.join(DIR, `map-${unitId}.png`) });
        await page.screenshot({ path: path.join(DIR, `map-${unitId}-full.png`), fullPage: true });
      }
      return;
    }

    const lessons = ids(LEVEL);
    const shoot = async (lesson, unitId, label, small) => {
      if (small) await page.setViewportSize({ width: 360, height: 640 });
      await standOn(unitId);
      await page.goto('/coursemap');
      await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 30_000 });
      await page.getByTestId(`course-lesson-${lesson.id}`).click();
      const text = page.getByTestId('lesson-text');
      for (let i = 0; i < 4 && !(await text.isVisible().catch(() => false)); i++)
        await page.getByTestId('lesson-nav-next').click();
      await expect(text).toBeVisible();
      const stage = () => text.getAttribute('data-stage');
      const advance = async (to) => {
        for (let i = 0; i < 6 && (await stage()) !== to; i++) {
          const listen = page.getByTestId('lesson-text-listen');
          if ((await stage()) === 'listen' && (await listen.isVisible().catch(() => false)))
            await listen.click();
          await page.waitForTimeout(600);
          const next = page.getByTestId('lesson-nav-next');
          if (await next.isEnabled().catch(() => false)) await next.click();
          await page.waitForTimeout(400);
        }
        expect(await stage()).toBe(to);
      };
      await advance('read');
      // The page must not be wider than the screen (a sideways scroll cuts the left edge).
      const wide = await page.evaluate(() => ({
        doc: document.documentElement.scrollWidth,
        win: window.innerWidth,
        x: window.scrollX,
      }));
      // The dialogue card itself must sit inside the screen: a long title once pushed it
      // wider than the phone and an inner container scrolled sideways.
      const box = await text.evaluate((el) => {
        const r = el.getBoundingClientRect();
        let sc = null;
        for (let n = el.parentElement; n; n = n.parentElement)
          if (n.scrollLeft > 0 || n.scrollWidth > n.clientWidth + 1)
            sc = `${n.tagName}.${n.className || n.id} scrollLeft=${n.scrollLeft} scrollWidth=${n.scrollWidth} clientWidth=${n.clientWidth}`;
        return { left: Math.round(r.left), right: Math.round(r.right), sc };
      });
      if (process.env.CLASS_SHOTS_PROBE) {
        const wide = await page.evaluate(() => {
          const w = window.innerWidth;
          const out = [];
          for (const el of document.querySelectorAll('body *')) {
            const r = el.getBoundingClientRect();
            if (
              r.width > 0 &&
              (r.right > w + 1 || r.left < -1 || el.scrollWidth > el.clientWidth + 1)
            ) {
              const cs = getComputedStyle(el);
              out.push(
                `${el.tagName}#${el.id}.${String(el.className).slice(0, 30)}[${el.getAttribute('data-testid') || ''}] ${Math.round(r.left)}..${Math.round(r.right)} sw=${el.scrollWidth} cw=${el.clientWidth} ox=${cs.overflowX} pos=${cs.position}`,
              );
            }
          }
          return out.slice(0, 14);
        });
        console.log(`PROBE ${label}\n  ` + wide.join('\n  '));
      }
      console.log(`BOX ${label}: card ${box.left}..${box.right}px ${box.sc || ''}`);
      console.log(`WIDTH ${label}: page ${wide.doc}px, screen ${wide.win}px, scrolled ${wide.x}px`);
      await page.screenshot({ path: path.join(DIR, `${label} - 1 dialogue.png`), fullPage: false });
      await advance('questions');
      await page.screenshot({
        path: path.join(DIR, `${label} - 2 question 1.png`),
        fullPage: false,
      });
    };

    // CLASS_SHOTS_FIRST=1: only the first unit (a sample lesson shown before a level is written).
    const last = process.env.CLASS_SHOTS_FIRST ? 5 : lessons.length;
    // CLASS_SHOTS_UNIT=13: only that unit's first lesson (a sample from the middle of a level).
    if (process.env.CLASS_SHOTS_UNIT) {
      const u = Number(process.env.CLASS_SHOTS_UNIT) - 1;
      const lesson = lessons[u * 5];
      const label = `Unit ${String(u + 1).padStart(2, '0')} - ${lesson.id}`;
      await shoot(lesson, `${LEVEL}-${u + 1}`, label, false);
      await shoot(lesson, `${LEVEL}-${u + 1}`, `Small phone (360x640) - ${label}`, true);
      return;
    }
    for (let u = 0; u * 5 < last; u++) {
      const lesson = lessons[u * 5];
      const label = `Unit ${String(u + 1).padStart(2, '0')} - ${lesson.id}`;
      await shoot(lesson, `${LEVEL}-${u + 1}`, label, false);
    }
    await shoot(lessons[0], `${LEVEL}-1`, 'Small phone (360x640) - Unit 01', true);
  });
});
