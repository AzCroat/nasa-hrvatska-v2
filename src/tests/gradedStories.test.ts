/**
 * gradedStories.test.ts — structural validation for the graded-reading corpus
 * (functions/api/content/_data/gradedStories.js). Added with the 2026-07
 * reading expansion (A1/A2/B1 at 16 each, B2 at 13, C1 at 12, C2 at 7). A malformed story
 * renders a broken reader or a quiz whose "correct" index points at nothing —
 * silent content corruption this locks out. Server data imported directly
 * (same pattern as vocabulary-coverage.test.ts); tests are not bundled, so
 * the SP11 content-protection audit is unaffected.
 */
import { describe, it, expect } from 'vitest';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — untyped server data module
import { GRADED_STORIES } from '../../functions/api/content/_data/gradedStories.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — untyped generated module
import { ETAGS } from '../../functions/api/content/_data/_etags.js';

interface Paragraph {
  hr: string;
  en: string;
}
interface VocabItem {
  hr: string;
  en: string;
  ex: string;
}
interface QuizItem {
  q: string;
  qEn: string;
  opts: string[];
  correct: number;
}
interface Story {
  id: string;
  level: string;
  title: string;
  titleEn: string;
  icon: string;
  duration: number;
  focus: string;
  intro: string;
  paragraphs: Paragraph[];
  vocabulary: VocabItem[];
  quiz: QuizItem[];
}

const stories = GRADED_STORIES as Story[];
const LEVELS = new Set(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);

describe('graded stories — structural integrity', () => {
  it('has unique ids and valid levels', () => {
    const ids = stories.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const s of stories) {
      expect(LEVELS.has(s.level), `${s.id} level "${s.level}"`).toBe(true);
    }
  });

  it('per-level coverage never regresses below the 2026-07 expansion floor', () => {
    const byLevel: Record<string, number> = {};
    for (const s of stories) byLevel[s.level] = (byLevel[s.level] || 0) + 1;
    expect(byLevel['A1'] ?? 0).toBeGreaterThanOrEqual(18);
    expect(byLevel['A2'] ?? 0).toBeGreaterThanOrEqual(18);
    expect(byLevel['B1'] ?? 0).toBeGreaterThanOrEqual(18);
    expect(byLevel['B2'] ?? 0).toBeGreaterThanOrEqual(15);
    expect(byLevel['C1'] ?? 0).toBeGreaterThanOrEqual(14);
    expect(byLevel['C2'] ?? 0).toBeGreaterThanOrEqual(9);
    expect(stories.length).toBeGreaterThanOrEqual(92);
  });

  // Stories tranche 1 (2026-07): per-level HR word-volume floors — the audit's
  // 10,000-words-per-level program. Raise these with every tranche; they exist
  // so reading VOLUME (not just story count) can never silently regress.
  it('per-level Croatian word volume never regresses below the tranche-1 floor', () => {
    const words: Record<string, number> = {};
    for (const s of stories) {
      const w = s.paragraphs
        .map((p: { hr: string }) => p.hr.split(/\s+/).length)
        .reduce((a: number, b: number) => a + b, 0);
      words[s.level] = (words[s.level] ?? 0) + w;
    }
    expect(words['A1'] ?? 0).toBeGreaterThanOrEqual(2100);
    expect(words['A2'] ?? 0).toBeGreaterThanOrEqual(3100);
    expect(words['B1'] ?? 0).toBeGreaterThanOrEqual(3400);
    expect(words['B2'] ?? 0).toBeGreaterThanOrEqual(3800);
    expect(words['C1'] ?? 0).toBeGreaterThanOrEqual(3800);
    expect(words['C2'] ?? 0).toBeGreaterThanOrEqual(2900);
  });

  it('every story is complete: metadata, paragraphs with hr+en, vocab, quiz', () => {
    for (const s of stories) {
      expect(s.title, s.id).toBeTruthy();
      expect(s.titleEn, s.id).toBeTruthy();
      expect(s.focus, s.id).toBeTruthy();
      expect(s.intro, s.id).toBeTruthy();
      expect(s.duration, s.id).toBeGreaterThan(0);
      expect(s.paragraphs.length, `${s.id} paragraphs`).toBeGreaterThanOrEqual(3);
      s.paragraphs.forEach((p, i) => {
        expect(p.hr?.trim().length, `${s.id} paragraph ${i} hr`).toBeGreaterThan(0);
        expect(p.en?.trim().length, `${s.id} paragraph ${i} en`).toBeGreaterThan(0);
      });
      expect(s.vocabulary.length, `${s.id} vocab`).toBeGreaterThanOrEqual(5);
      s.vocabulary.forEach((v, i) => {
        expect(v.hr?.trim(), `${s.id} vocab ${i}`).toBeTruthy();
        expect(v.en?.trim(), `${s.id} vocab ${i}`).toBeTruthy();
        expect(v.ex?.trim(), `${s.id} vocab ${i} example`).toBeTruthy();
      });
      expect(s.quiz.length, `${s.id} quiz`).toBeGreaterThanOrEqual(3);
      s.quiz.forEach((q, i) => {
        expect(q.q?.trim(), `${s.id} quiz ${i} q`).toBeTruthy();
        expect(q.qEn?.trim(), `${s.id} quiz ${i} qEn`).toBeTruthy();
        expect(q.opts.length, `${s.id} quiz ${i} opts`).toBeGreaterThanOrEqual(3);
        expect(
          q.correct >= 0 && q.correct < q.opts.length,
          `${s.id} quiz ${i} correct=${q.correct} out of range for ${q.opts.length} opts`,
        ).toBe(true);
        expect(new Set(q.opts).size, `${s.id} quiz ${i} duplicate opts`).toBe(q.opts.length);
      });
    }
  });

  it('every story has a generated etag (catalog contract)', () => {
    for (const s of stories) {
      expect(
        ETAGS.stories[s.id],
        `missing etag for ${s.id} — run generate-content-etags.mjs`,
      ).toBeTruthy();
    }
  });
});
