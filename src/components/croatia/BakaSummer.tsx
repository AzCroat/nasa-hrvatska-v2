// src/components/croatia/BakaSummer.tsx
// Bakino Ljeto — ONE BOOK of four letters per screen (owner decision, 2026-09-29;
// bakaBooks.ts carries the split and the reasons). The letters live in
// bakaChapters.ts; progress keys are the pre-split ones, unchanged.
import React, { useState, useEffect, useRef } from 'react';
import type { AwardActivityType } from '../../types/index.js';
import { H } from '../../data';
import { markQuest } from '../../lib/quests.js';
import { lsGet, lsSet } from '../../lib/safeStorage';
import { CHAPTERS } from './bakaChapters';
import {
  BOOKS,
  BOOK_COUNT,
  CHAPTERS_PER_BOOK,
  LETTER_XP,
  BOOK_BONUS_XP,
  RESUME_KEY,
  bookMeta,
  chapterRange,
  readChaptersDone,
  writeChaptersDone,
  bookComplete,
  bookUnlocked,
  lockReason,
  resolveLaunchBook,
  readBookBonuses,
  bookBonusPaid,
  markBookBonusPaid,
} from './bakaBooks';

interface BakaSummerProps {
  goBack: () => void;
  award: (xp: number, celebrate?: boolean, activityType?: AwardActivityType) => void;
  /** 1–4. Absent on the `baka_summer` route, which resolves it (see resolveLaunchBook). */
  book?: number;
}

/** "Poglavlje 13: Pismo iz Slavonije" → "Pismo iz Slavonije". The global number is not shown. */
function letterTitle(title: string): string {
  return title.replace(/^Poglavlje \d+:\s*/, '');
}

/** The letter to open inside book n: the saved pointer if it is in range and reachable, else
 *  the first unread letter, else the first letter. */
function initialChapter(n: number, done: Set<number>): number {
  const { start, end } = chapterRange(n);
  const maxAllowed = done.size; // the next unread letter is the furthest a learner may open
  const saved = parseInt(lsGet(RESUME_KEY) || '-1', 10);
  if (Number.isFinite(saved) && saved >= start && saved <= end && saved <= maxAllowed) return saved;
  for (let i = start; i <= end; i++) if (!done.has(i) && i <= maxAllowed) return i;
  return start;
}

const pill = (active: boolean): React.CSSProperties => ({
  background: active ? '#b61800' : '#fff',
  color: active ? '#fff' : '#374151',
  border: active ? 'none' : '2px solid #d1d5db',
  borderRadius: 20,
  padding: '8px 22px',
  fontSize: 14,
  fontWeight: 800,
  cursor: 'pointer',
  boxShadow: active ? '0 2px 8px rgba(182,24,0,0.3)' : 'none',
  transition: 'all 0.2s',
});

export default function BakaSummer({ goBack, award, book }: BakaSummerProps) {
  const [chaptersDone, setChaptersDone] = useState<Set<number>>(() => readChaptersDone());
  const [activeBook, setActiveBook] = useState<number>(() => {
    if (book && book >= 1 && book <= BOOK_COUNT) return book;
    return resolveLaunchBook(chaptersDone);
  });
  const [chapter, setChapter] = useState<number>(() => initialChapter(activeBook, chaptersDone));
  const [showTranslation, setShowTranslation] = useState(false);
  const [showVocab, setShowVocab] = useState(false);
  const [bonusesPaid, setBonusesPaid] = useState<Set<number>>(() => readBookBonuses());
  const chapterXpFired = useRef(new Set<number>());
  const bonusFired = useRef(new Set<number>());

  useEffect(() => {
    setShowTranslation(false);
    setShowVocab(false);
  }, [chapter]);

  // THE BOOK BONUS FOLLOWS THE WORK: an effect keyed on the letters, paid once per book the
  // moment its fourth letter is done (or, for a learner who finished a book before the split,
  // the first time this effect sees it complete), never from a button that leaves. The legacy
  // 100 XP flag counts as every book paid — `bookBonusPaid` reads it — so nobody is paid twice.
  useEffect(() => {
    const paid = readBookBonuses();
    let changed = false;
    for (const b of BOOKS) {
      const { start, end } = chapterRange(b.n);
      if (end - start + 1 <= 0) continue; // total > 0: an empty book can never be "complete"
      if (!bookComplete(b.n, chaptersDone)) continue;
      if (bonusFired.current.has(b.n) || bookBonusPaid(b.n, paid)) continue;
      bonusFired.current.add(b.n);
      award(BOOK_BONUS_XP, false, 'heritage');
      markQuest('culture');
      markBookBonusPaid(b.n);
      paid.add(b.n);
      changed = true;
    }
    if (changed) setBonusesPaid(new Set(paid));
  }, [chaptersDone, award]);

  const meta = bookMeta(activeBook);
  const { start, end } = chapterRange(activeBook);
  const unlocked = bookUnlocked(activeBook, chaptersDone);
  const bookChapters = CHAPTERS.slice(start, end + 1);
  const doneInBook = bookChapters.filter((_, i) => chaptersDone.has(start + i)).length;
  const thisBookDone = bookComplete(activeBook, chaptersDone);
  const allDone = BOOKS.every((b) => bookComplete(b.n, chaptersDone));

  function openBook(n: number) {
    if (n < 1 || n > BOOK_COUNT) return;
    setActiveBook(n);
    setChapter(initialChapter(n, chaptersDone));
  }

  function goToChapter(idx: number) {
    if (idx < start || idx > end) return;
    if (idx > chaptersDone.size) return; // only the next unread letter is reachable
    setChapter(idx);
    lsSet(RESUME_KEY, String(idx));
  }

  function markComplete() {
    if (chapterXpFired.current.has(chapter)) return;
    chapterXpFired.current.add(chapter);
    const updated = new Set(chaptersDone);
    updated.add(chapter);
    setChaptersDone(updated);
    writeChaptersDone(updated);
    award(LETTER_XP, false, 'heritage');
    markQuest('culture');
    const next = chapter < end ? chapter + 1 : chapter;
    setChapter(next);
    lsSet(RESUME_KEY, String(next));
  }

  const header = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
      <button
        onClick={goBack}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: 22,
          color: 'var(--ink-red)',
          padding: '4px 8px',
          borderRadius: 6,
          lineHeight: 1,
        }}
        aria-label="Go back"
      >
        ←
      </button>
      <div style={{ flex: 1 }} data-testid="baka-book-header" data-book={activeBook}>
        {H(
          `📖 ${meta.hr}`,
          `Bakino Ljeto · Knjiga ${activeBook} od ${BOOK_COUNT} — ${meta.en}`,
          goBack,
        )}
      </div>
    </div>
  );

  // A LOCKED BOOK SAYS WHY AND OFFERS THE WAY THERE — never a blank screen, never the letters.
  if (!unlocked) {
    const prev = bookMeta(activeBook - 1);
    return (
      <div className="scr-wrap" style={{ paddingBottom: 32 }}>
        {header}
        <div
          data-testid="baka-book-locked"
          style={{
            background: 'var(--warning-bg)',
            border: '1px solid #fde68a',
            borderRadius: 12,
            padding: '20px 16px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 36, marginBottom: 8 }}>🔒</div>
          <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--ink-warn)', marginBottom: 6 }}>
            Ova knjiga je još zaključana.
          </div>
          <div style={{ fontSize: 14, color: 'var(--ink-body)', marginBottom: 16 }}>
            {lockReason(activeBook, chaptersDone)} — the letters follow one another, and this book
            picks up where {prev.doorTitle} leaves off.
          </div>
          <button
            data-testid="baka-open-previous"
            onClick={() => openBook(activeBook - 1)}
            style={pill(true)}
          >
            Open {prev.doorTitle} →
          </button>
        </div>
      </div>
    );
  }

  const current = bookChapters[chapter - start] ?? bookChapters[0]!;
  const letterNo = chapter - start + 1;
  const isCompleted = chaptersDone.has(chapter);
  const nextBook = activeBook < BOOK_COUNT ? bookMeta(activeBook + 1) : null;

  return (
    <div className="scr-wrap" style={{ paddingBottom: 32 }}>
      {header}

      {/* Progress: this book's four letters only */}
      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 12,
            color: 'var(--ink-muted-warm)',
            marginBottom: 6,
          }}
        >
          <span style={{ fontWeight: 600 }} data-testid="baka-letter-counter">
            Pismo {letterNo} od {CHAPTERS_PER_BOOK}
          </span>
          <span>
            {doneInBook} / {CHAPTERS_PER_BOOK} pročitano
          </span>
        </div>
        <div
          style={{
            background: '#e5e7eb',
            color: '#1c1917',
            borderRadius: 8,
            height: 8,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              background: '#b61800',
              height: '100%',
              width: `${(doneInBook / CHAPTERS_PER_BOOK) * 100}%`,
              borderRadius: 8,
              transition: 'width 0.4s ease',
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: 4, marginTop: 8, flexWrap: 'wrap' }}>
          {bookChapters.map((ch, i) => {
            const idx = start + i;
            const done = chaptersDone.has(idx);
            const active = idx === chapter;
            const accessible = idx <= chaptersDone.size;
            return (
              <button
                key={idx}
                data-testid="baka-letter-dot"
                onClick={() => accessible && goToChapter(idx)}
                title={letterTitle(ch.title)}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  border: active ? '2px solid #b61800' : '2px solid transparent',
                  background: done ? '#b61800' : active ? '#fca5a5' : '#e5e7eb',
                  cursor: accessible ? 'pointer' : 'default',
                  padding: 0,
                  fontSize: 9,
                  color: done ? '#fff' : active ? '#7f1d1d' : '#44403c',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
                aria-label={`Letter ${i + 1}${done ? ' (done)' : ''}`}
              >
                {done ? '✓' : i + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Book completion card */}
      {thisBookDone && (
        <div
          data-testid="baka-book-complete"
          style={{
            background: 'var(--grad-amber)',
            border: '2px solid #f59e0b',
            borderRadius: 12,
            padding: '20px 16px',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 36, marginBottom: 8 }}>🏆</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--ink-warn)', marginBottom: 6 }}>
            {allDone ? 'Završili ste cijelo Bakino Ljeto!' : `Završili ste knjigu „${meta.hr}“!`}
          </div>
          <div style={{ fontSize: 14, color: 'var(--ink-warn)', fontStyle: 'italic' }}>
            {allDone
              ? `All four books read. Bravo!`
              : `You finished all four letters of ${meta.doorTitle}.`}
            {bonusesPaid.has(activeBook) ? ` +${BOOK_BONUS_XP} XP` : ''}
          </div>
          {nextBook && !allDone && (
            <button
              data-testid="baka-open-next"
              onClick={() => openBook(activeBook + 1)}
              style={{ ...pill(true), marginTop: 12 }}
            >
              Sljedeća knjiga: {nextBook.hr} →
            </button>
          )}
        </div>
      )}

      {/* Letter card */}
      <div
        style={{
          background: 'var(--warning-bg)',
          borderRadius: 12,
          border: '1px solid #fde68a',
          boxShadow: '0 2px 12px rgba(180,96,0,0.08)',
          overflow: 'hidden',
          marginBottom: 16,
        }}
      >
        <div
          style={{
            background: '#b61800',
            padding: '12px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                color: '#fee2e2',
                fontWeight: 600,
                letterSpacing: 1,
                textTransform: 'uppercase',
              }}
            >
              {current.date}
            </div>
            <div
              style={{ fontSize: 15, fontWeight: 800, color: '#fff', marginTop: 2 }}
              data-testid="baka-letter-title"
            >
              {letterTitle(current.title)}
            </div>
          </div>
          {isCompleted && (
            <div
              style={{
                background: 'var(--card)',
                color: 'var(--ink-error)',
                borderRadius: '50%',
                width: 28,
                height: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                fontWeight: 800,
                flexShrink: 0,
              }}
            >
              ✓
            </div>
          )}
        </div>

        <div style={{ padding: '20px 16px 16px' }}>
          <div
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 15,
              lineHeight: 1.9,
              color: 'var(--ink-ink)',
              marginBottom: 16,
            }}
          >
            {current.croatian}
          </div>

          <button
            onClick={() => setShowTranslation((v) => !v)}
            style={{
              background: showTranslation ? '#0e7490' : '#fff',
              color: showTranslation ? '#fff' : '#0e7490',
              border: '2px solid #0e7490',
              borderRadius: 20,
              padding: '6px 16px',
              fontSize: 13,
              fontWeight: 700,
              cursor: 'pointer',
              marginBottom: showTranslation ? 12 : 0,
              transition: 'all 0.2s',
            }}
          >
            🌐 {showTranslation ? 'Hide English' : 'Show English'}
          </button>

          {showTranslation && (
            <div
              style={{
                background: '#f0fdfa',
                border: '1px solid #99f6e4',
                borderRadius: 8,
                padding: '14px 14px',
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 14,
                lineHeight: 1.8,
                color: '#134e4a',
                marginTop: 4,
              }}
            >
              {current.english}
            </div>
          )}
        </div>

        <div style={{ borderTop: '1px solid #fde68a', padding: '12px 16px' }}>
          <button
            onClick={() => setShowVocab((v) => !v)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 700,
              color: 'var(--warning-text)',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            📚 Vocabulary ({current.vocab.length} words) {showVocab ? '▲' : '▼'}
          </button>

          {showVocab && (
            <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {current.vocab.map((v, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    background: 'var(--warning-bg)',
                    borderRadius: 6,
                    padding: '6px 10px',
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      color: 'var(--ink-error)',
                      fontSize: 14,
                      fontFamily: 'Georgia, serif',
                    }}
                  >
                    {v.hr}
                  </span>
                  <span style={{ color: 'var(--ink-body)', fontSize: 13, textAlign: 'right' }}>
                    {v.en}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          style={{
            background: 'var(--info-bg)',
            borderTop: '1px solid #99f6e4',
            padding: '10px 16px',
            display: 'flex',
            gap: 8,
            alignItems: 'flex-start',
          }}
        >
          <span style={{ fontSize: 16, flexShrink: 0 }}>🌍</span>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              color: 'var(--ink-accent)',
              lineHeight: 1.6,
              fontStyle: 'italic',
            }}
          >
            {current.cultural}
          </p>
        </div>
      </div>

      {/* Navigation within the book */}
      <div style={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
        <button
          onClick={() => goToChapter(chapter - 1)}
          disabled={chapter === start}
          style={{
            ...pill(false),
            background: chapter === start ? '#e5e7eb' : '#fff',
            color: chapter === start ? 'var(--ink-muted)' : '#374151',
            borderColor: chapter === start ? '#e5e7eb' : '#d1d5db',
            cursor: chapter === start ? 'default' : 'pointer',
            padding: '8px 18px',
          }}
        >
          ← Previous
        </button>

        {!isCompleted ? (
          <button data-testid="baka-mark-complete" onClick={markComplete} style={pill(true)}>
            ✓ Mark Complete
          </button>
        ) : chapter < end ? (
          <button onClick={() => goToChapter(chapter + 1)} style={pill(true)}>
            Continue →
          </button>
        ) : (
          <div
            style={{
              fontSize: 13,
              color: 'var(--ink-muted)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            🏆 Knjiga pročitana!
          </div>
        )}
      </div>
    </div>
  );
}
