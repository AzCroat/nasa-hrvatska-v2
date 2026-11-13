/**
 * PitchAccentMastery — teach the 4 Croatian pitch accents.
 *
 * Croatian is one of the few European languages with a fully functional
 * pitch accent system (like Japanese or Swedish). This screen takes learners
 * from zero awareness to practical recognition in 6 lessons.
 */
import React, { useState, useRef, useEffect } from 'react';
import { speak } from '../../data';
import { speakProsody } from '../../lib/audio.js';
import { markQuest } from '../../lib/quests.js';
import { useStats } from '../../context/StatsContext';
import { knightSpeak } from '../../lib/knightSpeak.js';
import CharacterPortrait from '../family/CharacterPortrait';
import { PITCH_ACCENT_LESSONS } from '../../data/pitchAccentContent.js';
import PassGateNotice from '../shared/PassGateNotice';
import { passedLesson } from '../../lib/lessonGate';
import { accentInk, accentFill } from '../../lib/accentInk';

// Map accent id → rich lesson data
const LESSON_BY_ACCENT = {
  kratkosilazni: PITCH_ACCENT_LESSONS.find((l) => l.id === 'short_falling'),
  kratkouzlazni: PITCH_ACCENT_LESSONS.find((l) => l.id === 'short_rising'),
  dugosilazni: PITCH_ACCENT_LESSONS.find((l) => l.id === 'long_falling'),
  dugouzlazni: PITCH_ACCENT_LESSONS.find((l) => l.id === 'long_rising'),
};

// ── Prosody descriptors for each accent ───────────────────────────────────────
// These are approximate SSML contours; they cannot perfectly reproduce native
// pitch-accent but create an acoustically DIFFERENT rendering for each accent type.
// The two members of any minimal pair always have different accents, so they will
// always receive different prosody descriptors — giving learners an audible contrast.
const ACCENT_PROSODY: Record<string, { pitch?: string; contour?: string; rate?: string }> = {
  kratkosilazni: { rate: '+0%', contour: '(0%,+8%) (100%,-22%)' }, // short-falling: starts high, drops sharply
  dugosilazni: { rate: '-25%', contour: '(0%,+12%) (100%,-28%)' }, // long-falling: sustained then drops
  kratkouzlazni: { rate: '+0%', contour: '(0%,-10%) (100%,+15%)' }, // short-rising: dips then rises
  dugouzlazni: { rate: '-25%', contour: '(0%,-15%) (100%,+22%)' }, // long-rising: sustained low-to-high
};

// ── Accent system data ────────────────────────────────────────────────────────
// Rewritten 2026-11-13 (C1 workbook comparison). The old data drew the symbols wrong
// (` for short falling, ´ for short rising, ¯ and ˆ for the long ones), listed "kȕća"
// (it is kùća) and "rûka/lûka" as long-rising, and invented "dialectal" minimal pairs
// (vȍda, nȏga, glâva, rùka, ràd) and long-rising monosyllables (nȏž, sȏl, stȏl —
// a rising accent never stands on a one-syllable word). Standard notation: ȁ short
// falling, à short rising, ȃ long falling, á long rising. Every pair below is either a
// real minimal pair (grȁd/grȃd, pȁs/pȃs, lȕk/lȗk, kȍsa/kòsa, lȕka/Lúka) or the real
// accent shift of one noun between nominative and accusative.
const ACCENTS = [
  {
    id: 'kratkosilazni',
    symbol: '◌̏',
    name: 'Kratkosilazni',
    nameEn: 'Short-Falling',
    emoji: '⬇️',
    color: '#dc2626',
    bg: 'var(--error-bg)',
    border: '#fecaca',
    rule: 'Short vowel, pitch drops. Only on the FIRST syllable, or on a one-syllable word.',
    desc: `The kratkosilazni (short-falling) accent is a quick, clipped drop in pitch on a short vowel. Like the other falling accent, it can stand only on the first syllable of a word, or on a one-syllable word. Dictionaries mark it with a double grave: ȁ.`,
    examples: [
      {
        hr: 'grȁd',
        en: 'hail (weather)',
        audio: 'grad',
        tip: 'vs. grȃd = city — same letters, a shorter vowel',
      },
      { hr: 'brȁt', en: 'brother', audio: 'brat', tip: 'One short syllable with a drop' },
      { hr: 'mȁjka', en: 'mother', audio: 'majka', tip: 'Short falling on the first syllable' },
      { hr: 'mȍre', en: 'sea', audio: 'more', tip: 'Two syllables; the accent is on the first' },
      {
        hr: 'pȁs',
        en: 'dog',
        audio: 'pas',
        tip: 'vs. pȃs = belt — only the vowel length differs',
      },
      {
        hr: 'lȕka',
        en: 'harbour, port',
        audio: 'luka',
        tip: 'vs. Lúka = the name Luka — pitch and length both differ',
      },
    ],
    pairs: [
      {
        a: { hr: 'grȁd', en: 'hail', audio: 'grad', accentId: 'kratkosilazni' },
        b: { hr: 'grȃd', en: 'city', audio: 'grad', accentId: 'dugosilazni' },
        note: 'Same spelling in everyday text — context tells you which one',
      },
      {
        a: { hr: 'pȁs', en: 'dog', audio: 'pas', accentId: 'kratkosilazni' },
        b: { hr: 'pȃs', en: 'belt / waist', audio: 'pas', accentId: 'dugosilazni' },
        note: 'Short vowel = dog; long vowel = belt',
      },
      {
        a: { hr: 'lȕka', en: 'harbour', audio: 'luka', accentId: 'kratkosilazni' },
        b: { hr: 'Lúka', en: 'Luka (name)', audio: 'luka', accentId: 'dugouzlazni' },
        note: 'Place vs person — the accent makes the difference',
      },
    ],
    quiz: [
      {
        q: 'The kratkosilazni accent can stand on which syllable?',
        opts: [
          'First syllable only (or a one-syllable word)',
          'Any syllable',
          'Last syllable only',
          'Second syllable only',
        ],
        correct: 'First syllable only (or a one-syllable word)',
      },
      {
        q: 'How long is the vowel in a kratkosilazni syllable?',
        opts: ['Short', 'Long', 'Variable', 'Silent'],
        correct: 'Short',
      },
      {
        q: 'Which word means "hail" (weather)?',
        opts: ['grȁd', 'grȃd', 'grád', 'gràd'],
        correct: 'grȁd',
      },
      {
        q: 'pȁs means "dog". What does pȃs mean?',
        opts: ['belt / waist', 'cat', 'dog (plural)', 'leg'],
        correct: 'belt / waist',
      },
    ],
  },
  {
    id: 'kratkouzlazni',
    symbol: '◌̀',
    name: 'Kratkouzlazni',
    nameEn: 'Short-Rising',
    emoji: '⬆️',
    color: '#16a34a',
    bg: 'var(--success-bg)',
    border: '#bbf7d0',
    rule: 'Short vowel, the voice rises. Never on a one-syllable word or a final syllable.',
    desc: `The kratkouzlazni (short-rising) accent is a short vowel on which the voice rises into the next syllable. Rising accents never stand on a one-syllable word and never on the last syllable of a longer word. Dictionaries mark it with a grave: à — not to be confused with the double grave of the short-falling accent.`,
    examples: [
      { hr: 'vòda', en: 'water', audio: 'voda', tip: 'Short rising on the first syllable' },
      { hr: 'žèna', en: 'woman / wife', audio: 'žena', tip: 'Short rising on že-' },
      { hr: 'nòga', en: 'leg / foot', audio: 'noga', tip: 'Short rising on no-' },
      { hr: 'kùća', en: 'house', audio: 'kuća', tip: 'Short rising on ku-' },
      { hr: 'sèstra', en: 'sister', audio: 'sestra', tip: 'Short rising on the first syllable' },
      { hr: 'kòsa', en: 'hair', audio: 'kosa', tip: 'vs. kȍsa = scythe, short falling' },
    ],
    pairs: [
      {
        a: { hr: 'kòsa', en: 'hair', audio: 'kosa', accentId: 'kratkouzlazni' },
        b: { hr: 'kȍsa', en: 'scythe', audio: 'kosa', accentId: 'kratkosilazni' },
        note: 'Both vowels short — rising for hair, falling for the scythe',
      },
      {
        a: { hr: 'vòda', en: 'water (nom.)', audio: 'voda', accentId: 'kratkouzlazni' },
        b: { hr: 'vȍdu', en: 'water (acc.)', audio: 'vodu', accentId: 'kratkosilazni' },
        note: 'One noun, two cases: the accusative moves to a short falling accent',
      },
      {
        a: { hr: 'nòga', en: 'leg (nom.)', audio: 'noga', accentId: 'kratkouzlazni' },
        b: { hr: 'nȍgu', en: 'leg (acc.)', audio: 'nogu', accentId: 'kratkosilazni' },
        note: 'The same alternation as vòda → vȍdu',
      },
    ],
    quiz: [
      {
        q: 'Which kind of word can NEVER carry a rising accent?',
        opts: ['A one-syllable word', 'A two-syllable word', 'A noun', 'A verb'],
        correct: 'A one-syllable word',
      },
      {
        q: "On which syllable CAN'T the kratkouzlazni stand?",
        opts: ['The last syllable', 'The first syllable', 'The second syllable', 'Any syllable'],
        correct: 'The last syllable',
      },
      {
        q: 'Which spelling shows the standard accent of "voda" (water)?',
        opts: ['vòda', 'vȍda', 'vȃda', 'vóda'],
        correct: 'vòda',
      },
      { q: 'What does kòsa mean?', opts: ['hair', 'scythe', 'goat', 'bone'], correct: 'hair' },
    ],
  },
  {
    id: 'dugosilazni',
    symbol: '◌̑',
    name: 'Dugosilazni',
    nameEn: 'Long-Falling',
    emoji: '📉',
    color: '#d97706',
    bg: 'var(--warning-bg)',
    border: '#fde68a',
    rule: 'Long vowel, pitch falls. Only on the FIRST syllable, or on a one-syllable word.',
    desc: `The dugosilazni (long-falling) accent is a long vowel on which the pitch drops: the vowel is held, then falls. Like the short-falling accent it stands only on the first syllable or on a one-syllable word, where it is very common. Dictionaries mark it with an inverted breve: ȃ.`,
    examples: [
      {
        hr: 'grȃd',
        en: 'city / town',
        audio: 'grad',
        tip: 'vs. grȁd = hail — this one holds the vowel',
      },
      { hr: 'dȃn', en: 'day', audio: 'dan', tip: 'One syllable held long, then dropping' },
      { hr: 'nȏć', en: 'night', audio: 'noć', tip: 'One syllable held long, then dropping' },
      {
        hr: 'pȃs',
        en: 'belt / waist',
        audio: 'pas',
        tip: 'vs. pȁs = dog — the long vowel changes the meaning',
      },
      { hr: 'vȋno', en: 'wine', audio: 'vino', tip: 'Long falling on the first syllable' },
      { hr: 'sȗnce', en: 'sun', audio: 'sunce', tip: 'Long falling on the first syllable' },
    ],
    pairs: [
      {
        a: { hr: 'grȃd', en: 'city', audio: 'grad', accentId: 'dugosilazni' },
        b: { hr: 'grȁd', en: 'hail', audio: 'grad', accentId: 'kratkosilazni' },
        note: 'Both falling — only the length differs',
      },
      {
        a: { hr: 'pȃs', en: 'belt / waist', audio: 'pas', accentId: 'dugosilazni' },
        b: { hr: 'pȁs', en: 'dog', audio: 'pas', accentId: 'kratkosilazni' },
        note: 'Long vowel = belt; short vowel = dog',
      },
      {
        a: { hr: 'lȗk', en: 'arch, bow', audio: 'luk', accentId: 'dugosilazni' },
        b: { hr: 'lȕk', en: 'onion', audio: 'luk', accentId: 'kratkosilazni' },
        note: 'Length alone tells the arch from the onion',
      },
    ],
    quiz: [
      {
        q: 'How long is the vowel in a dugosilazni syllable?',
        opts: ['Long', 'Short', 'Variable', 'Depends on context'],
        correct: 'Long',
      },
      {
        q: 'grȃd means city. What does grȁd mean?',
        opts: ['hail (weather)', 'garden', 'wall', 'gate'],
        correct: 'hail (weather)',
      },
      {
        q: 'The dugosilazni accent sounds like:',
        opts: ['A held, falling note', 'A quick rise', 'A quick drop', 'A held rise'],
        correct: 'A held, falling note',
      },
      {
        q: 'Which word means "onion"?',
        opts: ['lȕk', 'lȗk', 'lúk', 'lùk'],
        correct: 'lȕk',
      },
    ],
  },
  {
    id: 'dugouzlazni',
    symbol: '◌́',
    name: 'Dugouzlazni',
    nameEn: 'Long-Rising',
    emoji: '📈',
    color: '#0e7490',
    bg: 'var(--info-bg)',
    border: '#bae6fd',
    rule: 'Long vowel, the voice rises. Never on a one-syllable word or a final syllable.',
    desc: `The dugouzlazni (long-rising) accent is a long vowel on which the voice rises into the next syllable. Like the short-rising accent it never stands on a one-syllable word and never on the last syllable of a longer word. Dictionaries mark it with an acute: á. Many such nouns move to a short-falling accent in the accusative: rúka → rȕku.`,
    examples: [
      {
        hr: 'rúka',
        en: 'hand / arm',
        audio: 'ruka',
        tip: 'Hold the first vowel while the voice rises',
      },
      {
        hr: 'Lúka',
        en: 'Luka (male name)',
        audio: 'luka',
        tip: 'vs. lȕka = harbour — the name rises, the place falls',
      },
      { hr: 'gláva', en: 'head', audio: 'glava', tip: 'Long rising on gla-' },
      { hr: 'zíma', en: 'winter', audio: 'zima', tip: 'Long rising on zi-' },
      { hr: 'sréća', en: 'happiness / luck', audio: 'sreća', tip: 'Long rising on sre-' },
      { hr: 'zvijézda', en: 'star', audio: 'zvijezda', tip: 'Long rising on the -ije- syllable' },
    ],
    pairs: [
      {
        a: { hr: 'Lúka', en: 'Luka (name)', audio: 'luka', accentId: 'dugouzlazni' },
        b: { hr: 'lȕka', en: 'harbour', audio: 'luka', accentId: 'kratkosilazni' },
        note: 'Long rising for the person, short falling for the place',
      },
      {
        a: { hr: 'rúka', en: 'hand (nom.)', audio: 'ruka', accentId: 'dugouzlazni' },
        b: { hr: 'rȕku', en: 'hand (acc.)', audio: 'ruku', accentId: 'kratkosilazni' },
        note: 'One noun, two cases: the accusative moves to a short falling accent',
      },
      {
        a: { hr: 'gláva', en: 'head (nom.)', audio: 'glava', accentId: 'dugouzlazni' },
        b: { hr: 'glȁvu', en: 'head (acc.)', audio: 'glavu', accentId: 'kratkosilazni' },
        note: 'The same alternation as rúka → rȕku',
      },
    ],
    quiz: [
      {
        q: 'The dugouzlazni sounds most like:',
        opts: ['A long, rising note', 'A quick drop', 'A short rise', 'A held fall'],
        correct: 'A long, rising note',
      },
      {
        q: 'What separates the dugouzlazni from the dugosilazni?',
        opts: ['The pitch direction', 'The vowel length', 'The number of syllables', 'Nothing'],
        correct: 'The pitch direction',
      },
      { q: 'rúka means:', opts: ['hand / arm', 'foot', 'head', 'shoulder'], correct: 'hand / arm' },
      {
        q: 'Lúka vs lȕka — which is the male name?',
        opts: ['Lúka (long rising)', 'lȕka (short falling)', 'They are the same', 'Neither'],
        correct: 'Lúka (long rising)',
      },
    ],
  },
];

const PRACTICAL = {
  title: 'Pitch Accent in Real Speech',
  subtitle: 'What actually matters for learners',
  emoji: '🗣️',
  color: '#7c3aed',
  bg: 'var(--mode-bg)',
  border: '#ddd6fe',
  sections: [
    {
      heading: 'The truth about pitch accent',
      text: `Most native Croatian speakers don't consciously think about pitch accent — they acquired it as children. Ask a Croatian which accent a word has and many won't know the technical term, even though they say it perfectly. You don't need perfect accent production to communicate. What you need is awareness — so you're not confused when words sound "different" from what you expect.`,
    },
    {
      heading: 'Regional variation is real',
      text: `The four-accent system described here is that of the standard language — careful public speech and the dictionaries. Everyday speech varies by region, and many speakers do not keep all four accents apart. Don't panic if what you hear in Split or Zagreb sounds unlike this — it's all authentic Croatian.`,
    },
    {
      heading: 'Two things to get right first',
      text: `Never stress the last syllable of a longer word: gòvoriti, prìjatelj, Hȑvātskā — final stress is the clearest sign of a foreign accent. And notice which vowels are long. Croatians will rarely misunderstand a wrong pitch direction; the direction comes with listening.`,
    },
    {
      heading: 'The passive recognition rule',
      text: `Know these patterns: (1) a falling accent (ȁ, ȃ) can stand only on the first syllable; (2) a rising accent (à, á) never stands on a one-syllable word; (3) if two words look identical in text but sound different — grad (city) and grad (hail) — the accent is telling them apart.`,
    },
  ],
  tips: [
    {
      icon: '🎵',
      text: 'Croatian songs carry the rhythm of the language — your ear absorbs the patterns through music.',
    },
    {
      icon: '📻',
      text: 'HRT radio newsreaders use careful standard pronunciation. Listen for 10 minutes a day and the patterns sink in.',
    },
    {
      icon: '🔄',
      text: "Shadowing works: play a Croatian sentence, pause, repeat it back immediately. Don't think — just mimic the melody.",
    },
    {
      icon: '📝',
      text: 'When learning a new word, look up its pitch accent notation in a Croatian dictionary (rječnik). The best free one is hjp.znanje.hr.',
    },
  ],
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function PitchAccentMastery({
  goBack,
  award,
}: {
  goBack: () => void;
  award?: (pts: number, celebrate?: boolean, activityType?: string) => void;
}) {
  const { setStats, writeDelta } = useStats();
  const [phase, setPhase] = useState('intro'); // intro | lesson | practical | done | gate-failed
  const [accentIdx, setAccentIdx] = useState(0);
  const [lessonPhase, setLessonPhase] = useState('theory'); // theory | examples | pairs | quiz
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizSelected, setQuizSelected] = useState(-1);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [_completedAccents, setCompletedAccents] = useState(new Set());
  const awardFired = useRef(false);
  // Cumulative across all four accent quizzes — `quizScore` resets per accent.
  const courseCorrect = useRef(0);
  const courseTotal = useRef(0);

  const accent = ACCENTS[accentIdx]!;

  useEffect(() => {
    knightSpeak(
      'thinking',
      "Croatian pitch accent — one of Europe's last living tonal systems. Most learners never study this. You're about to go deeper than 99% of Croatian students. 🎵",
      800,
    );
  }, []);

  function nextAccent() {
    // Accumulate the COURSE score. `quizScore` is per-accent and is reset three
    // lines below, so before this there was no cumulative measure at all — which
    // is why `finishCourse` paid a flat 40 XP and wrote the `pitch_accent` path
    // key regardless of how the four quizzes went. Counted here, at the one
    // place an accent's quiz is finished (`nextQuiz` is the only caller).
    courseCorrect.current += quizScore;
    courseTotal.current += accent.quiz.length;
    setCompletedAccents((prev) => new Set([...prev, accent.id]));
    if (accentIdx < ACCENTS.length - 1) {
      setAccentIdx((i) => i + 1);
      setLessonPhase('theory');
      setQuizIdx(0);
      setQuizSelected(-1);
      setQuizAnswered(false);
      setQuizScore(0);
    } else {
      setPhase('practical');
    }
  }

  function handleQuizAnswer(optIdx: number) {
    if (quizAnswered) return;
    const correct = accent.quiz[quizIdx]!.opts[optIdx]! === accent.quiz[quizIdx]!.correct;
    setQuizSelected(optIdx);
    setQuizAnswered(true);
    if (correct) setQuizScore((s) => s + 1);
  }

  function nextQuiz() {
    if (quizIdx < accent.quiz.length - 1) {
      setQuizIdx((i) => i + 1);
      setQuizSelected(-1);
      setQuizAnswered(false);
    } else {
      // Finished all quiz questions for this accent
      knightSpeak(
        quizScore >= accent.quiz.length - 1 ? 'celebrating' : 'encouraged',
        quizScore >= accent.quiz.length - 1
          ? `Savršeno! You\'ve mastered the ${accent.nameEn} accent. ${accentIdx < ACCENTS.length - 1 ? 'On to the next one!' : 'Almost there!'} 🌟`
          : `Dobro! ${quizScore}/${accent.quiz.length} — review the examples and it\'ll click. 💪`,
        300,
      );
      nextAccent();
    }
  }

  function finishCourse() {
    // Gate credit on the SHARED threshold (owner decision, 2026-09-16), against
    // the CUMULATIVE course score rather than the last accent's — the four
    // quizzes are the only thing this course measures, and `quizScore` alone
    // would judge a whole course on its final section.
    if (!passedLesson(courseCorrect.current, courseTotal.current)) {
      setPhase('gate-failed');
      return;
    }
    if (!awardFired.current) {
      awardFired.current = true;
      if (typeof award === 'function') award(40, false, 'pronunciation');
      markQuest('grammar');
      // Write the vs key so this node (lp_pitch_mastery: ckRule vsIncludes
      // 'pitch_accent') completes from the screen's OWN credit. Previously only the
      // black-hole dwell wrote 'pitch_accent' — which also added a second gc, so the
      // screen's gc + dwell gc double-counted. Dwell removed. gc bump stays gated by
      // the awardFired ref (once per completion, as before); vs union is idempotent.
      setStats((s) => ({
        ...s,
        gc: s.gc + 1,
        vs: s.vs?.includes('pitch_accent') ? s.vs : [...(s.vs || []), 'pitch_accent'],
      }));
      writeDelta({ gc: 1, vs: ['pitch_accent'] });
      knightSpeak(
        'victory',
        'Nevjerojatno! You completed the Croatian Pitch Accent course. You now know something most Croatian textbooks never teach. Čestitam! 🏆',
        400,
      );
    }
    setPhase('done');
  }

  // ── GATE FAILED ────────────────────────────────────────────────────────────
  // The course quizzes did not reach the shared threshold, so nothing is
  // recorded. Retry restarts the accents AND the cumulative counters, so a
  // second run is judged on its own answers rather than on both attempts.
  if (phase === 'gate-failed')
    return (
      <div className="scr-wrap" style={{ paddingTop: 32 }}>
        <PassGateNotice
          score={courseCorrect.current}
          total={courseTotal.current}
          hint="Re-read the four accent lessons — the minimal pairs are the fastest way in."
          onRetry={() => {
            courseCorrect.current = 0;
            courseTotal.current = 0;
            setAccentIdx(0);
            setCompletedAccents(new Set());
            setLessonPhase('theory');
            setQuizIdx(0);
            setQuizSelected(-1);
            setQuizAnswered(false);
            setQuizScore(0);
            setPhase('lesson');
          }}
          onLeave={goBack}
        />
      </div>
    );

  // ── INTRO ──────────────────────────────────────────────────────────────────
  if (phase === 'intro')
    return (
      <div className="scr-wrap">
        <button className="b bg" style={{ marginBottom: 16, fontSize: 13 }} onClick={goBack}>
          ← Back
        </button>

        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: 64, marginBottom: 8 }}>🎵</div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 26,
              color: 'var(--ink-strong)',
              fontWeight: 900,
              marginBottom: 8,
            }}
          >
            Croatian Pitch Accent
          </h2>
          <p
            style={{
              fontSize: 14,
              color: 'var(--ink-muted-warm)',
              lineHeight: 1.6,
              maxWidth: 320,
              margin: '0 auto',
            }}
          >
            Croatian is one of only a handful of European languages with a living pitch accent
            system — like Japanese or Ancient Greek. No other Croatian language app teaches this.
          </p>
        </div>

        {/* Knight */}
        <div
          style={{
            display: 'flex',
            gap: 14,
            alignItems: 'flex-start',
            background: 'var(--card)',
            border: '1px solid var(--card-b)',
            borderRadius: 16,
            padding: '14px 16px',
            marginBottom: 20,
          }}
        >
          <CharacterPortrait name="kovac" size={52} />
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: 'var(--ink-mode)',
                textTransform: 'uppercase',
                letterSpacing: '.08em',
                marginBottom: 4,
              }}
            >
              prof. Kovač kaže
            </div>
            <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.6 }}>
              Pitch accent is why Croatian sounds like music to foreign ears. It&apos;s also why two
              words can be spelled identically but mean completely different things. Master this and
              your comprehension jumps a full level.
            </div>
          </div>
        </div>

        {/* The 4 accents overview */}
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 900,
              color: 'var(--ink-muted-warm)',
              textTransform: 'uppercase',
              letterSpacing: '.1em',
              marginBottom: 12,
            }}
          >
            The 4 Croatian Pitch Accents
          </div>
          {ACCENTS.map((a) => (
            <div
              key={a.id}
              style={{
                display: 'flex',
                gap: 12,
                alignItems: 'center',
                padding: '10px 14px',
                background: a.bg,
                border: `1.5px solid ${a.border}`,
                borderRadius: 12,
                marginBottom: 8,
              }}
            >
              <div style={{ fontSize: 22, flexShrink: 0 }}>{a.emoji}</div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    color: accentInk(a.color),
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    flexWrap: 'wrap',
                  }}
                >
                  {a.nameEn}{' '}
                  <span style={{ fontWeight: 500, color: 'var(--ink-muted-warm)', fontSize: 11 }}>
                    ({a.name})
                  </span>
                  <span
                    className={`cefr cefr-${(LESSON_BY_ACCENT[a.id as keyof typeof LESSON_BY_ACCENT]?.cefr ?? 'B1').toLowerCase()}`}
                  >
                    {LESSON_BY_ACCENT[a.id as keyof typeof LESSON_BY_ACCENT]?.cefr ?? 'B1'}
                  </span>
                </div>
                <div style={{ fontSize: 11, color: 'var(--ink-muted-warm)', marginTop: 1 }}>
                  {a.rule}
                </div>
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  color: accentInk(a.color),
                  fontFamily: 'monospace',
                  flexShrink: 0,
                }}
              >
                {a.symbol}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            background: 'var(--grad-gold)',
            border: '1px solid #fcd34d',
            borderRadius: 14,
            padding: '12px 16px',
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 900,
              color: 'var(--ink-warn)',
              textTransform: 'uppercase',
              letterSpacing: '.08em',
              marginBottom: 6,
            }}
          >
            What you&apos;ll learn
          </div>
          {[
            'How each of the 4 accents sounds and feels',
            'Minimal pairs — identical words with different meanings',
            'Regional variation (Dalmatia vs Zagreb vs HRT standard)',
            'Practical rules: what actually matters for comprehension',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
              <span style={{ color: '#d97706', fontWeight: 800, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 12, color: 'var(--ink-warn)' }}>{item}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setPhase('lesson')}
          style={{
            width: '100%',
            padding: '15px 20px',
            background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
            color: '#fff',
            border: 'none',
            borderRadius: 16,
            fontSize: 16,
            fontWeight: 900,
            cursor: 'pointer',
            fontFamily: "'Outfit',sans-serif",
            boxShadow: '0 6px 20px rgba(124,58,237,.35)',
          }}
        >
          Start Course → 4 Lessons
        </button>
      </div>
    );

  // ── LESSON ────────────────────────────────────────────────────────────────
  if (phase === 'lesson') {
    const currentQ = accent.quiz[quizIdx];

    return (
      <div className="scr-wrap">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <button
            onClick={() => {
              lessonPhase === 'theory' ? setPhase('intro') : setLessonPhase('theory');
            }}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 13,
              color: 'var(--subtext)',
              cursor: 'pointer',
              fontFamily: "'Outfit',sans-serif",
              fontWeight: 700,
              padding: '4px 0',
            }}
          >
            ← Back
          </button>
          <div style={{ flex: 1 }}>
            {/* Progress dots */}
            <div style={{ display: 'flex', gap: 6 }}>
              {ACCENTS.map((a, i) => (
                <div
                  key={a.id}
                  style={{
                    height: 4,
                    flex: 1,
                    borderRadius: 2,
                    background:
                      i < accentIdx ? '#16a34a' : i === accentIdx ? accent.color : 'var(--card-b)',
                    transition: 'background .3s',
                  }}
                />
              ))}
            </div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--subtext)' }}>
            {accentIdx + 1}/{ACCENTS.length}
          </div>
        </div>

        {/* Accent identity card */}
        <div
          style={{
            background: accent.bg,
            border: `2px solid ${accent.border}`,
            borderRadius: 20,
            padding: '18px 20px',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 48 }}>{accent.emoji}</div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: accentInk(accent.color),
              fontFamily: 'monospace',
              letterSpacing: '.05em',
              marginBottom: 4,
            }}
          >
            {accent.symbol}
          </div>
          <div style={{ fontSize: 20, fontWeight: 900, color: accentInk(accent.color) }}>
            {accent.nameEn}
          </div>
          <div
            style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-muted-warm)', marginTop: 2 }}
          >
            {accent.name}
          </div>
          <div
            style={{
              marginTop: 10,
              padding: '8px 16px',
              background: 'var(--card)',
              borderRadius: 12,
              display: 'inline-block',
              fontSize: 12,
              fontWeight: 700,
              color: accentInk(accent.color),
            }}
          >
            {accent.rule}
          </div>
        </div>

        {/* Sub-navigation pills */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
          {[
            { id: 'theory', label: '📖 Theory' },
            { id: 'examples', label: '🔊 Examples' },
            { id: 'pairs', label: '⚔️ Pairs' },
            { id: 'quiz', label: '🎯 Quiz' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setLessonPhase(tab.id)}
              style={{
                flex: 1,
                padding: '8px 4px',
                border: `1px solid ${lessonPhase === tab.id ? accent.color : 'var(--card-b)'}`,
                borderRadius: 10,
                background: lessonPhase === tab.id ? accentFill(accent.color) : 'var(--card)',
                color: lessonPhase === tab.id ? '#fff' : 'var(--subtext)',
                fontWeight: 700,
                fontSize: 11,
                cursor: 'pointer',
                transition: 'all .2s',
                fontFamily: "'Outfit',sans-serif",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* THEORY */}
        {lessonPhase === 'theory' &&
          (() => {
            const lesson = (
              LESSON_BY_ACCENT as Record<
                string,
                (typeof LESSON_BY_ACCENT)[keyof typeof LESSON_BY_ACCENT]
              >
            )[accent.id];
            return (
              <div>
                <div
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--card-b)',
                    borderRadius: 16,
                    padding: '16px',
                    marginBottom: 12,
                    fontSize: 14,
                    color: 'var(--text)',
                    lineHeight: 1.8,
                  }}
                >
                  {(lesson?.theory || accent.desc).split('\n\n').map((para: string, i: number) => (
                    <p key={i} style={{ margin: i === 0 ? 0 : '12px 0 0' }}>
                      {para}
                    </p>
                  ))}
                </div>
                {(lesson?.keyPoints?.length ?? 0) > 0 && (
                  <div
                    style={{
                      background: `${accent.bg}`,
                      border: `1px solid ${accent.border}`,
                      borderRadius: 14,
                      padding: '14px 16px',
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 900,
                        color: accentInk(accent.color),
                        textTransform: 'uppercase',
                        letterSpacing: '.08em',
                        marginBottom: 10,
                      }}
                    >
                      Key Points
                    </div>
                    {lesson?.keyPoints?.map((pt: string, i: number) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          gap: 10,
                          marginBottom: i < (lesson?.keyPoints?.length ?? 0) - 1 ? 8 : 0,
                          alignItems: 'flex-start',
                        }}
                      >
                        <div
                          style={{
                            fontSize: 14,
                            color: accentInk(accent.color),
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        >
                          •
                        </div>
                        <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.55 }}>
                          {pt}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => setLessonPhase('examples')}
                  style={{
                    width: '100%',
                    padding: '13px',
                    background: accentFill(accent.color),
                    color: '#fff',
                    border: 'none',
                    borderRadius: 14,
                    fontSize: 15,
                    fontWeight: 800,
                    cursor: 'pointer',
                    fontFamily: "'Outfit',sans-serif",
                  }}
                >
                  Hear Examples →
                </button>
              </div>
            );
          })()}

        {/* EXAMPLES */}
        {lessonPhase === 'examples' && (
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 900,
                color: 'var(--ink-muted-warm)',
                textTransform: 'uppercase',
                letterSpacing: '.08em',
                marginBottom: 12,
              }}
            >
              Tap to hear each word
            </div>
            {accent.examples.map((ex, i) => (
              <button
                key={i}
                onClick={() => speak(ex.audio)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  background: 'var(--card)',
                  border: `1.5px solid var(--card-b)`,
                  borderLeft: `4px solid ${accent.color}`,
                  borderRadius: 14,
                  padding: '14px 16px',
                  marginBottom: 10,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <div style={{ fontSize: 26, flexShrink: 0 }}>🔊</div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 900,
                      color: accentInk(accent.color),
                      fontFamily: "'Playfair Display',serif",
                    }}
                  >
                    {ex.hr}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--subtext)', fontWeight: 600 }}>
                    {ex.en}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: 'var(--subtext)',
                      marginTop: 3,
                      fontStyle: 'italic',
                    }}
                  >
                    {ex.tip}
                  </div>
                </div>
              </button>
            ))}
            <button
              onClick={() => setLessonPhase('pairs')}
              style={{
                width: '100%',
                padding: '13px',
                background: accentFill(accent.color),
                color: '#fff',
                border: 'none',
                borderRadius: 14,
                fontSize: 15,
                fontWeight: 800,
                cursor: 'pointer',
                fontFamily: "'Outfit',sans-serif",
                marginTop: 8,
              }}
            >
              Minimal Pairs →
            </button>
          </div>
        )}

        {/* MINIMAL PAIRS */}
        {lessonPhase === 'pairs' && (
          <div>
            <div
              style={{
                background: 'var(--card)',
                border: '1px solid var(--card-b)',
                borderRadius: 14,
                padding: '12px 16px',
                marginBottom: 16,
                fontSize: 12,
                color: 'var(--subtext)',
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: 'var(--heading)' }}>Minimal pairs</strong> are words that look
              identical in everyday text but have different pitch accents — and therefore different
              meanings. Croatian accent marks are only used in dictionaries and linguistic texts, so
              spoken context is crucial.{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--ink-warn)' }}>
                Audio uses an approximate synthesized pitch contour — not a native recording, but
                acoustically distinct between the two members.
              </span>
            </div>
            {accent.pairs.map((pair, i) => (
              <div
                key={i}
                data-testid={`pair-card-${accent.id}-${i}`}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--card-b)',
                  borderRadius: 16,
                  padding: '16px',
                  marginBottom: 12,
                }}
              >
                <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
                  <button
                    data-testid={`pair-member-a-${accent.id}-${i}`}
                    onClick={() =>
                      speakProsody(
                        pair.a.audio,
                        ACCENT_PROSODY[
                          (pair.a as { accentId?: string }).accentId ?? 'kratkosilazni'
                        ] ?? ACCENT_PROSODY.kratkosilazni!,
                      )
                    }
                    style={{
                      flex: 1,
                      padding: '14px 10px',
                      background: accent.bg,
                      border: `2px solid ${accent.border}`,
                      borderRadius: 12,
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 22,
                        fontWeight: 900,
                        color: accentInk(accent.color),
                        fontFamily: "'Playfair Display',serif",
                      }}
                    >
                      {pair.a.hr}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--ink-muted-warm)', marginTop: 3 }}>
                      {pair.a.en}
                    </div>
                    <div style={{ fontSize: 18, marginTop: 4 }}>🔊</div>
                  </button>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: 900,
                      color: 'var(--ink-muted-warm)',
                      fontSize: 20,
                    }}
                  >
                    vs
                  </div>
                  <button
                    data-testid={`pair-member-b-${accent.id}-${i}`}
                    onClick={() =>
                      speakProsody(
                        pair.b.audio,
                        ACCENT_PROSODY[
                          (pair.b as { accentId?: string }).accentId ?? 'kratkouzlazni'
                        ] ?? ACCENT_PROSODY.kratkouzlazni!,
                      )
                    }
                    style={{
                      flex: 1,
                      padding: '14px 10px',
                      background: 'var(--card)',
                      border: '2px solid var(--card-b)',
                      borderRadius: 12,
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 22,
                        fontWeight: 900,
                        color: 'var(--heading)',
                        fontFamily: "'Playfair Display',serif",
                      }}
                    >
                      {pair.b.hr}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--ink-muted-warm)', marginTop: 3 }}>
                      {pair.b.en}
                    </div>
                    <div style={{ fontSize: 18, marginTop: 4 }}>🔊</div>
                  </button>
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: 'var(--subtext)',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                    padding: '8px 12px',
                    background: 'var(--surface-mute)',
                    borderRadius: 8,
                  }}
                >
                  {pair.note}
                </div>
              </div>
            ))}
            <button
              onClick={() => {
                setLessonPhase('quiz');
                setQuizIdx(0);
                setQuizSelected(-1);
                setQuizAnswered(false);
                setQuizScore(0);
              }}
              style={{
                width: '100%',
                padding: '13px',
                background: accentFill(accent.color),
                color: '#fff',
                border: 'none',
                borderRadius: 14,
                fontSize: 15,
                fontWeight: 800,
                cursor: 'pointer',
                fontFamily: "'Outfit',sans-serif",
                marginTop: 8,
              }}
            >
              Take the Quiz →
            </button>
          </div>
        )}

        {/* QUIZ */}
        {lessonPhase === 'quiz' && currentQ && (
          <div>
            {/* Progress */}
            <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
              {accent.quiz.map((_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: 4,
                    borderRadius: 2,
                    background:
                      i < quizIdx ? '#16a34a' : i === quizIdx ? accent.color : 'var(--card-b)',
                  }}
                />
              ))}
            </div>

            <div
              style={{
                background: 'var(--card)',
                border: '1px solid var(--card-b)',
                borderRadius: 16,
                padding: '18px 16px',
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: accentInk(accent.color),
                  textTransform: 'uppercase',
                  letterSpacing: '.08em',
                  marginBottom: 8,
                }}
              >
                Question {quizIdx + 1} of {accent.quiz.length}
              </div>
              <div
                style={{ fontSize: 16, fontWeight: 800, color: 'var(--heading)', lineHeight: 1.5 }}
              >
                {currentQ.q}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
              {currentQ.opts.map((opt, i) => {
                const isCorrect = opt === currentQ.correct;
                const isSelected = quizSelected === i;
                let bg = 'var(--card)',
                  border = '1.5px solid var(--card-b)',
                  color = 'var(--text)';
                if (quizAnswered) {
                  if (isCorrect) {
                    bg = 'var(--success-bg)';
                    border = '2px solid #16a34a';
                    color = '#166534';
                  } else if (isSelected && !isCorrect) {
                    bg = 'var(--error-bg)';
                    border = '2px solid #dc2626';
                    color = '#9b1c1c';
                  }
                }
                return (
                  <button
                    key={i}
                    onClick={() => handleQuizAnswer(i)}
                    disabled={quizAnswered}
                    style={{
                      padding: '14px 16px',
                      background: bg,
                      border,
                      borderRadius: 12,
                      textAlign: 'left',
                      fontSize: 14,
                      fontWeight: 600,
                      color,
                      cursor: quizAnswered ? 'default' : 'pointer',
                      fontFamily: "'Outfit',sans-serif",
                      transition: 'all .2s',
                    }}
                  >
                    {quizAnswered && isCorrect && '✓ '}
                    {quizAnswered && isSelected && !isCorrect && '✗ '}
                    {opt}
                  </button>
                );
              })}
            </div>

            {quizAnswered && (
              <button
                onClick={nextQuiz}
                style={{
                  width: '100%',
                  padding: '13px',
                  background: accentFill(accent.color),
                  color: '#fff',
                  border: 'none',
                  borderRadius: 14,
                  fontSize: 15,
                  fontWeight: 800,
                  cursor: 'pointer',
                  fontFamily: "'Outfit',sans-serif",
                }}
              >
                {quizIdx < accent.quiz.length - 1
                  ? 'Next Question →'
                  : accentIdx < ACCENTS.length - 1
                    ? `Next Accent: ${ACCENTS[accentIdx + 1]!.nameEn} →`
                    : 'Final Section →'}
              </button>
            )}
          </div>
        )}
      </div>
    );
  }

  // ── PRACTICAL ────────────────────────────────────────────────────────────
  if (phase === 'practical')
    return (
      <div className="scr-wrap">
        <button
          className="b bg"
          style={{ marginBottom: 16, fontSize: 13 }}
          onClick={() => setPhase('lesson')}
        >
          ← Back
        </button>

        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ fontSize: 48 }}>{PRACTICAL.emoji}</div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 22,
              color: 'var(--ink-strong)',
              fontWeight: 900,
              marginBottom: 4,
            }}
          >
            {PRACTICAL.title}
          </h2>
          <p style={{ fontSize: 13, color: 'var(--ink-muted-warm)' }}>{PRACTICAL.subtitle}</p>
        </div>

        {PRACTICAL.sections.map((s, i) => (
          <div
            key={i}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--card-b)',
              borderLeft: `4px solid #7c3aed`,
              borderRadius: 14,
              padding: '14px 16px',
              marginBottom: 12,
            }}
          >
            <div
              style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink-mode)', marginBottom: 6 }}
            >
              {s.heading}
            </div>
            <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.7 }}>{s.text}</div>
          </div>
        ))}

        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 900,
              color: 'var(--ink-muted-warm)',
              textTransform: 'uppercase',
              letterSpacing: '.08em',
              marginBottom: 10,
            }}
          >
            Practical Tips
          </div>
          {PRACTICAL.tips.map((t, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: 12,
                padding: '10px 14px',
                background: 'var(--mode-bg)',
                border: '1px solid #ddd6fe',
                borderRadius: 12,
                marginBottom: 8,
              }}
            >
              <span style={{ fontSize: 22, flexShrink: 0 }}>{t.icon}</span>
              <span style={{ fontSize: 13, color: 'var(--ink-body)', lineHeight: 1.6 }}>
                {t.text}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={finishCourse}
          style={{
            width: '100%',
            padding: '15px 20px',
            background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
            color: '#fff',
            border: 'none',
            borderRadius: 16,
            fontSize: 16,
            fontWeight: 900,
            cursor: 'pointer',
            fontFamily: "'Outfit',sans-serif",
            boxShadow: '0 6px 20px rgba(124,58,237,.35)',
          }}
        >
          Complete Course → +40 XP
        </button>
      </div>
    );

  // ── DONE ─────────────────────────────────────────────────────────────────
  return (
    <div className="scr-wrap" style={{ textAlign: 'center', paddingTop: 40 }}>
      <div style={{ fontSize: 80, marginBottom: 16 }}>🏆</div>
      <h2
        style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: 26,
          color: 'var(--ink-strong)',
          fontWeight: 900,
          marginBottom: 8,
        }}
      >
        Course Complete!
      </h2>
      <p
        style={{
          fontSize: 14,
          color: 'var(--ink-muted-warm)',
          lineHeight: 1.6,
          maxWidth: 300,
          margin: '0 auto 24px',
        }}
      >
        You&apos;ve mastered Croatian pitch accent theory — something most learners never study.
        Your listening comprehension just leveled up.
      </p>
      <div
        style={{
          background: 'var(--grad-violet)',
          border: '2px solid #c4b5fd',
          borderRadius: 20,
          padding: '20px',
          marginBottom: 24,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {ACCENTS.map((a) => (
            <div key={a.id} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28 }}>{a.emoji}</div>
              <div
                style={{ fontSize: 10, fontWeight: 800, color: accentInk(a.color), marginTop: 2 }}
              >
                {a.nameEn.split('-')[0]}
              </div>
              <div style={{ fontSize: 18, color: 'var(--ink-green)', fontWeight: 900 }}>✓</div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={goBack} className="b bp" style={{ width: '100%' }}>
        Continue →
      </button>
    </div>
  );
}
