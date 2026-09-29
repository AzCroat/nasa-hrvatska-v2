/**
 * bakaBooks.test.tsx — Bakino Ljeto is four books of four letters (owner decision,
 * 2026-09-29: "we can't have 16 letters for the user to read through … broken down
 * into 4 different lessons of 4 … make sure we aren't overwhelming the user").
 *
 * Drives the REAL screen (`BakaSummer`), the REAL door (`DoorScreen`) and the REAL
 * data. What it pins:
 *   - the four books partition all sixteen letters exactly once (a book of five, or a
 *     letter in two books, fails here — the books are chunks of ONE array);
 *   - the screen never shows "od 16" or sixteen dots — one book, four letters;
 *   - a locked book renders its reason and a button to the previous book, and NOT the
 *     letters;
 *   - the fourth letter of a book pays the 25 XP book bonus once, and not again on a
 *     remount; a learner holding the legacy 100 XP flag is paid no book bonus;
 *   - `baka_summer` launched by the daily session (nh_session_started) resumes on the
 *     first unfinished book; launched from the door it opens book 1;
 *   - the door shows a locked book as locked, naming the book to finish first.
 *
 * Mutation-verified (2026-09-29), each confirmed landed before the run:
 *   CHAPTERS_PER_BOOK = 5 (a book of five)                 → fails the partition tests
 *   the bonus effect skipping `bookBonusPaid` (paid twice) → fails the remount test
 *   `legacyBonusPaid` returning false (legacy flag ignored) → fails the legacy test
 *   `if (!unlocked)` → `if (false)` (locked screen shows the letters) → fails the lock tests
 *   dots mapped over CHAPTERS (sixteen dots)               → fails the dot test
 *   `resolveLaunchBook` always 1 (pool launch ignores progress) → fails the resume test
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { readFileSync } from 'node:fs';

vi.mock('../lib/quests.js', () => ({ markQuest: vi.fn() }));
// DoorScreen embeds StoriesTab/MediaTab, which need AppContext; the door's cards are the subject.
vi.mock('../components/croatia/StoriesTab', () => ({
  default: () => <div data-testid="stories-embed" />,
}));
vi.mock('../components/croatia/MediaTab', () => ({
  default: () => <div data-testid="media-embed" />,
}));

import BakaSummer from '../components/croatia/BakaSummer';
import DoorScreen from '../components/hrvatska/DoorScreen';
import { CHAPTERS } from '../components/croatia/bakaChapters';
import {
  BOOKS,
  BOOK_COUNT,
  CHAPTERS_PER_BOOK,
  BOOK_BONUS_XP,
  LETTER_XP,
  DONE_KEY,
  RESUME_KEY,
  LEGACY_BONUS_KEY,
  BOOK_BONUS_KEY,
  chapterRange,
  currentBook,
  lockReason,
} from '../components/croatia/bakaBooks';
import { DOOR_ITEMS, MUST_NOT_ORPHAN } from '../components/hrvatska/doors';
import { ROUTE_KEYS } from '../lib/routeKeys';
import { SCREEN_TAB } from '../lib/screenTabs';
import { CROATIA_POOL } from '../lib/croatiaPool';
import { markQuest } from '../lib/quests.js';

const seedDone = (idxs: number[]) => localStorage.setItem(DONE_KEY, JSON.stringify(idxs));
const range = (a: number, b: number) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const awardsOf = (award: ReturnType<typeof vi.fn>, xp: number) =>
  award.mock.calls.filter((c) => c[0] === xp);

beforeEach(() => {
  vi.mocked(markQuest).mockClear();
});

describe('the four books partition the sixteen letters exactly once', () => {
  it('there are four books of four, and together they are the whole array', () => {
    expect(BOOKS).toHaveLength(BOOK_COUNT);
    expect(BOOK_COUNT).toBe(4);
    expect(CHAPTERS_PER_BOOK).toBe(4);
    expect(CHAPTERS).toHaveLength(BOOK_COUNT * CHAPTERS_PER_BOOK);
    const seen: number[] = [];
    for (const b of BOOKS) {
      const { start, end } = chapterRange(b.n);
      expect(end - start + 1, `book ${b.n} holds four letters`).toBe(4);
      for (let i = start; i <= end; i++) seen.push(i);
    }
    expect([...seen].sort((a, b) => a - b)).toEqual(range(0, CHAPTERS.length - 1));
    expect(new Set(seen).size).toBe(CHAPTERS.length);
  });

  it('the books follow the owner’s split: June–July, high summer, autumn–New Year, other regions', () => {
    expect(CHAPTERS[chapterRange(1).start]!.title).toMatch(/Ljeto počinje/);
    expect(CHAPTERS[chapterRange(1).end]!.title).toMatch(/Večer uz more/);
    expect(CHAPTERS[chapterRange(2).start]!.title).toMatch(/pašticade/);
    expect(CHAPTERS[chapterRange(3).start]!.title).toMatch(/Svi Sveti/);
    expect(CHAPTERS[chapterRange(3).end]!.title).toMatch(/Nova godina/);
    expect(CHAPTERS[chapterRange(4).start]!.title).toMatch(/Slavonije/);
    expect(CHAPTERS[chapterRange(4).end]!.title).toMatch(/Istre/);
  });

  it('every book is routed, tabbed under Croatia, on the Priče door in order, and never orphaned', () => {
    const routes = BOOKS.map((b) => b.route);
    expect(routes[0]).toBe('baka_summer'); // the E2E and the pool rely on it
    expect(new Set(routes).size).toBe(routes.length);
    for (const r of routes) {
      expect(ROUTE_KEYS.has(r), `${r} routed`).toBe(true);
      expect(SCREEN_TAB[r], `${r} filed under Croatia`).toBe('croatia');
      expect(MUST_NOT_ORPHAN, `${r} must-not-orphan`).toContain(r);
    }
    const priceIds = DOOR_ITEMS.filter((i) => i.doorId === 'price').map((i) => i.id);
    expect(priceIds.slice(0, 4)).toEqual(routes);
    // The pool keeps ONE entry (the resume route): adding the others would change the
    // measured P4 culture-slot composition.
    const pooled = CROATIA_POOL.filter((e) => routes.includes(e.screen)).map((e) => e.screen);
    expect(pooled).toEqual(['baka_summer']);
  });

  it('door titles are distinct and none is a substring of another (Playwright matches substrings)', () => {
    const titles = BOOKS.map((b) => b.doorTitle);
    for (const a of titles)
      for (const b of titles) if (a !== b) expect(a.includes(b), `${a} contains ${b}`).toBe(false);
    for (const b of BOOKS) {
      const item = DOOR_ITEMS.find((i) => i.id === b.route)!;
      expect(item.title).toBe(b.doorTitle);
      expect(item.sub).toBe(b.doorSub);
    }
  });

  it('AppRouter hands books 2–4 their number and gives baka_summer none (the resume route)', () => {
    const src = readFileSync('src/components/AppRouter.tsx', 'utf8');
    expect(src).toMatch(
      /currentScreen === 'baka_summer'[\s\S]{0,200}<BakaSummer goBack=\{goBack\} award=\{award\} \/>/,
    );
    expect(src).toMatch(
      /currentScreen === 'baka_berba'[\s\S]{0,200}<BakaSummer goBack=\{goBack\} award=\{award\} book=\{2\} \/>/,
    );
    expect(src).toMatch(
      /currentScreen === 'baka_zima'[\s\S]{0,200}<BakaSummer goBack=\{goBack\} award=\{award\} book=\{3\} \/>/,
    );
    expect(src).toMatch(
      /currentScreen === 'baka_pisma'[\s\S]{0,200}<BakaSummer goBack=\{goBack\} award=\{award\} book=\{4\} \/>/,
    );
  });
});

describe('the screen presents ONE book', () => {
  it('shows four dots, "Pismo 1 od 4", the book’s title — and never "od 16" or a global letter number', () => {
    render(<BakaSummer goBack={vi.fn()} award={vi.fn()} book={1} />);
    expect(screen.getAllByTestId('baka-letter-dot')).toHaveLength(4);
    expect(screen.getByTestId('baka-letter-counter').textContent).toBe('Pismo 1 od 4');
    expect(screen.getByTestId('baka-book-header').textContent).toContain('Ljeto počinje');
    const body = document.body.textContent ?? '';
    expect(body).not.toMatch(/od 16/);
    expect(body).not.toMatch(/Poglavlje \d+/);
    expect(screen.getByTestId('baka-letter-title').textContent).toBe('Ljeto počinje');
  });

  it('with all sixteen letters read, book 4 still shows four dots and its own completion card', () => {
    seedDone(range(0, 15));
    localStorage.setItem(LEGACY_BONUS_KEY, '1');
    render(<BakaSummer goBack={vi.fn()} award={vi.fn()} book={4} />);
    expect(screen.getAllByTestId('baka-letter-dot')).toHaveLength(4);
    expect(document.body.textContent).not.toMatch(/od 16/);
    expect(screen.getByTestId('baka-book-complete').textContent).toMatch(/cijelo Bakino Ljeto/);
  });

  it('a letter is reachable only after the one before it, within the book', () => {
    const award = vi.fn();
    render(<BakaSummer goBack={vi.fn()} award={award} book={1} />);
    const dots = screen.getAllByTestId('baka-letter-dot');
    fireEvent.click(dots[2]!); // letter 3 is not yet reachable
    expect(screen.getByTestId('baka-letter-counter').textContent).toBe('Pismo 1 od 4');
    fireEvent.click(screen.getByTestId('baka-mark-complete'));
    expect(awardsOf(award, LETTER_XP)).toHaveLength(1);
    expect(screen.getByTestId('baka-letter-counter').textContent).toBe('Pismo 2 od 4');
    expect(JSON.parse(localStorage.getItem(DONE_KEY)!)).toEqual([0]);
    expect(localStorage.getItem(RESUME_KEY)).toBe('1');
  });
});

describe('a locked book says why and offers the way there', () => {
  it('book 2 with book 1 unfinished renders the reason and the previous-book button, not the letters', () => {
    render(<BakaSummer goBack={vi.fn()} award={vi.fn()} book={2} />);
    const locked = screen.getByTestId('baka-book-locked');
    expect(locked.textContent).toContain("Finish Baka's Summer first");
    expect(screen.queryByTestId('baka-letter-title')).toBeNull();
    expect(screen.queryByTestId('baka-mark-complete')).toBeNull();
    expect(screen.queryAllByTestId('baka-letter-dot')).toHaveLength(0);
    fireEvent.click(screen.getByTestId('baka-open-previous'));
    expect(screen.getByTestId('baka-book-header').dataset.book).toBe('1');
    expect(screen.getByTestId('baka-letter-title').textContent).toBe('Ljeto počinje');
  });

  it('book 3 opens once book 2 is done, and book 4 stays locked naming book 3', () => {
    seedDone(range(0, 7));
    const done = new Set(range(0, 7));
    expect(lockReason(3, done)).toBeNull();
    expect(lockReason(4, done)).toBe("Finish Baka's Winter first");
    render(<BakaSummer goBack={vi.fn()} award={vi.fn()} book={4} />);
    expect(screen.getByTestId('baka-book-locked').textContent).toContain(
      "Finish Baka's Winter first",
    );
  });
});

describe('the book bonus follows the work and is paid once', () => {
  it('the fourth letter pays 20 for the letter and 25 for the book, marks the quest, and remounting pays nothing', () => {
    seedDone([0, 1, 2]);
    localStorage.setItem(RESUME_KEY, '3');
    const award = vi.fn();
    const { unmount } = render(<BakaSummer goBack={vi.fn()} award={award} book={1} />);
    expect(screen.getByTestId('baka-letter-counter').textContent).toBe('Pismo 4 od 4');
    expect(awardsOf(award, BOOK_BONUS_XP)).toHaveLength(0);
    fireEvent.click(screen.getByTestId('baka-mark-complete'));
    expect(awardsOf(award, LETTER_XP)).toHaveLength(1);
    expect(awardsOf(award, BOOK_BONUS_XP)).toEqual([[BOOK_BONUS_XP, false, 'heritage']]);
    expect(JSON.parse(localStorage.getItem(BOOK_BONUS_KEY)!)).toEqual([1]);
    expect(vi.mocked(markQuest)).toHaveBeenCalledWith('culture');
    expect(screen.getByTestId('baka-book-complete').textContent).toContain(`+${BOOK_BONUS_XP} XP`);
    expect(screen.getByTestId('baka-open-next').textContent).toContain('Fešta i berba');
    unmount();
    cleanup();
    const again = vi.fn();
    render(<BakaSummer goBack={vi.fn()} award={again} book={1} />);
    expect(again).not.toHaveBeenCalled();
    expect(JSON.parse(localStorage.getItem(BOOK_BONUS_KEY)!)).toEqual([1]);
  });

  it('a learner holding the legacy 100 XP flag is paid no book bonus, on any book', () => {
    seedDone(range(0, 15));
    localStorage.setItem(LEGACY_BONUS_KEY, '1');
    for (const n of [1, 2, 3, 4]) {
      const award = vi.fn();
      render(<BakaSummer goBack={vi.fn()} award={award} book={n} />);
      expect(award, `book ${n}`).not.toHaveBeenCalled();
      expect(screen.getByTestId('baka-book-complete').textContent).not.toContain('XP');
      cleanup();
    }
    expect(localStorage.getItem(BOOK_BONUS_KEY)).toBeNull();
  });

  it('a learner who finished books before the split is paid each once, the first time the screen sees them', () => {
    seedDone(range(0, 7)); // books 1 and 2 done under the one-screen version, no legacy flag
    const award = vi.fn();
    render(<BakaSummer goBack={vi.fn()} award={award} book={3} />);
    expect(awardsOf(award, BOOK_BONUS_XP)).toHaveLength(2);
    expect(JSON.parse(localStorage.getItem(BOOK_BONUS_KEY)!)).toEqual([1, 2]);
    cleanup();
    const again = vi.fn();
    render(<BakaSummer goBack={vi.fn()} award={again} book={3} />);
    expect(again).not.toHaveBeenCalled();
  });
});

describe('baka_summer without a book prop', () => {
  it('launched by the daily session, resumes on the first unfinished book', () => {
    seedDone(range(0, 7));
    localStorage.setItem(LEGACY_BONUS_KEY, '1');
    sessionStorage.setItem('nh_session_started', 'baka_summer');
    expect(currentBook(new Set(range(0, 7)))).toBe(3);
    render(<BakaSummer goBack={vi.fn()} award={vi.fn()} />);
    expect(screen.getByTestId('baka-book-header').dataset.book).toBe('3');
    expect(screen.getByTestId('baka-letter-title').textContent).toBe('Svi Sveti');
  });

  it('launched from the door (no session handoff), opens book 1', () => {
    seedDone(range(0, 7));
    localStorage.setItem(LEGACY_BONUS_KEY, '1');
    render(<BakaSummer goBack={vi.fn()} award={vi.fn()} />);
    expect(screen.getByTestId('baka-book-header').dataset.book).toBe('1');
  });

  it('with everything read, the session lands on the last book', () => {
    seedDone(range(0, 15));
    localStorage.setItem(LEGACY_BONUS_KEY, '1');
    sessionStorage.setItem('nh_session_started', 'baka_summer');
    render(<BakaSummer goBack={vi.fn()} award={vi.fn()} />);
    expect(screen.getByTestId('baka-book-header').dataset.book).toBe('4');
  });
});

describe('the Priče door shows a locked book honestly', () => {
  it('a fresh learner sees book 1 open and books 2–4 locked, each naming the book before it', () => {
    render(<DoorScreen doorId="price" setScr={vi.fn()} sCurEx={vi.fn()} onBack={vi.fn()} />);
    expect(screen.getByTestId('door-item-baka_summer').dataset.locked).toBeUndefined();
    expect(screen.getByTestId('door-item-baka_summer').textContent).toContain('Letters 1–4');
    const b2 = screen.getByTestId('door-item-baka_berba');
    expect(b2.dataset.locked).toBe('true');
    expect(b2.textContent).toContain('🔒');
    expect(b2.textContent).toContain("Finish Baka's Summer first");
    expect(screen.getByTestId('door-item-baka_zima').textContent).toContain(
      "Finish Baka's Harvest first",
    );
    expect(screen.getByTestId('door-item-baka_pisma').textContent).toContain(
      "Finish Baka's Winter first",
    );
  });

  it('finishing book 1 unlocks book 2 on the door, and a locked card still opens its screen', () => {
    seedDone(range(0, 3));
    const setScr = vi.fn();
    render(<DoorScreen doorId="price" setScr={setScr} sCurEx={vi.fn()} onBack={vi.fn()} />);
    const b2 = screen.getByTestId('door-item-baka_berba');
    expect(b2.dataset.locked).toBeUndefined();
    expect(b2.textContent).toContain('Letters 5–8');
    fireEvent.click(screen.getByTestId('door-item-baka_zima'));
    expect(setScr).toHaveBeenCalledWith('baka_zima');
  });
});
