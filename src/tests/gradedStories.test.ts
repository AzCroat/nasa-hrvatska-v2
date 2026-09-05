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
    expect(byLevel['A1'] ?? 0).toBeGreaterThanOrEqual(38);
    expect(byLevel['A2'] ?? 0).toBeGreaterThanOrEqual(33);
    expect(byLevel['B1'] ?? 0).toBeGreaterThanOrEqual(31);
    // Raised 2026-09-05 (reading depth, item 3): +12 B2, +12 C1, +11 C2 long reads.
    expect(byLevel['B2'] ?? 0).toBeGreaterThanOrEqual(39);
    expect(byLevel['C1'] ?? 0).toBeGreaterThanOrEqual(38);
    expect(byLevel['C2'] ?? 0).toBeGreaterThanOrEqual(33);
    expect(stories.length).toBeGreaterThanOrEqual(212);
  });

  // Stories tranches 1-7 (2026-07): per-level HR word-volume floors — the audit's
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
    expect(words['A1'] ?? 0).toBeGreaterThanOrEqual(10000);
    expect(words['A2'] ?? 0).toBeGreaterThanOrEqual(10000);
    expect(words['B1'] ?? 0).toBeGreaterThanOrEqual(10000);
    // Doubled 2026-09-05 (reading depth, item 3): measured 20,331 / 20,823 / 20,489.
    expect(words['B2'] ?? 0).toBeGreaterThanOrEqual(20000);
    expect(words['C1'] ?? 0).toBeGreaterThanOrEqual(20000);
    expect(words['C2'] ?? 0).toBeGreaterThanOrEqual(20000);
  });

  // ── Reading depth at B2–C2 (content expansion item 3, 2026-09-05) ─────────
  // Before this, every graded story sat between 70 and 625 Croatian words —
  // a B2 reader had nothing longer to read than a beginner. The long reads in
  // gradedStoriesLong.js carry `kind` (serial | feature | opinion | literary)
  // and, for serials, `series: { id, part, of }`. These pins are what a
  // "longer pieces" claim has to survive: a long read that is not long, a
  // serial with a missing part, or a quiz whose answers all sit at index 1
  // (the trap the first drafts of several pieces fell into) fails here.
  describe('long reads (B2–C2)', () => {
    type LongStory = Story & {
      kind?: string;
      series?: { id: string; part: number; of: number };
    };
    const longReads = (stories as LongStory[]).filter((s) => s.kind);
    const hrWords = (s: Story) =>
      s.paragraphs.reduce((n, p) => n + p.hr.trim().split(/\s+/).length, 0);

    it('exist at B2, C1 and C2 only, in the four genres, ≥ 11 per level', () => {
      expect(longReads.length).toBeGreaterThanOrEqual(35);
      const byLevel: Record<string, number> = {};
      for (const s of longReads) {
        expect(['B2', 'C1', 'C2'], `${s.id} level`).toContain(s.level);
        expect(['serial', 'feature', 'opinion', 'literary'], `${s.id} kind`).toContain(s.kind);
        expect(s.id, `${s.id} id shape`).toMatch(new RegExp(`^gs_${s.level.toLowerCase()}_long_`));
        byLevel[s.level] = (byLevel[s.level] ?? 0) + 1;
      }
      for (const l of ['B2', 'C1', 'C2']) expect(byLevel[l] ?? 0, l).toBeGreaterThanOrEqual(11);
      // the genres the item asked for, at the levels it asked for them
      expect(longReads.some((s) => s.level === 'C1' && s.kind === 'opinion')).toBe(true);
      expect(longReads.some((s) => s.level === 'C2' && s.kind === 'literary')).toBe(true);
      expect(longReads.some((s) => s.level === 'B2' && s.kind === 'serial')).toBe(true);
    });

    it('every long read is actually long: ≥ 800 Croatian words, ≥ 7 paragraphs, ≥ 8 vocab, 5 quiz', () => {
      for (const s of longReads) {
        expect(hrWords(s), `${s.id} words`).toBeGreaterThanOrEqual(800);
        expect(s.paragraphs.length, `${s.id} paragraphs`).toBeGreaterThanOrEqual(7);
        expect(s.vocabulary.length, `${s.id} vocab`).toBeGreaterThanOrEqual(8);
        expect(s.quiz.length, `${s.id} quiz`).toBe(5);
      }
    });

    it('quiz answers are not all at the same index (a reader can spot a pattern)', () => {
      for (const s of longReads) {
        const idx = new Set(s.quiz.map((q) => q.correct));
        expect(idx.size, `${s.id} quiz correct indices ${[...idx].join(',')}`).toBeGreaterThan(1);
      }
    });

    it('every serial is complete and consecutive, titled (k/n), and its intro says which part it is', () => {
      const bySeries = new Map<string, LongStory[]>();
      for (const s of longReads) {
        if (s.kind === 'serial') {
          expect(s.series, `${s.id} series`).toBeTruthy();
          const list = bySeries.get(s.series!.id) ?? [];
          list.push(s);
          bySeries.set(s.series!.id, list);
        } else {
          expect(s.series, `${s.id} non-serial carries series`).toBeUndefined();
        }
      }
      expect(bySeries.size).toBeGreaterThanOrEqual(3);
      for (const [id, parts] of bySeries) {
        parts.sort((a, b) => a.series!.part - b.series!.part);
        const of = parts[0]!.series!.of;
        expect(parts.length, `${id} parts`).toBe(of);
        parts.forEach((p, i) => {
          expect(p.series!.part, `${id} part order`).toBe(i + 1);
          expect(p.series!.of, `${id} of`).toBe(of);
          expect(p.title, `${id} title`).toMatch(new RegExp(`\\(${i + 1}/${of}\\)$`));
          expect(p.intro, `${id} intro`).toMatch(new RegExp(`Part ${i + 1} of ${of}`));
          expect(p.level, `${id} level`).toBe(parts[0]!.level);
        });
      }
    });
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
